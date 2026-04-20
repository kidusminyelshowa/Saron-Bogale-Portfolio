'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const neutralSand = '#f3e8cc';

  return (
    <footer className="bg-brand-obsidian py-16 md:py-32 px-6 md:px-20 border-t border-white/5" style={{ color: neutralSand }}>
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <p className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 md:mb-12">
              Let&apos;s <span className="emphasis font-normal text-brand-yellow">Collaborate</span>
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:bogalesaron@gmail.com" 
                className="text-lg sm:text-2xl md:text-4xl font-medium border-b-2 border-brand-yellow pb-2 hover:text-brand-yellow transition-colors duration-300 block w-fit break-all sm:break-normal"
              >
                bogalesaron@gmail.com
              </a>
              <a 
                href="tel:+251931313204" 
                className="text-base sm:text-xl md:text-2xl font-medium opacity-80 hover:text-brand-yellow transition-colors duration-300 block w-fit"
              >
                +251 931 313 204
              </a>
            </div>
          </div>
          
          <div className="flex flex-col lg:items-end gap-8">
            <div className="flex gap-12 text-sm font-black uppercase tracking-widest">
              <a href="https://www.instagram.com/saron__bogale/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/saron-bogale-9422b0200/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">LinkedIn</a>
            </div>
            
            <div className="text-left lg:text-right">
              <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-2">Location</p>
              <p className="emphasis text-2xl" style={{ color: neutralSand }}>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 opacity-30 text-[10px] uppercase tracking-[0.3em] font-black">
          <p>© 2024 Saron Bogale. All rights reserved.</p>
          <p>Architect & Muralist</p>
        </div>
      </div>
    </footer>
  );
}
