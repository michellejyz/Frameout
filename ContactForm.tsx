import React, { useState } from 'react';
import { CheckCircle, ArrowRight, AlertCircle, Loader2, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    contactInfo: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const content = {
    zh: {
      title: "告诉我们您的挑战",
      name: "姓名",
      namePH: "您的称呼",
      email: "邮箱",
      emailPH: "name@company.com",
      company: "公司 / 组织",
      companyPH: "例如：FrameOUT",
      contact: "微信号 / 手机号",
      contactPH: "方便我们更快联系到您",
      message: "目前的挑战",
      messagePH: "请简要描述您团队目前面临的问题...",
      submit: "发送信息",
      successTitle: "提交成功！",
      successDesc: "我们已经收到您的信息，团队会尽快与您联系。",
      sendAnother: "发送另一条信息",
      errors: {
        name: "请输入您的姓名",
        email: "请输入您的邮箱",
        emailInvalid: "请输入有效的邮箱地址",
        message: "请告诉我们您面临的挑战"
      }
    },
    en: {
      title: "Tell Us Your Challenge",
      name: "Name",
      namePH: "Your Name",
      email: "Email",
      emailPH: "name@company.com",
      company: "Company / Org",
      companyPH: "e.g., FrameOUT",
      contact: "WeChat / Phone",
      contactPH: "For faster contact",
      message: "Current Challenge",
      messagePH: "Briefly describe the issues your team is facing...",
      submit: "Send Message",
      successTitle: "Submitted!",
      successDesc: "We have received your message and will contact you soon.",
      sendAnother: "Send Another Message",
      errors: {
        name: "Please enter your name",
        email: "Please enter your email",
        emailInvalid: "Please enter a valid email",
        message: "Please describe your challenge"
      }
    }
  };
  const t = content[language];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.errors.name;
    if (!formData.email.trim()) {
      newErrors.email = t.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.emailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = t.errors.message;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      
      // Data payload
      const data = {
        timestamp: new Date().toISOString(),
        ...formData
      };

      // NOTE FOR USER:
      // To send data to Google Drive (Sheets), you need to create a Google Apps Script Web App.
      // 1. Create a Google Sheet.
      // 2. Extensions > Apps Script.
      // 3. Paste a script to handle doPost(e) and appendRow.
      // 4. Deploy > New Deployment > Type: Web App > Execute as: Me > Who has access: Anyone.
      // 5. Paste the URL below.
      const GOOGLE_SCRIPT_URL = ""; 

      try {
        if (GOOGLE_SCRIPT_URL) {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(data),
                mode: "no-cors",
                headers: { "Content-Type": "application/json" }
            });
            // With no-cors, we can't check response status, so we assume success if no network error
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '', contactInfo: '' });
        } else {
            // Fallback: Open Mailto Link to ensure data reaches the email
            const subject = `FrameOUT Challenge: ${formData.company} - ${formData.name}`;
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nContact: ${formData.contactInfo}\n\nChallenge:\n${formData.message}`;
            
            // Short delay to show loading state
            setTimeout(() => {
                window.location.href = `mailto:skyjuju@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setStatus('success');
                setFormData({ name: '', email: '', company: '', message: '', contactInfo: '' });
            }, 1000);
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setStatus('error'); // User could retry or we could auto-fallback to mailto here too
      }
    }
  };

  return (
    <div className="bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-2xl h-full flex flex-col justify-center">
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h4 className="text-2xl font-bold mb-3 text-gray-800">{t.successTitle}</h4>
          <p className="text-gray-600 mb-8">{t.successDesc}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brand-red font-bold hover:underline flex items-center justify-center gap-2 mx-auto"
          >
            {t.sendAnother} <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 text-brand-dark">{t.title}</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                {t.name} <span className="text-red-500">*</span>
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
                placeholder={t.namePH}
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1">
                  <AlertCircle size={12} /> <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                {t.email} <span className="text-red-500">*</span>
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
                placeholder={t.emailPH}
              />
              {errors.email && (
                <div className="flex items-center gap-1 text-red-500 text-xs mt-1">
                  <AlertCircle size={12} /> <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">
                {t.company}
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                placeholder={t.companyPH}
              />
            </div>

            <div>
              <label htmlFor="contactInfo" className="block text-sm font-bold text-gray-700 mb-1">
                {t.contact}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="contactInfo"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                  className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                  placeholder={t.contactPH}
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                {t.message} <span className="text-red-500">*</span>
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
                placeholder={t.messagePH}
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
                  ...
                </>
              ) : (
                <>
                  {t.submit} <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;