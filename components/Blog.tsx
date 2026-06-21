"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      category: "Injury Recovery",
      date: "11 March 2026",
      title: "Ankle Sprain Recovery Blueprint – Expert Physiotherapy in Manchester",
      link: "/ankle-sprain-recovery-blueprint-expert-physiotherapy-in-manchester/"
    },
    {
      category: "Sports Rehab",
      date: "11 March 2026",
      title: "ACL Tears in Football: Evidence-Based Sports Therapy Rehabilitation and Return-to-Play Strategies",
      link: "/acl-tears-in-football-evidence-based-sports-therapy-rehabilitation-and-return-to-play-strategies/"
    },
    {
      category: "Back & Core",
      date: "12 February 2026",
      title: "Conquer Chronic Lower Back / Neck Pain at MY Sports Injury",
      link: "/conquer-chronic-lower-back-neck-pain-at-my-sports-injury/"
    },
    {
      category: "Pain Management",
      date: "30 September 2025",
      title: "Quadriceps Spasticity: An Overlooked Cause of Knee Pain",
      link: "/quadriceps-spasticity-an-overlooked-cause-of-knee-pain/"
    },
    {
      category: "Sports Massage",
      date: "28 September 2025",
      title: "Sports Massage: The Deep Tissue Release Football Pain Solution",
      link: "/sports-massage-the-deep-tissue-release-football-pain-solution/"
    },
    {
      category: "Recovery",
      date: "20 September 2025",
      title: "Deep Tissue Massage, Physiotherapy & Dry Cupping: Unlocking Posture, Performance, and Recovery",
      link: "/deep-tissue-massage-physiotherapy-dry-cupping-unlocking-posture-performance-and-recovery/"
    }
  ];

  return (
    <section id="blog" className="bg-[var(--color-brand-bg)] py-24 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
            INSIGHTS
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-2">
            From Our Specialists.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--color-brand-card)] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[var(--color-brand-lime)]/20 transition-colors group flex flex-col"
            >
              <div className="aspect-video w-full bg-zinc-900 relative overflow-hidden flex items-center justify-center text-zinc-600">
                <span>Blog image</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-lime-400/10 text-[var(--color-brand-lime)] text-[10px] uppercase font-bold tracking-wider rounded-full px-3 py-1">
                    {post.category}
                  </span>
                  <span className="text-zinc-500 text-xs">{post.date}</span>
                </div>
                <h3 className="font-semibold text-white text-base leading-snug mb-4 flex-grow group-hover:text-[var(--color-brand-lime)] transition-colors">
                  <Link href={post.link} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                <span className="text-[var(--color-brand-lime)] text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform inline-block">
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog/"
            className="inline-block px-8 py-3 border border-zinc-700 text-white rounded-full hover:border-[var(--color-brand-lime)] transition-colors font-medium text-sm mx-auto"
          >
            More Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
