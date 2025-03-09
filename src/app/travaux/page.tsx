import NewsSection from "@/components/newsSection";
import FooterSection from "@/components/footerSection";
import NavbarSection from "@/components/navbarSection";
import ProjectGrid from "@/components/projectGrid";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <div className="flex justify-between pt-[64px] items-end px-4 md:px-6 lg:px-8">
                    <h2 className="text-title font-medium font-satoshi text-monochrome-800">/Projets</h2>
                </div>
      <NewsSection />
      <ProjectGrid />
      <FooterSection />
    </main>
  );
} 