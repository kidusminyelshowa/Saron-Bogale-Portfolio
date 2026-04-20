'use client';

import { useState } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import Loader from '@/components/ui/loader';
import ProjectCard from '@/components/ui/project-card';
import ProjectGallery from '@/components/blocks/project-gallery';
import ScrollOpacityText from '@/components/ui/scroll-opacity-text';
import Contact from '@/components/blocks/contact';
import { motion } from 'framer-motion';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Loader onComplete={() => setLoadingComplete(true)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
          {/* Hero Section */}
          <ScrollExpandMedia
            mediaType="image"
            mediaSrc="/WOW09594.webp"
            bgImageSrc="/Projects/Cultural Institutions and Creative Hubs/Lycee Guebre-Mariam school-2024-2x4(2)/IMG_8360.webp"
            title="Saron Bogale"
            date="Muralist & Architect"
            scrollToExpand="Scroll to explore"
            textBlend
          >
            <div className="w-full bg-brand-sand">
              <ScrollOpacityText
                title="I am Saron Bogale"
                className="text-lg sm:text-2xl md:text-5xl lg:text-5xl font-normal leading-[1.1] tracking-normal"
                text="An architect, muralist and set designer based in Addis Ababa Ethiopia, with over seven years of experience in mural art. My work focuses on transforming spaces and engaging communities through public art, murals, and creative projects. I am also the founder of JONIYA Studio, where we teach art to kids and host art-related events. I often collaborate with cultural spaces and creative hubs; my practice involves developing concepts, working on-site, and engaging closely with teams and communities."
              />
            </div>
          </ScrollExpandMedia>

          {/* Project Vault (Tabs) */}
          <ProjectGallery />

          <section className="bg-brand-sand py-16 md:py-32 text-brand-obsidian">
            <div className="max-w-[1700px] mx-auto px-6 md:px-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div>
                  <p className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-16 leading-none tracking-tight">
                    Crafting <span className="emphasis font-normal">Experiences</span> through Art.
                  </p>

                  <div className="space-y-8">
                    <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-orange transition-colors group">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange">Mural Art</h3>
                      <p className="opacity-60 text-lg">Transforming spaces through large-scale public and private murals.</p>
                    </div>
                    <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-orange transition-colors group">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange">Mural Workshops</h3>
                      <p className="opacity-60 text-lg">Engaging communities and teams through the process of collaborative painting.</p>
                    </div>
                    <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-orange transition-colors group">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange">Commissions on Canvases</h3>
                      <p className="opacity-60 text-lg">Specialized custom paintings for indoor spaces.</p>
                    </div>
                    <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-orange transition-colors group">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange">Exhibitions</h3>
                      <p className="opacity-60 text-lg">Showcasing conceptual work in gallery and cultural settings.</p>
                    </div>
                    <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-orange transition-colors group">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange">Art Classes</h3>
                      <p className="opacity-60 text-lg">Educational programs held through Joniya Studio.</p>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/5] w-full max-w-2xl ml-auto">
                  <div className="absolute inset-0 bg-brand-orange -rotate-2 rounded-2xl opacity-10"></div>
                  <Image
                    src="/4E2A0093.webp"
                    alt="Saron Bogale at work"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectPosition: 'center center' }}
                    className="rounded-2xl shadow-2xl relative z-10 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Footer Section */}
          <Contact />
        </motion.div>
    </main>
  );
}

import Image from 'next/image';
