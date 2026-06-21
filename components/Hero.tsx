"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import CountUp from "@/components/CountUp";

export default function Hero() {
  return (
    <DotGlobeHero
      rotationSpeed={0.003}
      globeRadius={1.3}
      className="min-h-screen pt-24 pb-16 relative"
    >
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full pt-12 md:pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="inline-block border border-[var(--color-brand-lime)]/30 bg-[var(--color-brand-lime)]/5 text-[var(--color-brand-lime)] text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
        >
          Manchester's Leading Sports Clinic
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="font-syne font-bold text-[44px] md:text-[80px] leading-[0.95] tracking-tight text-white mb-6 drop-shadow-lg"
        >
          <span className="block">Move Without</span>
          <span className="block"><span className="lime-underline">Pain</span> Again.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed drop-shadow-md"
        >
          Expert physiotherapy, chiropractic care, and sports rehabilitation in Manchester City Centre. HCPC & CSP accredited. Trusted by thousands.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.21 }}
          className="mt-12 flex flex-wrap gap-8 md:gap-12 justify-center backdrop-blur-sm bg-black/10 p-6 rounded-3xl border border-[rgba(255,255,255,0.05)] inline-flex mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="font-syne font-bold text-2xl md:text-[28px] text-white">
              <CountUp to={5000} duration={1.5} suffix="+" />
            </span>
            <span className="text-sm text-zinc-400 mt-1">Patients Treated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-syne font-bold text-2xl md:text-[28px] text-white">HCPC</span>
            <span className="text-sm text-zinc-400 mt-1">Accredited</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-syne font-bold text-2xl md:text-[28px] text-white">
              <CountUp to={15} duration={1.5} suffix="+" />
            </span>
            <span className="text-sm text-zinc-400 mt-1">Treatment Types</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-syne font-bold text-2xl md:text-[28px] text-white">
              <CountUp to={4} duration={1.5} suffix=".9★" />
            </span>
            <span className="text-sm text-zinc-400 mt-1">Patient Rating</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/book"
            className="bg-[var(--color-brand-lime)] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 btn-glow-pulse shadow-lg hover:scale-105"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/#services"
            className="border border-[rgba(255,255,255,0.15)] bg-black/40 backdrop-blur-md text-white px-8 py-4 rounded-full hover:border-[var(--color-brand-lime)] transition-colors"
          >
            View Our Services
          </Link>
        </motion.div>

        {/* Video Area + Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)", clipPath: "inset(0 0 20px 0)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0px 0)" }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-16 w-full max-w-4xl mx-auto aspect-video rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[var(--color-brand-card)] overflow-visible relative group shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111115'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E"
          >
            <source src="https://mysportsinjury.co.uk/wp-content/uploads/2024/10/WhatsApp-Video-2024-10-13-at-10.17.44_4007de63.mp4" type="video/mp4" />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-zinc-500 rounded-2xl overflow-hidden">
              <Play size={48} className="mb-4 opacity-50" />
              <p>Clinic reel video</p>
            </div>
          </video>
          
          {/* Floating Card 1: Reviews */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-6 -right-6 lg:-right-8 bg-[rgba(14,14,18,0.9)] backdrop-blur-md border border-[var(--color-brand-border)] rounded-xl p-3 flex items-center gap-3 shadow-2xl"
          >
            <span className="text-[#C8F04B] text-sm tracking-widest">★★★★★</span>
            <span className="text-white text-xs font-semibold">650+ Reviews</span>
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-black border border-gray-200">
              G
            </div>
          </motion.div>

          {/* Floating Card 2: Live Activity */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-6 -left-6 lg:-left-8 bg-[rgba(14,14,18,0.9)] backdrop-blur-md border border-[var(--color-brand-border)] rounded-xl p-3 flex items-center gap-3 shadow-2xl"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-green-400 rounded-full animate-ping opacity-30" />
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </div>
            <span className="text-white text-xs font-medium">2 patients booked today</span>
          </motion.div>

        </motion.div>
      </div>
    </DotGlobeHero>
  );
}
