import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, CheckCircle, ExternalLink, Calendar, ChevronDown, ChevronUp, Mail, MessageCircle, AlertCircle, Loader2, Phone } from 'lucide-react';
import { TEAM_MEMBERS, CLIENTS, TESTIMONIALS, SERVICES, AUDIENCES } from './constants';

// --- Helper Components ---

const FadeInUp = ({ 
  children, 
  delay = 0, 
  className = "",
  style = {}
}: { 
  children?: React.ReactNode, 
  delay?: number, 
  className?: string,
  style?: React.CSSProperties
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ ...style, animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
             <img 
               src="https://outotheframe.oss-cn-shanghai.aliyuncs.com/%E5%87%BA%E6%A0%BClogo.png" 
               alt="FrameOUT Logo" 
               className="h-10 w-auto" 
             />
             <span className="font-bold text-xl tracking-tight hidden md:block text-brand-dark">FrameOUT</span>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center text-sm font-medium">
            <a href="#home" className="text-gray-600 hover:text-brand-red transition-colors">首页</a>
            <a href="#philosophy" className="text-gray-600 hover:text-brand-red transition-colors">核心理念</a>
            <a href="#services" className="text-gray-600 hover:text-brand-red transition-colors">谷歌冲刺/国际顶尖营销工作坊</a>
            <a href="#cases" className="text-gray-600 hover:text-brand-red transition-colors">国内外案例</a>
            <a href="#problem" className="text-gray-600 hover:text-brand-red transition-colors">增长力自测</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-brand-red text-white hover:bg-red-700 transition-colors">
              实战工具下载
            </a>
          </div>

          <div className="lg:hidden flex items-center">
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
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand-red">首页</a>
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand-red">核心理念</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand-red">谷歌冲刺/国际顶尖营销工作坊</a>
            <a href="#cases" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand-red">国内外案例</a>
            <a href="#problem" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-brand-red">增长力自测</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-red font-bold">实战工具下载</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row pt-16">
      {/* Left Content - Now Dark Themed for Impact */}
      <div className="w-full lg:w-[60%] flex items-center justify-center p-8 md:p-16 xl:pl-32 bg-brand-dark relative overflow-hidden z-10">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-2xl w-full relative z-10">
          <h2 className="text-brand-yellow font-bold text-2xl mb-2 tracking-wide animate-fade-in-up" style={{animationDelay: '0.1s'}}>FrameOUT</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-brand-red inline-block transform hover:scale-105 transition-transform duration-300 origin-left">出格</span><br />
            <span className="text-white text-5xl md:text-7xl">才有出路</span>
          </h1>
          <div className="w-24 h-2 bg-brand-red mb-10 animate-fade-in-up shadow-[0_0_15px_rgba(217,48,62,0.6)]" style={{animationDelay: '0.3s'}}></div>
          <p className="text-xl md:text-3xl text-gray-300 font-bold mb-3 animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            引导式咨询和训练营
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-medium animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Consulting Facilitations & Bootcamps
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm md:text-base text-gray-400 animate-fade-in-up font-medium" style={{animationDelay: '0.6s'}}>
             <span className="flex items-center gap-2 text-gray-300"><span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(217,48,62,0.8)]"></span>创新增长引导师 - 米朱 Michelle</span>
             <span className="hidden sm:inline text-gray-600">|</span>
             <span className="flex items-center gap-2 text-gray-300"><span className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(244,196,48,0.8)]"></span>CMO教练引导师 - 高辛 Vickie</span>
          </div>
        </div>
      </div>

      {/* Right Visual - High Impact "Break Out" Design */}
      <div className="w-full lg:w-[40%] bg-brand-red relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] lg:min-h-screen p-8 perspective-1000">
         
         {/* Background Patterns - Cleaner Look */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
         
         {/* Soft Glow / Spotlight */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-brand-yellow/20 to-transparent blur-3xl opacity-50"></div>

         {/* The "Box" (Constraint) - Small, Rigid, Dashed */}
         <div className="absolute z-10 w-48 h-48 border-4 border-white/30 border-dashed rounded-lg transform rotate-0 opacity-50"></div>

         {/* The "Break Out" Animation Container */}
         <div className="relative z-20 flex items-center justify-center">
             
             {/* Ripple / Shockwave Effect */}
             <div className="absolute w-96 h-96 rounded-full border border-white/20 animate-ping opacity-20 animation-duration-3000"></div>
             <div className="absolute w-80 h-80 rounded-full border border-white/10 animate-ping opacity-30 animation-delay-500"></div>

             {/* Main Card */}
             <div className="transform hover:scale-105 transition-transform duration-500 ease-out cursor-pointer relative group">
                 {/* Card Body */}
                 <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0px_20px_50px_rgba(0,0,0,0.4)] transform -rotate-6 translate-x-4 -translate-y-4 border-t border-l border-white/80 relative z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-3xl opacity-50"></div>
                    <img 
                       src="https://outotheframe.oss-cn-shanghai.aliyuncs.com/%E5%87%BA%E6%A0%BClogo.png" 
                       alt="FrameOUT Logo" 
                       className="w-60 md:w-96 h-auto object-contain relative z-10 filter drop-shadow-xl" 
                    />
                 </div>

                 {/* 3D Floating Elements */}
                 <div className="absolute -top-8 -right-8 w-14 h-14 bg-brand-yellow rounded-full shadow-lg z-30 animate-bounce-deep flex items-center justify-center border-2 border-brand-dark">
                     <span className="text-brand-dark font-black text-xl">!</span>
                 </div>
                 <div className="absolute -bottom-6 -left-10 bg-brand-dark text-white px-4 py-2 rounded-full shadow-lg z-30 animate-bounce delay-100 font-bold text-sm transform rotate-6 border-2 border-white">
                   OUT!
                </div>
             </div>
         </div>
         
         {/* Text Content */}
         <div className="relative z-30 text-white text-center mt-16 md:mt-20">
            <h3 className="text-3xl md:text-4xl font-black mb-3 animate-fade-in-up tracking-widest drop-shadow-md" style={{animationDelay: '0.2s'}}>
              激发创新洞察力
            </h3>
            <p className="text-white/80 text-sm md:text-base animate-fade-in-up font-bold" style={{animationDelay: '0.4s'}}>
              Structure × Creativity × Action
            </p>
         </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            当增长陷入没有<br />
            <span className="text-gray-400">“作业”</span>可抄时……
          </h2>
          <p className="text-xl text-gray-300">
            不是你被“卷”住了，而是思维被
            <span className="text-brand-red font-bold px-1 relative inline-block">
              框住了
              <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"></span>
            </span> 
            😵。
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
           {/* Abstract Trapped Scribble Art representation */}
           <div className="bg-white p-4 rounded-sm max-w-sm w-full shadow-2xl transform rotate-2 relative">
              <svg viewBox="0 0 300 300" className="w-full h-auto fill-none">
                 {/* The Box (Constraint) */}
                 <rect x="25" y="25" width="250" height="250" className="stroke-brand-red stroke-[6]" />
                 
                 {/* The Trapped Scribbles (Animated) */}
                 <g className="stroke-black stroke-[3] stroke-linecap-round scribble-anim">
                    {/* Path 1: Hitting top and left */}
                    <path d="M150,150 C100,150 50,100 50,50 M50,50 L50,100 C50,140 30,140 30,200" />
                    
                    {/* Path 2: Hitting right and bottom */}
                    <path d="M150,150 C200,150 250,200 270,150 M270,150 C280,100 250,50 200,30" />
                    
                    {/* Path 3: Chaotic center */}
                    <path d="M100,250 C150,280 200,270 250,250 C270,230 270,270 250,270" />
                    
                    {/* Path 4: Bouncing off walls */}
                    <path d="M40,120 C80,120 100,40 40,40 M260,100 C220,100 260,200 260,260" />

                    {/* Path 5: Loops inside */}
                    <path d="M130,130 C90,90 210,90 170,130 C130,170 170,170 150,200" />
                 </g>
                 
                 {/* Visual "impact" points where lines hit the box */}
                 <circle cx="270" cy="150" r="4" className="fill-brand-red animate-pulse" />
                 <circle cx="50" cy="50" r="4" className="fill-brand-red animate-pulse" />
                 <circle cx="250" cy="270" r="4" className="fill-brand-red animate-pulse" />
                 <circle cx="40" cy="40" r="4" className="fill-brand-red animate-pulse" />
              </svg>
              {/* Label inside the box concept */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold px-2 py-1 rotate-[-10deg] shadow-lg">
                NO EXIT?
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section className="py-24 bg-brand-yellow text-brand-dark text-center">
      <div className="max-w-4xl mx-auto px-4">
        <FadeInUp delay={0.1}>
          <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-70">Top 1% World-Class Facilitator Lead</p>
        </FadeInUp>
        
        <FadeInUp delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            我们带领团队从<span className="border-b-4 border-brand-dark pb-1">底层思维与方法</span>出发
          </h2>
        </FadeInUp>
        
        <FadeInUp delay={0.3}>
          <div className="bg-white/20 inline-block px-8 py-4 rounded-lg backdrop-blur-sm mb-10">
             <p className="text-xl md:text-2xl font-medium">
               通过「任务建模 × 定位挑战 × 增长破格」
             </p>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={0.4}>
          <h3 className="text-4xl md:text-6xl font-black text-brand-red mb-6">
            实现从模仿到超越
          </h3>
        </FadeInUp>
        
        <FadeInUp delay={0.5}>
          <p className="text-xl md:text-2xl font-medium">
            在短周期内，在关键项目上实现“进展”
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const books = [
    { title: "JOBS TO BE DONE", cnTitle: "《待办任务》", author: "Anthony W. Ulwick", color: "bg-white border border-gray-200 text-brand-dark" },
    { title: "THE INNOVATOR'S DILEMMA", cnTitle: "《创新者的窘境》", author: "Clayton M. Christensen", color: "bg-gradient-to-br from-red-900 to-red-950 text-white" },
    { title: "GOOD STRATEGY BAD STRATEGY", cnTitle: "《好战略，坏战略》", author: "Richard Rumelt", color: "bg-gradient-to-br from-gray-900 to-black text-white" },
    { title: "THE POWER OF MOMENTS", cnTitle: "《峰值体验》", author: "Chip Heath & Dan Heath", color: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white" },
    { title: "THE LEAN STARTUP", cnTitle: "《精益创业》", author: "Eric Ries", color: "bg-gradient-to-br from-blue-600 to-blue-800 text-white" },
    { title: "MANAGING TRANSITIONS", cnTitle: "《管理转变》", author: "William Bridges", color: "bg-gradient-to-br from-yellow-400 to-orange-400 text-brand-dark" }
  ];

  return (
    <section id="philosophy" className="flex flex-col md:flex-row min-h-[80vh] w-full">
       {/* Left - Yellow */}
       <div className="w-full md:w-[35%] bg-brand-yellow p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <FadeInUp>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-4 opacity-90">
                用设计师的方法做结构化的创意：
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                我们如何<br/>做到？
              </h1>
            </FadeInUp>
            {/* Decoration */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 border-8 border-white/20 rounded-full"></div>
          </div>
       </div>

       {/* Right - White */}
       <div className="w-full md:w-[65%] bg-white p-8 md:p-12 flex flex-col relative">
          
          {/* Main Visual: Venn Diagram */}
          <div className="flex-grow flex items-center justify-center py-12 relative min-h-[400px]">
             <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center">
                 
                 {/* Left Circle: Structure 
                     Moved text to the RIGHT side (inner) using justify-end
                 */}
                 <div className="absolute left-1/2 -translate-x-[65%] w-48 h-48 md:w-80 md:h-80 rounded-full border-[6px] border-dashed border-brand-red/80 flex items-center justify-end pr-8 md:pr-14 animate-fade-in-up bg-brand-red/5" style={{animationDelay: '0.3s'}}>
                    <span className="text-2xl md:text-3xl font-bold text-brand-red text-right leading-tight">严谨的<br/>结构</span>
                 </div>

                 {/* Right Circle: Inspiration 
                     Moved text to the LEFT side (inner) using justify-start
                 */}
                 <div className="absolute right-1/2 translate-x-[65%] w-48 h-48 md:w-80 md:h-80 rounded-full border-[6px] border-dashed border-brand-yellow flex items-center justify-start pl-8 md:pl-14 animate-fade-in-up bg-brand-yellow/5" style={{animationDelay: '0.5s'}}>
                    <span className="text-2xl md:text-3xl font-bold text-brand-yellow/80 text-left leading-tight">童心的<br/>激发</span>
                 </div>

                 {/* Intersection */}
                 <div className="relative z-20 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                    <div className="bg-white/95 backdrop-blur-md shadow-2xl px-4 py-2 md:px-6 md:py-4 rounded-xl border border-gray-100 transform scale-105">
                       <span className="text-2xl md:text-4xl font-black text-brand-dark whitespace-nowrap">= 创造力</span>
                    </div>
                 </div>
             </div>
          </div>

          {/* Footer: Books */}
          <div className="mt-8 border-t border-gray-100 pt-8">
             <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
               {books.map((book, idx) => (
                 <FadeInUp key={idx} delay={0.8 + idx * 0.1}>
                   <div className={`aspect-[2/3] w-full rounded shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 overflow-hidden flex flex-col p-3 ${book.color}`}>
                      <div className="text-[9px] md:text-[10px] leading-tight opacity-70 mb-1 uppercase tracking-wide">{book.author}</div>
                      <div className="flex-grow flex flex-col justify-start gap-1">
                          <div className="text-xs md:text-sm font-bold leading-tight">{book.title}</div>
                          <div className="text-xs md:text-sm font-bold leading-tight opacity-90">{book.cnTitle}</div>
                      </div>
                   </div>
                 </FadeInUp>
               ))}
             </div>
             <p className="text-right text-xs text-gray-400 mt-4 font-medium">
               底层源自斯坦福的设计思维和谷歌创新创业设计冲刺
             </p>
          </div>
       </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <FadeInUp delay={index * 0.1}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden group">
          <div className={`absolute top-0 left-0 w-full h-1 ${service.color} z-10`}></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
               <h3 className="text-3xl font-bold text-white text-center drop-shadow-lg">{service.title}</h3>
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
          <h4 className="text-xl font-bold text-brand-dark mb-1">{service.subtitle}</h4>
          {service.tagline && <p className="text-sm text-gray-400 mb-4 font-medium">{service.tagline}</p>}

          <p className="text-gray-500 mb-6 font-medium text-lg border-l-4 border-gray-200 pl-3">{service.descTitle}</p>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-start gap-3">
                     <div className="mt-1 bg-brand-red/10 p-1.5 rounded-full flex-shrink-0">
                       <CheckCircle size={16} className="text-brand-red" />
                     </div>
                     <div>
                       <span className="block text-xs font-bold uppercase text-gray-400 tracking-wider">目标</span>
                       <span className="font-bold text-gray-800">{service.goal}</span>
                     </div>
                  </div>
                  <div className="flex items-start gap-3">
                     <div className="mt-1 bg-brand-yellow/20 p-1.5 rounded-full flex-shrink-0">
                       <Calendar size={16} className="text-brand-dark" />
                     </div>
                     <div>
                       <span className="block text-xs font-bold uppercase text-gray-400 tracking-wider">周期</span>
                       <span className="font-bold text-gray-800">{service.duration}</span>
                     </div>
                  </div>
              </div>
          </div>

          <div className="mt-auto">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full py-3 rounded-lg font-bold border-2 transition-all flex items-center justify-center gap-2 ${
                  isExpanded 
                  ? 'border-gray-200 text-gray-500 hover:bg-gray-50' 
                  : 'border-brand-dark bg-brand-dark text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                }`}
              >
                {isExpanded ? '收起详情' : '点击了解详情'}
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {isExpanded && (
                  <a href="#contact" className="block text-center mt-4 text-brand-red font-bold hover:underline animate-fade-in-up">
                      👉 {service.linkText || "立即预约咨询"}
                  </a>
              )}
          </div>
        </div>
      </div>
    </FadeInUp>
  );
};

// New Services Component with Expandable Cards instead of Carousel
const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold tracking-wider uppercase">FrameOut Practice</span>
            <h2 className="text-4xl font-bold mt-2 text-brand-dark">两大出格服务</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
           {SERVICES.map((service, idx) => (
             <ServiceCard key={idx} service={service} index={idx} />
           ))}
        </div>
        
        {/* Added Tagline Section */}
        <FadeInUp delay={0.6}>
           <div className="mt-16 text-center px-4">
             <div className="inline-block bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-black text-brand-dark tracking-wide">
                  增长不是灵感，而是可被复现的项目系统和能力培育系统！
                </h3>
             </div>
           </div>
        </FadeInUp>
      </div>
    </section>
  );
};

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
               出格助力增长的理念贯穿项目冲刺流程
             </h2>
             <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
               用设计师的方法做结构化的创意，底层源自斯坦福的设计思维和谷歌创新设计冲刺。
             </p>
          </div>
        </FadeInUp>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Diagram */}
          <FadeInUp delay={0.2} className="w-full lg:w-3/5">
            <div className="relative min-h-[400px] flex items-center justify-center">
              {/* Simple CSS shape representation of the triangle model from Page 10 */}
              <div className="relative w-full max-w-md aspect-square">
                 {/* Center Lines */}
                 <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 400">
                    <defs>
                      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
                      </marker>
                    </defs>
                    {/* Triangle Path */}
                    <path d="M200,60 L60,300 L340,300 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                    {/* Arrows on edges (Counter-Clockwise Flow: Step 1 -> Step 2 -> Step 3 -> Step 1) */}
                    <path d="M200,60 L70,290" stroke="transparent" markerEnd="url(#arrow)" /> {/* Top to Bottom Left */}
                    <path d="M60,300 L330,300" stroke="transparent" markerEnd="url(#arrow)" /> {/* Bottom Left to Bottom Right */}
                    <path d="M340,300 L210,70" stroke="transparent" markerEnd="url(#arrow)" /> {/* Bottom Right to Top */}
                 </svg>

                 {/* Step 1 Node */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-center w-48">
                    <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10 relative">
                       <span className="text-3xl">👁️</span>
                    </div>
                    <h4 className="font-bold mt-2">Step 1 任务建模</h4>
                    <p className="text-xs text-gray-500">Task Modeling</p>
                 </div>

                 {/* Step 2 Node - Now at Bottom Left (Swapped from Bottom Right) */}
                 <div className="absolute bottom-4 left-0 -translate-x-4 text-center w-48">
                    <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10 relative">
                       <span className="text-3xl">🎯</span>
                    </div>
                    <h4 className="font-bold mt-2">Step 2 破局点定位</h4>
                    <p className="text-xs text-gray-500">Challenge ID</p>
                 </div>

                 {/* Step 3 Node - Now at Bottom Right (Swapped from Bottom Left) */}
                 <div className="absolute bottom-4 right-0 translate-x-4 text-center w-48">
                    <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10 relative">
                       <span className="text-3xl">📦</span>
                    </div>
                    <h4 className="font-bold mt-2">Step 3 破格增长设计</h4>
                    <p className="text-xs text-gray-500">Outlier Design</p>
                 </div>

                 {/* Center Text */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs text-gray-400 w-32">
                    <ul className="space-y-1">
                       <li>消费者</li>
                       <li>商业利益</li>
                       <li>市场势能</li>
                    </ul>
                 </div>
              </div>
            </div>
          </FadeInUp>

          {/* Text Description */}
          <div className="w-full lg:w-2/5 space-y-8 bg-brand-yellow/10 p-8 rounded-xl border border-brand-yellow/20">
             <FadeInUp delay={0.3}>
               <div className="space-y-2">
                  <span className="text-brand-red font-bold text-lg">1. 深度洞察增长的多元任务</span>
                  <p className="text-gray-700 text-sm">从用户需求、市场势能到自身能力，建立增长的结构化任务模型。</p>
               </div>
             </FadeInUp>
             <FadeInUp delay={0.4}>
               <div className="space-y-2">
                  <span className="text-brand-red font-bold text-lg">2. 找到最优破局挑战问题</span>
                  <p className="text-gray-700 text-sm">将消费者洞察、竞争态势与品牌资源等复杂商业考量点交织，找到真正能被执行与验证的突破口。</p>
               </div>
             </FadeInUp>
             <FadeInUp delay={0.5}>
               <div className="space-y-2">
                  <span className="text-brand-red font-bold text-lg">3. 生成系统组合式创新</span>
                  <p className="text-gray-700 text-sm">加大落地成功率，将品牌、产品、体验、渠道与商业模式中选择资源最优组合，构建持续的增长引擎。</p>
               </div>
             </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">团队介绍</h2>
        <div className="space-y-16">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
               <div className="w-full md:w-1/3 relative">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative z-10 bg-gray-200">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Background decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-full h-full ${index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-yellow'} rounded-lg -z-0 opacity-20`}></div>
               </div>
               
               <div className="w-full md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
                    {member.name} <span className="text-xl text-gray-500 font-normal">{member.title}</span>
                  </h3>
                  <div className={`inline-block px-4 py-1 mb-6 text-white font-bold text-sm ${index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-yellow text-brand-dark'}`}>
                    {member.role}
                  </div>
                  
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p className="font-medium text-black">{member.summary}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h4 className="font-bold text-brand-dark mb-3 border-b border-gray-200 pb-2">专业资质</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {member.qualifications.map((q, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-brand-red">•</span> {q}
                            </li>
                          ))}
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold text-brand-dark mb-3 border-b border-gray-200 pb-2">职业经历</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {member.experience.map((e, i) => (
                            <li key={i} className="flex gap-2">
                               <span className="text-brand-yellow">•</span> {e}
                            </li>
                          ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  return (
    <section id="cases" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold mb-4">您可以信赖的引导专家</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             我们服务过全球500强，也助力过本土独角兽。满足团队个性化需求，激发创新潜力、增强协作效率。
           </p>
        </div>

        {/* Client Logos Scrolling Marquee */}
        <div className="relative w-full mb-20 group">
           {/* Fade Edges */}
           <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
           
           <div className="flex animate-scroll will-change-transform">
             {/* Render the list twice to ensure seamless looping */}
             {[...CLIENTS, ...CLIENTS].map((client, i) => (
               <div key={`${client.name}-${i}`} className="flex-shrink-0 w-40 md:w-56 px-4">
                 <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 border border-gray-100 transition-all hover:shadow-md hover:scale-105 group/logo">
                    <img 
                       src={client.logo} 
                       alt={client.name} 
                       className="max-h-12 max-w-full object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300" 
                    />
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-brand-yellow">客户评价</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`p-8 rounded-xl shadow-lg relative ${i === 0 ? 'bg-yellow-50 border-yellow-100' : 'bg-yellow-400 text-brand-dark'}`}>
                 <span className="text-6xl absolute top-4 left-4 opacity-20 font-serif">“</span>
                 <p className="relative z-10 text-lg font-medium leading-relaxed mb-6">
                   {t.content}
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i + 50}/100`} alt="Avatar" />
                    </div>
                    <span className="text-sm font-bold opacity-80">{t.author}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">出格，为谁而生？</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {AUDIENCES.map((aud, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                 <div className="text-4xl mb-6">{aud.icon}</div>
                 <h3 className="text-xl font-bold mb-4">{aud.title}</h3>
                 <p className="text-gray-600 mb-6 flex-grow">{aud.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {aud.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs text-brand-red font-medium border border-gray-200 shadow-sm">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            ))}
         </div>
         <div className="mt-12 text-center">
            <a href="#contact" className="inline-block bg-brand-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
              预约破格增长策略咨询
            </a>
         </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    contactInfo: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "请输入您的姓名";
    if (!formData.email.trim()) {
      newErrors.email = "请输入您的邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }
    if (!formData.message.trim()) newErrors.message = "请告诉我们您面临的挑战";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', contactInfo: '' });
      }, 1500);
    }
  };

  return (
    <div className="bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-2xl h-full flex flex-col justify-center">
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h4 className="text-2xl font-bold mb-3 text-gray-800">提交成功！</h4>
          <p className="text-gray-600 mb-8">我们已经收到您的信息，团队会尽快与您联系。</p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brand-red font-bold hover:underline flex items-center justify-center gap-2 mx-auto"
          >
            发送另一条信息 <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 text-brand-dark">告诉我们您的挑战</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({...formData, name: e.target.value});
                  if (errors.name) setErrors({...errors, name: ''});
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                placeholder="您的称呼"
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1">
                  <AlertCircle size={12} /> <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: ''});
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                placeholder="name@company.com"
              />
              {errors.email && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1">
                  <AlertCircle size={12} /> <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">
                公司 / 组织
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                placeholder="例如：FrameOUT"
              />
            </div>

            {/* Added Contact Info Field */}
            <div>
              <label htmlFor="contactInfo" className="block text-sm font-bold text-gray-700 mb-1">
                微信号 / 手机号
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="contactInfo"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                  className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                  placeholder="方便我们更快联系到您"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                目前的挑战 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({...formData, message: e.target.value});
                  if (errors.message) setErrors({...errors, message: ''});
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                placeholder="请简要描述您团队目前面临的问题..."
              ></textarea>
              {errors.message && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1">
                  <AlertCircle size={12} /> <span>{errors.message}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  提交中...
                </>
              ) : (
                <>
                  发送信息 <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-brand-red text-white py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text & Info */}
            <div className="text-center lg:text-left">
                <div className="inline-block mb-8 relative">
                    <div className="dashed-box absolute -inset-6 opacity-30 pointer-events-none rounded-sm"></div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 relative z-10">想了解更多？</h2>
                </div>
                
                <p className="text-xl md:text-2xl mb-8 font-light text-white/90">
                  FrameOuttt = <span className="font-bold">Structure</span> × <span className="font-bold">Creativity</span> × <span className="font-bold">Action</span>
                </p>
                
                <p className="text-xl md:text-2xl mb-12 font-medium leading-relaxed opacity-90">
                  选个时间，认识下彼此，<br className="hidden md:block" />
                  并告诉我们您此刻的挑战吧！
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
                    <a 
                      href="https://calendly.com/michelleju/meet-with-me-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-yellow text-brand-dark font-bold text-lg px-8 py-4 rounded-lg shadow-[0_10px_0_rgb(180,140,0)] hover:shadow-[0_5px_0_rgb(180,140,0)] hover:translate-y-[5px] transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                    >
                      <Calendar size={24} />
                      直接“约会”点这里
                    </a>
                </div>

                <div className="border-t border-white/20 pt-10">
                    <div className="grid sm:grid-cols-2 gap-6 text-sm md:text-base">
                       <div className="flex items-center justify-center lg:justify-start gap-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                          <div className="w-10 h-10 bg-white text-brand-red rounded-full flex items-center justify-center">
                             <MessageCircle size={20} />
                          </div>
                          <div className="text-left">
                              <div className="text-xs opacity-70 uppercase tracking-wider">微信咨询</div>
                              <div className="font-bold text-lg">design-inno</div>
                          </div>
                       </div>
                       <a href="mailto:jyz@design-inno.com" className="flex items-center justify-center lg:justify-start gap-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                          <div className="w-10 h-10 bg-white text-brand-red rounded-full flex items-center justify-center">
                             <Mail size={20} />
                          </div>
                          <div className="text-left">
                              <div className="text-xs opacity-70 uppercase tracking-wider">Email 联系</div>
                              <div className="font-bold text-lg">jyz@design-inno.com</div>
                          </div>
                       </a>
                    </div>
                </div>
                
                <div className="mt-12 text-xs text-white/40 text-center lg:text-left">
                   ©2025 Proprietary and Confidential by Jiayan Zhu. All Rights Reserved.
                </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:pl-8">
                <ContactForm />
            </div>
         </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-800 scroll-smooth">
      <Navbar />
      <Hero />
      <Problem />
      <ValueProp />
      <Philosophy />
      <Services />
      <Methodology />
      <Team />
      <Clients />
      <TargetAudience />
      <Footer />
    </div>
  );
};

export default App;