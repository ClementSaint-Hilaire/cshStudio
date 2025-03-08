"use client";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("For anyone");

  const content: { [key: string]: string } = {
    "For anyone" : 
      `<span>Hello there, I'm 
      <span style="color: #0a84ff;">Clément Saint-Hilaire</span> 
      a french 
      digital creator who cares about making beautiful
      things that help people.
      </span>`,
    designer:
      "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of.",
    developer:
      `<span>I'm {highly_technical} and while (I'm ≠ engineer) I know my way /around & can speak "fluently" with you; I built (this.site) but feel free to visit my <a href="https://github.com/ClementSaint-Hilaire"><span style="color: #0a84ff;">[Github]</span></a>.</span>`,
    recruiters:
      `<span>I'm a french designer with 4 years of experience accross brand & products, at compagny large and small. You can download my resume  <a href="/home/resume_Clement_SAINT-HILAIRE.pdf"><span style="color: #0a84ff;">here</span></a>.</span>`,
    CM: 
      "I currently serve as the CM for both Wattiz and Skorpia.fr. While It's not my speciality, I know my way around and know the do & don't.",
    "mom & Dad": 
      "I do magic stuff on my computer to make the internet look better. <br/> <br/> And yes I ate my vegetables already...",
  };
  
  return (
    <div className="justify-center flex flex-col w-full max-w-[1680px] h-[85vh] max-h-[1000px] mx-auto">
      
      <div className="flex flex-col justify-center items-center w-full mx-auto">

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
      </div>
    </div>
  );
};

export default HeroSection;