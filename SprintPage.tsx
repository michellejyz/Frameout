import React, { useState, useEffect } from 'react';
import FadeInUp from './FadeInUp';
import { ArrowLeft, Flag, Compass, Layers, ArrowRight, Zap, Target, ArrowRightLeft, TrendingUp, CheckCircle, AlertTriangle, MessageSquare, Repeat, BarChart3, Search, Clock, Users, Layout, Anchor, FileText, Fingerprint, Mic2, Palette, Shield, Share2, Check } from 'lucide-react';
import JtbdSprint from './JtbdSprint';
import { useLanguage } from './LanguageContext';

// --- Level 3: More Sprints Content (Kept as is) ---
const MoreSprintsContent = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();

  const content = {
    zh: {
      header: {
        title: "On-Project Sprint 冲刺工作坊",
        subtitle: "标准化模块 × 带练式咨询（5–28 天周期）",
        desc: "基于 Google Design Sprint Methodology 的模块化轻咨询形式，结合出格的「带练式共创（Linked Co-Creation）」方式，聚焦你的核心业务命题，在短周期内完成从问题定义、研究整合到战略与落地验证的闭环。"
      },
      sections: [
        {
          title: "Essential Combination | 必备组合",
          desc: "任何增长项目的起点，确保方向正确与事实依据充分。",
          color: "bg-blue-50 text-blue-800",
          borderColor: "border-blue-200",
          items: [
            {
              title: "Lightening Decision Jam (LDJ)",
              sub: "复杂问题诊断突围",
              days: "0.5–1 天",
              people: "6–12 人",
              desc: "基于国际认证的 LDJ 四步法（收集问题 → 定义问题 → 生成思路 → 价值矩阵筛选），统一认知与优先级，避免跑偏。",
              outputs: ["团队共识", "核心问题定义", "优先级矩阵"]
            },
            {
              title: "JTBD Sprint",
              sub: "任务洞察冲刺",
              days: "2–5 天",
              people: "4–10 人",
              desc: "通过 Desk / Expert / Consumer 多源研究，将零散信息转为结构化洞察，形成可执行的增长假设与证据链。",
              outputs: ["关键洞察", "增长假设", "研究路径"]
            }
          ]
        },
        {
          title: "Top-level Design | 顶层设计",
          desc: "承上启下的核心环节，决定生意的顶层逻辑。",
          color: "bg-brand-yellow/10 text-brand-dark",
          borderColor: "border-brand-yellow",
          items: [
            {
              title: "Marketing Strategy",
              sub: "营销战略开发",
              isAdvanced: true,
              days: "2–4 天",
              people: "6–10 人",
              desc: "以 JTBD × 市场势能 × 品牌能力 为核心，明确定位与机会区，提炼增长路径与关键抓手，承上启下指导后续执行。",
              outputs: ["定位方向", "增长路径", "关键抓手"]
            },
            {
              title: "Portfolio Development",
              sub: "产品布局规划",
              isAdvanced: true,
              days: "5–10 天",
              people: "6–12 人",
              desc: "基于研究证据与商业可行性，优化短-中-长期的产品/项目组合，平衡当期收益与长期价值，明确投资优先级。",
              outputs: ["产品管线清单", "投资优先级", "平衡矩阵"]
            }
          ]
        },
        {
          title: "Advanced Deployment | 进阶部署",
          desc: "将战略转化为具体的沟通、产品与体验布局。",
          color: "bg-red-50 text-brand-red",
          borderColor: "border-red-200",
          items: [
            {
              title: "Integrated Communication",
              sub: "整合沟通规划",
              isAdvanced: true,
              days: "3–7 天",
              people: "6–10 人",
              desc: "整合品牌叙事、内容矩阵与渠道触点，构建「信息 × 场景 × 触点」的叙事系统，确保传播服务于增长目标。",
              outputs: ["品牌主张", "触点路径", "传播蓝图"]
            },
            {
              title: "Design Sprint (Experience-driven)",
              sub: "体验驱动设计冲刺",
              isAdvanced: true,
              days: "5–10 天",
              people: "6–12 人",
              desc: "以研究与战略为依据，打通用户旅程关键触点，联动品牌-产品-渠道，形成可验证的体验闭环与迭代计划。",
              outputs: ["触点优化", "旅程原型", "验证清单"]
            }
          ]
        }
      ],
      footer: {
        note: "注：JTBD Sprint 贯穿组合规划（Portfolio）与体验设计冲刺（Design Sprint）并作为决策依据；On-Project Sprint 采用「带练式共创」交付...",
        cta: "预约定制您的冲刺计划"
      }
    },
    en: {
      header: {
        title: "On-Project Sprint Workshops",
        subtitle: "Standardized Modules × Co-Active Consulting (5–28 Days)",
        desc: "Based on Google Design Sprint Methodology, combining FrameOUT's 'Linked Co-Creation' approach. Focus on your core business challenges to complete the loop from problem definition to strategy and validation in a short cycle."
      },
      sections: [
        {
          title: "Essential Combination",
          desc: "The starting point for any growth project, ensuring correct direction and sufficient factual basis.",
          color: "bg-blue-50 text-blue-800",
          borderColor: "border-blue-200",
          items: [
            {
              title: "Lightening Decision Jam (LDJ)",
              sub: "Complex Problem Diagnosis",
              days: "0.5–1 Day",
              people: "6–12 Ppl",
              desc: "Based on the certified LDJ 4-step method (Collect → Define → Ideate → Prioritize) to unify cognition and priorities.",
              outputs: ["Team Consensus", "Core Problem Def", "Priority Matrix"]
            },
            {
              title: "JTBD Sprint",
              sub: "Task Insight Sprint",
              days: "2–5 Days",
              people: "4–10 Ppl",
              desc: "Transform scattered info into structured insights through multi-source research (Desk/Expert/Consumer).",
              outputs: ["Key Insights", "Growth Hypotheses", "Research Path"]
            }
          ]
        },
        {
          title: "Top-level Design",
          desc: "The core link connecting strategy and execution, deciding the top-level business logic.",
          color: "bg-brand-yellow/10 text-brand-dark",
          borderColor: "border-brand-yellow",
          items: [
            {
              title: "Marketing Strategy",
              sub: "Strategy Development",
              isAdvanced: true,
              days: "2–4 Days",
              people: "6–10 Ppl",
              desc: "Clarify positioning and opportunity zones based on JTBD × Market Momentum × Brand Capability.",
              outputs: ["Positioning", "Growth Path", "Key Drivers"]
            },
            {
              title: "Portfolio Development",
              sub: "Product Portfolio Planning",
              isAdvanced: true,
              days: "5–10 Days",
              people: "6–12 Ppl",
              desc: "Optimize short/mid/long-term portfolios based on evidence and feasibility, balancing current returns with long-term value.",
              outputs: ["Pipeline List", "Investment Priority", "Balance Matrix"]
            }
          ]
        },
        {
          title: "Advanced Deployment",
          desc: "Translating strategy into specific communication, product, and experience layouts.",
          color: "bg-red-50 text-brand-red",
          borderColor: "border-red-200",
          items: [
            {
              title: "Integrated Communication",
              sub: "Integrated Comm. Planning",
              isAdvanced: true,
              days: "3–7 Days",
              people: "6–10 Ppl",
              desc: "Integrate brand narrative, content matrix, and channel touchpoints to build a narrative system that serves growth.",
              outputs: ["Brand Proposition", "Touchpoints", "Comm. Blueprint"]
            },
            {
              title: "Design Sprint",
              sub: "Experience-driven Sprint",
              isAdvanced: true,
              days: "5–10 Days",
              people: "6–12 Ppl",
              desc: "Connect key touchpoints in the user journey based on research and strategy to form verifiable experience loops.",
              outputs: ["Optimization", "Journey Prototype", "Validation List"]
            }
          ]
        }
      ],
      footer: {
        note: "Note: JTBD Sprint runs through Portfolio and Design Sprint as a decision basis; On-Project Sprint uses 'Linked Co-Creation' delivery...",
        cta: "Book Your Custom Sprint Plan"
      }
    }
  };

  const t = content[language];

  return (
    <div className="bg-white min-h-screen pt-20 pb-20 font-sans text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-red mb-8 font-bold transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        {/* Header */}
        <FadeInUp>
          <div className="mb-16 border-b border-gray-100 pb-10">
             <div className="inline-block px-3 py-1 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded mb-4">On-Project Sprints</div>
             <h1 className="text-3xl md:text-5xl font-black mb-4">{t.header.title}</h1>
             <h2 className="text-xl md:text-2xl text-gray-500 font-bold mb-6">{t.header.subtitle}</h2>
             <p className="text-lg text-gray-600 max-w-4xl leading-relaxed border-l-4 border-brand-yellow pl-6">
               {t.header.desc}
             </p>
          </div>
        </FadeInUp>

        {/* Sections */}
        <div className="space-y-16">
           {t.sections.map((section, idx) => (
             <div key={idx}>
                <FadeInUp delay={0.1 * idx}>
                   <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                      <h3 className={`text-2xl font-bold px-4 py-2 rounded-lg ${section.color} border ${section.borderColor}`}>
                        {section.title}
                      </h3>
                      <p className="text-gray-500 font-medium italic flex-grow">
                        {section.desc}
                      </p>
                   </div>
                </FadeInUp>

                <div className="grid md:grid-cols-2 gap-8">
                   {section.items.map((item, iIdx) => (
                     <FadeInUp key={iIdx} delay={0.2 + iIdx * 0.1}>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                           
                           {item.isAdvanced && (
                             <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                               {language === 'zh' ? '进阶' : 'Advanced'}
                             </div>
                           )}

                           <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors">{item.title}</h4>
                                <div className="text-sm font-bold text-gray-400 mt-1">{item.sub}</div>
                              </div>
                           </div>

                           <div className="flex gap-4 text-xs font-bold text-gray-500 mb-6 uppercase tracking-wide">
                              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                                 <Clock size={14} /> {item.days}
                              </div>
                              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                                 <Users size={14} /> {item.people}
                              </div>
                           </div>

                           <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                             {item.desc}
                           </p>

                           <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Layout size={12} /> {language === 'zh' ? '核心产出' : 'Outputs'}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                 {item.outputs.map((out, oIdx) => (
                                   <span key={oIdx} className="text-xs font-bold text-brand-dark bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">
                                     {out}
                                   </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </FadeInUp>
                   ))}
                </div>
             </div>
           ))}
        </div>

        {/* Footer Note & CTA */}
        <FadeInUp delay={0.6}>
           <div className="mt-20 pt-10 border-t border-gray-200">
              <div className="bg-brand-dark text-white rounded-2xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="relative z-10">
                     <p className="text-gray-400 text-sm md:text-base mb-8 font-mono opacity-80 max-w-3xl mx-auto">
                       {t.footer.note}
                     </p>
                     
                     <a 
                       href="#contact" 
                       onClick={(e) => {
                         e.preventDefault();
                         const contactSection = document.getElementById('contact');
                         if (contactSection) {
                             contactSection.scrollIntoView({ behavior: 'smooth' });
                         }
                       }}
                       className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-yellow-400 text-brand-dark text-lg font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                     >
                        {t.footer.cta} <ArrowRight />
                     </a>
                  </div>
              </div>
           </div>
        </FadeInUp>

      </div>
    </div>
  );
};

// --- Level 3: Brand Sprint Content (Redesigned) ---
const BrandSprintContent = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const handleShare = async () => {
    const url = window.location.href;
    const title = 'FrameOUT - Brand Sprint';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: 'Check out the Brand Sprint by FrameOUT',
          url
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const content = {
    zh: {
      header: {
        tag: "Brand Operating System",
        title: "不只是做包装，",
        titleHighlight: "而是构建品牌操作系统",
        subtitle: "The Operating System for Long-term Brand Growth",
        desc: "品牌不是 Logo，不是 Slogan，而是一套能长期生长、能自我判断、能高效表达的底层系统。"
      },
      symptoms: {
        title: "您的品牌是否面临这些「内耗」？",
        list: [
          { icon: <Target />, title: "直觉发散，决策无据", desc: "想法很多且都有道理，但无法凝练成一条清晰的“决策主线”。" },
          { icon: <Mic2 />, title: "创始人失语", desc: "创始人的初心和个人魅力，无法转化为团队能用的“品牌语言”。" },
          { icon: <Shield />, title: "表达断层", desc: "产品、运营、销售各自为战，对外形象割裂，内部沟通成本极高。" }
        ]
      },
      roadmap: {
        title: "由内而外的 5 阶段构建",
        steps: [
          { step: "01", title: "Core Story", desc: "内核叙事", color: "bg-brand-red text-white" },
          { step: "02", title: "Comm. System", desc: "沟通话语", color: "bg-brand-yellow text-brand-dark" },
          { step: "03", title: "Validation", desc: "视觉/产品验证", color: "bg-brand-dark text-white" },
          { step: "04", title: "Sprints", desc: "季度设计冲刺", color: "bg-gray-100 text-gray-500" },
          { step: "05", title: "Review", desc: "年度战略对齐", color: "bg-gray-100 text-gray-500" }
        ]
      },
      dualCore: {
        title: "双核驱动：灵魂与表达",
        left: {
          title: "Phase 1: 品牌内核叙事",
          sub: "回答：我们是谁？(The Soul)",
          desc: "把品牌“内心已经有的东西”，变成一套清楚、稳定、可使用的核心叙事系统。",
          highlights: ["创始人日记 (Founder Diary)", "品牌人格 (Archetype)", "差异化禁区 (Taboos)"]
        },
        right: {
          title: "Phase 2: 沟通与信息系统",
          sub: "回答：如何被理解？(The Voice)",
          desc: "将“内在共识”转化为“外在语言”，确保从产品命名到详情页的一致性。",
          highlights: ["信息阶梯 (Message Hierarchy)", "沟通红黑榜 (Do & Don'ts)", "电商详情页逻辑 (PDP Logic)"]
        }
      },
      cta: "预约定制您的品牌系统冲刺",
      share: "分享页面",
      copied: "链接已复制"
    },
    en: {
      header: {
        tag: "Brand Operating System",
        title: "Not just Packaging,",
        titleHighlight: "Building a Brand OS",
        subtitle: "The Operating System for Long-term Brand Growth",
        desc: "A brand is not a Logo or Slogan. It's an underlying system capable of growth, judgment, and efficient expression."
      },
      symptoms: {
        title: "Is your brand facing these issues?",
        list: [
          { icon: <Target />, title: "Divergent Intuition", desc: "Many ideas, but no clear 'decision backbone'." },
          { icon: <Mic2 />, title: "Founder Silenced", desc: "Founder's charisma fails to translate into a usable 'brand language'." },
          { icon: <Shield />, title: "Expression Gap", desc: "Sales, Product, and Ops represent the brand differently." }
        ]
      },
      roadmap: {
        title: "5-Stage Build: Inside Out",
        steps: [
          { step: "01", title: "Core Story", desc: "Narrative", color: "bg-brand-red text-white" },
          { step: "02", title: "Comm. System", desc: "Communication", color: "bg-brand-yellow text-brand-dark" },
          { step: "03", title: "Validation", desc: "Visual/Product", color: "bg-brand-dark text-white" },
          { step: "04", title: "Sprints", desc: "Design Sprints", color: "bg-gray-100 text-gray-500" },
          { step: "05", title: "Review", desc: "Alignment", color: "bg-gray-100 text-gray-500" }
        ]
      },
      dualCore: {
        title: "Dual Core: Soul & Expression",
        left: {
          title: "Phase 1: Core Storytelling",
          sub: "Answer: Who are we? (The Soul)",
          desc: "Turn what's 'in the heart' into a clear, stable, usable core narrative system.",
          highlights: ["Founder Diary", "Brand Archetype", "Differentiation Taboos"]
        },
        right: {
          title: "Phase 2: Communication System",
          sub: "Answer: How are we understood? (The Voice)",
          desc: "Translate 'internal consensus' into 'external language', ensuring consistency.",
          highlights: ["Message Hierarchy", "Do & Don'ts", "PDP Logic"]
        }
      },
      cta: "Book Your Brand System Sprint",
      share: "Share",
      copied: "Link Copied"
    }
  };

  const t = content[language];

  return (
    <div className="bg-white min-h-screen pt-20 pb-20 font-sans text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-brand-red font-bold transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-brand-dark rounded-full text-sm font-bold transition-colors"
          >
             {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
             {copied ? t.copied : t.share}
          </button>
        </div>

        {/* Hero Section */}
        <FadeInUp>
          <div className="text-center mb-16 max-w-4xl mx-auto">
             <div className="inline-block px-4 py-1.5 rounded-full bg-brand-dark text-brand-yellow text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-pulse">
               {t.header.tag}
             </div>
             <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
               {t.header.title}<br/>
               <span className="text-brand-red relative inline-block">
                 {t.header.titleHighlight}
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                 </svg>
               </span>
             </h1>
             <p className="text-xl text-gray-500 font-medium mb-8">
               {t.header.subtitle}
             </p>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
               {t.header.desc}
             </p>
          </div>
        </FadeInUp>

        {/* Diagnosis / Symptoms */}
        <FadeInUp delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20 border border-gray-100">
             <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-2">
               <AlertTriangle className="text-brand-red" /> {t.symptoms.title}
             </h3>
             <div className="grid md:grid-cols-3 gap-8">
                {t.symptoms.list.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-red-50 text-brand-red rounded-lg flex items-center justify-center mb-4">
                        {React.cloneElement(item.icon, { size: 24 })}
                     </div>
                     <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </FadeInUp>

        {/* Roadmap Visualization */}
        <FadeInUp delay={0.3}>
          <div className="mb-24">
             <h3 className="text-2xl font-bold text-center mb-12">{t.roadmap.title}</h3>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {t.roadmap.steps.map((step, i) => (
                   <div key={i} className={`rounded-xl p-4 flex flex-col justify-between h-32 md:h-40 relative overflow-hidden group hover:-translate-y-1 transition-transform ${step.color}`}>
                      <span className="text-4xl font-black opacity-20">{step.step}</span>
                      <div className="relative z-10">
                        <div className="font-bold text-lg leading-tight mb-1">{step.title}</div>
                        <div className="text-xs opacity-80">{step.desc}</div>
                      </div>
                      {i < 4 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 w-4 h-4 bg-white rotate-45 z-20 border-r border-t border-gray-100"></div>
                      )}
                   </div>
                ))}
             </div>
          </div>
        </FadeInUp>

        {/* Dual Core Deep Dive */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
           {/* Phase 1 */}
           <FadeInUp delay={0.4} className="h-full">
              <div className="bg-white border-2 border-brand-red rounded-2xl p-8 h-full flex flex-col shadow-[0_10px_30px_rgba(217,48,62,0.1)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Fingerprint size={120} />
                 </div>
                 <div className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-bold rounded mb-4 w-fit">CORE</div>
                 <h3 className="text-3xl font-black mb-1">{t.dualCore.left.title}</h3>
                 <div className="text-brand-red font-bold mb-6 text-sm uppercase tracking-wide">{t.dualCore.left.sub}</div>
                 <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                   {t.dualCore.left.desc}
                 </p>
                 <div className="mt-auto space-y-3">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Star Modules</div>
                    {t.dualCore.left.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                         <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                         <span className="text-brand-dark font-bold text-sm">{h}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </FadeInUp>

           {/* Phase 2 */}
           <FadeInUp delay={0.5} className="h-full">
              <div className="bg-white border-2 border-brand-yellow rounded-2xl p-8 h-full flex flex-col shadow-[0_10px_30px_rgba(244,196,48,0.1)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <MessageSquare size={120} />
                 </div>
                 <div className="inline-block px-3 py-1 bg-brand-yellow text-brand-dark text-xs font-bold rounded mb-4 w-fit">EXPRESSION</div>
                 <h3 className="text-3xl font-black mb-1">{t.dualCore.right.title}</h3>
                 <div className="text-brand-yellow font-bold mb-6 text-sm uppercase tracking-wide text-yellow-600">{t.dualCore.right.sub}</div>
                 <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                   {t.dualCore.right.desc}
                 </p>
                 <div className="mt-auto space-y-3">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Star Modules</div>
                    {t.dualCore.right.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                         <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                         <span className="text-brand-dark font-bold text-sm">{h}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </FadeInUp>
        </div>

        {/* Footer CTA */}
        <FadeInUp delay={0.6}>
           <div className="mt-12 text-center">
              <a 
                href="#contact" 
                onClick={(e) => {
                 e.preventDefault();
                 const contactSection = document.getElementById('contact');
                 if (contactSection) {
                     contactSection.scrollIntoView({ behavior: 'smooth' });
                 }
                }}
                className="inline-flex items-center gap-3 bg-brand-dark hover:bg-gray-800 text-white text-lg font-bold px-12 py-5 rounded-full shadow-2xl hover:-translate-y-1 transition-all"
              >
                 {t.cta} <ArrowRight />
              </a>
           </div>
        </FadeInUp>

      </div>
    </div>
  );
};

// --- Level 2: Selection Page (Main SprintPage) ---
const SprintPage = ({ onBack, onNavigate }: { onBack: () => void, onNavigate?: (page: 'home' | 'bootcamp' | 'sprint') => void }) => {
  const [subPage, setSubPage] = useState<'jtbd' | 'brand' | 'more' | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content for the selection cards
  const content = {
    zh: {
      title: "On-Project Sprint 冲刺方案",
      subtitle: "选择最适合您当前挑战的冲刺路径",
      back: "返回首页",
      moreLink: "更多冲刺方案 (More Sprint Programs)",
      cards: [
        {
          id: 'jtbd',
          title: "JTBD Switch Sprint",
          sub: "战略产品创新方案",
          desc: "针对 B2C 快消品类：从双向转换 JTBD 任务洞察到 24 个月策略增长概念布局。",
          color: "bg-brand-red",
          icon: <ArrowRightLeft className="w-8 h-8 text-white" />,
          features: ["8-12个镜像访谈", "战略概念生成", "真实渠道样稿", "24个月布局"]
        },
        {
          id: 'brand',
          title: "Brand Sprint",
          sub: "品牌与沟通系统项目",
          desc: "建立一套能长期生长、能自我判断、能高效表达的品牌底层操作系统。",
          color: "bg-brand-yellow",
          icon: <TrendingUp className="w-8 h-8 text-brand-dark" />,
          features: ["品牌内核叙事", "沟通话语体系", "视觉与产品表达", "季度设计冲刺"]
        }
      ]
    },
    en: {
      title: "On-Project Sprint Tracks",
      subtitle: "Choose the path that fits your challenge",
      back: "Back Home",
      moreLink: "More Sprint Programs",
      cards: [
        {
          id: 'jtbd',
          title: "JTBD Switch Sprint",
          sub: "Strategic Product Innovation",
          desc: "For B2C FMCG: From JTBD Switch Insights to 24-Month Strategic Growth Layout.",
          color: "bg-brand-red",
          icon: <ArrowRightLeft className="w-8 h-8 text-white" />,
          features: ["Mirror Interviews", "Strategic Concepts", "Channel Mockups", "24-Month Roadmap"]
        },
        {
          id: 'brand',
          title: "Brand Sprint",
          sub: "Brand & Communication System",
          desc: "Build a brand operating system capable of long-term growth, self-judgment, and efficient expression.",
          color: "bg-brand-yellow",
          icon: <TrendingUp className="w-8 h-8 text-brand-dark" />,
          features: ["Core Storytelling", "Comm. System", "Visual Expression", "Design Sprints"]
        }
      ]
    }
  };

  const t = content[language];

  // Routing Logic
  if (subPage === 'jtbd') {
    return <JtbdSprint onBack={() => setSubPage(null)} />;
  }

  if (subPage === 'brand') {
    return <BrandSprintContent onBack={() => setSubPage(null)} />;
  }
  
  if (subPage === 'more') {
    return <MoreSprintsContent onBack={() => setSubPage(null)} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 flex flex-col">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex flex-col">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-brand-red mb-8 font-bold transition-colors w-fit group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {t.back}
          </button>

          <div className="text-center mb-16">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">{t.title}</h1>
              <p className="text-xl text-gray-500">{t.subtitle}</p>
            </FadeInUp>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
             {t.cards.map((card, idx) => (
               <FadeInUp key={card.id} delay={idx * 0.2} className="h-full">
                  <div 
                    onClick={() => setSubPage(card.id as 'jtbd' | 'brand')}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group h-full border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                     {/* Header Color Bar */}
                     <div className={`h-32 ${card.color} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
                        <div className="transform scale-150 opacity-20 absolute -right-10 -bottom-10 rotate-12">
                           {card.icon}
                        </div>
                        <div className="relative z-10 p-4 bg-white/20 backdrop-blur-sm rounded-full">
                           {card.icon}
                        </div>
                     </div>

                     <div className="p-8 flex flex-col flex-grow">
                        <h2 className="text-2xl font-bold text-brand-dark mb-1">{card.title}</h2>
                        <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${card.id === 'jtbd' ? 'text-brand-red' : 'text-brand-yellow'}`}>
                          {card.sub}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {card.desc}
                        </p>

                        <div className="mt-auto space-y-3">
                           {card.features.map((feat, i) => (
                             <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-gray-50 p-3 rounded-lg">
                                <Zap size={14} className={card.id === 'jtbd' ? 'text-brand-red' : 'text-brand-yellow'} fill="currentColor" />
                                {feat}
                             </div>
                           ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end text-brand-dark font-bold group-hover:gap-2 transition-all">
                           {language === 'zh' ? '查看详情' : 'View Details'} <ArrowRight size={20} />
                        </div>
                     </div>
                  </div>
               </FadeInUp>
             ))}
          </div>

          <FadeInUp delay={0.4}>
             <div className="mt-16 text-center">
                <button 
                  onClick={() => setSubPage('more')}
                  className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-brand-red transition-all border-b-2 border-transparent hover:border-brand-red pb-1"
                >
                  {t.moreLink} <ArrowRight size={16} />
                </button>
             </div>
          </FadeInUp>
       </div>
    </div>
  );
};

export default SprintPage;