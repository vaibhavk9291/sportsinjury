"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookCTA from "@/components/FloatingBookCTA";

export default function ShopPage() {
  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, margin: "-80px" });

  const section2Ref = useRef(null);
  const section2InView = useInView(section2Ref, { once: true, margin: "-80px" });

  const section3Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true, margin: "-80px" });

  const products = [
    {
      name: "Cyclone PRO Advanced Recovery Compression Boots",
      price: "£499.00",
      inStock: true,
      isPlaceholder: false,
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2024/07/2024-03-09.webp",
      link: "https://mysportsinjury.co.uk/product/cyclone-pro-advanced-recovery-compression-boots/"
    },
    {
      name: "Ergonomic Sit-to-Stand Adjustable Desk",
      price: "£180.00",
      inStock: false,
      isPlaceholder: false,
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2024/07/2020-10-05.webp",
      link: "https://mysportsinjury.co.uk/product/ergonomic-sit-to-stand-adjustable-desk-sold-out/"
    },
    {
      name: "Ignite PRO PulseGun",
      price: "£249.95",
      inStock: true,
      isPlaceholder: false,
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2024/07/2024-03-22.webp",
      link: "https://mysportsinjury.co.uk/product/ignite-pro-pulsegun/"
    },
    {
      name: "MY Sports Injury High Density Foam Roller (12 x 3)",
      price: "£29.99",
      inStock: true,
      isPlaceholder: false,
      image: "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/202305290904roller1-300x300.jpg",
      link: "https://mysportsinjury.co.uk/product/my-sports-injury-high-density-foam-roller-12-x-3/"
    },
    // Placeholder products for the remaining 12 slots
    // Client to add remaining product data here
    ...Array.from({ length: 12 }).map((_, i) => ({
      name: "Recovery Product",
      price: "—",
      inStock: true,
      isPlaceholder: true,
      image: "",
      link: "https://mysportsinjury.co.uk/product-category/shop/"
    }))
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AnnouncementBar />
      <Navbar />

      <main className="flex flex-col min-h-screen">
        {/* SECTION 1: PAGE HEADER */}
        <section ref={section1Ref} className="relative bg-[var(--color-brand-bg)] pt-32 pb-14 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-brand-lime)] rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block font-bold mb-4">
                RECOVERY EQUIPMENT
              </span>

              <h1 className="font-syne font-[800] text-[clamp(42px,6vw,70px)] leading-[0.92]">
                <span className="block text-white">The MY Sports Injury</span>
                <span className="block text-[var(--color-brand-lime)]">Recovery Shop.</span>
              </h1>

              <p className="font-inter text-base text-[var(--color-brand-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
                Professional-grade recovery tools and equipment used and recommended by our clinical team. Free shipping on orders over £50.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: PRODUCT GRID */}
        <section ref={section2Ref} className="bg-[var(--color-brand-bg)] pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="mb-8 flex items-center justify-between flex-wrap gap-4"
            >
              <div className="text-[var(--color-brand-muted)] text-sm">Showing 16 products</div>
              <select className="bg-[var(--color-brand-card)] border border-[rgba(255,255,255,0.07)] text-white text-sm rounded-xl px-4 py-2 appearance-none cursor-pointer focus:outline-none focus:border-[var(--color-brand-lime)]/50 transition-colors">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Latest</option>
              </select>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (idx % 4) * 0.08, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="bg-[var(--color-brand-card)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] group hover:border-[var(--color-brand-lime)]/20 transition-all duration-300 flex flex-col"
                >
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-square bg-[var(--color-brand-surface)] overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-400"
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--color-brand-surface)] flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-400">
                        {/* Empty placeholder */}
                      </div>
                    )}
                    
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-zinc-800 text-[var(--color-brand-muted)] text-xs rounded-full px-3 py-1 font-medium">
                          Out of Stock
                        </div>
                      </div>
                    )}
                  </a>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-syne font-semibold text-white text-sm leading-snug flex-grow">
                      {product.name}
                    </h3>
                    <div className="font-inter font-bold text-[var(--color-brand-lime)] text-base mt-1">
                      {product.price}
                    </div>

                    <a
                      href={product.isPlaceholder ? product.link : (product.inStock ? product.link : "#")}
                      target={product.isPlaceholder ? "_blank" : (product.inStock ? "_blank" : undefined)}
                      rel={product.isPlaceholder ? "noopener noreferrer" : (product.inStock ? "noopener noreferrer" : undefined)}
                      className={`mt-3 w-full text-center text-sm rounded-full py-2.5 font-semibold transition-colors ${
                        product.isPlaceholder
                          ? "bg-[var(--color-brand-surface)] text-white hover:bg-zinc-800 border border-[rgba(255,255,255,0.07)]"
                          : product.inStock
                            ? "bg-[var(--color-brand-lime)] text-black hover:bg-lime-300"
                            : "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50"
                      }`}
                      onClick={(e) => {
                        if (!product.inStock && !product.isPlaceholder) e.preventDefault();
                      }}
                    >
                      {product.isPlaceholder ? "View Product →" : product.inStock ? "Add to Cart" : "Out of Stock"}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: SHOP CTA STRIP */}
        <section ref={section3Ref} className="bg-[var(--color-brand-card)] border-t border-[rgba(255,255,255,0.07)] py-12">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-between flex-wrap gap-6"
            >
              <div>
                <h2 className="font-syne font-bold text-white text-[24px]">
                  Can't find what you're looking for?
                </h2>
                <p className="text-[var(--color-brand-muted)] text-sm mt-1">
                  Our team can recommend the right recovery tools for your specific needs.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:01615244339"
                  className="border border-[rgba(255,255,255,0.07)] text-white rounded-full px-6 py-3 hover:border-[var(--color-brand-lime)]/30 transition-colors text-sm font-medium"
                >
                  Speak to Our Team →
                </a>
                <a
                  href="https://mysportsinjury.co.uk/product-category/shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-brand-lime)] text-black rounded-full px-6 py-3 font-bold hover:bg-lime-300 transition-colors text-sm"
                >
                  Browse Full Shop →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingBookCTA />
    </motion.div>
  );
}
