"use client";
import CommunityHeroSection from "@/components/communityHeroSection";
import FooterSection from "@/components/footerSection";
import NavbarSection from "@/components/navbarSection";


export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <CommunityHeroSection/>
      <FooterSection/>
    </main>
  );
} 