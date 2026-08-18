import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProgressRing({ value = 85, size = 132, stroke = 11, label, sublabel }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#eee2d6" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#ring-gradient)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? circumference - (value / 100) * circumference : circumference }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <defs>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a50" />
            <stop offset="100%" stopColor="#21a366" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-ink font-display">{label ?? `${value}%`}</span>
        {sublabel && <span className="text-[11px] text-ink-faint font-medium">{sublabel}</span>}
      </div>
    </div>
  );
}
