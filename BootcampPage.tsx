import React, { useEffect } from 'react';
import FadeInUp from './FadeInUp';
import { ArrowLeft, Target, Lightbulb, Flag, Users, Zap, Layers } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BootcampPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { language } = useLanguage();

  const data = {
    zh: {
      title: "市场营销训练营",
      subtitle: "Marketing Bootcamps",
      tagline: "系统训练 × 能力构建",
      intro: "所有训练营 Bootcamp 均基于 **设计思维 Design Thinking** 原则设计，通过结构化框架 + 实战演练 + 团队反思，让学习转化为可持续的创新与营销能力。",
      back: "返回首页",
      advanced: "进阶",
      categories: [
        {
          id: 'insight',
          title: '洞察系列 Insight',
          modules: [
            { title: "洞察基础 Insight Foundation", desc: "掌握从观察到洞察的完整路径，学会从表象中挖掘动机、从数据中提炼意义。", isAdvanced: false },
            { title: "结果导向的待办任务洞察 JTBD & ODI", desc: "系统掌握 JTBD（待办任务）与 ODI（结果驱动创新）方法，提升识别“真实需求”的能力。", isAdvanced: true },
            { title: "行为转化力的待办任务洞察 Switch Model", desc: "理解驱动用户转变的触发因素，为创新策略和沟通提供心理与行为双维度支撑。", isAdvanced: true }
          ]
        },
        {
          id: 'innovation',
          title: '创新系列 Innovation',
          modules: [
            { title: "设计思维 Design Thinking", desc: "通过 Empathize → Define → Ideate → Prototype → Test 五步法，训练以用户为中心的创新过程。", isAdvanced: false },
            { title: "创新流程管理 Innovation Process", desc: "建立概念生成到商业落地的跨部门输入输出的创新和风险管理流程机制，让创新成为高效流水线。", isAdvanced: false },
            { title: "持续性式创新 Sustainable Innovation", desc: "支持持续稳定增长的创新生态和产品支持设计。", isAdvanced: false },
            { title: "颠覆式创新 Disruptive Innovation", desc: "以跨界思维与趋势洞察为驱动力，构建颠覆式增长路径与商业模式。", isAdvanced: true }
          ]
        },
        {
          id: 'brand',
          title: '品牌系列 Brand',
          modules: [
            { title: "品牌故事构建 Brand Story", desc: "从用户视角出发，讲出能打动人心的品牌叙事。", isAdvanced: false },
            { title: "品牌钥匙建设 Brand Key", desc: "明确品牌使命、价值、个性与差异化，形成品牌持续增长的核心识别系统。", isAdvanced: true }
          ]
        },
        {
          id: 'strategy',
          title: '策略与教练 Strategy & Coaching',
          modules: [
            { title: "市场营销策略 Marketing Strategy", desc: "将洞察与创意成果转化为可执行的增长策略及明确实现路径和资源分配。", isAdvanced: true },
            { title: "营销经理人教练和沙龙 CMO Coaching", desc: "面向战略与创新负责人的一对一辅导，聚焦实战落地与团队带动。邀请经理人、高管、咨询师，定期交流策略、创新与增长实践。", isAdvanced: false }
          ]
        }
      ],
      footerTitle: "想为团队定制专属训练营？",
      footerDesc: "我们可以根据您团队目前的具体挑战和能力现状，组合上述模块，定制最适合的内部培训方案。",
      cta: "联系我们获取方案"
    },
    en: {
      title: "Marketing Bootcamps",
      subtitle: "Systematic Training × Capability Building",
      tagline: "",
      intro: "All Bootcamps are designed based on **Design Thinking** principles, using structured frameworks + practical drills + team reflection to transform learning into sustainable innovation and marketing capabilities.",
      back: "Back Home",
      advanced: "Advanced",
      categories: [
        {
          id: 'insight',
          title: 'Insight Series',
          modules: [
            { title: "Insight Foundation", desc: "Master the path from observation to insight, learning to dig motives from appearances and extract meaning from data.", isAdvanced: false },
            { title: "JTBD & ODI", desc: "Systematically master JTBD and ODI methods to improve the ability to identify 'real needs'.", isAdvanced: true },
            { title: "Switch Model", desc: "Understand triggers driving user change, providing psychological and behavioral support for innovation strategy.", isAdvanced: true }
          ]
        },
        {
          id: 'innovation',
          title: 'Innovation Series',
          modules: [
            { title: "Design Thinking", desc: "Train user-centric innovation process via Empathize → Define → Ideate → Prototype → Test.", isAdvanced: false },
            { title: "Innovation Process", desc: "Establish cross-functional innovation and risk management processes from concept to commercialization.", isAdvanced: false },
            { title: "Sustainable Innovation", desc: "Design for innovation ecosystems and product support that sustain stable growth.", isAdvanced: false },
            { title: "Disruptive Innovation", desc: "Build disruptive growth paths and business models driven by cross-border thinking and trend insights.", isAdvanced: true }
          ]
        },
        {
          id: 'brand',
          title: 'Brand Series',
          modules: [
            { title: "Brand Story", desc: "Tell touching brand narratives from the user's perspective.", isAdvanced: false },
            { title: "Brand Key", desc: "Clarify brand mission, values, personality, and differentiation to form a core identity system for sustained growth.", isAdvanced: true }
          ]
        },
        {
          id: 'strategy',
          title: 'Strategy & Coaching',
          modules: [
            { title: "Marketing Strategy", desc: "Transform insights and ideas into actionable growth strategies with clear paths and resource allocation.", isAdvanced: true },
            { title: "CMO Coaching", desc: "One-on-one coaching for strategy and innovation leaders, focusing on implementation and team leadership.", isAdvanced: false }
          ]
        }
      ],
      footerTitle: "Customize a Bootcamp for your team?",
      footerDesc: "We can combine the above modules to tailor the most suitable internal training plan based on your team's current challenges.",
      cta: "Contact Us"
    }
  };

  const t = data[language];
  const catStyles = [
    { color: 'text-blue-600', bgColor: 'bg-blue-50', icon: <Target className="w-6 h-6" /> },
    { color: 'text-brand-yellow', bgColor: 'bg-yellow-50', icon: <Lightbulb className="w-6 h-6" /> },
    { color: 'text-brand-red', bgColor: 'bg-red-50', icon: <Flag className="w-6 h-6" /> },
    { color: 'text-purple-600', bgColor: 'bg-purple-50', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-red mb-8 font-bold transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {t.back}
        </button>

        <FadeInUp>
          <div className="mb-16 border-b border-gray-100 pb-10">
            <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
              {t.title} <span className="text-brand-yellow">{t.subtitle}</span>
            </h1>
            <p className="text-xl font-bold text-gray-500 mb-6">{t.tagline}</p>
            <p className="text-gray-600 max-w-4xl text-lg leading-relaxed border-l-4 border-brand-yellow pl-4 bg-yellow-50/50 py-4 pr-4 rounded-r-lg">
               {language === 'zh' ? (
                 <>所有训练营 Bootcamp 均基于 <strong>设计思维 Design Thinking</strong> 原则设计，通过结构化框架 + 实战演练 + 团队反思，让学习转化为可持续的创新与营销能力。</>
               ) : (
                 <>All Bootcamps are designed based on <strong>Design Thinking</strong> principles, using structured frameworks + practical drills + team reflection.</>
               )}
            </p>
          </div>
        </FadeInUp>

        <div className="space-y-16 mb-20">
          {t.categories.map((cat, catIdx) => {
            const style = catStyles[catIdx % catStyles.length];
            return (
              <div key={cat.id}>
                <FadeInUp delay={catIdx * 0.1}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-lg ${style.bgColor} ${style.color}`}>
                      {style.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-brand-dark">{cat.title}</h2>
                  </div>
                </FadeInUp>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.modules.map((module, modIdx) => (
                    <FadeInUp key={modIdx} delay={0.2 + modIdx * 0.1}>
                      <div className="h-full bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden">
                        
                        {module.isAdvanced && (
                          <div className="absolute top-0 right-0 bg-brand-dark text-brand-yellow text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            {t.advanced}
                          </div>
                        )}

                        <div className={`w-12 h-12 rounded-full ${style.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={style.color}>
                            {module.isAdvanced ? <Zap size={20} fill="currentColor" className="opacity-80" /> : <Layers size={20} />}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                          {module.desc}
                        </p>
                        
                        <div className={`w-0 group-hover:w-full h-1 ${style.bgColor.replace('bg-', 'bg-').replace('50', '400')} absolute bottom-0 left-0 transition-all duration-500`}></div>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <FadeInUp delay={0.5}>
          <div className="bg-brand-dark text-white rounded-2xl p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-6">{t.footerTitle}</h2>
               <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                 {t.footerDesc}
               </p>
               <a 
                 href="mailto:jyz@design-inno.com" 
                 className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-brand-red transition-colors shadow-lg hover:shadow-xl"
               >
                 {t.cta} <ArrowLeft className="rotate-180" size={20} />
               </a>
             </div>
          </div>
        </FadeInUp>

      </div>
    </div>
  );
};

export default BootcampPage;