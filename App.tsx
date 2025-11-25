import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Writings from './components/Writings';
import Footer from './components/Footer';
import DetailOverlay from './components/DetailOverlay';
import { LanguageProvider, useLanguage } from './LanguageContext';
import LanguageSwitch from './components/LanguageSwitch';
import { Project, Writing } from './types';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.closest('a') || 
                          target.closest('button') ||
                          target.classList.contains('cursor-pointer');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[300] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[300] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
          backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

const ScrollContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const { t } = useLanguage();

  // Detail View State
  const [selectedItem, setSelectedItem] = useState<Project | Writing | null>(null);
  const [selectedType, setSelectedType] = useState<'project' | 'writing' | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const calculateWidth = () => {
       const totalWidth = element.scrollWidth;
       const viewportWidth = window.innerWidth;
       setScrollRange(totalWidth - viewportWidth);
    };

    calculateWidth();
    // Slightly longer delay for mobile to account for address bar shifts
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(calculateWidth, 300);
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothScrollY = useSpring(scrollY, {
    damping: 50,
    stiffness: 400,
    mass: 1
  });

  const skewVelocity = useTransform(scrollVelocity, [-50, 50], [2, -2]);
  const skew = useSpring(skewVelocity, { stiffness: 400, damping: 30 });

  const transformX = useTransform(smoothScrollY, [0, scrollRange], [0, -scrollRange]);
  const progressBarWidth = useTransform(smoothScrollY, [0, scrollRange], ["0%", "100%"]);

  const handleSelectProject = (project: Project) => {
    setSelectedItem(project);
    setSelectedType('project');
  };

  const handleSelectWriting = (writing: Writing) => {
    setSelectedItem(writing);
    setSelectedType('writing');
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    setSelectedType(null);
  };

  return (
    <div style={{ height: `${scrollRange + window.innerHeight}px` }} className="bg-black relative">
      <CustomCursor />
      <LanguageSwitch />
      
      <AnimatePresence>
        {selectedItem && (
          <DetailOverlay 
            item={selectedItem} 
            type={selectedType} 
            onClose={handleCloseDetail} 
          />
        )}
      </AnimatePresence>

      {/* Sticky container - Using 100dvh for mobile support */}
      <div className="fixed top-0 left-0 h-[100dvh] w-screen overflow-hidden">
        
        <motion.div 
          ref={containerRef}
          style={{ x: transformX, skewX: skew }}
          className="flex h-full w-max will-change-transform"
        >
          <Hero />
          <About />
          <Projects onSelect={handleSelectProject} />
          <Writings onSelect={handleSelectWriting} />
          <Footer />
        </motion.div>

      </div>

      <motion.div 
        className="fixed bottom-0 left-0 h-1 bg-white z-50 mix-blend-difference"
        style={{ width: progressBarWidth }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 mix-blend-difference text-white z-40 font-mono text-xs hidden md:block"
      >
        {t("SCROLL ↓ TO NAVIGATE →", "GULIR ↓ UNTUK NAVIGASI →")}
      </motion.div>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ScrollContent />
    </LanguageProvider>
  );
}

export default App;