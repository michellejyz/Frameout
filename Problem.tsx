import React from 'react';
import { useLanguage } from './LanguageContext';

const Problem = () => {
  const { language } = useLanguage();

  const content = {
    zh: {
      heading: "当增长陷入没有",
      homework: "“作业”",
      tail: "可抄时……",
      text1: "不是你被“卷”住了，而是思维被",
      boxed: "框住了"
    },
    en: {
      heading: "When there's no ",
      homework: "\"Homework\"",
      tail: " to copy for growth...",
      text1: "It's not that you are stuck, it's that your thinking is ",
      boxed: "BOXED IN"
    }
  };

  const t = content[language];

  return (
    <section id="problem" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {t.heading}<br />
            <span className="text-gray-400">{t.homework}</span>{t.tail}
          </h2>
          <p className="text-xl text-gray-300">
            {t.text1}
            <span className="text-brand-red font-bold px-1 relative inline-block">
              {t.boxed}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"></span>
            </span> 
            😵。
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
           {/* Abstract Trapped Scribble Art representation */}
           <div className="bg-white p-4 rounded-sm max-w-sm w-full shadow-2xl transform rotate-2 relative">
              <svg viewBox="0 0 300 300" className="w-full h-auto fill-none">
                 <rect x="25" y="25" width="250" height="250" className="stroke-brand-red stroke-[6]" />
                 <g className="stroke-black stroke-[3] stroke-linecap-round scribble-anim">
                    <path d="M150,150 C100,150 50,100 50,50 M50,50 L50,100 C50,140 30,140 30,200" />
                    <path d="M150,150 C200,150 250,200 270,150 M270,150 C280,100 250,50 200,30" />
                    <path d="M100,250 C150,280 200,270 250,250 C270,230 270,270 250,270" />
                    <path d="M40,120 C80,120 100,40 40,40 M260,100 C220,100 260,200 260,260" />
                    <path d="M130,130 C90,90 210,90 170,130 C130,170 170,170 150,200" />
                 </g>
                 <circle cx="270" cy="150" r="4" className="fill-brand-red animate-pulse" />
                 <circle cx="50" cy="50" r="4" className="fill-brand-red animate-pulse" />
                 <circle cx="250" cy="270" r="4" className="fill-brand-red animate-pulse" />
                 <circle cx="40" cy="40" r="4" className="fill-brand-red animate-pulse" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold px-2 py-1 rotate-[-10deg] shadow-lg">
                NO EXIT?
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;