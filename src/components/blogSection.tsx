"use client";
import AnimatedContent from "@/Animations/AnimatedContent";
import { useSpring, animated } from "@react-spring/web";
import { useState, useCallback, useRef, useEffect } from "react";

interface HoverImageLinkProps {
    href: string;
    title: string;
    description: string;
    imageUrl: string;
}

const SPRING_CONFIG = {
    mass: 1,
    tension: 1,
    friction: 1
};

const HoverImageLink: React.FC<HoverImageLinkProps> = ({ href, title, description, imageUrl }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    const [{ opacity, scale }, api] = useSpring(() => ({
        opacity: 0,
        scale: 0.95,
        config: SPRING_CONFIG
    }));

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setIsLoaded(true);
    }, [imageUrl]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!containerRef.current || !isHovered) return;

        // Keep preview within viewport bounds with padding
        const previewX = Math.min(Math.max(e.clientX + 20, 20), window.innerWidth - 260);
        const previewY = Math.min(Math.max(e.clientY - 100, 20), window.innerHeight - 200);

        setPosition({ x: previewX, y: previewY });
    }, [isHovered]);

    const handleMouseEnter = useCallback((e: React.MouseEvent) => {
        setIsHovered(true);
        handleMouseMove(e);
        api.start({
            opacity: 1,
            scale: 1.05
        });
    }, [api, handleMouseMove]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        api.start({
            opacity: 0,
            scale: 0.95
        });
    }, [api]);

    return (
        <div ref={containerRef} className="col-span-1 overflow-hidden">
            <a 
                href={href} 
                target="_blank"
                rel="noopener noreferrer" 
                className="block group"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <AnimatedContent>
                    <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-satoshi leading-relaxed mb-2 group-hover:text-blue-600 transition-colors duration-200">{title}</div>
                    <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f] group-hover:ring-blue-600 transition-colors duration-200"></div>
                    <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-satoshi leading-snug pt-2">{description}</div>
                </AnimatedContent>
            </a>
            {isHovered && isLoaded && (
                <animated.div
                    style={{
                        opacity,
                        scale,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                        pointerEvents: 'none',
                        zIndex: 50,
                        transformOrigin: 'center',
                        willChange: 'transform, opacity'
                    }}
                    className="w-[240px] h-[180px] rounded-lg overflow-hidden shadow-lg bg-white"
                >
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </animated.div>
            )}
        </div>
    );
};

export default function TestimonialsSection() {
    const blogPosts = [
        {
            href: "https://medium.com/@clement.sainthilaire.app",
            title: "Grilles vs Listes",
            description: "Lors de la réalisation d'un projet client, la question de l'affichage de leurs produit s'est posé quant au choix de la disposition en liste ou en grille. Si l'affichage en grille peut paraître évident et plus efficace au premier abord, ce dernier n'est clairement pas parfait et les listes sont en réalités privilégiés sous certaines conditions.",
            imageUrl: "/blog/listvsgrille.webp"
        },
        {
            href: "https://medium.com/@clement.sainthilaire.app/imessage-et-le-chiffrement-quantique-e9747c8d22ad",
            title: "iMessage et le chiffrement quantique",
            description: "Découvrez comment Apple à dors et déjà rendu sa messagerie propriétaire sécurisé contre les \"menaces\" les nouveaux types de cyberattaques que pourrait engendrer les ordinateurs quantiques.",
            imageUrl: "/blog/imessage.webp"
        },
        {
            href: "https://medium.com/@clement.sainthilaire.app/arc-browser-why-1fca52271578",
            title: "La hype de Arc",
            description: "La plupart des gens confondent souvent la simplicité et la facilité. Pour causes ils se ressemblent.",
            imageUrl: "/blog/arc.webp"
        },
        {
            href: "https://medium.com/@clement.sainthilaire.app/la-bento-trend-f3ae36719425",
            title: "Wtf is a bento in design ?",
            description: "Si vous suivez le monde de la tech, vous avez dû être témoin de l'émergence de cette nouvelle mode des bentos. Le bento est un concept simple : il s'agit ni plus ni moins que d'un mode d'organisation d'éléments dans un espace, une technique qui permet de compiler un grand nombre d'informations et de les organiser, sans pour autant se retrouver avec une page dont le \"trop\" dessert l'objectif dont il a l'origine.",
            imageUrl: "/blog/bento.webp"
        },
        {
            href: "https://medium.com/@clement.sainthilaire.app/apple-vision-pro-c1befc5629cb",
            title: "La vision du futur dans la techno du présent",
            description: "L'Apple Vision Pro à fait coulé de l'encre à tous les niveaux, de part ses prouesse technologiques, son prix, ses fonctionnalités, l'experiences qu'il procure et celles qu'il promet.",
            imageUrl: "/blog/vision.webp"
        },
        {
            href: "https://medium.com/@clement.sainthilaire.app/pourquoi-vous-navez-rien-compris-%C3%A0-chatgpt-d0a613568c88",
            title: "Pourquoi vous n'avez rien compris à ChatGPT",
            description: "Les couleurs jouent un rôle fondamental dans le design. Elles influencent les émotions et la perception des utilisateurs. Choisir la bonne palette de couleurs peut améliorer l'expérience utilisateur et renforcer l'identité de marque.",
            imageUrl: "/blog/chatgpt.webp"
        }
    ];

    return (
        <div className="w-full bg-monochrome-100">
            <div className="max-w-[1680px] gap-[64px] mx-auto flex flex-col px-4 md:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex justify-between">
                    <h1 className="text-title font-medium font-satoshi leading-[48px] text-monochrome-800">/Blog</h1>
                    <a href="https://medium.com/@clement.sainthilaire.app" target="_blank" className="flex items-center gap-2 group cursor-pointer">
                        <span className="text-subbody font-medium font-satoshi text-monochrome-800">explorer tous les articles</span>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            className="transform transition-transform group-hover:translate-x-1">
                            <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z" 
                            fill="#1D1D1F"/>
                        </svg>
                    </a> 
                </div>

                <div className="flex flex-col md:flex-row w-full gap-[32px]">
                    <div className="w-0 md:w-1/3 h-auto gap-[64px]" ></div>

                    <div className="w-full md:w-2/3 h-auto gap-[64px]">
                        <div className="flex flex-col md:grid grid-cols-2 gap-16">
                            {blogPosts.map((post, index) => (
                                <HoverImageLink
                                    key={index}
                                    href={post.href}
                                    title={post.title}
                                    description={post.description}
                                    imageUrl={post.imageUrl}
                                />
                            ))}
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}