"use client";
import NavbarSection from "@/components/navbarSection";
import ContactSection from "@/components/contactSection";


export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-monochrome-100">
      <NavbarSection />
      <ContactSection />
    </main>
  );
} 