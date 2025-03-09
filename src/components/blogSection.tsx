"use client";
import AnimatedContent from "@/Animations/AnimatedContent";

export default function TestimonialsSection() {
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
                            <div className="col-span-1">
                                <AnimatedContent>
                                    <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed mb-2">Grilles vs Listes</div>
                                    <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f]"></div>
                                    <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-['Satoshi_Variable'] leading-snug pt-2">Lors de la réalisation d’un projet client, la question de l’affichage de leurs produit s’est posé quant au choix de la disposition en liste ou en grille. Si l’affichage en grille peut paraître évident et plus efficace au premier abord, ce dernier n’est clairement pas parfait et les listes sont en réalités privilégiés sous certaines conditions.</div>
                                </AnimatedContent>
                            </div>
                            <div className="col-span-1">
                            <AnimatedContent>
                                <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed mb-2">iMessage et le chiffrement quantique</div>
                                <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f]"></div>
                                <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-['Satoshi_Variable'] leading-snug pt-2">Découvrez comment Apple à dors et déjà rendu sa messagerie propriétaire sécurisé contre les “menaces” les nouveaux types de cyberattaques que pourrait engendrer les ordinateurs quantiques.</div>
                            </AnimatedContent>
                            </div>
                            <div className="col-span-1">
                            <AnimatedContent>
                                <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed mb-2">L'importance des couleurs dans le design</div>
                                <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f]"></div>
                                <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-['Satoshi_Variable'] leading-snug pt-2">Les couleurs jouent un rôle fondamental dans le design. Elles influencent les émotions et la perception des utilisateurs. Choisir la bonne palette de couleurs peut améliorer l'expérience utilisateur et renforcer l'identité de marque.</div>
                            </AnimatedContent>
                            </div>
                            <div className="col-span-1">
                            <AnimatedContent>
                                <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed mb-2">Wtf is a bento in design ?</div>
                                <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f]"></div>
                                <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-['Satoshi_Variable'] leading-snug pt-2">Si vous suivez le monde de la tech, vous avez dû être témoin de l’émergence de cette nouvelle mode des bentos. Le bento est un concept simple : il s’agit ni plus ni moins que d'un mode d’organisation d’éléments dans un espace, une technique qui permet de compiler un grand nombre d’informations et de les organiser, sans pour autant se retrouver avec une page dont le “trop” dessert l’objectif dont il a l’origine.</div>
                            </AnimatedContent>
                            </div>
                            <div className="col-span-1">
                            <AnimatedContent>
                                <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed mb-2">La vision du futur dans la techno du présent</div>
                                <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f]"></div>
                                <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-['Satoshi_Variable'] leading-snug pt-2">L’Apple Vision Pro à fait coulé de l’encre à tous les niveaux, de part ses prouesse technologiques, son prix, ses fonctionnalités, l’experiences qu’il procure et celles qu’il promet. </div>
                            </AnimatedContent>
                            </div>
                            <div className="col-span-1">
                            <AnimatedContent>
                                <div className="self-stretch relative justify-start text-[#1d1d1f] text-xl font-medium font-['Satoshi_Variable'] leading-relaxed mb-2">L'importance des couleurs dans le design</div>
                                <div className="self-stretch h-0 relative ring-1 ring-[#1d1d1f]"></div>
                                <div className="self-stretch relative justify-start text-[#75757a] text-base font-medium font-['Satoshi_Variable'] leading-snug pt-2">Les couleurs jouent un rôle fondamental dans le design. Elles influencent les émotions et la perception des utilisateurs. Choisir la bonne palette de couleurs peut améliorer l'expérience utilisateur et renforcer l'identité de marque.</div>
                            </AnimatedContent>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}