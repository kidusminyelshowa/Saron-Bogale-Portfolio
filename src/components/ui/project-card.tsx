import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  year: string;
  category: string;
  imageSrc: string;
  description: string;
}

export default function ProjectCard({ title, year, category, imageSrc, description }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">{category}</span>
            <h3 className="text-2xl font-bold mt-1 leading-tight">{title}</h3>
          </div>
          <span className="text-sm font-medium opacity-40">{year}</span>
        </div>
        <p className="text-sm opacity-60 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        
        <button className="text-sm font-bold border-b-2 border-brand-coral pb-1 transition-colors hover:text-brand-coral">
          Explore Project
        </button>
      </div>
    </motion.div>
  );
}
