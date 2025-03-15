"use client";
import React from 'react';
import AnimatedContent from '@/Animations/AnimatedContent';

export default function ProduitGrids() {
    const products = [
        {
            id: 1,
            title: "Un design. Une vision. Une collection.",
            description: "L'univers cshStudio comprend une suite d'outils conçus pour élever votre créativité. Design System, UI Kit, Icons, Templates, … Chaque produit incarne notre exigence du détail et notre approche minimaliste, pour des expériences à la fois élégantes et percutantes."
        },
        {
            id: 2,
            title: "Un design. Une vision. Une collection.",
            description: "L'univers cshStudio comprend une suite d'outils conçus pour élever votre créativité. Design System, UI Kit, Icons, Templates, … Chaque produit incarne notre exigence du détail et notre approche minimaliste, pour des expériences à la fois élégantes et percutantes."
        },
        {
            id: 3,
            title: "Un design. Une vision. Une collection.",
            description: "L'univers cshStudio comprend une suite d'outils conçus pour élever votre créativité. Design System, UI Kit, Icons, Templates, … Chaque produit incarne notre exigence du détail et notre approche minimaliste, pour des expériences à la fois élégantes et percutantes."
        },
        {
            id: 4,
            title: "Un design. Une vision. Une collection.",
            description: "L'univers cshStudio comprend une suite d'outils conçus pour élever votre créativité. Design System, UI Kit, Icons, Templates, … Chaque produit incarne notre exigence du détail et notre approche minimaliste, pour des expériences à la fois élégantes et percutantes."
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
                            <div className="w-full md:w-[650px] h-[300px] md:h-[500px] p-2.5 bg-[#1d1d1f] rounded-[5px]"></div>
                            <div className="flex-1 self-stretch inline-flex flex-col justify-between items-start">
                                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch relative justify-start text-[#1d1d1f] text-subtitle font-medium font-satoshi leading-[30px]">{product.title}</div>
                                    <div className="self-stretch relative justify-start text-[#75757a] text-body font-medium font-satoshi leading-relaxed">{product.description}</div>
                                </div>
                                <a href="https://medium.com/@clement.sainthilaire.app" target="_blank" className="flex items-center gap-2 group cursor-pointer">
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