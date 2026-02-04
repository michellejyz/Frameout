import React from 'react';
import FadeInUp from './FadeInUp';
import { useLanguage } from './LanguageContext';

const Methodology = () => {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: "出格助力增长的理念贯穿项目冲刺流程",
      desc: "用设计师的方法做结构化的创意，底层源自斯坦福的设计思维和谷歌创新设计冲刺。",
      step1: "任务建模",
      step1sub: "Task Modeling",
      step2: "破局点定位",
      step2sub: "Challenge ID",
      step3: "破格增长设计",
      step3sub: "Outlier Design",
      center: ["消费者", "商业利益", "市场势能"],
      detail1Title: "1. 深度洞察增长的多元任务",
      detail1Desc: "从用户需求、市场势能到自身能力，建立增长的结构化任务模型。",
      detail2Title: "2. 找到最优破局挑战问题",
      detail2Desc: "将消费者洞察、竞争态势与品牌资源等复杂商业考量点交织，找到真正能被执行与验证的突破口。",
      detail3Title: "3. 生成系统组合式创新",
      detail3Desc: "加大落地成功率，将品牌、产品、体验、渠道与商业模式中选择资源最优组合，构建持续的增长引擎。"
    },
    en: {
      title: "FrameOUT Growth Philosophy runs through the Sprint Process",
      desc: "Structured creativity using designer methods, rooted in Stanford Design Thinking and Google Design Sprints.",
      step1: "Task Modeling",
      step1sub: "Task Modeling",
      step2: "Challenge ID",
      step2sub: "Challenge ID",
      step3: "Outlier Design",
      step3sub: "Outlier Design",
      center: ["Consumer", "Business", "Market"],
      detail1Title: "1. Deep Insight into Growth Tasks",
      detail1Desc: "Establish a structured task model for growth based on user needs, market potential, and capabilities.",
      detail2Title: "2. Identify Optimal Breakout Challenges",
      detail2Desc: "Interweave consumer insights, competition, and brand resources to find verifiable breakthroughs.",
      detail3Title: "3. Generate Systemic Combinatorial Innovation",
      detail3Desc: "Increase success rates by optimizing combinations of brand, product, experience, channel, and business model."
    }
  };

  const t = content[language];

  return (
    <section id="methodology" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
               {t.title}
             </h2>
             <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
               {t.desc}
             </p>
          </div>
        </FadeInUp>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Diagram */}
          <FadeInUp delay={0.2} className="w-full lg:w-3/5">
            <div className="relative min-h-[400px] flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                 <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 400">
                    <defs>
                      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
                      </marker>
                    </defs>
                    <path d="M200,60 L60,300 L340,300 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                    <path d="M200,60 L70,290" stroke="transparent" markerEnd="url(#arrow)" />
                    <path d="M60,300 L330,300" stroke="transparent" markerEnd="url(#arrow)" />
                    <path d="M340,300 L210,70" stroke="transparent" markerEnd="url(#arrow)" />
                 </svg>

                 {/* Step 1 Node */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-center w-48">
                    <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10 relative">
                       <span className="text-3xl">👁️</span>
                    </div>
                    <h4 className="font-bold mt-2">Step 1 {t.step1}</h4>
                    <p className="text-xs text-gray-500">{t.step1sub}</p>
                 </div>

                 {/* Step 2 Node */}
                 <div className="absolute bottom-4 left-0 -translate-x-4 text-center w-48">
                    <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10 relative">
                       <span className="text-3xl">🎯</span>
                    </div>
                    <h4 className="font-bold mt-2">Step 2 {t.step2}</h4>
                    <p className="text-xs text-gray-500">{t.step2sub}</p>
                 </div>

                 {/* Step 3 Node */}
                 <div className="absolute bottom-4 right-0 translate-x-4 text-center w-48">
                    <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10 relative">
                       <span className="text-3xl">📦</span>
                    </div>
                    <h4 className="font-bold mt-2">Step 3 {t.step3}</h4>
                    <p className="text-xs text-gray-500">{t.step3sub}</p>
                 </div>

                 {/* Center Text */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs text-gray-400 w-32">
                    <ul className="space-y-1">
                       {t.center.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                 </div>
              </div>
            </div>
          </FadeInUp>

          {/* Text Description */}
          <div className="w-full lg:w-2/5 space-y-8 bg-brand-yellow/10 p-8 rounded-xl border border-brand-yellow/20">
             <FadeInUp delay={0.3}>
               <div className="space-y-2">
                  <span className="text-brand-red font-bold text-lg">{t.detail1Title}</span>
                  <p className="text-gray-700 text-sm">{t.detail1Desc}</p>
               </div>
             </FadeInUp>
             <FadeInUp delay={0.4}>
               <div className="space-y-2">
                  <span className="text-brand-red font-bold text-lg">{t.detail2Title}</span>
                  <p className="text-gray-700 text-sm">{t.detail2Desc}</p>
               </div>
             </FadeInUp>
             <FadeInUp delay={0.5}>
               <div className="space-y-2">
                  <span className="text-brand-red font-bold text-lg">{t.detail3Title}</span>
                  <p className="text-gray-700 text-sm">{t.detail3Desc}</p>
               </div>
             </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;