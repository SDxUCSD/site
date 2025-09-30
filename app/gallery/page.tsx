import Header from "@/components/Header";
import { events } from "@/constants";
import Image from "next/image";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="bg-zinc-900/95 w-full">
        {events.map((i) => (
          <div key={i.name} className="relative w-full ">
            <Image
              src={`/images/${i.images[0]}`}
              alt={i.name}
              width={1920}
              height={1080}
              className=" block"
            />
            <div className={`absolute bottom-0 ${spaceMono.className} left-0 right-0 p-4 bg-gradient-to-t from-zinc-900/100 to-zinc-900/0 pt-10`}>
              <div className="flex flex-row gap-2">
                < a href={i.event_link} className=" underline text-white text-2xl font-bold">{i.name}</a>
                <span className="text-white text-sm">{i.type}</span>
              </div>
              <p className="text-white text-sm">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}