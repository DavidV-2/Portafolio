import { Injectable } from '@angular/core';
import { AppConfig } from '../config/app.config';


const experienceData = [
  {
    "company": "Civil Group / BEST WAY NETWORK",
    "role": "Full-Stack .NET Developer",
    "period": "July 2025 – May 2026 | Remote",
    "Project": "Enterprise-level electronic court filing (e-filing) system for U.S. courts",
    "description": [
      "Led end-to-end integration with Tyler Technologies under EFSP/ECF 5, tokenizing payments via Chase Paymentech and serializing digitally signed SOAP/XML messages.",
      "Engineered specialized drivers for parsing XML schemas and mapping them automatically to relational structures in SQL Server.",
      "Optimized backend maintainability by 80% using SOLID principles, separation of concerns, and managing database migrations with FactoryContext.",
      "Built dynamic Blazor (BitBlazor) interfaces and reduced client-side error diagnosis time by 80% via browser debugging tool workflows."
    ],
    "technologies": [".NET", "ASP.NET Core", "BitBlazor", "SQL Server", "Git", "Entity Framework Core", "SOAP/XML", "Chase Paymentech", "EFSP/ECF 5"]
  },
  {
    "company": "Corsan Metal Industries S.A.S.",
    "role": "Full-Stack & Mobile Developer",
    "period": "November 2024 – June 2025 | In-person",
    "Project": "SPIC Corporate Ecosystem (Logistics, Production, and Mobile Operations)",
    "description": [
      "Led the strategic transition and migration of the native mobile app from Java (Android Studio) to Flutter, unifying codebase modules across logistics, inventory, and admin.",
      "Designed and deployed .NET REST APIs to securely extract business logic from legacy Visual Basic systems without interrupting plant operations.",
      "Integrated handheld scanning hardware for automated barcode/ticket processing, eliminating manual data entry errors and maintaining legacy stability.",
      "Served as direct technical liaison to map complex manual plant-floor operations into digital desktop and mobile workflows."
    ],
    "technologies": ["Flutter", "Dart", ".NET Core", "REST APIs", "SQL Server", "Git"]
  },
  {
    "company": "Italian Gastronomy in Colombia, Inc.",
    "role": "Software Development Intern (Full-Stack)",
    "period": "February 2024 – August 2024 | Remote",
    "Project": "Internal Enterprise Applications & Data Processing Systems",
    "description": [
      "Designed automation pipelines for data file transformation and bulk ingestion, reducing processing times by 80%.",
      "Co-developed automated reporting tools for consolidated financial data across international offices.",
      "Executed evolutionary maintenance and production bug fixes to ensure operational stability of internal corporate modules."
    ],
    "technologies": ["Java", ".NET", "ASP.NET Core", "Spring Boot", "Angular", "SQL Server", "TypeScript"]
  }
];

const projectsData = [
  {
    "name": "Solidarity Grid",
    "description": "Distributed payment processing platform based on Payment Mesh.",
    "problem": "Payment systems dependent on central coordinators or external messaging prone to failures.",
    "solution": "Decentralized architecture between nodes with task recovery and single transaction processing.",
    "technologies": [".NET 8", "SQL Server", "Docker", "C#"],
    "github": "https://github.com/DavidV-2/SolidarityGrid"
  },
  {
  "name": "OEFA Document Scraper",
  "description": "Automated scraper and bulk downloader of PDF documents.",
  "problem": "Inefficient manual extraction of regulatory publications and accompanying documents.",
  "solution": "Scraping engine under Clean Architecture with concurrent file download.",
  "technologies": ["TypeScript", "Node.js", "Clean Architecture"],
  "github": "https://github.com/DavidV-2/Scraping"
}
];

const skillsData = {
  "backend": ["C#", ".NET 8", "ASP.NET Core", "Entity Framework Core", "REST APIs", "SignalR"],
  "frontend": ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Blazor"],
  "database": ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
  "devops": ["Docker", "Azure", "Git", "CI/CD"],
  "architecture": ["Clean Architecture", "Hexagonal Architecture", "SOLID", "Repository Pattern"],
  "mobile": ["Flutter", "Dart", "Java (Android)"]
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getExperience() { return experienceData; }
  getProjects() { return projectsData; }
  getSkills() { return skillsData; }
  getConfig() { return AppConfig; }
}