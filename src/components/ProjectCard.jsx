import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const motionEase = [0.22, 1, 0.36, 1];

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="motion-smooth group"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ type: "tween", duration: 0.75, ease: motionEase }}
    >
      <Link to={`/projects/${project.slug}`} className="glass-card block h-full overflow-hidden p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="text-6xl font-bold leading-none text-ink md:text-7xl">
              {project.id}
            </span>
            <span className="h-20 w-px bg-motion" />
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition group-hover:border-harmony group-hover:text-harmony">
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
            className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
    </motion.article>
  );
}
