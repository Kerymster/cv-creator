export interface CVData {
  personalInfo: personalInfo;
  skills: skills;
  experience: experience[];
  education: education[];
  projects: projects[];
  certifications: certifications[];
  summary: string;
}

export interface personalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface skills {
  technical: string[];
  languages: string[];
  tools: string[];
}

export interface experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface education {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

export interface projects {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface certifications {
  name: string;
  issuer: string;
  date: string;
}
