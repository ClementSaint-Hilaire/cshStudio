'use client';

import { useEffect, useRef } from 'react';

interface Project {
    imageLink: string;
    name: string;
    category: string;
    width: number;
    height: number;
}

export default function ProjectSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const projects: Project[] = [
        { imageLink: '/projects/1.jpg', name: 'Titre du projet', category: 'catégorie', width: 315, height: 323 },
        { imageLink: '/projects/2.jpg', name: 'Titre du projet', category: 'catégorie', width: 350, height: 463 },
        { imageLink: '/projects/3.jpg', name: 'Titre du projet', category: 'catégorie', width: 366, height: 177 },
        { imageLink: '/projects/4.jpg', name: 'Titre du projet', category: 'catégorie', width: 561, height: 297 },
        { imageLink: '/projects/5.jpg', name: 'Titre du projet', category: 'catégorie', width: 264, height: 416 },
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

        // Pause on hover
        const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
        const handleMouseLeave = () => {
            scrollPosition = scrollContainer.scrollLeft;
            animationFrameId = requestAnimationFrame(scroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="w-full bg-monochrome-100">
            <div className="max-w-[1680px] mx-auto py-32">
                <div className="flex justify-between items-end mb-8 px-4 md:px-6 lg:px-8">
                    <h2 className="text-title font-medium font-satoshi text-monochrome-800">/Projets</h2>
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <span className="text-subbody font-medium font-satoshi text-monochrome-800">explorer tous les projets</span>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            className="transform transition-transform group-hover:translate-x-1">
                            <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z" 
                            fill="#1D1D1F"/>
                        </svg>
                    </div>
                </div>

                <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
                    <div className="inline-flex gap-4 px-4 md:px-6 lg:px-8 min-w-full">
                        {/* First set of projects */}
                        {projects.map((project, index) => (
                            <div key={index} className="flex-none group">
                                <div className="relative mb-4 overflow-hidden transition-all duration-500 ease-out shadow-none hover:shadow-[0_15px_45px_rgb(0,0,0,0.2)] transform hover:scale-[1.02]">
                                    <div style={{
                                        width: project.width,
                                        height: project.height,
                                        background: '#1D1D1F',
                                        borderRadius: '5px',
                                    }} className="transition-opacity duration-300">
                                        {project.imageLink && (
                                            <img 
                                                src={project.imageLink} 
                                                alt={project.name}
                                                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium font-satoshi text-monochrome-800">{project.name}</h3>
                                    <p className="text-subbody font-medium font-satoshi text-monochrome-800">/{project.category}</p>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for infinite scroll effect */}
                        {projects.map((project, index) => (
                            <div key={`duplicate-${index}`} className="flex-none group">
                                <div className="relative mb-4 overflow-hidden transition-all duration-500 ease-out shadow-none hover:shadow-[0_15px_45px_rgb(0,0,0,0.2)] transform hover:scale-[1.02]">
                                    <div style={{
                                        width: project.width,
                                        height: project.height,
                                        background: '#1D1D1F',
                                        borderRadius: '5px',
                                    }} className="transition-opacity duration-300">
                                        {project.imageLink && (
                                            <img 
                                                src={project.imageLink} 
                                                alt={project.name}
                                                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium font-satoshi text-monochrome-800">{project.name}</h3>
                                    <p className="text-subbody font-medium font-satoshi text-monochrome-800">/{project.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 