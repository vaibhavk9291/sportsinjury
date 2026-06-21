import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustMarquee from "@/components/TrustMarquee";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import LocationCTA from "@/components/LocationCTA";
import Footer from "@/components/Footer";
import FloatingBookCTA from "@/components/FloatingBookCTA";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Services />
        <TrustMarquee />
        <Team />
        <Reviews />
        <Blog />
        <LocationCTA />
      </main>
      <Footer />
      <FloatingBookCTA />
    </>
  );
}
