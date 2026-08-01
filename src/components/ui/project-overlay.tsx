'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectOverlayProps {
  project: {
    title: string;
    year: string;
    collaborators?: string;
    location?: string;
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll + ESC key + redirect vertical wheel → horizontal scroll
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    // Redirect vertical scroll to horizontal inside the gallery
    const container = scrollContainerRef.current;
    const onWheel = (e: WheelEvent) => {
      if (!container) return;
      // Prevent any vertical scrolling on the page
      e.preventDefault();
      // Apply both deltaX and deltaY as horizontal scroll
      container.scrollLeft += e.deltaY + e.deltaX;
    };

    if (container) {
      container.addEventListener('wheel', onWheel, { passive: false });
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      if (container) {
        container.removeEventListener('wheel', onWheel);
      }
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

      {/* Panel — swoops up from bottom */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="relative w-full h-[95vh] overflow-hidden flex flex-col"
        style={{ backgroundColor: '#F4F7FA' }}
      >
        {/* ── Header bar ── */}
        <div
          className="flex justify-between items-center px-8 py-5 md:px-12 md:py-6 shrink-0 border-b"
          style={{ borderColor: 'rgba(6, 18, 28, 0.1)' }}
        >
          <div>
            <h2
              className="text-2xl md:text-5xl font-black uppercase leading-none tracking-tight"
              style={{ color: color }}
            >
              {project.title}
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="emphasis text-2xl" style={{ color: '#06121C' }}>
                {project.year}
              </span>
              {(project.collaborators || project.location) && (
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#06121C', opacity: 0.6 }}
                >
                  {project.collaborators && project.collaborators.trim()
                    ? `w/ ${project.collaborators}`
                    : project.location && project.location.trim()
                    ? `@ ${project.location}`
                    : ''}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 transition-colors duration-200 cursor-pointer"
            style={{
              border: '2px solid #06121C',
              color: '#06121C',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#06121C';
              e.currentTarget.style.color = '#F4F7FA';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#06121C';
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Horizontal Filmstrip Gallery ── */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar"
        >
          <div className="flex items-center gap-4 md:gap-6 h-full px-8 md:px-12 py-8">
            {project.allImgs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} — ${i + 1}`}
                className="h-full w-auto max-h-full object-contain flex-shrink-0"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                draggable={false}
              />
            ))}
            {/* Spacer at the end for visual breathing room */}
            <div className="w-8 md:w-12 flex-shrink-0" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
