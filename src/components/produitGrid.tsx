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
                        <AnimatedContent>
                        <div key={product.id} className="flex flex-col md:flex-row self-stretch max-w-[1680px] inline-flex justify-start items-start gap-8 md:gap-16">
                            <div className="w-full md:w-[650px] h-[300px] md:h-[500px] p-2.5 bg-[#1d1d1f] rounded-[5px]"></div>
                            <div className="flex-1 self-stretch inline-flex flex-col justify-between items-start">
                                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch relative justify-start text-[#1d1d1f] text-subtitle font-medium font-satoshi leading-[30px]">{product.title}</div>
                                    <div className="self-stretch relative justify-start text-[#75757a] text-body font-medium font-satoshi leading-relaxed">{product.description}</div>
                                </div>
                                <div className="self-stretch relative justify-start text-[#75757a] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed">/ Accéder</div>
                            </div>
                        </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}