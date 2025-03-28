"use client";
import Blur from "@/Animations/Blur";
import Image from "next/image";
import { useEffect, useState } from "react";
import HoverScale from '@/Animations/HoverScale';

export default function NewsSection() {
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100">
            <div className="max-w-[1680px] mx-auto">
                <div 
                    className={`flex items-center gap-2 mb-4 transition-opacity duration-300 ${!isVisible ? 'opacity-0 invisible' : ''}`} 
                    id="scrollIndicator"
                >
                    <div className="w-2 h-4">
                        <svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M3.64645 14.3536C3.84171 14.5488 4.15829 14.5488 4.35355 14.3536L7.53553 11.1716C7.7308 10.9763 7.7308 10.6597 7.53553 10.4645C7.34027 10.2692 7.02369 10.2692 6.82843 10.4645L4 13.2929L1.17157 10.4645C0.97631 10.2692 0.659728 10.2692 0.464466 10.4645C0.269203 10.6597 0.269203 10.9763 0.464466 11.1716L3.64645 14.3536ZM3.5 -2.18557e-08L3.5 14L4.5 14L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#1D1D1F"/>
                        </svg>
                    </div>
                    <span className="text-monochrome-800 text-subbody font-medium font-satoshi">scroll to explore</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6 relative">
                    <a href="/travaux/radionaut" className="w-full md:w-3/4">
                        <div className="sticky top-[16px]">
                            <div
                                className="overflow-hidden rounded-[5px] mb-4"
                                onMouseEnter={() => setHoveredIndex(0)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <HoverScale isHovered={hoveredIndex === 0}>
                                    <Image 
                                        src="/news.webp"
                                        alt="Project thumbnail"
                                        width={1280}
                                        height={720}
                                        className="w-full aspect-video object-cover"
                                    />
                                </HoverScale>
                            </div>
                            <div>
                                <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">Radionaut</h3>
                                <p className="text-subbody font-medium font-satoshi text-monochrome-800">/Explorez plus 40 000 radios simplement</p>
                            </div>
                        </div>
                    </a>

                    <div className="w-full md:w-1/4 flex flex-col gap-6">
                        <a href="https://discord.gg/EPBXReEWak" target="_blank" className="flex-shrink-0">
                            <div 
                                className="overflow-hidden rounded-[5px] mb-4"
                                onMouseEnter={() => setHoveredIndex(1)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <HoverScale isHovered={hoveredIndex === 1}>
                                    <Image 
                                        src="/produits/discord.webp"
                                        alt="Project thumbnail"
                                        width={1000}
                                        height={1000}
                                        className="w-full object-cover"
                                    />
                                </HoverScale>
                            </div>
                            <div>
                                <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">csh Discord</h3>
                                <p className="text-subbody font-medium font-satoshi text-monochrome-800">/Ensemble, débatons d'actualités technologique & design</p>
                            </div>
                        </a>
                        <div className="flex-shrink-0">
                            <div 
                                className="overflow-hidden rounded-[5px] mb-4"
                                onMouseEnter={() => setHoveredIndex(2)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <HoverScale isHovered={hoveredIndex === 2}>
                                    <Image 
                                        src="/produits/icons.webp"
                                        alt="Project thumbnail"
                                        width={1000}
                                        height={1000}
                                        className="w-full object-cover"
                                    />
                                </HoverScale>
                            </div>
                            <div>
                                <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">csh Icons</h3>
                                <p className="text-subbody font-medium font-satoshi text-monochrome-800">/Plus de 1200 icons fait à la mains</p>
                            </div>
                        </div>
                        <a href="/newsletter" className="flex-shrink-0">
                            <div 
                                className="overflow-hidden rounded-[5px] mb-4"
                                onMouseEnter={() => setHoveredIndex(3)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <HoverScale isHovered={hoveredIndex === 3}>
                                    <Image 
                                        src="/produits/techtalk.webp"
                                        alt="Project thumbnail"
                                        width={1000}
                                        height={1000}
                                        className="w-full object-cover"
                                    />
                                </HoverScale>
                            </div>
                            <div>
                                <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">Tech.Talk</h3>
                                <p className="text-subbody font-medium font-satoshi text-monochrome-800">/Votre résumé d'actualité technologique hebdomadaire.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}