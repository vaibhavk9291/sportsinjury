"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export default function Reviews() {
  const reviews = [
    {
      quote: "The team at MY Sports Injury got me back on the pitch in 3 weeks after an ankle injury that had been bugging me for months. Incredible knowledge and care throughout.",
      name: "James R.",
      designation: "Footballer",
      src: "https://images.unsplash.com/photo-1518605368461-1ee7116831eb?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "Professional, thorough and genuinely effective. My chronic lower back pain is finally manageable. The IASTM treatment was a game changer.",
      name: "Sarah K.",
      designation: "Office Professional",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "Best sports massage I've ever had in Manchester. The therapist actually listened and targeted the exact problem areas. Will be coming back monthly.",
      name: "Damien T.",
      designation: "Runner",
      src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "Post-surgical physio here was brilliant. Clear plan from day one, and they really pushed me in the right direction to get full mobility back.",
      name: "Priya M.",
      designation: "Post-Op Patient",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
    },
    {
      quote: "Amazing holistic approach — they combined chiropractic and acupuncture for my shoulder and the results were remarkable. Highly recommend to any athlete.",
      name: "Marcus O.",
      designation: "CrossFit Athlete",
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[var(--color-brand-card)] py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
            PATIENT STORIES
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-2">
            Real Results. Real People.
          </h2>
          <p className="text-zinc-400 text-sm flex items-center justify-center md:justify-start gap-2">
            <span className="text-[var(--color-brand-lime)]">★</span> 4.9 / 5.0 — Based on 150+ Google Reviews
          </p>
        </div>

        <div className="flex items-center justify-center relative min-h-[500px]">
          <div className="w-full max-w-[1200px] flex justify-center">
            <CircularTestimonials
              testimonials={reviews}
              autoplay={true}
              colors={{
                name: "#ffffff",
                designation: "#C8F04B", // brand-lime
                testimony: "#e4e4e7", // zinc-200
                arrowBackground: "rgba(255,255,255,0.07)",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#C8F04B",
              }}
              fontSizes={{
                name: "24px",
                designation: "16px",
                quote: "18px",
              }}
            />
          </div>
        </div>

        <a
          href="https://g.page/mysportsinjury"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-8 border border-[rgba(255,255,255,0.07)] text-white rounded-full hover:border-[var(--color-brand-lime)] transition-colors mx-auto block w-fit text-sm font-medium"
        >
          Read All Reviews on Google →
        </a>
      </div>
    </section>
  );
}
