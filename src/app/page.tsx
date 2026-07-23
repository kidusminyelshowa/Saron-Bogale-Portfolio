'use client';

import { useState } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import Loader from '@/components/ui/loader';
import ProjectCard from '@/components/ui/project-card';
import ProjectGallery from '@/components/blocks/project-gallery';
import ScrollOpacityText from '@/components/ui/scroll-opacity-text';
import Contact from '@/components/blocks/contact';
import Collaborators from '@/components/blocks/collaborators';
import Featured from '@/components/blocks/featured';
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
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="/saron_header.webp"
          bgImageSrc="/4790d18e687b61cef98fc97a6ebedf00_032851.jpg"
          title="SARON BOGALE"
          date="Muralist & Architect"
          scrollToExpand="Scroll to explore"
          textBlend
        >
          <ScrollOpacityText
            title="This is Saron Bogale"
            className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-normal"
            text="She is an architect, muralist and set designer based in Addis Ababa, Ethiopia. With over seven years of experience in mural art Her work focuses on transforming spaces and engaging communities through public art, murals, and creative projects. She is also the founder of JONIYA Studio, where she teaches art to children and hosts art related events. She often collaborates with cultural spaces and creative hubs. Her practice involves developing concepts, working on site, and engaging closely with teams and communities."
          />
        </ScrollExpandMedia>

        {/* Mobile & Tablet Bio Section - shown below hero for screens under lg (1024px) */}
        <div className="block lg:hidden w-full bg-brand-sand">
          <ScrollOpacityText
            title="This is Saron Bogale"
            className="text-base font-normal leading-relaxed tracking-normal"
            text="She is an architect, muralist and set designer based in Addis Ababa, Ethiopia. With over seven years of experience in mural art Her work focuses on transforming spaces and engaging communities through public art, murals, and creative projects. She is also the founder of JONIYA Studio, where she teaches art to children and hosts art related events. She often collaborates with cultural spaces and creative hubs. Her practice involves developing concepts, working on site, and engaging closely with teams and communities."
          />
        </div>

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
                  <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-coral transition-colors group">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-coral">Mural Art</h3>
                    <p className="opacity-60 text-lg">Transforming spaces through large-scale public and private murals.</p>
                  </div>
                  <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-coral transition-colors group">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-coral">Mural Workshops</h3>
                    <p className="opacity-60 text-lg">Engaging communities and teams through the process of collaborative painting.</p>
                  </div>
                  <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-coral transition-colors group">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-coral">Commissions on Canvases</h3>
                    <p className="opacity-60 text-lg">Specialized custom paintings for indoor spaces.</p>
                  </div>
                  <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-coral transition-colors group">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-coral">Exhibitions</h3>
                    <p className="opacity-60 text-lg">Showcasing conceptual work in gallery and cultural settings.</p>
                  </div>
                  <div className="border-b border-brand-obsidian/10 pb-6 hover:border-brand-coral transition-colors group">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-coral">Art Classes</h3>
                    <p className="opacity-60 text-lg">Educational programs held through Joniya Studio.</p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/5] w-full max-w-2xl ml-auto">
                <div className="absolute inset-0 bg-brand-coral -rotate-2 opacity-10"></div>
                <Image
                  src="/saron_in_action.webp"
                  alt="Saron Bogale at work"
                  fill
                  sizes="(max-width: 1024px) 10vw, 50vw"
                  style={{ objectPosition: 'center center' }}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators Carousel */}
        <Collaborators />

        {/* Press & Media Features */}
        <Featured />

        {/* Contact & Footer Section */}
        <Contact />
      </motion.div>
    </main>
  );
}

import Image from 'next/image';
