"use client";
import NavbarSection from "@/components/navbarSection";
import { useState } from "react";

const features = [
  { link: "/travaux/case/assoreg/1.webp", id: 1, isFullWidth: true },
  { link: "/travaux/case/assoreg/2.webp", id: 2, isFullWidth: true },
  { link: "/travaux/case/assoreg/3.webp", id: 3, isFullWidth: false },
  { link: "/travaux/case/assoreg/4.webp", id: 4, isFullWidth: false },
  { link: "/travaux/case/assoreg/5.webp", id: 5, isFullWidth: true },
];

const FAQAccordion = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqs = [
    {
      id: 1,
      question: "Informations",
      answer: `
    Assoreg est une jeune association caennaise dont l'objectif est de promouvoir et d'aider les associations en leur offrant des services de qualité et un soutien à moindre coût : création de site internet, système d'inscription, système de paiement, gestion des cours ou des activités, tout y est.
    <br/> <br/>
    Au sein du projet, j'occupe principalement le rôle de designer UI/UX. Ma mission est de déterminer comment simplifier les interactions des utilisateurs avec nos produits, afin qu'ils soient utilisables par une large cible.
    <br/> <br/>
    Ma première mission, cependant, était de définir le design system afin de réaffirmer l'identité visuelle de l'association, qui, avant mon arrivée, se limitait à une vague palette de couleurs.
    <br/> <br/>
    J'ai donc réalisé une documentation complète sur le design system d'Assoreg, en profitant de l'occasion pour créer leur logo.
    <br/> <br/>
    Les résultats de mon intervention ont été multiples. Pour ce qui est de la conception de l'identité visuelle, elle a permis de guider les graphistes dans leurs travaux. Mon travail sur l'UX, quant à lui, a permis de rendre plus user-friendly certains processus fastidieux comme l'inscription.`,
    },
    // {
    //   id: 2,
    //   question: "Testimonial",
    //   answer: `You can contact support via the help section on our website or by emailing support@skorpia.fr.`,
    // },
    {
      id: 3,  
      question: "Links",
      answer: `<a href="https://clementsainthilaire.notion.site/assoreg-design-doc?pvs=4" target="_blank" rel="noopener noreferrer">Design System Documentation</a><br/>
               <a href="https://assoreg.fr" target="_blank" rel="noopener noreferrer">Asoreg.fr</a><br/>`
    },
  ];

  return (
    <div className="w-full sticky top-[70px]">
      <NavbarSection/>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <button
            onClick={() => toggleSection(faq.id)}
            className={`flex items-center justify-between w-full py-4 font-heading font-medium leading-[19px] text-left text-monochrome-800`}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === faq.id ? "" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              openSection === faq.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div
              className="py-2 text-monochrome-500 font-body font-medium leading-[22px] text-left"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1680px] mx-auto gap-[32px] px-[16px] py-[50px] md:pt-0">
      <div className="flex flex-col w-full mt-[70px] md:mt-[70px] md:w-1/3">
        <FAQAccordion/>
      </div>
      <div className="flex flex-col w-full pt-[70px] md:w-2/3">
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="w-full">
              <img 
                src={feature.link} 
                alt={`Assoreg project image ${feature.id}`} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}