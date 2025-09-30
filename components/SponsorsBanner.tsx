import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";

export default async function SponsorsBanner() {
  const sponsorsDir = path.join(process.cwd(), "public/images/sponsors");
  const files = await fs.readdir(sponsorsDir);
  const imageFiles = files.filter((file) =>
    /\.(png|jpe?g|gif|webp|svg)$/i.test(file)
  );

  const getSizeClass = (filename: string) => {
    const lower = filename.toLowerCase();
    // Smaller logos need more space
    if (lower.includes("ucsd") ) {
      return "h-30 w-40";
    }
    if (lower.includes("sdx")) {
      return "h-25 w-40";
    }
    if (lower.includes("true")) {
      return "h-50 w-55";
    }
    // Groq is a bit large, constrain it
    if (lower.includes("groq")) {
      return "h-7 w-28";
    }
    // 8vc, Cadre, Perplexity are perfect
    return "h-9 w-32";
  };

  return (
        <div className="flex items-center justify-between px-4 gap-8 fixed bottom-0 left-0 right-0 w-full bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 h-20 z-50" >

          <span className="text-zinc-500 text-xs uppercase tracking-wider whitespace-nowrap">
            Sponsored By
          </span>
          {imageFiles.map((file) => (
            <div
              key={file}
              className={`relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 ${getSizeClass(file)}`}
            >
              <Image
                src={`/images/sponsors/${file}`}
                alt={file.replace(/\.(png|jpe?g|gif|webp|svg)$/i, "")}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
  );
}