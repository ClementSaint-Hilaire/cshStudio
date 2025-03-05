import FAQSection from "@/components/faqSection";
import HeroSection from "@/components/heroSection";
import NewsSection from "@/components/newsSection";
import ProjectSection from "@/components/projectSection";
import TestimonialsSection from "@/components/testimonialsSection";
import ValeursSection from "@/components/valeursSection";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <HeroSection />
      <NewsSection />
      <ProjectSection />
      <ValeursSection />
      <TestimonialsSection />
    </main>
  );
} 