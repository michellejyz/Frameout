import React from 'react';
import { AUDIENCES } from './constants';
import { useLanguage } from './LanguageContext';

const TargetAudience = () => {
  const { language } = useLanguage();
  const audiences = AUDIENCES[language];
  
  const content = {
    zh: { title: "出格，为谁而生？", btn: "预约破格增长策略咨询" },
    en: { title: "Who is FrameOUT for?", btn: "Book Growth Strategy Consulting" }
  };
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">{t.title}</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((aud, i) => (
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
              {t.btn}
            </a>
         </div>
      </div>
    </section>
  );
};

export default TargetAudience;