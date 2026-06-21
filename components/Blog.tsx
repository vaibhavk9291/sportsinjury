"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

export default function Blog() {
  const posts: CardStackItem[] = [
    {
      id: "1",
      tag: "Injury Recovery",
      description: "11 March 2026",
      title: "Ankle Sprain Recovery Blueprint – Expert Physiotherapy in Manchester",
      href: "/ankle-sprain-recovery-blueprint-expert-physiotherapy-in-manchester/",
      imageSrc: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2187&auto=format&fit=crop"
    },
    {
      id: "2",
      tag: "Sports Rehab",
      description: "11 March 2026",
      title: "ACL Tears in Football: Evidence-Based Sports Therapy Rehabilitation",
      href: "/acl-tears-in-football-evidence-based-sports-therapy-rehabilitation-and-return-to-play-strategies/",
      imageSrc: "https://images.unsplash.com/photo-1526502611732-fcc61a0d7f45?q=80&w=2370&auto=format&fit=crop"
    },
    {
      id: "3",
      tag: "Back & Core",
      description: "12 February 2026",
      title: "Conquer Chronic Lower Back / Neck Pain at MY Sports Injury",
      href: "/conquer-chronic-lower-back-neck-pain-at-my-sports-injury/",
      imageSrc: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=2187&auto=format&fit=crop"
    },
    {
      id: "4",
      tag: "Pain Management",
      description: "30 September 2025",
      title: "Quadriceps Spasticity: An Overlooked Cause of Knee Pain",
      href: "/quadriceps-spasticity-an-overlooked-cause-of-knee-pain/",
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2420&auto=format&fit=crop"
    },
    {
      id: "5",
      tag: "Sports Massage",
      description: "28 September 2025",
      title: "Sports Massage: The Deep Tissue Release Football Pain Solution",
      href: "/sports-massage-the-deep-tissue-release-football-pain-solution/",
      imageSrc: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2187&auto=format&fit=crop"
    },
    {
      id: "6",
      tag: "Recovery",
      description: "20 September 2025",
      title: "Deep Tissue Massage & Physiotherapy: Unlocking Performance",
      href: "/deep-tissue-massage-physiotherapy-dry-cupping-unlocking-posture-performance-and-recovery/",
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2420&auto=format&fit=crop"
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
          {/* Use standard dimensions but responsive container inside CardStack */}
          <div className="w-full max-w-4xl mx-auto relative hidden sm:block">
            <CardStack
              items={posts}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={520}
              cardHeight={320}
            />
          </div>
          
          {/* Mobile fallback (stack scales poorly on extremely narrow screens) */}
          <div className="w-full sm:hidden">
            <CardStack
              items={posts}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={320}
              cardHeight={360}
              overlap={0.2}
              spreadDeg={30}
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
