import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Portfolio;