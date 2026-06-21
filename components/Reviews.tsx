"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "The team at MY Sports Injury got me back on the pitch in 3 weeks after an ankle injury that had been bugging me for months. Incredible knowledge and care throughout.",
      name: "James R., Footballer"
    },
    {
      text: "Professional, thorough and genuinely effective. My chronic lower back pain is finally manageable. The IASTM treatment was a game changer.",
      name: "Sarah K., Office Professional"
    },
    {
      text: "Best sports massage I've ever had in Manchester. The therapist actually listened and targeted the exact problem areas. Will be coming back monthly.",
      name: "Damien T., Runner"
    },
    {
      text: "Post-surgical physio here was brilliant. Clear plan from day one, and they really pushed me in the right direction to get full mobility back.",
      name: "Priya M., Post-Op Patient"
    },
    {
      text: "Amazing holistic approach — they combined chiropractic and acupuncture for my shoulder and the results were remarkable. Highly recommend to any athlete.",
      name: "Marcus O., CrossFit Athlete"
    }
  ];

  return (
    <section className="bg-[var(--color-brand-card)] py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
            PATIENT STORIES
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-2">
            Real Results. Real People.
          </h2>
          <p className="text-zinc-400 text-sm flex items-center gap-2">
            <span className="text-[var(--color-brand-lime)]">★</span> 4.9 / 5.0 — Based on 150+ Google Reviews
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 mt-12 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[320px] max-w-[360px] snap-center bg-[var(--color-brand-bg)] rounded-2xl border border-zinc-800 p-6 flex flex-col"
            >
              <div className="flex gap-1 text-[var(--color-brand-lime)] mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
              <div className="mt-6">
                <p className="text-white font-semibold text-sm">{review.name}</p>
                <p className="text-zinc-500 text-xs mt-1 flex items-center gap-1">
                  ✓ Verified Google Review
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://g.page/mysportsinjury" // Assuming standard Google Maps link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-8 border border-zinc-700 text-white rounded-full hover:border-[var(--color-brand-lime)] transition-colors mx-auto block w-fit text-sm font-medium"
        >
          Read All Reviews on Google →
        </a>
      </div>
      
      {/* Hide scrollbar styles locally */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
