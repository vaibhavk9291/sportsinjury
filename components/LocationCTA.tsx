"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationCTA() {
  return (
    <section id="location" className="w-full flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 bg-[var(--color-brand-lime)] p-12 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#0C0C0E] font-syne text-size-xs uppercase tracking-widest block mb-4 font-bold">
            FIND US
          </span>
          <h2 className="font-syne font-bold text-[40px] leading-tight text-[#0C0C0E] mb-6">
            Visit Us in Manchester City Centre.
          </h2>
          <div className="text-[#0C0C0E]/80 space-y-4 mb-8 text-base">
            <p className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <span>Manchester City Centre, Greater Manchester</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-xl">📞</span>
              <span>Contact us via booking system</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-xl">🕐</span>
              <span>Mon–Fri 8am–8pm | Sat 9am–5pm | Sun 10am–3pm</span>
            </p>
          </div>
          <a
            href="https://g.page/mysportsinjury" // Placeholder directions link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0C0C0E] text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
          >
            Get Directions →
          </a>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 bg-[var(--color-brand-card)] p-12 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[var(--color-brand-lime)] font-syne text-size-xs uppercase tracking-widest block mb-4">
            BOOK NOW
          </span>
          <h2 className="font-syne font-bold text-[40px] leading-tight text-white mb-4">
            Ready to Move Without Pain?
          </h2>
          <p className="text-[var(--color-brand-muted)] text-base mb-6">
            Book your appointment online in under 2 minutes. Same-week slots available.
          </p>
          <ul className="text-zinc-300 text-sm flex flex-col gap-3 mb-10">
            <li className="flex items-center gap-2"><span className="text-[var(--color-brand-lime)]">✓</span> HCPC & CSP Accredited Practitioners</li>
            <li className="flex items-center gap-2"><span className="text-[var(--color-brand-lime)]">✓</span> New patient slots available this week</li>
            <li className="flex items-center gap-2"><span className="text-[var(--color-brand-lime)]">✓</span> Multiple treatment types under one roof</li>
            <li className="flex items-center gap-2"><span className="text-[var(--color-brand-lime)]">✓</span> City centre location, easy transport links</li>
          </ul>
          <Link
            href="/book"
            className="inline-block bg-[var(--color-brand-lime)] text-black font-bold px-8 py-4 rounded-full hover:bg-lime-300 transition-colors"
          >
            Book Your Appointment →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
