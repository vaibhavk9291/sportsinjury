"use client";

import { Gallery4 } from "@/components/blocks/gallery4";

const servicesData = [
  {
    id: "physio",
    title: "Sports Physiotherapy",
    description: "Elite strength & conditioning with structured rehabilitation programs for long-term recovery.",
    href: "/book",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: "massage",
    title: "Sports Massage",
    description: "Deep tissue massage to manipulate soft tissues, improve muscle function and correct pain.",
    href: "/book",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: "chiro",
    title: "Sports Chiropractic",
    description: "Assessment, diagnosis and treatment of muscular, nervous and skeletal systems.",
    href: "/book",
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: "holistic",
    title: "Acupuncture & Dry Cupping",
    description: "Restore energy balance, relieve pain, reduce inflammation and promote healing.",
    href: "/book",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2420&auto=format&fit=crop",
  },
  {
    id: "rehab",
    title: "Sports Injury Rehabilitation",
    description: "Targeted rehabilitation protocols to restore function and build resilience.",
    href: "/book",
    image: "https://images.unsplash.com/photo-1526502611732-fcc61a0d7f45?q=80&w=2370&auto=format&fit=crop",
  },
];

export default function ServicesGallery() {
  return (
    <Gallery4
      title="Treatment Designed Around You."
      description="Comprehensive care from sports injury to chronic pain, rehabilitation to performance."
      items={servicesData}
    />
  );
}
