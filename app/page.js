import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StepsSection } from "@/components/home/StepsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <StepsSection />
      <CtaBanner />
      <TestimonialsSection />
      <ServiceAreaSection />
      <FaqSection />
    </>
  );
}
