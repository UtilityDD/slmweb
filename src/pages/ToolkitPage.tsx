
import React, { useState } from 'react';
import { CheckSquare, CloudRain, Battery, Zap, CheckCircle2 } from 'lucide-react';
import { Language, AppPages } from '../types';

interface ToolkitPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const ToolkitPage: React.FC<ToolkitPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';
  const [voltage, setVoltage] = useState("11");
  const [checklist, setChecklist] = useState([
    { id: 1, text: isBn ? "বিদ্যুৎ প্রতিরোধী জুতো (Shoes)" : "Insulated Shoes", checked: false },
    { id: 2, text: isBn ? "সুরক্ষা হেলমেট (Helmet)" : "Safety Helmet", checked: false },
    { id: 3, text: isBn ? "হ্যান্ড গ্লাভস (Gloves - 11kV)" : "Hand Gloves (11kV)", checked: false },
    { id: 4, text: isBn ? "ডিসচার্জ রড (Discharge Rod)" : "Discharge Rod", checked: false },
    { id: 5, text: isBn ? "সেফটি বেল্ট (Safety Belt)" : "Safety Belt", checked: false },
  ]);

  const toggleCheck = (id: number) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const progress = (checklist.filter(c => c.checked).length / checklist.length) * 100;

  return (
    <div className="p-3 lg:p-4 space-y-4 max-w-3xl mx-auto">
      <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-black mb-1 flex items-center gap-2">
          <CheckSquare size={22} />
          {isBn ? "দৈনিক টুলকিট" : "Daily Toolkit"}
        </h2>
        <p className="text-indigo-100 font-semibold text-sm">
          {isBn ? "কাজে নামার আগে নিজেকে যাচাই করুন।" : "Verify yourself before starting work."}
        </p>
      </div>

      {/* PPE Checklist */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-black text-slate-800 uppercase text-[11px] tracking-wider">
            {isBn ? "PPE চেক লিস্ট" : "PPE Checklist"}
          </h3>
          <span className="bg-indigo-100 text-indigo-700 text-[11px] font-black px-2 py-0.5 rounded-full">
            {Math.round(progress)}%
          </span>
        </div>
        
        <div className="space-y-2">
          {checklist.map(item => (
            <button
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              type="button"
              className={`flex items-center gap-3 p-2 rounded-lg w-full text-left border transition-all ${item.checked ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200`}
            >
              <div className={`w-7 h-7 rounded-md flex items-center justify-center ${item.checked ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                <CheckCircle2 size={14} />
              </div>
              <span className={`text-sm font-bold ${item.checked ? 'text-green-700 line-through' : 'text-slate-700'}`}>
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
          <CloudRain className="text-blue-600 mb-1" size={20} />
          <h4 className="font-black text-blue-800 text-xs">{isBn ? "আবহাওয়া" : "Weather"}</h4>
          <p className="text-[10px] text-blue-600 font-bold mt-1 uppercase">
            {isBn ? "পরিষ্কার" : "Clear"}
          </p>
        </div>
        <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
          <Battery className="text-orange-600 mb-1" size={20} />
          <h4 className="font-black text-orange-800 text-xs">{isBn ? "ক্লান্তি" : "Fatigue"}</h4>
          <p className="text-[10px] text-orange-600 font-bold mt-1 uppercase">
            {isBn ? "ফিট" : "Fit"}
          </p>
        </div>
      </div>

      {/* Safety Clearance Calculator */}
      <div className="bg-slate-800 text-white p-4 rounded-2xl">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="text-yellow-400" size={20} />
          <h3 className="font-black text-base">{isBn ? "নিরাপদ দূরত্ব" : "Safe Clearance"}</h3>
        </div>
        
        <div className="space-y-2">
          <div className="bg-slate-700 p-2 rounded-lg border border-slate-600">
            <label className="text-slate-300 text-xs font-bold block mb-1">
              {isBn ? "ভোল্টেজ (kV)" : "Voltage (kV)"}
            </label>
            <select 
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              className="w-full bg-slate-900 border border-slate-500 rounded-lg p-2 text-white font-bold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <option value="11">11 kV</option>
              <option value="33">33 kV</option>
              <option value="132">132 kV</option>
            </select>
          </div>
          
          <div className="bg-green-600/20 border border-green-500/50 p-3 rounded-lg">
             <span className="text-green-400 text-xs font-bold uppercase block mb-1">
               {isBn ? "ন্যূনতম দূরত্ব" : "Min. Distance"}
             </span>
             <p className="text-xl font-black text-green-300">
               {voltage === "11" ? "1.5 m" : voltage === "33" ? "2.0 m" : "4.0 m"}
             </p>
          </div>
        </div>
      </div>

      {progress === 100 && (
        <div className="bg-green-600 p-3 rounded-lg text-center shadow-md animate-pulse">
          <p className="text-white font-black text-sm">
            {isBn ? "আপনি প্রস্তুত!" : "Ready to go"}
          </p>
        </div>
      )}

      <div className="mt-6 bg-slate-800 rounded-2xl p-4 text-center">
        <h3 className="text-white font-black text-lg mb-1">{isBn ? "আমাদের সাথে যোগ দিন" : "Join Our Community"}</h3>
        <p className="text-slate-300 mb-3 text-sm font-medium">{isBn ? "৫০০+ লাইনম্যানদের সাথে যুক্ত হন।" : "Join 500+ Linemen network."}</p>
        <button 
          type="button"
          onClick={() => onNavigate(AppPages.JOIN)}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg w-full hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          {isBn ? "জয়েন করুন" : "Join Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolkitPage;
