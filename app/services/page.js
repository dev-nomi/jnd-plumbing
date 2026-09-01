import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { StepsSection } from "@/components/home/StepsSection";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata = {
  title: "Our Plumber Services | JND Plumber",
  description:
    "Explore JND Plumber full range of professional plumbing services across Kuala Lumpur — repairs, installations, re-piping and leak detection.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
      <CtaBanner />
      <StepsSection />
    </>
  );
}
