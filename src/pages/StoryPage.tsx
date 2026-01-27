
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { AlertTriangle, MapPin, Skull, UserX, Heart, Users } from 'lucide-react';

interface StoryPageProps {
  lang: Language;
  onComplete: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({ lang, onComplete }) => {
  const t = translations[lang].story;
  const [currentStory, setCurrentStory] = useState(0);
  const stories = t.stories || []; // Ensure stories is an array


  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center p-4 md:p-6">
      <div className="max-w-4xl w-full mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          {/* Left Column: Headline & Desktop Intro */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex p-3 mb-4 rounded-full bg-red-600 shadow-md animate-pulse">
              <Skull className="text-white w-10 h-10 lg:w-14 lg:h-14" />
            </div>
            <h1 className="text-2xl lg:text-4xl font-black text-white mb-3 leading-tight uppercase tracking-tighter">
              {t.title}
            </h1>
            <div className="hidden lg:block">
              <p className="text-red-400 font-bold text-lg mb-6 leading-relaxed">
                {t.lesson}
              </p>
              
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                 {stories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStory(idx)}
                    className={`h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                      idx === currentStory ? 'bg-red-600 w-16' : 'bg-slate-800 w-16 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Story Card */}
          <div className="bg-slate-900 border-2 border-red-900/50 rounded-[2.5rem] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle size={200} className="text-red-600" />
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mb-6 lg:hidden">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStory(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentStory ? 'bg-red-500 w-8' : 'bg-red-900/50 w-2'
                  }`}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 text-red-400 font-extrabold text-xs lg:text-sm uppercase tracking-widest bg-red-950/30 py-2 px-4 rounded-full border border-red-900/30">
                <MapPin size={16} />
                {stories[currentStory].location}
              </div>

              <div className="space-y-6 lg:space-y-8">
                <div className="relative">
                  <span className="absolute -left-3 -top-5 text-6xl text-red-600/10 font-serif">"</span>
                  <p className="text-slate-200 text-base lg:text-lg font-medium leading-relaxed italic border-l-4 border-red-600/50 pl-4 py-1">
                    {stories[currentStory].incident}
                  </p>
                </div>

                <div className="bg-red-950/30 p-4 rounded-2xl border border-red-900/50">
                  <p className="text-red-500 font-black text-base lg:text-lg text-center">
                    {stories[currentStory].accident}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                   <div className="flex items-center gap-2 mb-2">
                      <Heart className="text-pink-500" size={18} />
                      <span className="text-slate-400 font-black text-xs uppercase">Family</span>
                    </div>
                    <p className="text-slate-300 font-bold text-sm leading-tight">
                      {stories[currentStory].family}
                    </p>
                  </div>
                  
                  <div className="bg-yellow-900/20 p-4 rounded-xl border border-yellow-800/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="text-yellow-600" size={18} />
                      <span className="text-yellow-600 font-black text-xs uppercase">Compensation</span>
                    </div>
                    <p className="text-yellow-500 font-bold text-sm leading-tight">
                      {stories[currentStory].compensation}
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={onComplete}
                className="w-full mt-6 bg-white hover:bg-slate-200 text-red-700 font-black py-3 lg:py-4 rounded-2xl shadow-md transform active:scale-95 transition-all text-base lg:text-lg uppercase tracking-widest flex items-center justify-center gap-2 group"
              >
                <span>{t.btn}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
          
          <div className="lg:hidden mt-8 p-5 bg-slate-900/50 border border-red-900/30 rounded-3xl">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="text-red-500" size={24} />
              <p className="text-sm font-black text-slate-400 uppercase leading-tight tracking-tight text-center">
                {t.lesson}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StoryPage;
