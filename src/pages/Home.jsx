import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Experience from "../components/Experience.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StrengthCard from "../components/StrengthCard.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import { strengths } from "../data/strengths.js";

const motionEase = [0.22, 1, 0.36, 1];

export default function Home() {
  return (
    <motion.main
      className="motion-smooth"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.75, ease: motionEase }}
    >
      <Navbar />
      <Hero />
      <Experience />

      <section id="work" className="px-5 py-24 lg:py-32">
        <div className="mx-auto max-w-canvas">
          <SectionHeader
            eyebrow="Selected Works"
            title="精选项目"
            subtitle="我整理出 4 个代表性设计作品，从产品体验、系统表达、生态协同与设计系统四个方向，展示我的 UX 设计能力。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="advantages-section px-5 py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-canvas">
          <SectionHeader
            eyebrow="Strengths"
            title="个人优势"
            subtitle="我将用户研究、产品思维、系统表达和 AI 工作流结合到设计过程中。"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {strengths.map((strength) => (
              <StrengthCard key={strength.title} strength={strength} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </motion.main>
  );
}
