import Image from 'next/image';
import React from 'react';
import AnimatedContent from "@/Animations/AnimatedContent";

export default function NewsletterSection() {
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100">
            <div className="max-w-[1680px] mx-auto mt-32 flex flex-col gap-6">
                <AnimatedContent delay={0.2}>
                    <div className="md:text-center justify-start text-monochrome-800 text-title md:text-display font-medium font-satoshi md:leading-[65px]">
                        Gardez le fil, chaque semaines.
                    </div>
                </AnimatedContent>
                
                <AnimatedContent delay={0.9}>
                    <div className="mx-auto w-full max-w-[800px] md:text-center justify-start text-monochrome-500 text-body md:text-heading font-medium font-satoshi leading-relaxed">
                        Tous les dimanches, profitez d'un résumé des dernières actualités technologiques de la semaine. Une sélection essentielle et sourcé pour rester informé sans perdre de temps.
                    </div>
                </AnimatedContent>

                <AnimatedContent delay={1.2}>
                    <div className="flex flex-row md:justify-center items-center gap-6 w-full mb-8">
                        <a href="https://csh.beehiiv.com/" target="_blank" className="w-48 rounded-[12px] flex flex-col justify-center items-center gap-2.5">
                            <div className="self-stretch h-14 px-5 py-3 bg-monochrome-200 rounded-[12px] flex justify-center items-center gap-2 cursor-pointer group">
                                <div className="flex flex-col justify-center items-start">
                                    <div className="justify-start text-monochrome-800 text-body font-medium font-satochi leading-normal">Découvrir</div>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    <path d="M8.33333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V11.6667M12.5 2.5H17.5M17.5 2.5V7.5M17.5 2.5L10 10" stroke="#1D1D1F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-[#1D1D1F]"/>
                                </svg>
                            </div>
                        </a>
                        <a href="https://csh.beehiiv.com/subscribe" target="_blank" className="w-48 h-14 px-4 py-2 bg-monochrome-800 hover:bg-monochrome-900 rounded-[12px] flex justify-center items-center gap-2 transition-all duration-300 cursor-pointer group">
                            <div className="justify-start text-monochrome-200 text-body font-medium font-satochi leading-normal">S'abonner</div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-100">
                                <g clipPath="url(#clip0_245_510)">
                                <path d="M9.13341 14.112L14.5127 10.3454M20.449 7.22369L12.7585 20.7319C12.3497 21.4499 11.2796 21.3271 11.044 20.5352L9.22256 14.4117C9.16469 14.2171 9.04528 14.0466 8.88225 13.9257L3.75095 10.1197C3.08737 9.62749 3.33802 8.57991 4.15251 8.44136L19.4764 5.83471C20.2568 5.70197 20.8406 6.5358 20.449 7.22369Z" stroke="#F5F5F7" strokeWidth="1.5" strokeLinecap="round" className="group-hover:fill-[#F5F5F7] transition-all duration-300"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_245_510">
                                <rect x="0.5" width="24" height="24" rx="4" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </AnimatedContent>
            </div>

            <AnimatedContent delay={1.9}>
                <div className="mx-auto">
                    <Image
                        src="/autre/newsletter.webp"
                        alt="Project thumbnail"
                        width={950}
                        height={535.99}
                        className="mx-auto object-cover w-[800px] md:w-full md:max-w-[950px]"
                    />
                </div>
            </AnimatedContent>
        </section>
    );
}