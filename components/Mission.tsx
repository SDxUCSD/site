import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
  });


export default function Mission() {    
    return (
        <div className={`absolute flex top-2 gap-2 right-2 flex-col text-white text-sm text-right ${spaceMono.className}`}>
the community for <br />technologists, <br />creatives, and <br />builders <br />at UCSD
        </div>
    );
}