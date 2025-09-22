import {
  faCode,
  faDatabase,
  faServer,
  faCloud,
  faPalette,
  faCog,
  faLanguage,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
  faJs,
  faNodeJs,
  faReact,
  faPython,
  faJava,
  faDocker,
  faAws,
  faGit,
  faGithub,
  faFigma,
  faSlack,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faSass,
  faVuejs,
  faAngular,
  faLaravel,
  faPhp,
  faUbuntu,
  faLinux,
  faWindows,
  faApple,
  faAndroid,
  faMicrosoft,
  faJira,
  faConfluence,
  faTrello,
  faNotion,
  faDiscord,
  faTelegram,
  faWhatsapp,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export const skillsIconMap: Record<string, IconDefinition> = {
  JavaScript: faJs,
  JS: faJs,
  TypeScript: faJs,
  TS: faJs,
  Python: faPython,
  Java: faJava,
  PHP: faPhp,
  Rust: faCode,
  Go: faCode,
  Swift: faCode,
  Kotlin: faCode,
  'C#': faCode,
  CSharp: faCode,
  R: faCode,
  Ruby: faCode,

  React: faReact,
  Vue: faVuejs,
  'Vue.js': faVuejs,
  Angular: faAngular,
  'Node.js': faNodeJs,
  Node: faNodeJs,
  Express: faNodeJs,
  'Next.js': faReact,
  Nuxt: faVuejs,

  Django: faPython,
  Flask: faPython,
  Laravel: faLaravel,
  Spring: faJava,
  FastAPI: faPython,

  PostgreSQL: faDatabase,
  Postgres: faDatabase,
  MongoDB: faDatabase,
  MySQL: faDatabase,
  Redis: faDatabase,
  Elasticsearch: faDatabase,
  SQLite: faDatabase,

  AWS: faAws,
  Docker: faDocker,
  Kubernetes: faCode,
  K8s: faCode,
  Jenkins: faCode,
  Terraform: faCode,
  Ansible: faCode,
  Nginx: faCode,
  Apache: faCode,
  Heroku: faCode,
  Vercel: faCode,
  Netlify: faCode,
  Firebase: faCode,
  Supabase: faCode,
  DigitalOcean: faCode,
  'Google Cloud': faCode,
  GCP: faCode,
  Azure: faMicrosoft,
  Microsoft: faMicrosoft,

  Git: faGit,
  GitHub: faGithub,
  GitLab: faGit,
  Bitbucket: faGit,

  Figma: faFigma,
  Adobe: faPalette,
  Photoshop: faPalette,
  Illustrator: faPalette,
  Sketch: faPalette,

  HTML: faHtml5,
  HTML5: faHtml5,
  CSS: faCss3Alt,
  CSS3: faCss3Alt,
  Sass: faSass,
  SCSS: faSass,
  Bootstrap: faBootstrap,
  Tailwind: faCss3Alt,
  'Material-UI': faReact,
  Chakra: faReact,

  Linux: faLinux,
  Ubuntu: faUbuntu,
  Windows: faWindows,
  macOS: faApple,
  Mac: faApple,
  iOS: faApple,
  Android: faAndroid,

  Jira: faJira,
  Confluence: faConfluence,
  Trello: faTrello,
  Asana: faCode,
  Notion: faNotion,
  Slack: faSlack,
  Discord: faDiscord,
  Telegram: faTelegram,
  WhatsApp: faWhatsapp,
  Skype: faSkype,
  Zoom: faCode,
  Teams: faMicrosoft,
  'Microsoft Teams': faMicrosoft,

  English: faLanguage,
  Spanish: faLanguage,
  French: faLanguage,
  German: faLanguage,
  Italian: faLanguage,
  Portuguese: faLanguage,
  Chinese: faLanguage,
  Japanese: faLanguage,
  Korean: faLanguage,
  Arabic: faLanguage,
  Russian: faLanguage,
  Hindi: faLanguage,
};

export const getSkillIcon = (skillName: string) => {
  if (skillsIconMap[skillName]) {
    return skillsIconMap[skillName];
  }

  const baseLanguage = skillName.split(' (')[0].trim();
  if (skillsIconMap[baseLanguage]) {
    return skillsIconMap[baseLanguage];
  }

  const lowerSkill = skillName.toLowerCase();
  for (const [key, icon] of Object.entries(skillsIconMap)) {
    if (key.toLowerCase() === lowerSkill) {
      return icon;
    }
  }

  const lowerBaseLanguage = baseLanguage.toLowerCase();
  for (const [key, icon] of Object.entries(skillsIconMap)) {
    if (key.toLowerCase() === lowerBaseLanguage) {
      return icon;
    }
  }

  if (lowerSkill.includes('javascript') || lowerSkill.includes('js')) {
    return faJs;
  }
  if (lowerSkill.includes('python')) {
    return faPython;
  }
  if (lowerSkill.includes('react')) {
    return faReact;
  }
  if (lowerSkill.includes('node')) {
    return faNodeJs;
  }
  if (lowerSkill.includes('java')) {
    return faJava;
  }
  if (lowerSkill.includes('docker')) {
    return faDocker;
  }
  if (lowerSkill.includes('aws')) {
    return faAws;
  }
  if (lowerSkill.includes('git')) {
    return faGit;
  }
  if (lowerSkill.includes('database') || lowerSkill.includes('db')) {
    return faDatabase;
  }
  if (lowerSkill.includes('cloud')) {
    return faCloud;
  }
  if (lowerSkill.includes('server')) {
    return faServer;
  }
  if (
    lowerSkill.includes('design') ||
    lowerSkill.includes('ui') ||
    lowerSkill.includes('ux')
  ) {
    return faPalette;
  }
  if (lowerSkill.includes('tool') || lowerSkill.includes('utility')) {
    return faCog;
  }
  if (lowerSkill.includes('language') || lowerSkill.includes('speak')) {
    return faLanguage;
  }
  if (lowerSkill.includes('web') || lowerSkill.includes('website')) {
    return faGlobe;
  }

  return faCode;
};

export const getSkillIconColor = (skillName: string): string => {
  const lowerSkill = skillName.toLowerCase();

  if (lowerSkill.includes('javascript') || lowerSkill.includes('js')) {
    return '#F7DF1E';
  }
  if (lowerSkill.includes('react')) {
    return '#61DAFB';
  }
  if (lowerSkill.includes('node') || lowerSkill.includes('nodejs')) {
    return '#339933';
  }
  if (lowerSkill.includes('python')) {
    return '#3776AB';
  }
  if (lowerSkill.includes('java')) {
    return '#ED8B00';
  }
  if (lowerSkill.includes('docker')) {
    return '#2496ED';
  }
  if (lowerSkill.includes('aws')) {
    return '#FF9900';
  }
  if (lowerSkill.includes('git')) {
    return '#F05032';
  }
  if (lowerSkill.includes('mongodb')) {
    return '#47A248';
  }
  if (lowerSkill.includes('postgresql') || lowerSkill.includes('postgres')) {
    return '#336791';
  }

  return '#6B7280';
};
