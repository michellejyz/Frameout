import React from 'react';
import FadeInUp from './FadeInUp';
import { useLanguage } from './LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    zh: {
      brand: "FrameOUT",
      titleMain: "出格",
      titleSub: "才有出路",
      desc1: "引导式咨询和训练营",
      role1: "创新增长引导师 - 米朱 Michelle",
      role2: "CMO教练引导师 - 高辛 Vickie",
      boxText: "激发创新洞察力"
    },
    en: {
      brand: "FrameOUT",
      titleMain: "Break OUT",
      titleSub: "To Find a Way OUT",
      desc1: "Facilitated Consulting & Bootcamps",
      role1: "Innovation Facilitator - Michelle Zhu",
      role2: "CMO Coach - Vickie Gao",
      boxText: "Ignite Innovation Insight"
    }
  };

  const t = content[language];

  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row pt-16">
      {/* Left Content */}
      <div className="w-full lg:w-[60%] flex items-center justify-center p-8 md:p-16 xl:pl-32 bg-brand-dark relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-2xl w-full relative z-10">
          <h2 className="text-brand-yellow font-bold text-2xl mb-2 tracking-wide animate-fade-in-up" style={{animationDelay: '0.1s'}}>{t.brand}</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-brand-red inline-block transform hover:scale-105 transition-transform duration-300 origin-left">{t.titleMain}</span><br />
            <span className="text-white text-5xl md:text-7xl">{t.titleSub}</span>
          </h1>
          <div className="w-24 h-2 bg-brand-red mb-10 animate-fade-in-up shadow-[0_0_15px_rgba(217,48,62,0.6)]" style={{animationDelay: '0.3s'}}></div>
          <p className="text-xl md:text-3xl text-gray-300 font-bold mb-3 animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            {t.desc1}
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-bold animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Structure × Creativity × Action
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm md:text-base text-gray-400 animate-fade-in-up font-medium" style={{animationDelay: '0.6s'}}>
             <span className="flex items-center gap-2 text-gray-300"><span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(217,48,62,0.8)]"></span>{t.role1}</span>
             <span className="hidden sm:inline text-gray-600">|</span>
             <span className="flex items-center gap-2 text-gray-300"><span className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(244,196,48,0.8)]"></span>{t.role2}</span>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-full lg:w-[40%] bg-brand-red relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] lg:min-h-screen p-8 perspective-1000">
         
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-brand-yellow/20 to-transparent blur-3xl opacity-50"></div>

         <div className="absolute z-10 w-48 h-48 border-4 border-white/30 border-dashed rounded-lg transform rotate-0 opacity-50"></div>

         <div className="relative z-20 flex items-center justify-center">
             
             <div className="absolute w-96 h-96 rounded-full border border-white/20 animate-ping opacity-20 animation-duration-3000"></div>
             <div className="absolute w-80 h-80 rounded-full border border-white/10 animate-ping opacity-30 animation-delay-500"></div>

             <div className="transform hover:scale-105 transition-transform duration-500 ease-out cursor-pointer relative group">
                 <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0px_20px_50px_rgba(0,0,0,0.4)] transform -rotate-6 translate-x-4 -translate-y-4 border-t border-l border-white/80 relative z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-3xl opacity-50"></div>
                    <img 
                       src="https://outotheframe.oss-cn-shanghai.aliyuncs.com/%E5%87%BA%E6%A0%BClogo%20%282%29.png" 
                       alt="FrameOUT Logo" 
                       className="w-60 md:w-96 h-auto object-contain relative z-10 filter drop-shadow-xl" 
                    />
                 </div>

                 <div className="absolute -top-8 -right-8 w-14 h-14 bg-brand-yellow rounded-full shadow-lg z-30 animate-bounce-deep flex items-center justify-center border-2 border-brand-dark">
                     <span className="text-brand-dark font-black text-xl">!</span>
                 </div>
                 <div className="absolute -bottom-6 -left-10 bg-brand-dark text-white px-4 py-2 rounded-full shadow-lg z-30 animate-bounce delay-100 font-bold text-sm transform rotate-6 border-2 border-white">
                   OUT!
                </div>
             </div>
         </div>
         
         <div className="relative z-30 text-white text-center mt-16 md:mt-20">
            <h3 className="text-3xl md:text-4xl font-black mb-3 animate-fade-in-up tracking-widest drop-shadow-md" style={{animationDelay: '0.2s'}}>
              {t.boxText}
            </h3>
            <p className="text-white/80 text-sm md:text-base animate-fade-in-up font-bold" style={{animationDelay: '0.4s'}}>
              Structure × Creativity × Action
            </p>
         </div>
      </div>
    </section>
  );
};

export default Hero;