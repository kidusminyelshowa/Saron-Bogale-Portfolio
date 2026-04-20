'use client';

import { useRef, useState } from 'react';

interface ScrollOpacityTextProps {
  text: string;
  title?: string;
  className?: string;
}

export default function ScrollOpacityText({ text, title, className }: ScrollOpacityTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = (e as React.MouseEvent).clientX - rect.left;
      y = (e as React.MouseEvent).clientY - rect.top;
    }

    setMousePos({ x, y });
  };

  return (
    <div className="relative w-full py-24 bg-brand-sand overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-24">
        {title && (
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-16 tracking-tighter leading-none text-brand-obsidian pointer-events-none">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word === 'Bogale' ? 'emphasis font-normal' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
        )}

        <div 
          ref={containerRef}
          className="relative cursor-none sm:cursor-default"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Base Layer: 20% Opacity */}
          <p className={`font-normal text-brand-obsidian opacity-20 select-none pointer-events-none ${className}`}>
            {text}
          </p>

          {/* Spotlight Layer: 100% Opacity, Masked */}
          <p 
            className={`absolute inset-0 font-normal text-brand-obsidian select-none pointer-events-none transition-opacity duration-300 ${className}`}
            style={{
              opacity: isHovered ? 1 : 0,
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
