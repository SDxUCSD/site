import { Space_Mono } from "next/font/google";
import { InstagramIcon, LinkedInIcon, DiscordIcon, GitHubIcon } from "./SocialIcons";
import PixelatedButton from "./PixelatedButton";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CenteredInfo() {
  return (
    <div
      className={`flex flex-col items-center gap-8 text-white ${spaceMono.className}`}
    >
      <div className="text-center px-4">
        <p className="text-sm sm:text-base md:text-lg font-bold mb-2">SDxUCSD is the premier community of builders at UCSD dedicated to helping hackers and creators win.

</p>
        {/* <p className="text-base">
          the community for technologists, creatives, and builders at UCSD
          <br />
        </p> */}
      </div>
      <PixelatedButton />
      <div className="flex justify-center gap-6 px-4">
        
      <a
          href="https://discord.gg/GTR9Q3XR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-zinc-300 transition-colors "
          aria-label="Discord"
        >
          <DiscordIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/sdxucsd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-zinc-300 transition-colors "
          aria-label="Instagram"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/104974111"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-zinc-300 transition-colors "
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-6 h-6" />
        </a>
  
        <a
          href="https://github.com/SDxUCSD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-zinc-300 transition-colors "
          aria-label="GitHub"
        >
          <GitHubIcon className="w-6 h-6" />
        </a>
      </div>
      
          
    </div>
  );
}