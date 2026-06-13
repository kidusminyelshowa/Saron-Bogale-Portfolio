'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import projectsData from '@/data/projects_map.json';
import metadataOverrides from '@/data/metadata_overrides.json';
import ProjectOverlay from '@/components/ui/project-overlay';

type ProjectEntry =
  | string[]
  | { folder: string; images: string[] };

const CATEGORY_CONFIG = [
  {
    id: 'Cultural Institutions and Creative Hubs',
    label: 'Cultural & Hubs',
    color: '#0B3954',
    textColor: '#F4F7FA',
    titleColor: '#BFD7EA',
  },
  {
    id: 'Steet Art',
    label: 'Street Art',
    color: '#BFD7EA',
    textColor: '#06121C',
    titleColor: '#0B3954',
  },
  {
    id: 'Commissions',
    label: 'Commissions',
    color: '#087E8B',
    textColor: '#06121C',
    titleColor: '#F4F7FA',
  },
  {
    id: 'Exhibition & Workshops',
    label: 'Exhibitions & Workshops',
    color: '#FF5A5F',
    textColor: '#06121C',
    titleColor: '#F4F7FA',
  },
  {
    id: 'Digital Illustrations',
    label: 'Digital Illustrations',
    color: '#06121C',
    textColor: '#BFD7EA',
    titleColor: '#FF5A5F',
  },
  {
    id: 'Set Design',
    label: 'Set Design',
    color: '#C81D25',
    textColor: '#F4F7FA',
    titleColor: '#BFD7EA',
  },
] as const;

const FEATURED_IMAGE_MAP: Record<string, string> = {
  'Chewata Awaqi-Alliance Ethio-francaise Compound-2025-5x2m': 'IMG_2031.webp',
  'INSA-National ID-2025-320m2': 'IMG_7655.webp',
  'Italian Cultural Institute-2021-ASA-2.5x6m': 'IMG_8055.webp',
  'Lycee Guebre-Mariam school-2024-2x4m': 'IMG_8360.webp',
  'Timbuktoo Africa-UNDP-2025': 'IMG_2719.webp',
  'Bella skate part-Corridor Project-2026-190m2': 'IMG_7808.webp',
  'Ethiopian skatepark -Corridor Project-2025-430m2': 'IMG_6368.webp',
  'Setaweet-Around Estifanos-2021': 'IMG_7923.webp',
  'Eu delegation to Au -ASA-2021-Moh Awudu': 'IMG_2223.webp',
  'Dembel Area-2025-Munir de Vries': 'IMG_2506.webp',
  'Dante-Italian cultural institute-ASA-2021': 'IMG_2221.webp',
  'Sarbet Corridor Project-2025': 'IMG_7428.webp',
  'Layers of memory-2025-Ephrata Birhanu': 'IMG_2792.webp',
  'Sheraton-2026': 'IMG_1179.webp',
  'Savor-2024': 'IMG_1214.webp',
  '--': 'IMG_5608.webp',
  'Dembel-2025': 'photo_2026-06-12_11-48-16.webp',
  'Fabrica-2025': 'IMG_1472.webp',
  'Sosha-2025-2.2x3.5m': 'IMG_0988.webp',
  'Youthopians-2026': 'IMG_1005.webp',
  'Qine Films-2021': 'photo_2026-06-12_11-49-19.webp',
  'Signature Residence-2025': 'IMG_2336.webp',
  '-': 'IMG_9373.webp',
  'Nokia-2025': 'IMG_4243.webp',
  'Daye Bensa-Dukamo Coffee-2025-10x4.8': 'IMG_0023.webp',
  'Amharic Graffiti-Exhibition': 'IMG_0377.webp',
  'Layers of Memory-Exhibition': 'IMG_0788.webp'
};

