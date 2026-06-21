"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; role?: string; image?: string; stars?: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, image, stars }, i) => (
                <div className="p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[var(--color-brand-card)] shadow-lg shadow-[#C8F04B]/5 max-w-sm w-full" key={i}>
                  {stars && <div className="text-[#C8F04B] text-sm tracking-widest mb-3">{stars}</div>}
                  <div className="text-[#888896] text-sm leading-relaxed mb-4 italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-auto">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover border border-[rgba(255,255,255,0.1)]"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-[var(--color-brand-surface)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white font-bold text-sm">
                        {name.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-medium text-white tracking-tight leading-5 text-sm">{name}</div>
                      <div className="leading-5 text-[#888896] text-xs tracking-tight mt-0.5 flex items-center gap-1">
                        {role || <><span className="text-green-400">✓</span> Verified</>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
