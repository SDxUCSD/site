import Image from "next/image";
import Link from "next/link";
import TextComponent from "@/components/TextComponent";
import CenteredInfo from "@/components/CenteredInfo";
import Header from "@/components/Header";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 gap-8 md:gap-12 relative px-4 py-20">
        <TextComponent />
        <CenteredInfo />

       
        {/* <Image
          src="/scroll.png"
          alt="Scroll for photos"
          width={200}
          height={1000}
          className="absolute select-none bottom-4 right-4"
        /> */}
      </div>

    </>
  );
}