function resolveProjectEntry(
  categoryId: string,
  name: string,
  entry: ProjectEntry,
): { folder: string; images: string[] } {
  const resolved = Array.isArray(entry)
    ? { folder: categoryId, images: [...entry] }
    : { folder: entry.folder, images: [...entry.images] };

  // Sort specified featured image to index 0 if it exists
  const featuredImg = FEATURED_IMAGE_MAP[name];
  if (featuredImg && resolved.images.includes(featuredImg)) {
    resolved.images = [
      featuredImg,
      ...resolved.images.filter((img) => img !== featuredImg)
    ];
  }
  
  return resolved;
}

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORY_CONFIG)[number]>(CATEGORY_CONFIG[0]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [commissionsSubFilter, setCommissionsSubFilter] = useState<'general' | 'restaurants'>('general');

  const categoryProjects =
    (projectsData as Record<string, Record<string, ProjectEntry>>)[activeTab.id] ??
    {};

  const activeProjects = Object.entries(categoryProjects)
    .map(([name, entry]) => {
      const { folder, images: imgs } = resolveProjectEntry(
        activeTab.id,
        name,
        entry,
      );
      const basePath = `/Projects/${folder}/${name}`;
      const override = (metadataOverrides as Record<
        string,
        { title: string; year: string; size: string; collab: string }
      >)[name];

      if (override) {
        return {
          title: override.title,
          year: override.year,
          size: override.size,
          collaborators: override.collab,
          img: `${basePath}/${imgs[0]}`,
          allImgs: imgs.map((i) => `${basePath}/${i}`),
          isRestaurant: folder.includes('Restaurants')
        };
      }

      // Metadata overrides for special folders "-" and "--"
      if (name === '-') {
        return {
          title: 'Commission',
          year: '2025',
          size: 'Mural',
          collaborators: '',
          img: `${basePath}/${imgs[0]}`,
          allImgs: imgs.map((i) => `${basePath}/${i}`),
          isRestaurant: false
        };
      }

      if (name === '--') {
        return {
          title: 'Restaurant Commission',
          year: '2025',
          size: 'Mural',
          collaborators: '',
          img: `${basePath}/${imgs[0]}`,
          allImgs: imgs.map((i) => `${basePath}/${i}`),
          isRestaurant: true
        };
      }

      const parts = name.split('-');
      return {
        title: parts[0],
        year: parts[1] || '2024',
        size: parts[2] || 'Mural',
        collaborators: parts[3] || '',
        img: `${basePath}/${imgs[0]}`,
        allImgs: imgs.map((i) => `${basePath}/${i}`),
        isRestaurant: folder.includes('Restaurants')
      };
    })
    .filter(project => {
      if (activeTab.id !== 'Commissions') return true;
      if (commissionsSubFilter === 'general') return !project.isRestaurant;
      if (commissionsSubFilter === 'restaurants') return project.isRestaurant;
      return true;
    });

  return (
    <section className="bg-brand-obsidian pt-24 pb-0 overflow-hidden">
      <div className="w-full">
        <div className="px-6 md:px-20 mb-12">
          <p className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
             THE <span className="emphasis font-normal text-brand-sand">Vault</span>
          </p>
        </div>

        <div className="flex overflow-x-auto no-scrollbar items-end relative z-10 px-6 md:px-10 -mb-[1px]">
          {CATEGORY_CONFIG.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat);
                setCommissionsSubFilter('general');
              }}
              className={`relative flex-shrink-0 px-6 py-2 md:px-12 md:py-4 transition-all duration-300 group cursor-pointer whitespace-nowrap ${
                activeTab.id === cat.id ? 'z-40' : 'text-white/40 hover:text-white z-0'
              }`}
            >
              <div 
                className="absolute inset-0 transition-all duration-500 origin-bottom rounded-t-2xl md:rounded-t-3xl"
                style={{
                  backgroundColor: cat.color,
                  transform: 'perspective(100px) rotateX(15deg)',
                  boxShadow: activeTab.id === cat.id ? '0 -5px 30px rgba(0,0,0,0.3)' : 'none',
                }}
              />
              <span 
                className="relative z-30 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] pointer-events-none"
                style={{ color: activeTab.id === cat.id ? cat.textColor : 'inherit' }}
              >
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        <div 
          className="relative w-full min-h-[90vh] transition-colors duration-700 border-t border-white/10"
          style={{ 
            backgroundColor: activeTab.color
          }}
        >
          {/* Sub-filtering buttons for Commissions tab */}
          {activeTab.id === 'Commissions' && (
            <div className="flex justify-center gap-4 pt-8 md:pt-12 px-6">
              {[
                { id: 'general', label: 'General' },
                { id: 'restaurants', label: 'Restaurants' },
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setCommissionsSubFilter(sub.id as any)}
                  className={`px-6 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                    commissionsSubFilter === sub.id
                      ? 'bg-brand-obsidian text-white shadow-lg scale-105'
                      : 'bg-white/10 text-brand-obsidian hover:bg-white/20'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          <div className="p-8 md:p-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab.id}-${commissionsSubFilter}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
              >
                {activeProjects.length === 0 && (
                  <p
                    className="col-span-full text-sm font-medium uppercase tracking-widest opacity-60 md:text-base"
                    style={{ color: activeTab.textColor }}
                  >
                    Projects coming soon
                  </p>
                )}
                {activeProjects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-[4/5] relative overflow-hidden shadow-2xl mb-4 border border-white/5 bg-brand-obsidian/10">
                       <Image 
                         src={project.img} 
                         alt={project.title}
                         fill
                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                         className="object-cover object-center"
                       />

                        {/* Thumbnail Grid - Appears inside viewport on hover */}
                        {project.allImgs.length > 1 && (
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                            {/* Extra count shown above the grid */}
                            {project.allImgs.length > 5 && (
                              <div className="absolute -top-10 right-0 bg-white/10 backdrop-blur-md px-3 py-1 text-white border border-white/20 shadow-xl">
                                <span className="text-[10px] font-black italic">+{project.allImgs.length - 5} MORE</span>
                              </div>
                            )}
                            
                            <div className="grid grid-cols-4 gap-2">
                              {project.allImgs.slice(1, 5).map((img: string, i: number) => (
                                <div key={i} className="aspect-square relative overflow-hidden border border-white/20 shadow-lg">
                                  <Image 
                                    src={img}
                                    alt={`${project.title} gallery ${i}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    </div>
                    
                    <div className="border-b border-white/10 pb-6">
                      <div className="flex justify-between items-center mb-6 gap-4">
                        <h3 
                          className="text-2xl font-black leading-tight tracking-tight uppercase"
                          style={{ color: activeTab.titleColor }}
                        >
                          {project.title}
                        </h3>
                        {project.collaborators && (
                          <p 
                            className="text-[10px] font-bold tracking-wider opacity-60 uppercase text-right leading-tight"
                            style={{ color: activeTab.textColor }}
                          >
                            w/ <br /> {project.collaborators}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <p 
                          className="text-sm font-medium leading-none" 
                          style={{ color: activeTab.textColor }}
                        >
                          {project.size || 'Mural project'}
                        </p>
                        <span 
                          className="emphasis text-2xl leading-none" 
                          style={{ color: activeTab.textColor }}
                        >
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            color={activeTab.color}
            textColor={activeTab.textColor}
            titleColor={activeTab.titleColor}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
