'use client';

import { useEffect, useRef, useState } from 'react';
import HoverScale from '../Animations/HoverScale';

interface Project {
    imageLink: string;
    category: string;
    width: number;
    height: number;
}

export default function ProjectSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const projects: Project[] = [
        { imageLink: '/projets/hyperion.webp', category: 'Hyperion Cloud', width: 650, height: 366 },
        { imageLink: '/projets/beauregard2024.webp', category: 'Beauregard', width: 212, height: 300 },
        { imageLink: '/projets/memory-updated.webp', category: 'Exploration 001', width: 286, height: 400 },
        { imageLink: '/projets/radionaut.webp', category: 'Radionaut', width: 400, height: 400 },
        { imageLink: '/projets/hyperion-app.webp', category: 'Hyperion Cloud', width: 300, height: 300 },
        { imageLink: '/projets/skorpia.webp', category: 'Skorpia', width: 658, height: 370 },
        { imageLink: '/projets/modern-bauhaus.webp', category: 'Bauhaus', width: 212, height: 300 },
        { imageLink: '/projets/coop-etiquette.webp', category: 'Coop 5pour100', width: 200, height: 200 },
        { imageLink: '/projets/hyperion-story.webp', category: 'Hyperion Cloud', width: 600, height: 338 },
        { imageLink: '/projets/assoreg-card.webp', category: 'Assoreg', width: 300, height: 250 },
        { imageLink: '/projets/cshstudio-wave.webp', category: 'cshStudio', width: 500, height: 450 },
        { imageLink: '/projets/radionaut2.webp', category: 'Radionaut', width: 446, height: 500 },
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = scrollContainer.scrollLeft;
        const normalScrollSpeed = 0.5;
        const slowScrollSpeed = 0.1;

        const scroll = () => {
            if (!scrollContainer) return;

            const scrollSpeed = isHovered ? slowScrollSpeed : normalScrollSpeed;
            scrollPosition += scrollSpeed;

            // Get the width of a single set of projects
            const singleSetWidth = scrollContainer.scrollWidth / 2;

            // If we've scrolled past the first set
            if (scrollPosition >= singleSetWidth) {
                // Reset to the start of the first set
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;

            animationFrameId = requestAnimationFrame(scroll);
        };

        // Start scrolling animation
        animationFrameId = requestAnimationFrame(scroll);

        // Slow down on hover
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
                scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isHovered]);

    return (
        <section className="w-full bg-monochrome-100">
            <div className="max-w-[1680px] mx-auto py-32">
                <div className="flex justify-between items-end mb-8 px-4 md:px-6 lg:px-8">
                    <h2 className="text-title font-medium font-satoshi text-monochrome-800">/Projets</h2>
                    <a href="/travaux" className="flex items-center gap-2 group cursor-pointer">
                        <span className="text-subbody font-medium font-satoshi text-monochrome-800">explorer tous les projets</span>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="transform transition-transform group-hover:translate-x-1">
                            <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z"
                            fill="#1D1D1F"/>
                        </svg>
                    </a>
                </div>

                <div className="overflow-x-hidden" ref={scrollRef}>
                    <div className="inline-flex gap-4 px-4 md:px-6 lg:px-8">
                        {/* First set of projects */}
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-none"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="relative mb-4 overflow-hidden rounded-[5px]">
                                    <HoverScale isHovered={hoveredIndex === index}>
                                    <div style={{
                                        width: project.width,
                                        height: project.height,
                                        background: '#1D1D1F',
                                        borderRadius: '12px',
                                    }}>
                                        {project.imageLink && (
                                            <img
                                                src={project.imageLink}
                                                alt={project.category}
                                                className="w-full h-full rounded-[5px] object-cover"
                                            />
                                        )}
                                    </div>
                                    </HoverScale>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-subbody font-medium font-satoshi text-monochrome-800">/{project.category}</p>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for infinite scroll effect */}
                        {projects.map((project, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="flex-none rounded-[5px]"
                                onMouseEnter={() => setHoveredIndex(index + projects.length)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="relative mb-4 overflow-hidden">
                                    <HoverScale isHovered={hoveredIndex === index + projects.length}>
                                    <div style={{
                                        width: project.width,
                                        height: project.height,
                                        background: '#1D1D1F',
                                        borderRadius: '12px',
                                    }}>
                                        {project.imageLink && (
                                            <img
                                                src={project.imageLink}
                                                alt={project.category}
                                                className="w-full h-full rounded-[5px] object-cover"
                                            />
                                        )}
                                    </div>
                                    </HoverScale>
                                </div>
                                <div className="space-y-1">
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
