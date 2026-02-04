import React from 'react';
import FadeInUp from './FadeInUp';
import { useLanguage } from './LanguageContext';

const Philosophy = () => {
  const { language } = useLanguage();

  const books = [
    { title: "JOBS TO BE DONE", cnTitle: "《待办任务》", author: "Anthony W. Ulwick", color: "bg-white border border-gray-200 text-brand-dark" },
    { title: "THE INNOVATOR'S DILEMMA", cnTitle: "《创新者的窘境》", author: "Clayton M. Christensen", color: "bg-gradient-to-br from-red-900 to-red-950 text-white" },
    { title: "GOOD STRATEGY BAD STRATEGY", cnTitle: "《好战略，坏战略》", author: "Richard Rumelt", color: "bg-gradient-to-br from-gray-900 to-black text-white" },
    { title: "THE POWER OF MOMENTS", cnTitle: "《峰值体验》", author: "Chip Heath & Dan Heath", color: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white" },
    { title: "THE LEAN STARTUP", cnTitle: "《精益创业》", author: "Eric Ries", color: "bg-gradient-to-br from-blue-600 to-blue-800 text-white" },
    { title: "MANAGING TRANSITIONS", cnTitle: "《管理转变》", author: "William Bridges", color: "bg-gradient-to-br from-yellow-400 to-orange-400 text-brand-dark" }
  ];

  const content = {
    zh: {
      intro: "用设计师的方法做结构化的创意：",
      how: "我们如何",
      doIt: "做到？",
      structure: "严谨的\n结构",
      inspiration: "童心的\n激发",
      creativity: "= 创造力",
      methodologyTitle: "核心底层方法论",
      footer: "底层源自斯坦福的设计思维和谷歌创新创业设计冲刺"
    },
    en: {
      intro: "Using designer methods for structured creativity:",
      how: "How Do We",
      doIt: "Do It?",
      structure: "Rigorous\nStructure",
      inspiration: "Childlike\nInspiration",
      creativity: "= Creativity",
      methodologyTitle: "Core Underlying Methodology",
      footer: "Based on Stanford Design Thinking and Google Design Sprint"
    }
  };

  const t = content[language];

  return (
    <section id="philosophy" className="flex flex-col md:flex-row min-h-[80vh] w-full">
       {/* Left - Yellow */}
       <div className="w-full md:w-[35%] bg-brand-yellow p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <FadeInUp>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-4 opacity-90">
                {t.intro}
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {t.how}<br/>{t.doIt}
              </h1>
            </FadeInUp>
            {/* Decoration */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 border-8 border-white/20 rounded-full"></div>
          </div>
       </div>

       {/* Right - White */}
       <div className="w-full md:w-[65%] bg-white p-8 md:p-12 flex flex-col relative">
          
          <div className="flex-grow flex items-center justify-center py-12 relative min-h-[400px]">
             <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center">
                 
                 {/* Left Circle */}
                 <div className="absolute left-1/2 -translate-x-[65%] w-48 h-48 md:w-80 md:h-80 rounded-full border-[6px] border-dashed border-brand-red/80 flex items-center justify-end pr-8 md:pr-14 animate-fade-in-up bg-brand-red/5" style={{animationDelay: '0.3s'}}>
                    <span className="text-2xl md:text-3xl font-bold text-brand-red text-right leading-tight whitespace-pre-line">{t.structure}</span>
                 </div>

                 {/* Right Circle */}
                 <div className="absolute right-1/2 translate-x-[65%] w-48 h-48 md:w-80 md:h-80 rounded-full border-[6px] border-dashed border-brand-yellow flex items-center justify-start pl-8 md:pl-14 animate-fade-in-up bg-brand-yellow/5" style={{animationDelay: '0.5s'}}>
                    <span className="text-2xl md:text-3xl font-bold text-brand-yellow/80 text-left leading-tight whitespace-pre-line">{t.inspiration}</span>
                 </div>

                 {/* Intersection */}
                 <div className="relative z-20 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                    <div className="bg-white/95 backdrop-blur-md shadow-2xl px-4 py-2 md:px-6 md:py-4 rounded-xl border border-gray-100 transform scale-105">
                       <span className="text-2xl md:text-4xl font-black text-brand-dark whitespace-nowrap">{t.creativity}</span>
                    </div>
                 </div>
             </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
             <FadeInUp delay={0.7}>
                <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest border-l-4 border-brand-red pl-3">
                  {t.methodologyTitle}
                </h3>
             </FadeInUp>
             <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
               {books.map((book, idx) => (
                 <FadeInUp key={idx} delay={0.8 + idx * 0.1}>
                   <div className={`aspect-[2/3] w-full rounded shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 overflow-hidden flex flex-col p-3 ${book.color}`}>
                      <div className="text-[9px] md:text-[10px] leading-tight opacity-70 mb-1 uppercase tracking-wide">{book.author}</div>
                      <div className="flex-grow flex flex-col justify-start gap-1">
                          <div className="text-xs md:text-sm font-bold leading-tight">{book.title}</div>
                          {language === 'zh' && <div className="text-xs md:text-sm font-bold leading-tight opacity-90">{book.cnTitle}</div>}
                      </div>
                   </div>
                 </FadeInUp>
               ))}
             </div>
             <p className="text-right text-xs text-gray-400 mt-4 font-medium">
               {t.footer}
             </p>
          </div>
       </div>
    </section>
  );
};

export default Philosophy;