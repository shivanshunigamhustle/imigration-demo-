import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import Img from "../components/Img";

const STATS = [
  { to: 25, suffix: "+", label: "Countries" },
  { to: 100, suffix: "K+", label: "Successful Visas" },
  { to: 98, suffix: "%", label: "Success Rate" },
  { to: 10, suffix: "+", label: "Years of Expertise" },
];

const COLLAGE = [
  { src: "/images/hero/collage-eiffel.jpg", alt: "Eiffel Tower, Paris", cls: "w-[150px] h-[190px] top-0 left-6 rotate-[-6deg] z-20" },
  { src: "/images/hero/collage-opera.jpg", alt: "Sydney Opera House", cls: "w-[160px] h-[130px] top-6 right-0 rotate-[5deg] z-10" },
  { src: "/images/hero/collage-liberty.jpg", alt: "Statue of Liberty, New York", cls: "w-[150px] h-[190px] bottom-0 left-0 rotate-[4deg] z-10" },
  { src: "/images/hero/collage-skyline.jpg", alt: "City skyline", cls: "w-[170px] h-[140px] bottom-4 right-4 rotate-[-4deg] z-20" },
];

export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream overflow-x-clip">
        <Navbar variant="light" cta={{ label: "Check Eligibility", to: "/consultation", style: "coral" }} />

        <div className="absolute top-24 -left-32 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />
        <div className="absolute top-48 right-0 w-96 h-96 rounded-full bg-emerald/10 blur-3xl pointer-events-none" />

        <main className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal direction="up" delay={0.05}>
                <span className="inline-block text-[12.5px] font-bold tracking-[0.14em] text-coral uppercase mb-5">
                  Dream. Plan. We'll take you there.
                </span>
              </Reveal>

              <Reveal direction="up" delay={0.12}>
                <h1 className="font-display text-[44px] md:text-[58px] leading-[1.06] font-semibold text-ink text-balance mb-6">
                  Your next chapter has a <span className="text-gradient-coral italic">destination.</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="text-[17px] text-ink-soft leading-relaxed max-w-md mb-8">
                  Expert guidance for your global future. From assessment to visa, we're with you at every step.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.28}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/destinations");
                  }}
                  className="flex items-center gap-2 bg-white rounded-full p-2 pl-5 max-w-md shadow-[var(--shadow-card)] mb-8 focus-within:ring-2 ring-coral/30 transition-shadow"
                >
                  <Search className="w-4.5 h-4.5 text-ink-faint shrink-0" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where do you want to go?"
                    className="flex-1 outline-none bg-transparent text-[14.5px] text-ink placeholder:text-ink-faint py-2"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    className="w-10 h-10 rounded-full bg-coral text-white flex items-center justify-center shrink-0 shadow-[0_6px_16px_rgba(255,90,60,0.4)]"
                  >
                    <ArrowRight className="w-4.5 h-4.5" />
                  </motion.button>
                </form>
              </Reveal>

              <Reveal direction="up" delay={0.34} className="flex items-center gap-3 mb-14">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Img
                      key={i}
                      src={`/images/people/avatar-${i}.jpg`}
                      alt="Happy client"
                      rounded="rounded-full"
                      className="w-9 h-9 border-2 border-cream"
                    />
                  ))}
                </div>
                <div className="text-[13.5px] text-ink-soft leading-tight">
                  <span className="font-bold text-ink">10,000+</span> <br className="hidden sm:block" />
                  Happy Clients Worldwide
                </div>
              </Reveal>

              <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl border-t border-ink/10 pt-8" stagger={0.08}>
                {STATS.map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="font-display text-[26px] font-bold text-ink">
                      <AnimatedCounter to={s.to} suffix={s.suffix} />
                    </div>
                    <div className="text-[12.5px] text-ink-faint mt-0.5">{s.label}</div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div className="relative h-[440px] hidden lg:block">
              {COLLAGE.map((c, i) => (
                <motion.div
                  key={c.alt}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute ${c.cls}`}
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                    className="w-full h-full"
                  >
                    <Img
                      src={c.src}
                      alt={c.alt}
                      className="w-full h-full border-[6px] border-white shadow-[var(--shadow-lift)]"
                      rounded="rounded-2xl"
                    />
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[var(--shadow-lift)] px-4 py-3 z-30 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                <span className="text-[12.5px] font-semibold text-ink">Visa Approved 🎉</span>
              </motion.div>
            </div>
          </div>

          <Reveal direction="fade" delay={0.1} className="mt-20 text-center">
            <p className="text-[12px] tracking-[0.12em] uppercase text-ink-faint font-semibold mb-6">
              Trusted by students, professionals &amp; families
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-50 text-ink-soft font-display text-lg italic">
              <span>The Migration Times</span>
              <span>GlobalEdu</span>
              <span>WorkVisa Weekly</span>
              <span>Settle Abroad</span>
              <span>NRI Today</span>
            </div>
          </Reveal>
        </main>
      </div>
    </PageTransition>
  );
}
