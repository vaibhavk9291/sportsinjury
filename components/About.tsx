"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-brand-card)] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
            Who We Are
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-6">
            Patient-First Care, Backed by Science.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-base leading-relaxed mb-8">
            At MY Sports Injury, your recovery is our foremost priority. Our team of expert physiotherapists, Sports Chiropractic Doctors, and dedicated healthcare professionals delivers exceptional patient-centred care. We recognise the challenges you may have faced within the NHS, and we're here to make a meaningful difference. Our mission: empower you towards pain-free living and optimal health.
          </p>
          <div className="flex flex-wrap gap-6">
            <span className="text-[var(--color-brand-lime)] text-sm font-semibold flex items-center gap-2">
              ✓ HCPC Registered
            </span>
            <span className="text-[var(--color-brand-lime)] text-sm font-semibold flex items-center gap-2">
              ✓ CSP Accredited
            </span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full aspect-[3/4] bg-zinc-900 rounded-2xl border border-[var(--color-brand-border)] flex items-center justify-center relative overflow-hidden group">
            <video
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111115'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E"
            >
              <source src="/videos/IMG_8067.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Floating Stat Card */}
          <div className="absolute bottom-6 left-6 bg-[var(--color-brand-bg)] border border-zinc-800 p-4 rounded-xl shadow-xl flex items-center">
            <span className="text-sm font-medium text-white">
              Since <span className="text-[var(--color-brand-lime)]">2014</span> · Serving Greater Manchester
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
