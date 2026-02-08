
import React, { useState, useEffect, useCallback } from 'react';
import { translations } from './translations';
import { AppPages, Language } from './types';
import StoryPage from './pages/StoryPage';
import IntroPage from './pages/IntroPage';
import SafetyPage from './pages/SafetyPage';
import EmergencyPage from './pages/EmergencyPage';
import TechPage from './pages/TechPage';
import FirstAidPage from './pages/FirstAidPage';
import BloodPage from './pages/BloodPage';
import LegalPage from './pages/LegalPage';
import ToolkitPage from './pages/ToolkitPage';
import GamePage from './pages/GamePage';
import CommunityPage from './pages/CommunityPage';
import Dashboard from './pages/Dashboard';
import JoinPage from './pages/JoinPage';
import PWAUpdateNotification from './components/PWAUpdateNotification';
import {
  ShieldAlert,
  Zap,
  Stethoscope,
  PhoneCall,
  Droplets,
  Scale,
  Briefcase,
  Trophy,
  Users,
  Home,
  UserPlus
} from 'lucide-react';

// Helper to get page from URL hash
const getPageFromHash = (): AppPages => {
  const hash = window.location.hash.slice(1); // Remove #
  if (hash && Object.values(AppPages).includes(hash as AppPages)) {
    return hash as AppPages;
  }
  return AppPages.INTRO;
};

