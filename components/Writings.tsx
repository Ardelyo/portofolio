import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Quote } from 'lucide-react';
import { WRITINGS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Writing } from '../types';

interface WritingsProps {
  onSelect: (writing: Writing) => void;
}

const Writings: React.FC<WritingsProps> = ({ onSelect }) => {
  const { language, t } = useLanguage();

  return (
    <section className="h-full w-auto flex flex-shrink-0 bg-[#e6e6e6] text-neutral-900 snap-start relative">
      
      {/* Editorial Title Panel - Full screen on mobile logic removed, stays as panel */}
      <div className="w-[85vw] md:w-[35vw] h-full flex flex-col justify-between p-8 md:p-16 border-r border-neutral-300 bg-[#f0f0eb] relative overflow-hidden z-10 flex-shrink-0">
        {/* Animated noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply"></div>
        
        <div className="relative z-10 mt-10 md:mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-5xl md:text-8xl leading-[0.9] mb-4 text-neutral-800"
          >
            {t("The", "Arsip")} <br /> {t("Archives", "Tulisan")}
          </motion.div>
          <div className="w-20 h-1 bg-neutral-900 mt-8" />
        </div>
        
        <div className="relative z-10">
          <BookOpen className="mb-6 text-neutral-800" strokeWidth={1} size={32} />
          <p className="font-mono text-xs md:text-sm text-neutral-600 max-w-[250px] leading-relaxed uppercase tracking-wide">
            {t(
              "A collection of thoughts, stories, and reflections on life, technology, and faith.",
              "Koleksi pemikiran, cerita, dan refleksi tentang kehidupan, teknologi, dan iman."
            )}
          </p>
        </div>
      </div>

      {/* Writings Cards */}
      <div className="flex h-full items-center px-4 md:pl-16 md:pr-32 gap-4 md:gap-12 bg-[#d4d4d4]">
        {WRITINGS.map((writing, index) => (
          <motion.article 
            key={writing.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
            whileHover={{ y: -30, rotate: -1, transition: { duration: 0.4 } }}
            onClick={() => onSelect(writing)}
            className="w-[85vw] md:w-[35vw] h-[75vh] bg-[#fdfdfd] p-8 md:p-14 flex flex-col border border-neutral-200 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group cursor-pointer relative flex-shrink-0"
          >
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-black pointer-events-none mix-blend-multiply filter contrast-150 brightness-110"></div>

            <div className="mb-6 md:mb-8 font-mono text-xs text-neutral-400 flex justify-between items-center z-10 pointer-events-none">
              <span>00{index + 1} / WRITING</span>
              <div className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-black transition-colors" />
            </div>
            
            <h3 className="font-serif text-3xl md:text-5xl mb-4 leading-[1.1] text-neutral-900 group-hover:text-black transition-colors pointer-events-none">
              {writing.title}
            </h3>
            
            {writing.subtitle && (
              <h4 className="font-serif italic text-lg md:text-xl text-neutral-500 mb-6 md:mb-8 font-light pointer-events-none">
                {writing.subtitle[language]}
              </h4>
            )}

            <div className="w-full h-px bg-neutral-200 mb-6 md:mb-8 group-hover:bg-neutral-900 transition-colors duration-700 pointer-events-none" />
            
            <p className="font-serif text-base md:text-xl leading-relaxed text-neutral-600 mb-8 line-clamp-5 group-hover:text-neutral-800 transition-colors pointer-events-none">
              {writing.excerpt[language]}
            </p>

            {writing.quote && (
              <div className="mt-auto relative pointer-events-none hidden md:block">
                <Quote size={32} className="text-neutral-100 absolute -top-6 -left-4" />
                <blockquote className="italic font-serif text-neutral-500 text-sm relative z-10 pl-6 border-l-2 border-neutral-100 group-hover:border-neutral-300 transition-colors pl-4">
                  "{writing.quote[language]}"
                </blockquote>
              </div>
            )}

            <div className="absolute bottom-10 right-10 opacity-100 md:opacity-0 group-hover:opacity-100 transform md:translate-x-4 group-hover:translate-x-0 transition-all duration-500 font-mono text-xs uppercase tracking-widest font-bold pointer-events-none text-neutral-400 md:text-neutral-900">
              {t("Read Story ->", "Baca Cerita ->")}
            </div>
          </motion.article>
        ))}
        {/* Extra spacer at the end */}
        <div className="w-[10vw]"></div>
      </div>
    </section>
  );
};

export default Writings;