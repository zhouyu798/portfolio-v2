import { motion } from "framer-motion";

const motionEase = [0.22, 1, 0.36, 1];

export default function ImageGallery({ images }) {
  return (
    <div className="space-y-8">
      {images.map((item, index) => (
        <motion.figure
          key={item.src}
          className="motion-smooth group overflow-hidden rounded-system border border-line bg-white p-3 shadow-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ type: "tween", duration: 0.7, delay: Math.min(index * 0.04, 0.22), ease: motionEase }}
        >
          <div className="overflow-hidden rounded-[28px] bg-soft">
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="px-3 py-4 text-sm leading-7 text-muted">
            {item.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
