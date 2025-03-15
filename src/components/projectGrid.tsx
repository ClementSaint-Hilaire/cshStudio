"use client";
import React, { useState } from 'react';
import AnimatedContent from '@/Animations/AnimatedContent';
import Image from 'next/image';
import HoverScale from '@/Animations/HoverScale';

export default function ProjectGrid() {
    const projects = [
        { title: "Trott2Rue", category: "Graphic design", img: "/travaux/thumbnails/trott.webp", src: "/travaux/trott2rue" },
        { title: "Arc Compagny Sum'", category: "Graphic design", img: "/travaux/thumbnails/arc.webp", src: "/travaux/case/arc/arc.pdf" },
        { title: "Skorpia", category: "Branding", img: "/travaux/thumbnails/skorpia.webp", src: "/travaux/skorpia" },
        { title: "Assoreg", category: "Branding", img: "/travaux/thumbnails/assoreg.webp", src: "/travaux/assoreg" },
        { title: "Croissantage.com", category: "Design web", img: "/travaux/thumbnails/croissantage.webp", src: "https://croissantge.com" },
        { title: "Wattiz", category: "Branding", img: "/travaux/thumbnails/wattiz.webp", src: "#" },
        { title: "Retro Pizza", category: "Mobile App  ", img: "/travaux/thumbnails/pizza.webp", src: "#" },
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100">
            <div className="flex flex-col">
                <div className="self-stretch py-8 inline-flex flex-col justify-center items-start gap-2.5">
                    <div className="self-stretch h-0 relative ring-[1.50px] ring-monochrome-800"></div>            
                </div>
                <div className="self-stretch max-w-[1680px] py-8 inline-flex justify-start items-end gap-8">
                    <div className="relative justify-start text-monochrome-800 text-[40px] font-medium font-satoshi leading-[48px]">/Tous les cases</div>
                </div>
            </div> 
            <div className="max-w-[1680px] mx-auto">
                <div className="w-full flex grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <AnimatedContent key={index}>
                            <a 
                                href={project.src} 
                                className="w-full"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="aspect-square w-full mb-4 overflow-hidden rounded-[5px]">
                                    <HoverScale isHovered={hoveredIndex === index}>
                                        <Image 
                                            src={project.img} 
                                            alt={project.title} 
                                            width={1000} 
                                            height={1000} 
                                            className="w-full h-full object-cover"
                                        />
                                    </HoverScale>
                                </div>
                                <div>
                                    <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">{project.title}</h3>
                                    <p className="text-subbody font-medium font-satoshi text-monochrome-800">/{project.category}</p>
                                </div>
                            </a>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}