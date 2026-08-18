import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, X } from "lucide-react";

const PAGES = [
  { to: "/", label: "1. Landing", hint: "Hero & search" },
  { to: "/destinations", label: "2. Explore", hint: "Destination grid" },
  { to: "/pathways", label: "3. Pathways", hint: "Personalized dashboard" },
  { to: "/how-it-works", label: "4. How it Works", hint: "5-step journey" },
  { to: "/stories", label: "5. Success Stories", hint: "Testimonials" },
  { to: "/consultation", label: "6. Book Consultation", hint: "Scheduling CTA" },
];

export default function DemoDock() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-64 rounded-2xl bg-ink text-white shadow-[var(--shadow-lift)] p-2 overflow-hidden"
          >
            <div className="px-3 pt-2.5 pb-1.5 text-[11px] font-semibold tracking-wide text-white/45 uppercase">
              Demo Showcase · 6 Concepts
            </div>
            {PAGES.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setOpen(false)}
                className={`flex flex-col px-3 py-2 rounded-xl transition-colors ${
                  pathname === p.to ? "bg-coral text-white" : "hover:bg-white/10"
                }`}
              >
                <span className="text-[13.5px] font-semibold">{p.label}</span>
                <span className={`text-[11.5px] ${pathname === p.to ? "text-white/80" : "text-white/45"}`}>{p.hint}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="w-[52px] h-[52px] rounded-full bg-ink text-white shadow-[var(--shadow-lift)] flex items-center justify-center"
        aria-label="Toggle demo navigation"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "grid"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <X className="w-5 h-5" /> : <LayoutGrid className="w-5 h-5" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
