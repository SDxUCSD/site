import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className={`bg-zinc-900 border-t border-zinc-800 py-8 px-4 ${spaceMono.className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-2">SDx@UCSD</h3>
            <p className="text-zinc-400 text-sm">
              The community for technologists, creatives, and builders at UCSD
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://www.instagram.com/sdxucsd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/104974111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://discord.gg/GTR9Q3XR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href="https://github.com/SDxUCSD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://luma.com/sdx-uc-san-diego"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              lu.ma
            </a>
          </div>

          <div className="text-zinc-500 text-xs text-center">
            © 2024 SDx@UCSD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}