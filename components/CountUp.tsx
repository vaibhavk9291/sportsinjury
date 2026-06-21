"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

export default function CountUp({ 
  to, 
  from = 0, 
  duration = 1.5,
  suffix = ""
}: { 
  to: number; 
  from?: number; 
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const rounded = useTransform(springValue, (latest) => Math.round(latest).toLocaleString());
  
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
      const timeout = setTimeout(() => {
        setIsDone(true);
      }, duration * 1000 + 100);
      return () => clearTimeout(timeout);
    }
  }, [isInView, motionValue, to, duration]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      <motion.span 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isDone && suffix ? 1 : 0, scale: isDone && suffix ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {suffix}
      </motion.span>
    </span>
  );
}
