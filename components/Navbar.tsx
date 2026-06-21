"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ShoppingBag, ChevronDown, Activity, Zap, Bone, Flame, Wrench, RefreshCw, Footprints, Monitor, Baby, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Sports Physiotherapy", icon: Activity, href: "/#services" },
    { name: "Sports Massage", icon: Zap, href: "/#services" },
    { name: "Sports Chiropractic", icon: Bone, href: "/#services" },
    { name: "Acupuncture & Cupping", icon: Flame, href: "/#services" },
    { name: "Manual Therapy / IASTM", icon: Wrench, href: "/#services" },
    { name: "Sports Injury Rehab", icon: RefreshCw, href: "/#services" },
    { name: "Podiatry Foot Clinic", icon: Footprints, href: "/#services" },
    { name: "Virtual Telehealth", icon: Monitor, href: "/#services" },
    { name: "Pre/Post Natal Physio", icon: Baby, href: "/#services" },
    { name: "Corporate Health", icon: Shield, href: "/#services" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-400 ease-in-out h-[68px] flex items-center ${
          isScrolled 
            ? "backdrop-blur-2xl bg-[rgba(10,10,12,0.92)] border-b border-[rgba(200,240,75,0.08)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png"
              alt="MY Sports Injury"
              className="max-h-9 w-auto brightness-0 invert hover:brightness-110 transition-all duration-200"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 font-inter text-[13px] font-medium tracking-wide">
            <Link 
              href="/run-mcr" 
              className="text-[#C8F04B] font-semibold hover:text-white transition-colors duration-200"
            >
              RUN MCR
            </Link>

            <div 
              className="relative py-6 cursor-pointer group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className={`flex items-center text-[#7A7A8A] group-hover:text-white transition-colors duration-200 ${
                pathname.includes("service") ? "text-white border-b-2 border-[#C8F04B] pb-0.5" : ""
              }`}>
                Services
                <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
              </span>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-[rgba(14,14,18,0.98)] backdrop-blur-2xl border border-[rgba(200,240,75,0.08)] rounded-2xl p-8 pt-6 shadow-2xl cursor-default"
                  >
                    <div className="grid grid-cols-3 gap-x-12 gap-y-1">
                      <div className="col-span-3 mb-3">
                         <span className="text-[11px] uppercase tracking-[0.15em] text-[#C8F04B] font-semibold font-syne">All Disciplines</span>
                      </div>
                      
                      {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={idx} 
                            href={service.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[rgba(200,240,75,0.05)] text-[#F0F0F2] text-sm font-medium transition-all duration-150 group/item"
                          >
                            <Icon className="w-4 h-4 text-[#C8F04B]/60 group-hover/item:text-[#C8F04B] transition-colors" />
                            {service.name}
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.07)] flex items-center justify-between">
                      <span className="text-[#7A7A8A] text-sm">Not sure where to start?</span>
                      <Link href="/book" className="bg-[#C8F04B] text-[#0C0C0E] font-bold text-sm px-5 py-2 rounded-full hover:bg-white transition-colors duration-200">
                        Book a Free Consultation →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/cpd-courses" className={`text-[#7A7A8A] hover:text-white transition-colors duration-200 ${pathname === "/cpd-courses" ? "text-white border-b-2 border-[#C8F04B] pb-0.5" : ""}`}>
              CPD COURSES
            </Link>
            <Link href="/membership" className={`text-[#7A7A8A] hover:text-white transition-colors duration-200 ${pathname === "/membership" ? "text-white border-b-2 border-[#C8F04B] pb-0.5" : ""}`}>
              MEMBERSHIP
            </Link>
            <Link href="/shop" className={`text-[#7A7A8A] hover:text-white transition-colors duration-200 ${pathname === "/shop" ? "text-white border-b-2 border-[#C8F04B] pb-0.5" : ""}`}>
              SHOP
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:01615244339" className="flex items-center gap-1.5 text-[#7A7A8A] text-xs hover:text-white transition-colors duration-200">
              <Phone className="w-3 h-3" />
              0161 524 4339
            </a>
            
            <Link href="/cart" className="relative text-[#7A7A8A] hover:text-white transition-colors duration-200">
              <ShoppingBag className="w-[18px] h-[18px]" />
            </Link>

            <Link
              href="/book"
              className="bg-[#C8F04B] text-[#0C0C0E] font-bold text-sm rounded-full px-5 py-2.5 hover:bg-white hover:shadow-[0_0_20px_rgba(200,240,75,0.4)] transition-all duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger (Animated SVG) */}
          <button
            className="lg:hidden text-white w-8 h-8 flex flex-col justify-center items-center relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block absolute top-2 transition-transform duration-300"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block absolute top-3.5 transition-opacity duration-300"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block absolute top-5 transition-transform duration-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[rgba(10,10,12,0.98)] backdrop-blur-2xl border-l border-[rgba(200,240,75,0.08)] z-50 flex flex-col overflow-y-auto"
            >
              <div className="p-6 pt-8 flex justify-between items-center">
                <img
                  src="https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png"
                  alt="MY Sports Injury"
                  className="max-h-8 w-auto brightness-0 invert"
                />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                  {/* Close icon handled by hamburger state but providing an alternate tap target here */}
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              <div className="px-6 flex flex-col mt-4">
                <Link href="/run-mcr" onClick={() => setIsMobileMenuOpen(false)} className="font-syne text-[18px] font-semibold text-[#C8F04B] py-4 border-b border-[rgba(255,255,255,0.07)]">
                  RUN MCR
                </Link>
                
                <div className="border-b border-[rgba(255,255,255,0.07)]">
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between font-syne text-[18px] font-semibold text-white py-4"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col"
                      >
                        {services.map((service, idx) => (
                          <Link 
                            key={idx} 
                            href={service.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-inter text-[14px] text-[#7A7A8A] pl-4 py-2 hover:text-[#C8F04B]"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <div className="h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/cpd-courses" onClick={() => setIsMobileMenuOpen(false)} className="font-syne text-[18px] font-semibold text-white py-4 border-b border-[rgba(255,255,255,0.07)]">
                  CPD Courses
                </Link>
                <Link href="/membership" onClick={() => setIsMobileMenuOpen(false)} className="font-syne text-[18px] font-semibold text-white py-4 border-b border-[rgba(255,255,255,0.07)]">
                  Membership
                </Link>
                <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="font-syne text-[18px] font-semibold text-white py-4 border-b border-[rgba(255,255,255,0.07)]">
                  Shop
                </Link>
              </div>

              <div className="mt-auto p-6 pt-12 pb-10">
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#C8F04B] text-[#0C0C0E] font-bold text-lg py-4 rounded-full mb-6 btn-glow-pulse"
                >
                  Book Now
                </Link>
                <a href="tel:01615244339" className="flex justify-center text-[#7A7A8A] text-sm">
                  0161 524 4339
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
