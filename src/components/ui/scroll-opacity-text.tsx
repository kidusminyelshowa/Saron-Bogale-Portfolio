'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollOpacityTextProps {
  text: string;
  title?: string;
  className?: string;
}

export default function ScrollOpacityText({ text, title, className }: ScrollOpacityTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className="relative h-[120vh] md:h-[200vh] lg:h-[300vh] xl:h-[600vh] w-full">
      <div className="sticky top-0 min-h-[70vh] md:h-screen flex flex-col items-start md:items-center justify-center p-6 pt-[15vh] sm:p-12 md:p-24 overflow-hidden">
        <div className="max-w-[1800px] w-full">
          {title && (
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-16 tracking-tighter leading-none text-brand-obsidian">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word === 'Bogale' ? 'emphasis font-normal' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h2>
          )}

          <p className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.4em] font-normal text-brand-obsidian ${className}`}>
            {words.map((word, i) => {
              // Recalibrated to end the reveal as we reach the final sentence
              const start = (i / words.length) * 0.95;
              const end = ((i + 1) / words.length) * 0.95;

              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

function Word({ children, progress, range }: { children: ReactNode, progress: any, range: [number, number] }) {
  // We use useTransform with explicit clamping. 
  // If progress < range[0], value is 0.2
  // If progress > range[1], value is 1.0
  const opacity = useTransform(progress, range, [0.2, 1], { clamp: true });

  return (
    <motion.span
      style={{ opacity }}
      className="relative inline-block"
    >
      {children}
    </motion.span>
  );
}
