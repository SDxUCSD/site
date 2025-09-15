import Image from "next/image";
import TextComponent from "@/components/TextComponent";
import CenteredInfo from "@/components/CenteredInfo";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black/95 gap-12">
        <TextComponent />
        <CenteredInfo />
      </div>

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <img key={i} src={`/images/${i}.png`} alt={`pic_${i}`} />
      ))}
    </>
  );
}
