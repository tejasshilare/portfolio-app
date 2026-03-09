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
      name: 'TEJAS SHILARE',
      location: 'Nagpur, India',
      email: 'tejasshilare15@gmail.com',
      phone: '+91 8237809765',
      linkedin: 'tejasshilare',
      github: 'tejasshilare',
      photo: 'assets/profile.jpeg'
    },
    summary: 'Full-stack developer with experience building responsive and scalable web applications using Angular, React, .NET and MERN stack. Skilled in developing modern UIs, integrating REST APIs, and delivering end-to-end web solutions. Experienced in agile development and version control with Git. Open to freelance and remote opportunities.',
    skills: [
      {
        category: 'Frontend',
        items: ['Angular', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
      },
      {
        category: 'MERN Stack',
        items: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'REST API development']
      },
      {
        category: 'Database',
        items: ['MongoDB', 'SQL Server']
      },
      {
        category: 'Tools',
        items: ['Git', 'GitHub', 'VS Code']
      },
      {
        category: 'Other',
        items: ['Responsive design', 'API integration', 'authentication (JWT)', 'deployment basics']
      }
    ],
    experience: [
      {
        title: 'Software Engineer',
        company: 'Capgemini',
        period: 'Oct 2024 – Dec 2025',
        achievements: [
          'Developed responsive web applications using Angular and React',
          'Integrated frontend with REST APIs and backend services',
          'Built reusable UI components and dashboards',
          'Fixed bugs and improved performance of web applications',
          'Worked in agile teams using Git-based workflows'
        ]
      },
      {
        title: 'Web Development Intern',
        company: 'RG-VP Web Solutions',
        period: 'Jun 2023 – Dec 2023',
        achievements: [
          'Designed and developed responsive websites',
          'Worked on frontend development and basic SEO'
        ]
      },
      {
        title: 'Martian Internship',
        company: 'Persistent Systems',
        period: 'Jun 2023 – Aug 2023',
        achievements: [
          'Training in full-stack web development and modern tools'
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
