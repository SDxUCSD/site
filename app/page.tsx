import Image from "next/image";
import TextComponent from "@/components/TextComponent";
import Links from "@/components/Links"
import Mission from "@/components/Mission"

export default function Home() {
  return (<>

    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black/95"
    >
            <Links />
            <Mission />
      <TextComponent />
    </div>
   
       {
        [0,1,2,3,4,5].map((i) => (
            <img key={i} src={`/images/${i}.png`} alt={`pic_${i}`} />
        ))
       }
  </>);
}
