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

            <div className="flex flex-col">
                <AnimatedContent>
                <div className="self-stretch max-w-[1680px] mt-24 py-8 mb-4 inline-flex justify-start items-end gap-8">
                    <div className="relative justify-start text-monochrome-800 text-subtitle font-normal font-satoshi leading-normal">/Process</div>
                </div>
                </AnimatedContent>

                <div className="w-full max-w-[1680px] pb-8 inline-flex flex-col justify-start items-start gap-16">
                    <AnimatedContent>
                        <div className="w-full max-w-[1680px] inline-flex justify-start items-center gap-16">
                            <div className="hidden md:flex w-1/2 self-stretch relative"></div>
                            <div className="flex w-full md:w-1/2 bg-white flex justify-start items-start gap-4 md:gap-16 overflow-hidden">
                                <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-[48px]">01 </div>
                                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-[48px]">Immersion & Stratégie</div>
                                    <div className="self-stretch justify-start text-monochrome-500 text-base font-medium font-satoshi leading-snug">Tout commence ici. Cette phase d'exploration nous plonge au cœur de votre marque pour en comprendre l'essence, les enjeux et le contexte. À travers des workshops immersifs, nous échangeons avec vos équipes pour identifier vos objectifs, vos valeurs et les attentes de votre audience. Chaque détail compte : c'est en posant les bonnes questions que nous dessinons les contours de la suite.</div>
                                    <div className="self-stretch h-0 outline outline-[1px] outline-offset-[-0.75px] outline-monochrome-500 mt-4 mb-8"></div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent>
                    <div className="w-full max-w-[1680px] inline-flex justify-start items-center gap-16">
                        <div className="flex w-full md:w-1/2 bg-white flex justify-start items-start gap-4 md:gap-16 overflow-hidden">
                            <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-[48px]">02</div>
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-loose">Concept & Direction</div>
                                    <div className="self-stretch justify-start text-monochrome-500 text-base font-medium font-satoshi leading-snug">C'est ici que la vision prend forme. Sur la base de nos analyses et des insights collectés, nous définissons un concept de marque puissant et cohérent. Chaque choix, du design aux mots, est pensé pour allier esthétique et stratégie. L'identité visuelle et verbale s'affine, le digital prend sens, et une direction claire se dessine pour guider l'ensemble du projet.</div>
                                    <div className="self-stretch h-0 outline outline-[1px] outline-offset-[-0.75px] outline-monochrome-500 mt-4 mb-8"></div>
                            </div>
                        </div>
                        <div className="hidden md:flex w-1/2 self-stretch relative bg-white"></div>
                    </div>
                    </AnimatedContent>
                    <AnimatedContent>
                        <div className="w-full max-w-[1680px] inline-flex justify-start items-center gap-16">
                            <div className="hidden md:flex w-1/2 self-stretch relative bg-white"></div>
                            <div className="flex w-full md:w-1/2 bg-white flex justify-start items-start gap-4 md:gap-16 overflow-hidden">
                                <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-[48px]">03 </div>
                                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-loose">Production & Déploiement</div>
                                    <div className="self-stretch justify-start text-monochrome-500 text-base font-medium font-satoshi leading-snug">Place à la concrétisation. Nous passons du concept à la création en développant l'identité de marque, le design produit, le branding digital et les supports essentiels. À chaque étape, nous organisons des points d'échange pour ajuster et affiner. Grâce à un suivi rigoureux et une exécution soignée, nous veillons à ce que chaque élément prenne sa juste place dans l'écosystème de votre marque.</div>
                                    <div className="self-stretch h-0 outline outline-[1px] outline-offset-[-0.75px] outline-monochrome-500 mt-4 mb-8"></div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent>
                        <div className="w-full max-w-[1680px] inline-flex justify-start items-center gap-16">
                            <div className="flex w-full md:w-1/2 bg-white flex justify-start items-start gap-4 md:gap-16 overflow-hidden">
                                <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-[48px]">04 </div>
                                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch justify-start text-monochrome-800 text-title font-medium font-satoshi md:leading-loose">Livraison & Accompagnement</div>
                                    <div className="self-stretch justify-start text-monochrome-500 text-base font-medium font-satoshi leading-snug">Une fois le projet finalisé, nous vous transmettons l'ensemble des livrables et vous accompagnons dans leur prise en main. Mais notre mission ne s'arrête pas là : nous restons disponibles pour assurer la bonne transition et garantir que l'implémentation se déroule sans friction. Trois mois après la livraison, nous organisons un suivi pour analyser son impact.</div>
                                    <div className="self-stretch h-0 outline outline-[1px] outline-offset-[-0.75px] outline-monochrome-500 mt-4 mb-8"></div>
                                </div>
                            </div>
                            <div className="hidden md:flex w-1/2 self-stretch relative bg-white"></div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};