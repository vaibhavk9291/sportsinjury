"use client";

import Link from "next/link";
import { CircularGallery } from "@/components/ui/circular-gallery";

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
      name: "Team Member 1",
      role: "Sports Chiropractor",
      bio: "Expert in spinal adjustments and musculoskeletal alignment for optimal performance.",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      name: "Team Member 2",
      role: "Sports Massage Therapist",
      bio: "Specialises in deep tissue manipulation and sports-specific recovery protocols.",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      name: "Team Member 3",
      role: "Osteopath",
      bio: "Focuses on holistic recovery and alignment strategies.",
      photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      link: "#"
    }
  ];

  const galleryItems = team.map(member => ({
    name: member.name,
    role: member.role,
    bio: member.bio,
    photo: {
      url: member.photo,
      text: member.name,
    }
  }));

  return (
    <section id="team" className="bg-[var(--color-brand-bg)] w-full">
      <div className="w-full" style={{ height: '300vh' }}>
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
          
          {/* Section Header */}
          <div className="absolute top-24 z-10 text-center px-6 pointer-events-none w-full">
            <span className="text-[var(--color-brand-muted)] font-syne text-size-xs uppercase tracking-widest block mb-4">
              OUR SPECIALISTS
            </span>
            <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-4 drop-shadow-md">
              The Experts in Your Corner.
            </h2>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto drop-shadow-md">
              HCPC registered, CSP accredited, and obsessed with getting you better. <br/>
              <span className="text-[var(--color-brand-lime)] mt-2 inline-block">↓ Scroll down to rotate the gallery</span>
            </p>
          </div>
          
          {/* Circular 3D Gallery */}
          <div className="w-full h-full mt-24">
            <CircularGallery items={galleryItems} radius={450} autoRotateSpeed={0.05} />
          </div>

          {/* Footer CTA */}
          <div className="absolute bottom-12 z-10 text-center pointer-events-auto w-full">
            <p className="text-zinc-400">
              Want to join our team?{" "}
              <Link href="/career/" className="text-[var(--color-brand-lime)] font-medium hover:underline underline-offset-4 hover:text-white transition-colors">
                We're Hiring →
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
