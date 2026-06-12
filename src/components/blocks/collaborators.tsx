'use client';

import { motion } from 'framer-motion';

const COLLABORATORS = [
  {
    name: 'Joniya Studio',
    logo: (
      <svg className="w-auto h-8 md:h-10 text-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5H30V35H10V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 5V35" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="20" r="8" fill="currentColor" className="text-brand-coral/40" />
        <text x="45" y="26" fontFamily="var(--font-brand)" fontSize="18" fontWeight="bold" fill="currentColor" letterSpacing="0.1em">JONIYA</text>
      </svg>
    )
  },
  {
    name: 'Alliance Française',
    logo: (
      <svg className="w-auto h-8 md:h-10 text-current" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 30L25 6L38 30" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M18 20H32" stroke="currentColor" strokeWidth="2"/>
        <circle cx="25" cy="18" r="4" fill="currentColor" className="text-brand-red/60" />
        <text x="50" y="25" fontFamily="var(--font-brand)" fontSize="15" fontWeight="black" fill="currentColor" letterSpacing="0.05em">af</text>
        <text x="72" y="25" fontFamily="var(--font-brand)" fontSize="12" fontWeight="normal" fill="currentColor" letterSpacing="0.05em">AllianceFrançaise</text>
      </svg>
    )
  },
  {
    name: 'Goethe-Institut',
    logo: (
      <svg className="w-auto h-8 md:h-10 text-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="3"/>
        <path d="M20 6C27.732 6 34 12.268 34 20C34 27.732 27.732 34 20 34" stroke="currentColor" strokeWidth="3"/>
        <text x="45" y="25" fontFamily="var(--font-brand)" fontSize="16" fontWeight="bold" fill="currentColor" letterSpacing="0.08em">GOETHE</text>
      </svg>
    )
  },
  {
    name: 'Zoma Museum',
    logo: (
      <svg className="w-auto h-8 md:h-10 text-current" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20C8 10 15 8 20 8C25 8 32 10 32 20C32 30 25 32 20 32C15 32 8 30 8 20Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 25C15 15 25 15 28 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <text x="45" y="25" fontFamily="var(--font-brand)" fontSize="16" fontWeight="black" fill="currentColor" letterSpacing="0.15em">ZOMA</text>
      </svg>
    )
  },
  {
    name: 'Italian Cultural Institute',
    logo: (
      <svg className="w-auto h-8 md:h-10 text-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 14H26M14 20H26M14 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <text x="42" y="22" fontFamily="var(--font-brand)" fontSize="14" fontWeight="bold" fill="currentColor">ISTITUTO</text>
        <text x="42" y="32" fontFamily="var(--font-brand)" fontSize="9" fontWeight="normal" fill="currentColor" letterSpacing="0.05em">italiano di CULTURA</text>
      </svg>
    )
  },
  {
    name: 'Kuriftu Resort',
    logo: (
      <svg className="w-auto h-8 md:h-10 text-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28C15 22 25 22 30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 23C14 17 26 17 32 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18C16 14 24 14 28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <text x="45" y="25" fontFamily="var(--font-brand)" fontSize="16" fontWeight="light" fill="currentColor" letterSpacing="0.2em">KURIFTU</text>
      </svg>
    )
  }
];

// Duplicate the array to ensure seamless infinite looping
const MARQUEE_ITEMS = [...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS];

export default function Collaborators() {
  return (
    <section className="bg-brand-sand py-16 md:py-24 border-t border-brand-obsidian/5 overflow-hidden text-brand-obsidian">
      <div className="max-w-[1700px] mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-1">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] opacity-40 mb-3">Partnerships</h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Collaborated <br className="hidden lg:block"/>
              with <span className="emphasis font-normal text-brand-coral">Creative Hubs</span>
            </p>
          </div>

          {/* Right Column: Carousel Animation */}
          <div className="lg:col-span-2 relative w-full overflow-hidden py-4">
            {/* Left and Right Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-sand to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-sand to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
              <motion.div
                className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
                animate={{
                  x: [0, -1000] // Roughly scroll by half the width of the duplicated content
                }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                }}
                whileHover={{
                  animationPlayState: 'paused'
                }}
                style={{
                  display: 'flex',
                  whiteSpace: 'nowrap'
                }}
              >
                {MARQUEE_ITEMS.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex-shrink-0 text-brand-obsidian/45 hover:text-brand-obsidian transition-colors duration-300 transform hover:scale-105"
                  >
                    {item.logo}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
