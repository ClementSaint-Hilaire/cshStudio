import React, { useState } from 'react';

const LetterByLetterHoverEffect = ({ text = "Effet lettre par lettre" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Diviser le texte en lettres individuelles
  const letters = text.split('');
  
  return (
    <div 
      className="relative overflow-hidden cursor-pointer inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-8">
        {/* Premier ensemble de lettres (qui montent) */}
        <div className="flex">
          {letters.map((letter, index) => (
            <div 
              key={`up-${index}`} 
              className="relative overflow-hidden"
              style={{ width: letter === ' ' ? '0.25em' : 'auto' }}
            >
              <span 
                className="inline-block transition-transform duration-200 ease-in-out"
                style={{ 
                  transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
                  transitionDelay: `${index * 15}ms`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            </div>
          ))}
        </div>
        
        {/* Deuxième ensemble de lettres (qui montent de bas) */}
        <div className="flex absolute top-0 left-0">
          {letters.map((letter, index) => (
            <div 
              key={`down-${index}`} 
              className="relative overflow-hidden"
              style={{ width: letter === ' ' ? '0.25em' : 'auto' }}
            >
              <span 
                className="inline-block transition-transform duration-200 ease-in-out"
                style={{ 
                  transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                  transitionDelay: `${index * 15}ms`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetterByLetterHoverEffect;