'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "Frequently ask question where you have the awser ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Frequently ask question where you have the awser ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Frequently ask question where you have the awser ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Frequently ask question where you have the awser ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            question: "Frequently ask question where you have the awser ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-monochrome-100">
            <div className="max-w-[1400px] mx-auto pt-16 pb-32">
                <div className="flex flex-col gap-8">
                    {faqItems.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div 
                                className="flex justify-between items-center cursor-pointer group"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="grow text-monochrome-800 text-2xl font-normal font-satoshi leading-[34px] pr-4">
                                    {item.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    <svg 
                                        width="50" 
                                        height="50" 
                                        viewBox="0 0 50 50" 
                                        fill="#1D1D1F" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    >
                                        <path 
                                            d="M37.5 18.7499L25 31.2501L12.5 18.7499" 
                                            stroke="currentColor" 
                                            strokeWidth="3.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === index ? 'max-h-[500px] mt-6' : 'max-h-0'
                                }`}
                            >
                                <p className="text-monochrome-800 text-lg font-normal font-satoshi leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                            
                            <div className="h-[1px] border-t border-[#75757a] mt-8"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
