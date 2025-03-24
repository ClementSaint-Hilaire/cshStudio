'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images?: string[];
}

export default function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || images.length === 0) return;

    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;

      // Get the width of a single set of images
      const singleSetWidth = scrollContainer.scrollWidth / 2;

      // If we've scrolled past the first set
      if (scrollPosition >= singleSetWidth) {
        // Reset to the start of the first set
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Only start scrolling when hovered
    if (isHovered) {
      animationRef.current = requestAnimationFrame(scroll);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isHovered, images.length]);

  if (images.length === 0) {
    return <div className="w-full h-full bg-monochrome-300"></div>;
  }

  return (
    <div 
      className="w-full h-full overflow-hidden" 
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inline-flex gap-4">
        {/* First set of images */}
        {images.map((src, index) => (
          <div key={index} className="flex-none">
            <div className="relative rounded-[5px]" style={{ width: '500px', height: '300px' }}>
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                fill
                className="object-fill rounded-[5px]"
              />
            </div>
          </div>
        ))}
        {/* Duplicate set for infinite scroll effect */}
        {images.map((src, index) => (
          <div key={`duplicate-${index}`} className="flex-none">
            <div className="relative rounded-[5px]" style={{ width: '500px', height: '300px' }}>
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                fill
                className="object-cover rounded-[5px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}