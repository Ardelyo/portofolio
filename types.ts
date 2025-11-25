export type LocalizedString = {
  en: string;
  id: string;
};

export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  details?: LocalizedString; // Long form content
  status: 'Live Project' | 'Under Maintenance' | 'Abandoned';
  link?: string;
  hasReadMore: boolean;
  techStack?: string[];
  role?: LocalizedString;
  year?: string;
}

export interface Writing {
  id: string;
  title: string;
  subtitle?: LocalizedString;
  excerpt: LocalizedString;
  content?: LocalizedString; // Long form content
  quote?: LocalizedString;
}

export interface Experience {
  year: string;
  description: LocalizedString;
}

export interface Skill {
  category: string;
  percentage: number;
  items: string[];
}

export interface Socials {
  github: string;
  instagram: string;
  tiktok: string;
  twitter?: string;
  email?: string;
}