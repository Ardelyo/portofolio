import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, MapPin, User } from 'lucide-react';
import { TIMELINE, SKILLS, PROFILE } from '../constants';
import { useLanguage } from '../LanguageContext';

const TypingEffect: React.FC<{ text: string, delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const startTyping = () => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    };

    timeout = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [language]);

  return (
    // Mobile Strategy: W-200vw creates a horizontal slide. Desktop: w-screen fits in one view.
    <section className="h-full flex flex-row bg-neutral-900 text-ink flex-shrink-0 snap-center overflow-hidden relative w-[200vw] md:w-[100vw]">
      
      {/* Intro Column - 100vw on mobile (Slide 1) */}
      <div className="w-[100vw] md:w-1/2 h-full flex flex-col justify-center p-8 md:p-16 lg:p-24 border-r border-neutral-800 relative z-10 bg-neutral-900 overflow-y-auto no-scrollbar">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4 text-neutral-500 font-mono text-xs uppercase tracking-widest">
            <User size={12} />
            <span>002 // {t("IDENTITY", "IDENTITAS")}</span>
          </div>

          <motion.h2 
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("About Me", "Tentang Saya")}
          </motion.h2>
          
          <div className="font-serif text-lg md:text-2xl leading-relaxed text-neutral-400 space-y-6">
             <p>
              {t("Hi, I'm", "Halo, saya")} <span className="text-white italic font-semibold">{PROFILE.name}</span>, {t("or you can call me", "atau panggil saja")} <span className="text-white border-b border-neutral-600">{PROFILE.alias}</span>.
             </p>
             <p className="text-neutral-300">
               {PROFILE.intro[language]}
             </p>
             
             <div className="flex items-center gap-2 text-sm font-sans text-neutral-500 mt-4 pt-4 border-t border-neutral-800">
                <MapPin size={16} />
                <span>{PROFILE.location[language]}</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Terminal/Data Column - 100vw on mobile (Slide 2) */}
      <div className="w-[100vw] md:w-1/2 h-full bg-black p-8 md:p-12 font-mono overflow-y-auto no-scrollbar flex flex-col justify-center relative border-l border-neutral-800/50">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        <div className="max-w-xl mx-auto w-full relative z-10">
          
          <div className="mb-12 border-l border-neutral-800 pl-6 relative">
            <motion.div 
              className="absolute left-[-5px] top-0 w-2 h-2 bg-green-500/50 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
            />
            <h3 className="text-xs text-green-500 mb-6 uppercase tracking-widest flex items-center gap-2 font-bold">
              <Terminal size={14} /> ./experience_log.sh
            </h3>
            <div className="space-y-6">
              {TIMELINE.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <span className="text-neutral-600 min-w-[50px] text-xs pt-1 group-hover:text-green-500 transition-colors duration-300 font-bold">
                    {item.year}
                  </span>
                  <div className="text-neutral-400 text-sm border-b border-neutral-900 pb-2 w-full group-hover:text-neutral-200 transition-colors">
                    {item.description[language]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-l border-neutral-800 pl-6 relative">
             <motion.div 
              className="absolute left-[-5px] top-0 w-2 h-2 bg-blue-500/50 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
             <h3 className="text-xs text-blue-500 mb-6 uppercase tracking-widest flex items-center gap-2 font-bold">
              <Cpu size={14} /> ./skills_matrix.json
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {SKILLS.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-neutral-300 group-hover:text-white">{skill.category}</span>
                    <span className="text-[10px] text-neutral-600 font-mono">{skill.percentage}%</span>
                  </div>
                  <div className="h-0.5 w-full bg-neutral-900 mb-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                      className="h-full bg-neutral-500 group-hover:bg-white transition-colors duration-500"
                    />
                  </div>
                  <p className="text-[10px] text-neutral-600 leading-tight group-hover:text-neutral-400 transition-colors">
                    {skill.items.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-dashed border-neutral-900 flex justify-between items-center text-[10px] text-neutral-600">
             <span>SYS_STATUS: ONLINE</span>
             <span>LOC: {PROFILE.location[language]}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;