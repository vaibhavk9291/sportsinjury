"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { DotGlobeHero } from "@/components/ui/globe-hero";

export default function Hero() {
  return (
    <DotGlobeHero
      rotationSpeed={0.003}
      globeRadius={1.3}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full pt-12 md:pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block border border-[var(--color-brand-lime)]/30 bg-[var(--color-brand-lime)]/5 text-[var(--color-brand-lime)] text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
        >
          Manchester's Leading Sports Clinic
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-syne font-bold text-[44px] md:text-[80px] leading-[0.95] tracking-tight text-white mb-6 drop-shadow-lg"
        >
          <span className="block">Unlock Your Body's</span>
          <span className="block text-[var(--color-brand-lime)]">Full Potential.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed drop-shadow-md"
        >
          Expert physiotherapy, chiropractic care, and sports rehabilitation in Manchester City Centre. HCPC & CSP accredited. Trusted by thousands.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-8 md:gap-12 justify-center backdrop-blur-sm bg-black/10 p-6 rounded-3xl border border-white/5 inline-flex mx-auto"
        >
          {[
            { value: "5,000+", label: "Patients Treated" },
            { value: "HCPC", label: "Accredited" },
            { value: "15+", label: "Treatment Types" },
            { value: "4.9★", label: "Patient Rating" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-syne font-bold text-2xl md:text-[28px] text-white">{stat.value}</span>
              <span className="text-sm text-zinc-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/book"
            className="bg-[var(--color-brand-lime)] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(200,240,75,0.2)] hover:shadow-[0_0_30px_rgba(200,240,75,0.4)]"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/#services"
            className="border border-zinc-600 bg-black/40 backdrop-blur-md text-white px-8 py-4 rounded-full hover:border-[var(--color-brand-lime)] transition-colors"
          >
            View Our Services
          </Link>
        </motion.div>

        {/* Video Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 w-full max-w-4xl mx-auto aspect-video rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden relative group shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111115'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E"
          >
            <source src="https://mysportsinjury.co.uk/wp-content/uploads/2024/10/WhatsApp-Video-2024-10-13-at-10.17.44_4007de63.mp4" type="video/mp4" />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-zinc-500">
              <Play size={48} className="mb-4 opacity-50" />
              <p>Clinic reel video</p>
            </div>
          </video>
        </motion.div>
      </div>
    </DotGlobeHero>
  );
}
