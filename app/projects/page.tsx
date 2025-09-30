import Header from "@/components/Header";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Projects() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full flex items-center justify-center bg-zinc-900">
        <h1 className={`text-white text-2xl md:text-4xl font-bold ${spaceMono.className}`}>
          COMING SOON
        </h1>
      </div>
    </>
  );
}