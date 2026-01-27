
import React from 'react';
import { Zap, AlertTriangle, RefreshCcw, Waves } from 'lucide-react';
import { Language, AppPages } from '../types';

interface TechPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const TechPage: React.FC<TechPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';
  const t = translations[lang].tech;

  return (
    <div className="p-4 lg:p-6 space-y-4 max-w-4xl mx-auto">
      <div className="bg-yellow-500 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
          <Zap size={28} />
          {t.title}
        </h2>
        <p className="text-yellow-100 font-bold text-sm">
          {isBn ? "ভুল ধারণা জীবন কেড়ে নিতে পারে।" : "Misconceptions can take lives."}
        </p>
      </div>

      <div className="space-y-4">
        <TechCard 
          icon={<Zap className="text-yellow-600" />} 
          title="HT vs LT" 
          desc={t.ht_lt} 
          color="border-yellow-200 bg-yellow-50"
        />
        <TechCard 
          icon={<RefreshCcw className="text-red-600" />} 
          title={isBn ? "ব্যাক-ফিডিং" : "Back-feeding"} 
          desc={t.backfeed} 
          color="border-red-200 bg-red-50"
        />
        <TechCard 
          icon={<Waves className="text-blue-600" />} 
          title={isBn ? "ইন্ডাকশন" : "Induction"} 
          desc={t.induction} 
          color="border-blue-200 bg-blue-50"
        />
      </div>

      <div className="p-6 bg-slate-900 rounded-3xl mt-4">
        <h4 className="text-white font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
          <AlertTriangle className="text-yellow-500" size={16} />
          {isBn ? "সবচেয়ে বড় বিপদ" : "Biggest Danger"}
        </h4>
        <p className="text-slate-300 text-sm font-bold leading-relaxed">
          {isBn 
            ? "যখন আপনি মনে করেন 'সব ঠিক আছে'। বিদ্যুতকে কখনও ছোট করে দেখবেন না।" 
            : "When you assume 'everything is fine'. Never underestimate electricity."}
        </p>
      </div>

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

const TechCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string }> = ({ icon, title, desc, color }) => (
  <div className={`p-5 rounded-3xl border-2 ${color} shadow-sm`}>
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-white p-2 rounded-xl shadow-sm">{icon}</div>
      <h3 className="font-black text-slate-800 uppercase text-xs tracking-wider">{title}</h3>
    </div>
    <p className="text-slate-700 font-bold text-sm leading-snug">{desc}</p>
  </div>
);

import { translations } from '../translations';
export default TechPage;
