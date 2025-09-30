import { Space_Mono } from "next/font/google";
import { InstagramIcon, LinkedInIcon, DiscordIcon, GitHubIcon, EmailIcon } from "./SocialIcons";
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
      <div className="text-center px-4 ">
        <p className="text-sm sm:text-base md:text-lg mb-2 max-w-4xl font-bold">
          the home for UCSD's most ambitious hackers, founders, and creators.
        </p>
        <p className="text-sm sm:text-base md:text-lg max-w-4xl mt-6">
          We host regular hack-days and co-working sessions, hold talks with startup founders and VCs, and provide access to other students building on the forefront of AI. Any UCSD student interested in technology is welcome to join.
        </p>
        <p className="text-sm sm:text-base md:text-lg max-w-4xl mt-6">
          SDx @ UCSD is a chapter of the broader <a href="https://sdx.community" className="underline hover:text-zinc-300 transition-colors">SDx community</a>, a network of students and professionals dedicated to building the future of technology.
        </p>
      </div>
      <div className="flex flex-row gap-4">
      <PixelatedButton text={"UPCOMING EVENTS"} href="https://luma.com/sdx-uc-san-diego"/>
      <PixelatedButton text={"PAST EVENTS"} href="/gallery"/>
      </div>
      <div className="flex justify-center gap-6 px-4">
        
      <a
          href="https://discord.gg/GTR9Q3XR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-zinc-300 transition-colors "
          aria-label="Discord"
        >
          <DiscordIcon className="w-7 h-7" />
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
          href="mailto:hello@sdxucsd.com"
          className="text-white hover:text-zinc-300 -mt-[3px] transition-colors "
          aria-label="Email"
        >
          <EmailIcon className="w-[29px] " />
        </a>
      </div>
      
          
    </div>
  );
}
