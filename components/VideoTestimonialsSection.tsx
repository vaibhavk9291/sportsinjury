"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PlayCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

export default function VideoTestimonialsSection() {
  const videos = [
    {
      id: 1,
      badge: "Patient Story — Back Pain",
      stars: "★★★★★",
      quote: "James — 'I had severe lower back pain. Now completely pain-free after 4 sessions.'",
      name: "James T.",
    },
    {
      id: 2,
      badge: "Sports Massage Recovery",
      stars: "★★★★★",
      quote: "Sarah — 'Best sports massage I've ever had. They actually fix the root cause.'",
      name: "Sarah M.",
    },
    {
      id: 3,
      badge: "Post-Surgery Rehab",
      stars: "★★★★★",
      quote: "Marcus — 'Post-surgery rehab was brilliant. Back to training in 8 weeks.'",
      name: "Marcus L.",
    }
  ];

  const clinicReviews = [
    { text: "The team at MY Sports Injury got me back on the pitch in 3 weeks after an ankle sprain. Incredibly knowledgeable.", name: "David H.", role: "Amateur Footballer", image: "https://randomuser.me/api/portraits/men/1.jpg", stars: "★★★★★" },
    { text: "I've been to 4 different physios over the years, but this is the first clinic that truly understood my biomechanics.", name: "Emily R.", role: "Marathon Runner", image: "https://randomuser.me/api/portraits/women/2.jpg", stars: "★★★★★" },
    { text: "Excellent service from start to finish. The clinic is pristine, and the staff are incredibly professional.", name: "Michael B.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/men/3.jpg", stars: "★★★★★" },
    { text: "As a runner, finding a good physio is hard. These guys are the best in Manchester hands down.", name: "Sophie T.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/women/4.jpg", stars: "★★★★★" },
    { text: "Post-surgery rehab went smoother than I could have ever imagined. Can't thank them enough.", name: "Liam O.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/men/5.jpg", stars: "★★★★★" },
    { text: "Their deep tissue massage is game-changing. I feel completely rejuvenated after every session.", name: "Zainab H.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/women/6.jpg", stars: "★★★★★" },
    { text: "The dry cupping therapy resolved my shoulder tension in just two visits. Highly recommended.", name: "Farhan S.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/men/7.jpg", stars: "★★★★★" },
    { text: "Clear communication, effective treatment plans, and genuine care for patient recovery.", name: "Sana S.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/women/8.jpg", stars: "★★★★★" },
    { text: "A truly modern clinic. The online booking and telehealth options made everything so convenient.", name: "Hassan A.", role: "Verified Patient", image: "https://randomuser.me/api/portraits/men/9.jpg", stars: "★★★★★" },
  ];

  const firstColumn = clinicReviews.slice(0, 3);
  const secondColumn = clinicReviews.slice(3, 6);
  const thirdColumn = clinicReviews.slice(6, 9);

  // Video Carousel (No Autoplay)
  const [emblaVidRef, emblaVidApi] = useEmblaCarousel({ align: "start", dragFree: true });

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Sync controls with Video Carousel
  const scrollPrev = useCallback(() => {
    if (emblaVidApi) emblaVidApi.scrollPrev();
  }, [emblaVidApi]);

  const scrollNext = useCallback(() => {
    if (emblaVidApi) emblaVidApi.scrollNext();
  }, [emblaVidApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaVidApi) emblaVidApi.scrollTo(index);
  }, [emblaVidApi]);

  const onSelect = useCallback(() => {
    if (!emblaVidApi) return;
    setSelectedIndex(emblaVidApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaVidApi.canScrollPrev());
    setNextBtnEnabled(emblaVidApi.canScrollNext());
  }, [emblaVidApi]);

  useEffect(() => {
    if (!emblaVidApi) return;
    onSelect();
    setScrollSnaps(emblaVidApi.scrollSnapList());
    emblaVidApi.on("select", onSelect);
    emblaVidApi.on("reInit", onSelect);
  }, [emblaVidApi, onSelect]);

  const playVideo = (id: number) => {
    setActiveVideo(id);
    const videoElement = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <section className="bg-[#0C0C0E] py-24 w-full relative grain-overlay overflow-hidden">
      <div className="absolute top-0 w-full divider-lime" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-[var(--color-brand-muted)] font-syne text-[11px] uppercase tracking-widest block mb-4 font-semibold">
            <span className="inline-block w-5 h-0.5 bg-[#C8F04B] mr-3 mb-0.5 align-middle" />
            IN THEIR OWN WORDS
          </span>
          <h2 className="font-syne font-bold text-[40px] md:text-[52px] leading-tight text-white mb-4">
            Patients Who Got Their Life <span className="lime-underline">Back.</span>
          </h2>
        </div>

        {/* PART A: Video Carousel */}
        <div className="overflow-hidden -mx-6 px-6" ref={emblaVidRef}>
          <div className="flex gap-5">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="min-w-[380px] md:min-w-[480px] flex-shrink-0 bg-[var(--color-brand-card)] rounded-2xl overflow-hidden border border-[var(--color-brand-border)] relative flex flex-col"
              >
                <div className="relative aspect-video bg-zinc-900 group">
                  <video
                    id={`video-${vid.id}`}
                    controls={activeVideo === vid.id}
                    playsInline
                    className="w-full h-full object-cover"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111115'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E"
                  >
                    <source src="https://mysportsinjury.co.uk/wp-content/uploads/2025/12/My-Sports-Injury.mp4" type="video/mp4" />
                  </video>
                  
                  {activeVideo !== vid.id && (
                    <>
                      {/* Badge */}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] rounded-full px-3 py-1 z-10">
                        {vid.badge}
                      </div>
                      
                      {/* Play Button Overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-20 group"
                        onClick={() => playVideo(vid.id)}
                      >
                        <div className="w-16 h-16 rounded-full bg-[#C8F04B] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                          <PlayCircle className="text-[#0C0C0E] w-8 h-8 ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="p-5 flex-grow">
                  <div className="text-[#C8F04B] text-sm tracking-widest">{vid.stars}</div>
                  <p className="text-[var(--color-brand-text)] text-sm font-medium mt-2 leading-snug line-clamp-2">
                    {vid.quote}
                  </p>
                  <p className="text-[var(--color-brand-muted)] text-xs mt-3 flex items-center gap-1">
                    {vid.name} <span className="text-green-400">✓</span> Verified
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Navigation UI */}
        <div className="mt-8 flex items-center justify-between max-w-6xl mx-auto border-b border-[rgba(255,255,255,0.05)] pb-16">
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={`w-10 h-10 rounded-full border border-[var(--color-brand-border)] flex items-center justify-center transition-colors ${
                !prevBtnEnabled ? "opacity-30 cursor-not-allowed" : "hover:border-[#C8F04B]/40 hover:bg-[var(--color-brand-surface)] text-white"
              } text-[var(--color-brand-muted)]`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={`w-10 h-10 rounded-full border border-[var(--color-brand-border)] flex items-center justify-center transition-colors ${
                !nextBtnEnabled ? "opacity-30 cursor-not-allowed" : "hover:border-[#C8F04B]/40 hover:bg-[var(--color-brand-surface)] text-white"
              } text-[var(--color-brand-muted)]`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-1.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-6 bg-[#C8F04B]"
                    : "w-1.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* PART B: Vertical Scrolling Testimonial Columns */}
        <div className="mt-16">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-2">
              Hundreds of Success Stories
            </h3>
            <p className="text-[#888896]">See what our patients say about their recovery journeys.</p>
          </div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={25} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
          </div>
        </div>

        {/* Read all reviews link */}
        <div className="mt-12 text-center relative z-20">
          <a
            href="https://g.page/mysportsinjury"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[var(--color-brand-border)] text-white px-8 py-3.5 rounded-full hover:border-[#C8F04B] hover:text-[#C8F04B] hover:bg-[rgba(200,240,75,0.05)] transition-all text-sm font-medium group bg-[#0C0C0E]"
          >
            Read All 650+ Google Reviews
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
