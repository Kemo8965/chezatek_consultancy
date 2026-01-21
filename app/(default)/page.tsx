export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import WhyChooseUs from "@/components/value-proposition";
import ITFeaturesSection from "@/components/ict-features";
import ServicesGrid from "@/components/features-ict";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />

      <ITFeaturesSection />
      <ServicesGrid />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
