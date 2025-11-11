import { Hero } from "./Hero";
import { DashboardShowcase } from "./DashboardShowcase";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { Features } from "./Features";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <>
      <Hero />
      <DashboardShowcase />
      <Testimonials />
      <Pricing />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
