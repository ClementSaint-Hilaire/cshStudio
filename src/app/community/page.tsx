"use client";
import FooterSection from "@/components/footerSection";
import NavbarSection from "@/components/navbarSection";
import NewsletterSection from "@/components/newsletterSection";


export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <NewsletterSection />
      <FooterSection/>
    </main>
  );
} 