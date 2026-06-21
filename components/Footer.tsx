import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#090909] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link href="/">
              <img
                src="https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png"
                alt="MY Sports Injury"
                className="max-h-10 w-auto brightness-0 invert mb-6"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Manchester's leading physiotherapy and chiropractic clinic. HCPC & CSP accredited.
            </p>
            <a
              href="https://www.facebook.com/mysportsinjuryclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[var(--color-brand-lime)] transition-colors w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="text-[var(--color-brand-lime)] text-xs uppercase tracking-widest font-bold mb-4">
              SERVICES
            </h4>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Sports Physiotherapy</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Sports Massage</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Sports Chiropractic</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Acupuncture</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Manual Therapy</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Sports Rehab</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Podiatry</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Telehealth</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Pregnancy Physio</Link>
              <Link href="/#services" className="hover:text-white transition-colors w-fit">Corporate Health</Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">
              COMPANY
            </h4>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <Link href="/#about" className="hover:text-white transition-colors w-fit">About Us</Link>
              <Link href="/#team" className="hover:text-white transition-colors w-fit">Our Team</Link>
              <Link href="/cpd-courses/" className="hover:text-white transition-colors w-fit">CPD Courses</Link>
              <Link href="/membership/" className="hover:text-white transition-colors w-fit">Membership</Link>
              <Link href="/#blog" className="hover:text-white transition-colors w-fit">Blog</Link>
              <Link href="/career/" className="hover:text-white transition-colors w-fit">Careers</Link>
              <Link href="/gift-cards/" className="hover:text-white transition-colors w-fit">Gift Cards</Link>
              <Link href="/product-category/shop/" className="hover:text-white transition-colors w-fit">Shop</Link>
            </div>
          </div>

          {/* Column 4: Booking */}
          <div className="flex flex-col">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">
              GET STARTED
            </h4>
            <Link
              href="/book"
              className="w-full bg-[var(--color-brand-lime)] text-black font-semibold text-sm text-center py-3 rounded-full hover:bg-lime-300 transition-colors mb-3 block"
            >
              Book Appointment
            </Link>
            <Link
              href="/sports-massage-manchester/"
              className="text-zinc-400 text-sm hover:text-white transition-colors w-fit"
            >
              Run MCR Events →
            </Link>
            
            <div className="mt-8 flex gap-2 flex-wrap">
              <span className="border border-lime-400/30 text-[var(--color-brand-lime)] text-xs px-3 py-1 rounded-full">
                HCPC
              </span>
              <span className="border border-lime-400/30 text-[var(--color-brand-lime)] text-xs px-3 py-1 rounded-full">
                CSP
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-zinc-600 text-xs gap-4">
          <p>© 2025 MY Sports Injury. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
