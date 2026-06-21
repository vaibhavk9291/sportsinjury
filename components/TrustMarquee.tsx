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
    <section className="bg-[var(--color-brand-lime)] py-16 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="font-syne font-bold text-[#0C0C0E] text-2xl md:text-3xl leading-tight">
          Trusted by Athletes, Professionals & Organisations Across Manchester.
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex items-center gap-16 min-w-full">
            {[...row1Logos, ...row1Logos, ...row1Logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="h-10 w-auto object-contain brightness-0 opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse direction if possible, but regular marquee is fine) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex items-center gap-16 min-w-full" style={{ animationDirection: "reverse" }}>
            {[...row2Logos, ...row2Logos, ...row2Logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Institution logo"
                className="h-12 w-auto object-contain brightness-0 opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
