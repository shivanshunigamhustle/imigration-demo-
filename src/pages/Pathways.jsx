import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Lock,
  HeadphonesIcon,
  CheckCircle2,
  Clock,
  Circle,
  CalendarCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ProgressRing from "../components/ProgressRing";
import Img from "../components/Img";

const TABS = ["Results", "Documents", "Timeline", "Next Steps"];

const DOCUMENTS = [
  { name: "Passport", status: "done" },
  { name: "IELTS / Language Test", status: "done" },
  { name: "Educational Credential Assessment (ECA)", status: "pending" },
  { name: "Proof of Funds", status: "pending" },
  { name: "Reference Letters", status: "todo" },
  { name: "Police Clearance Certificate", status: "todo" },
];

const TIMELINE = [
  { label: "Eligibility Check", desc: "Profile assessed against pathway criteria.", status: "done" },
  { label: "Document Collection", desc: "Core documents verified by your advisor.", status: "done" },
  { label: "Application Submitted", desc: "Express Entry profile is in the pool.", status: "active" },
  { label: "Biometrics", desc: "Appointment to be scheduled after ITA.", status: "todo" },
  { label: "Final Decision", desc: "Immigration authority reviews the application.", status: "todo" },
];

const NEXT_STEPS = [
  { title: "Complete your ECA", desc: "Required for Express Entry points calculation.", urgent: true },
  { title: "Upload Proof of Funds", desc: "Bank statements covering the last 6 months." },
  { title: "Book a document review call", desc: "15 minutes with your advisor before you submit.", cta: true },
];

const STATUS_META = {
  done: { icon: CheckCircle2, label: "Uploaded", cls: "text-emerald bg-emerald/15" },
  active: { icon: Clock, label: "In Progress", cls: "text-coral bg-coral-50" },
  pending: { icon: Clock, label: "In Review", cls: "text-gold bg-gold/15" },
  todo: { icon: Circle, label: "Not Started", cls: "text-ink-faint bg-cream" },
};

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
  const navigate = useNavigate();

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

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              {tab === "Results" && (
                <div className="grid lg:grid-cols-[320px_1fr] gap-6">
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
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => navigate("/consultation")}
                            aria-label={`Talk to an expert about ${m.title}`}
                            className="w-9 h-9 rounded-full bg-coral text-white flex items-center justify-center shrink-0"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              )}

              {tab === "Documents" && (
                <div className="bg-white rounded-3xl p-7 shadow-[var(--shadow-lift)]">
                  <h3 className="font-display text-[19px] font-semibold text-ink mb-5">Your document checklist</h3>
                  <Stagger className="flex flex-col gap-3" stagger={0.06}>
                    {DOCUMENTS.map((d) => {
                      const meta = STATUS_META[d.status];
                      return (
                        <StaggerItem key={d.name}>
                          <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-cream">
                            <span className="text-[14px] text-ink font-medium">{d.name}</span>
                            <span className={`flex items-center gap-1.5 text-[11.5px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${meta.cls}`}>
                              <meta.icon className="w-3.5 h-3.5" />
                              {meta.label}
                            </span>
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </Stagger>
                </div>
              )}

              {tab === "Timeline" && (
                <div className="bg-white rounded-3xl p-7 shadow-[var(--shadow-lift)]">
                  <h3 className="font-display text-[19px] font-semibold text-ink mb-6">Application timeline</h3>
                  <Stagger className="flex flex-col" stagger={0.08}>
                    {TIMELINE.map((step, i) => {
                      const meta = STATUS_META[step.status === "active" ? "active" : step.status];
                      const isLast = i === TIMELINE.length - 1;
                      return (
                        <StaggerItem key={step.label}>
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${meta.cls}`}>
                                <meta.icon className="w-4 h-4" />
                              </span>
                              {!isLast && <span className="w-px flex-1 bg-ink/10 my-1" />}
                            </div>
                            <div className={isLast ? "pb-0" : "pb-7"}>
                              <h4 className="text-[14.5px] font-semibold text-ink">{step.label}</h4>
                              <p className="text-[13px] text-ink-faint">{step.desc}</p>
                            </div>
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </Stagger>
                </div>
              )}

              {tab === "Next Steps" && (
                <Stagger className="flex flex-col gap-4" stagger={0.08}>
                  {NEXT_STEPS.map((s) => (
                    <StaggerItem key={s.title}>
                      <div className="bg-white rounded-2xl p-5 flex items-center justify-between gap-4 shadow-[var(--shadow-card)]">
                        <div className="flex items-center gap-4 min-w-0">
                          <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.urgent ? "bg-coral-50 text-coral" : "bg-cream text-ink-soft"}`}>
                            <CalendarCheck className="w-5 h-5" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-[14.5px] font-semibold text-ink">{s.title}</h4>
                            <p className="text-[13px] text-ink-faint">{s.desc}</p>
                          </div>
                        </div>
                        {s.cta && (
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate("/consultation")}
                            className="shrink-0 inline-flex items-center gap-1.5 bg-coral text-white px-4 py-2.5 rounded-full font-semibold text-[13px] shadow-[0_8px_20px_rgba(255,90,60,0.35)]"
                          >
                            Book Call <ArrowRight className="w-3.5 h-3.5" />
                          </motion.button>
                        )}
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              )}
            </motion.div>
          </AnimatePresence>

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
