import React from 'react';
import { CLIENTS, TESTIMONIALS } from './constants';
import { useLanguage } from './LanguageContext';

const Clients = () => {
  const { language } = useLanguage();
  const testimonials = TESTIMONIALS[language];

  const content = {
    zh: {
      title: "您可以信赖的引导专家",
      desc: "我们服务过全球500强，也助力过本土独角兽。满足团队个性化需求，激发创新潜力、增强协作效率。",
      testi: "客户评价"
    },
    en: {
      title: "Facilitation Experts You Can Trust",
      desc: "Serving Global Fortune 500s and local unicorns. Meeting personalized team needs to ignite innovation potential and boost collaboration.",
      testi: "Testimonials"
    }
  };
  const t = content[language];

  return (
    <section id="cases" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             {t.desc}
           </p>
        </div>

        <div className="relative w-full mb-20 group">
           <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
           
           <div className="flex animate-scroll will-change-transform">
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

        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-brand-yellow">{t.testi}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
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

export default Clients;