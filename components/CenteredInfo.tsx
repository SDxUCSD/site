import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CenteredInfo() {
  return (
    <div
      className={`flex flex-col items-center gap-8 text-white ${spaceMono.className}`}
    >
      <div className="text-center">
        <p className="text-lg font-bold mb-2">the community for technologists, creatives, and builders at UCSD</p>
        {/* <p className="text-base">
          the community for technologists, creatives, and builders at UCSD
          <br />
        </p> */}
      </div>

      <div className="flex gap-6 text-sm">
        <a
          href="https://www.instagram.com/sdxucsd/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all hover:scale-110"
        >
          instagram
        </a>
        <a
          href="https://www.linkedin.com/company/104974111"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all hover:scale-110"
        >
          linkedin
        </a>
        <a
          href="https://discord.gg/GTR9Q3XR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all hover:scale-110"
        >
          discord
        </a>
        <a
          href="https://github.com/SDxUCSD"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all hover:scale-110"
        >
          github
        </a>
        <a
          href="https://luma.com/sdx-uc-san-diego"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all hover:scale-110"
        >
          lu.ma
        </a>
      </div>
    </div>
  );
}