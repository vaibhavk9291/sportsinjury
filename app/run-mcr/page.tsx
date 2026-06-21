"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CirclePlay, Target, Zap, ShieldCheck, CheckCircle, CalendarDays } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookCTA from "@/components/FloatingBookCTA";

export default function RunMCRPage() {
  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, margin: "-80px" });

  const section2Ref = useRef(null);
  const section2InView = useInView(section2Ref, { once: true, margin: "-80px" });

  const section3Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true, margin: "-80px" });

  const section4Ref = useRef(null);
  const section4InView = useInView(section4Ref, { once: true, margin: "-80px" });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AnnouncementBar />
      <Navbar />

      <main className="flex flex-col min-h-screen">
        {/* SECTION 1: HERO */}
        <section ref={section1Ref} className="relative bg-[var(--color-brand-bg)] min-h-screen pt-28 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-lime)] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center relative z-10">
            {/* LEFT column */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 border border-red-500/40 bg-red-500/8 text-red-400 text-xs rounded-full px-4 py-1.5 animate-urgency-pulse">
                ⚠️ Only a few slots left this week
              </div>

              <h1 className="font-syne font-[800] text-[clamp(46px,7vw,78px)] leading-[0.92] mt-4">
                <span className="block text-white">Sports Massage</span>
                <span className="block text-[var(--color-brand-lime)]">Manchester.</span>
              </h1>

              <p className="font-inter text-[17px] text-[var(--color-brand-muted)] max-w-md mt-4 leading-relaxed">
                Expert deep tissue and sports massage in Manchester City Centre. Trusted by 500+ athletes and active professionals. We identify the root cause — not just the symptom.
              </p>

              <div className="mt-5 flex flex-col gap-2">
                {[
                  "Reduce muscle tension & tightness",
                  "Recover faster from sports injuries",
                  "Improve performance & flexibility"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm font-medium">
                    <span>✅</span> {benefit}
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-[var(--color-brand-lime)]/8 border border-[var(--color-brand-lime)]/20 rounded-xl p-4 inline-block">
                <div className="text-[var(--color-brand-lime)] font-semibold text-sm">🎯 Limited Offer — 3 Sessions for £260</div>
                <div className="text-[var(--color-brand-muted)] text-xs mt-1">Save £30 when you book a package</div>
              </div>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a
                  href="#booking"
                  className="bg-[var(--color-brand-lime)] text-black rounded-full px-6 py-3 font-bold hover:bg-lime-300 transition-colors text-sm flex items-center"
                >
                  Book Your Session
                </a>
                <a
                  href="tel:01615244339"
                  className="border border-[rgba(255,255,255,0.07)] text-white rounded-full px-6 py-3 hover:border-white/20 transition-colors text-sm font-medium flex items-center"
                >
                  Call 0161 524 4339
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <div className="flex">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-zinc-700 border-2 border-[var(--color-brand-bg)] ${i > 1 ? "-ml-2" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-[var(--color-brand-muted)] text-sm">Join 500+ others in Manchester</span>
                <div className="w-px h-4 bg-[rgba(255,255,255,0.07)]" />
                <a href="https://g.page/mysportsinjury" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-lime)] text-sm hover:underline">
                  ⭐ 650+ Reviews →
                </a>
              </div>
            </motion.div>

            {/* RIGHT column */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] relative aspect-video bg-zinc-900">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="https://mysportsinjury.co.uk/wp-content/uploads/2025/12/My-Sports-Injury.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="flex gap-3 mt-3">
                {[
                  { value: "650+", label: "Google Reviews" },
                  { value: "98%", label: "Success Rate" },
                  { value: "10+", label: "Years in MCR" }
                ].map((stat, i) => (
                  <div key={i} className="bg-[var(--color-brand-card)] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-center flex-1">
                    <div className="font-syne font-bold text-white text-xl">{stat.value}</div>
                    <div className="text-[var(--color-brand-muted)] text-[11px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: TESTIMONIAL SPOTLIGHT */}
        <section ref={section2Ref} className="bg-[var(--color-brand-card)] py-20 border-y border-[rgba(255,255,255,0.07)]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                PATIENT STORY
              </span>
              <p className="font-syne text-[28px] text-white leading-snug mt-3 italic">
                "I had severe lower back pain and couldn't sit for more than 10 minutes. After 4 sessions I'm completely pain-free."
              </p>
              <div className="text-[var(--color-brand-muted)] text-sm mt-4 font-semibold">— James, Manchester</div>
              <div className="text-[var(--color-brand-lime)] text-lg mt-2 tracking-widest">★★★★★</div>
              <div className="text-[var(--color-brand-muted)] text-xs mt-1">✓ Verified Google Review</div>
              <a
                href="https://share.google/AIJsaGT1peUzk1eYe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-[var(--color-brand-lime)] text-sm hover:text-lime-300 transition-colors"
              >
                Read All Reviews →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <div className="aspect-video rounded-2xl bg-[var(--color-brand-surface)] border border-[rgba(255,255,255,0.07)] overflow-hidden relative group cursor-pointer flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <CirclePlay className="text-[var(--color-brand-lime)] w-12 h-12" />
                </div>
              </div>
              <div className="text-[var(--color-brand-muted)] text-xs text-center mt-2">
                James — Patient testimonial
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: WHY CHOOSE US */}
        <section ref={section3Ref} className="bg-[var(--color-brand-bg)] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                WHY MY SPORTS INJURY
              </span>
              <h2 className="font-syne text-white text-[32px] md:text-[40px] font-bold leading-tight mt-2">
                We Find the Cause. You Feel the Results.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {[
                {
                  icon: Target,
                  title: "Root Cause Diagnosis",
                  desc: "We analyse how your whole body moves, not just where it hurts. Most pain has a different source than you think."
                },
                {
                  icon: Zap,
                  title: "Fast, Lasting Results",
                  desc: "Most clients feel significant improvement within 1–3 sessions. We don't drag out treatment."
                },
                {
                  icon: ShieldCheck,
                  title: "HCPC Accredited Experts",
                  desc: "Every therapist is professionally qualified, HCPC registered, and trained to the highest standard."
                }
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 28 }}
                    animate={section3InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className="bg-[var(--color-brand-card)] rounded-2xl p-6 border border-[rgba(255,255,255,0.07)] hover:border-[var(--color-brand-lime)]/20 transition-all duration-300"
                  >
                    <Icon className="text-[var(--color-brand-lime)] w-8 h-8 mb-4" />
                    <h3 className="font-syne font-bold text-white text-lg">{card.title}</h3>
                    <p className="font-inter text-[var(--color-brand-muted)] text-sm mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: BOOKING SECTION */}
        <section id="booking" ref={section4Ref} className="bg-[var(--color-brand-card)] py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-lime)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                BOOK YOUR SESSION
              </span>
              <h2 className="font-syne text-white text-[38px] font-bold leading-tight mt-2">
                Ready to Move Without Pain?
              </h2>
              <p className="font-inter text-[var(--color-brand-muted)] text-base mt-3 leading-relaxed">
                Same-week appointments available. Secure your slot with HCPC-accredited sports massage therapists in Manchester City Centre.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {[
                  "3 Sessions for £260 (save £30 vs single bookings)",
                  "HCPC accredited, professionally trained therapists",
                  "Manchester City Centre — easy to reach by tram or bus",
                  "Flexible appointment times including evenings",
                  "98% patient satisfaction rate",
                  "650+ five-star Google reviews"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--color-brand-lime)] w-4 h-4 mt-1 shrink-0" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-[rgba(255,255,255,0.07)] my-8" />
              <div className="text-[var(--color-brand-muted)] text-sm">Or prefer to call?</div>
              <a href="tel:01615244339" className="text-[var(--color-brand-lime)] text-xl font-bold font-syne mt-1 block">
                0161 524 4339
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[var(--color-brand-bg)] rounded-2xl border border-[var(--color-brand-lime)]/20 p-8 flex flex-col items-center"
            >
              <CalendarDays className="text-[var(--color-brand-lime)] w-10 h-10" />
              <h3 className="font-syne text-white font-bold text-[22px] text-center mt-4">
                Book Online in 2 Minutes
              </h3>
              <p className="text-[var(--color-brand-muted)] text-sm text-center mt-2">
                Choose your date, time, and therapist. Instant confirmation.
              </p>

              <a
                href="https://mysportinjury.janeapp.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[var(--color-brand-lime)] text-black text-center font-bold rounded-full py-4 mt-6 hover:bg-lime-300 transition-colors"
              >
                Open Booking System →
              </a>

              <div className="w-full flex items-center my-5 gap-4">
                <div className="h-px bg-[rgba(255,255,255,0.07)] flex-1" />
                <span className="text-[var(--color-brand-muted)] text-xs uppercase tracking-widest">or</span>
                <div className="h-px bg-[rgba(255,255,255,0.07)] flex-1" />
              </div>

              <a
                href="tel:01615244339"
                className="w-full border border-[rgba(255,255,255,0.07)] text-white text-center font-bold rounded-full py-4 hover:border-white/20 transition-colors"
              >
                Call 0161 524 4339
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingBookCTA />
    </motion.div>
  );
}
