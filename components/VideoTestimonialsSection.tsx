"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PlayCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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

  const reviews = [
    {
      text: "The team at MY Sports Injury got me back on the pitch in 3 weeks after an ankle sprain. Incredibly knowledgeable.",
      name: "David H.",
    },
    {
      text: "I've been to 4 different physios over the years, but this is the first clinic that truly understood my biomechanics.",
      name: "Emily R.",
    },
    {
      text: "Excellent service from start to finish. The clinic is pristine, and the staff are incredibly professional.",
      name: "Michael B.",
    },
    {
      text: "As a runner, finding a good physio is hard. These guys are the best in Manchester hands down.",
      name: "Sophie T.",
    },
    {
      text: "Post-surgery rehab went smoother than I could have ever imagined. Can't thank them enough.",
      name: "Liam O.",
    }
  ];

  // Video Carousel (No Autoplay)
  const [emblaVidRef, emblaVidApi] = useEmblaCarousel({ align: "start", dragFree: true });
  // Text Review Carousel (Autoplay)
  const [emblaRevRef, emblaRevApi] = useEmblaCarousel(
    { align: "start", dragFree: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Sync controls with Video Carousel (or Text, arbitrarily using Vid as primary for dots)
  const scrollPrev = useCallback(() => {
    if (emblaVidApi) emblaVidApi.scrollPrev();
    if (emblaRevApi) emblaRevApi.scrollPrev();
  }, [emblaVidApi, emblaRevApi]);

  const scrollNext = useCallback(() => {
    if (emblaVidApi) emblaVidApi.scrollNext();
    if (emblaRevApi) emblaRevApi.scrollNext();
  }, [emblaVidApi, emblaRevApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaVidApi) emblaVidApi.scrollTo(index);
    if (emblaRevApi) emblaRevApi.scrollTo(index);
  }, [emblaVidApi, emblaRevApi]);

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
    <section className="bg-[var(--color-brand-bg)] py-24 w-full relative grain-overlay border-t divider-lime">
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

        {/* PART B: Text Reviews Carousel */}
        <div className="mt-10 overflow-hidden -mx-6 px-6" ref={emblaRevRef}>
          <div className="flex gap-4">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="min-w-[300px] flex-shrink-0 bg-[var(--color-brand-card)] rounded-2xl border border-[var(--color-brand-border)] p-6"
              >
                <div className="text-[#C8F04B] text-sm tracking-widest mb-3">★★★★★</div>
                <p className="italic text-[var(--color-brand-muted)] text-sm leading-relaxed mb-4">
                  "{rev.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="text-white font-semibold text-sm">{rev.name}</h4>
                  <p className="text-[var(--color-brand-muted)] text-xs mt-1 flex items-center gap-1">
                    <span className="text-green-400">✓</span> Verified Google Review
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Navigation UI */}
        <div className="mt-8 flex items-center justify-between max-w-6xl mx-auto">
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

        {/* Read all reviews link */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/mysportsinjury"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[var(--color-brand-border)] text-white px-6 py-3 rounded-full hover:border-[#C8F04B]/40 hover:bg-[var(--color-brand-surface)] transition-all text-sm font-medium group"
          >
            Read All 650+ Reviews
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
