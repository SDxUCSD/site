import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Links() {
  return (
    <div
      className={`absolute flex top-2 gap-1 left-2 flex-col text-white text-sm ${spaceMono.className}`}
    >
      <a
        href="https://www.instagram.com/sdxucsd/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        instagram
      </a>
      <a
        href="https://www.linkedin.com/company/104974111"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        linkedin
      </a>

      <a
        href="https://discord.gg/GTR9Q3XR"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        discord
      </a>
      <a
        href="https://github.com/SDxUCSD"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        github
      </a>
      <a
        href="https://luma.com/sdx-uc-san-diego"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        lu.ma
      </a>
    </div>
  );
}
