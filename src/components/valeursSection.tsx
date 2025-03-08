"use client";

import { useSpring, animated } from '@react-spring/web';
import ScrollReveal from '../Animations/ScrollReveal';
import { useRef } from 'react';

export default function ValeursSection() {
    return (
       <div className="w-full bg-monochrome-100">  
        <div className="max-w-[1680px] gap-[64px] mx-auto flex flex-col px-4 md:px-6 lg:px-8 py-8 md:py-12">

            <div className="flex flex-col w-full">
                <ScrollReveal containerClassName="text-title font-medium font-satoshi leading-[48px] text-monochrome-800">
                    Form that follow fonction
                </ScrollReveal>
                <ScrollReveal containerClassName="text-title font-medium font-satoshi leading-[48px] text-monochrome-800">
                    Flowless experiences
                </ScrollReveal>
                <ScrollReveal containerClassName="text-title font-medium font-satoshi leading-[48px] text-monochrome-800">
                    Attention to details
                </ScrollReveal>
                <ScrollReveal containerClassName="text-title font-medium font-satoshi leading-[48px] text-monochrome-800">
                    Visual efficency
                </ScrollReveal>
            </div>

            <div className="flex gap-[64px] w-full">
                <div className="w-1/3"></div>
                <div className="w-1/3"></div>
                <div className="w-1/3">
                    <ScrollReveal containerClassName="text-body font-medium font-satoshi text-monochrome-800">
                        Le design n'existe pas simplement pour être esthétique, il doit avant tout servir une fonction. Chaque choix visuel découle d'un besoin précis et d'une logique d'usage. Une interface, une identité visuelle ou un support graphique doivent être conçus pour maximiser leur efficacité tout en restant élégants et intuitifs. Cette approche garantit des créations qui ne sont jamais superficielles, mais toujours pertinentes et stratégiques. Il s'agit de mon premier pilier de raisonnement.
                    </ScrollReveal>
                </div>
            </div>

            <div className="flex gap-[64px] w-full">
                <div className="w-1/3"></div>
                <div className="w-1/3">
                    <ScrollReveal containerClassName="text-body font-medium font-satoshi text-monochrome-800">
                        Une bonne expérience utilisateur est invisible : elle se ressent sans jamais perturber. Tout doit être fluide, logique et agréable, sans friction. Du parcours utilisateur à l'ergonomie des interfaces, chaque détail est pensé pour que l'interaction soit naturelle et immersive. Un bon design ne se limite pas à l'esthétique, il accompagne et facilite l'expérience de l'utilisateur à chaque étape. Il s'agit de mon second pilier de raisonnement.
                    </ScrollReveal>
                </div>
                <div className="w-1/3"></div>
            </div>

            <div className="flex gap-[64px] w-full">
                <div className="w-1/3"></div>
                <div className="w-1/3"></div>
                <div className="w-1/3">
                    <ScrollReveal containerClassName="text-body font-medium font-satoshi text-monochrome-800">
                        Les détails font la différence. Une typographie ajustée au pixel près, un espacement équilibré, une micro-interaction subtile : ces éléments souvent imperceptibles pris individuellement créent ensemble une impression d'excellence consciente et subliminale. Prendre le temps d'affiner chaque composant, c'est garantir une expérience cohérente et aboutie. C'est dans cette rigueur que réside la signature d'un design de qualité. Il s'agit de mon troième pilier de raisonnement. 
                    </ScrollReveal>
                </div>
            </div>

            <div className="flex gap-[64px] w-full">
                <div className="w-1/3"></div>
                <div className="w-1/3">
                    <ScrollReveal containerClassName="text-body font-medium font-satoshi text-monochrome-800">
                        Un design doit transmettre son message avec clarté et impact. La simplicité est une force lorsqu'elle est maîtrisée. En éliminant le superflu et en privilégiant des compositions équilibrées, des contrastes efficaces et une hiérarchie visuelle limpide, chaque création devient un outil puissant de communication. L'objectif est d'allier minimalisme et expressivité pour captiver sans jamais surcharger. Il s'agit de mon quatrième pilier de raisonnement.
                    </ScrollReveal>
                </div>
                <div className="w-1/3"></div>
            </div>

        </div>
       </div>
    );
}