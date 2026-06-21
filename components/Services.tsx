"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Bone, Flame, Wrench, RefreshCw, Footprints, Monitor, Baby, Heart, Shield } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const categories = ["All", "Physiotherapy", "Chiropractic", "Massage", "Holistic", "Specialist"];

  const services = [
    {
      icon: Activity,
      title: "Sports Physiotherapy",
      desc: "Elite strength & conditioning with structured rehabilitation programs for long-term recovery and return to performance."
    },
    {
      icon: Zap,
      title: "Sports Massage",
      desc: "Deep tissue massage to manipulate soft tissues, improve muscle function and correct posture-related pain."
    },
    {
      icon: Bone,
      title: "Sports Chiropractic",
      desc: "Assessment, diagnosis and treatment of muscular, nervous and skeletal systems for correction and pain relief."
    },
    {
      icon: Flame,
      title: "Acupuncture & Dry Cupping",
      desc: "Restore energy balance, relieve pain, reduce inflammation and promote healing for sports or chronic injuries."
    },
    {
      icon: Wrench,
      title: "Manual Therapy / IASTM",
      desc: "Instrument-assisted soft tissue mobilisation (Graston) to break down muscle knots and fascial restrictions."
    },
    {
      icon: RefreshCw,
      title: "Sports Injury Rehabilitation",
      desc: "Targeted rehabilitation protocols to restore function, build resilience and get you back to full performance."
    },
    {
      icon: Footprints,
      title: "Podiatry Foot Clinic",
      desc: "Specialist diagnosis and treatment of disorders in the foot, ankle and lower extremity."
    },
    {
      icon: Monitor,
      title: "Virtual Online Telehealth",
      desc: "Quality-assured online physio sessions with exercise programs to improve your physical condition from home."
    },
    {
      icon: Baby,
      title: "Pre/Post Natal Physiotherapy",
      desc: "Specialized care during pregnancy and postpartum: pain management, safe exercise plans, recovery support."
    },
    {
      icon: Heart,
      title: "Post-Surgical Rehabilitation",
      desc: "Custom plans for post-surgery recovery, guided by experts to regain strength and mobility safely."
    },
    {
      icon: Shield,
      title: "Corporate Health",
      desc: "Workplace wellness programmes, injury prevention strategies and employee health screening."
    }
  ];

  return (
    <section id="services" className="bg-[var(--color-brand-bg)] py-24 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
            WHAT WE DO
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-4">
            Treatment Designed Around You.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg max-w-2xl">
            Comprehensive care from sports injury to chronic pain, rehabilitation to performance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mt-8 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0
                  ? "bg-[var(--color-brand-lime)] text-black"
                  : "bg-[var(--color-brand-card)] text-white border border-[rgba(255,255,255,0.06)] hover:border-[var(--color-brand-lime)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--color-brand-card)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 hover:border-[var(--color-brand-lime)]/30 hover:bg-[#14141A] transition-all duration-300 flex flex-col h-full group"
              >
                <div className="text-[var(--color-brand-lime)] mb-3">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{service.title}</h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link
                  href="/book"
                  className="text-[var(--color-brand-lime)] text-sm font-medium mt-6 inline-flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Book Now →
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-brand-muted)] mb-2">Not sure which service you need?</p>
          <Link
            href="/book"
            className="text-[var(--color-brand-lime)] font-medium underline-offset-4 hover:underline"
          >
            Speak to Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
