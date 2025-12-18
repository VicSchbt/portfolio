export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  technologies: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  repoUrl?: string;
  highlight: boolean;
  wip?: boolean;
};

export type Contact = {
  email: string;
  location: string;
  availability: string;
  social: {
    label: string;
    url: string;
  }[];
};

export type About = {
  name: string;
  title: string;
  summary: string;
};

export type PortfolioData = {
  about: About;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: Contact;
};


