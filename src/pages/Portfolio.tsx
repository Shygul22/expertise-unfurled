import CourseHeroSection from "@/components/CourseHeroSection";
import CourseFeaturesSection from "@/components/CourseFeaturesSection";
import EnrollmentStatsSection from "@/components/EnrollmentStatsSection";
import CourseOffersSection from "@/components/CourseOffersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen">
      <CourseHeroSection />
      <CourseFeaturesSection />
      <EnrollmentStatsSection />
      <CourseOffersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Portfolio;