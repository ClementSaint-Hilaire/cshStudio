import FooterSection from "@/components/footerSection";
import NavbarSection from "@/components/navbarSection";
import ProduitsHeroSection from "@/components/produitsHeroSection";
import ProduitGrids from "@/components/produitGrid";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <ProduitsHeroSection />
      <ProduitGrids/>
      <FooterSection />
    </main>
  );
} 