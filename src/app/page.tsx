import BlogSection from "@/components/blogSection";
import HeroSection from "@/components/heroSection";
import NewsSection from "@/components/newsSection";
import ProjectSection from "@/components/projectSection";
import TestimonialsSection from "@/components/testimonialsSection";
import ValeursSection from "@/components/valeursSection";
import FooterSection from "@/components/footerSection";
import NavbarSection from "@/components/navbarSection";  
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <HeroSection />
      <NewsSection />
      <ProjectSection />
      <ValeursSection />
      <TestimonialsSection />
      <BlogSection /> 
      <SkillsSection />
      <FooterSection />
    </main>
  );
} 