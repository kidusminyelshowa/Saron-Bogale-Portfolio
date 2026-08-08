'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PARTNER_LOGOS = [
  { name: 'Partner 1', src: '/Partners/photo_2026-07-23_17-01-19.png' },
  { name: 'Partner 2', src: '/Partners/photo_2026-07-23_17-02-03.png' },
  { name: 'Partner 3', src: '/Partners/photo_2026-07-23_17-02-09.png' },
  { name: 'Partner 4', src: '/Partners/photo_2026-07-23_17-02-15.png' },
  { name: 'Partner 5', src: '/Partners/photo_2026-07-23_17-02-20.png' },
  { name: 'Partner 6', src: '/Partners/photo_2026-07-23_17-02-25.png' },
  { name: 'Partner 7', src: '/Partners/photo_2026-07-23_17-02-30.png' },
  { name: 'Partner 8', src: '/Partners/photo_2026-07-23_17-02-34.png' },
  { name: 'Partner 9', src: '/Partners/photo_2026-07-23_17-02-39.png' },
  { name: 'Partner 10', src: '/Partners/photo_2026-07-23_17-02-43.png' },
  { name: 'Partner 11', src: '/Partners/photo_2026-07-23_17-02-49.png' },
  { name: 'Partner 12', src: '/Partners/photo_2026-07-23_17-02-54.png' },
  { name: 'Partner 13', src: '/Partners/photo_2026-07-23_17-02-58.png' },
];

export default function Collaborators() {
  return (
    <section className="bg-brand-sand py-16 md:py-24 border-t border-brand-obsidian/5 overflow-hidden text-brand-obsidian">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

          {/* Left Column: Title */}
          <div className="lg:col-span-1">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Collaborated <span className="emphasis font-normal text-brand-coral">with</span>
            </p>
          </div>

          {/* Right Column: Carousel Animation */}
          <div className="lg:col-span-2 relative w-full overflow-hidden py-4">
            {/* Left and Right Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-sand to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-sand to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
              {/* First loop container */}
              <motion.div
                className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
                animate={{
                  x: ["0%", "-100%"]
                }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
                style={{
                  display: 'flex',
                  whiteSpace: 'nowrap'
                }}
              >
                {PARTNER_LOGOS.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex-shrink-0 transition-colors duration-300 transform hover:scale-105"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={160}
                      height={48}
                      className="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Second loop container (identical duplicate for seamless transition) */}
              <motion.div
                className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
                animate={{
                  x: ["0%", "-100%"]
                }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
                style={{
                  display: 'flex',
                  whiteSpace: 'nowrap'
                }}
              >
                {PARTNER_LOGOS.map((item, index) => (
                  <div
                    key={`${item.name}-${index}-dup`}
                    className="flex-shrink-0 transition-colors duration-300 transform hover:scale-105"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={160}
                      height={48}
                      className="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
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

