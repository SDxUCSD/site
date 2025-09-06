"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type AsciiOpts = {
  text: string;
  fontFamily: string;
  fontWeight: number | string;
  fontSizePx: number;
  lineHeight: number;
  sampleW: number;
  sampleH: number;
  threshold: number;
  fillChar: string;
  emptyChar: string;
  letterSpacingPx: number;
};

type AnimationState = {
  baseGrid: boolean[][];
  displayGrid: string[][];
  time: number;
  dimensions: { rows: number; cols: number };
};

const CHAR_SETS = [
  [' ', '.', ':', '+', '#', '$', '@'],
];

async function rasterToAscii({
  text,
  fontFamily,
  fontWeight,
  fontSizePx,
  lineHeight,
  sampleW,
  sampleH,
  threshold,
  letterSpacingPx,
}: AsciiOpts): Promise<{ grid: boolean[][]; dimensions: { rows: number; cols: number } }> {
  try {
    await (document as any).fonts.load(`${fontWeight} ${fontSizePx}px "${fontFamily}"`);
  } catch {}

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { grid: [], dimensions: { rows: 0, cols: 0 } };

  ctx.font = `${fontWeight} ${fontSizePx}px "${fontFamily}"`;
  ctx.textBaseline = "top";

  const lines = text.split("\n");
  const metrics = lines.map((ln) => ctx.measureText(ln));
  const ascent = Math.max(...metrics.map((m) => m.actualBoundingBoxAscent || fontSizePx * 0.8));
  const descent = Math.max(...metrics.map((m) => m.actualBoundingBoxDescent || fontSizePx * 0.2));
  const linePx = (ascent + descent) * lineHeight;

  const width = Math.ceil(Math.max(...metrics.map((m) => m.width + letterSpacingPx * (text.length - 1))) + 8);
  const height = Math.ceil(linePx * lines.length + 8);

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.font = `${fontWeight} ${fontSizePx}px "${fontFamily}"`;
  ctx.textBaseline = "top";
  ctx.imageSmoothingEnabled = false;

  lines.forEach((ln, i) => {
    if (letterSpacingPx > 0) {
      let x = 0;
      for (const ch of ln) {
        ctx.fillText(ch, x, i * linePx);
        x += ctx.measureText(ch).width + letterSpacingPx;
      }
    } else {
      ctx.fillText(ln, 0, i * linePx);
    }
  });

  const img = ctx.getImageData(0, 0, width, height).data;
  const cols = Math.floor(width / sampleW);
  const rows = Math.floor(height / sampleH);
  const grid: boolean[][] = new Array(rows).fill(null).map(() => new Array(cols).fill(false));

  for (let yCell = 0; yCell < rows; yCell++) {
    const y0 = yCell * sampleH;
    for (let xCell = 0; xCell < cols; xCell++) {
      const x0 = xCell * sampleW;

      let acc = 0;
      let cnt = 0;
      for (let dy = 0; dy < sampleH; dy++) {
        for (let dx = 0; dx < sampleW; dx++) {
          const x = x0 + dx;
          const y = y0 + dy;
          const idx = (y * width + x) * 4;
          const r = img[idx], g = img[idx + 1], b = img[idx + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          acc += lum;
          cnt++;
        }
      }
      const avg = acc / cnt;
      grid[yCell][xCell] = avg >= threshold;
    }
  }

  return { grid, dimensions: { rows, cols } };
}

function createRippleEffect(
  x: number, 
  y: number, 
  time: number, 
  amplitude: number = 1.0,
  frequency: number = 0.1,
  speed: number = 0.05
): number {
  const distance = Math.sqrt(x * x + y * y);
  const wave = Math.sin(distance * frequency - time * speed);
  const falloff = Math.exp(-distance * 0.1);
  return wave * amplitude * falloff;
}

function updateAnimation(state: AnimationState): AnimationState {
  const { baseGrid, time, dimensions } = state;
  const { rows, cols } = dimensions;
  const newDisplayGrid: string[][] = new Array(rows).fill(null).map(() => new Array(cols).fill(' '));
  
  const centerX = cols / 2;
  const centerY = rows / 2;
  const chars = CHAR_SETS[0];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (!baseGrid[y] || !baseGrid[y][x]) {
        newDisplayGrid[y][x] = ' ';
        continue;
      }

      const dx = x - centerX;
      const dy = y - centerY;
      
      const fluidWave = Math.sin((dx + dy) * 0.08 - time * 0.01) * 0.2;
      const spiralMotion = Math.sin(Math.atan2(dy, dx) * 2 + time * 0.015) * 0.15;
      const breathe = Math.sin(time * 0.005) * 0.1;
      const noise = (Math.sin(dx * 0.2 + time * 0.003) + Math.cos(dy * 0.3 + time * 0.007)) * 0.05;
      
      let intensity = 0.6 + fluidWave + spiralMotion + breathe + noise;
      intensity = Math.max(0, Math.min(1, intensity));
      
      const charIndex = Math.floor(intensity * (chars.length - 1));
      newDisplayGrid[y][x] = chars[charIndex];
    }
  }

  return {
    ...state,
    displayGrid: newDisplayGrid,
    time: time + 1,
  };
}

export default function TextComponent() {
  const [animState, setAnimState] = useState<AnimationState | null>(null);
  const [shouldBreak, setShouldBreak] = useState(false);
  const [fontSize, setFontSize] = useState(80);
  const animationRef = useRef<number>();

  useEffect(() => {
    const checkScreenWidth = () => {
      const width = window.innerWidth;
      setShouldBreak(width < 1200);
      
      // Progressive scaling for smaller screens
      if (width < 600) {
        setFontSize(50);
      } else if (width < 800) {
        setFontSize(65);
      } else {
        setFontSize(80);
      }
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const opts: AsciiOpts = useMemo(
    () => ({
      text: shouldBreak ? "SDx\nUCSD" : "SDxUCSD",   
      fontFamily: "Space Mono",
      fontWeight: 700,
      fontSizePx: fontSize,   
      lineHeight: shouldBreak ? 1.2 : 1.0,
      sampleW: 2,       
      sampleH: 3,
      threshold: 60,     
      fillChar: "#",
      emptyChar: " ",
      letterSpacingPx: 0,
    }),
    [shouldBreak, fontSize]
  );

  useEffect(() => {
    let alive = true;
    rasterToAscii(opts).then(({ grid, dimensions }) => {
      if (alive && grid.length > 0) {
        const initialDisplayGrid = grid.map(row => 
          row.map(cell => cell ? '#' : ' ')
        );
        setAnimState({
          baseGrid: grid,
          displayGrid: initialDisplayGrid,
          time: 0,
          dimensions,
        });
      }
    });
    return () => { alive = false; };
  }, [opts]);

  useEffect(() => {
    if (!animState?.baseGrid) return;

    const animate = () => {
      setAnimState(prev => prev ? updateAnimation(prev) : null);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animState?.baseGrid]);

  const renderGrid = () => {
    if (!animState?.displayGrid) return '';
    
    return animState.displayGrid
      .map(row => row.join(''))
      .join('\n');
  };

  return (
    <div className="text-white select-none cursor-default">
      <pre className={`${spaceMono.className} leading-[0.9] text-[10px]`}>
        {renderGrid()}
      </pre>
    </div>
  );
}
