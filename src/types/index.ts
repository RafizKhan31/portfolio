export type ThemeMode = 'light' | 'dark' | 'system';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'NLP & LLM' | 'Deep Learning & Time Series' | 'Healthcare AI' | 'Recommendation Systems';
  technologies: string[];
  summary: string;
  photo: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  results: string;
  githubUrl: string;
  liveUrl: string;
  metrics?: { label: string; value: string }[];
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentials?: string;
  issueDate: string;
  skills: string[];
  photo?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
}

export interface ResearchPaper {
  title: string;
  thesisType: string;
  institution: string;
  abstract: string;
  photo?: string;
  diagram?: string;
  datasets: string[];
  dimensions: string[];
  keyFinding: string;
  methodology: string[];
}
