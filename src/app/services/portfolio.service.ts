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
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
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
      location: 'Nagpur, Maharashtra, India',
      email: 'tejasshilare15@gmail.com',
      phone: '+91 8237809765',
      linkedin: 'tejasshilare',
      github: 'tejasshilare',
      portfolio: 'tejasshilare-portfolio-app.vercel.app',
      photo: 'assets/profile.jpeg'
    },
    summary: 'Full-Stack Software Developer and AI Trainer with over two years of professional experience spanning enterprise software development, backend engineering, frontend development, AI model evaluation, and technical problem solving. I enjoy building scalable systems, writing clean code, and improving AI systems through structured evaluation methodologies.',
    skills: [
      {
        category: 'Backend Development',
        items: ['ASP.NET', '.NET Core', 'REST API Development', 'API Integration', 'Authentication', 'Authorization', 'CRUD Operations', 'Service Layer Design', 'SQL Query Optimization']
      },
      {
        category: 'Frontend Development',
        items: ['Angular', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design', 'Bootstrap', 'Tailwind CSS', 'Component-Based Development', 'UI Optimization']
      },
      {
        category: 'Programming Languages',
        items: ['Java', 'C#', 'JavaScript', 'TypeScript', 'C++', 'C']
      },
      {
        category: 'Database Technologies',
        items: ['SQL Server', 'MongoDB', 'Database Design', 'Stored Procedures', 'Joins', 'Indexing Concepts', 'CRUD Operations', 'Data Modeling']
      },
      {
        category: 'AI & Machine Learning Evaluation',
        items: ['Prompt Engineering', 'Chain-of-Thought Evaluation', 'Instruction Tuning', 'Rubric Validation', 'Adversarial Testing', 'Model Evaluation', 'LLM Quality Assessment', 'Search Relevance', 'Reasoning Validation', 'Competitive Programming Evaluation', 'Annotation Quality Assurance']
      },
      {
        category: 'Cloud & DevOps',
        items: ['Microsoft Azure', 'Azure DevOps', 'Git', 'GitHub', 'CI/CD Pipelines', 'Agile Development', 'Sprint Planning']
      }
    ],
    experience: [
      {
        title: 'Software Engineer',
        company: 'Capgemini',
        period: 'October 2024 – December 2025',
        achievements: [
          'Built and maintained backend services using ASP.NET and .NET Core for enterprise applications.',
          'Developed RESTful APIs, implemented business logic, and handled authentication and exception workflows.',
          'Worked with SQL Server for query optimization, stored procedures, and efficient database integration.',
          'Contributed to Angular and React UI development for dashboards, forms, data tables, and responsive layouts.',
          'Collaborated in Agile Scrum teams using Azure DevOps, Git, pull requests, and branch management.'
        ]
      },
      {
        title: 'Freelance AI Trainer',
        company: 'Outlier',
        period: 'January 2024 – Present',
        achievements: [
          'Evaluated LLM responses for accuracy, completeness, reasoning, safety, helpfulness, and consistency.',
          'Improved model performance through instruction tuning, rubric validation, and adversarial testing.',
          'Designed and validated programming tasks, edge cases, and hidden test cases for competitive programming evaluation.',
          'Performed annotation work across text, image, audio, and video while maintaining quality standards.'
        ]
      },
      {
        title: 'Web Development Intern',
        company: 'RG-VP Web Solutions',
        period: 'June 2023 – December 2023',
        achievements: [
          'Developed responsive websites using HTML, CSS, and JavaScript with SEO-oriented implementation.',
          'Built landing pages, navigation components, and contact forms while improving UI quality.',
          'Applied semantic HTML, meta tags, and image optimization techniques for better performance.'
        ]
      },
      {
        title: 'Martian Internship',
        company: 'Persistent Systems',
        period: 'June 2023 – August 2023',
        achievements: [
          'Completed intensive training in full-stack development, backend fundamentals, frontend development, and database concepts.',
          'Worked with Agile practices and Git workflows while building practice applications that demonstrated end-to-end development skills.'
        ]
      }
    ],
    projects: [],
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
      degree: 'Bachelor of Technology (B.Tech.) – Information Technology',
      institution: 'G H Raisoni College of Engineering',
      year: '2024'
    }
  });

  getPortfolioData() {
    return this.portfolioData.asReadonly();
  }
}