// Helper to get language from URL
const getLangFromUrl = (): Language => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  return (lang === 'en' || lang === 'bn') ? lang : 'bn';
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(getLangFromUrl);
  const [currentPage, setCurrentPage] = useState<AppPages>(getPageFromHash);
  const [hasAgreed, setHasAgreed] = useState(() => {
    // Check if user previously agreed (stored in localStorage)
    return localStorage.getItem('slm_agreed') === 'true';
  });
  const [prefilledMobile, setPrefilledMobile] = useState('');

  const t = translations[lang];

  // Update URL when page changes
  const updateUrl = useCallback((page: AppPages, newLang?: Language) => {
    const langParam = newLang || lang;
    const newUrl = `${window.location.pathname}?lang=${langParam}#${page}`;
    window.history.pushState({ page, lang: langParam }, '', newUrl);
  }, [lang]);

  // Navigate to a page
  const navigate = useCallback((page: AppPages, mobile?: string) => {
    // Allow JOIN and STORY pages even without agreement (for registration flow)
    if (!hasAgreed && page !== AppPages.STORY && page !== AppPages.JOIN) return;
    if (mobile) setPrefilledMobile(mobile);
    else setPrefilledMobile('');
    setCurrentPage(page);
    updateUrl(page);
    window.scrollTo(0, 0);
  }, [hasAgreed, updateUrl]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
        if (event.state.lang) {
          setLang(event.state.lang);
        }
      } else {
        // Fallback to reading from URL
        setCurrentPage(getPageFromHash());
        setLang(getLangFromUrl());
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial state in history
    const initialPage = getPageFromHash();
    const initialLang = getLangFromUrl();
    window.history.replaceState({ page: initialPage, lang: initialLang }, '',
      `${window.location.pathname}?lang=${initialLang}#${initialPage}`);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Store agreement in localStorage when it changes
  useEffect(() => {
    if (hasAgreed) {
      localStorage.setItem('slm_agreed', 'true');
    }
  }, [hasAgreed]);

  const toggleLang = () => {
    const newLang = lang === 'bn' ? 'en' : 'bn';
    setLang(newLang);
    updateUrl(currentPage, newLang);
  };

  // Handle story completion
  const handleStoryComplete = () => {
    setHasAgreed(true);
    setCurrentPage(AppPages.DASHBOARD);
    updateUrl(AppPages.DASHBOARD);
  };

  const renderPage = () => {
    switch (currentPage) {
      case AppPages.STORY:
        return <StoryPage lang={lang} onComplete={handleStoryComplete} />;
      case AppPages.INTRO:
        return <IntroPage lang={lang} onNavigate={(page, mobile) => navigate(page, mobile)} />;
      case AppPages.SAFETY:
        return <SafetyPage lang={lang} onNavigate={navigate} />;
      case AppPages.TECH:
        return <TechPage lang={lang} onNavigate={navigate} />;
      case AppPages.FIRSTAID:
        return <FirstAidPage lang={lang} onNavigate={navigate} />;
      case AppPages.EMERGENCY:
        return <EmergencyPage lang={lang} onNavigate={navigate} />;
      case AppPages.BLOOD:
        return <BloodPage lang={lang} onNavigate={navigate} />;
      case AppPages.LEGAL:
        return <LegalPage lang={lang} onNavigate={navigate} />;
      case AppPages.TOOLKIT:
        return <ToolkitPage lang={lang} onNavigate={navigate} />;
      case AppPages.GAME:
        return <GamePage lang={lang} onNavigate={navigate} />;
      case AppPages.COMMUNITY:
        return <CommunityPage lang={lang} onNavigate={navigate} />;
      case AppPages.DASHBOARD:
        return <Dashboard lang={lang} onNavigate={navigate} />;
      case AppPages.JOIN:
        return <JoinPage lang={lang} onNavigate={navigate} prefilledMobile={prefilledMobile} />;
      default:
        return <Dashboard lang={lang} onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* PWA Update Notification */}
      <PWAUpdateNotification />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(AppPages.DASHBOARD)}>
            <div className="bg-yellow-500 p-1.5 rounded-lg">
              <ShieldAlert className="text-white" size={20} />
            </div>
            <h1 className="font-bold text-lg text-slate-800">{t.appName}</h1>
          </div>

          {/* Desktop Navigation */}
          {hasAgreed && (
            <nav className="hidden lg:flex items-center gap-1">
              <DesktopNavItem
                label={t.nav.home}
                active={currentPage === AppPages.DASHBOARD}
                onClick={() => navigate(AppPages.DASHBOARD)}
              />
              <DesktopNavItem
                label={t.nav.community}
                active={currentPage === AppPages.COMMUNITY}
                onClick={() => navigate(AppPages.COMMUNITY)}
              />
              <DesktopNavItem
                label={t.nav.emergency}
                active={currentPage === AppPages.EMERGENCY}
                onClick={() => navigate(AppPages.EMERGENCY)}
              />
              <DesktopNavItem
                label={t.nav.sop}
                active={currentPage === AppPages.TOOLKIT}
                onClick={() => navigate(AppPages.TOOLKIT)}
              />
              {/* Desktop Story Button with Realistic Sad Eye */}
              <button
                onClick={() => navigate(AppPages.STORY)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors relative overflow-visible ${currentPage === AppPages.STORY
                  ? 'bg-red-100 text-red-700'
                  : 'text-red-600 hover:bg-red-50'
                  }`}
              >
                {/* Realistic Sad Eye */}
                <div className="sad-eye relative">
                  <div className="sad-eye-outer">
                    <div className="sad-eye-iris"></div>
                  </div>
                  {/* Realistic teardrop - from inner corner */}
                  <div className="teardrop teardrop-small absolute top-[14px] left-[8px] animate-[tearfall-slow_6s_ease-in_infinite] z-[100] pointer-events-none"></div>
                </div>
                {lang === 'bn' ? 'গল্প' : 'Stories'}
              </button>
              <button
                onClick={() => navigate(AppPages.JOIN)}
                className={`ml-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${currentPage === AppPages.JOIN
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                {t.nav.join}
              </button>
            </nav>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(AppPages.STORY)}
              className="lg:hidden flex items-center gap-1.5 bg-gradient-to-b from-red-50 to-red-100 px-3 py-1.5 rounded-full text-sm font-semibold text-red-600 border border-red-200 hover:from-red-100 hover:to-red-200 transition-all relative overflow-visible"
              title={lang === 'bn' ? 'বাস্তব ঘটনা' : 'Real Stories'}
            >
              {/* Realistic Sad Eye */}
              <div className="sad-eye relative">
                <div className="sad-eye-outer">
                  <div className="sad-eye-iris"></div>
                </div>
                {/* Realistic teardrop falling slowly - synced with blink - from inner corner */}
                <div className="teardrop absolute top-[14px] left-[9px] animate-[tearfall-slow_6s_ease-in_infinite] z-[100] pointer-events-none"></div>
              </div>
              <span className="hidden sm:inline">{lang === 'bn' ? 'গল্প' : 'Stories'}</span>
            </button>
            <button
              onClick={toggleLang}
              className="bg-slate-100 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              {t.switchLang}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24 lg:pb-0">
        {renderPage()}
      </main>

      {/* Bottom Navigation - Mobile Only */}
      {hasAgreed && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 flex justify-around items-center z-50">
          <NavItem icon={<Home size={22} />} label={t.nav.home} active={currentPage === AppPages.DASHBOARD} onClick={() => navigate(AppPages.DASHBOARD)} />
          <NavItem icon={<Users size={22} />} label={t.nav.community} active={currentPage === AppPages.COMMUNITY} onClick={() => navigate(AppPages.COMMUNITY)} />
          <NavItem icon={<PhoneCall size={22} />} label={t.nav.emergency} active={currentPage === AppPages.EMERGENCY} onClick={() => navigate(AppPages.EMERGENCY)} />
          <NavItem icon={<ShieldAlert size={22} />} label={t.nav.sop} active={currentPage === AppPages.TOOLKIT} onClick={() => navigate(AppPages.TOOLKIT)} />
          <NavItem icon={<UserPlus size={22} />} label={t.nav.join} active={currentPage === AppPages.JOIN} onClick={() => navigate(AppPages.JOIN)} highlighted />
        </nav>
      )}
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active: boolean, onClick: () => void, highlighted?: boolean }> = ({ icon, label, active, onClick, highlighted }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 flex-1 py-1 transition-colors ${highlighted
      ? 'text-white bg-blue-600 rounded-xl mx-1 py-2'
      : active
        ? 'text-blue-600'
        : 'text-slate-400'
      }`}
  >
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

// Desktop Navigation Item
const DesktopNavItem: React.FC<{ label: string, active: boolean, onClick: () => void }> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${active
      ? 'bg-slate-100 text-blue-600'
      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
      }`}
  >
    {label}
  </button>
);

export default App;
