
import React from 'react';
import { Stethoscope, Activity, Droplet, Clock } from 'lucide-react';
import { Language, AppPages } from '../types';
import { translations } from '../translations';

interface FirstAidPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const FirstAidPage: React.FC<FirstAidPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';
  const t = translations[lang].firstaid;

  return (
    <div className="p-4 lg:p-6 space-y-4 max-w-4xl mx-auto">
      <div className="bg-green-600 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
          <Stethoscope size={28} />
          {t.title}
        </h2>
        <p className="text-green-100 font-bold text-sm">
          {isBn ? "সঠিক সময়ে সঠিক পদক্ষেপ জীবন বাঁচায়।" : "The right step at the right time saves lives."}
        </p>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 p-2 rounded-xl text-green-600">
            <Clock size={24} />
          </div>
          <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">{isBn ? "গোল্ডেন টাইম" : "Golden Time"}</h3>
        </div>
        <p className="text-slate-700 font-bold text-sm leading-snug mb-4">{t.golden}</p>
        
        <div className="space-y-3">
          <Step num="1" text={isBn ? "প্রথমে লাইন ডিসকানেক্ট করুন (কাঠের লাঠি ব্যবহার করুন)" : "Disconnect line first (use wooden stick)"} />
          <Step num="2" text={isBn ? "ব্যক্তিকে নিরাপদ খোলা জায়গায় আনুন" : "Bring victim to safe open area"} />
          <Step num="3" text={isBn ? "শ্বাস পরীক্ষা করুন এবং ১০৮ এ ফোন দিন" : "Check breath and call 108"} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-blue-50 border-2 border-blue-200 p-5 rounded-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-blue-600" />
            <h4 className="font-black text-blue-800 uppercase text-xs">CPR (কিভাবে করবেন)</h4>
          </div>
          <p className="text-blue-700 font-bold text-xs mb-2">{t.cpr}</p>
          <div className="bg-white p-3 rounded-xl border border-blue-100 italic text-[10px] font-bold text-blue-500">
            {isBn ? "প্রতি মিনিটে ১০০-১২০ বার চাপ দিন।" : "Push 100-120 times per minute."}
          </div>
        </div>

        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Droplet className="text-red-600" />
            <h4 className="font-black text-red-800 uppercase text-xs">{isBn ? "পোড়া ক্ষত" : "Burns"}</h4>
          </div>
          <p className="text-red-700 font-bold text-xs">{t.burns}</p>
        </div>
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

const Step: React.FC<{ num: string, text: string }> = ({ num, text }) => (
  <div className="flex items-center gap-3">
    <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-black shrink-0">{num}</span>
    <p className="text-xs font-bold text-slate-600">{text}</p>
  </div>
);

export default FirstAidPage;
