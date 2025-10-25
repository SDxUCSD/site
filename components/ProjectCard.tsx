import Link from 'next/link';
import type { Project } from '@/constants';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-zinc-500 rounded-lg p-6 flex flex-col gap-3 shadow-lg hover:border-zinc-400 transition-colors">
      <h3 className="text-xl font-semibold">{project.name.toLowerCase()}</h3>
      {project.founder_name && (
        <p className="text-sm text-gray-400">
          founder: {project.founder_name.toLowerCase()}
        </p>
      )}
      <p className="text-sm text-gray-300">{project.description}</p>
      {project.project_link && (
        <Link
          href={project.project_link.startsWith('http') ? project.project_link : `https://${project.project_link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors break-all"
        >
          {project.project_link}
        </Link>
      )}
    </div>
  );
}
