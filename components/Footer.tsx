"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#080808] w-full">
      {/* Top Border Divider */}
      <div className="w-full divider-lime" />

      {/* SECTION A — PRE-FOOTER CTA BAND */}
      <section className="bg-[#111115] py-14 border-y border-[rgba(200,240,75,0.08)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 flex-wrap">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[#C8F04B] font-syne text-[11px] uppercase tracking-[0.15em] font-semibold block mb-3">
              <span className="inline-block w-5 h-0.5 bg-[#C8F04B] mr-3 mb-0.5 align-middle" />
              START TODAY
            </span>
            <h2 className="font-syne text-[36px] text-white font-bold mb-2">Ready to Move Pain-Free?</h2>
            <p className="text-[--text-muted] text-sm">
              Same-week appointments. Manchester City Centre. HCPC & CSP accredited.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/book"
              className="bg-[#C8F04B] text-[#0C0C0E] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 text-center whitespace-nowrap btn-glow-pulse"
            >
              Book Now →
            </Link>
            <a
              href="tel:01615244339"
              className="border border-[rgba(255,255,255,0.15)] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:border-[#C8F04B] transition-all duration-300 text-center whitespace-nowrap bg-[rgba(255,255,255,0.02)]"
            >
              Call 0161 524 4339
            </a>
          </div>
        </div>
      </section>

      {/* SECTION B — MAIN FOOTER BODY */}
      <section className="pt-14 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            
            {/* COL 1: Brand */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-2 flex flex-col"
            >
              <Link href="/">
                <img
                  src="https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png"
                  alt="MY Sports Injury"
                  className="max-h-9 w-auto brightness-0 invert mb-5"
                />
              </Link>
              <p className="text-[--text-muted] text-sm leading-relaxed max-w-[240px]">
                Manchester's leading physiotherapy and chiropractic clinic. HCPC & CSP accredited. #LivePainFree
              </p>
              
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.facebook.com/mysportsinjuryclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[--bg-elevated] border border-[--border] flex items-center justify-center text-[--text-muted] hover:border-[#C8F04B]/40 hover:text-[#C8F04B] hover:bg-[rgba(200,240,75,0.06)] transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>

              <div className="mt-5 flex gap-2 flex-wrap">
                <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="border border-[rgba(200,240,75,0.2)] text-[#C8F04B] text-[11px] rounded-full px-3 py-1">
                  HCPC Registered
                </motion.span>
                <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }} className="border border-[rgba(200,240,75,0.2)] text-[#C8F04B] text-[11px] rounded-full px-3 py-1">
                  CSP Accredited
                </motion.span>
                <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="border border-[rgba(200,240,75,0.2)] text-[#C8F04B] text-[11px] rounded-full px-3 py-1">
                  ⭐ 650+ Reviews
                </motion.span>
              </div>
            </motion.div>

            {/* COL 2: SERVICES */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col">
              <h4 className="font-syne text-[11px] uppercase tracking-[0.15em] text-[#C8F04B] font-semibold mb-4">
                <span className="inline-block w-3 h-[1px] bg-[#C8F04B] mr-2 align-middle" />
                SERVICES
              </h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/service/sports-physiotherapy-manchester/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Sports Physiotherapy</Link>
                <Link href="/service/sports-massage/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Sports Massage</Link>
                <Link href="/service/sports-chiropractic/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Sports Chiropractic</Link>
                <Link href="/service/acupuncture/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Acupuncture</Link>
                <Link href="/service/manual-therapy-iastm/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Manual Therapy / IASTM</Link>
                <Link href="/service/sports-injury-rehabilitation/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Sports Rehab</Link>
                <Link href="/service/podiatry-foot-clinic/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Podiatry</Link>
                <Link href="/service/online-telehealth/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Telehealth</Link>
                <Link href="/service/sports-physiotherapy-manchester/pregnancy-physiotherapy/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Pregnancy Physio</Link>
                <Link href="/service/corporate-health/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Corporate Health</Link>
              </div>
            </motion.div>

            {/* COL 3: COMPANY */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col">
              <h4 className="font-syne text-[11px] uppercase tracking-[0.15em] text-[#C8F04B] font-semibold mb-4">
                <span className="inline-block w-3 h-[1px] bg-[#C8F04B] mr-2 align-middle" />
                COMPANY
              </h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/#about" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">About Us</Link>
                <Link href="/#team" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Our Team</Link>
                <Link href="/cpd-courses" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">CPD Courses</Link>
                <Link href="/membership" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Membership</Link>
                <Link href="/#blog" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Blog</Link>
                <Link href="/career/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Work With Us</Link>
                <Link href="/gift-cards/" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Gift Cards</Link>
                <Link href="/shop" className="text-[--text-muted] text-sm hover:text-white hover:translate-x-1 transition-all duration-200">Shop</Link>
              </div>
            </motion.div>

            {/* COL 4: CONTACT */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col col-span-2 md:col-span-1">
              <h4 className="font-syne text-[11px] uppercase tracking-[0.15em] text-[#C8F04B] font-semibold mb-4">
                <span className="inline-block w-3 h-[1px] bg-[#C8F04B] mr-2 align-middle" />
                CONTACT
              </h4>
              <div className="flex flex-col gap-3">
                <a href="tel:01615244339" className="flex items-center gap-2 group w-fit">
                  <Phone className="w-3.5 h-3.5 text-[#C8F04B]" />
                  <span className="text-[#C8F04B] text-sm font-semibold group-hover:underline">0161 524 4339</span>
                </a>
                <a href="mailto:info@mysportsinjury.co.uk" className="flex items-center gap-2 group w-fit">
                  <Mail className="w-3.5 h-3.5 text-[--text-muted]" />
                  <span className="text-[--text-muted] text-sm group-hover:text-white transition-colors">info@mysportsinjury.co.uk</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[--text-muted] mt-1 shrink-0" />
                  <span className="text-[--text-muted] text-sm leading-snug">Manchester City Centre,<br />Greater Manchester</span>
                </div>
                
                <div className="mt-2 text-[--text-muted] text-xs leading-relaxed pl-5 border-l-2 border-[rgba(255,255,255,0.05)] ml-1">
                  <p>Mon–Fri: 8am–8pm</p>
                  <p>Sat: 9am–5pm</p>
                  <p>Sun: 10am–3pm</p>
                </div>
              </div>
              
              <Link
                href="/book"
                className="mt-5 w-full bg-[#C8F04B] text-[#0C0C0E] font-bold text-sm text-center py-3 rounded-full hover:bg-white transition-all duration-300 btn-glow-pulse"
              >
                Book Appointment →
              </Link>
            </motion.div>

          </div>

          {/* SECTION C — BOTTOM BAR */}
          <div className="border-t border-[--border] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[--text-muted] text-xs">
            <p>© 2025 MY Sports Injury. All Rights Reserved. Registered in England.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
