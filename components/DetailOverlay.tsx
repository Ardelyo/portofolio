import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, Github, Link, Calendar, User, Code2, Terminal, Monitor, ListChecks, Network, MessageSquare, Grid, Quote, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Project, Writing } from '../types';

interface DetailOverlayProps {
  item: Project | Writing | null;
  onClose: () => void;
  type: 'project' | 'writing' | null;
}

// Specific Visuals for each project
const GreenKodeVisual: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center items-center font-mono">
    <div className="w-3/4 bg-neutral-900 border border-neutral-700 rounded-md p-4 shadow-xl">
      <div className="flex gap-2 mb-4 border-b border-neutral-800 pb-2">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
      <motion.div 
        className="text-xs text-green-500 mb-2"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4, times: [0, 0.1, 0.9, 1] }}
      >
        > initializing carbon_tracker...
      </motion.div>
      <div className="flex items-end gap-2 h-24 mt-4">
         {[40, 70, 30, 85, 50, 60, 20].map((h, i) => (
           <motion.div 
             key={i}
             className="flex-1 bg-green-900/50 rounded-t"
             initial={{ height: 0 }}
             animate={{ height: `${h}%` }}
             transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
           >
             <motion.div 
               className="w-full bg-green-500 h-1" 
               animate={{ opacity: [0.5, 1, 0.5] }} 
               transition={{ duration: 0.5, repeat: Infinity }}
             />
           </motion.div>
         ))}
      </div>
      <div className="mt-2 text-[10px] text-neutral-500 text-right">CO2e Reduced: 12.5kg</div>
    </div>
  </div>
);

const KursorinVisual: React.FC = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
    {/* Screen Boundary */}
    <div className="w-3/4 h-3/4 border-2 border-neutral-800 rounded-lg relative bg-neutral-900/50">
       <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-neutral-800 rounded-full" />
       
       {/* Targets */}
       <motion.div 
         className="absolute top-1/4 left-1/4 w-8 h-8 border border-neutral-600 rounded-full"
         animate={{ scale: [1, 1.2, 1] }}
         transition={{ duration: 2, repeat: Infinity }}
       />
       <motion.div 
         className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-neutral-600 rounded-full"
         animate={{ scale: [1, 1.1, 1] }}
         transition={{ duration: 2, delay: 1, repeat: Infinity }}
       />

       {/* Cursor */}
       <motion.div
         className="absolute w-4 h-4 bg-white rounded-full mix-blend-difference z-10"
         animate={{ 
            top: ["25%", "60%", "25%"], 
            left: ["25%", "70%", "25%"] 
         }}
         transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
       >
         <div className="absolute inset-0 bg-white blur-sm opacity-50" />
       </motion.div>
       
       {/* Tracking Lines */}
       <motion.div className="absolute top-2 left-1/2 w-px h-full bg-red-500/20 origin-top" 
          animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
       />
       <motion.div className="absolute top-2 left-1/2 h-px w-full bg-red-500/20 origin-left" 
          animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
       />
    </div>
  </div>
);

const PiketinVisual: React.FC = () => (
   <div className="w-full h-full flex items-center justify-center">
      <div className="w-2/3 flex flex-col gap-3">
         {[1, 2, 3, 4].map((i) => (
           <motion.div 
             key={i}
             className="h-10 border border-neutral-800 rounded flex items-center px-4 justify-between bg-neutral-900"
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: i * 0.2 }}
           >
              <div className="w-1/2 h-2 bg-neutral-800 rounded" />
              <motion.div 
                className="w-4 h-4 rounded-full border border-neutral-600 flex items-center justify-center"
                animate={{ backgroundColor: ["transparent", "#22c55e", "#22c55e"] }}
                transition={{ delay: 1 + i * 0.5, duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                 <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.5 }}
                    className="text-[10px] text-black font-bold"
                 >✓</motion.div>
              </motion.div>
           </motion.div>
         ))}
      </div>
   </div>
);

const ArtefakVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center relative">
     <motion.div 
       className="w-16 h-16 rounded-full border border-neutral-500 flex items-center justify-center bg-neutral-900 z-10"
       animate={{ boxShadow: ["0 0 0 0px rgba(255,255,255,0)", "0 0 0 10px rgba(255,255,255,0.05)", "0 0 0 20px rgba(255,255,255,0)"] }}
       transition={{ duration: 2, repeat: Infinity }}
     >
       <div className="w-2 h-2 bg-white rounded-full" />
     </motion.div>

     {[0, 72, 144, 216, 288].map((deg, i) => (
       <motion.div
         key={i}
         className="absolute w-2 h-2 bg-neutral-600 rounded-full"
         animate={{ 
            rotate: 360,
            x: [0, Math.cos(deg * (Math.PI/180)) * 80, 0],
            y: [0, Math.sin(deg * (Math.PI/180)) * 80, 0]
         }}
         transition={{ duration: 4, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
       />
     ))}
     
     <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.circle cx="50%" cy="50%" r="80" stroke="white" strokeWidth="1" fill="none" 
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
     </svg>
  </div>
);

const LyaVisual: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-8">
     <motion.div 
       className="self-start bg-neutral-800 px-4 py-2 rounded-t-lg rounded-br-lg max-w-[60%]"
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ delay: 0.2 }}
     >
        <div className="flex gap-1">
           <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" />
           <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-75" />
           <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce delay-150" />
        </div>
     </motion.div>
     
     <motion.div 
       className="self-end bg-white text-black px-4 py-2 rounded-t-lg rounded-bl-lg max-w-[60%] text-[10px] font-mono"
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ delay: 1 }}
     >
        Who are you?
     </motion.div>

     <motion.div 
       className="self-start bg-neutral-800 px-4 py-3 rounded-t-lg rounded-br-lg max-w-[70%] text-[10px] font-serif italic text-neutral-300"
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ delay: 2 }}
     >
        I am Lya. Not just code, but a voice.
     </motion.div>
  </div>
);

