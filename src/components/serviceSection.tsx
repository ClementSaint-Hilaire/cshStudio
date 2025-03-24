"use client";
import AnimatedContent from '@/Animations/AnimatedContent';
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const BLUR_FADE_DELAY = 0.04;

export default function ServiceSection() {

    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    
    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const tooltipSpring = useSpring({
        left: mousePosition.x,
        top: mousePosition.y,
        opacity: hoveredService ? 1 : 0,
        config: { tension: 300, friction: 20 }
    });


    return (
        <section className="w-full bg-monochrome-100 px-4">
        <div className="w-full max-w-[1680px] mx-auto py-8 md:py-8">
            <div className="self-stretch max-w-[1680px] flex flex-col md:flex-row justify-start items-start gap-4 md:mt-4 py-8 md:py-8">
                <div className="hidden md:block md:flex-1 h-[219px] p-2.5 bg-white"></div>
                <div className="w-full md:flex-1 flex flex-col justify-start items-start gap-4">
                    <AnimatedContent>
                        <div className="self-stretch relative justify-start text-monochrome-800 text-title md:text-Display font-medium font-satoshi md:leading-[65px]">Repensez votre design. Marquez les esprits.</div>
                    </AnimatedContent>
                    <AnimatedContent>
                        <div className="w-full self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">Chez cshStudio, chaque projet est une fusion de réflexion, d’audace et d’épure. Nous créons des identités visuelles impactantes, des expériences numériques fluides et des systèmes de design cohérents. Style réfléchis et storytelling visuel sont au cœur de notre approche pour donner à votre marque une présence forte et intemporelle</div>
                    </AnimatedContent>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="self-stretch max-w-[1680px] py-16 mb-4 inline-flex justify-end items-end gap-8">
                <AnimatedContent>
                    <div className="relative justify-end text-monochrome-800 text-subtitle font-normal font-satoshi leading-normal">/Services</div>
                </AnimatedContent>
                </div>
            </div> 

            <div className="w-full max-w-[1680px] inline-flex flex-col justify-center items-center gap-8">
                <a 
                href="/travaux" 
                onMouseEnter={() => setHoveredService(1)}
                onMouseLeave={() => setHoveredService(null)}
                onMouseMove={handleMouseMove}
                className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4 mb-16">
                    <AnimatedContent>
                    <div className="inline-flex justify-start items-start gap-1">
                        <div className="justify-start text-monochrome-800 text-caption font-medium font-satoshi leading-3">01</div>
                        <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi leading-[48px]">Branding</div>
                    </div>
                    <div className="self-stretch h-0 outline outline-[1px] outline-monochrome-500 mt-4 mb-8"></div>
                    <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-16">
                        <div className="hidden md:flex w-1/3 relative"></div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-500 text-subtitle font-medium font-satoshi leading-[30px]">Élevez votre marque pour incarner votre vision, inspirer un sentiment d’appartenance et mener avec conviction dans un monde en évolution.</div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-800 text-base font-medium font-satoshi leading-snug">→ Identité visuelle<br/>→ Identité verbale<br/>→ Stratégie de marque<br/>→ Brand guidlines</div>
                    </div>
                    </AnimatedContent>
                </a>
                <a 
                href="/travaux" 
                onMouseEnter={() => setHoveredService(4)}
                onMouseLeave={() => setHoveredService(null)}
                onMouseMove={handleMouseMove}
                className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4 mb-16">
                    <AnimatedContent>
                    <div className="self-stretch inline-flex justify-start items-start gap-1">
                        <div className="justify-start text-monochrome-800 text-caption font-medium font-satoshi leading-3">02</div>
                        <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi leading-[48px]">Web design</div>
                    </div>
                    <div className="self-stretch h-0 outline outline-[1px] outline-monochrome-500 mt-4 mb-8"></div>
                    <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-16">
                        <div className="hidden md:flex w-1/3 relative"></div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-500 text-subtitle font-medium font-satoshi leading-[30px]">Créez une expérience digitale fluide et immersive où chaque détail renforce l'impact de votre marque.</div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-800 text-base font-medium font-satoshi leading-snug">→ Design d'interfaces UI<br/>→ Expérience utilisateur UX<br/>→ Design system<br/>→ Iconographie.</div>
                    </div>
                    </AnimatedContent>
                </a>
                <a 
                href="/travaux" 
                onMouseEnter={() => setHoveredService(3)}
                onMouseLeave={() => setHoveredService(null)}
                onMouseMove={handleMouseMove}
                className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4 mb-16">
                    <AnimatedContent>
                    <div className="self-stretch inline-flex justify-start items-start gap-1">
                        <div className="justify-start text-monochrome-800 text-caption font-medium font-satoshi leading-3">03</div>
                        <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi leading-[48px]">App design</div>
                    </div>
                    <div className="self-stretch h-0 outline outline-[1px] outline-monochrome-500 mt-4 mb-8"></div>
                    <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-16">
                        <div className="hidden md:flex w-1/3 relative"></div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-500 text-subtitle font-medium font-satoshi leading-[30px]">Concevez des applications intuitives et esthétiques qui allient performance et simplicité d'usage.</div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-800 text-base font-medium font-satoshi leading-snug">→ UX/UI mobile & desktop<br/>→ Prototypage interactif<br/>→ Design system & composants<br/>→ Considérations pour iOS & Android</div>
                    </div>
                    </AnimatedContent>
                </a>
                <a 
                href="/travaux" 
                onMouseEnter={() => setHoveredService(4)}
                onMouseLeave={() => setHoveredService(null)}
                onMouseMove={handleMouseMove}
                className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4 mb-16">
                    <AnimatedContent>
                    <div className="self-stretch inline-flex justify-start items-start gap-1">
                        <div className="justify-start text-monochrome-800 text-caption font-medium font-satoshi leading-3">04</div>
                        <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi leading-[48px]">Graphic design</div>
                    </div>
                    <div className="self-stretch h-0 outline outline-[1px] outline-monochrome-500 mt-4 mb-8"></div>
                    <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-16">
                        <div className="hidden md:flex w-1/3 h-20 relative"></div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-500 text-subtitle font-medium font-satoshi leading-[30px]">Donnez vie à une identité visuelle forte et cohérente à travers des créations graphiques précises et impactantes.</div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-800 text-base font-medium font-satoshi leading-snug">→ Direction artistique<br/>→ Conception de support digitaux<br/>→ Typographie & iconographie<br/>→ Logo</div>
                    </div>
                    </AnimatedContent>
                </a>
                <a 
                href="/travaux" 
                onMouseEnter={() => setHoveredService(5)}
                onMouseLeave={() => setHoveredService(null)}
                onMouseMove={handleMouseMove}
                className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4 mb-16">
                    <AnimatedContent>
                    <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-1">
                        <div className="justify-start text-monochrome-800 text-caption font-medium font-satoshi leading-3">05</div>
                        <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi leading-[48px]">Developpement</div>
                    </div>
                    <div className="self-stretch h-0 outline outline-[1px] outline-monochrome-500 mt-4 mb-8"></div>
                    <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-16">
                        <div className="hidden md:flex w-1/3 h-20 relative"></div>
                        <div className="flex w-full md:w-1/3 justify-start text-monochrome-500 text-subtitle font-medium font-satoshi leading-[30px]">Développez des solutions performantes et sur-mesure, en combinant technologies modernes et flexibilité du no-code.</div>
                        <div className="flex w-1/2 md:w-1/3 justify-start text-monochrome-800 text-base font-medium font-satoshi leading-snug">→ Développement front-end (React, Next.js)<br/>→ Webflow & Framer.<br/>→ Intégration de design system<br/>→ Optimisation, performance & SEO</div>
                    </div>
                    </AnimatedContent>
                    </a>
            </div>

            {hoveredService !== null && (
                <animated.div 
                    className="fixed pointer-events-none"
                    style={{
                        ...tooltipSpring,
                        transform: 'translate(10%, -40%)'
                    }}
                >
                    <div className="cursor-pointer px-4 py-2 bg-blend-luminosity bg-monochrome-100/70 rounded-[24px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-monochrome-500 backdrop-blur-[50px] inline-flex justify-center items-center gap-2.5">
                        <div className="justify-center text-monochrome-800 text-base font-medium font-satoshi">Voir les projets</div>
                    </div>                
                </animated.div>
            )}
        </div>
    </section>
    );
}