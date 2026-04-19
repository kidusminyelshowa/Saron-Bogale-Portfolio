'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProjectOverlayProps {
  project: {
    title: string;
    year: string;
    size?: string;
    allImgs: string[];
  };
  color: string;      // tab background color
  textColor: string;  // text color for that tab
  titleColor: string; // title accent color
  onClose: () => void;
}

export default function ProjectOverlay({
  project,
  color,
  textColor,
  titleColor,
  onClose,
}: ProjectOverlayProps) {
  // Lock body scroll + listen for ESC
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end">
      {/* Dark backdrop — click to dismiss */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — swoops up from bottom, 5vh gap at top */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="relative w-full h-[95vh] rounded-t-3xl overflow-hidden flex flex-col"
        style={{ backgroundColor: '#f3e8cc' }}
      >
        {/* ── Header bar ── */}
        <div
          className="flex justify-between items-center px-8 py-5 md:px-12 md:py-6 shrink-0 border-b"
          style={{ borderColor: 'rgba(13, 22, 23, 0.1)' }}
        >
          <div>
            <h2
              className="text-2xl md:text-5xl font-black uppercase leading-none tracking-tight"
              style={{ color: color }}
            >
              {project.title}
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="emphasis text-2xl" style={{ color: '#0d1617' }}>
                {project.year}
              </span>
              {project.size && (
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#0d1617', opacity: 0.6 }}
                >
                  {project.size}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 transition-colors duration-200 cursor-pointer"
            style={{
              border: '2px solid #0d1617',
              color: '#0d1617',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0d1617';
              e.currentTarget.style.color = '#f3e8cc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0d1617';
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Bento Grid Image Gallery ── */}
        <div className="flex-1 overflow-y-auto px-4 py-8 md:px-12 md:py-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]">
            {project.allImgs.map((src, i) => {
              // Bento Box cyclical layout logic
              let spanClasses = 'col-span-1 row-span-1';
              const pattern = i % 7;
              
              if (pattern === 0) spanClasses = 'sm:col-span-2 sm:row-span-2';
              else if (pattern === 1) spanClasses = 'sm:col-span-2 lg:col-span-2 row-span-1';
              else if (pattern === 2) spanClasses = 'col-span-1 sm:row-span-2';
              else if (pattern === 4) spanClasses = 'sm:col-span-2 lg:col-span-2 row-span-1';
              else if (pattern === 6) spanClasses = 'sm:col-span-3 lg:col-span-2 row-span-1';

              return (
                <div 
                  key={i} 
                  className={`relative overflow-hidden rounded-2xl ${spanClasses}`}
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
