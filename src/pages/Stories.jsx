import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Img from "../components/Img";

const FILTERS = ["All", "Canada", "Australia", "UK", "USA", "Study", "Work", "PR"];

const SIDE_STORIES = [
  { img: "/images/stories/amit-skilled-worker.jpg", title: "Skilled Worker Visa to Australia", name: "Amit's Journey to Australia", flag: "🇦🇺" },
  { img: "/images/stories/priya-student.jpg", title: "Student Visa", name: "Priya's Dream to UK", flag: "🇬🇧" },
  { img: "/images/stories/kapoor-family.jpg", title: "Family Visa", name: "The Kapoor Family to Canada", flag: "🇨🇦" },
];

const RESOURCES = [
  { img: "/images/resources/canada-pr-guide.jpg", title: "Canada PR Guide 2024", sub: "Complete pathway explained" },
  { img: "/images/resources/top-universities-australia.jpg", title: "Top Universities in Australia", sub: "Your study abroad checklist" },
  { img: "/images/resources/uk-skilled-worker.jpg", title: "UK Skilled Worker Visa", sub: "Eligibility & documents" },
  { img: "/images/resources/life-in-canada.jpg", title: "Life in Canada", sub: "A newcomer's guide" },
];

export default function Stories() {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream">
        <Navbar variant="light" cta={{ label: "Free Consultation", to: "/consultation", style: "dark" }} />

        <main className="max-w-[1440px] mx-auto px-6 md:px-10 pt-14 pb-16">
          <Reveal direction="up" className="text-center max-w-xl mx-auto mb-8">
            <h1 className="font-display text-[42px] md:text-[50px] font-semibold text-ink mb-3">Stories That Inspire</h1>
            <p className="text-ink-soft text-[16px]">Real people. Real journeys. Real success.</p>
          </Reveal>

          <Reveal direction="up" delay={0.08} className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-white/70 p-1.5 rounded-full shadow-[var(--shadow-soft)]">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setActive(f)} className="relative px-4 py-2 rounded-full text-[13.5px] font-semibold">
                  {active === f && (
                    <motion.span layoutId="story-pill" className="absolute inset-0 bg-coral rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                  )}
                  <span className={`relative z-10 ${active === f ? "text-white" : "text-ink-soft hover:text-ink"}`}>{f}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mb-16">
            <Reveal
              direction="right"
              role="button"
              tabIndex={0}
              onClick={() => navigate("/consultation")}
              onKeyDown={(e) => e.key === "Enter" && navigate("/consultation")}
              className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] group cursor-pointer"
            >
              <Img
                src="/images/stories/ananya-graduation.jpg"
                alt="Ananya Sharma at her graduation"
                className="w-full h-[420px] transition-transform duration-700 group-hover:scale-105"
                rounded="rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <Quote className="absolute top-6 left-6 w-8 h-8 text-white/70" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="font-display text-white text-[22px] md:text-[26px] leading-snug italic mb-4 max-w-lg">
                  "From student visa to PR — VisaBridge was with me at every step."
                </p>
                <div className="flex items-center gap-2 text-white">
                  <span className="font-semibold text-[14.5px]">Ananya Sharma</span>
                  <span className="text-white/60">·</span>
                  <span className="text-[13.5px] text-white/80">Canada PR · Software Engineer</span>
                  <span className="text-lg">🇨🇦</span>
                </div>
              </div>
            </Reveal>

            <Stagger className="flex flex-col gap-5" stagger={0.1}>
              {SIDE_STORIES.map((s) => (
                <StaggerItem key={s.name}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    onClick={() => navigate("/consultation")}
                    className="flex items-center gap-4 bg-white rounded-2xl p-3 shadow-[var(--shadow-soft)] cursor-pointer"
                  >
                    <Img src={s.img} alt={s.name} className="w-20 h-20 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11.5px] font-semibold text-coral uppercase tracking-wide mb-0.5">{s.title}</div>
                      <div className="font-display text-[15.5px] font-semibold text-ink truncate">{s.name}</div>
                      <span className="text-base">{s.flag}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="up" className="flex items-center justify-between mb-6">
            <h3 className="font-display text-[22px] font-semibold text-ink">Useful Resources</h3>
            <button onClick={() => navigate("/consultation")} className="flex items-center gap-1 text-coral font-semibold text-[13.5px] group">
              View All <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
            {RESOURCES.map((r) => (
              <StaggerItem key={r.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  onClick={() => navigate("/consultation")}
                  className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] h-full cursor-pointer"
                >
                  <Img src={r.img} alt={r.title} className="w-full h-32" rounded="rounded-none" />
                  <div className="p-4">
                    <h5 className="font-semibold text-[14px] text-ink mb-0.5">{r.title}</h5>
                    <p className="text-[12.5px] text-ink-faint">{r.sub}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </main>
      </div>
    </PageTransition>
  );
}
