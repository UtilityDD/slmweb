
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { AlertTriangle, MapPin, Heart, Users, X, Skull, Phone, UserX } from 'lucide-react';

interface StoryPageProps {
  lang: Language;
  onComplete: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({ lang, onComplete }) => {
  const t = translations[lang].story;
  const stories = t.stories || [];
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  // Custom sad/tragic images for each story
  const storyImages = [
    '/story-1-backfeeding.svg',
    '/story-2-shutdown.svg',
    '/story-3-ppe.svg',
    '/story-4-youth.svg',
    '/story-5-pump.svg',
    '/story-6-toto.svg'
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">

        {/* Emotional Warning Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-lg shadow-md mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="text-red-600 animate-pulse" size={28} />
            <h1 className="text-2xl md:text-3xl font-black text-red-800 uppercase tracking-tight">
              {t.title}
            </h1>
          </div>
          <p className="text-red-700 font-bold text-base md:text-lg italic leading-relaxed">
            {lang === 'bn'
              ? 'উদাসীনতা আর অবহেলার নির্মম বলি হয়ে অকালে হারিয়ে যাচ্ছে কত প্রাণ!'
              : 'How many lives are being lost prematurely as cruel victims of negligence and carelessness!'}
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedStory(idx)}
              className="case-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group border-t-4 border-transparent hover:border-red-600 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="card-icon-container h-32 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-slate-900"></div>
                <img
                  src={storyImages[idx % storyImages.length]}
                  alt={`Story ${idx + 1} tragedy visualization`}
                  className="relative z-10 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Location Badge */}
                <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <MapPin size={14} />
                  {story.location}
                </div>

                {/* Incident Preview */}
                <p className="text-slate-700 font-medium text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.incident}
                </p>

                {/* Read More Button */}
                <button className="read-more-btn bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-full text-sm transition-colors inline-flex items-center gap-2">
                  {lang === 'bn' ? 'বিস্তারিত পড়ুন' : 'Read More'}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promise Button */}
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
          <button
            onClick={onComplete}
            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-4 px-8 rounded-2xl shadow-lg transform active:scale-95 transition-all text-base md:text-lg uppercase tracking-wide flex items-center justify-center gap-3 mx-auto"
          >
            <span>{t.btn}</span>
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedStory !== null && (
        <div
          className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="modal-content bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 relative">
              <button
                onClick={() => setSelectedStory(null)}
                className="close-btn absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={storyImages[selectedStory % storyImages.length]}
                    alt="Story visualization"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-2">
                    <MapPin size={14} />
                    {stories[selectedStory].location}
                  </div>
                  <h2 className="text-2xl font-black">
                    {lang === 'bn' ? 'একটি ট্র্যাজিক ঘটনা' : 'A Tragic Incident'}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-6 overflow-y-auto max-h-[calc(90vh-120px)]">

              {/* Incident Story */}
              <div className="story-section mb-6">
                <p className="text-slate-700 text-base leading-relaxed mb-4 text-justify">
                  {stories[selectedStory].incident}
                </p>
              </div>

              {/* Tragedy Box */}
              <div className="tragedy-box bg-red-50 border-l-4 border-red-600 p-5 rounded-lg mb-6">
                <h3 className="text-red-800 font-black text-lg mb-2 flex items-center gap-2">
                  <Skull size={20} />
                  {lang === 'bn' ? 'দুর্ঘটনা' : 'The Tragedy'}
                </h3>
                <p className="text-red-700 font-bold text-base leading-relaxed">
                  {stories[selectedStory].accident}
                </p>
              </div>

              {/* Family & Compensation Info Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Family Impact */}
                <div className="bg-pink-50 border border-pink-200 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="text-pink-600" size={20} />
                    <h4 className="font-black text-pink-800 uppercase text-sm">
                      {lang === 'bn' ? 'পরিবারের অবস্থা' : 'Family Impact'}
                    </h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {stories[selectedStory].family}
                  </p>
                </div>

                {/* Compensation */}
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="text-amber-700" size={20} />
                    <h4 className="font-black text-amber-800 uppercase text-sm">
                      {lang === 'bn' ? 'ক্ষতিপূরণ' : 'Compensation'}
                    </h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {stories[selectedStory].compensation}
                  </p>
                </div>
              </div>

              {/* Lessons Learned */}
              {stories[selectedStory].lesson && (
                <div className="lessons-section bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
                  <h3 className="text-green-800 font-black text-lg mb-3 flex items-center gap-2">
                    <AlertTriangle size={20} />
                    {lang === 'bn' ? 'শিক্ষা' : 'Lesson Learned'}
                  </h3>
                  <p className="text-green-700 font-bold text-base leading-relaxed">
                    {stories[selectedStory].lesson}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryPage;
