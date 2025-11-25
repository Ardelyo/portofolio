import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Project } from '../types';

interface ProjectsProps {
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on touch devices for performance and native feel
    if (window.matchMedia("(pointer: coarse)").matches) return;

    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });
  
  const shineX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const shineY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      // Mobile: 85vw width for better focus. Desktop: 35-45vw.
      className="w-[85vw] md:w-[45vw] lg:w-[35vw] h-[75vh] flex flex-col justify-between border border-neutral-800 p-6 md:p-8 bg-black group relative overflow-hidden perspective-1000 flex-shrink-0 cursor-pointer md:cursor-none"
    >
      {/* Abstract Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(circle_at_100%_0%,rgba(50,50,50,0.8),transparent_40%)]" />
      
      {/* Dynamic Shine Layer */}
      <motion.div 
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.08), transparent 50%)`
        }}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Large Number Background */}
      <span className="absolute -bottom-12 -right-4 text-[10rem] md:text-[14rem] font-serif text-neutral-900/80 leading-none select-none pointer-events-none group-hover:text-neutral-800/80 transition-colors duration-500 z-0">
        {index + 1}
      </span>

      <div className="relative z-20 transform-style-3d group-hover:translate-z-10 transition-transform duration-300 pointer-events-none">
        <div className="flex justify-between items-start mb-6 md:mb-8">
          <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
          <span className={`font-mono text-[10px] px-3 py-1 border rounded-full uppercase tracking-wider backdrop-blur-md
            ${project.status === 'Live Project' ? 'border-green-900/50 text-green-500 bg-green-900/10' : 
              project.status === 'Abandoned' ? 'border-red-900/50 text-red-500 bg-red-900/10' : 
              'border-yellow-900/50 text-yellow-500 bg-yellow-900/10'}`}>
            {project.status}
          </span>
        </div>
        
        <h3 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 leading-none group-hover:text-white transition-colors duration-300 break-words">
          {project.title}
        </h3>
        
        <motion.div 
          className="h-px bg-neutral-800 w-16 mb-6 md:mb-8 group-hover:w-full transition-all duration-700 ease-out" 
        />
        
        <p className="font-sans text-neutral-400 text-sm leading-loose mb-6 max-w-[95%] group-hover:text-neutral-300 transition-colors duration-300 line-clamp-4 md:line-clamp-none">
          {project.description[language]}
        </p>
      </div>

      <div className="flex gap-4 items-center mt-auto z-20 transform-style-3d group-hover:translate-z-4 transition-transform duration-300">
        {project.hasReadMore && (
          <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors text-neutral-500 pointer-events-none">
            {t("Read More", "Baca Detail")} <ArrowUpRight size={14} />
          </button>
        )}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-6 py-3 bg-white text-black font-mono text-xs uppercase font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-white/10"
          >
            {t("Visit Site", "Kunjungi Situs")} <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ onSelect }) => {
  const { t } = useLanguage();

  return (
    <section className="h-full w-auto flex flex-shrink-0 bg-paper snap-start relative">
      {/* Decorative background line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-900 z-0 pointer-events-none" />

      {/* Title Panel - Narrower on Mobile */}
      <div className="w-[15vw] md:w-[20vw] h-full flex items-center justify-center border-r border-neutral-900 bg-neutral-950 z-10 relative flex-shrink-0">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl lg:text-7xl -rotate-90 text-neutral-200 whitespace-nowrap origin-center tracking-tight"
        >
          {t("Selected Works", "Karya Pilihan")}
        </motion.h2>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-600">
            <Code size={24} strokeWidth={1} />
        </div>
      </div>

      {/* Projects Horizontal List - Adjusted Padding */}
      <div className="flex h-full items-center px-4 md:px-12 gap-4 md:gap-16 bg-neutral-950 z-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={() => onSelect(project)}
          />
        ))}
        {/* Spacer for right padding */}
        <div className="w-[10vw]"></div>
      </div>
    </section>
  );
};

export default Projects;