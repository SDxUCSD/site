import Image from "next/image";
import TextComponent from "@/components/TextComponent";
import CenteredInfo from "@/components/CenteredInfo";
import Header from "@/components/Header";

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

      <div className="bg-zinc-900/95 w-full">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <img key={i} src={`/images/${i}.png`} alt={`pic_${i}`} className="w-full h-auto block" />
        ))}
      </div>
    </>
  );
}
