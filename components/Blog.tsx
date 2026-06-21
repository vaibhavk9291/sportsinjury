"use client";

import Link from "next/link";
import { CircularGallery } from "@/components/ui/circular-gallery-2";

export default function Blog() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2187&auto=format&fit=crop",
      text: "Ankle Sprain Recovery"
    },
    {
      image: "https://images.unsplash.com/photo-1526502611732-fcc61a0d7f45?q=80&w=2370&auto=format&fit=crop",
      text: "ACL Tears in Football"
    },
    {
      image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=2187&auto=format&fit=crop",
      text: "Conquer Back Pain"
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2420&auto=format&fit=crop",
      text: "Quadriceps Spasticity"
    },
    {
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2187&auto=format&fit=crop",
      text: "Sports Massage Release"
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2420&auto=format&fit=crop",
      text: "Unlocking Performance"
    }
  ];

  return (
    <section id="blog" className="bg-[#0C0C0E] py-24 w-full relative grain-overlay border-t border-[rgba(255,255,255,0.05)]">
      <div className="absolute top-0 w-full divider-lime" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block mb-4 font-semibold">
            <span className="inline-block w-5 h-0.5 bg-[#C8F04B] mr-3 mb-0.5 align-middle" />
            INSIGHTS
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-2">
            From Our <span className="lime-underline">Specialists.</span>
          </h2>
        </div>

        <div className="mt-12 flex justify-center w-full relative">
          <div className="relative h-[600px] w-full rounded-lg">
            <CircularGallery
              items={galleryItems}
              bend={3}
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[rgba(255,255,255,0.15)] text-white rounded-full hover:border-[#C8F04B] hover:text-[#C8F04B] hover:bg-[rgba(200,240,75,0.05)] transition-all font-medium text-sm group"
          >
            More Articles
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
