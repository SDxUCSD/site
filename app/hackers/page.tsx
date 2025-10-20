import Header from "@/components/Header";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HackersPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <div className={`mx-auto px-6 pt-32 pb-20 max-w-4xl ${spaceMono.className}`}>
        <div className="space-y-8 text-base leading-relaxed">

          <h1 className="text-3xl font-bold">Hackers</h1>

          <p>
            Welcome to the hackers hub. This is where builders, makers, and innovators come together to create, collaborate, and push the boundaries of what's possible with technology.
          </p>

          <p>
            Whether you're working on your first project or you're a seasoned developer, this community is here to support your journey. We believe in learning by doing, sharing knowledge, and building cool stuff.
          </p>

          <h3 className="text-lg font-bold mt-12">What We Do</h3>

          <p>
            Our community organizes hackathons, workshops, and technical talks where you can learn new skills, meet fellow hackers, and bring your ideas to life. We focus on hands-on learning and real-world applications.
          </p>

          <p>
            From web development to machine learning, from hardware hacking to blockchain, we explore all areas of technology. The only requirement is curiosity and a willingness to build.
          </p>

          <h3 className="text-lg font-bold mt-12">Get Involved</h3>

          <p>
            Join us at our next event, start a project, or connect with other hackers in the community. Everyone is welcome regardless of skill level or background.
          </p>

          <p>
            Check out our <a href="/projects" className="text-blue-500 hover:underline">projects page</a> to see what the community is building, or visit our <a href="/events" className="text-blue-500 hover:underline">events page</a> to find upcoming hackathons and workshops.
          </p>
        </div>
      </div>
    </div>
  );
}