const OurCreativityVisual: React.FC = () => (
  <div className="w-full h-full p-8 flex items-center justify-center">
    <div className="grid grid-cols-3 gap-2 w-3/4">
       {[...Array(6)].map((_, i) => (
         <motion.div 
           key={i}
           className={`bg-neutral-800 rounded ${i === 1 ? 'row-span-2 h-24' : 'h-10'}`}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: i * 0.1, duration: 0.5 }}
           whileHover={{ scale: 1.05, backgroundColor: "#404040" }}
         />
       ))}
    </div>
  </div>
);

const DefaultVisual: React.FC = () => (
    <div className="flex gap-4 h-full p-4 items-center">
         <div className="w-1/4 h-3/4 bg-neutral-800/30 rounded animate-pulse" />
         <div className="flex-1 flex flex-col gap-3">
            <div className="w-3/4 h-8 bg-neutral-800/50 rounded" />
            <div className="w-full h-32 bg-neutral-800/20 rounded" />
            <div className="flex gap-2">
               <div className="w-1/3 h-20 bg-neutral-800/30 rounded" />
               <div className="w-1/3 h-20 bg-neutral-800/30 rounded" />
            </div>
         </div>
      </div>
)

const WireframeVisual: React.FC<{ delay?: number, projectId: string }> = ({ delay = 0, projectId }) => {
  const getVisual = () => {
    switch (projectId) {
      case 'greenkode': return <GreenKodeVisual />;
      case 'kursorin': return <KursorinVisual />;
      case 'piketin': return <PiketinVisual />;
      case 'artefak': return <ArtefakVisual />;
      case 'lya-ai': return <LyaVisual />;
      case 'ourcreativity': return <OurCreativityVisual />;
      default: return <DefaultVisual />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.8 }}
      className="w-full aspect-video md:aspect-[21/9] bg-black border border-neutral-800 rounded-lg relative overflow-hidden flex flex-col mb-12 shadow-2xl group"
    >
      {/* Fake Header */}
      <div className="w-full h-8 border-b border-neutral-800 flex items-center gap-2 px-4 bg-neutral-900/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-red-500/50 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-yellow-500/50 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-green-500/50 transition-colors" />
        </div>
        <div className="w-px h-4 bg-neutral-800 mx-2" />
        <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest flex items-center gap-2">
           {getIconForProject(projectId)}
           {projectId}.exe
        </div>
      </div>

      {/* Abstract Content */}
      <div className="flex-1 relative z-10">
         {getVisual()}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </motion.div>
  )
}

const getIconForProject = (id: string) => {
   switch(id) {
      case 'greenkode': return <Terminal size={10} />;
      case 'kursorin': return <Monitor size={10} />;
      case 'piketin': return <ListChecks size={10} />;
      case 'artefak': return <Network size={10} />;
      case 'lya-ai': return <MessageSquare size={10} />;
      case 'ourcreativity': return <Grid size={10} />;
      default: return <Code2 size={10} />;
   }
}

// === NEW: Reader Component for Writings ===
const WritingReader: React.FC<{ writing: Writing }> = ({ writing }) => {
  const { language } = useLanguage();
  const content = writing.content ? writing.content[language] : '';
  const paragraphs = content.split('\n\n');

  return (
    <div className="max-w-3xl mx-auto pb-32 pt-20 px-6 md:px-12 selection:bg-neutral-200 selection:text-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="text-center mb-12 md:mb-20"
      >
        <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-6 flex justify-center items-center gap-2">
          <BookOpen size={14} /> Writing Piece / 00{writing.id.length}
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-neutral-900 leading-[1.1] mb-6">
          {writing.title}
        </h1>
        {writing.subtitle && (
          <h2 className="font-serif italic text-xl md:text-3xl text-neutral-500 font-light">
            {writing.subtitle[language]}
          </h2>
        )}
      </motion.div>

      {/* Content */}
      <div className="font-serif text-lg md:text-xl text-neutral-800 leading-relaxed md:leading-[1.8] space-y-8">
        {paragraphs.map((para, index) => (
          <motion.p 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1), duration: 0.8 }}
            className={`${index === 0 ? 'first-letter:float-left first-letter:text-6xl md:first-letter:text-7xl first-letter:pr-4 first-letter:font-bold first-letter:leading-[0.8] first-letter:mt-2' : ''}`}
          >
            {para}
          </motion.p>
        ))}
        
        <div className="w-full flex justify-center pt-12 pb-4">
           <span className="text-2xl text-neutral-300">❦</span>
        </div>
      </div>
    </div>
  );
};

