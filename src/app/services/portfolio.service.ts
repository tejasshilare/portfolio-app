import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

interface PortfolioData {
  personalInfo: {
    name: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio?: string;
    photo?: string;
  };
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    achievements: string[];
  }[];
  certifications: {
    title: string;
    url?: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData = signal<PortfolioData>({
    personalInfo: {
      name: 'Tejas Shilare',
      location: 'Nagpur, India',
      email: 'tejasshilare15@gmail.com',
      phone: '+91 8237809765',
      linkedin: 'tejasshilare',
      github: 'tejasshilare',
      portfolio: 'tejasshilare-portfolio-app.vercel.app',
      photo: 'assets/profile.jpeg'
    },
    summary: 'Full‑stack developer with 2+ years of experience designing, developing, and deploying responsive and scalable web applications. Skilled in Angular, React, .NET, MERN, and MEAN stacks, with strong expertise in REST API integration, cloud computing (Azure), and AI model training. Certified in Microsoft Azure and AI fundamentals. Adept at agile methodologies, Git version control, and remote collaboration. Proven ability to deliver end‑to‑end solutions, optimize performance, and contribute to enterprise‑level projects.',
    skills: [
      {
        category: 'Frontend Development',
        items: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
      },
      {
        category: 'Backend Development',
        items: ['Node.js', 'RESTful API design & integration', 'ASP.NET', '.NET Core', 'MERN', 'MEAN']
      },
      {
        category: 'Database Management',
        items: ['MongoDB', 'SQL Server']
      },
      {
        category: 'Cloud & DevOps',
        items: ['Microsoft Azure', 'Azure DevOps']
      },
      {
        category: 'AI & Emerging Tech',
        items: ['AI model training', 'Prompt engineering', 'RLHF', 'Fine‑tuning', 'Text Generation', 'Summarization', 'Evaluation']
      },
      {
        category: 'Tools & Platforms',
        items: ['Git', 'Hubstaff', 'Outlier Dashboard', 'Visual Studio Code', 'Postman', 'Docker (basic)', 'GitHub Actions']
      }
    ],
    experience: [
      {
        title: 'Freelance Full-Stack Developer & AI Trainer',
        company: 'Remote',
        period: 'Jan 2024 – Present',
        achievements: [
          'Completed structured micro‑tasks including image description, difference detection, and coding assessments',
          'Demonstrated attention to detail and accuracy under time constraints',
          'Delivered multiple client projects using Angular, React, MERN, and MEAN stacks',
          'Designed responsive UIs with modern frameworks (Tailwind, Bootstrap)',
          'Built and integrated REST APIs with authentication and deployment pipelines',
          'Trained AI models for automation, text generation, and evaluation tasks',
          'Collaborated remotely, managing complete project lifecycles independently'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'Capgemini',
        period: 'Oct 2024 – Dec 2025',
        achievements: [
          'Developed and optimized Angular and React applications, reducing load times by 25%',
          'Integrated frontend components with backend services, improving scalability',
          'Designed reusable UI dashboards adopted across multiple enterprise projects',
          'Collaborated in agile teams, contributing to 5+ successful client deliveries using Git workflows'
        ]
      },
      {
        title: 'Web Development Intern',
        company: 'RG‑VP Web Solutions',
        period: 'Jun 2023 – Dec 2023',
        achievements: [
          'Designed and developed responsive websites using HTML, CSS, and JavaScript frameworks',
          'Implemented SEO practices to improve client site visibility',
          'Gained hands‑on experience in client communication and project delivery'
        ]
      },
      {
        title: 'Martian Internship',
        company: 'Persistent Systems',
        period: 'Jun 2023 – Aug 2023',
        achievements: [
          'Trained in full‑stack web development, gaining practical knowledge of frameworks and databases',
          'Built foundational skills in modern development practices and collaborative workflows'
        ]
      }
    ],
    certifications: [
      {
        title: 'Microsoft Certified: AZ-204 – Developing Solutions for Microsoft Azure',
        url: 'https://learn.microsoft.com/en-us/users/dhanrajshilaretejas-2250/credentials/475063a9890fadf0'
      },
      {
        title: 'Microsoft Certified: AZ-900 – Azure Fundamentals',
        url: 'https://learn.microsoft.com/en-us/users/dhanrajshilaretejas-2250/credentials/c8aaec8c16d17840'
      },
      {
        title: 'Microsoft Certified: AI-900 – Azure AI Fundamentals',
        url: 'https://learn.microsoft.com/en-us/users/dhanrajshilaretejas-2250/credentials/8d77cc423574f4e2'
      }
    ],
    education: {
      degree: 'Bachelor of Technology (BTech) – Information Technology',
      institution: 'G H Raisoni College of Engineering',
      year: '2024'
    }
  });

  getPortfolioData() {
    return this.portfolioData.asReadonly();
  }
}
