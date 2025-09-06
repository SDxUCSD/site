"use client";

import { useEffect, useMemo, useState } from "react";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type AsciiOpts = {
  text: string;
  fontFamily: string;   // default "Space Mono" but can be any loaded font
  fontWeight: number | string; // e.g., 400 | 700
  fontSizePx: number;   // large px size to rasterize, e.g., 220
  lineHeight: number;   // line height multiplier for canvas layout, e.g., 1.0–1.2
  sampleW: number;      // sampling cell width in px (smaller = higher granularity)
  sampleH: number;      // sampling cell height in px
  threshold: number;    // 0..255 luminance threshold
  fillChar: string;     // usually "#"
  emptyChar: string;    // usually " "
  letterSpacingPx: number; // extra spacing on canvas between letters (helps bold)
};

async function rasterToAscii({
  text,
  fontFamily,
  fontWeight,
  fontSizePx,
  lineHeight,
  sampleW,
  sampleH,
  threshold,
  fillChar,
  emptyChar,
  letterSpacingPx,
}: AsciiOpts): Promise<string> {
  try {
    await (document as any).fonts.load(`${fontWeight} ${fontSizePx}px "${fontFamily}"`);
  } catch {}

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return "";

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

  // Draw text in solid white on black for clear thresholding
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.font = `${fontWeight} ${fontSizePx}px "${fontFamily}"`;
  ctx.textBaseline = "top";
  ctx.imageSmoothingEnabled = false;

  lines.forEach((ln, i) => {
    // manual letter spacing by drawing char-by-char if requested
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

  // Sample into ASCII grid
  const cols = Math.floor(width / sampleW);
  const rows = Math.floor(height / sampleH);
  const out: string[] = new Array(rows);

  for (let yCell = 0; yCell < rows; yCell++) {
    let line = "";
    const y0 = yCell * sampleH;
    for (let xCell = 0; xCell < cols; xCell++) {
      const x0 = xCell * sampleW;

      // Aggregate luminance in the sampling cell
      let acc = 0;
      let cnt = 0;
      for (let dy = 0; dy < sampleH; dy++) {
        for (let dx = 0; dx < sampleW; dx++) {
          const x = x0 + dx;
          const y = y0 + dy;
          const idx = (y * width + x) * 4;
          // luminance from RGB
          const r = img[idx], g = img[idx + 1], b = img[idx + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          acc += lum;
          cnt++;
        }
      }
      const avg = acc / cnt;
      line += avg >= threshold ? fillChar : emptyChar;
    }
    out[yCell] = line;
  }

  // Trim empty rows/cols for a tighter box
  let top = 0, bottom = rows - 1, left = 0, right = cols - 1;

  // top
  while (top < rows && out[top].trim().length === 0) top++;
  // bottom
  while (bottom >= 0 && out[bottom].trim().length === 0) bottom--;
  // left/right
  const colEmpty = (c: number) => out.every((row, r) => r < top || r > bottom || row[c] === emptyChar);
  while (left < cols && colEmpty(left)) left++;
  while (right >= 0 && colEmpty(right)) right--;

  const cropped = out.slice(top, bottom + 1).map((row) => row.slice(left, right + 1));
  return cropped.join("\n");
}

export default function TextComponent() {
  const [ascii, setAscii] = useState<string>("");

  const opts: AsciiOpts = useMemo(
    () => ({
      text: "SDxUCSD",   
      fontFamily: "Space Mono",
      fontWeight: 700,
      fontSizePx: 80,   
      lineHeight: 1.0,
      sampleW: 2,       
      sampleH: 3,
      threshold: 60,     
      fillChar: "#",
      emptyChar: " ",
      letterSpacingPx: 0,   // try 2–6 to embolden if desired
    }),
    []
  );

  useEffect(() => {
    let alive = true;
    rasterToAscii(opts).then((txt) => {
      if (alive) setAscii(txt);
    });
    return () => { alive = false; };
  }, [opts]);

  return (
    <div className="text-white select-none cursor-default">
      {/* Render the ASCII with Space Mono applied to the text itself */}
      <pre className={`${spaceMono.className} leading-[0.9] text-[10px]`}>
        {ascii}
      </pre>
    </div>
  );
}
