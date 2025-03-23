"use client";

import AnimatedContent from "@/Animations/AnimatedContent";
import MagnetLines from "./MagnetLine";
import { useSpring, animated } from "@react-spring/web";

export default function FooterSection() {
    const [rotateAnimation, api] = useSpring(() => ({
        from: { transform: 'rotate(0deg)' },
        config: { 
            tension: 200,
            friction: 20,
            duration: 200
        }
    }));

    return (
        <div className="w-full bg-monochrome-100">
            <div className="max-w-[1680px] gap-[64px] mx-auto flex flex-col px-4 md:px-6 lg:px-4 py-4 md:py-4">
                <div className="self-stretch bg-white inline-flex flex-col justify-start items-center gap-8">
                    <div className="self-stretch w-full py-16 inline-flex justify-start items-center">
                        <div className="flex-1 inline-flex flex-col justify-center items-start gap-8">
                            <AnimatedContent>
                                <div className="self-stretch relative justify-start text-monochrome-800 text-subtitle md:text-display font-medium font-satoshi md:leading-[65px]">Créons ensemble quelque chose de beau.</div>
                            </AnimatedContent>
                            <div className="flex mx-auto md:mx-0 md:inline-flex justify-center md:justify-start md:items-start gap-4">
                                <AnimatedContent>
                                
                                <div 
                                    className="relative group"
                                    onMouseEnter={() => api.start({ transform: 'rotate(90deg)' })}
                                    onMouseLeave={() => api.start({ transform: 'rotate(0deg)' })}
                                >
                                    <button 
                                        className="w-[200px] h-14 px-4 py-2 bg-monochrome-800 rounded-[9px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] border-[1.5px] border-white/80 backdrop-blur-[100px] flex justify-center items-center gap-2"
                                    >
                                        <div className="relative justify-start text-monochrome-200 text-base font-bold font-satoshi leading-snug">Me contacter</div>
                                        <animated.div style={rotateAnimation}>
                                            <div className="w-6 h-6 relative rounded overflow-hidden">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.99995 6L15.0001 12L8.99995 18" stroke="#F5F5F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>       
                                        </animated.div>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-[200px] bg-monochrome-800 rounded-[9px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                        <a href="mailto:clement.sainthilaire.pro@gmail.com" className="block px-4 py-3 text-monochrome-100 hover:bg-monochrome-600 rounded-t-[9px] font-satoshi flex items-center gap-2">
                                            <svg width="21" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 7.5L11.6056 12.0528C12.1686 12.3343 12.8314 12.3343 13.3944 12.0528L22.5 7.5C22.5 5.567 20.933 4 19 4H6C4.067 4 2.5 5.567 2.5 7.5Z" fill="#F5F5F7"/>
                                                <path d="M5.5 20H19.5C21.1569 20 22.5 18.6569 22.5 17V9.5L13.8416 13.8292C12.9971 14.2515 12.0029 14.2515 11.1584 13.8292L2.5 9.5V17C2.5 18.6569 3.84315 20 5.5 20Z" fill="#F5F5F7"/>
                                            </svg>
                                            Email
                                        </a>
                                        <a href="www.linkedin.com/in/clément-saint-hilaire-01412a282" target="_blank" className="block px-4 py-3 text-monochrome-100 hover:bg-monochrome-600 font-satoshi flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="#f5f5f7"/>
                                                <path d="M6 9H2V21H6V9Z" fill="#f5f5f7"/>
                                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="#f5f5f7"/>
                                            </svg>
                                            LinkedIn
                                        </a>
                                        <a href="https://www.threads.net/@clement.sainthilaire" target="_blank" className="block px-4 py-3 text-monochrome-100 hover:bg-monochrome-600 rounded-b-[9px] font-satoshi flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.2645 11.1966C17.1698 11.1512 17.0735 11.1074 16.976 11.0656C16.8062 7.93667 15.0965 6.14536 12.2257 6.12703C12.2127 6.12695 12.1998 6.12695 12.1868 6.12695C10.4697 6.12695 9.04158 6.85989 8.1626 8.19362L9.74145 9.27668C10.3981 8.28043 11.4286 8.06805 12.1875 8.06805C12.1963 8.06805 12.2051 8.06805 12.2138 8.06813C13.159 8.07416 13.8723 8.34899 14.3339 8.88494C14.6699 9.27513 14.8946 9.81432 15.0059 10.4948C14.1678 10.3524 13.2614 10.3086 12.2925 10.3641C9.56312 10.5213 7.80844 12.1132 7.92629 14.3251C7.98609 15.4471 8.54505 16.4124 9.50013 17.0429C10.3076 17.576 11.3477 17.8366 12.4286 17.7776C13.856 17.6994 14.9758 17.1548 15.7571 16.1589C16.3504 15.4027 16.7256 14.4226 16.8913 13.1878C17.5716 13.5983 18.0758 14.1386 18.3542 14.788C18.8277 15.8921 18.8553 17.7062 17.375 19.1853C16.078 20.481 14.519 21.0415 12.1629 21.0588C9.54931 21.0395 7.5727 20.2013 6.28757 18.5676C5.08415 17.0378 4.46221 14.8281 4.43901 12C4.46221 9.17183 5.08415 6.96218 6.28757 5.43239C7.5727 3.79869 9.54928 2.96052 12.1628 2.9411C14.7954 2.96067 16.8064 3.80287 18.1408 5.44446C18.795 6.24947 19.2883 7.26184 19.6135 8.44222L21.4637 7.94859C21.0695 6.49567 20.4493 5.24367 19.6052 4.20535C17.8946 2.10077 15.3928 1.02236 12.1693 1H12.1564C8.93943 1.02228 6.46564 2.10479 4.80374 4.21742C3.32488 6.0974 2.56204 8.71326 2.53641 11.9923L2.53633 12L2.53641 12.0077C2.56204 15.2867 3.32488 17.9026 4.80374 19.7826C6.46564 21.8952 8.93943 22.9778 12.1564 23H12.1693C15.0294 22.9802 17.0453 22.2314 18.7061 20.5721C20.8789 18.4013 20.8135 15.6803 20.0974 14.0099C19.5836 12.8121 18.604 11.8391 17.2645 11.1966ZM12.3264 15.8393C11.1301 15.9067 9.88736 15.3698 9.82608 14.2197C9.78066 13.367 10.4329 12.4155 12.3998 12.3021C12.6251 12.2891 12.8461 12.2828 13.0632 12.2828C13.7776 12.2828 14.446 12.3522 15.0536 12.485C14.827 15.3155 13.4976 15.7751 12.3264 15.8393Z" fill="#F5F5F7"/>
                                            </svg>
                                            Threads
                                        </a>
                                    </div>
                                </div>
                                </AnimatedContent>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 self-stretch flex justify-end items-center">
                                <MagnetLines/> 
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row self-stretch max-w-[1680px] pb-16 md:inline-flex justify-between items-start gap-[24px] md:gap-0">
                        <div className="inline-flex flex-col justify-start items-start gap-[16px]">
                            <AnimatedContent>
                            <div className="relative justify-start text-monochrome-800 text-subtitle font-medium font-satoshi leading-[30px] pb-8">Navigation</div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                <a href="/" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Index
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="/travaux" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Travaux
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="/services" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Services
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="/produits" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Produits
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="https://medium.com/@clement.sainthilaire.app" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Blog
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="/contact" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Contact
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            </div>
                            </AnimatedContent>
                        </div>
                        <div className="inline-flex flex-col justify-start items-start gap-[16px]">
                            <AnimatedContent>
                            <div className="relative justify-start text-monochrome-800 text-subtitle font-medium font-satoshi leading-[30px] pb-8">Ressources</div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                <a href="CV-clement-saint-hilaire.pdf" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Resume
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="/newsletter" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Newsletter
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="https://discord.gg/EPBXReEWak" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Serveur Discord
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="https://medium.com/@clement.sainthilaire.app" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Blog
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            </div>
                            </AnimatedContent>
                        </div>
                        <div className="inline-flex flex-col justify-start items-start gap-[16px]">
                            <AnimatedContent>
                            <div className="relative justify-start text-monochrome-800 text-subtitle font-medium font-satoshi leading-[30px] pb-8">Contact</div>
                            <div className="flex flex-col justify-start items-start gap-4">
                                <a href="mailto:clement.sainthilaire.pro@gmail.com" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Mail
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="www.linkedin.com/in/clément-saint-hilaire-01412a282" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        LinkedIn
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="https://www.instagram.com/cshstudio/" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Instagram
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                                <a href="https://www.threads.net/@clement.sainthilaire" target="_blank" className="self-stretch relative justify-start text-monochrome-500 text-body font-medium font-satoshi leading-snug group">
                                    <span className="relative">
                                        Threads
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-monochrome-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </a>
                            </div>
                            </AnimatedContent>
                        </div>
                        <AnimatedContent>
                        <a href="https://csh.beehiiv.com/" target="_blank" className="hidden md:flex w-[450px] inline-flex flex-col justify-center items-start gap-4">
                            <div className="relative justify-start text-monochrome-800 text-subtitle font-medium font-satoshi leading-[30px] pb-8">Newsletter</div>
                            <div className="self-stretch p-4 rounded-[999px] border border-monochrome-800 inline-flex justify-center items-center gap-2.5">
                                <div className="flex-1 relative justify-start text-monochrome-500 text-body font-normal font-satoshi leading-snug">email</div>
                                <div className="w-6 h-6 relative origin-top-left rounded items-center overflow-hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.53021 20.4697C8.8231 20.7626 8.8231 21.2374 8.53021 21.5303C8.23731 21.8232 7.76244 21.8232 7.46955 21.5303L3.46955 17.5303C3.17665 17.2374 3.17665 16.7626 3.46955 16.4697L7.46955 12.4697C7.76244 12.1768 8.23731 12.1768 8.53021 12.4697C8.8231 12.7626 8.8231 13.2374 8.53021 13.5303L5.81054 16.25H15C17.8995 16.25 20.25 13.8995 20.25 11C20.25 8.10051 17.8995 5.75 15 5.75H4.99988C4.58566 5.75 4.24988 5.41421 4.24988 5C4.24988 4.58579 4.58566 4.25 4.99988 4.25H15C18.7279 4.25 21.75 7.27208 21.75 11C21.75 14.7279 18.7279 17.75 15 17.75H5.81054L8.53021 20.4697Z" fill="#75757A"/>
                                    </svg>  
                                </div>
                            </div>
                        </a>
                        </AnimatedContent>
                        
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className="text-monochrome-500 text-subbody font-normal leading-tight"> {new Date().getFullYear()} Clément Saint-Hilaire. All Rights Reserved.</div>
                        <div className="px-5 py-2.5 bg-monochrome-300 rounded-[999px] justify-center items-center gap-2.5 hidden md:flex">
                            <div className="text-monochrome-800 text-subbody font-normal leading-tight">made by csh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}