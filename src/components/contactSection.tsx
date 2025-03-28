"use client";
import React from 'react';
import AnimatedContent from "@/Animations/AnimatedContent";
import RdvSection from "@/components/rdvSection";
import ShinyText from "@/Animations/ShinnyText";
import LetterByLetterHoverEffect from "@/Animations/LetterByLetterHover";


export default function ContactSection() {
    return (
        <div className="max-w-[1680px] gap-4 md:gap-4 mx-auto flex flex-col px-4 md:px-6 lg:px-4 py-4 md:py-4">
           
            <div className="w-full mt-16 flex max-w-[1680px] justify-start items-start gap-4">
                    <div className="hidden md:flex w-0 w-1/2"></div>
                    <div className="flex w-full md:w-1/2 flex-col justify-start items-start gap-4">
                    <AnimatedContent direction="vertical" distance={20} delay={200}>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-[99px] bg-[#10b981b3] shadow-[#10b981b3] shadow-glow pulse-animation"></div>
                            <ShinyText text="1 place disponible à partir du 28/04/2025" disabled={false} speed={4} className='text-monochrome-500 text-body font-medium font-satoshi' />
                        </div>
                    </AnimatedContent>

                    <AnimatedContent direction="vertical" distance={20} delay={200}>
                        <div className="self-stretch justify-start text-monochrome-800 text-title md:text-display font-medium font-satoshi leading-[40px] md:leading-[65px] mb-4">Ensemble, créons quelque chose de beau.</div>
                        <div className="self-stretch justify-start text-monochrome-500 text-body font-medium font-satoshi leading-relaxed mb-4">Découvrons ensemble comment je peux vous aider à réaliser votre vision. Que vous ayez besoin d'un design système, d'un site web ou d'une interface produit, cette consultation nous permettra d'explorer vos idées et objectifs.</div>
                        <RdvSection />
                    </AnimatedContent>
                    </div>
            </div>

            <div className="w-full flex flex-col md:flex-row max-w-[1680px] justify-start items-start gap-2">
                    <div className="flex w-1/2 md:w-1/3 flex-col justify-start items-start gap-2">
                        <AnimatedContent direction="vertical" distance={20} delay={400}>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:clement.sainthilaire.pro@gmail.com" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">→ Mail</a>
                                <a href="https://www.threads.net/@clement.sainthilaire" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">→ Threads</a>
                                <a href="https://www.instagram.com/cshstudio/" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">→ Instagram</a>
                                <a href="www.linkedin.com/in/clément-saint-hilaire-01412a282" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">→ LinkedIn</a>
                            </div>
                        </AnimatedContent>
                    </div>
                <div className="flex hidden md:flex w-1/3"></div>
                <div className="flex w-full w-1/2 md:w-1/3"></div>
            </div>


            <div className="w-full flex max-w-[1680px] justify-start items-start gap-4">
                <div className="flex w-1/2 md:w-1/3"></div>
                    <div className="flex w-1/2 md:w-1/3 flex-col justify-start items-start gap-2">
                        <AnimatedContent direction="vertical" distance={20} delay={600}>
                        <div className="flex flex-col gap-3">
                            <a href="https://discord.gg/EPBXReEWak" target="_blank" className="text-monochrome-500 text-body font-medium h-8 font-satoshi leading-relaxed mb-3 md:mb-0"><LetterByLetterHoverEffect text="→ Discord communautaire" /></a>
                            <a href="https://www.figma.com/@cshstudio" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed mb-3 md:mb-0"><LetterByLetterHoverEffect text="→ Figma" /></a>
                            <a href="https://medium.com/@clement.sainthilaire.app" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed mb-3 md:mb-0"><LetterByLetterHoverEffect text="→ Blog" /></a>
                            <a href="https://csh.beehiiv.com/subscribe" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed mb-3 md:mb-0"><LetterByLetterHoverEffect text="→ Newsletter" /></a>   
                        </div>
                    </AnimatedContent>
                    </div>
                <div className="hidden md:flex w-1/3"></div>
            </div>

            <div className="w-full flex max-w-[1680px] justify-start items-start gap-4">
                    <div className="flex w-1/3 flex-col justify-start items-start gap-2">
                        <AnimatedContent direction="vertical" distance={20} delay={800}>
                            <div className="flex flex-col gap-3">
                                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed mb-3 md:mb-0">→ LinkedIn</a>
                                <a href="/CV-clement-saint-hilaire.pdf" target="_blank" className="text-monochrome-500 text-body font-medium font-satoshi leading-relaxed mb-3 md:mb-0">→ Resume</a>
                            </div>
                        </AnimatedContent>
                    </div>
                <div className="flex w-1/3"></div>
                <div className="flex w-1/3"></div>
            </div>

            <style jsx global>{`
                .shadow-glow {
                    box-shadow: 0 0 10px rgba(16, 185, 129, 0.7);
                }
                
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
                    }
                }
                
                .pulse-animation {
                    animation: pulse 2s infinite;
                }
            `}</style>
        </div>
    );
}