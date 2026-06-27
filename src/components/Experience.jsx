import { Mail, MapPin, Phone, Sparkles, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { assetPath } from "../utils/assets.js";

const motionEase = [0.22, 1, 0.36, 1];

const stats = [
  ["4", "个精选项目"],
  ["17", "页作品集内容"],
  ["1", "段 UX / 产品设计实习"],
  ["6", "类核心能力"],
];

const internshipItems = [
  "参与智能宠物设备体验设计项目，围绕设备连接、状态查看、异常提醒等核心使用场景，协助梳理用户操作路径与关键体验问题。",
  "基于竞品功能拆解与用户反馈整理，优化核心页面的信息层级、模块结构与操作流程，输出高保真页面与交互原型。",
  "结合 AI 工具完成访谈内容归纳、设计文案整理与前端 Demo 探索，提升方案表达、原型验证与跨角色沟通效率。",
];

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:py-32">
      <div className="mx-auto max-w-canvas">
        <SectionHeader eyebrow="Experience" title="个人经历" />

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="glass-card motion-smooth min-h-[560px] overflow-hidden p-0"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ type: "tween", duration: 0.75, ease: motionEase }}
          >
            <div className="relative h-full min-h-[560px] overflow-hidden bg-soft">
              <img
                src={assetPath("images/portfolio/optimized/about-large.webp")}
                alt="张裕个人介绍视觉"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/70 bg-white/78 px-4 py-3 text-sm font-semibold text-ink shadow-card backdrop-blur-xl">
                Zhang Yu · UI/UX Designer
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="glass-card motion-smooth p-7 md:p-10"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "tween", duration: 0.75, delay: 0.08, ease: motionEase }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-harmony/10 px-4 py-2 text-sm font-semibold text-harmony">
                  张裕 / Zhang Yu
                </span>
                <span className="rounded-full bg-motion/10 px-4 py-2 text-sm font-semibold text-motion">
                  UI/UX 设计师
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-muted">
                  <MapPin size={16} /> 广东东莞
                </span>
              </div>

              <p className="mt-7 text-lg leading-9 text-muted">
                我是一名关注系统体验与产品逻辑的 UI/UX 设计师，具备界面设计、交互原型、用户调研、产品流程梳理和高保真视觉落地能力。我的作品主要围绕运动健康、HarmonyOS 实况窗、多设备协同和 AI 辅助设计工作流展开。
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/72 px-4 py-3">
                  <Phone size={16} /> 18200633381
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/72 px-4 py-3">
                  <Mail size={16} /> 2082315263@qq.com
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/72 px-4 py-3">
                  <GraduationCap size={16} /> 广东科技学院 · 产品设计 · 本科
                </span>
              </div>
            </motion.div>

            <motion.div
              className="motion-smooth rounded-[32px] border border-line bg-white/72 p-6 shadow-card backdrop-blur-xl md:p-8"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "tween", duration: 0.75, delay: 0.14, ease: motionEase }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-harmony">
                    Internship
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-ink">
                    广东同天缔创者科技有限公司
                  </h3>
                  <p className="mt-2 text-base font-semibold text-muted">
                    UX / 产品设计实习生
                  </p>
                </div>
                <span className="rounded-full bg-soft px-4 py-2 text-sm font-semibold text-muted">
                  2025.04 - 2025.05
                </span>
              </div>
              <ul className="mt-6 space-y-4 text-base leading-8 text-muted">
                {internshipItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-motion" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map(([number, label], index) => (
                <motion.div
                  key={label}
                  className="motion-smooth rounded-[28px] border border-line bg-white/76 p-5 shadow-card backdrop-blur-xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ type: "tween", duration: 0.65, delay: index * 0.05, ease: motionEase }}
                >
                  <p className="text-4xl font-bold text-harmony">{number}</p>
                  <p className="mt-2 text-sm font-semibold text-muted">{label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="motion-smooth inline-flex items-center gap-2 rounded-full border border-line bg-white/72 px-4 py-3 text-sm text-muted shadow-card backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "tween", duration: 0.65, ease: motionEase }}
            >
              <Sparkles size={16} className="text-motion" />
              教育时间：2023.09 - 2027.06
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
