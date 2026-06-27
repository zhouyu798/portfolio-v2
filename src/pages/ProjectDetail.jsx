import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import CaseStudySection from "../components/CaseStudySection.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import Footer from "../components/Footer.jsx";
import { getProjectBySlug, projects } from "../data/projects.js";

const sections = [
  ["problem", "Problem"],
  ["screens", "Key Screens"],
  ["value", "Design Value"],
  ["reflection", "Reflection"],
];

const motionEase = [0.22, 1, 0.36, 1];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.main
      className="motion-smooth"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.75, ease: motionEase }}
    >
      <Navbar />
      <section className="px-5 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-canvas">
          <Link
            to="/#work"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/78 px-4 py-2 text-sm font-semibold text-muted backdrop-blur-xl transition hover:border-harmony hover:text-harmony"
          >
            <ArrowLeft size={17} /> 返回作品
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="glass-card motion-smooth p-8 md:p-10"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 0.75, delay: 0.08, ease: motionEase }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-harmony">
                Project {project.id}
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg font-semibold text-muted">{project.english}</p>
              <p className="mt-7 text-lg leading-9 text-muted">{project.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MetaCard label="我的角色" value={project.role} />
                <MetaCard label="项目时间" value={project.time} />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-soft px-3 py-2 text-xs font-semibold text-muted">
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card motion-smooth overflow-hidden p-4"
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "tween", duration: 0.8, delay: 0.14, ease: motionEase }}
            >
              <img
                src={project.cover}
                alt={project.title}
                loading="eager"
                decoding="async"
                className="aspect-[16/9] w-full rounded-[30px] object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[30px] border border-line bg-white/76 p-5 shadow-card backdrop-blur-xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-quiet">
                  Case Study
                </p>
                <nav className="space-y-1">
                  {sections.map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block rounded-full px-4 py-3 text-sm font-semibold text-muted transition hover:bg-soft hover:text-harmony"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0 rounded-system border border-line bg-white/68 px-5 shadow-card backdrop-blur-xl md:px-10">
              <CaseStudySection id="problem" title="Problem">
                <p>{project.problem}</p>
              </CaseStudySection>

              <CaseStudySection id="screens" title="Key Screens">
                <ImageGallery images={project.images} />
              </CaseStudySection>

              <CaseStudySection id="value" title="Design Value">
                <p>{project.value}</p>
              </CaseStudySection>

              <CaseStudySection id="reflection" title="Reflection">
                <p>{project.reflection}</p>
              </CaseStudySection>
            </article>
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-harmony"
            >
              下一项目 · {nextProject.id}
              <ExternalLink size={17} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  );
}

function MetaCard({ label, value }) {
  return (
    <div className="rounded-[24px] border border-line bg-white/70 p-5">
      <p className="text-sm text-quiet">{label}</p>
      <p className="mt-2 text-base font-bold text-ink">{value}</p>
    </div>
  );
}
