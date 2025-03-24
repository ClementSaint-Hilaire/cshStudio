"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { useSpring, animated, config } from "@react-spring/web";

interface ImageTrailProps {
  children: ReactNode;
  numImages?: number;
  delayFactor?: number;
  mouseTrailDistance?: number;
}

const ImageTrail: React.FC<ImageTrailProps> = ({
  children,
  numImages = 5,
  delayFactor = 0.1,
  mouseTrailDistance = 10,
}) => {
  const [trails, setTrails] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Initialize trail positions
    const initialTrails = Array(numImages)
      .fill(0)
      .map(() => ({ x: 0, y: 0 }));
    setTrails(initialTrails);
  }, [numImages]);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Update trail positions with delay
      setTrails((prevTrails) => {
        const newTrails = [...prevTrails];
        newTrails.unshift({ x: mouseX, y: mouseY });
        newTrails.pop();
        return newTrails;
      });

      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const element = containerRef.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
      
      {trails.map((trail, index) => {
        const springProps = useSpring({
          to: { 
            transform: `translate(${trail.x}px, ${trail.y}px)`,
            opacity: isActive ? 0.8 - index * (0.8 / numImages) : 0 
          },
          config: { ...config.gentle, duration: 200 + index * delayFactor * 100 },
        });

        return (
          <animated.div
            key={index}
            style={{
              ...springProps,
              position: "absolute",
              top: -mouseTrailDistance * (index + 1),
              left: -mouseTrailDistance * (index + 1),
              pointerEvents: "none",
            }}
            className="pointer-events-none"
          >
            {children}
          </animated.div>
        );
      })}
    </div>
  );
};

export default ImageTrail;
