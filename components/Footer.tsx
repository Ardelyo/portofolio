import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="h-screen w-screen flex-shrink-0 bg-black text-white flex flex-col justify-center items-center snap-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 to-transparent pointer-events-none" />
      
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="font-serif text-[15vw] leading-none text-neutral-900 select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
      >
        ARDELYO
      </motion.h2>

      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl mb-12 italic text-center px-4 leading-tight max-w-4xl"
        >
          {t("Let's build something meaningless, meaningfully.", "Mari membangun sesuatu yang tak bermakna, dengan penuh makna.")}
        </motion.p>
        
        <div className="flex gap-12 font-mono text-sm uppercase tracking-widest mb-20">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors relative group cursor-pointer">
              Github
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors relative group cursor-pointer">
              Instagram
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors relative group cursor-pointer">
              TikTok
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-between px-8 font-mono text-[10px] text-neutral-600 uppercase">
        <span>© {new Date().getFullYear()} Ardellio Satria Anindito</span>
        <span>All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;