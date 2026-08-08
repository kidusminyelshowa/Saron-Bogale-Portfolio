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
    <div className="relative w-full py-6 md:py-12 bg-transparent">
      <div className="max-w-[1800px] mx-auto px-4 md:px-12 xl:px-20">
        <div className="max-w-3xl lg:max-w-4xl mx-auto lg:ml-auto text-center lg:text-left">
          {title && (
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-none text-brand-obsidian pointer-events-none">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word === 'Saron' ? 'emphasis font-normal' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h2>
          )}

          <div
            ref={containerRef}
            className="relative cursor-none sm:cursor-default text-center lg:text-left"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {/* Base Layer: 25% Opacity */}
            <p className={`opacity-45 select-none pointer-events-none text-brand-obsidian ${className}`}>
              {text}
            </p>

            {/* Spotlight Layer: 100% Opacity, Masked */}
            <p
              className={`absolute inset-0 select-none pointer-events-none transition-opacity duration-300 text-brand-obsidian ${className}`}
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
    </div>
  );
}
