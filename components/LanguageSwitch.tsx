import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-8 right-8 z-[100] flex items-center gap-4 mix-blend-difference">
      <div className="relative flex items-center bg-transparent border border-white/30 rounded-full p-1 backdrop-blur-sm">
        <motion.div
          className="absolute top-1 bottom-1 bg-white rounded-full"
          initial={false}
          animate={{
            x: language === 'en' ? 0 : '100%',
            width: '50%'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        <button
          onClick={() => setLanguage('en')}
          className={`relative px-4 py-1 text-xs font-mono font-bold transition-colors duration-200 ${
            language === 'en' ? 'text-black' : 'text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('id')}
          className={`relative px-4 py-1 text-xs font-mono font-bold transition-colors duration-200 ${
            language === 'id' ? 'text-black' : 'text-white'
          }`}
        >
          ID
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitch;
