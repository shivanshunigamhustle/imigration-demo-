import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, PhoneCall, MessageCircleHeart, Target, LifeBuoy } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Img from "../components/Img";

const CHECKLIST = [
  { icon: PhoneCall, label: "One-to-one consultation" },
  { icon: MessageCircleHeart, label: "Clear, honest guidance" },
  { icon: Target, label: "Tailored to your goals" },
  { icon: LifeBuoy, label: "End-to-end support" },
];

const DATES = ["Today", "Tomorrow", "Fri, 22 Nov", "Sat, 23 Nov"];
const TIMES = ["10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];

export default function Consultation() {
  const [date, setDate] = useState("Fri, 22 Nov");
  const [time, setTime] = useState("11:00 AM");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream overflow-x-clip">
        <Navbar variant="light" cta={{ label: "Get Started", to: "/consultation", style: "coral" }} />

        <main className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-16 pb-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">
            <div>
              <Reveal direction="up">
                <span className="inline-block text-[12.5px] font-bold tracking-[0.14em] text-coral uppercase mb-5">
                  Talk to our Experts
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.08}>
                <h1 className="font-display text-[42px] md:text-[52px] leading-[1.08] font-semibold text-ink text-balance mb-6">
                  Take the <span className="italic text-gradient-coral">first step</span> today
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.16}>
                <p className="text-[16px] text-ink-soft leading-relaxed max-w-md mb-9">
                  Get expert advice tailored to your profile. No guesswork. Just the right guidance.
                </p>
              </Reveal>

              <div className="flex flex-col gap-4 mb-10">
                {CHECKLIST.map((c, i) => (
                  <Reveal key={c.label} direction="right" delay={0.2 + i * 0.06} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald/15 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-emerald" strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] text-ink-soft font-medium">{c.label}</span>
                  </Reveal>
                ))}
              </div>

              <Reveal direction="up" delay={0.5} className="flex items-center gap-3 mb-16">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <Img key={i} src={`/images/advisors/advisor-${i}.jpg`} alt="Advisor" rounded="rounded-full" className="w-9 h-9 border-2 border-cream" />
                  ))}
                </div>
                <span className="text-[13.5px] text-ink-soft">
                  Advisors with <span className="font-bold text-ink">10+ years</span> immigration expertise
                </span>
              </Reveal>

              <Reveal direction="fade" delay={0.3} className="relative h-[220px] hidden md:block">
                <Globe />
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.15}>
              <div className="bg-white rounded-3xl shadow-[var(--shadow-lift)] p-7 sticky top-28">
                <h3 className="font-display text-[20px] font-semibold text-ink mb-1">Book a Free Consultation</h3>
                <p className="text-[13.5px] text-ink-faint mb-6">Choose a time that works for you</p>

                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {DATES.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDate(d)}
                      className={`relative px-3 py-2.5 rounded-xl text-[13px] font-semibold border transition-colors ${
                        date === d ? "border-coral text-coral bg-coral-50" : "border-ink/10 text-ink-soft hover:border-ink/20"
                      }`}
                    >
                      {date === d && <motion.span layoutId="date-ring" className="absolute inset-0 rounded-xl ring-2 ring-coral" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                      <span className="relative">{d}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-7">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`relative px-2 py-2.5 rounded-xl text-[12.5px] font-semibold transition-colors ${
                        time === t ? "bg-ink text-white" : "bg-cream text-ink-soft hover:bg-cream-2"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setConfirmed(true)}
                  className="w-full flex items-center justify-center gap-2 bg-coral text-white py-3.5 rounded-full font-semibold text-[14.5px] shadow-[0_10px_24px_rgba(255,90,60,0.35)] hover:bg-coral-dark transition-colors"
                >
                  {confirmed ? `Confirmed for ${date}, ${time}` : "Confirm Appointment"}
                  {!confirmed && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </div>
            </Reveal>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

function Globe() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <motion.div
        animate={{ rotate: 360 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[190px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full shadow-[0_-10px_40px_rgba(14,43,46,0.25)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.18), transparent 45%), repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 32px), linear-gradient(135deg, var(--color-navy), var(--color-navy-2))",
        }}
      />
      <svg className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-24 overflow-visible" viewBox="0 0 260 100" fill="none">
        <motion.path
          d="M0,80 Q80,10 260,30"
          stroke="#ff5a3c"
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1, ease: "easeInOut" }}
        />
        <motion.g animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ offsetPath: "path('M0,80 Q80,10 260,30')" }}>
          <circle r="4" fill="#ff5a3c" />
        </motion.g>
      </svg>
    </div>
  );
}
