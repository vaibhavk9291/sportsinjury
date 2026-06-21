"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Sports Physiotherapy", "Sports Massage", "Sports Chiropractic",
    "Acupuncture & Dry Cupping", "Manual Therapy / IASTM", "Sports Injury Rehab",
    "Podiatry Foot Clinic", "Pre/Post Natal Physio", "Post-Surgical Rehab",
    "Virtual Telehealth", "Yin Yang Yoga", "Corporate Health",
    "Sports Screening", "Gift Cards"
  ];

  return (
    <nav className="sticky top-0 w-full bg-[rgba(12,12,14,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)] z-40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/">
          <img
            src="https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png"
            alt="MY Sports Injury"
            className="max-h-10 w-auto brightness-0 invert"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-zinc-400">
          <Link href="/run-mcr" className="text-[var(--color-brand-lime)] hover:text-lime-300 transition-colors">Run MCR</Link>
          <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          
          <div 
            className="relative h-full py-8"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="hover:text-white transition-colors cursor-pointer">Services</span>
            {isServicesOpen && (
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] bg-[#18181F] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 grid grid-cols-2 gap-4 shadow-2xl">
                {services.map((service, idx) => (
                  <Link key={idx} href="/#services" className="hover:text-[var(--color-brand-lime)] transition-colors">
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/cpd-courses" className="hover:text-white transition-colors">CPD Courses</Link>
          <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
          <Link href="/#blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/#location" className="hover:text-white transition-colors">Location</Link>
        </div>

        {/* Right: Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:01615244339" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--color-brand-lime)] transition-colors">
            <Phone size={16} />
            <span>0161 524 4339</span>
          </a>
          <Link href="/shop" className="text-sm text-zinc-400 hover:text-white transition-colors">Shop</Link>
          <a
            href="https://mysportinjury.janeapp.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-brand-lime)] text-[#0C0C0E] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-lime-300 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#0C0C0E] z-50 flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 mt-12 text-2xl font-semibold text-zinc-300">
              <Link href="/run-mcr" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-brand-lime)]">Run MCR</Link>
              <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="/cpd-courses" onClick={() => setIsMobileMenuOpen(false)}>CPD Courses</Link>
              <Link href="/membership" onClick={() => setIsMobileMenuOpen(false)}>Membership</Link>
              <Link href="/#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link href="/#location" onClick={() => setIsMobileMenuOpen(false)}>Location</Link>
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            </div>

            <div className="mt-auto pb-8">
              <a href="tel:01615244339" className="flex items-center justify-center gap-2 text-zinc-400 hover:text-[var(--color-brand-lime)] mb-6 transition-colors">
                <Phone size={20} />
                <span className="font-semibold text-lg">0161 524 4339</span>
              </a>
              <a
                href="https://mysportinjury.janeapp.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[var(--color-brand-lime)] text-[#0C0C0E] font-bold text-lg py-4 rounded-full"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
