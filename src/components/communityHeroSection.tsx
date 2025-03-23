import React from 'react';
import AnimatedContent from '@/Animations/AnimatedContent';
import Image from 'next/image';
import ImageCarousel from '../Animations/ImageCarousel';

export default function CommunityHeroSection() {
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100 gap-8">
            <div className="self-stretch max-w-[1680px] flex flex-col md:flex-row justify-start items-start gap-4 md:mt-4 py-8 md:py-8">
                <div className="hidden md:block md:flex-1 h-[219px] p-2.5 bg-white"></div>
                <div className="w-full md:flex-1 flex flex-col justify-start items-start gap-4">
                    <AnimatedContent>
                        <div className="self-stretch relative justify-start text-monochrome-800 text-title md:text-Display font-medium font-satoshi md:leading-[65px]">Créez, échangez et élevez votre vision.</div>
                    </AnimatedContent>
                    <AnimatedContent>
                        <div className="w-full self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-relaxed">Découvrez et profitez d’espace où les idées circulent librement, où l’inspiration se partage et où les outils façonnent l’avenir. Rejoignez une communauté qui repense le design, explorez des ressources pensées pour aller plus loin et plongez dans un écosystème où chaque détail compte.</div>
                    </AnimatedContent>
                </div>
            </div>

            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col md:flex-row w-full gap-4">
                    <a href="/discord" className="w-full md:w-1/2 bg-monochrome-200 h-[500px] rounded-[5px] flex flex-col gap-4 px-8 pt-8 overflow-hidden group">
                        <div className="w-full justify-start text-monochrome-800 text-heading md:text-title font-medium font-satoshi md:leading-[48px]">Ne loupez plus aucune actualités.</div>
                        <div className="w-full justify-start text-monochrome-500 text-body font-medium font-satoshi">Restez informé des dernières actus tech sur plus de 11 thématiques. Chaque article est rédigé par la communauté et respecte des règles de rédactions factuelle et sourcés.</div>
                        <Image
                            src="/community/discord.webp"
                            alt="csh Discord"
                            width={912}
                            height={350}
                            className="h-full object-cover overflow-visible transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </a>
                    <a href="https://clementsainthilaire.notion.site/csh-toolbox" target="_blank" className="w-full md:w-1/2 bg-monochrome-200 h-[500px] rounded-[5px] flex flex-col gap-4 px-8 pt-8 overflow-hidden">
                        <div className="w-full justify-start text-monochrome-800 text-heading md:text-title font-medium font-satoshi md:leading-[48px]">Des outils pour toutes les occasions.</div>
                        <div className="w-full justify-start text-monochrome-500 text-body font-medium font-satoshi">Profitez d'une large collection d'outils gratuit / open sources, dédiés aux designers et développeurs, regroupant plus de 10 catégories pensées pour faciliter chaque étape de la création.</div>
                        <div className="relative flex-1 overflowvisible group">
                            <ImageCarousel/>
                        </div>
                    </a>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-4">
                    <a className="w-full md:w-1/2 bg-monochrome-200 h-[500px] rounded-[5px] flex flex-col gap-4 p-8 overflow-hidden">
                        <div className="w-full justify-start text-monochrome-800 text-heading md:text-title font-medium font-satoshi md:leading-[48px]">Create smarter not harder.</div>
                        <div className="w-full justify-start text-monochrome-500 text-body font-medium font-satoshi">cshStudio prévoit une large collection de templates open source sur Figma et Notion. Retrouvez les sur notre page Produits et sur Figma.</div>
                        <div className="relative flex-1 overflowvisible group">
                            <ImageCarousel/>
                        </div>
                    </a>
                    <a href="/newsletter" className="w-full md:w-1/2 bg-monochrome-200 h-[500px] rounded-[5px] flex flex-col gap-4 px-8 pt-8 overflow-hidden group">
                        <div className="w-full justify-start text-monochrome-800 text-heading md:text-title font-medium font-satoshi md:leading-[48px]">Gardez le fil, chaque semaines.</div>
                        <div className="w-full justify-start text-monochrome-500 text-body font-medium font-satoshi">Bienvenue dans Tech.Talk, votre rendez-vous hebdomadaire pour tout savoir sur l'actualité technologique.</div>
                        <Image
                            src="/community/newsletter.webp"
                            alt="csh Discord"
                            width={886.21}
                            height={500}
                            className="h-full object-cover overflow-visible transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </a>
                </div>
            </div>


        </section>
    )
}