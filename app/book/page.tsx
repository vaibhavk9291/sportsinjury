"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Phone, Check } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookPage() {
  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, margin: "-80px" });

  const section2Ref = useRef(null);
  const section2InView = useInView(section2Ref, { once: true, margin: "-80px" });

  const section3Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true, margin: "-80px" });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AnnouncementBar />
      <Navbar />

      <main className="flex flex-col min-h-screen">
        {/* SECTION 1: HERO */}
        <section ref={section1Ref} className="relative bg-[var(--color-brand-bg)] min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-lime)] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold mb-4">
                BOOK YOUR APPOINTMENT
              </span>

              <h1 className="font-syne font-[800] text-[clamp(44px,6vw,72px)] leading-[0.92]">
                <span className="block text-white">Let's Get You</span>
                <span className="block text-[var(--color-brand-lime)]">Booked In.</span>
              </h1>

              <p className="font-inter text-base text-[var(--color-brand-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
                Choose how you'd like to book your appointment. Online booking takes under 2 minutes — or call us directly and our team will get you sorted.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 bg-red-500/8 border border-red-500/30 text-red-400 text-xs rounded-full px-5 py-2 animate-urgency-pulse">
                ⚡ Only a few slots remaining this week
              </div>
            </motion.div>

            {/* BOOKING OPTIONS */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={section1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="bg-[var(--color-brand-lime)] rounded-2xl p-8 relative overflow-hidden transition-transform duration-300 flex flex-col"
              >
                <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="bg-black/15 text-[#0C0C0E] text-[11px] font-bold rounded-full px-3 py-1 uppercase mb-4 inline-block w-fit">
                    FASTEST OPTION
                  </div>

                  <CalendarDays className="text-[#0C0C0E] w-10 h-10" />
                  <h3 className="font-syne text-[#0C0C0E] font-bold text-[26px] mt-3">
                    Book Online
                  </h3>
                  <p className="font-inter text-[#0C0C0E]/75 text-sm mt-2 leading-relaxed">
                    Choose your service, therapist, date and time. Instant confirmation. Takes under 2 minutes.
                  </p>

                  <div className="mt-4 flex flex-col gap-2 flex-grow">
                    {[
                      "Available 24/7",
                      "Pick your therapist",
                      "Same-week slots available"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="text-[#0C0C0E]/70 w-3.5 h-3.5 shrink-0" />
                        <span className="text-[#0C0C0E]/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://mysportinjury.janeapp.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full bg-[#0C0C0E] text-white rounded-full py-4 font-bold text-center hover:bg-zinc-800 transition-colors block text-sm"
                  >
                    Book Now →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={section1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="bg-[var(--color-brand-card)] rounded-2xl p-8 border border-[rgba(255,255,255,0.07)] transition-transform duration-300 flex flex-col"
              >
                <div className="bg-[var(--color-brand-surface)] text-[var(--color-brand-muted)] text-[11px] font-bold rounded-full px-3 py-1 mb-4 inline-block w-fit">
                  SPEAK TO A HUMAN
                </div>

                <Phone className="text-[var(--color-brand-lime)] w-10 h-10" />
                <h3 className="font-syne text-white font-bold text-[26px] mt-3">
                  Call Us Directly
                </h3>
                <p className="font-inter text-[var(--color-brand-muted)] text-sm mt-2 leading-relaxed flex-grow">
                  Prefer to speak with someone? Our team will guide you to the right service and find a time that works.
                </p>

                <div className="mt-4">
                  <span className="font-syne text-[var(--color-brand-lime)] font-bold text-[28px] block">
                    0161 524 4339
                  </span>
                  <span className="text-[var(--color-brand-muted)] text-xs mt-1 block">
                    Available Mon–Fri 8am–8pm · Sat 9am–5pm
                  </span>
                </div>

                <a
                  href="tel:01615244339"
                  className="mt-6 w-full bg-[var(--color-brand-lime)] text-black rounded-full py-4 font-bold text-center hover:bg-lime-300 transition-colors block text-sm"
                >
                  Call Now →
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT TO EXPECT */}
        <section ref={section2Ref} className="bg-[var(--color-brand-card)] py-16 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                YOUR FIRST VISIT
              </span>
              <h2 className="font-syne text-white text-[34px] font-bold leading-tight mt-2">
                What Happens After You Book.
              </h2>
            </motion.div>

            <div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-0 relative">
              {/* Dashed line connector (hidden on mobile) */}
              <div className="hidden md:block absolute top-5 left-10 right-10 h-px border-t border-dashed border-lime-400/20 z-0"></div>

              {[
                {
                  num: "01",
                  title: "Book Your Slot",
                  desc: "Choose online or call us. We'll confirm your appointment via email or text."
                },
                {
                  num: "02",
                  title: "Attend Your Assessment",
                  desc: "Your specialist conducts a thorough assessment, discusses your history, and begins your first treatment."
                },
                {
                  num: "03",
                  title: "Get Your Recovery Plan",
                  desc: "Leave with a clear, personalised plan and a timeline for getting you back to full health."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative z-10 px-0 md:px-4"
                >
                  <div className="w-10 h-10 bg-[var(--color-brand-lime)]/10 border border-[var(--color-brand-lime)]/30 rounded-full flex items-center justify-center font-syne font-bold text-[var(--color-brand-lime)] text-sm mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-syne text-white font-semibold">{step.title}</h3>
                  <p className="font-inter text-[var(--color-brand-muted)] text-sm mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: MINI TRUST BAR */}
        <section ref={section3Ref} className="bg-[var(--color-brand-bg)] py-10 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-12 flex-wrap"
            >
              {[
                { icon: "⭐", text: "650+ Five-Star Reviews" },
                { icon: "🏆", text: "HCPC & CSP Accredited" },
                { icon: "📍", text: "Manchester City Centre" },
                { icon: "⚡", text: "Same-Week Appointments" },
                { icon: "📞", text: "0161 524 4339" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[var(--color-brand-muted)] text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      {/* Note: User requested <FloatingBookBtn /> but on this page they probably still want it to go to /book or JaneApp. Actually, the prompt says: "Exception: The "Open Booking System ->" button inside /app/book/page.tsx itself should still go directly to JaneApp externally."
          Wait, FloatingBookCTA goes to /book now. That's fine. */}
    </motion.div>
  );
}
