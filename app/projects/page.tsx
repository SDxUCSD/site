import Header from "@/components/Header";
import ProjectSlideshow from "@/components/ProjectSlideshow";
import { getProjects } from "@/lib/supabase";

export default async function Projects() {
  const projects = await getProjects();
  console.log(projects)

  return (
    <>
      <Header />
      <div className="bg-zinc-900/95 w-full">
        {projects.map((project) => (
          <ProjectSlideshow key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}