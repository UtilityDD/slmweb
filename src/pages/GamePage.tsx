
import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, ArrowRight, Star } from 'lucide-react';
import { Language, AppPages } from '../types';

interface GamePageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
}

const GamePage: React.FC<GamePageProps> = ({ lang, onNavigate }) => {
  const isBn = lang === 'bn';
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      q: isBn ? "লাইনম্যান ফোনে বলল লাইন কাটা আছে। আপনি কি করবেন?" : "Lineman on phone says line is off. What will you do?",
      options: [
        { t: isBn ? "কথা বিশ্বাস করে কাজ শুরু করব" : "Believe him and start work", correct: false },
        { t: isBn ? "নিজে ডিসচার্জ রড লাগিয়ে চেক করব" : "Verify with discharge rod myself", correct: true }
      ]
    },
    {
      q: isBn ? "কাজের আগে কোনটি বেশি জরুরি?" : "What is most important before work?",
      options: [
        { t: isBn ? "দ্রুত কাজ শেষ করা" : "Finishing work fast", correct: false },
        { t: isBn ? "LOTO ও PPE নিশ্চিত করা" : "Ensuring LOTO & PPE", correct: true }
      ]
    }
  ];

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(score + 10);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="p-8 text-center animate-in zoom-in duration-300 max-w-4xl mx-auto">
        <div className="bg-amber-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="text-amber-500" size={48} />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">{isBn ? "দারুণ কাজ!" : "Great Job!"}</h2>
        <p className="text-slate-500 font-bold mb-8">
          {isBn ? `আপনার সুরক্ষা স্কোর: ${score}` : `Your Safety Score: ${score}`}
        </p>
        <div className="bg-white border-2 border-amber-200 p-6 rounded-3xl mb-8">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(3)].map((_, i) => <Star key={i} className="text-amber-400 fill-amber-400" size={24} />)}
          </div>
          <p className="text-sm font-black text-slate-700 uppercase">
            {isBn ? "আপনি একজন সচেতন লাইনম্যান" : "You are a conscious Lineman"}
          </p>
        </div>
        <button 
          onClick={() => { setStep(0); setScore(0); setFinished(false); }}
          className="w-full py-4 bg-amber-500 text-white font-black rounded-2xl shadow-lg"
        >
          {isBn ? "আবার খেলুন" : "Play Again"}
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-6 max-w-4xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800">{isBn ? "সুরক্ষা কুইজ" : "Safety Quiz"}</h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Question {step + 1}/{questions.length}</p>
        </div>
        <div className="bg-slate-100 px-4 py-2 rounded-full font-black text-slate-600">
          Score: {score}
        </div>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-xl mb-6">
        <p className="text-lg font-black text-slate-800 mb-8 leading-tight">
          {questions[step].q}
        </p>
        <div className="space-y-4">
          {questions[step].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.correct)}
              className="w-full text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-500 bg-slate-50 hover:bg-blue-50 transition-all group"
            >
              <span className="font-bold text-slate-700 group-hover:text-blue-700">{opt.t}</span>
            </button>
          ))}
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

export default GamePage;
