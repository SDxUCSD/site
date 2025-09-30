"use client";

import Link from "next/link";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { ExternalLink } from 'lucide-react';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white ${spaceMono.className}`}>
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-3 sm:gap-4">
          
          {!isHomePage ? (
            <Link href="/" className="text-sm sm:text-lg font-bold">
              SDx@UCSD
            </Link>
          ) : (
            <div className="text-sm sm:text-lg font-bold invisible">SDx@UCSD</div>
          )}
        </div>

        <nav className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
   
   <Link href="/gallery" className={`hover:underline transition-all ${pathname === '/gallery' ? 'underline' : ''}`}>
     gallery
   </Link>

   <Link href="/projects" className={`hover:underline transition-all ${pathname === '/projects' ? 'underline' : ''}`}>
     projects
   </Link>
   <span className="flex items-center gap-1">
   <a href="https://luma.com/sdx-uc-san-diego?" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
     events
   </a> <ExternalLink className="w-4 ml-1 h-4" />
   </span>
   {/* <Link href="/about" className="hover:underline transition-all">
     about
   </Link> */}
 </nav>
      </div>
    </header>
  );
}