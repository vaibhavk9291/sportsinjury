"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Tag, ClipboardList, Wifi, ShieldCheck, Gift, ArrowRight } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookCTA from "@/components/FloatingBookCTA";

export default function MembershipPage() {
  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, margin: "-80px" });

  const section2Ref = useRef(null);
  const section2InView = useInView(section2Ref, { once: true, margin: "-80px" });

  const section3Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true, margin: "-80px" });

  const section4Ref = useRef(null);
  const section4InView = useInView(section4Ref, { once: true, margin: "-80px" });

  const benefits = [
    {
      icon: CalendarCheck,
      title: "Priority Booking",
      desc: "Members get first access to new appointment slots — skip the waiting list and book when it suits you."
    },
    {
      icon: Tag,
      title: "Exclusive Member Pricing",
      desc: "Discounted rates across all treatments, CPD courses, and shop products — for as long as you're a member."
    },
    {
      icon: ClipboardList,
      title: "Personalised Recovery Plan",
      desc: "Your specialist builds and continuously updates a plan tailored specifically to your body, goals, and lifestyle."
    },
    {
      icon: Wifi,
      title: "Online & In-Clinic Access",
      desc: "Full flexibility — attend in person at our Manchester City Centre clinic or join via virtual telehealth sessions."
    },
    {
      icon: ShieldCheck,
      title: "Injury Prevention Support",
      desc: "Proactive check-ins and guidance to catch problems early and stop injuries before they sideline you."
    },
    {
      icon: Gift,
      title: "Member-Only Perks",
      desc: "Early-bird CPD course access, partner offers, and exclusive gift card discounts — available only to members."
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AnnouncementBar />
      <Navbar />

      <main className="flex flex-col min-h-screen">
        {/* SECTION 1: HERO */}
        <section ref={section1Ref} className="relative bg-[var(--color-brand-bg)] pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-lime)] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold mb-4">
                MEMBERSHIP WITH BENEFITS
              </span>

              <h1 className="font-syne font-[800] text-[clamp(50px,7vw,82px)] leading-[0.92]">
                <span className="block text-white">Recover Stronger.</span>
                <span className="block text-[var(--color-brand-lime)]">Perform Better.</span>
              </h1>

              <p className="font-inter text-[18px] text-[var(--color-brand-muted)] max-w-2xl mx-auto mt-5 leading-relaxed">
                Expert care on your terms — in-clinic or online. Priority booking, exclusive savings, and personalised recovery plans that keep you moving pain-free. Wherever you are, whenever you need.
              </p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <a
                  href="https://mysportinjury.janeapp.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-brand-lime)] text-black rounded-full px-8 py-4 font-bold hover:bg-lime-300 transition-colors text-sm"
                >
                  Join Membership
                </a>
                <a
                  href="tel:01615244339"
                  className="border border-[rgba(255,255,255,0.07)] text-white rounded-full px-8 py-4 hover:border-white/20 transition-colors text-sm font-medium"
                >
                  Call 0161 524 4339
                </a>
              </div>

              <div className="mt-6 flex justify-center flex-wrap gap-2">
                {["Runners", "Athletes", "Desk Workers", "Post-Surgery", "Weekend Warriors", "Chronic Pain"].map((tag, i) => (
                  <span key={i} className="bg-[var(--color-brand-surface)] border border-[rgba(255,255,255,0.07)] text-[var(--color-brand-muted)] text-xs rounded-full px-4 py-1.5 hover:border-[var(--color-brand-lime)]/30 hover:text-[var(--color-brand-lime)] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <video autoPlay muted loop playsInline className="w-full rounded-2xl border border-[rgba(255,255,255,0.07)] object-cover bg-zinc-900 aspect-video">
                <source src="https://mysportsinjury.co.uk/wp-content/uploads/2024/08/My-Sports-Injury.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: MEMBERSHIP BENEFITS */}
        <section ref={section2Ref} className="bg-[var(--color-brand-card)] py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                WHAT YOU GET
              </span>
              <h2 className="font-syne text-white text-[32px] md:text-[40px] font-bold leading-tight mt-2">
                Everything Included With Membership.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 28 }}
                    animate={section2InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className="bg-[var(--color-brand-bg)] rounded-2xl p-6 border border-[rgba(255,255,255,0.07)] hover:border-[var(--color-brand-lime)]/20 transition-all duration-300"
                  >
                    <Icon className="text-[var(--color-brand-lime)] w-6 h-6 mb-3" />
                    <h3 className="font-syne font-semibold text-white text-lg">{benefit.title}</h3>
                    <p className="font-inter text-[var(--color-brand-muted)] text-sm leading-relaxed mt-2">
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO IT'S BUILT FOR */}
        <section ref={section3Ref} className="bg-[var(--color-brand-bg)] py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <div className="bg-[var(--color-brand-card)] border border-[rgba(255,255,255,0.07)] rounded-2xl aspect-[3/4] flex items-end p-6 relative overflow-hidden bg-zinc-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-lime)]/15 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="font-syne font-bold text-white text-xl">#LivePainFree</div>
                  <div className="text-[var(--color-brand-muted)] text-sm mt-1">Manchester's most comprehensive membership.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                PERFECT FOR
              </span>
              <h2 className="font-syne text-white text-[32px] md:text-[36px] font-bold leading-tight mt-2">
                Built for People Who Take Recovery Seriously.
              </h2>
              <p className="font-inter text-[var(--color-brand-muted)] mt-3 leading-relaxed">
                Whether you're a runner logging 50 miles a week, a desk worker with chronic tension, recovering from surgery, or an athlete looking to stay ahead of injury — membership gives you the structure and professional support to keep moving.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {[
                  "Runners training for events",
                  "Office workers with posture & back issues",
                  "Post-surgery rehab patients",
                  "Athletes in competitive training",
                  "Anyone with recurring or chronic pain",
                  "People who want to stay injury-free long term"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ArrowRight className="text-[var(--color-brand-lime)] w-3.5 h-3.5 shrink-0" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: JOIN CTA */}
        <section ref={section4Ref} className="bg-[var(--color-brand-lime)] py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="font-syne text-[#0C0C0E] text-[36px] md:text-[44px] font-bold leading-tight">
                Join Today. Move Without Limits.
              </h2>
              <p className="font-inter text-[#0C0C0E]/70 mt-3 max-w-xl mx-auto">
                Stop managing pain. Start resolving it. Expert support, wherever you are, whenever you need it.
              </p>
              
              <a
                href="https://mysportinjury.janeapp.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0C0C0E] text-white rounded-full px-10 py-4 font-bold mt-8 hover:bg-zinc-800 transition-colors text-sm"
              >
                Join Membership Now →
              </a>
              <a href="tel:01615244339" className="text-[#0C0C0E]/60 text-sm mt-4 block hover:text-[#0C0C0E] transition-colors">
                or call us: 0161 524 4339
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
