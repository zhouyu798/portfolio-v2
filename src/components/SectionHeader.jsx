import { motion } from "framer-motion";

const motionEase = [0.22, 1, 0.36, 1];

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  const centered = align === "center";

  return (
    <motion.div
      className={`motion-smooth mb-12 ${centered ? "mx-auto max-w-4xl text-center" : "max-w-5xl"}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ type: "tween", duration: 0.75, ease: motionEase }}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-harmony">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold leading-tight text-ink md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-4xl text-base leading-8 text-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
