import React, { useState } from 'react';
import { translations } from '../translations';
import { AppPages, Language } from '../types';
import { Shield, BookOpen, Gamepad2, Users, ArrowRight, Smartphone } from 'lucide-react';

interface IntroPageProps {
  lang: Language;
  onNavigate: (page: AppPages, mobile?: string) => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].intro;
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      // Navigate to Join page with pre-filled mobile number
      onNavigate(AppPages.JOIN, mobileNumber);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Hero Section - Compact */}
      <div className="max-w-xl w-full text-center space-y-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-sm border border-blue-200 shadow-sm">
          <Shield size={18} className="fill-blue-700 text-blue-100" />
          <span>{t.initiative}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {t.mission}
        </h1>
        <p className="text-base lg:text-lg text-slate-600 max-w-md mx-auto font-medium leading-relaxed">
          {t.desc}
        </p>
      </div>

      {/* Features Grid - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl w-full mb-8 px-1">
        {t.features && t.features.map((feature: any, idx: number) => {
          const icons = [BookOpen, Gamepad2, Users];
          const colors = ["bg-emerald-100 text-emerald-700", "bg-purple-100 text-purple-700", "bg-orange-100 text-orange-700"];
          const Icon = icons[idx % icons.length];
          const colorClass = colors[idx % colors.length];
          const handleClick = idx === 0 ? () => onNavigate(AppPages.TOOLKIT) : undefined;
          return (
            <div key={idx} className={`bg-white p-4 rounded-2xl shadow border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 ${handleClick ? 'cursor-pointer' : ''}`} onClick={handleClick}>
              <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center mb-2`}>
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">{feature.title}</h3>
              <p className="text-slate-500 text-sm font-normal leading-snug">{feature.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Login Section - Compact & Professional */}
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
        <h3 className="text-lg font-black text-slate-800 mb-1 text-center">{t.join}</h3>
        <p className="text-slate-500 text-center mb-4 font-medium text-xs">Join the 500+ Lineman Community</p>
        <form onSubmit={handleLogin} className="space-y-3">
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="tel" 
              placeholder="Mobile Number"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 pl-10 pr-3 font-bold text-base text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:font-medium placeholder:text-slate-400"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-lg text-base shadow hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {t.btn}
            <ArrowRight size={18} />
          </button>
        </form>
        <div className="mt-4 text-center">
          <button 
            onClick={() => onNavigate(AppPages.STORY)} 
            className="text-slate-400 font-bold hover:text-slate-600 text-xs transition-colors"
          >
            {t.guest}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
