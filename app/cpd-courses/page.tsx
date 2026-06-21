"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Activity, Stethoscope, Clock } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookCTA from "@/components/FloatingBookCTA";

export default function CPDCoursesPage() {
  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, margin: "-80px" });

  const section2Ref = useRef(null);
  const section2InView = useInView(section2Ref, { once: true, margin: "-80px" });

  const section3Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true, margin: "-80px" });

  const section4Ref = useRef(null);
  const section4InView = useInView(section4Ref, { once: true, margin: "-80px" });

  const courses = [
    {
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2025/05/Subscribe-1024x683.png",
      duration: "2 Days · Face to Face",
      name: "Acupuncture Diploma in Dry Needling",
      desc: "Dry needling for muscular pain. Enhance your career cost-effectively with CPD hours. Over 100 hands-on techniques covering the full body.",
      link: "https://mysportsinjury.co.uk/product/acupuncture-diploma-in-dry-needling/"
    },
    {
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2025/05/Subscribe-4-1024x683.png",
      duration: "3 Days · Face to Face",
      name: "Myofascial Active Release Therapy & PNF",
      desc: "Strong practical and theoretical foundation. Covers anatomy, physiology, advanced sports massage techniques, and full client care. Fully accredited.",
      link: "https://mysportsinjury.co.uk/product/foundational-level-3-diploma-in-sports-massage-therapy/"
    },
    {
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2025/05/Subscribe-1-1024x683.png",
      duration: "3 Days · Face to Face",
      name: "Advanced Diploma — HVLA Spinal Manipulation & Manual Therapy",
      desc: "In-depth training in high-velocity, low-amplitude spinal manipulation. Advanced manual therapy techniques for clinical specialists.",
      link: "https://mysportsinjury.co.uk/product/advanced-diploma-techniques-in-manual-therapy/"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AnnouncementBar />
      <Navbar />

      <main className="flex flex-col min-h-screen">
        {/* SECTION 1: HERO */}
        <section ref={section1Ref} className="relative bg-[var(--color-brand-bg)] pt-32 pb-20 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-lime)] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex justify-center gap-3 mb-6 flex-wrap">
                <div className="border border-[var(--color-brand-lime)]/30 bg-[var(--color-brand-lime)]/8 text-[var(--color-brand-lime)] text-xs rounded-full px-4 py-1.5">
                  🎓 10% OFF Your First Course Booking
                </div>
                <div className="border border-[var(--color-brand-lime)]/30 bg-[var(--color-brand-lime)]/8 text-[var(--color-brand-lime)] text-xs rounded-full px-4 py-1.5">
                  💰 £150 OFF Early Bird Access
                </div>
              </div>

              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold mb-4">
                ACCREDITED CPD COURSES
              </span>

              <h1 className="font-syne font-[800] text-[clamp(48px,7vw,80px)] leading-[0.92]">
                <span className="block text-white">Commit to Growth.</span>
                <span className="block text-[var(--color-brand-lime)]">Advance Your Career.</span>
              </h1>

              <p className="font-inter text-[18px] text-[var(--color-brand-muted)] max-w-2xl mx-auto mt-5 leading-relaxed">
                Hands-on, accredited CPD courses for physiotherapists, chiropractors, and sports therapists. Elevate your clinical skills. Deliver better results for your patients.
              </p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <a
                  href="#courses"
                  className="bg-[var(--color-brand-lime)] text-black rounded-full px-8 py-4 font-bold hover:bg-lime-300 transition-colors text-sm"
                >
                  Browse All Courses
                </a>
                <a
                  href="mailto:info@mysportsinjury.co.uk"
                  className="border border-[rgba(255,255,255,0.07)] text-white rounded-full px-8 py-4 hover:border-white/20 transition-colors text-sm font-medium"
                >
                  Claim Early Bird Discount →
                </a>
              </div>

              <div className="mt-10 flex justify-center gap-12 flex-wrap">
                {[
                  { value: "100+", label: "Hands-On Techniques" },
                  { value: "CPD", label: "Accredited Hours" },
                  { value: "3", label: "Specialist Courses" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-syne font-bold text-white text-3xl">{stat.value}</span>
                    <span className="text-[var(--color-brand-muted)] text-xs mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: COURSES GRID */}
        <section id="courses" ref={section2Ref} className="bg-[var(--color-brand-card)] py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                WHAT WE OFFER
              </span>
              <h2 className="font-syne text-white text-[32px] md:text-[40px] font-bold leading-tight mt-2">
                Choose Your Course.
              </h2>
              <p className="text-[var(--color-brand-muted)] text-base mt-2">
                All courses are face-to-face, practical, and CPD accredited.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="bg-[var(--color-brand-bg)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[var(--color-brand-lime)]/25 transition-all duration-300 flex flex-col group cursor-pointer"
                  onClick={() => window.open(course.link, "_blank")}
                >
                  <div className="aspect-[16/9] w-full bg-[var(--color-brand-surface)] relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[var(--color-brand-lime)] text-black text-[11px] font-bold rounded-full px-3 py-1">
                      CPD ACCREDITED
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="bg-[var(--color-brand-surface)] border border-[rgba(255,255,255,0.07)] text-[var(--color-brand-muted)] text-[11px] rounded-full px-3 py-1 inline-block w-fit">
                      {course.duration}
                    </div>
                    <h3 className="font-syne font-semibold text-white text-lg mt-3 leading-snug">
                      {course.name}
                    </h3>
                    <p className="font-inter text-[var(--color-brand-muted)] text-sm leading-relaxed mt-2 flex-grow">
                      {course.desc}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[rgba(255,255,255,0.07)] pt-4">
                      <span className="text-[var(--color-brand-lime)] text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                        View Details →
                      </span>
                      <div className="flex items-center gap-1 text-[var(--color-brand-muted)] text-xs">
                        <Clock size={14} />
                        <span>CPD Hours</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: EARLY BIRD CTA BANNER */}
        <section ref={section3Ref} className="bg-[var(--color-brand-lime)] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between flex-wrap gap-6"
            >
              <div className="flex-1 min-w-[300px]">
                <span className="text-[#0C0C0E]/60 font-syne text-[11px] uppercase tracking-widest block font-bold mb-1">
                  LIMITED TIME
                </span>
                <h2 className="font-syne text-[#0C0C0E] text-[40px] font-bold leading-tight">
                  Get £150 Off Early Bird Access.
                </h2>
                <p className="font-inter text-[#0C0C0E]/70 text-sm mt-2 max-w-lg">
                  Book any CPD course today and lock in your early bird rate. Limited places per cohort.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="mailto:info@mysportsinjury.co.uk"
                  className="bg-[#0C0C0E] text-white rounded-full px-8 py-4 font-bold hover:bg-zinc-800 transition-colors text-sm whitespace-nowrap"
                >
                  Claim Early Bird Discount
                </a>
                <a href="tel:01615244339" className="text-[#0C0C0E]/60 text-xs text-center mt-3 block hover:text-[#0C0C0E] transition-colors">
                  or call 0161 524 4339
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: WHO THESE COURSES ARE FOR */}
        <section ref={section4Ref} className="bg-[var(--color-brand-bg)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold">
                DESIGNED FOR
              </span>
              <h2 className="font-syne text-white text-[32px] md:text-[40px] font-bold leading-tight mt-2">
                Built for Practicing Clinicians.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              {[
                {
                  icon: GraduationCap,
                  title: "Physiotherapists",
                  desc: "HCPC-registered physiotherapists looking to expand their clinical toolkit with evidence-based techniques."
                },
                {
                  icon: Activity,
                  title: "Sports Therapists",
                  desc: "Qualified sports therapists seeking advanced hands-on skills to treat complex musculoskeletal presentations."
                },
                {
                  icon: Stethoscope,
                  title: "Chiropractors",
                  desc: "Chiropractors wanting to integrate soft tissue and dry needling approaches into their existing practice."
                }
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 28 }}
                    animate={section4InView ? { opacity: 1, y: 0 } : {}}
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
      </main>

      <Footer />
      <FloatingBookCTA />
    </motion.div>
  );
}
