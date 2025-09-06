import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
  });


export default function Links() {    
    return (
        <div className={`absolute flex top-2 gap-2 left-2 flex-col text-white text-sm ${spaceMono.className}`}>
            {/* linkedin */}
            <a href="https://www.linkedin.com/in/eli-ramon-/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin</a>
            {/* github */}
            <a href="https://github.com/eli-ramon" target="_blank" rel="noopener noreferrer" className="hover:underline">github</a>
            {/* email */}
            <a href="mailto:eli.ramon@gmail.com" target="_blank" rel="noopener noreferrer"  className="hover:underline">email</a>
        </div>
    );
}