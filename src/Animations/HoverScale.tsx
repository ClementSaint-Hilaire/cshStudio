"use client";
import { useSpring, animated, easings } from "@react-spring/web";
import { ReactNode } from "react";

interface HoverScaleProps {
    children: ReactNode;
    isHovered: boolean;
    scale?: number;
    duration?: number;
}

export default function HoverScale({ 
    children, 
    isHovered, 
    scale = 1.05, 
    duration = 200 
}: HoverScaleProps) {
    const springProps = useSpring({
        scale: isHovered ? scale : 1,
        config: { duration, easing: easings.easeInOutQuad }
    });

    return (
        <animated.div style={springProps}>
            {children}
        </animated.div>
    );
}
