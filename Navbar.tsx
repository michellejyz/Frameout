import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Navbar = ({ onNavigate }: { onNavigate?: (page: 'home' | 'bootcamp' | 'sprint') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const handleNavClick = (e: React.MouseEvent, sectionId?: string) => {
    if (onNavigate) {
      onNavigate('home');
      if (sectionId) {
        e.preventDefault();
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    setIsOpen(false);
  };

  const content = {
    zh: {
      home: "首页",
      philosophy: "核心理念",
      services: "谷歌冲刺/国际顶尖营销工作坊",
      cases: "国内外案例",
      problem: "增长力自测",
      tools: "实战工具下载"
    },
    en: {
      home: "Home",
      philosophy: "Philosophy",
      services: "Sprints & Bootcamps",
      cases: "Cases",
      problem: "Self-Test",
      tools: "Download Tools"
    }
  };

  const t = content[language];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
             <img 
               src="https://outotheframe.oss-cn-shanghai.aliyuncs.com/%E5%87%BA%E6%A0%BClogo%20%282%29.png" 
               alt="FrameOUT Logo" 
               className="h-10 w-auto" 
             />
             <span className="font-bold text-xl tracking-tight hidden md:block text-brand-dark">FrameOUT</span>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center text-sm font-medium">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-600 hover:text-brand-red transition-colors">{t.home}</a>
            <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className="text-gray-600 hover:text-brand-red transition-colors">{t.philosophy}</a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-600 hover:text-brand-red transition-colors"
            >
              {t.services}
            </a>
            <a href="#cases" onClick={(e) => handleNavClick(e, 'cases')} className="text-gray-600 hover:text-brand-red transition-colors">{t.cases}</a>
            <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="text-gray-600 hover:text-brand-red transition-colors">{t.problem}</a>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 text-xs font-bold hover:bg-gray-50 transition-colors"
            >
              <Globe size={14} />
              {language === 'zh' ? 'EN' : '中'}
            </button>

            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-4 py-2 rounded-md bg-brand-red text-white hover:bg-red-700 transition-colors">
              {t.tools}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 text-xs font-bold hover:bg-gray-50 transition-colors"
              >
                <Globe size={14} />
                {language === 'zh' ? 'EN' : '中'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block px-3 py-2 text-gray-700 hover:text-brand-red">{t.home}</a>
            <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className="block px-3 py-2 text-gray-700 hover:text-brand-red">{t.philosophy}</a>
            <a 
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="block px-3 py-2 text-gray-700 hover:text-brand-red"
            >
              {t.services}
            </a>
            <a href="#cases" onClick={(e) => handleNavClick(e, 'cases')} className="block px-3 py-2 text-gray-700 hover:text-brand-red">{t.cases}</a>
            <a href="#problem" onClick={(e) => handleNavClick(e, 'problem')} className="block px-3 py-2 text-gray-700 hover:text-brand-red">{t.problem}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-2 text-brand-red font-bold">{t.tools}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;