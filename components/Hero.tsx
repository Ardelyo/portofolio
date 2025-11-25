import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const name = "ARDELYO";

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position -0.5 to 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);
  const moveXReverse = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const moveYReverse = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  return (
    <section className="h-full w-screen flex flex-col justify-center items-center p-8 bg-paper relative overflow-hidden flex-shrink-0 snap-center">

      {/* Animated Grain/Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="absolute top-8 left-8 text-xs font-mono text-ink-muted tracking-widest uppercase">
        {t("Based in Indonesia", "Berbasis di Indonesia")}
      </div>
      <div className="absolute top-8 right-8 text-xs font-mono text-ink-muted tracking-widest uppercase hidden md:block">
        Est. 2021
      </div>

      <div className="z-10 text-center flex flex-col items-center relative w-full">
        <motion.p
          style={{ x: moveXReverse, y: moveYReverse }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-xl md:text-3xl text-ink-muted mb-4"
        >
          {t("The Portfolio of", "Portofolio dari")}
        </motion.p>

        <motion.h1
          style={{ x: moveX, y: moveY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // Adjusted mobile text size to 18vw to fit portrait screens
          className="font-serif text-[18vw] md:text-[15vw] leading-[0.8] text-ink mix-blend-difference flex overflow-hidden select-none z-20"
        >
          {name.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block hover:text-ink-muted transition-colors duration-300">
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-ink-muted mt-8 md:mt-10 mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-[10px] md:text-sm tracking-[0.3em] text-ink-muted uppercase text-center"
        >
          {t("Student • Developer • Leader", "Siswa • Pengembang • Pemimpin")}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] text-ink-muted flex flex-col items-center gap-2">
          <span>{t("SCROLL TO EXPLORE", "GULIR UNTUK JELAJAH")}</span>
          <span className="h-12 w-px bg-gradient-to-b from-ink-muted to-transparent block"></span>
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;