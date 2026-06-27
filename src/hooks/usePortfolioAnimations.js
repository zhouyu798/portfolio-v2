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
    const heroDistance = () => window.innerHeight * (isMobile ? 0.85 : 1.05);

    const ctx = gsap.context(() => {
      gsap.set(".hero-grid", {
        opacity: 0.2,
      });

      gsap.set(".site-nav", {
        autoAlpha: 0,
        y: -16,
        force3D: true,
      });

      gsap.set(".hero-visual", {
        autoAlpha: 0.35,
        y: isMobile ? 16 : 28,
        scale: isMobile ? 1.01 : 1.025,
        filter: "blur(6px)",
        force3D: true,
      });

      gsap.set(".hero-title", {
        autoAlpha: 0,
        y: isMobile ? 18 : 30,
        scale: 0.985,
        force3D: true,
      });

      gsap.set([".hero-eyebrow", ".hero-subtitle", ".hero-copy"], {
        autoAlpha: 0,
        y: isMobile ? 14 : 20,
        force3D: true,
      });

      gsap.set([".hero-tag", ".hero-cta"], {
        autoAlpha: 0,
        y: isMobile ? 10 : 16,
        force3D: true,
      });

      gsap.set(".hero-orb-wrap", {
        autoAlpha: 0,
        y: isMobile ? 12 : 20,
        scale: 0.98,
        force3D: true,
      });

      gsap.set([".hero-float-card", ".live-view-badge"], {
        autoAlpha: 0,
        filter: "blur(8px)",
        force3D: true,
      });

      gsap.set(".device-map span", {
        autoAlpha: 0,
        filter: "blur(5px)",
        force3D: true,
      });

      gsap
        .timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: () => `+=${heroDistance()}`,
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        })
        .to(".hero-grid", { opacity: 1, duration: 0.28 }, 0)
        .to(".site-nav", { autoAlpha: 1, y: 0, duration: 0.26 }, 0.02)
        .to(".hero-orb-wrap", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.36 }, 0.04)
        .to(".hero-visual", { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.44 }, 0.08)
        .to(".hero-eyebrow", { autoAlpha: 1, y: 0, duration: 0.26 }, 0.12)
        .to(".hero-title", { autoAlpha: 1, y: 0, scale: 1, duration: 0.38 }, 0.16)
        .to(".hero-subtitle", { autoAlpha: 1, y: 0, duration: 0.3 }, 0.24)
        .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.32 }, 0.3)
        .to(".hero-float-card", { autoAlpha: 1, filter: "blur(0px)", stagger: 0.04, duration: 0.32 }, 0.32)
        .to(".live-view-badge", { autoAlpha: 1, filter: "blur(0px)", duration: 0.24 }, 0.38)
        .to(".device-map span", { autoAlpha: 1, filter: "blur(0px)", stagger: 0.025, duration: 0.22 }, 0.42)
        .to(".hero-tag", { autoAlpha: 1, y: 0, stagger: 0.03, duration: 0.26 }, 0.44)
        .to(".hero-cta", { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.26 }, 0.5);

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
        autoAlpha: 0,
        y: isMobile ? 22 : 32,
        scale: 0.98,
        force3D: true,
      });

      ScrollTrigger.batch(".project-card-shell", {
        start: "top 82%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.82,
            ease: "power2.out",
            stagger: 0.08,
            overwrite: "auto",
          });
        },
      });

      gsap.set(".advantage-card", {
        autoAlpha: 0,
        y: isMobile ? 20 : 28,
        scale: 0.985,
        force3D: true,
      });

      ScrollTrigger.batch(".advantage-card", {
        start: "top 82%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
            stagger: 0.06,
            overwrite: "auto",
          });
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
