import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeatureSection from "@/components/FeatureSection";
import UserFlowSection from "@/components/UserFlowSection";
import AdminFlowSection from "@/components/AdminFlowSection";
import OfflineOnline from "@/components/OfflineOnline";
import UseCaseSection from "@/components/UseCaseSection";
import BenefitSection from "@/components/BenefitSection";
import HardwareSection from "@/components/HardwareSection";
import ServiceSection from "@/components/ServiceSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeatureSection />
        {/* <BenefitSection /> */}
        {/* <UserFlowSection /> */}
        <AdminFlowSection />
        <OfflineOnline />
        <UseCaseSection />
        {/* <HardwareSection /> */}
        <ServiceSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
