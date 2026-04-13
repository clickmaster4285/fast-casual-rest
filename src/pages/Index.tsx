import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPoints />
      <Solutions />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <CaseStudy />
      <Testimonials />
      <AboutUs />
      <Services />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
