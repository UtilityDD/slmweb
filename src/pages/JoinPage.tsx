import React, { useState, useEffect } from 'react';
import { AppPages, Language } from '../types';
import { 
  User, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  Send, 
  CheckCircle2,
  X,
  Copy,
  Check
} from 'lucide-react';

interface JoinPageProps {
  lang: Language;
  onNavigate: (page: AppPages) => void;
  prefilledMobile?: string;
}

const JoinPage: React.FC<JoinPageProps> = ({ lang, onNavigate, prefilledMobile = '' }) => {
  const isBn = lang === 'bn';
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: prefilledMobile,
    reason: '',
    workType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState('');
  const [copied, setCopied] = useState(false);

  // Update mobile field when prefilledMobile changes
  useEffect(() => {
    if (prefilledMobile) {
      setFormData(prev => ({ ...prev, mobile: prefilledMobile }));
    }
  }, [prefilledMobile]);

  const workOptions = [
    { id: 'lineman', label: isBn ? 'লাইনম্যান' : 'Lineman' },
    { id: 'operator', label: isBn ? 'অপারেটর' : 'Operator' },
    { id: 'technical', label: isBn ? 'টেকনিক্যাল-অন্যান্য' : 'Technical-Others' },
    { id: 'non-technical', label: isBn ? 'নন-টেকনিক্যাল' : 'Non-Technical' },
  ];

  const generateToken = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SLM-${timestamp}-${random}`;
  };

  const handleWorkTypeChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      workType: id
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedToken = generateToken();
    setToken(generatedToken);

    // Prepare email content
    const workTypeLabel = workOptions.find(opt => opt.id === formData.workType)?.label || formData.workType;

    const emailBody = `
New Registration Request
========================
Token: ${generatedToken}

Name: ${formData.name}
Age: ${formData.age}
Mobile: ${formData.mobile}
Work Type: ${workTypeLabel}

Reason for Joining:
${formData.reason}

------------------------
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:support@smartlineman.in?subject=New%20Registration%20-%20Token%3A%20${generatedToken}&body=${encodeURIComponent(emailBody)}`;
    
    // Simulate processing delay
    setTimeout(() => {
      // Open email client
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setShowModal(true);
    }, 1000);
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 lg:p-6 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-black text-slate-800 mb-2">
          {isBn ? "আমাদের সাথে যোগ দিন" : "Join Us"}
        </h1>
        <p className="text-slate-500 font-medium">
          {isBn ? "স্মার্ট লাইনম্যান কমিউনিটিতে স্বাগতম" : "Welcome to Smart Lineman Community"}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 mb-2">
            <User size={16} />
            {isBn ? "নাম" : "Name"} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder={isBn ? "আপনার পুরো নাম" : "Your full name"}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Age */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 mb-2">
            {isBn ? "বয়স" : "Age"} *
          </label>
          <input
            type="number"
            required
            min="18"
            max="70"
            value={formData.age}
            onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
            placeholder={isBn ? "আপনার বয়স" : "Your age"}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Work Type */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 mb-3">
            <Briefcase size={16} />
            {isBn ? "কাজ/পেশা" : "Work/Job"} *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {workOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.workType === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="workType"
                  checked={formData.workType === option.id}
                  onChange={() => handleWorkTypeChange(option.id)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  formData.workType === option.id
                    ? 'border-blue-500'
                    : 'border-slate-300 bg-white'
                }`}>
                  {formData.workType === option.id && (
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  )}
                </div>
                <span className="font-bold text-sm text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 mb-2">
            <Phone size={16} />
            {isBn ? "মোবাইল নম্বর" : "Mobile Number"} *
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
            placeholder={isBn ? "১০ ডিজিটের মোবাইল নম্বর" : "10-digit mobile number"}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Reason */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 mb-2">
            <MessageSquare size={16} />
            {isBn ? "কেন যোগ দিতে চান?" : "Why do you want to join?"} *
          </label>
          <textarea
            required
            rows={4}
            value={formData.reason}
            onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            placeholder={isBn ? "আপনার কারণ লিখুন..." : "Write your reason..."}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || formData.workType.length === 0}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-400 disabled:to-slate-500 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all text-lg"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              {isBn ? "পাঠানো হচ্ছে..." : "Submitting..."}
            </>
          ) : (
            <>
              <Send size={20} />
              {isBn ? "জমা দিন" : "Submit"}
            </>
          )}
        </button>

      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-6 lg:p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => { setShowModal(false); onNavigate(AppPages.DASHBOARD); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              
              <h2 className="text-2xl font-black text-slate-800 mb-2">
                {isBn ? "সফলভাবে জমা হয়েছে!" : "Successfully Submitted!"}
              </h2>
              
              <p className="text-slate-500 font-medium mb-6">
                {isBn 
                  ? "আপনার আবেদন পাঠানো হয়েছে। নিচের টোকেনটি সংরক্ষণ করুন।" 
                  : "Your application has been sent. Save the token below."}
              </p>

              {/* Token Display */}
              <div className="bg-slate-100 rounded-2xl p-4 mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {isBn ? "আপনার টোকেন" : "Your Token"}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <code className="text-xl lg:text-2xl font-black text-blue-600 tracking-wider">
                    {token}
                  </code>
                  <button 
                    onClick={copyToken}
                    className="bg-white p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-slate-400" />}
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-medium mb-6">
                {isBn 
                  ? "এই টোকেনটি ইমেইলেও পাঠানো হবে। ভবিষ্যতে এটি রেফারেন্স হিসেবে ব্যবহার করুন।" 
                  : "This token will also be sent via email. Use it as reference in future."}
              </p>

              <button
                onClick={() => { setShowModal(false); onNavigate(AppPages.DASHBOARD); }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-colors"
              >
                {isBn ? "ড্যাশবোর্ডে যান" : "Go to Dashboard"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default JoinPage;
