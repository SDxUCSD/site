"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// === Easy knobs ===
const SPEED_WORDS_PER_SEC = 10;            // overall reveal pace (set lower for slower, higher for faster)
const FLICKER_FPS = 12;                     // glyph scramble refresh while unrevealed
const LINE_HEIGHT_CLASS = "leading-normal"; // line spacing

// Lines must exactly match your intended layout between <br/> tags
const LINES = [
  "the community for",
  "technologists,",
  "creatives, and",
  "builders",
  "at UCSD",
];

// Compute [start,end) ranges for each word in the flattened target string
function getWordRanges(target: string) {
  const ranges: Array<[number, number]> = [];
  let i = 0;
  while (i < target.length) {
    while (i < target.length && (target[i] === " " || target[i] === "\n")) i++;
    if (i >= target.length) break;
    const start = i;
    while (i < target.length && target[i] !== " " && target[i] !== "\n") i++;
    ranges.push([start, i]);
  }
  return ranges;
}

function shuffle<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useHackerRevealWordByWord(
  lines: string[],
  opts?: { wordsPerSecond?: number; flickerFps?: number; charset?: string }
) {
  const { wordsPerSecond = 1.0, flickerFps = 12, charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%*+-=<>_" } =
    opts || {};

  const target = useMemo(() => lines.join("\n"), [lines]);
  const glyphs = useMemo(() => Array.from(charset), [charset]);

  const wordRanges = useMemo(() => getWordRanges(target), [target]);
  const order = useMemo(() => shuffle(Array.from({ length: wordRanges.length }, (_, i) => i)), [wordRanges.length]);

  // Revealed mask lives in a ref to avoid GC churn; a simple version tick triggers rerenders
  const revealedRef = useRef<Uint8Array>(new Uint8Array(target.length));
  const [version, setVersion] = useState(0);

  useEffect(() => {
    // reset on target change
    revealedRef.current = new Uint8Array(target.length);
    setVersion((v) => v + 1);
  }, [target]);

  useEffect(() => {
    let idx = 0; // which word in the randomized order
    const period = 1 / Math.max(0.1, wordsPerSecond);
    let acc = period; // start primed so we reveal on the very first frame (removes initial pause)
    let last = performance.now();
    let lastFlicker = last;
    let raf = 0;

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      acc += dt;

      let updated = false;
      while (acc >= period && idx < order.length) {
        acc -= period;
        const [s, e] = wordRanges[order[idx++]];
        const mask = revealedRef.current;
        for (let k = s; k < e; k++) mask[k] = 1;
        updated = true;
      }

      // Throttle re-render: on update OR at flicker fps while not done
      const done = idx >= order.length;
      const needFlicker = !done && now - lastFlicker >= 1000 / Math.max(1, flickerFps);
      if (updated || needFlicker) {
        lastFlicker = now;
        setVersion((v) => v + 1);
      }

      if (!done) raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [order, wordRanges, wordsPerSecond, flickerFps]);

  // Build display string from mask; unrevealed glyphs scramble each render
  const displays = useMemo(() => {
    const out: string[] = [];
    const mask = revealedRef.current;
    for (let i = 0; i < target.length; i++) {
      const c = target[i];
      if (c === " " || c === "\n") {
        out.push(c);
      } else if (mask[i]) {
        out.push(c);
      } else {
        out.push(glyphs[Math.floor(Math.random() * glyphs.length)]);
      }
    }
    return out.join("").split("\n");
  }, [target, glyphs, version]);

  return displays;
}

export default function Mission() {
  const displays = useHackerRevealWordByWord(LINES, {
    wordsPerSecond: SPEED_WORDS_PER_SEC,
    flickerFps: FLICKER_FPS,
  });

  return (
    <div
      className={`absolute flex top-2 gap-2 right-2 flex-col text-white text-sm text-right ${spaceMono.className}`}
      suppressHydrationWarning
    >
      <pre className={`font-mono whitespace-pre select-none m-0 p-0 ${LINE_HEIGHT_CLASS}`}>
        {displays.join("\n")}
      </pre>
    </div>
  );
}
