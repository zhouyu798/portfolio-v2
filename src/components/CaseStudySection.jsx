import { motion } from "framer-motion";

const motionEase = [0.22, 1, 0.36, 1];

export default function CaseStudySection({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="motion-smooth scroll-mt-28 border-b border-line py-12 last:border-b-0 md:py-16"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "tween", duration: 0.75, ease: motionEase }}
    >
      <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      <div className="case-content mt-7">{children}</div>
    </motion.section>
  );
}
