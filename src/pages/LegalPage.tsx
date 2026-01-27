
import React from 'react';
import { Scale, FileText, ShieldAlert, BookOpen } from 'lucide-react';
import { Language, AppPages } from '../types';
import { translations } from '../translations';

interface LegalPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';
  const t = translations[lang].legal;

  return (
    <div className="p-4 lg:p-6 space-y-4 max-w-4xl mx-auto">
      <div className="bg-purple-700 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
          <Scale size={28} />
          {t.title}
        </h2>
        <p className="text-purple-100 font-bold text-sm">
          {t.rights}
        </p>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
        <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
          <FileText size={18} className="text-purple-500" />
          {isBn ? "প্রয়োজনীয় নথি" : "Required Documents"}
        </h3>
        <ul className="space-y-4">
          <DocItem text={isBn ? "নিয়োগপত্র বা গেট পাস" : "Appointment Letter or Gate Pass"} />
          <DocItem text={isBn ? "দুর্ঘটনার পর FIR কপি" : "Copy of FIR after accident"} />
          <DocItem text={isBn ? "হাসপাতালের ডিসচার্জ সার্টিফিকেট" : "Hospital Discharge Certificate"} />
          <DocItem text={isBn ? "আধার ও ব্যাঙ্ক পাশবই" : "Aadhaar & Bank Passbook"} />
        </ul>
      </div>

      <div className="bg-red-50 border-2 border-red-200 p-5 rounded-3xl">
        <div className="flex items-center gap-3 mb-3">
          <ShieldAlert className="text-red-600" />
          <h4 className="font-black text-red-800 uppercase text-xs">{isBn ? "কঠোর সত্য" : "Hard Truth"}</h4>
        </div>
        <p className="text-red-700 font-bold text-xs leading-relaxed">
          {isBn 
            ? "মনে রাখবেন: আপনি যদি সেফটি বেল্ট বা গ্লাভস না পরেন, কোম্পানি তদন্তে সেটা প্রমাণ করে দেবে। তখন আপনার পরিবার এক পয়সাও পাবে না। আইন তখন কোম্পানির পক্ষে যাবে।" 
            : "Remember: If you don't wear safety belt or gloves, the company will prove it in investigation. Then your family gets ZERO money. The law will favor the company."}
        </p>
      </div>

      <div className="bg-orange-50 border-2 border-orange-200 p-5 rounded-3xl">
        <div className="flex items-center gap-3 mb-3">
          <ShieldAlert className="text-orange-600" />
          <h4 className="font-black text-orange-800 uppercase text-xs">Reality Check</h4>
        </div>
        <p className="text-orange-700 font-bold text-xs leading-relaxed">
          {isBn 
            ? "অনেক সময় কন্ট্রাক্টররা আপনাকে ভুলে যাওয়ার চেষ্টা করবে। তাই নিজের ডিউটি রেজিস্টার ও হাজিরা খাতায় সই করতে ভুলবেন না।" 
            : "Often contractors might try to ignore your case. Never forget to sign the duty register and attendance sheet."}
        </p>
      </div>

      <button className="w-full py-5 bg-purple-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-lg">
        <BookOpen size={20} />
        {isBn ? "আইনজীবী সহায়তা" : "Legal Aid Support"}
      </button>

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

const DocItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 border-b border-slate-50 pb-2">
    <div className="bg-purple-100 p-1 rounded mt-0.5 text-purple-600">
      <FileText size={14} />
    </div>
    <span className="text-sm font-bold text-slate-600">{text}</span>
  </li>
);

export default LegalPage;
