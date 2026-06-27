import { ArrowDown, Mail, MousePointer2, Smartphone, Watch, Headphones, Glasses } from "lucide-react";
import { motion } from "framer-motion";
import LiveViewBadge from "./LiveViewBadge.jsx";

const motionEase = [0.22, 1, 0.36, 1];
const entranceTransition = { type: "tween", duration: 0.75, ease: motionEase };

const tags = [
  "UI/UX Design",
  "Product Thinking",
  "User Research",
  "HarmonyOS Inspired",
  "Multi-device UX",
  "AI Workflow",
];

const deviceNodes = [
  { label: "Phone", icon: Smartphone },
  { label: "Watch", icon: Watch },
  { label: "Earbuds", icon: Headphones },
  { label: "AI Glasses", icon: Glasses },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-28">
      <div className="absolute inset-0 hero-grid" />
      <motion.div
        className="hero-ring motion-smooth left-[57%] top-[8%] h-[430px] w-[430px]"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 360 }}
        transition={{
          opacity: entranceTransition,
          scale: entranceTransition,
          y: entranceTransition,
          rotate: { duration: 36, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.div
        className="hero-ring motion-smooth -left-24 bottom-12 h-[280px] w-[280px] opacity-40"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 0.4, scale: 1, y: 0, rotate: -360 }}
        transition={{
          opacity: entranceTransition,
          scale: entranceTransition,
          y: entranceTransition,
          rotate: { duration: 42, repeat: Infinity, ease: "linear" },
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-canvas items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="motion-smooth"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={entranceTransition}
        >
          <p className="mb-6 inline-flex rounded-full border border-line bg-white/72 px-4 py-2 text-sm font-semibold text-harmony shadow-soft backdrop-blur-xl">
            Zhang Yu · UI/UX Portfolio
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] text-ink md:text-7xl lg:text-8xl">
            张裕，
            <br />
            UI/UX 设计师
          </h1>
          <p className="mt-6 text-xl font-semibold text-ink md:text-2xl">
            Designing System-level UX Experiences
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
            我关注 HarmonyOS 生态、运动健康体验、多设备协同与 AI 辅助设计流程，尝试从真实用户场景出发，构建更清晰、更连续的系统体验。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="rounded-full border border-line bg-white/74 px-4 py-2 text-sm font-medium text-muted backdrop-blur"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", delay: 0.28 + index * 0.08, duration: 0.55, ease: motionEase }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-harmony"
            >
              查看作品 <ArrowDown size={18} />
            </a>
            <a
              href="mailto:2082315263@qq.com"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/78 px-6 py-4 text-sm font-semibold text-ink backdrop-blur-xl transition hover:border-harmony hover:text-harmony"
            >
              联系我 <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="motion-smooth relative min-h-[560px]"
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "tween", duration: 0.85, delay: 0.14, ease: motionEase }}
        >
          <div className="absolute right-4 top-8">
            <LiveViewBadge />
          </div>

          <motion.div
            className="motion-smooth absolute left-2 top-28 w-[min(88vw,520px)] rounded-system border border-white/75 bg-white/74 p-6 shadow-card backdrop-blur-2xl"
            animate={{ y: [0, -7, 0] }}
            transition={{ type: "tween", duration: 8, repeat: Infinity, ease: motionEase }}
          >
            <div className="flex items-center justify-between border-b border-line pb-5">
              <div>
                <p className="text-sm text-quiet">System Experience</p>
                <h3 className="mt-1 text-2xl font-bold text-ink">Portfolio Control Center</h3>
              </div>
              <span className="rounded-full bg-harmony/10 px-3 py-1 text-xs font-semibold text-harmony">
                Running
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Fixed Area", "Experience"],
                ["Assist Area", "AI Workflow"],
                ["Expand Area", "Case Study"],
                ["Device Nodes", "Connected UX"],
              ].map(([label, value], index) => (
                <div key={label} className="rounded-[26px] border border-line bg-white/72 p-4">
                  <span className="text-xs text-quiet">0{index + 1}</span>
                  <p className="mt-3 text-sm font-semibold text-muted">{label}</p>
                  <p className="mt-1 text-lg font-bold text-ink">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="motion-smooth absolute bottom-14 right-4 w-[min(82vw,420px)] rounded-[34px] border border-white/75 bg-white/80 p-5 shadow-card backdrop-blur-2xl"
            animate={{ y: [0, 7, 0] }}
            transition={{ type: "tween", duration: 8.5, repeat: Infinity, ease: motionEase }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-motion text-white">
                <MousePointer2 size={18} />
              </span>
              <div>
                <p className="text-sm text-quiet">Multi-device UX</p>
                <p className="text-lg font-bold text-ink">Right information, right touchpoint.</p>
              </div>
            </div>
            <div className="device-map">
              {deviceNodes.map(({ label, icon: Icon }) => (
                <span key={label}>
                  <Icon size={16} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
