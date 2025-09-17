import {
  faCode,
  faDatabase,
  faServer,
  faCloud,
  faPalette,
  faCog,
  faLanguage,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
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
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Skills icon mapping
export const skillsIconMap: Record<string, IconDefinition> = {
  // Programming Languages
  JavaScript: faJs,
  JS: faJs,
  TypeScript: faJs, // Using JS icon for TypeScript
  TS: faJs,
  Python: faPython,
  Java: faJava,
  PHP: faPhp,
  Rust: faCode, // Fallback icon
  Go: faCode, // Fallback icon
  Swift: faCode, // Fallback icon
  Kotlin: faCode, // Fallback icon
  "C#": faCode, // Fallback icon
  CSharp: faCode, // Fallback icon
  R: faCode, // Fallback icon
  Ruby: faCode, // Fallback icon

  // Frontend Frameworks & Libraries
  React: faReact,
  Vue: faVuejs,
  "Vue.js": faVuejs,
  Angular: faAngular,
  "Node.js": faNodeJs,
  Node: faNodeJs,
  Express: faNodeJs, // Using Node.js icon for Express
  "Next.js": faReact, // Using React icon for Next.js
  Nuxt: faVuejs, // Using Vue icon for Nuxt

  // Backend Frameworks
  Django: faPython, // Using Python icon for Django
  Flask: faPython, // Using Python icon for Flask
  Laravel: faLaravel,
  Spring: faJava, // Using Java icon for Spring
  FastAPI: faPython, // Using Python icon for FastAPI

  // Databases
  PostgreSQL: faDatabase, // Fallback icon
  Postgres: faDatabase, // Fallback icon
  MongoDB: faDatabase, // Fallback icon
  MySQL: faDatabase, // Fallback icon
  Redis: faDatabase, // Fallback icon
  Elasticsearch: faDatabase, // Fallback icon
  SQLite: faDatabase, // Fallback icon

  // Cloud & DevOps
  AWS: faAws,
  Docker: faDocker,
  Kubernetes: faCode, // Fallback icon
  K8s: faCode, // Fallback icon
  Jenkins: faCode, // Fallback icon
  Terraform: faCode, // Fallback icon
  Ansible: faCode, // Fallback icon
  Nginx: faCode, // Fallback icon
  Apache: faCode, // Fallback icon
  Heroku: faCode, // Fallback icon
  Vercel: faCode, // Fallback icon
  Netlify: faCode, // Fallback icon
  Firebase: faCode, // Fallback icon
  Supabase: faCode, // Fallback icon
  DigitalOcean: faCode, // Fallback icon
  "Google Cloud": faCode, // Fallback icon
  GCP: faCode, // Fallback icon
  Azure: faMicrosoft,
  Microsoft: faMicrosoft,

  // Version Control & Tools
  Git: faGit,
  GitHub: faGithub,
  GitLab: faGit, // Using Git icon for GitLab
  Bitbucket: faGit, // Using Git icon for Bitbucket

  // Design & UI/UX
  Figma: faFigma,
  Adobe: faPalette, // Fallback icon
  Photoshop: faPalette, // Fallback icon
  Illustrator: faPalette, // Fallback icon
  Sketch: faPalette, // Fallback icon

  // Web Technologies
  HTML: faHtml5,
  HTML5: faHtml5,
  CSS: faCss3Alt,
  CSS3: faCss3Alt,
  Sass: faSass,
  SCSS: faSass,
  Bootstrap: faBootstrap,
  Tailwind: faCss3Alt, // Using CSS icon for Tailwind
  "Material-UI": faReact, // Using React icon for Material-UI
  Chakra: faReact, // Using React icon for Chakra UI

  // Operating Systems
  Linux: faLinux,
  Ubuntu: faUbuntu,
  Windows: faWindows,
  macOS: faApple,
  Mac: faApple,
  iOS: faApple, // Using Apple icon for iOS
  Android: faAndroid,

  // Project Management & Communication
  Jira: faJira,
  Confluence: faConfluence,
  Trello: faTrello,
  Asana: faCode, // Fallback icon
  Notion: faNotion,
  Slack: faSlack,
  Discord: faDiscord,
  Telegram: faTelegram,
  WhatsApp: faWhatsapp,
  Skype: faSkype,
  Zoom: faCode, // Fallback icon
  Teams: faMicrosoft,
  "Microsoft Teams": faMicrosoft,

  // Languages (Human Languages)
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

// Function to get icon for a skill
export const getSkillIcon = (skillName: string) => {
  // Try exact match first
  if (skillsIconMap[skillName]) {
    return skillsIconMap[skillName];
  }

  // Try case-insensitive match
  const lowerSkill = skillName.toLowerCase();
  for (const [key, icon] of Object.entries(skillsIconMap)) {
    if (key.toLowerCase() === lowerSkill) {
      return icon;
    }
  }

  // Try partial match for common patterns
  if (lowerSkill.includes("javascript") || lowerSkill.includes("js")) {
    return faJs;
  }
  if (lowerSkill.includes("python")) {
    return faPython;
  }
  if (lowerSkill.includes("react")) {
    return faReact;
  }
  if (lowerSkill.includes("node")) {
    return faNodeJs;
  }
  if (lowerSkill.includes("java")) {
    return faJava;
  }
  if (lowerSkill.includes("docker")) {
    return faDocker;
  }
  if (lowerSkill.includes("aws")) {
    return faAws;
  }
  if (lowerSkill.includes("git")) {
    return faGit;
  }
  if (lowerSkill.includes("database") || lowerSkill.includes("db")) {
    return faDatabase;
  }
  if (lowerSkill.includes("cloud")) {
    return faCloud;
  }
  if (lowerSkill.includes("server")) {
    return faServer;
  }
  if (
    lowerSkill.includes("design") ||
    lowerSkill.includes("ui") ||
    lowerSkill.includes("ux")
  ) {
    return faPalette;
  }
  if (lowerSkill.includes("tool") || lowerSkill.includes("utility")) {
    return faCog;
  }
  if (lowerSkill.includes("language") || lowerSkill.includes("speak")) {
    return faLanguage;
  }
  if (lowerSkill.includes("web") || lowerSkill.includes("website")) {
    return faGlobe;
  }

  // Default fallback icon
  return faCode;
};

// Function to get icon color for a skill (optional enhancement)
export const getSkillIconColor = (skillName: string): string => {
  const lowerSkill = skillName.toLowerCase();

  // Brand colors for popular technologies
  if (lowerSkill.includes("javascript") || lowerSkill.includes("js")) {
    return "#F7DF1E"; // JavaScript yellow
  }
  if (lowerSkill.includes("react")) {
    return "#61DAFB"; // React blue
  }
  if (lowerSkill.includes("node") || lowerSkill.includes("nodejs")) {
    return "#339933"; // Node.js green
  }
  if (lowerSkill.includes("python")) {
    return "#3776AB"; // Python blue
  }
  if (lowerSkill.includes("java")) {
    return "#ED8B00"; // Java orange
  }
  if (lowerSkill.includes("docker")) {
    return "#2496ED"; // Docker blue
  }
  if (lowerSkill.includes("aws")) {
    return "#FF9900"; // AWS orange
  }
  if (lowerSkill.includes("git")) {
    return "#F05032"; // Git red
  }
  if (lowerSkill.includes("mongodb")) {
    return "#47A248"; // MongoDB green
  }
  if (lowerSkill.includes("postgresql") || lowerSkill.includes("postgres")) {
    return "#336791"; // PostgreSQL blue
  }

  // Default color
  return "#6B7280"; // Gray-500
};
