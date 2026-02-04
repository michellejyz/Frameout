import React, { useEffect } from 'react';
import FadeInUp from './FadeInUp';
import { ArrowLeft, Target, Clock, Search, Anchor, Lightbulb, Zap, MousePointerClick, CheckCircle, Users, Award, FileText } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const JtbdSprint = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();

  const content = {
    zh: {
      header: {
        title: "JTBD Switch Sprint",
        subtitle: "战略产品创新方案",
        desc: "针对 B2C 快消品类：从双向转换JTBD任务洞察到 24 个月策略增长概念布局"
      },
      powerMetrics: [
        { value: "3", unit: "周", label: "项目交付周期" },
        { value: "8-12", unit: "个", label: "深度任务访谈" },
        { value: "1", unit: "次", label: "内部项目界定会议" },
        { value: "1", unit: "次", label: "多元整合共创工作坊" },
        { value: "3-5", unit: "个", label: "产品策略级概念" },
        { value: "5", unit: "次", label: "概念迭代验证" },
        { value: "1", unit: "套", label: "高保真营销宣传样张" }
      ],
      mission: {
        title: "核心使命",
        desc: "通过深度解析流入 (Switch-in) 与流出 (Switch-out) 用户的 **JTBD任务动机**，帮助品牌在存量竞争中识别截流机会与赢回路径，快速交付具备商业胜率的 **24个月策略增长概念布局**。"
      },
      cost: {
        title: "轻量级参与",
        desc: "整个冲刺设计为最多 **2 天客户深度共创**，其余环节由导师团队闭环执行。",
        note: "镜像访谈规模：8-12个/组有效样本"
      },
      matrix: {
        title: "项目全流程执行矩阵 (Action Matrix)",
        headers: ["阶段", "形式与方法", "核心产出物"],
        steps: [
          {
            phase: "1. 镜像调研",
            sub: "(Research)",
            icon: <Search className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "定性深度访谈", text: "8-12个/组 (流入/流出镜像样本)" },
              { tag: "短程日记研究", text: "1-2天真实生活场景记录" }
            ],
            outputs: [
              "双向转换动力图谱 (Push/Pull/Anxiety/Habit)",
              "用户失望时刻 (Pains) 与 惊喜时刻 (Gains) 清单",
              "品类进入点 (CEP) 与典型转换路径沉淀"
            ]
          },
          {
            phase: "2. 战略对齐",
            sub: "(Scoping)",
            icon: <Anchor className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "跨部门对齐会", text: "内部核心专家及决策者参与" },
              { tag: "Scoping Session", text: "战略边界与商业目标定义" }
            ],
            outputs: [
              "核心创新商业问题定义 (问题边界与目标)",
              "业务挑战优先级排序与范畴界定",
              "关键成功指标 (North Star Metric) 对齐"
            ]
          },
          {
            phase: "3. 概念生成",
            sub: "(Ideation)",
            icon: <Lightbulb className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "整合共创工作坊", text: "引导师+内部团队+行业专家" },
              { tag: "HMW 命题转化", text: "将商业问题转化为创新命题" }
            ],
            outputs: [
              "战略型产品概念 (Strategic Concept)",
              "24个月落地布局图 (Product Roadmap)",
              "核心创新命题 (HMW) 与 差异化价值主张 (VVP)"
            ],
            image: "https://uploads.onecompiler.io/43w4z3tsq/44bdmvpxs/unnamed%20(1).jpg"
          },
          {
            phase: "4. 压力测试",
            sub: "(Stress Test)",
            icon: <Zap className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "高保真原型迭代", text: "基于营销宣传概念的实战测试" },
              { tag: "迭代反馈循环", text: "5场真实用户压力反馈与样稿迭代" }
            ],
            outputs: [
              "迭代后的战略产品概念与营销样稿",
              "管理层汇报文件 (Management Presentation Deck)",
              "全过程梳理记录与基于反馈的后续行动清单"
            ]
          }
        ]
      },
      sample: {
        title: "战略型产品策略概念样张 (Strategic Sample)",
        image: "https://uploads.onecompiler.io/43w4z3tsq/44bey79jb/Gemini_Generated_Image_6p4m736p4m736p4m.png"
      },
      workshop: {
        title: "战略共创工作坊亮点（重点）",
        desc: "我们采用 **斯坦福设计思维** 为基础的 **谷歌设计冲刺** 结构化共创方法：",
        methods: [
          { title: "⚡️ Lightning Demos", sub: "跨行业拦截灵感" },
          { title: "✍️ Crazy 8s", sub: "快速发散突破" },
          { title: "📐 Solution Sketch", sub: "产出完整闭环方案" },
          { title: "🔴 Dot Voting", sub: "决策者主导筛选" }
        ],
        image: "https://uploads.onecompiler.io/43w4z3tsq/44bdmvpxs/unnamed.jpg"
      },
      roles: {
        title: "谁应参与此冲刺？",
        list: [
          { title: "决策层 (The Decider)", icon: <Award className="w-5 h-5" />, desc: "CMO / 品牌总经理 / 品类负责人。负责 Phase 2 边界锁定及 Phase 4 战略方向决策。" },
          { title: "作战小组 (Sprint Team)", icon: <Users className="w-5 h-5" />, desc: "洞察、战略、品牌策划、R&D、销售、包装设计部门核心骨干。共同将洞察转化为可落地的商业构想。" }
        ]
      },
      commitment: {
        title: "我们的交付承诺",
        text: "拒绝平庸且束之高阁的调研报告。我们交付的是包含 **“调研深度洞察 + 严密商业逻辑 + 真实渠道样稿 + 24个月策略增长概念布局”** 的战略级闭环动议。",
        sub: "确保方案在真实渠道场景下，具备打破购买惯性、驱动行为切换的 **实战压力表现**。",
        seal: "100% 结果导向 · 3周闭环交付"
      },
      cta: {
        title: "让每一次用户的“迟疑”都成为重构增长的基石",
        sub: "联系米朱小助手，获取针对贵司品类的定制化 JTBD 创新案例集",
        btn: "索取详细 PDF 提案"
      }
    },
    en: {
      header: {
        title: "JTBD Switch Sprint",
        subtitle: "Strategic Product Innovation",
        desc: "For B2C FMCG: From bidirectional JTBD Switch insights to 24-month strategic growth concept layout."
      },
      powerMetrics: [
        { value: "3", unit: "Weeks", label: "Delivery Cycle" },
        { value: "8-12", unit: "Ppl", label: "Deep Interviews" },
        { value: "1", unit: "Session", label: "Internal Scoping" },
        { value: "1", unit: "Workshop", label: "Co-creation Session" },
        { value: "3-5", unit: "Concepts", label: "Strategic Concepts" },
        { value: "5", unit: "Rounds", label: "Iteration Loops" },
        { value: "1", unit: "Set", label: "Hi-Fi Marketing Samples" }
      ],
      mission: {
        title: "Core Mission",
        desc: "Through deep analysis of **Switch-in** and **Switch-out** user **JTBD Motivations**, help brands identify interception opportunities and win-back paths, rapidly delivering a **24-month strategic growth concept layout** with high commercial win rates."
      },
      cost: {
        title: "Lightweight Engagement",
        desc: "Designed for max **2 Days of Client Deep Co-creation**, with the rest executed by the mentor team.",
        note: "Mirror Interview Scale: 8-12 valid samples/group"
      },
      matrix: {
        title: "Action Matrix",
        headers: ["Phase", "Methods", "Key Outputs"],
        steps: [
          {
            phase: "1. Mirror Research",
            sub: "(Research)",
            icon: <Search className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "Deep Interviews", text: "8-12/group (In/Out Mirror Samples)" },
              { tag: "Short-term Diary", text: "1-2 days real scenario recording" }
            ],
            outputs: [
              "Switch Dynamics Map (Push/Pull/Anxiety/Habit)",
              "Pains & Gains List",
              "Category Entry Points (CEP) & Conversion Paths"
            ]
          },
          {
            phase: "2. Strategic Scoping",
            sub: "(Scoping)",
            icon: <Anchor className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "Alignment Meeting", text: "Core experts & decision makers" },
              { tag: "Scoping Session", text: "Define boundaries & business goals" }
            ],
            outputs: [
              "Core Innovation Problem Definition",
              "Challenge Priority & Scope",
              "North Star Metric Alignment"
            ]
          },
          {
            phase: "3. Ideation",
            sub: "(Ideation)",
            icon: <Lightbulb className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "Co-creation Workshop", text: "Facilitator + Team + Experts" },
              { tag: "HMW Transformation", text: "Business problems to Innovation prompts" }
            ],
            outputs: [
              "Strategic Product Concepts",
              "24-Month Product Roadmap",
              "Core HMW & Value Proposition (VVP)"
            ],
            image: "https://uploads.onecompiler.io/43w4z3tsq/44bdmvpxs/unnamed%20(1).jpg"
          },
          {
            phase: "4. Stress Test",
            sub: "(Stress Test)",
            icon: <Zap className="w-6 h-6 text-brand-red" />,
            methods: [
              { tag: "Hi-Fi Prototyping", text: "Marketing concept testing" },
              { tag: "Feedback Loop", text: "5 real user feedback rounds" }
            ],
            outputs: [
              "Iterated Strategic Concepts & Samples",
              "Management Presentation Deck",
              "Process Records & Action List"
            ]
          }
        ]
      },
      sample: {
        title: "Strategic Concept Sample",
        image: "https://uploads.onecompiler.io/43w4z3tsq/44bey79jb/Gemini_Generated_Image_6p4m736p4m736p4m.png"
      },
      workshop: {
        title: "Workshop Highlights",
        desc: "We use structured **Google Design Sprint** methods based on **Stanford Design Thinking**:",
        methods: [
          { title: "⚡️ Lightning Demos", sub: "Cross-industry Inspiration" },
          { title: "✍️ Crazy 8s", sub: "Rapid Divergence" },
          { title: "📐 Solution Sketch", sub: "Complete Solution" },
          { title: "🔴 Dot Voting", sub: "Decider Selection" }
        ],
        image: "https://uploads.onecompiler.io/43w4z3tsq/44bdmvpxs/unnamed.jpg"
      },
      roles: {
        title: "Who Should Participate?",
        list: [
          { title: "The Decider", icon: <Award className="w-5 h-5" />, desc: "CMO / GM / Category Lead. Responsible for Phase 2 scoping boundaries and Phase 4 strategic decisions." },
          { title: "Sprint Team", icon: <Users className="w-5 h-5" />, desc: "Core members from Insights, Strategy, Brand, R&D, Sales, Design. Translating insights into actionable business concepts." }
        ]
      },
      commitment: {
        title: "Our Delivery Promise",
        text: "We reject mediocre, shelved research reports. We deliver strategic closed-loop initiatives containing **'Deep Insights + Rigorous Business Logic + Real Channel Samples + 24-Month Roadmap'**.",
        sub: "Ensuring proposals have **Battle-tested Performance** to break purchase inertia in real channel scenarios.",
        seal: "100% Result Oriented · 3-Week Delivery"
      },
      cta: {
        title: "Turn user 'hesitation' into growth opportunities",
        sub: "Contact us for customized JTBD innovation cases.",
        btn: "Request Detailed PDF Proposal"
      }
    }
  };

  const t = content[language];

  // Helper function to render bold text
  const renderBold = (text: string, highlightClass: string = "text-brand-dark") => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className={`${highlightClass} font-bold`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen pt-20 pb-20 font-sans text-[#333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-red mb-8 font-bold transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {t.header.title === "JTBD Switch Sprint" ? (language === 'zh' ? '返回' : 'Back') : 'Back'}
        </button>

        <FadeInUp>
          {/* Header */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border-b-4 border-brand-red mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-brand-red mb-2 tracking-tight">
                    {t.header.title}
                  </h1>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">
                    {t.header.subtitle}
                  </h2>
                  <p className="text-gray-600 font-medium text-lg border-l-4 border-gray-200 pl-4">
                    {t.header.desc}
                  </p>
               </div>
               <img src="https://uploads.onecompiler.io/43w4z3tsq/44bdmvpxs/IMG_1368.PNG" alt="Logo" className="w-32 md:w-48 opacity-90" />
            </div>
          </div>
        </FadeInUp>
        
        {/* Power Numbers */}
        <FadeInUp delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
             {t.powerMetrics.map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center flex flex-col justify-center h-full hover:shadow-md transition-shadow group">
                   <div className="text-2xl md:text-3xl font-black text-brand-red mb-1 group-hover:scale-110 transition-transform">
                     {item.value} <span className="text-xs text-gray-400 font-normal">{item.unit}</span>
                   </div>
                   <div className="text-xs font-bold text-brand-dark leading-tight">{item.label}</div>
                </div>
             ))}
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
           <FadeInUp delay={0.1} className="md:col-span-2">
              <div className="bg-gradient-to-br from-white to-red-50 p-6 rounded-xl border border-red-100 h-full border-l-4 border-l-brand-red shadow-sm">
                 <div className="flex items-center gap-2 mb-3 text-brand-red font-bold text-lg">
                    <Target /> {t.mission.title}
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   {renderBold(t.mission.desc)}
                 </p>
              </div>
           </FadeInUp>
           <FadeInUp delay={0.2} className="md:col-span-1">
              <div className="bg-brand-dark text-white p-6 rounded-xl h-full flex flex-col justify-center shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                 <div className="flex items-center gap-2 mb-3 text-brand-yellow font-bold text-lg">
                    <Clock /> {t.cost.title}
                 </div>
                 <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                   {renderBold(t.cost.desc, "text-brand-yellow")}
                 </p>
                 <div className="mt-auto text-xs opacity-60 font-mono border-t border-white/10 pt-2">
                   {t.cost.note}
                 </div>
              </div>
           </FadeInUp>
        </div>

        {/* Matrix */}
        <FadeInUp delay={0.3}>
          <h2 className="text-2xl font-bold text-brand-dark mb-6 border-l-8 border-brand-red pl-4 flex items-center">
            {t.matrix.title}
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-12">
             <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-200 text-sm font-bold text-gray-500">
                <div className="col-span-2 p-4">{t.matrix.headers[0]}</div>
                <div className="col-span-4 p-4 border-l border-gray-200">{t.matrix.headers[1]}</div>
                <div className="col-span-6 p-4 border-l border-gray-200">{t.matrix.headers[2]}</div>
             </div>
             <div className="divide-y divide-gray-100">
                {t.matrix.steps.map((step, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 group hover:bg-gray-50 transition-colors">
                     {/* Phase */}
                     <div className="md:col-span-2 p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2">
                        <div className="p-2 bg-red-50 rounded-lg shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{step.phase}</div>
                          <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{step.sub}</div>
                        </div>
                     </div>
                     
                     {/* Methods */}
                     <div className="md:col-span-4 p-5 md:p-6 border-t md:border-t-0 md:border-l border-gray-100">
                        <div className="space-y-4">
                           {step.methods.map((m, i) => (
                             <div key={i}>
                                <span className="inline-block bg-[#E3F2FD] text-[#1976D2] border border-[#BBDEFB] px-2 py-0.5 rounded text-xs font-bold mb-1">
                                  {m.tag}
                                </span>
                                <div className="text-sm text-gray-600">{m.text}</div>
                             </div>
                           ))}
                        </div>
                     </div>
                     
                     {/* Outputs */}
                     <div className="md:col-span-6 p-5 md:p-6 border-t md:border-t-0 md:border-l border-gray-100 bg-gray-50/30">
                        <ul className="space-y-2 mb-4">
                          {step.outputs.map((o, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                               <span className="text-brand-red mt-1">•</span>
                               <span>{renderBold(o)}</span>
                            </li>
                          ))}
                        </ul>
                        {step.image && (
                          <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm w-full max-w-[200px] hover:scale-105 transition-transform cursor-pointer">
                            <img src={step.image} alt="Output" className="w-full h-auto" />
                          </div>
                        )}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </FadeInUp>

        {/* Sample A4 */}
        <FadeInUp delay={0.4}>
          <div className="mb-16">
             <h2 className="text-2xl font-bold text-brand-dark mb-8 border-l-8 border-brand-red pl-4">
                {t.sample.title}
             </h2>
             <div className="w-full max-w-4xl mx-auto relative px-4">
                <div className="aspect-[1.414/1] bg-[#fffef2] shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-gray-200 rounded-br-[60px] rounded-bl-[15px] relative flex items-center justify-center p-4 md:p-8 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                   <img src={t.sample.image} alt="Strategy Sample" className="w-[90%] h-auto shadow-md border border-gray-100" />
                </div>
             </div>
          </div>
        </FadeInUp>

        {/* Workshop */}
        <FadeInUp delay={0.5}>
           <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12 border-t-4 border-t-brand-red">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">{t.workshop.title}</h2>
              <p className="text-gray-600 mb-8">{renderBold(t.workshop.desc)}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                 {t.workshop.methods.map((m, i) => (
                   <div key={i} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                      <div className="font-bold text-brand-red text-sm mb-1">{m.title}</div>
                      <div className="text-xs text-gray-500">{m.sub}</div>
                   </div>
                 ))}
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-100 shadow-md">
                <img src={t.workshop.image} alt="Workshop" className="w-full h-auto" />
              </div>
           </div>
        </FadeInUp>

        {/* Roles & Commitment */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
           <FadeInUp delay={0.6} className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
                 <h3 className="text-xl font-bold text-brand-dark mb-6">{t.roles.title}</h3>
                 <div className="space-y-6">
                    {t.roles.list.map((role, i) => (
                      <div key={i} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                         <div className="flex items-center gap-2 font-bold text-brand-red mb-2">
                            {role.icon} {role.title}
                         </div>
                         <div className="text-sm text-gray-600 leading-relaxed">
                            {role.desc}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </FadeInUp>

           <FadeInUp delay={0.7} className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-8 md:p-10 text-white relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="absolute top-4 right-4 text-6xl font-black text-white opacity-5 select-none pointer-events-none">COMMITMENT</div>
                 <h3 className="text-2xl font-bold text-brand-yellow mb-6">{t.commitment.title}</h3>
                 <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                   {renderBold(t.commitment.text, "text-brand-yellow")}
                 </p>
                 <p className="text-gray-400 text-sm mb-8 relative z-10">
                   {renderBold(t.commitment.sub, "text-brand-yellow")}
                 </p>
                 <div className="flex items-center gap-3 text-brand-yellow font-bold text-sm tracking-wide border-t border-white/10 pt-6 mt-auto">
                    <CheckCircle className="w-5 h-5" />
                    {t.commitment.seal}
                 </div>
              </div>
           </FadeInUp>
        </div>

        {/* Footer CTA */}
        <FadeInUp delay={0.8}>
           <div className="bg-brand-dark text-white rounded-xl p-10 text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-400 mb-8">{t.cta.sub}</p>
              <a 
                href="https://work.weixin.qq.com/ca/cawcde838ba2e17a4d" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg"
              >
                 <FileText className="w-5 h-5" /> {t.cta.btn}
              </a>
           </div>
        </FadeInUp>

      </div>
    </div>
  );
};

export default JtbdSprint;