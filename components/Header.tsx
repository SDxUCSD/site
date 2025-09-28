"use client";

import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

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
        {!isHomePage ? (
          <Link href="/" className="text-sm sm:text-lg font-bold">
            SDx@UCSD
          </Link>
        ) : (
          <div className="text-sm sm:text-lg font-bold invisible">SDx@UCSD</div>
        )}

        <nav className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
          <Link href="/manifesto" className="hover:underline transition-all">
            manifesto
          </Link>
          <Link href="/builders" className="hover:underline transition-all">
            builders
          </Link>
          <Link href="/events" className="hover:underline transition-all">
            events
          </Link>
        </nav>
      </div>
    </header>
  );
}