import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Work", href: "work" },
  { label: "Experience", href: "experience" },
  { label: "Strengths", href: "strengths" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const frameRef = useRef(null);
  const scrolledRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 18;
      if (scrolledRef.current === nextScrolled) return;
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        updateScrolled();
        frameRef.current = null;
      });
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-nav motion-critical fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-canvas items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-300 md:px-6 ${
          scrolled ? "border-white/90 bg-white/82 shadow-soft" : "border-white/60 bg-white/44"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-bold text-white">
            ZY
          </span>
          <span className="text-sm font-semibold text-ink md:text-base">Zhang Yu</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goToSection(item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-ink"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:2082315263@qq.com"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-harmony"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </nav>
    </header>
  );
}
