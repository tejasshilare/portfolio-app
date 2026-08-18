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
    summary: 'Full-Stack Developer, Software Engineer, and AI Trainer with 2+ years of professional experience spanning enterprise software development, full-stack web application development, cloud technologies, and AI/LLM evaluation. Experienced in designing and developing production-oriented applications across the frontend, backend, database, and deployment layers. Strong hands-on experience with C#, .NET, ASP.NET Core, JavaScript, TypeScript, React, Angular, Node.js, Express.js, SQL Server, MongoDB, PostgreSQL, and Microsoft Azure.',
    skills: [
      {
        category: 'Software Engineering',
        items: ['Full-Stack Web Development', 'Backend Development', 'Frontend Development', 'REST API Development', 'API Integration', 'Enterprise Application Development', 'Object-Oriented Programming', 'Modular Architecture', 'Database Design', 'Authentication & Authorization', 'Debugging & Troubleshooting', 'Performance Optimization', 'Software Testing', 'Code Review', 'SDLC']
      },
      {
        category: 'AI & Machine Learning',
        items: ['LLM Evaluation', 'Prompt Engineering', 'Instruction Tuning', 'Response Ranking', 'Rubric-Based Evaluation', 'Programmatic Reasoning', 'Algorithmic Analysis', 'Chain-of-Thought Evaluation', 'Adversarial Testing', 'Edge-Case Analysis', 'Factuality Evaluation', 'Hallucination Detection', 'AI Safety Evaluation', 'AI Response Quality Assessment', 'Structured Human Feedback']
      },
      {
        category: 'Data & Annotation',
        items: ['Data Annotation', 'Text Annotation', 'Image Annotation', 'Audio Annotation', 'Video Annotation', 'Transcription', 'Translation', 'Content Labeling', 'Classification', 'Search Relevance Evaluation', 'Data Quality Assessment']
      },
      {
        category: 'Programming Languages',
        items: ['C#', 'JavaScript', 'TypeScript', 'Java', 'Python', 'SQL', 'C++', 'Rust', 'Go']
      },
      {
        category: 'Frontend Development',
        items: ['React', 'Angular', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Responsive Web Design', 'Reusable Components', 'State Management']
      },
      {
        category: 'Backend Development',
        items: ['Node.js', 'Express.js', 'ASP.NET', 'ASP.NET Core', '.NET', 'Spring Boot', 'REST API Development', 'API Integration', 'Authentication', 'Authorization', 'JWT', 'Business Logic', 'Middleware', 'Background Jobs', 'Service-Layer Architecture']
      },
      {
        category: 'Databases',
        items: ['Microsoft SQL Server', 'PostgreSQL', 'MongoDB', 'SQL', 'Relational Database Design', 'NoSQL Data Modeling', 'Query Optimization', 'Database Integration']
      },
      {
        category: 'Cloud & DevOps',
        items: ['Microsoft Azure', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Cloud Deployment', 'Agile/Scrum']
      }
    ],
    experience: [
      {
        title: 'Freelance AI Trainer & Full-Stack Developer',
        company: 'Outlier',
        period: 'January 2024 – Present',
        achievements: [
          'Evaluated AI-generated responses against detailed task requirements, evaluation rubrics, and quality standards to improve model accuracy, reasoning quality, and instruction following.',
          'Performed response ranking, preference evaluation, and structured feedback to identify the strongest outputs based on defined criteria.',
          'Reviewed generated code for correctness, logic, efficiency, robustness, maintainability, and edge cases across multiple programming languages and domains.',
          'Conducted adversarial testing, factuality checks, hallucination detection, and edge-case analysis to assess AI safety and reliability.',
          'Worked across text, image, audio, and video annotation tasks including transcription, translation, content labeling, classification, and search relevance evaluation.'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'Capgemini',
        period: 'October 2024 – December 2025',
        achievements: [
          'Developed and maintained backend services using C#, ASP.NET, ASP.NET Core, and .NET Core for enterprise applications.',
          'Implemented RESTful APIs, service-layer components, and business logic while integrating them with frontend applications and database systems.',
          'Worked extensively with Microsoft SQL Server to design and optimize queries, support database interactions, and improve application performance.',
          'Contributed to Angular and React-based frontend applications for UI screens, dashboards, data presentation, and API communication.',
          'Collaborated within Agile teams using Azure DevOps, Git, CI/CD pipelines, code reviews, and sprint-based development workflows.'
        ]
      },
      {
        title: 'Web Development & Digital Marketing Intern',
        company: 'RG-VP Web Solutions',
        period: 'June 2023 – December 2023',
        achievements: [
          'Designed and developed responsive websites using HTML, CSS, JavaScript, PHP, React, Angular, and Bootstrap.',
          'Improved website usability and presentation by implementing reusable frontend components, responsive layouts, and browser-compatible UI changes.',
          'Applied basic on-page SEO practices including page titles, meta descriptions, heading structures, internal linking, and content optimization for search visibility.',
          'Supported digital marketing and content optimization efforts to improve online presence and discoverability.'
        ]
      },
      {
        title: 'Martian Internship',
        company: 'Persistent Systems',
        period: 'June 2023 – August 2023',
        achievements: [
          'Received practical training in full-stack web development, version control, debugging, and modern software development workflows.',
          'Built foundational knowledge of frontend and backend development, database concepts, and collaborative engineering practices.',
          'Strengthened understanding of software engineering fundamentals through hands-on exercises and structured development activities.'
        ]
      }
    ],
    projects: [
      {
        title: 'OneNest — Personal All-in-One Organizer',
        description: 'A full-stack productivity platform designed to manage notes, reminders, calendars, expenses, budgets, investments, bills, and shopping tasks within a single application.',
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
        link: 'https://one-nest.vercel.app'
      },
      {
        title: 'WeCare — Community Support Platform',
        description: 'A community-oriented full-stack platform that connects donors and receivers, enabling donation listings, profiles, OTP verification, and user dashboards for support workflows.',
        technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
        link: 'https://wecare-demo.vercel.app'
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
      degree: 'Bachelor of Technology — Information Technology',
      institution: 'G H Raisoni College of Engineering, Nagpur',
      year: '2024'
    }
  });

  getPortfolioData() {
    return this.portfolioData.asReadonly();
  }
}
