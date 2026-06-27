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
    const heroDistance = () => Math.max(2200, window.innerHeight * 2.4);

    const ctx = gsap.context(() => {
      gsap.set(".hero-bg", {
        autoAlpha: 0,
        y: isMobile ? 16 : 32,
        scale: isMobile ? 1.02 : 1.035,
        force3D: true,
      });

      gsap.set(".hero-orb-wrap", {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        force3D: true,
      });

      gsap.set(".hero-ring.primary", {
        opacity: 0.28,
        scale: 0.92,
        filter: "blur(0.5px)",
        force3D: true,
      });

      gsap.set(".hero-ring.secondary", {
        opacity: 0.18,
        scale: 0.88,
        filter: "blur(0.8px)",
        force3D: true,
      });

      gsap.set(".site-nav", {
        autoAlpha: 0,
        y: -16,
        force3D: true,
      });

      gsap.set(".hero-visual", {
        autoAlpha: 0,
        y: isMobile ? 28 : 80,
        scale: isMobile ? 1.035 : 1.12,
        filter: "blur(6px)",
        force3D: true,
      });

      gsap.set(".hero-title", {
        autoAlpha: 0,
        y: isMobile ? 28 : 60,
        scale: 0.985,
        force3D: true,
      });

      gsap.set([".hero-eyebrow", ".hero-subtitle", ".hero-copy"], {
        autoAlpha: 0,
        y: isMobile ? 22 : 40,
        force3D: true,
      });

      gsap.set([".hero-tag", ".hero-cta"], {
        autoAlpha: 0,
        y: isMobile ? 18 : 30,
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

      if (isMobile) {
        gsap
          .timeline({
            defaults: {
              duration: 0.7,
              ease: "power2.out",
            },
          })
          .to(".hero-ring.primary", { opacity: 0.85, scale: 1, filter: "blur(0px)" }, 0)
          .to(".hero-ring.secondary", { opacity: 0.62, scale: 1, filter: "blur(0px)" }, 0.05)
          .to(".hero-bg", { autoAlpha: 1, y: 0, scale: 1 }, 0.12)
          .to(".site-nav", { autoAlpha: 1, y: 0, duration: 0.45 }, 0.18)
          .to(".hero-visual", { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)" }, 0.22)
          .to(".hero-float-card", { autoAlpha: 1, filter: "blur(0px)", stagger: 0.05 }, 0.3)
          .to(".live-view-badge", { autoAlpha: 1, filter: "blur(0px)", duration: 0.45 }, 0.36)
          .to(".device-map span", { autoAlpha: 1, filter: "blur(0px)", stagger: 0.03, duration: 0.42 }, 0.42)
          .to(".hero-eyebrow", { autoAlpha: 1, y: 0, duration: 0.45 }, 0.24)
          .to(".hero-title", { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 }, 0.28)
          .to([".hero-subtitle", ".hero-copy"], { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0.42)
          .to(".hero-tag", { autoAlpha: 1, y: 0, stagger: 0.03, duration: 0.45 }, 0.52)
          .to(".hero-cta", { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.45 }, 0.56);
      } else {
        const heroTl = gsap.timeline({
          defaults: {
            ease: "power2.out",
          },
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: () => `+=${heroDistance()}`,
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        heroTl
          .to(".hero-ring.primary", {
            opacity: 0.85,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
          }, 0)
          .to(".hero-ring.secondary", {
            opacity: 0.62,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
          }, 0.05)
          .to(".hero-bg", {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          }, 0.12)
          .to(".site-nav", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.24)
          .to(".hero-eyebrow", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.24)
          .to(".hero-title", { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }, 0.28)
          .to(".hero-subtitle", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.42)
          .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.5)
          .to(".hero-tag", { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.55 }, 0.52)
          .to(".hero-cta", { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.6 }, 0.56)
          .to(".hero-visual", { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.05, ease: "power3.out" }, 0.62)
          .to(".hero-float-card", { autoAlpha: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.85 }, 0.74)
          .to(".live-view-badge", { autoAlpha: 1, filter: "blur(0px)", duration: 0.65 }, 0.86)
          .to(".device-map span", { autoAlpha: 1, filter: "blur(0px)", stagger: 0.035, duration: 0.5 }, 0.96)
          .to({}, { duration: 0.55 });
      }

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
