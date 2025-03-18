import AnimatedContent from '@/Animations/AnimatedContent';
import { useRef } from 'react';

export default function ServiceSection() {
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
                <div className="self-stretch py-8 inline-flex flex-col justify-center items-start gap-2.5">
                    <div className="self-stretch h-0 relative ring-[1.50px] ring-monochrome-800"></div>            
                </div>
                <div className="self-stretch max-w-[1680px] py-2 inline-flex justify-end items-end gap-8">
                    <div className="relative justify-end text-monochrome-800 text-subtitle font-medium font-satoshi leading-normal">/Services</div>
                </div>
            </div> 



            <div className="w-full max-w-[1680px] inline-flex flex-col justify-center items-center gap-8">
    <div className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-start items-start gap-1">
            <div className="justify-start text-monochrome-800 text-caption font-medium font-satoshi leading-3">01</div>
            <div className="justify-start text-monochrome-800 text-title font-medium font-satoshi leading-[48px]">Branding</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-16">
            <div className="flex w-1/3 relative"></div>
            <div className="flex w-1/3 justify-start text-monochrome-500 text-2xl font-medium font-satoshi leading-loose">Élevez votre marque pour incarner votre vision, inspirer un sentiment d’appartenance et mener avec conviction dans un monde en évolution.</div>
            <div className="flex w-1/3 justify-start text-monochrome-800 text-base font-medium font-satoshi leading-snug">→ Identité visuelle<br/>→ Identité verbale<br/>→ Stratégie de marque<br/>→ Brand guidlines</div>
        </div>
    </div>
    <div className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-start items-start gap-1">
            <div className="justify-start text-monochrome-500 text-[9px] font-medium font-['Satoshi_Variable'] leading-3">02</div>
            <div className="justify-start text-monochrome-500 text-4xl font-medium font-['Satoshi_Variable'] leading-[48px]">Web design</div>
        </div>
        <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500"></div>
        <div className="self-stretch inline-flex justify-start items-start gap-16">
            <div className="flex-1 h-20 relative"></div>
            <div className="flex-1 justify-start text-zinc-500 text-2xl font-medium font-['Satoshi_Variable'] leading-loose">Créez une expérience digitale fluide et immersive où chaque détail renforce l’impact de votre marque.</div>
            <div className="flex-1 justify-start text-monochrome-500 text-base font-medium font-['Satoshi_Variable'] leading-snug">→ Design d’interfaces (UI)<br/>→ Expérience utilisateur (UX)<br/>→ Design system<br/>→ Iconographie</div>
        </div>
    </div>
    <div className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-start items-start gap-1">
            <div className="justify-start text-monochrome-500 text-[9px] font-medium font-['Satoshi_Variable'] leading-3">02</div>
            <div className="justify-start text-monochrome-500 text-4xl font-medium font-['Satoshi_Variable'] leading-[48px]">App design</div>
        </div>
        <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500"></div>
        <div className="self-stretch inline-flex justify-start items-start gap-16">
            <div className="flex-1 h-20 relative"></div>
            <div className="flex-1 justify-start text-zinc-500 text-2xl font-medium font-['Satoshi_Variable'] leading-loose">Concevez des applications intuitives et esthétiques qui allient performance et simplicité d’usage.</div>
            <div className="flex-1 justify-start text-monochrome-500 text-base font-medium font-['Satoshi_Variable'] leading-snug">→ UX/UI mobile & desktop<br/>→ Prototypage interactif<br/>→ Design system & composants<br/>→ Considérations pour iOS & Android</div>
        </div>
    </div>
    <div className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-start items-start gap-1">
            <div className="justify-start text-monochrome-500 text-[9px] font-medium font-['Satoshi_Variable'] leading-3">03</div>
            <div className="justify-start text-monochrome-500 text-4xl font-medium font-['Satoshi_Variable'] leading-[48px]">Graphic design</div>
        </div>
        <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500"></div>
        <div className="self-stretch inline-flex justify-start items-start gap-16">
            <div className="flex-1 h-20 relative"></div>
            <div className="flex-1 justify-start text-zinc-500 text-2xl font-medium font-['Satoshi_Variable'] leading-loose">Donnez vie à une identité visuelle forte et cohérente à travers des créations graphiques précises et impactantes.</div>
            <div className="flex-1 justify-start text-monochrome-500 text-base font-medium font-['Satoshi_Variable'] leading-snug">→ Direction artistique<br/>→ Conception de support digitaux<br/>→ Typographie & iconographie<br/>→ Logo</div>
        </div>
    </div>
    <div className="w-full max-w-[1680px] flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-start items-start gap-1">
            <div className="justify-start text-monochrome-500 text-[9px] font-medium font-['Satoshi_Variable'] leading-3">04</div>
            <div className="justify-start text-monochrome-500 text-4xl font-medium font-['Satoshi_Variable'] leading-[48px]">Code & no-code developpement</div>
        </div>
        <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-500"></div>
        <div className="self-stretch inline-flex justify-start items-start gap-16">
            <div className="flex-1 h-20 relative"></div>
            <div className="flex-1 justify-start text-zinc-500 text-2xl font-medium font-['Satoshi_Variable'] leading-loose">Développez des solutions performantes et sur-mesure, en combinant technologies modernes et flexibilité du no-code.</div>
            <div className="flex-1 justify-start text-monochrome-500 text-base font-medium font-['Satoshi_Variable'] leading-snug">→ Développement front-end <br/>→ Webflow & Framer.<br/>→ Intégration de design system<br/>→ Optimisation, performance & SEO</div>
        </div>
    </div>
</div>

           
        </div>
    </section>
    );
}