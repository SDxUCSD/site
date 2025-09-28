import Header from "@/components/Header";
import BuilderCard from "@/components/BuilderCard";
import { Space_Mono } from "next/font/google";
import { builders } from "./builders";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BuildersPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <div className={`mx-auto px-6 pt-32 pb-20 max-w-4xl ${spaceMono.className}`}>
        <div className="space-y-6">
          {builders.map((builder, index) => (
            <BuilderCard
              key={index}
              name={builder.name}
              photoUrl={builder.photoUrl}
              bullets={builder.bullets}
              building={builder.building}
              building_link={builder.building_link}
              link={builder.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}