// === Main Overlay Component ===
const DetailOverlay: React.FC<DetailOverlayProps> = ({ item, onClose, type }) => {
  const { language, t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  const isProject = type === 'project';
  const data = item as any; // Type assertion

  // Theme Logic: Projects are Dark, Writings are Light Paper
  const bgColor = isProject ? 'bg-paper text-ink' : 'bg-[#fcfbf9] text-[#1a1a1a]';
  const borderColor = isProject ? 'border-neutral-900' : 'border-neutral-200';
  const buttonHover = isProject ? 'hover:bg-neutral-900 hover:border-neutral-800' : 'hover:bg-neutral-200 hover:border-neutral-300';
  const closeIconColor = isProject ? 'text-white' : 'text-neutral-800';
  
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className={`fixed inset-0 z-[200] flex flex-col overflow-hidden ${bgColor}`}
    >
      {/* Header / Nav */}
      <div className={`flex justify-between items-center p-6 md:p-8 border-b ${borderColor} backdrop-blur-sm relative z-20 flex-shrink-0 bg-opacity-90`}>
        <div className={`font-mono text-xs uppercase tracking-widest ${isProject ? 'text-neutral-500' : 'text-neutral-400'} flex items-center gap-2`}>
           <div className={`w-2 h-2 rounded-full animate-pulse ${isProject ? 'bg-neutral-500' : 'bg-neutral-800'}`} />
           {isProject ? t("CASE STUDY", "STUDI KASUS") : t("STORY ARCHIVE", "ARSIP CERITA")}
        </div>
        <button 
          onClick={onClose}
          className={`p-2 rounded-full transition-colors group border border-transparent ${buttonHover}`}
        >
          <X size={24} className={`group-hover:rotate-90 transition-transform duration-300 ${closeIconColor}`} />
        </button>
      </div>

      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto relative no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
        
        {/* Render Logic: Project Case Study OR Writing Reader */}
        {isProject ? (
          <div className="max-w-6xl mx-auto pb-32 pt-12 px-6 md:px-12">
            
            {/* Project Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-10 border-b border-neutral-800 pb-10">
                <div className="flex-1">
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-4 text-white">
                    {data.title}
                  </h1>
                </div>
                
                 <div className="flex flex-wrap gap-4 items-center min-w-max">
                     <span className={`font-mono text-[10px] px-4 py-2 border rounded-full uppercase tracking-wider h-fit
                      ${data.status === 'Live Project' ? 'border-green-900/50 text-green-400 bg-green-900/10' : 
                        data.status === 'Abandoned' ? 'border-red-900/50 text-red-400 bg-red-900/10' : 
                        'border-yellow-900/50 text-yellow-400 bg-yellow-900/10'}`}>
                      {data.status}
                    </span>
                    {data.link && (
                      <a 
                        href={data.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-2 bg-white text-black font-mono text-xs uppercase font-bold hover:bg-neutral-300 transition-colors flex items-center gap-2 rounded-full"
                      >
                        <Github size={14} /> {t("Repository", "Repositori")}
                      </a>
                    )}
                 </div>
              </div>
              
              <p className="font-serif text-xl md:text-3xl text-neutral-400 max-w-4xl leading-relaxed font-light">
                 {data.description[language]}
              </p>
            </motion.div>

            {/* Project Metadata Grid - Stacked on Mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-8 border border-neutral-800 mb-20 bg-neutral-900/20 rounded-xl"
            >
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <User size={12} /> {t("Role", "Peran")}
                </span>
                <span className="font-sans text-sm md:text-base text-white font-medium">{data.role ? data.role[language] : '-'}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <Calendar size={12} /> {t("Year", "Tahun")}
                </span>
                <span className="font-sans text-sm md:text-base text-white font-medium">{data.year || '-'}</span>
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <span className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <Code2 size={12} /> {t("Stack", "Teknologi")}
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.techStack?.map((tech: string, i: number) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Abstract Wireframe Visual */}
            <WireframeVisual delay={0.5} projectId={data.id} />

            {/* Project Narrative */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-serif text-lg md:text-2xl leading-loose text-neutral-300 space-y-12 max-w-4xl mx-auto mt-20"
            >
               <div className="w-full flex items-center justify-center py-8 opacity-30">
                  <div className="w-2 h-2 bg-white rounded-full mx-2" />
                  <div className="w-2 h-2 bg-white rounded-full mx-2" />
                  <div className="w-2 h-2 bg-white rounded-full mx-2" />
               </div>
              
              <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
                <p>{data.details && data.details[language]}</p>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Writing Reader View */
          <WritingReader writing={data} />
        )}

      </div>
      
      {/* Background Decor */}
      <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none ${isProject ? 'mix-blend-screen' : 'mix-blend-multiply'} fixed`} />
    </motion.div>
  );
};

export default DetailOverlay;