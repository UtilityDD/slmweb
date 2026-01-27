
import React from 'react';
import { ShieldCheck, Lock, Footprints, AlertTriangle } from 'lucide-react';
import { Language, AppPages } from '../types';

interface SafetyPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const SafetyPage: React.FC<SafetyPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';

  return (
    <div className="p-4 lg:p-6 space-y-4 max-w-4xl mx-auto">
      <div className="bg-orange-600 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
          <ShieldCheck size={28} />
          {isBn ? "সুরক্ষা নিয়ম" : "Safety Rules"}
        </h2>
        <p className="text-orange-100 font-bold text-sm">
          {isBn ? "একটু সচেতনতা, অনেক বড় সুরক্ষা।" : "A little awareness, big safety."}
        </p>
      </div>

      <Section 
        icon={<Lock className="text-red-500" />} 
        title={isBn ? "LOTO সিস্টেম" : "LOTO System"} 
        desc={isBn ? "সাবস্টেশনে তালা এবং ট্যাগ না লাগিয়ে কখনও কাজ করবেন না।" : "Never work without locking and tagging at the substation."}
      />

      <Section 
        icon={<AlertTriangle className="text-orange-500" />} 
        title={isBn ? "ডিসচার্জ রড" : "Discharge Rod"} 
        desc={isBn ? "লাইন বন্ধ থাকলেও আর্দিং বা ডিসচার্জ রড ব্যবহার বাধ্যতামূলক।" : "Discharge rod is mandatory even if the line is off."}
      />

      <div className="bg-red-50 border-2 border-red-200 p-5 rounded-3xl">
        <h3 className="font-black text-red-700 flex items-center gap-2 mb-2">
          <AlertTriangle size={18} />
          {isBn ? "ভুল ধারণা (Myths)" : "Fatal Myths"}
        </h3>
        <ul className="space-y-3">
          <li className="text-xs font-bold text-red-600 flex items-start gap-2">
            <span className="mt-1 shrink-0">❌</span>
            {isBn ? "'লাইনম্যানরা হাত দিয়েই বুঝতে পারে'" : "'Linemen can feel the line'"}
          </li>
          <li className="text-xs font-bold text-red-600 flex items-start gap-2">
            <span className="mt-1 shrink-0">❌</span>
            {isBn ? "'শুকনো কাঠের সিঁড়িতে শক লাগে না'" : "'Dry wooden ladders are 100% safe'"}
          </li>
          <li className="text-xs font-bold text-red-600 flex items-start gap-2">
            <span className="mt-1 shrink-0">❌</span>
            {isBn ? "'লাইন বন্ধ মানেই কারেন্ট নেই'" : "'Line off means zero risk'"}
          </li>
        </ul>
      </div>

      <div className="bg-slate-800 p-6 rounded-3xl text-center">
        <p className="text-white font-black italic text-lg leading-tight">
          {isBn ? "আপনার পরিবার আপনার ফিরে আসার পথ চেয়ে আছে।" : "Your family is waiting for your return."}
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

const Section: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white border border-slate-200 p-5 rounded-3xl shadow-sm flex gap-4">
    <div className="bg-slate-50 p-3 rounded-2xl h-fit">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-800 text-base">{title}</h3>
      <p className="text-sm text-slate-500 font-medium leading-snug mt-1">{desc}</p>
    </div>
  </div>
);

export default SafetyPage;
