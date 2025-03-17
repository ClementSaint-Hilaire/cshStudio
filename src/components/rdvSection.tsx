"use client";

import React from "react";
import Script from "next/script";

// Add Calendly interface to Window object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function RdvSection() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/clement-sainthilaire-app/30min?hide_gdpr_banner=1&text_color=757575&primary_color=1d1d1f'
      });
    }
  };

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet" 
      />
      <button 
        onClick={openCalendly}
        className="cursor-pointer text-monochrome-200 text-body font-medium font-satoshi leading-relaxed bg-monochrome-800 py-2 px-4 rounded-[9px] transition-all duration-500 ease-in-outs hover:bg-monochrome-600"
      >
        Prendre rendez-vous
      </button>
    </>
  );
}