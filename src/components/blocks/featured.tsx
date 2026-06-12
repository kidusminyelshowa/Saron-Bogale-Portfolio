'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FEATURES = [
  {
    publication: 'Addis Standard',
    headline: 'Art in Public Spaces: Transforming Addis Ababa’s Canvas',
    date: 'Oct 2024',
    category: 'Interview',
    image: '/4E2A0093.webp',
    link: '#'
  },
  {
    publication: 'LinkUp Addis',
    headline: 'Muralism and Architectonics: The Vision of Saron Bogale',
    date: 'Jul 2024',
    category: 'Feature',
    image: '/Projects/Cultural Institutions and Creative Hubs/Lycee Guebre-Mariam school-2024-2x4(2)/IMG_7830.webp',
    link: '#'
  },
  {
    publication: 'The Reporter',
    headline: 'Bridging Public Art and Built Environments in Ethiopia',
    date: 'Feb 2024',
    category: 'Newspaper',
    image: '/WOW09594.webp',
    link: '#'
  },
  {
    publication: 'Design Indaba',
    headline: 'A New Wave of Contemporary African Mural Art',
    date: 'Dec 2023',
    category: 'Review',
    image: '/Projects/Cultural Institutions and Creative Hubs/Lycee Guebre-Mariam school-2024-2x4(2)/IMG_8255.webp',
    link: '#'
  },
  {
    publication: 'Le Point',
    headline: 'La nouvelle garde artistique et architecturale d’Addis',
    date: 'Sep 2023',
    category: 'International Press',
    image: '/Projects/Cultural Institutions and Creative Hubs/Lycee Guebre-Mariam school-2024-2x4(2)/IMG_8297.webp',
    link: '#'
  }
];

export default function Featured() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      const scrollToValue = direction === 'left' 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({
        left: scrollToValue,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-brand-sand py-20 md:py-32 border-t border-brand-obsidian/5 text-brand-obsidian overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] opacity-40 mb-3">Press & Media</h2>
            <p className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              Featured <span className="emphasis font-normal text-brand-coral">In</span>
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-brand-obsidian/10 flex items-center justify-center hover:border-brand-coral hover:bg-brand-coral hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-brand-obsidian/10 flex items-center justify-center hover:border-brand-coral hover:bg-brand-coral hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Custom style helper for webkit scrollbars */}
          <style jsx global>{`
            .flex.overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {FEATURES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.610, 0.355, 1] }}
              className="w-full md:w-[calc((100%-48px)/3)] flex-shrink-0 snap-start group cursor-pointer"
            >
              <a href={item.link} className="block space-y-4">
                {/* Image Container with Hover Effects */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-obsidian/5 shadow-md">
                  <Image
                    src={item.image}
                    alt={`${item.publication} cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-obsidian/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Typography and Metadata */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-brand-teal">
                    <span>{item.publication}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-obsidian/20" />
                    <span className="opacity-60 text-brand-obsidian font-normal">{item.category}</span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug tracking-tight group-hover:text-brand-coral transition-colors duration-300 line-clamp-2">
                    {item.headline}
                  </h3>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm opacity-40 font-medium">{item.date}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-coral opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1">
                      Read Article
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
