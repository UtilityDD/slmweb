
export type Language = 'bn' | 'en';

export interface Translation {
  title: string;
  subtitle: string;
  [key: string]: string | any;
}

export interface PageProps {
  lang: Language;
  onNavigate: (page: string) => void;
}

export enum AppPages {
  STORY = 'story',
  INTRO = 'intro',
  SAFETY = 'safety',
  TECH = 'tech',
  FIRSTAID = 'firstaid',
  EMERGENCY = 'emergency',
  BLOOD = 'blood',
  LEGAL = 'legal',
  TOOLKIT = 'toolkit',
  GAME = 'game',
  COMMUNITY = 'community',
  DASHBOARD = 'dashboard',
  JOIN = 'join'
}
