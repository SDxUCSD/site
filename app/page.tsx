import Image from "next/image";
import Link from "next/link";
import TextComponent from "@/components/TextComponent";
import CenteredInfo from "@/components/CenteredInfo";
import Header from "@/components/Header";
import SponsorsBanner from "@/components/SponsorsBanner";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SDxUCSD",
    "alternateName": ["SDX UCSD", "SDx@UCSD"],
    "description": "The premier community for technologists, creatives, startup founders, and builders at UC San Diego",
    "url": "https://sdxucsd.com",
    "logo": "https://sdxucsd.com/sdx-v2.png",
    "sameAs": [
      "https://twitter.com/sdxucsd",
      "https://instagram.com/sdxucsd",
      "https://linkedin.com/company/sdxucsd"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Jolla",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "parentOrganization": {
      "@type": "CollegeOrUniversity",
      "name": "University of California San Diego",
      "alternateName": "UCSD"
    },
    "event": [
      {
        "@type": "Event",
        "name": "Perplexity Hack Day",
        "description": "Hackathon sponsored by Perplexity with a $200 prize pool for UCSD students",
        "organizer": {
          "@type": "Organization",
          "name": "SDxUCSD"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 gap-8 md:gap-12 relative px-4 py-20 pb-24">
        <TextComponent 
        />
        <CenteredInfo />


        {/* <Image
          src="/scroll.png"
          alt="Scroll for photos"
          width={200}
          height={1000}
          className="absolute select-none bottom-4 right-4"
        /> */}
      </div>

      <SponsorsBanner />
    </>
  );
}
