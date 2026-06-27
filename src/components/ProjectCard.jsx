import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card-shell motion-critical group">
      <Link to={`/projects/${project.slug}`} className="project-card-surface glass-card block h-full overflow-hidden p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="text-6xl font-bold leading-none text-ink md:text-7xl">
              {project.id}
            </span>
            <span className="h-20 w-px bg-motion" />
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors group-hover:border-harmony group-hover:text-harmony">
            <ArrowUpRight size={20} />
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold leading-tight text-ink md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm font-semibold text-harmony">{project.english}</p>
          <p className="mt-5 text-base leading-8 text-muted">{project.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-soft px-3 py-2 text-xs font-semibold text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-line bg-soft">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
    </article>
  );
}
