"use client";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("For anyone");

  const content: { [key: string]: string } = {
    "For anyone" : 
      `<span>Hello there, I’m 
      <span style="color: #0a84ff;">Clément Saint-Hilaire</span> 
      a french 
      digital creator who cares about making beautiful
      things that help people.
      </span>`,
    designer:
      "I’m a systems thinker with a high bar for quality. From process to pixels, I’ll collaborate with you, learn from you, and help make something we’re proud of.",
    developer:
      `<span>I’m {highly_technical} and while (I’m ≠ engineer) I know my way /around & can speak “fluently” with you; I built (this.site) but feel free to visit my <a href="https://github.com/ClementSaint-Hilaire"><span style="color: #0a84ff;">[Github]</span></a>.</span>`,
    recruiters:
      `<span>I'm a french designer with 4 years of experience accross brand & products, at compagny large and small. You can download my resume  <a href="/home/resume_Clement_SAINT-HILAIRE.pdf"><span style="color: #0a84ff;">here</span></a>.</span>`,
    CM: 
      "I currently serve as the CM for both Wattiz and Skorpia.fr. While It's not my speciality, I know my way around and know the do & don't.",
    "mom & Dad": 
      "I do magic stuff on my computer to make the internet look better. <br/> <br/> And yes I ate my vegetables already...",
  };
  
  return (
    <div className="justify-center items-center gap-32 inline-flex w-full max-w-[1400px] mx-auto bg-monochrome-100">

      <div className="gap-8 flex-col justify-center items-start inline-flex justify-between w-full mx-auto md:flex-row">

        <div className="w-1/3 h-auto hidden md:flex">
        </div>

        <div className="grow shrink basis-0 flex-col justify-between w-full md:w-1/3 items-start gap-[16px] inline-flex">
          <div className="self-stretch w-full items-center inline-flex overflow-scroll scroll-smooth gap-[32px]">
            {Object.keys(content).map((key) => (
              <div
                key={key}
                onClick={() => setActiveSection(key)}
                className={`text-gris_2 text-Mh4 font-normal cursor-pointer flex flex-none ${
                  activeSection === key
                    ? "text-noir dark:text-blanc"
                    : "text-gris_2"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[32px]">

              <div className="self-stretch text-currentColor text-Mh1 md:text-Oh1 leading-[38px] md:leading-[58px] font-normal"
                  dangerouslySetInnerHTML={{ __html: content[activeSection] }}></div>
              <div className="self-stretch text-gris_2 text-Oh3 md:text-Mh3 leading-[34px] font-normal text-gris_2">
              Since 2021, I've been dedicated my time to learn how to trasform idears into real creations. You can find a selection of my work. Please enjoy !   
              </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;