"use client";

import FallingText from '@/Animations/FallingText';


export default function Home() {
  return (
    <section className="w-full min-h-screen bg-[#1D1D1F] flex items-center justify-center">
        <div className="relative w-full h-[100px] px-8">
          <FallingText
            text="React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow."
            highlightWords={["React", "Bits", "animated", "components"]}
            trigger="hover"
            backgroundColor="#1D1D1F"
            wireframes={false}
            gravity={0.2}
            fontSize="1.75rem"
            mouseConstraintStiffness={0.3}
          />
        </div>
    </section>
  );
} 