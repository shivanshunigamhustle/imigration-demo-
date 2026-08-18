import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, ClipboardCheck, Route as RouteIcon, Users, PlaneTakeoff, Star, ShieldCheck, Award, ListChecks, HeartHandshake } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Img from "../components/Img";

const STEPS = [
  { icon: Compass, title: "Explore", desc: "Choose your dream destination" },
  { icon: ClipboardCheck, title: "Check Eligibility", desc: "Answer a few questions" },
  { icon: RouteIcon, title: "Get Your Plan", desc: "Receive a personalized pathway" },
  { icon: Users, title: "Apply with Experts", desc: "We handle the complexities" },
  { icon: PlaneTakeoff, title: "Move with Confidence", desc: "Start your new life" },
];

const TRUST = [
  { icon: Award, label: "High Success Rate" },
  { icon: ShieldCheck, label: "Certified Experts" },
  { icon: ListChecks, label: "Transparent Process" },
  { icon: HeartHandshake, label: "Personalized Guidance" },
];

export default function HowItWorks() {
  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: pathRef, offset: ["start 80%", "end 60%"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream">
        <Navbar variant="light" cta={{ label: "Get Started", to: "/consultation", style: "coral" }} />

        <main className="max-w-[1440px] mx-auto px-6 md:px-10 pt-14 pb-16">
          <Reveal direction="up" className="text-center max-w-xl mx-auto mb-16">
            <h1 className="font-display text-[42px] md:text-[50px] font-semibold text-ink mb-3">
              Your Journey in <span className="italic text-gradient-coral">5</span> Simple Steps
            </h1>
            <p className="text-ink-soft text-[16px]">From dream to destination — we make it simple, transparent and smooth.</p>
          </Reveal>

          <div ref={pathRef} className="relative mb-20">
            <svg className="hidden lg:block absolute top-9 left-[8%] right-[8%] w-[84%] h-10 -z-0" viewBox="0 0 1000 60" preserveAspectRatio="none" fill="none">
              <motion.path
                d="M0,30 C150,-10 250,70 400,30 C550,-10 650,70 800,30 C880,10 940,10 1000,20"
                stroke="#ffb59f"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                style={{ pathLength }}
              />
            </svg>

            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10" stagger={0.12}>
              {STEPS.map((s, i) => (
                <StaggerItem key={s.title} className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-4 shadow-[var(--shadow-card)] ${
                      i === STEPS.length - 1 ? "bg-coral text-white" : "bg-white text-coral"
                    }`}
                  >
                    <s.icon className="w-7 h-7" strokeWidth={1.8} />
                  </motion.div>
                  <h3 className="font-display text-[16.5px] font-semibold text-ink mb-1">{s.title}</h3>
                  <p className="text-[12.5px] text-ink-faint max-w-[140px]">{s.desc}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center mb-20">
            <Reveal direction="right" className="relative">
              <Img
                src="/images/howitworks/traveler-mountains.jpg"
                alt="Traveler looking out over mountains, ready for a new journey"
                className="w-full h-[340px] md:h-[420px]"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 left-6 md:left-10 bg-white rounded-2xl shadow-[var(--shadow-lift)] p-5 max-w-[300px]"
              >
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-[13.5px] text-ink-soft leading-relaxed mb-3">
                  "VisaBridge made my Canada PR journey incredibly easy. Professional, transparent and always there when I needed support."
                </p>
                <div className="flex items-center gap-2.5">
                  <Img src="/images/howitworks/rahul-avatar.jpg" alt="Rahul Mehta" rounded="rounded-full" className="w-9 h-9" />
                  <div>
                    <div className="text-[13px] font-semibold text-ink">Rahul Mehta</div>
                    <div className="text-[11.5px] text-ink-faint flex items-center gap-1">Canada PR 🇨🇦</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal direction="left" delay={0.1} className="pt-8 lg:pt-0">
              <p className="text-[12.5px] font-bold tracking-[0.12em] text-coral uppercase mb-3">Real people, real outcomes</p>
              <h3 className="font-display text-[26px] font-semibold text-ink mb-3 text-balance">
                A process designed around you, not paperwork.
              </h3>
              <p className="text-[14.5px] text-ink-soft leading-relaxed">
                Every applicant gets a dedicated advisor, a clear timeline, and honest answers — so you always know exactly where you stand.
              </p>
            </Reveal>
          </div>

          <Reveal direction="up" className="bg-white rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)]">
            <h4 className="text-center font-display text-[19px] font-semibold text-ink mb-8">Why 100,000+ people trust VisaBridge</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TRUST.map((t) => (
                <div key={t.label} className="flex flex-col items-center text-center gap-2.5">
                  <span className="w-11 h-11 rounded-xl bg-coral-50 flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-coral" strokeWidth={1.8} />
                  </span>
                  <span className="text-[13px] font-medium text-ink-soft">{t.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </main>
      </div>
    </PageTransition>
  );
}
