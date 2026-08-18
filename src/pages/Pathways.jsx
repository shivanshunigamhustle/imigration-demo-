import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Lock, HeadphonesIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ProgressRing from "../components/ProgressRing";
import Img from "../components/Img";

const TABS = ["Results", "Documents", "Timeline", "Next Steps"];

const MATCHES = [
  {
    flag: "🇨🇦",
    title: "Canada – Express Entry",
    match: 85,
    badge: "Best Match",
    tags: ["High Chances", "Fast PR Pathway", "Great Quality of Life"],
  },
  {
    flag: "🇦🇺",
    title: "Australia – Skilled Independent",
    match: 78,
    tags: ["Strong Demand", "Flexible Options"],
  },
  {
    flag: "🇬🇧",
    title: "UK – Skilled Worker",
    match: 72,
    tags: ["Global Opportunities", "Family Friendly"],
  },
];

const FEATURES = [
  { icon: BarChart3, label: "Data-Driven Assessment" },
  { icon: ShieldCheck, label: "Expert Reviewed" },
  { icon: Lock, label: "100% Confidential" },
  { icon: HeadphonesIcon, label: "End-to-End Support" },
];

export default function Pathways() {
  const [tab, setTab] = useState("Results");

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-2)] to-[var(--color-navy-3)] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-emerald/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-coral/10 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "26px 26px" }}
        />

        <Navbar variant="dark" user={{ name: "Sarah", avatar: "/images/dashboard/sarah-avatar.jpg" }} />

        <main className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-14 pb-16">
          <Reveal direction="up" className="mb-9">
            <h1 className="font-display text-[38px] md:text-[46px] font-semibold text-white mb-2">Your Personalized Pathways</h1>
            <p className="text-white/60 text-[15.5px]">Based on your profile, we found the best opportunities for you.</p>
          </Reveal>

          <Reveal direction="up" delay={0.08} className="flex gap-1.5 bg-white/5 border border-white/10 p-1.5 rounded-full w-fit mb-10">
            {TABS.map((t) => (
              <button key={t} onClick={() => setTab(t)} className="relative px-4 py-2 rounded-full text-[13.5px] font-semibold">
                {tab === t && (
                  <motion.span layoutId="pathway-tab" className="absolute inset-0 bg-white rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className={`relative z-10 ${tab === t ? "text-navy" : "text-white/60 hover:text-white"}`}>{t}</span>
              </button>
            ))}
          </Reveal>

          <div className="grid lg:grid-cols-[320px_1fr] gap-6 mb-10">
            <Reveal direction="right" className="bg-white rounded-3xl p-7 flex flex-col items-center text-center shadow-[var(--shadow-lift)]">
              <Img src="/images/dashboard/sarah-profile.jpg" alt="Sarah" rounded="rounded-full" className="w-20 h-20 mb-4 border-4 border-coral-50" />
              <h3 className="font-display text-[19px] font-semibold text-ink">Hi, Sarah 👋</h3>
              <p className="text-[13.5px] text-ink-faint mb-6">Software Engineer <br /> 4+ Years Experience</p>
              <ProgressRing value={85} sublabel="Overall Match" />
            </Reveal>

            <Stagger className="flex flex-col gap-4" stagger={0.1}>
              {MATCHES.map((m, i) => (
                <StaggerItem key={m.title}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-white rounded-2xl p-5 flex items-center gap-5 shadow-[var(--shadow-card)] overflow-hidden ${i === 0 ? "ring-2 ring-coral/40" : ""}`}
                  >
                    {i === 0 && <span className="absolute top-0 left-0 w-1.5 h-full bg-coral" />}
                    <span className="text-3xl shrink-0">{m.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="font-display text-[16.5px] font-semibold text-ink">{m.title}</h4>
                        {m.badge && (
                          <span className="text-[10.5px] font-bold bg-emerald/15 text-emerald px-2 py-0.5 rounded-full">{m.badge}</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.tags.map((t) => (
                          <span key={t} className="text-[11.5px] text-ink-soft bg-cream px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0 hidden sm:block">
                      <div className="font-display text-[20px] font-bold text-ink">{m.match}%</div>
                      <div className="text-[10.5px] text-ink-faint">Match</div>
                    </div>
                    <motion.span whileHover={{ scale: 1.1 }} className="w-9 h-9 rounded-full bg-coral text-white flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="up" className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-4.5 h-4.5 text-white/80" />
                </span>
                <span className="text-[13px] text-white/70 font-medium">{f.label}</span>
              </div>
            ))}
          </Reveal>
        </main>
      </div>
    </PageTransition>
  );
}
