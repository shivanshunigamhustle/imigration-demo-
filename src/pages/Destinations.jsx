import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Gift } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Img from "../components/Img";

const FILTERS = ["All", "Study", "Work", "PR", "Family", "Business"];

const COUNTRIES = [
  {
    flag: "🇨🇦",
    name: "Canada",
    tag: "Build a better tomorrow",
    popular: true,
    img: "/images/destinations/canada.jpg",
    items: ["Express Entry", "Study Visa", "Family Sponsorship", "Provincial Nominee"],
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    tag: "Live. Work. Grow.",
    img: "/images/destinations/australia.jpg",
    items: ["Skilled Migration", "Student Visa", "Work Visa", "Family Visa"],
  },
  {
    flag: "🇬🇧",
    name: "UK",
    tag: "Create new opportunities",
    img: "/images/destinations/uk.jpg",
    items: ["Skilled Worker", "Student Visa", "Global Talent", "Family Visa"],
  },
  {
    flag: "🇺🇸",
    name: "USA",
    tag: "Innovate. Lead. Succeed.",
    img: "/images/destinations/usa.jpg",
    items: ["H1B / Work Visa", "Student Visa", "Investor Visa", "Family Visa"],
  },
];

export default function Destinations() {
  const [active, setActive] = useState("All");

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream">
        <Navbar variant="light" cta={{ label: "Talk to an Expert", to: "/consultation", style: "dark" }} />

        <main className="max-w-[1440px] mx-auto px-6 md:px-10 pt-14 pb-20">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="font-display text-[42px] md:text-[50px] font-semibold text-ink mb-3">
              Explore <span className="italic text-gradient-coral">Your</span> World
            </h1>
            <p className="text-ink-soft text-[16px]">Find the right destination for your goals</p>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="flex items-center justify-center gap-3 mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-white/70 p-1.5 rounded-full shadow-[var(--shadow-soft)]">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="relative px-4 py-2 rounded-full text-[13.5px] font-semibold transition-colors"
                >
                  {active === f && (
                    <motion.span layoutId="filter-pill" className="absolute inset-0 bg-coral rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                  )}
                  <span className={`relative z-10 ${active === f ? "text-white" : "text-ink-soft hover:text-ink"}`}>{f}</span>
                </button>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-2 ml-2">
              <button className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-ink-soft hover:bg-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-ink-soft hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14" stagger={0.1}>
            {COUNTRIES.map((c) => (
              <StaggerItem key={c.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-card)] h-full flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Img src={c.img} alt={c.name} rounded="rounded-none" className="w-full h-full transition-transform duration-500 hover:scale-110" />
                    {c.popular && (
                      <span className="absolute top-3 left-3 bg-gold text-white text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow">
                        Most Popular
                      </span>
                    )}
                    <span className="absolute top-3 right-3 text-2xl drop-shadow">{c.flag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-[20px] font-semibold text-ink">{c.name}</h3>
                    <p className="text-[13px] text-ink-faint mb-4">{c.tag}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-[13px] text-ink-soft">
                          <span className="w-4 h-4 rounded-full bg-emerald/15 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-emerald" strokeWidth={3} />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="w-full text-left flex items-center justify-between px-4 py-2.5 rounded-full bg-coral-50 text-coral font-semibold text-[13.5px] hover:bg-coral hover:text-white transition-colors"
                    >
                      Explore {c.name} <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal direction="up" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-coral-50 to-[#fde4d6] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[var(--shadow-soft)] shrink-0">
                <Gift className="w-6 h-6 text-coral" />
              </div>
              <div>
                <h4 className="font-display text-[19px] font-semibold text-ink">Not sure where to go?</h4>
                <p className="text-[14px] text-ink-soft">Take our free eligibility assessment and we'll recommend the best options for you.</p>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="shrink-0 inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded-full font-semibold text-[14px] shadow-[0_10px_24px_rgba(255,90,60,0.35)]">
              Check My Eligibility <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Reveal>
        </main>
      </div>
    </PageTransition>
  );
}
