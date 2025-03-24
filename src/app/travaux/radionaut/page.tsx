"use client";
import NavbarSection from "@/components/navbarSection";
import { useState } from "react";

const features = [
  { link: "/travaux/case/radionaut/1.webp", id: 1, isFullWidth: true },
  { link: "/travaux/case/radionaut/2.webp", id: 2, isFullWidth: false },
  { link: "/travaux/case/radionaut/3.webp", id: 3, isFullWidth: false },
  { link: "/travaux/case/radionaut/4.webp", id: 4, isFullWidth: false },
  { link: "/travaux/case/radionaut/5.webp", id: 5, isFullWidth: false },
  { link: "/travaux/case/radionaut/6.webp", id: 6, isFullWidth: false },
  { link: "/travaux/case/radionaut/7.webp", id: 7, isFullWidth: false },

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
      answer: `Radionaut est le résultat d’une expérimentation sur la conception d’une application de découverte et d’écoute de radios.
              </br><br/>
              Dans ce projet, j’ai été responsable de l’ensemble de la rédaction du concept et de ses fonctionnalités, ainsi que de la conception de l’UI/UX, matérialisée à travers un prototype interactif.
              </br><br/>
              L’objectif principal était de rendre la découverte et l’exploration des plus de 40 000 radios disponibles dans le monde aussi simples et accessibles que possible. L’objectif secondaire était d’offrir une expérience de streaming radio aussi intuitive que la consommation de musique sur les plateformes populaires actuelles (Spotify, Apple Music, YouTube Music…).
              </br><br/>
              L’application repose sur une interface structurée autour d’une fonctionnalité clé : la découverte de stations radio. Elle est composée de trois pages principales et permet d’explorer les radios du monde entier grâce à un globe interactif en 3D, où chaque station est représentée en fonction de sa localisation. Des options de filtrage et de recherche enrichissent l’expérience utilisateur.
              </br><br/>
              J’ai utilisé Figma et ses fonctionnalités avancées de prototypage et de conditions pour permettre une navigation complète sans avoir à concevoir l’ensemble des pages. Toutefois, en raison des limitations de Figma, j’ai préféré coder le globe en React, puis intégrer une capture vidéo de celui-ci dans mon prototype Figma.`,
    },
    {
      id: 2,
      question: "Credits",
      answer: `Conception, UI et UX : Clément Saint-Hilaire
              </br>
              Nom des radios : Clément Saint-Hilaire, Pierre Le Reste`,
    },
    {
      id: 3,
      question: "Links",
      answer: `<a href="https://www.figma.com/proto/WcmC33QCpZsxKI1KYviuxm/Radionaute?page-id=1%3A4&node-id=287-1642&viewport=2826%2C129%2C1.09&t=L7ysK5EfPXqMvNzr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=287%3A1642&hotspot-hints=0" target="_blank" rel="noopener noreferrer">/Voir la preview sur Figma</a>`,
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
        <a href="/travaux#projectGridTitle" className="flex items-center gap-2 group cursor-pointer mb-4">
            <svg width="12" height="5" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className="transform transition-transform group-hover:-translate-x-1">
                <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM15 3.5L1 3.5V4.5L15 4.5V3.5Z" 
                fill="#757575"/>
            </svg>
            <span className="text-subbody font-normal font-satoshi text-monochrome-500">retour</span>
          </a>
        <FAQAccordion/>
      </div>
      <div className="flex flex-col w-full pt-[70px] md:w-2/3">
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`${feature.isFullWidth ? 'col-span-2' : 'col-span-1'}`}
            > 
              <img 
                src={feature.link} 
                alt={`Assoreg project image ${feature.id}`} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
          <iframe 
            className="w-full col-span-2 h-[800px] border-none bg-transparent" 
            src="https://embed.figma.com/proto/WcmC33QCpZsxKI1KYviuxm/Radionaut?page-id=1%3A4&node-id=287-1642&viewport=264%2C-373%2C0.49&scaling=scale-down&content-scaling=fixed&starting-point-node-id=287%3A1642&hotspot-hints=0&embed-host=share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}