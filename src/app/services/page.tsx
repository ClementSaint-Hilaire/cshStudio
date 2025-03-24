import FooterSection from "@/components/footerSection";
import NavbarSection from "@/components/navbarSection";
import ServiceSection from "@/components/serviceSection";
import ProcessSection from "@/components/processSection";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <ServiceSection />
      <ProcessSection />
      <FooterSection />
    </main>
  );
} 