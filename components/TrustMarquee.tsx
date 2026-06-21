"use client";

export default function TrustMarquee() {
  const row1Logos = [
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/TRIB3-My-Sporst-Injury.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/Lifestyle-Fitness-My-Sporst-Injury.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/P-My-Sporst-Injury-150x150.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/Classpass-My-Sporst-Injury-e1728770396278.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/REBOOTS-My-Sporst-Injury.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/TW-My-Sporst-Injury.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/10/Achedaway-Logo.png",
  ];

  const row2Logos = [
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/bbc.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/itv.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/liverpool.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/manutd.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/olympic.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/bupa.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/axa.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/aviva.png",
    "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/simplyhealth.png",
  ];

  return (
    <section className="bg-[var(--color-brand-card)] py-16 w-full overflow-hidden relative">
      <div className="absolute top-0 w-full divider-lime" />
      
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-[0.15em] font-semibold block mb-4">
          <span className="inline-block w-5 h-0.5 bg-[#C8F04B] mr-3 mb-0.5 align-middle" />
          OUR PARTNERS
        </span>
        <h2 className="font-syne font-bold text-white text-2xl md:text-3xl leading-tight">
          Trusted by <span className="lime-underline">Athletes</span>, Professionals & Organisations.
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="marquee inline-flex items-center gap-16 min-w-full">
            {[...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="marquee-reverse inline-flex items-center gap-16 min-w-full">
            {[...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Institution logo"
                className="h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full divider-lime" />
    </section>
  );
}
