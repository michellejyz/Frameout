import React from 'react';
import { CheckCircle, ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { SERVICES } from './constants';
import FadeInUp from './FadeInUp';
import { useLanguage } from './LanguageContext';

interface ServiceCardProps {
  service: any;
  index: number;
  onNavigate: (page: 'home' | 'bootcamp' | 'sprint') => void;
  lang: 'zh' | 'en';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onNavigate, lang }) => {
  const handleNavigate = () => {
    if (service.title.includes("Bootcamp")) {
      onNavigate('bootcamp');
    } else {
      onNavigate('sprint');
    }
  };

  const labels = {
    zh: { goal: "目标", duration: "周期", cta: "查看详细方案" },
    en: { goal: "Goal", duration: "Duration", cta: "View Program Details" }
  };
  const t = labels[lang];

  // Determine button style based on service color
  const btnStyle = service.color.includes('red') 
    ? "bg-brand-red text-white hover:bg-red-700" 
    : "bg-brand-yellow text-brand-dark hover:bg-yellow-400";

  return (
    <FadeInUp delay={index * 0.1}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={handleNavigate}>
          <div className={`absolute top-0 left-0 w-full h-1 ${service.color} z-10`}></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 transition-colors group-hover:bg-black/50">
               <h3 className="text-3xl font-bold text-white text-center drop-shadow-lg transform transition-transform group-hover:scale-105">{service.title}</h3>
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <h4 className="text-xl font-bold text-brand-dark mb-1">{service.subtitle}</h4>
          {service.tagline && <p className="text-sm text-gray-400 mb-4 font-medium">{service.tagline}</p>}

          <p className="text-gray-500 mb-6 font-medium text-lg border-l-4 border-gray-200 pl-3">{service.descTitle}</p>
          
          <div className="mb-8 flex-grow">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-start gap-3">
                     <div className="mt-1 bg-brand-red/10 p-1.5 rounded-full flex-shrink-0">
                       <CheckCircle size={16} className="text-brand-red" />
                     </div>
                     <div>
                       <span className="block text-xs font-bold uppercase text-gray-400 tracking-wider">{t.goal}</span>
                       <span className="font-bold text-gray-800">{service.goal}</span>
                     </div>
                  </div>
                  <div className="flex items-start gap-3">
                     <div className="mt-1 bg-brand-yellow/20 p-1.5 rounded-full flex-shrink-0">
                       <Calendar size={16} className="text-brand-dark" />
                     </div>
                     <div>
                       <span className="block text-xs font-bold uppercase text-gray-400 tracking-wider">{t.duration}</span>
                       <span className="font-bold text-gray-800">{service.duration}</span>
                     </div>
                  </div>
              </div>
          </div>

          <div className="mt-auto">
              <button 
                onClick={handleNavigate}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0 ${btnStyle}`}
              >
                {t.cta}
                <ArrowRight size={20} />
              </button>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
};

const Services = ({ onNavigate }: { onNavigate: (page: 'home' | 'bootcamp' | 'sprint') => void }) => {
  const { language } = useLanguage();
  const services = SERVICES[language];

  const content = {
    zh: {
      title: "两大出格服务",
      link: "前往国际引导师服务网站查看更多前沿服务和引导师",
      tagline: "增长不是灵感，而是可被复现的项目系统和能力培育系统！"
    },
    en: {
      title: "Two Key FrameOUT Services",
      link: "Visit International Facilitator Website for more services and profiles",
      tagline: "Growth is not about inspiration, it is a replicable project system and capability building system!"
    }
  };
  const t = content[language];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold tracking-wider uppercase">FrameOut Practice</span>
            <h2 className="text-4xl font-bold mt-2 text-brand-dark">{t.title}</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
           {services.map((service, idx) => (
             <ServiceCard key={idx} service={service} index={idx} onNavigate={onNavigate} lang={language} />
           ))}
        </div>

        <FadeInUp delay={0.4}>
          <div className="flex justify-center mb-16">
             <a 
               href="https://facilitator.com/facilitators/michelle-jiayan-zhu/facilitator-profile"
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 text-gray-600 hover:text-brand-red font-bold transition-all border-b-2 border-transparent hover:border-brand-red pb-1"
             >
               {t.link}
               <ExternalLink size={18} className="transform group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={0.6}>
           <div className="text-center px-4">
             <div className="inline-block bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-black text-brand-dark tracking-wide">
                  {t.tagline}
                </h3>
             </div>
           </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Services;