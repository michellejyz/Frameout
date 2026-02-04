import React from 'react';
import { Calendar, MessageCircle, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: "想了解更多？",
      subtitle: "选个时间，认识下彼此，\n并告诉我们您此刻的挑战吧！",
      book: "直接“约会”点这里",
      wechat: "微信咨询",
      email: "Email 联系"
    },
    en: {
      title: "Want to know more?",
      subtitle: "Pick a time to meet, \nand tell us your current challenge!",
      book: "Book a Meeting",
      wechat: "WeChat Inquiry",
      email: "Email Contact"
    }
  };
  const t = content[language];

  return (
    <footer id="contact" className="relative bg-brand-red text-white py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
                <div className="inline-block mb-8 relative">
                    <div className="dashed-box absolute -inset-6 opacity-30 pointer-events-none rounded-sm"></div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 relative z-10">{t.title}</h2>
                </div>
                
                <p className="text-xl md:text-2xl mb-8 font-light text-white/90">
                  FrameOuttt = <span className="font-bold">Structure</span> × <span className="font-bold">Creativity</span> × <span className="font-bold">Action</span>
                </p>
                
                <p className="text-xl md:text-2xl mb-12 font-medium leading-relaxed opacity-90 whitespace-pre-line">
                  {t.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
                    <a 
                      href="https://calendly.com/michelleju/meet-with-me-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-yellow text-brand-dark font-bold text-lg px-8 py-4 rounded-lg shadow-[0_10px_0_rgb(180,140,0)] hover:shadow-[0_5px_0_rgb(180,140,0)] hover:translate-y-[5px] transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                    >
                      <Calendar size={24} />
                      {t.book}
                    </a>
                </div>

                <div className="border-t border-white/20 pt-10">
                    <div className="grid sm:grid-cols-2 gap-6 text-sm md:text-base">
                       <div className="flex items-center justify-center lg:justify-start gap-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                          <div className="w-10 h-10 bg-white text-brand-red rounded-full flex items-center justify-center">
                             <MessageCircle size={20} />
                          </div>
                          <div className="text-left">
                              <div className="text-xs opacity-70 uppercase tracking-wider">{t.wechat}</div>
                              <div className="font-bold text-lg">design-inno</div>
                          </div>
                       </div>
                       <a href="mailto:jyz@design-inno.com" className="flex items-center justify-center lg:justify-start gap-4 bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                          <div className="w-10 h-10 bg-white text-brand-red rounded-full flex items-center justify-center">
                             <Mail size={20} />
                          </div>
                          <div className="text-left">
                              <div className="text-xs opacity-70 uppercase tracking-wider">{t.email}</div>
                              <div className="font-bold text-lg">jyz@design-inno.com</div>
                          </div>
                       </a>
                    </div>
                </div>
                
                <div className="mt-12 text-xs text-white/40 text-center lg:text-left font-medium">
                   <p>©️2025-2026 版权所有 玥科技术服务（上海）有限责任公司（沪ICP备2025144379号）</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:pl-8">
                <ContactForm />
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;