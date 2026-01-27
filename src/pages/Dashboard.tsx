import React from 'react';
import { AppPages, Language } from '../types';
import { 
  GraduationCap,
  Shield,
  Wrench,
  Cable,
  HardHat,
  Search,
  Cpu,
  Scale,
  BookOpen,
  TestTube,
  FileText,
  Users,
  Phone,
  ShieldCheck,
  Trophy,
  Swords,
  Hammer,
  ExternalLink,
  ChevronRight,
  Zap,
  Clock
} from 'lucide-react';

interface DashboardProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';

  // Training modules (90 days course)
  const trainingModules = [
    { id: 'safety', icon: <Shield />, title: isBn ? "সুরক্ষা কবচ" : "Safety Shield", color: "from-orange-500 to-red-500" },
    { id: 'tools', icon: <Wrench />, title: isBn ? "হাতিয়ারের ওস্তাদ" : "Tool Master", color: "from-blue-500 to-indigo-500" },
    { id: 'lines', icon: <Cable />, title: isBn ? "লাইন চেনার জাদুকর" : "Line Wizard", color: "from-yellow-500 to-orange-500" },
    { id: 'work', icon: <HardHat />, title: isBn ? "কাজের কারিগর" : "Work Craftsman", color: "from-green-500 to-teal-500" },
    { id: 'fault', icon: <Search />, title: isBn ? "ফল্ট ফাইন্ডার" : "Fault Finder", color: "from-red-500 to-pink-500" },
    { id: 'equipment', icon: <Cpu />, title: isBn ? "যন্ত্র গুরু" : "Equipment Guru", color: "from-purple-500 to-violet-500" },
    { id: 'law', icon: <Scale />, title: isBn ? "আইন কি বলে?" : "Legal Know-How", color: "from-slate-500 to-gray-600" },
    { id: 'wberc', icon: <BookOpen />, title: isBn ? "জরুরী রেগুলেশন" : "WBERC Focus", color: "from-cyan-500 to-blue-500" },
    { id: 'diagnostics', icon: <TestTube />, title: isBn ? "ডায়াগনস্টিক্স" : "Diagnostics", color: "from-emerald-500 to-green-600" },
  ];

  // Main feature cards
  const mainFeatures = [
    { id: AppPages.TOOLKIT, icon: <FileText />, title: isBn ? "সওপি" : "SOP", desc: isBn ? "দৈনিক কাজের পদ্ধতি" : "Daily Work Procedures", bg: "bg-indigo-600", light: "bg-indigo-50" },
    { id: AppPages.COMMUNITY, icon: <Users />, title: isBn ? "কমিউনিটি" : "Community", desc: isBn ? "WA, FB এ যুক্ত থাকুন" : "Stay Connected", bg: "bg-teal-600", light: "bg-teal-50" },
    { id: AppPages.EMERGENCY, icon: <Phone />, title: isBn ? "জরুরি" : "Emergency", desc: isBn ? "জরুরি যোগাযোগ" : "Quick Contacts", bg: "bg-red-600", light: "bg-red-50" },
  ];

  // Tracking & Gamification
  const trackers = [
    { id: 'ppe', icon: <ShieldCheck />, title: isBn ? "আমার পিপিই" : "My PPE", desc: isBn ? "PPE এর হিসাব রাখুন" : "Track PPE Health", color: "border-orange-200 bg-orange-50 text-orange-700" },
    { id: 'mytools', icon: <Hammer />, title: isBn ? "আমার সরঞ্জাম" : "My Tools", desc: isBn ? "সরঞ্জামের তালিকা" : "Tool Inventory", color: "border-blue-200 bg-blue-50 text-blue-700" },
    { id: AppPages.GAME, icon: <Swords />, title: isBn ? "প্রতিযোগিতা" : "Quiz Battle", desc: isBn ? "ঘণ্টায় ৫টি কুইজ" : "5 Quiz/Hour", color: "border-purple-200 bg-purple-50 text-purple-700" },
    { id: 'leaderboard', icon: <Trophy />, title: isBn ? "লিডারবোর্ড" : "Leaderboard", desc: isBn ? "অন্যদের অগ্রগতি দেখুন" : "See Rankings", color: "border-amber-200 bg-amber-50 text-amber-700" },
  ];

  return (
    <div className="p-4 lg:p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-6">
      
      {/* Training Course Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-4 lg:p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
              <GraduationCap size={28} className="text-yellow-400" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-black tracking-tight">{isBn ? "প্রশিক্ষণ" : "Training"}</h2>
              <p className="text-slate-400 text-sm font-bold flex items-center gap-2">
                <Clock size={14} />
                {isBn ? "৯০ দিনের কোর্স" : "90 Days Course"}
              </p>
            </div>
          </div>
          
          {/* Training Modules Grid */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3 mt-6">
            {trainingModules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => onNavigate(AppPages.JOIN)}
                className="group flex flex-col items-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(mod.icon as React.ReactElement, { size: 20, className: "text-white" })}
                </div>
                <span className="text-[10px] lg:text-xs font-bold text-center text-slate-300 leading-tight">{mod.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Features Row */}
      <div className="grid grid-cols-3 gap-3 lg:gap-4">
        {mainFeatures.map((feature) => (
          <button
            key={feature.id}
            onClick={() => onNavigate(feature.id)}
            className={`${feature.bg} group relative p-4 lg:p-6 rounded-2xl text-white text-left overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-3">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 22 })}
              </div>
              <h3 className="font-black text-base lg:text-lg">{feature.title}</h3>
              <p className="text-white/70 text-[10px] lg:text-xs font-bold mt-1">{feature.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Trackers & Gamification */}
      <div>
        <h3 className="text-slate-400 font-extrabold text-xs uppercase tracking-widest mb-3 ml-1 flex items-center gap-2">
          <Zap size={12} />
          {isBn ? "ট্র্যাকার ও গেমিফিকেশন" : "Trackers & Gamification"}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {trackers.map((tracker) => (
            <button
              key={tracker.id}
              onClick={() => tracker.id === AppPages.GAME ? onNavigate(tracker.id) : null}
              className={`group p-4 rounded-2xl border-2 ${tracker.color} text-left hover:shadow-lg hover:-translate-y-0.5 transition-all`}
            >
              <div className="flex items-center justify-between mb-2">
                {React.cloneElement(tracker.icon as React.ReactElement, { size: 24 })}
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-black text-sm lg:text-base">{tracker.title}</h4>
              <p className="text-[10px] font-bold opacity-70 mt-0.5">{tracker.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 lg:p-8 text-center text-white">
        <h3 className="text-xl lg:text-2xl font-black mb-2">{isBn ? "আমাদের সাথে যোগ দিন" : "Join Our Community"}</h3>
        <p className="text-blue-100 mb-4 text-sm font-medium">{isBn ? "৫০০+ লাইনম্যানদের সাথে যুক্ত হন।" : "Join 500+ Linemen network."}</p>
        <button 
          onClick={() => onNavigate(AppPages.JOIN)}
          className="bg-white text-blue-600 font-black py-3 px-8 rounded-xl hover:bg-blue-50 transition inline-flex items-center gap-2"
        >
          {isBn ? "জয়েন করুন" : "Join Now"}
          <ExternalLink size={16} />
        </button>
      </div>

    </div>
  );
};

export default Dashboard;
