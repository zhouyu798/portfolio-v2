import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioAnimations() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const ctx = gsap.context(() => {
      gsap.set(".site-nav", {
        opacity: 0,
        y: -16,
        force3D: true,
      });

      gsap.set(".hero-visual", {
        opacity: 0.45,
        y: isMobile ? 14 : 24,
        scale: isMobile ? 1.015 : 1.035,
        force3D: true,
      });

      gsap.set(".hero-title", {
        opacity: 0,
        y: isMobile ? 18 : 28,
        scale: 0.98,
        force3D: true,
      });

      gsap.set([".hero-eyebrow", ".hero-subtitle", ".hero-copy"], {
        opacity: 0,
        y: isMobile ? 14 : 20,
        force3D: true,
      });

      gsap.set([".hero-tag", ".hero-cta"], {
        opacity: 0,
        y: isMobile ? 10 : 16,
        force3D: true,
      });

      gsap.set(".hero-orb-wrap", {
        opacity: 0,
        y: isMobile ? 12 : 20,
        scale: 0.98,
        force3D: true,
      });

      gsap
        .timeline({
          defaults: {
            duration: 0.8,
            ease: "power2.out",
          },
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })
        .to(".site-nav", { opacity: 1, y: 0, duration: 0.6 }, 0)
        .to(".hero-visual", { opacity: 1, y: 0, scale: 1 }, 0)
        .to(".hero-orb-wrap", { opacity: 1, y: 0, scale: 1, stagger: 0.06 }, 0.04)
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.55 }, 0.08)
        .to(".hero-title", { opacity: 1, y: 0, scale: 1 }, 0.12)
        .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.65 }, 0.18)
        .to(".hero-copy", { opacity: 1, y: 0, duration: 0.65 }, 0.22)
        .to(".hero-tag", { opacity: 1, y: 0, stagger: 0.04, duration: 0.55 }, 0.26)
        .to(".hero-cta", { opacity: 1, y: 0, stagger: 0.05, duration: 0.55 }, 0.32);

      gsap.to(".hero-orb", {
        y: (index) => (index % 2 === 0 ? -6 : 6),
        rotate: (index) => (index % 2 === 0 ? 5 : -5),
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });

      gsap.set(".project-card-shell", {
        opacity: 0,
        y: isMobile ? 22 : 32,
        scale: 0.98,
        force3D: true,
      });

      gsap.to(".project-card-shell", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 75%",
          once: true,
        },
      });

      gsap.set(".advantage-card", {
        opacity: 0,
        y: isMobile ? 20 : 28,
        scale: 0.985,
        force3D: true,
      });

      gsap.to(".advantage-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".advantages-section",
          start: "top 72%",
          once: true,
        },
      });
    }, rootRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    document.fonts?.ready?.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return rootRef;
}
