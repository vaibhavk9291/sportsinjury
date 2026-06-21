"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Activity, Zap, Bone, Flame, Wrench, RefreshCw, Footprints, Monitor, Baby, Heart, Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServicesCarousel() {
  const categories = ["All", "Physiotherapy", "Chiropractic", "Massage", "Holistic", "Specialist"];
  const [activeCategory, setActiveCategory] = useState("All");

  const services = [
    { cat: "Physiotherapy", icon: Activity, title: "Sports Physiotherapy", desc: "Elite strength & conditioning with structured rehabilitation programs for long-term recovery.", duration: "45–60 min" },
    { cat: "Massage", icon: Zap, title: "Sports Massage", desc: "Deep tissue massage to manipulate soft tissues, improve muscle function and correct pain.", duration: "30–60 min" },
    { cat: "Chiropractic", icon: Bone, title: "Sports Chiropractic", desc: "Assessment, diagnosis and treatment of muscular, nervous and skeletal systems.", duration: "45 min" },
    { cat: "Holistic", icon: Flame, title: "Acupuncture & Dry Cupping", desc: "Restore energy balance, relieve pain, reduce inflammation and promote healing.", duration: "45 min" },
    { cat: "Physiotherapy", icon: Wrench, title: "Manual Therapy / IASTM", desc: "Instrument-assisted soft tissue mobilisation to break down muscle knots.", duration: "30–45 min" },
    { cat: "Physiotherapy", icon: RefreshCw, title: "Sports Injury Rehabilitation", desc: "Targeted rehabilitation protocols to restore function and build resilience.", duration: "60 min" },
    { cat: "Specialist", icon: Footprints, title: "Podiatry Foot Clinic", desc: "Specialist diagnosis and treatment of disorders in the foot, ankle and lower extremity.", duration: "45 min" },
    { cat: "Specialist", icon: Monitor, title: "Virtual Online Telehealth", desc: "Quality-assured online physio sessions with exercise programs from home.", duration: "30 min" },
    { cat: "Specialist", icon: Baby, title: "Pre/Post Natal Physiotherapy", desc: "Specialized care during pregnancy and postpartum: pain management, safe exercise.", duration: "45–60 min" },
    { cat: "Physiotherapy", icon: Heart, title: "Post-Surgical Rehabilitation", desc: "Custom plans for post-surgery recovery, guided by experts to regain strength.", duration: "60 min" },
    { cat: "Specialist", icon: Shield, title: "Corporate Health", desc: "Workplace wellness programmes, injury prevention strategies and screening.", duration: "Custom" }
  ];

  const filteredServices = services.filter(
    (service) => activeCategory === "All" || service.cat === activeCategory
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", dragFree: true, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Re-init embla when filtering changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, filteredServices]);

  return (
    <section id="services" className="bg-[var(--color-brand-card)] py-24 w-full relative grain-overlay">
      <div className="absolute top-0 w-full divider-lime" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block mb-4 font-semibold">
            <span className="inline-block w-5 h-0.5 bg-[#C8F04B] mr-3 mb-0.5 align-middle" />
            WHAT WE DO
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-4 max-w-2xl">
            Treatment Designed Around <span className="lime-underline">You.</span>
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg max-w-2xl">
            Comprehensive care from sports injury to chronic pain, rehabilitation to performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-[#C8F04B] text-[#0C0C0E] font-semibold"
                  : "bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[var(--color-brand-muted)] hover:border-[var(--color-brand-lime)]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-8 overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <motion.div layout className="flex gap-4">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={service.title}
                    className="min-w-[320px] md:min-w-[360px] flex-shrink-0 bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-2xl p-7 hover:border-[#C8F04B]/25 transition-all duration-300 flex flex-col h-full group transform hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(200,240,75,0.15),0_8px_32px_rgba(200,240,75,0.05)]"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#C8F04B]/10 flex items-center justify-center">
                        <Icon className="text-[#C8F04B] w-5 h-5" />
                      </div>
                      <span className="text-[11px] text-[var(--color-brand-muted)] uppercase tracking-wide border border-[var(--color-brand-border)] rounded-full px-2.5 py-1">
                        {service.cat}
                      </span>
                    </div>
                    
                    <h3 className="font-syne font-semibold text-white text-xl leading-snug">{service.title}</h3>
                    <p className="font-inter text-[var(--color-brand-muted)] text-sm leading-relaxed mt-2.5 flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="mt-6 pt-5 border-t border-[var(--color-brand-border)] flex items-center justify-between">
                      <Link
                        href="/book"
                        className="text-[#C8F04B] text-sm font-medium flex items-center group/btn"
                      >
                        Book This Service
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-[var(--color-brand-muted)] text-xs">
                        {service.duration}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation UI */}
        <div className="mt-6 flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={`w-10 h-10 rounded-full border border-[var(--color-brand-border)] flex items-center justify-center transition-colors ${
                !prevBtnEnabled ? "opacity-30 cursor-not-allowed" : "hover:border-[#C8F04B]/40 hover:bg-[var(--color-brand-surface)] text-white"
              } text-[var(--color-brand-muted)]`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={`w-10 h-10 rounded-full border border-[var(--color-brand-border)] flex items-center justify-center transition-colors ${
                !nextBtnEnabled ? "opacity-30 cursor-not-allowed" : "hover:border-[#C8F04B]/40 hover:bg-[var(--color-brand-surface)] text-white"
              } text-[var(--color-brand-muted)]`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-1.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-6 bg-[#C8F04B]"
                    : "w-1.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
