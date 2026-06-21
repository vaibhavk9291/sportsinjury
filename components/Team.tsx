"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    }
  ];

  return (
    <section id="team" className="bg-[var(--color-brand-bg)] py-24 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--color-brand-card)] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[var(--color-brand-lime)]/20 transition-colors group flex flex-col"
            >
              <div className="aspect-[3/4] w-full bg-zinc-800 relative overflow-hidden">
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
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-white text-lg">{member.name}</h3>
                <p className="text-[var(--color-brand-lime)] text-sm mb-2">{member.role}</p>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 flex-grow">
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

        <div className="mt-16 text-center">
          <p className="text-zinc-500">
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
