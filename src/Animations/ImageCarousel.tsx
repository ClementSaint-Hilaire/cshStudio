import React from 'react';
import Image from 'next/image';

interface CarouselImage {
    src: string;
    alt: string;
}

const carouselImages: CarouselImage[] = [
    { src: '/community/1.webp', alt: 'tool 1' },
    { src: '/community/2.webp', alt: 'tool 2' },
    { src: '/community/3.webp', alt: 'tool 3' },
    { src: '/community/4.webp', alt: 'tool 4' },
    { src: '/community/5.webp', alt: 'tool 5' },
];

export default function ImageCarousel() {
    return (
        <div className="relative flex flex-col w-full h-full overflow-visible gap-4">
            <div className="flex flex-col gap-8">
                <div className="flex gap-4 hover:animate-scroll">
                    {[...carouselImages, ...carouselImages, ...carouselImages].map((image, index) => (
                        <div key={`image-top-${index}`} className="w-[400px] h-[267px] flex-none relative rounded-[5px] overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={267}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-400px * ${carouselImages.length})); }
                }
                .hover\:animate-scroll:hover {
                    animation: scroll 25s linear infinite;
                }
            `}</style>
        </div>
    );
}