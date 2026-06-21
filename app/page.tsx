import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesCarousel from "@/components/ServicesCarousel";
import TrustMarquee from "@/components/TrustMarquee";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import LocationCTA from "@/components/LocationCTA";
import Footer from "@/components/Footer";
import FloatingBookCTA from "@/components/FloatingBookCTA";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <ServicesCarousel />
        <VideoTestimonialsSection />
        <TrustMarquee />
        <Team />
        <Blog />
        <LocationCTA />
      </main>
      <Footer />
      <FloatingBookCTA />
      <BackToTop />
    </>
  );
}
