"use client";
import React from 'react';
import AnimatedContent from '@/Animations/AnimatedContent';

export default function ProjectGrid() {
    const projects = [
        { title: "Blablou du projet", category: "catégorie" },
        { title: "Blablou du projet", category: "catégorie" },
        { title: "Blablou du projet", category: "catégorie" },
        { title: "Blablou du projet", category: "catégorie" },

    ];

    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100">
            <div className="max-w-[1680px] mx-auto">
                <div className="w-full flex grid grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <AnimatedContent>
                        <div className="w-full" key={index}>
                            <div className="aspect-square w-full bg-monochrome-800 rounded-[5px] mb-4"></div>
                            <div>
                                <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">{project.title}</h3>
                                <p className="text-subbody font-medium font-satoshi text-monochrome-800">/{project.category}</p>
                            </div>
                        </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}