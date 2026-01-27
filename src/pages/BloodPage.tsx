
import React from 'react';
import { Droplet, Search, ExternalLink, Share2 } from 'lucide-react';
import { Language, AppPages } from '../types';
import { translations } from '../translations';

interface BloodPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const BloodPage: React.FC<BloodPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';
  const t = translations[lang].blood;

  const openLink = (url: string) => window.open(url, '_blank');

  return (
    <div className="p-4 lg:p-6 space-y-4 max-w-4xl mx-auto">
      <div className="bg-red-600 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
          <Droplet size={28} />
          {t.title}
        </h2>
        <p className="text-red-100 font-bold text-sm">
          {t.urgent}
        </p>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm text-center">
        <p className="text-slate-600 font-bold mb-6">{t.banks}</p>
        
        <div className="grid grid-cols-1 gap-3">
          <button 
            onClick={() => openLink('https://www.eraktkosh.in/')}
            className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100 group active:scale-95 transition-all"
          >
            <span className="text-red-700 font-black">e-RaktKosh (Govt of India)</span>
            <ExternalLink size={18} className="text-red-400" />
          </button>
          
          <button 
            onClick={() => openLink('https://www.wbhealth.gov.in/pages/blood_bank')}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 group active:scale-95 transition-all"
          >
            <span className="text-slate-700 font-black">West Bengal Blood Banks</span>
            <ExternalLink size={18} className="text-slate-400" />
          </button>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-3xl">
        <h4 className="text-white font-black text-sm mb-4 flex items-center gap-2">
          <Share2 className="text-green-500" size={18} />
          {isBn ? "সহযোগিতা নিন" : "Get Help"}
        </h4>
        <button 
          onClick={() => window.open('https://t.me/blooddonorsindia', '_blank')}
          className="w-full py-4 bg-green-600 text-white rounded-2xl font-black flex items-center justify-center gap-2"
        >
          {isBn ? "WhatsApp/Telegram গ্রুপ খুঁজুন" : "Find WhatsApp/Telegram Groups"}
        </button>
      </div>

      <p className="text-[10px] text-slate-400 font-bold text-center italic px-4">
        {isBn 
          ? "*রক্তের জন্য কোনো ব্যক্তিকে টাকা দেবেন না। সাহায্যের জন্য অফিসিয়াল চ্যানেলে যোগাযোগ করুন।" 
          : "*Do not pay anyone for blood. Use official channels for help."}
      </p>

      <div className="mt-8 bg-slate-800 rounded-3xl p-6 text-center">
        <h3 className="text-white font-black text-xl mb-2">{isBn ? "আমাদের সাথে যোগ দিন" : "Join Our Community"}</h3>
        <p className="text-slate-300 mb-4 text-sm font-medium">{isBn ? "৫০০+ লাইনম্যানদের সাথে যুক্ত হন।" : "Join 500+ Linemen network."}</p>
        <button 
          onClick={() => onNavigate(AppPages.JOIN)}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl w-full hover:bg-blue-700 transition"
        >
          {isBn ? "জয়েন করুন" : "Join Now"}
        </button>
      </div>
    </div>
  );
};

export default BloodPage;
