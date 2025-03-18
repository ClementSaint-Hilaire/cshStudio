"use client";
import { useState } from "react";
import AnimatedContent from "@/Animations/AnimatedContent";

const BLUR_FADE_DELAY = 0.04;

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("For anyone");

  const content: { [key: string]: string } = {
    "For anyone" : 
      `<span>Bien le bonjour, je suis 
      <span style="color: #0a84ff;">Clément Saint-Hilaire</span> 
      un créateur digital français soucieux de concevoir de belles choses qui aident les gens. </br> <span style="color: #ffffff;">.</span> 
      </span>`,
    designer:
      "Je suis un penseur systémique avec des exigences élevées en matière de qualité. Du processus aux pixels, je collaborerai avec vous, j’apprendrai de vous et je contribuerai à créer quelque chose dont nous serons fiers.",
    developer:
      `<span>Formé au développement, je suis {highly_technical}. Sans être ingénieur, je maîtrise le vocabulaire technique et peux échanger /aisément avec vous; J'ai codé (this.site), mais consultez librement mon <a href="https://github.com/ClementSaint-Hilaire"><span style="color: #0a84ff;">[Github]</span></a>.</span>`,
    recruiters:
      `<span>Je suis un designer français avec 4 ans d'expérience en branding, en UI/UX et en design graphique aussi bien en startup qu'en grande entreprise. Vous pouvez télécharger mon CV <a href="CV-clement-saint-hilaire.pdf"><span style="color: #0a84ff;">ici</span></a>.</span>`,
    CM: 
      'Je suis actuellement CM pour <a href="https://www.instagram.com/wattiz_/" target="_blank"><span style="color: #0a84ff;">Wattiz</span></a> et <a href="https://www.instagram.com/skorpia_fr/" target="_blank"><span style="color: #0a84ff;">Skorpia.fr</span></a>. Ce n’est pas ma spécialité, mais je sais m’y retrouver et connais les bonnes pratiques. </br> <span style="color: #ffffff;">.</span>',
    "mom & Dad": 
      'Je fais de la magie sur mon ordinateur pour rendre Internet plus beau. </br>Et oui, j’ai déjà mangé mes légumes… </br> <span style="color: #ffffff;">.</span>',
  };
  
  return (
    <section className="justify-center flex flex-col w-full max-w-[1680px] h-[85vh] max-h-[1000px] mx-auto">      
      <div className="flex flex-col justify-center md:items-center w-full mx-auto px-[16px]">
        <AnimatedContent>

        <div className="w-full max-w-[600px] flex flex-col items-start gap-[16px] inline-flex">
          <div className="w-full items-center inline-flex overflow-scroll scroll-smooth gap-[32px]">
            {Object.keys(content).map((key) => (
              <div
                key={key}
                onClick={() => setActiveSection(key)}
                className={`font-satoshi text-subbody cursor-pointer flex flex-none transition-colors ${
                  activeSection === key
                    ? "text-monochrome-800 "
                    : "text-monochrome-500 hover:text-monochrome-600"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ))}
          </div>
          
            <div 
              className="font-satoshi text-body text-monochrome-800 font-medium leading-[22px]"
              dangerouslySetInnerHTML={{ __html: content[activeSection] }}
            />
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
};

export default HeroSection;