"use client";
import React from 'react';
import AnimatedContent from '@/Animations/AnimatedContent';
import Image from 'next/image';

export default function ProduitGrids() {
    const products = [
        {
            id: 1,
            img: "/produits/toolbox.webp",
            src: "https://clementsainthilaire.notion.site/csh-toolbox",
            title: "csh Toolbox",
            description: "Une large collection d’outils gratuit / open sources, dédiés aux designers et développeurs, regroupant plus de 10 catégories dont “productivité”, “motion”, “mockups”,  “réseaux”, “React.Js”, pour faciliter chaque étape de la création. Conçu pour optimiser les workflows, il offre des ressources pratiques et accessibles  pour gagner en efficacité et en précision."
        },
        {
            id: 2,
            img: "/produits/design-system.webp",
            src: "https://www.figma.com/community/file/1412016153426631847/csh-design-system-v1-5",
            title: "csh Design System",
            description: "Inspirée par le minimalisme et l’efficacité du Swiss Design, csh Design System est une base solide pour structurer et harmoniser l’identité visuelle d’un projet. Composé de plus de 80 composants conçu avec auto-layout pensés pour garantir cohérence et flexibilité, ils simplifient la conception d’interfaces sur Figma tout en assurant une expérience utilisateur fluide et homogène."
        },
        {
            id: 3,
            img: "/produits/slides.webp",
            src: "/produits",
            title: "csh Slides",
            description: "Conçu avec l’objectif de simplifier les présentation, csh Slides offre une collection de templates de diapositives couvrant divers besoins : branding presentation, moodboard, charte graphique, charte éditoriale… Chaque modèle est pensé pour transmettre une identité forte et cohérente, en alliant clarté visuelle et impact narratif."
        },
        {
            id: 4,
            img: "/produits/icons.webp",
            src: "https://www.figma.com/community/file/1412017477167007912/csh-icons",
            title: "csh Icons",
            description: "Au fur et à mesure de mes projet, j’ai eu à concevoir des icônes de toutes sorte. csh Icons est ainsi la bibliothèque qui regroupent l’ensemble de ces icônes conçue avec rigueur et élégance pour s’intégrer parfaitement aux interfaces et identités visuelles. Chaque icône est dessinée avec une attention particulière aux détails, alliant lisibilité et esthétisme intemporel. Ils sont tous disponibles en deux version : Line et Filled et en 3 tailles : 16px 20px et 24px."
        },
        {
            id: 5,
            img: "/produits/ui-kit.webp",
            src: "https://www.figma.com/community/file/1411338115792823148/csh-ui-landing-kit-v1-5",
            title: "csh UI Kit",
            description: "Afin d’optimiser et de simplifier la création de site vitrines, j’ai conçu csh UI Landing Kit : un ensemble de sections et templates Figma optimisés pour créer des landing pages impactantes. Avec un design épuré et structuré inspiré par le Swiss design, il offre des solutions versatiles prêtes à l’emploi pour captiver l’audience et maximiser l’engagement. Conçu avec l’auto-layout, chaque section est disponible en thème claire, sombre, et en 3 tailles : mobile, tablette et ordinateur. "
        },
        {
            id: 6,
            img: "/produits/thumbs.webp",
            src: "https://www.figma.com/community/file/1421800356040679325/figma-thumbs-design-template",
            title: "csh Figma Thumbs",
            description: "Avec pour objectif d'organiser mes fichiers Figma, csh Thumbs est une collection de templates de miniatures conçus pour structurer et présenter vos projets avec clarté et esthétisme. Inspiré par le Swiss Design, chaque modèle allie minimalisme et fonctionnalité pour une organisation visuelle optimale."
        }
    ];
   
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100">
            <div className="flex flex-col">
                <div className="self-stretch py-8 inline-flex flex-col justify-center items-start gap-2.5">
                    <div className="self-stretch h-0 relative ring-[1.50px] ring-monochrome-800"></div>            
                </div>
                <div className="self-stretch max-w-[1680px] py-8 inline-flex justify-start items-end gap-8">
                <AnimatedContent>
                    <div className="relative justify-start text-monochrome-800 text-[40px] font-medium font-satoshi leading-[48px]">/Produits</div>
                </AnimatedContent>
                </div>
            </div> 

            <div className="max-w-[1680px] mx-auto">
                <div className="self-stretch max-w-[1680px] inline-flex flex-col justify-start items-start gap-8 md:gap-16">
                    {products.map((product) => (
                        <AnimatedContent key={product.id}>
                        <div className="flex flex-col md:flex-row self-stretch max-w-[1680px] inline-flex justify-start items-start gap-8 md:gap-16">
                            <Image 
                                src={product.img}
                                alt={product.title}
                                width={650}
                                height={500}
                                className="w-full md:w-[650px] h-[300px] md:h-[500px] object-cover rounded-[5px]"
                            />
                            <div className="flex-1 self-stretch inline-flex flex-col justify-between items-start">
                                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch relative justify-start text-[#1d1d1f] text-subtitle font-medium font-satoshi leading-[30px]">{product.title}</div>
                                    <div className="self-stretch relative justify-start text-[#75757a] text-body font-medium font-satoshi leading-relaxed">{product.description}</div>
                                </div>
                                <a href={product.src} target="_blank" className="flex items-center gap-2 group cursor-pointer">
                                    <span className="text-body font-medium font-satoshi text-monochrome-500">/Accéder</span>
                                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                        className="transform transition-transform group-hover:translate-x-1">
                                        <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z" 
                                        fill="#75757a"
                                        strokeWidth="0.5"
                                        stroke="#75757a"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}