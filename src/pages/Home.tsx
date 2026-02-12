import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhyAutomateSection from "../components/WhyAutomateSection";
import WhoWeServeSection from "../components/WhoWeServeSection";
//import TestimonialsSection from "../components/TestimonialsSection";
//import ProjectsSection from "../components/ProjectsSection";
import IntegrationsSection from "../components/IntegrationsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      // Animate elements on scroll
      const animationClasses = [
        ".scroll-animate",
        ".scroll-animate-left",
        ".scroll-animate-right",
        ".scroll-animate-scale",
        ".scroll-animate-fade",
      ];

      animationClasses.forEach((className) => {
        const elements = document.querySelectorAll(className);
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top <= windowHeight * 0.85) {
            element.classList.add("animate-in");
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-brand-neutral-900 text-white" : "bg-white text-brand-neutral-800"
      }`}
    >
      <HeroSection />
      <ServiceSection />
      <HowItWorksSection />
      <WhyAutomateSection />
      <WhoWeServeSection />
      {/*<TestimonialsSection />
      <ProjectsSection />*/}
      <IntegrationsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
