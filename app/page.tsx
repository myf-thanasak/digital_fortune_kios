import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowSection from "@/components/HowSection";
import PackageSection from "@/components/PackageSection";
import PortfolioSection from "@/components/PortfolioSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioSection />
        <HowSection />
        <PackageSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
