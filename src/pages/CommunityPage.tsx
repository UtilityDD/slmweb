
import React from 'react';
import { Users, Youtube, MessageCircle, HeartPulse, ExternalLink } from 'lucide-react';
import { Language, AppPages } from '../types';

interface CommunityPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-slate-50">
      <div className="w-full max-w-3xl">
        <div className="bg-teal-600 text-white p-4 rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users size={22} />
            <div>
              <div className="text-lg font-black">{isBn ? 'কমিউনিটি' : 'Community'}</div>
              <div className="text-teal-100 text-sm">{isBn ? 'আপনি একা নন' : 'You are not alone'}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate(AppPages.JOIN)}
            aria-label={isBn ? 'জয়েন করুন' : 'Join'}
            className="bg-white text-teal-600 font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          >
            {isBn ? 'জয়েন করুন' : 'Join'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <CommunityItem
            lang={lang}
            icon={<Youtube className="text-red-600" />}
            title={isBn ? 'সুরক্ষা ট্রেনিং ভিডিও (coming soon..)' : 'Safety Training Videos (coming soon..)'}
            link="#"
          />

          <CommunityItem
            lang={lang}
            icon={<MessageCircle className="text-green-600" />}
            title={isBn ? 'লাইনম্যান হোয়াটসঅ্যাপ গ্রুপ (link to coming soon..)' : 'Lineman WhatsApp Groups (link to coming soon..)'}
            link="#"
          />

          <CommunityItem
            lang={lang}
            icon={<HeartPulse className="text-pink-600" />}
            title={isBn ? 'ফেসবুকে যুক্ত হন' : 'Connect on Facebook'}
            link="https://www.facebook.com/smartlineman"
          />

          <CommunityItem
            lang={lang}
            icon={<ExternalLink className="text-slate-600" />}
            title={isBn ? 'গল্প শেয়ার করুন' : 'Share Your Story'}
            link="#story"
            onClick={() => onNavigate(AppPages.JOIN)}
          />
        </div>

        <div className="mt-6 text-center text-slate-500 text-sm">
          {isBn ? 'আপনার অভিজ্ঞতা অন্যদের জীবন বাঁচাতে পারে।' : "Your experience can save others' lives."}
        </div>
      </div>
    </div>
  );
};

type CommunityItemProps = {
  lang?: any;
  icon: React.ReactNode;
  title: string;
  link: string;
  onClick?: () => void;
};

const CommunityItem: React.FC<CommunityItemProps> = ({ lang, icon, title, link, onClick }) => {
  const isExternal = link.startsWith('http') || link.startsWith('tel:');
  const isComingSoon = link === '#';
  const isBn = lang === 'bn';
  const comingSoonLabel = isBn ? 'শীঘ্রই' : 'Coming soon';

  if (isExternal) {
    return (
      <a
        href={link}
        title={title}
        aria-label={title}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">{icon}</div>
          <div className="text-sm font-semibold text-slate-800 truncate max-w-[200px]">{title}</div>
        </div>
        <ExternalLink size={18} className="text-slate-400" />
      </a>
    );
  }

  // Coming soon / internal action
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isComingSoon && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      title={isComingSoon && !onClick ? comingSoonLabel : title}
      aria-label={title}
      disabled={isComingSoon && !onClick}
      aria-disabled={isComingSoon && !onClick}
      className={`flex items-center justify-between gap-4 w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${isComingSoon ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md cursor-pointer'}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">{icon}</div>
        <div className="text-sm font-semibold text-slate-800 truncate max-w-[200px]">{title}</div>
      </div>
      {isComingSoon ? <div className="text-xs font-bold px-2 py-1 rounded-full bg-yellow-50 text-yellow-700">{comingSoonLabel}</div> : <ExternalLink size={18} className="text-slate-400" />}
    </button>
  );
};

export default CommunityPage;
