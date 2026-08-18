import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, ChevronDown } from "lucide-react";

const LINKS = [
  { label: "Destinations", to: "/destinations" },
  { label: "Visas", to: "/destinations" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "Success Stories", to: "/stories" },
  { label: "Resources", to: "/stories" },
  { label: "About", to: "/consultation" },
];

export default function Navbar({ variant = "light", cta = { label: "Check Eligibility", to: "/consultation" }, user = null }) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = variant === "dark";

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        dark
          ? "bg-[var(--color-navy)]/90 backdrop-blur-md border-b border-white/10"
          : scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-black/5 shadow-[var(--shadow-soft)]"
          : "bg-cream/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 h-[76px]">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--color-coral)] to-[var(--color-coral-2)] flex items-center justify-center shadow-[0_4px_14px_rgba(255,90,60,0.35)] group-hover:rotate-6 transition-transform duration-300">
            <Compass className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
          </span>
          <span className={`font-display text-[19px] font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
            VisaBridge
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`relative text-[14.5px] font-medium transition-colors ${
                dark ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-ink"
              } ${pathname === link.to ? (dark ? "text-white" : "text-ink") : ""}`}
            >
              {link.label}
              {pathname === link.to && (
                <motion.span
                  layoutId="nav-underline"
                  className={`absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full ${dark ? "bg-white" : "bg-coral"}`}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <Link to="/pathways" className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors">
              <img src={user.avatar} onError={(e) => (e.currentTarget.style.display = "none")} className="w-7 h-7 rounded-full object-cover bg-white/20" alt={user.name} />
              <span className="text-white text-sm font-medium">{user.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/60" />
            </Link>
          ) : (
            <Link to={cta.to}>
              <motion.span
                whileHover={{ scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] font-semibold shadow-[var(--shadow-soft)] transition-colors ${
                  dark
                    ? "bg-white text-navy hover:bg-white/90"
                    : cta.style === "dark"
                    ? "bg-ink text-white hover:bg-ink/85"
                    : "bg-coral text-white hover:bg-coral-dark"
                }`}
              >
                {cta.label}
              </motion.span>
            </Link>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
