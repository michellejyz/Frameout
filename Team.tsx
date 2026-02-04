import React from 'react';
import { TEAM_MEMBERS } from './constants';
import { useLanguage } from './LanguageContext';
import { ExternalLink } from 'lucide-react';

const Team = () => {
  const { language } = useLanguage();
  const members = TEAM_MEMBERS[language];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">{language === 'zh' ? '团队介绍' : 'Our Team'}</h2>
        <div className="space-y-16">
          {members.map((member, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
               <div className="w-full md:w-1/3 relative">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative z-10 bg-gray-200">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -bottom-4 -right-4 w-full h-full ${index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-yellow'} rounded-lg -z-0 opacity-20`}></div>
               </div>
               
               <div className="w-full md:w-2/3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">
                      {member.name} <span className="text-xl text-gray-500 font-normal">{member.title}</span>
                    </h3>
                    {index === 0 && (
                      <a 
                        href="https://facilitator.com/facilitators/michelle-jiayan-zhu/facilitator-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 transform -rotate-2 bg-brand-yellow text-brand-dark text-xs md:text-sm font-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border-2 border-brand-dark rounded-sm hover:text-brand-red cursor-pointer"
                        title="Click to view official profile"
                      >
                        <span>{language === 'zh' ? '查看 AJ&Smart 官方认证档案 🏆' : 'View Official AJ&Smart Profile 🏆'}</span>
                        <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                  <div className={`inline-block px-4 py-1 mb-6 text-white font-bold text-sm ${index % 2 === 0 ? 'bg-brand-red' : 'bg-brand-yellow text-brand-dark'}`}>
                    {member.role}
                  </div>
                  
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p className="font-medium text-black">{member.summary}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h4 className="font-bold text-brand-dark mb-3 border-b border-gray-200 pb-2">{language === 'zh' ? '专业资质' : 'Qualifications'}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {member.qualifications.map((q, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-brand-red">•</span> {q}
                            </li>
                          ))}
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold text-brand-dark mb-3 border-b border-gray-200 pb-2">{language === 'zh' ? '职业经历' : 'Experience'}</h4>
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

export default Team;