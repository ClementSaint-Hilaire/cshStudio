'use client';

import { useEffect, useRef } from 'react';
import AnimatedContent from '@/Animations/AnimatedContent';

interface Project {
    imageLink: string;
    width: number;
    height: number;
}

export default function ProjectSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const projects: Project[] = [
        { imageLink: '/produits/carrousel/01.webp', width: 300, height: 300 },
        { imageLink: '/produits/carrousel/02.webp', width: 350, height: 350 },
        { imageLink: '/produits/carrousel/03.webp', width: 444, height: 200 },
        { imageLink: '/produits/carrousel/3-5.webp', width: 711, height: 400 },
        { imageLink: '/produits/carrousel/04.webp', width: 250, height: 381 },
        { imageLink: '/produits/carrousel/05.webp', width: 444, height: 200 },
        { imageLink: '/produits/carrousel/06.webp', width: 711, height: 400 },
        { imageLink: '/produits/carrousel/07.webp', width: 897, height: 400 },
        { imageLink: '/produits/carrousel/09.webp', width: 300, height: 300 },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = 0;
        const scrollSpeed = 0.5; // Pixels per frame

        const scroll = () => {
            scrollPosition += scrollSpeed;
            
            // Reset scroll position when reaching the first set of projects
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            
            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        // Start scrolling animation
        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="w-full bg-monochrome-100 px-4">
            <div className="w-full max-w-[1680px] mx-auto py-8 md:py-16">
                <div className="self-stretch max-w-[1680px] flex flex-col md:flex-row justify-start items-start gap-4 md:mt-16 py-8 md:py-8">
                    <div className="hidden md:block md:flex-1 h-[219px] p-2.5 bg-white"></div>
                    <div className="w-full md:flex-1 flex flex-col justify-start items-start gap-4">
                        <AnimatedContent>
                            <div className="self-stretch relative justify-start text-monochrome-800 text-title md:text-Display font-medium font-satoshi md:leading-[65px]">Un design. Une vision. Une collection.</div>
                        </AnimatedContent>
                        <AnimatedContent>
                            <div className="w-full self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">L'univers cshStudio comprend une suite d'outils conçus pour élever votre créativité. Design System, UI Kit, Icons, Templates, … Chaque produit incarne notre exigence du détail et notre approche minimaliste, pour des expériences à la fois élégantes et percutantes.</div>
                        </AnimatedContent>
                    </div>
                </div>
                <AnimatedContent>
                    <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
                        <div className="inline-flex gap-4 min-w-full">
                            {/* First set of projects */}
                            {projects.map((project, index) => (
                                <div key={index} className="flex-none">
                                    <div className="relative mb-4 overflow-hidden transition-all duration-500 ease-out">
                                        <div style={{
                                            width: project.width,
                                            height: project.height,
                                            background: '',
                                            borderRadius: '5px',
                                        }}>
                                            {project.imageLink && (
                                                <img 
                                                    src={project.imageLink} 
                                                    alt="Project image"
                                                    className="w-full h-full object-cover rounded-[5px]"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate set for infinite scroll effect */}
                            {projects.map((project, index) => (
                                <div key={`duplicate-${index}`} className="flex-none">
                                    <div className="relative mb-4 overflow-hidden transition-all duration-500 ease-out">
                                        <div style={{
                                            width: project.width,
                                            height: project.height,
                                            background: '#1D1D1F',
                                            borderRadius: '5px',
                                        }}>
                                            {project.imageLink && (
                                                <img 
                                                    src={project.imageLink} 
                                                    alt="Project image"
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}