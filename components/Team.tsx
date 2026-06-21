"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Ms Aishwarya Antony",
      role: "Physiotherapist — HCPC Registered",
      bio: "Internationally qualified MSK physiotherapist. Specialises in pre/post-natal care and pain management.",
      photo: "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/ash-21-scaled-1-768x1151.jpg",
      link: "https://mysportinjury.janeapp.co.uk/#/staff_member/21/bio"
    },
    {
      name: "Mr Nick Brisbane",
      role: "Sports Rehabilitator",
      bio: "Expert in sports rehabilitation and conditioning.",
      photo: "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/nick1-scaled-1-768x1138.jpg",
      link: "https://mysportinjury.janeapp.co.uk/#/staff_member/2/bio"
    },
    {
      name: "Team Member",
      role: "Sports Chiropractor",
      bio: "Expert in spinal adjustments and musculoskeletal alignment for optimal performance.",
      photo: "",
      link: "#"
    },
    {
      name: "Team Member",
      role: "Sports Massage Therapist",
      bio: "Specialises in deep tissue manipulation and sports-specific recovery protocols.",
      photo: "",
      link: "#"
    },
    {
      name: "Team Member",
      role: "Osteopath",
      bio: "Focuses on holistic recovery and alignment strategies.",
      photo: "",
      link: "#"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="team" className="bg-[var(--color-brand-bg)] py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
              OUR SPECIALISTS
            </span>
            <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-4">
              The Experts in Your Corner.
            </h2>
            <p className="text-[var(--color-brand-muted)] text-lg max-w-2xl">
              HCPC registered, CSP accredited, and obsessed with getting you better — faster and safer than anywhere else in Manchester.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${
                prevBtnEnabled 
                  ? "border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.05)]" 
                  : "border-[rgba(255,255,255,0.05)] text-zinc-600 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${
                nextBtnEnabled 
                  ? "border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.05)]" 
                  : "border-[rgba(255,255,255,0.05)] text-zinc-600 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_280px] min-w-0 bg-[var(--color-brand-card)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[var(--color-brand-lime)]/30 transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-[3/4] w-full bg-zinc-900 relative overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600 bg-zinc-900">
                      Photo Placeholder
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow bg-[var(--color-brand-card)]">
                  <h3 className="font-semibold text-white text-lg">{member.name}</h3>
                  <p className="text-[var(--color-brand-lime)] text-sm mb-2">{member.role}</p>
                  <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed line-clamp-2 flex-grow">
                    {member.bio}
                  </p>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-xs hover:text-white mt-4 inline-block transition-colors"
                  >
                    View Profile →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--color-brand-muted)]">
            Want to join our team?{" "}
            <Link href="/career/" className="text-[var(--color-brand-lime)] font-medium hover:underline underline-offset-4">
              We're Hiring →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
