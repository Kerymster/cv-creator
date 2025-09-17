import { CVData } from '@/types/cvTypes/interfaces';

export const defaultCVData: CVData = {
  personalInfo: {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    website: 'johndoe.dev',
    photo: '', // Will be populated when user uploads a photo
  },
  summary:
    'Experienced Software Engineer with 5+ years of expertise in full-stack development, cloud architecture, and team leadership. Passionate about building scalable applications and mentoring junior developers. Proven track record of delivering high-quality software solutions that drive business growth.',
  skills: {
    technical: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'React',
      'Node.js',
      'Express',
      'Django',
      'PostgreSQL',
      'MongoDB',
    ],
    languages: [
      'English (Native)',
      'Spanish (Conversational)',
      'French (Basic)',
    ],
    tools: [
      'Git',
      'Docker',
      'AWS',
      'Kubernetes',
      'Jenkins',
      'Figma',
      'Jira',
      'Slack',
    ],
  },
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: [
        'Led development of microservices architecture serving 1M+ daily active users',
        'Mentored 3 junior developers and improved team productivity by 25%',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with product team to define technical requirements and roadmaps',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      startDate: '2020-06',
      endDate: '2021-12',
      current: false,
      description: [
        'Developed full-stack web applications using React and Node.js',
        'Built RESTful APIs handling 100K+ requests per day',
        'Optimized database queries improving response time by 40%',
        'Participated in agile development processes and code reviews',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      graduationDate: '2020-05',
      gpa: '3.8/4.0',
    },
  ],
  projects: [
    {
      name: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory management and payment processing',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker'],
      link: 'github.com/johndoe/ecommerce-platform',
    },
    {
      name: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates and team collaboration features',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'AWS'],
      link: 'github.com/johndoe/task-manager',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-03',
    },
    {
      name: 'Certified ScrumMaster (CSM)',
      issuer: 'Scrum Alliance',
      date: '2022-08',
    },
  ],
};
