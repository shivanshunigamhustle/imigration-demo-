import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ to = 100, suffix = "", prefix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const elRef = useRef(null);

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, to, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (elRef.current) elRef.current.textContent = `${prefix}${Math.floor(v).toLocaleString()}${suffix}`;
    });
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      <span ref={elRef}>{prefix}0{suffix}</span>
    </span>
  );
}
