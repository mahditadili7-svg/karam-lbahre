import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <ServicesSection />
    <MenuSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
