
import React from 'react';
import { AlertCircle, Droplets, Hospital, Ambulance } from 'lucide-react';
import { Language, AppPages } from '../types';

interface EmergencyPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const EmergencyPage: React.FC<EmergencyPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';

  return (
    <div className="p-4 lg:p-6 space-y-4 max-w-3xl mx-auto">
      <div className="bg-red-600 text-white p-4 rounded-2xl shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl lg:text-2xl font-black flex items-center gap-2">
              <AlertCircle size={22} />
              {isBn ? "জরুরি" : "Emergency"}
            </h2>
            <p className="font-bold text-red-100 text-sm mt-1">
              {isBn ? "আতঙ্কিত হবেন না — দ্রুত সাহায্য নিন।" : "Stay calm — get help quickly."}
            </p>
          </div>
          <div className="text-xs text-red-100 font-bold">{isBn ? 'প্রাথমিক সহায়তা' : 'First Response'}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <EmergencyCard 
          icon={<Droplets className="text-white" />} 
          title={isBn ? "রক্ত নেটওয়ার্ক" : "Blood Network"} 
          desc={isBn ? "জরুরি সময়ে রক্তদাতা খুঁজুন" : "Find blood donors during emergency"} 
          color="bg-red-500" 
          onClick={() => onNavigate(AppPages.JOIN)} 
        />
        <EmergencyCard 
          icon={<Hospital className="text-white" />} 
          title={isBn ? "হাসপাতাল" : "Hospitals"} 
          desc={isBn ? "নিকটস্থ হাসপাতাল খুঁজুন" : "Find nearby hospitals"} 
          color="bg-blue-600" 
          onClick={() => onNavigate(AppPages.JOIN)} 
        />
        <EmergencyCard 
          icon={<Ambulance className="text-white" />} 
          title={isBn ? "অ্যাম্বুলেন্স" : "Ambulance"} 
          desc={isBn ? "জরুরি অ্যাম্বুলেন্স সেবা" : "Emergency ambulance service"} 
          color="bg-green-600" 
          onClick={() => onNavigate(AppPages.JOIN)} 
        />
      </div>

      <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
        <h3 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-3 text-center">
          {isBn ? "জরুরি টিপস" : "Emergency Tips"}
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm font-medium text-slate-700">
              {isBn ? "কখনও শক খাওয়া ব্যক্তিকে খালি হাতে ছোঁবেন না।" : "Never touch a victim with bare hands."}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm font-medium text-slate-700">
              {isBn ? "আহত ব্যক্তিকে সরানোর আগে লাইন ডেড কিনা নিশ্চিত করুন।" : "Ensure the line is dead before moving an injured person."}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm font-medium text-slate-700">
              {isBn ? "জরুরি যোগাযোগের জন্য মোবাইল চার্জ রাখুন।" : "Keep your mobile charged for emergency communication."}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm font-medium text-slate-700">
              {isBn ? "সাহায্য না আসা পর্যন্ত আহত ব্যক্তির সাথে থাকুন।" : "Stay with the injured person until help arrives."}
            </p>
          </div>
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

const EmergencyCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string, onClick: () => void }> = ({ icon, title, desc, color, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${color} w-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white cursor-pointer`}
  >
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-black text-lg mb-1">{title}</h3>
        <p className="text-white/90 text-sm font-medium leading-tight">{desc}</p>
      </div>
    </div>
  </button>
);

export default EmergencyPage;
