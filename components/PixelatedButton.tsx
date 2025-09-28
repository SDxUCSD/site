"use client";

import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Grid configuration
const BLOCK_SIZE = 12; // Size of each block in pixels
const BUTTON_WIDTH = 200;
const BUTTON_HEIGHT = 60;
const ANIMATION_DURATION = 600; // Total animation duration in ms

interface Block {
  id: number;
  x: number;
  y: number;
  delay: number;
  isAnimated: boolean;
}

export default function PixelatedButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Calculate grid and create blocks on mount
  useEffect(() => {
    const cols = Math.ceil(BUTTON_WIDTH / BLOCK_SIZE);
    const rows = Math.ceil(BUTTON_HEIGHT / BLOCK_SIZE);

    const newBlocks: Block[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newBlocks.push({
          id: row * cols + col,
          x: col * BLOCK_SIZE,
          y: row * BLOCK_SIZE,
          delay: Math.random() * ANIMATION_DURATION,
          isAnimated: false,
        });
      }
    }

    setBlocks(newBlocks);
  }, []);

  return (
    <Link
      href="/events"
      className={`relative overflow-hidden bg-black font-bold text-lg border-2 border-black ${spaceMono.className}`}
      style={{
        width: `${BUTTON_WIDTH}px`,
        height: `${BUTTON_HEIGHT}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inverted background (black) with white text - this is the target state */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <span className={`font-bold text-lg text-white ${spaceMono.className}`}>
          VIEW EVENTS
        </span>
      </div>

      {/* Grid of white blocks that will disappear to reveal the inverted state */}
      <div className="absolute inset-0 pointer-events-none">
        {blocks.map((block) => (
          <div
            key={block.id}
            className="absolute bg-white overflow-hidden"
            style={{
              left: `${block.x}px`,
              top: `${block.y}px`,
              width: `${BLOCK_SIZE}px`,
              height: `${BLOCK_SIZE}px`,
              opacity: isHovered ? 0 : 1,
              transitionDelay: isHovered ? `${block.delay}ms` : `${ANIMATION_DURATION - block.delay}ms`,
            }}
          >
            {/* Black text positioned to align with the overall button text */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                width: `${BUTTON_WIDTH}px`,
                height: `${BUTTON_HEIGHT}px`,
                left: `-${block.x}px`,
                top: `-${block.y}px`,
              }}
            >
              <span className={`font-bold text-lg text-black ${spaceMono.className}`}>
                VIEW EVENTS
              </span>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}