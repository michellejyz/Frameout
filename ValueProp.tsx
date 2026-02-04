import React from 'react';
import FadeInUp from './FadeInUp';
import { useLanguage } from './LanguageContext';

const ValueProp = () => {
  const { language } = useLanguage();

  const content = {
    zh: {
      lead: "我们带领团队从",
      leadHighlight: "底层思维与方法",
      start: "出发",
      method: "通过「任务建模 × 定位挑战 × 增长破格」",
      result: "实现从模仿到超越",
      sub: "在短周期内，在关键项目上实现“进展”"
    },
    en: {
      lead: "We lead teams starting from ",
      leadHighlight: "Underlying Thinking & Methods",
      start: "",
      method: "Through \"Task Modeling × Challenge Positioning × Growth Breaking\"",
      result: "Achieve from Imitation to Transcendence",
      sub: "Make visible 'Progress' on key projects in short cycles"
    }
  };

  const t = content[language];

  return (
    <section className="py-24 bg-brand-yellow text-brand-dark text-center">
      <div className="max-w-4xl mx-auto px-4">
        <FadeInUp delay={0.1}>
          <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-70">Top 1% World-Class Facilitator Lead</p>
        </FadeInUp>
        
        <FadeInUp delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t.lead}<span className="border-b-4 border-brand-dark pb-1">{t.leadHighlight}</span>{t.start}
          </h2>
        </FadeInUp>
        
        <FadeInUp delay={0.3}>
          <div className="bg-white/20 inline-block px-8 py-4 rounded-lg backdrop-blur-sm mb-10">
             <p className="text-xl md:text-2xl font-medium">
               {t.method}
             </p>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={0.4}>
          <h3 className="text-4xl md:text-6xl font-black text-brand-red mb-6">
            {t.result}
          </h3>
        </FadeInUp>
        
        <FadeInUp delay={0.5}>
          <p className="text-xl md:text-2xl font-medium">
            {t.sub}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ValueProp;