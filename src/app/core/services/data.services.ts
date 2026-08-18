import { Injectable } from '@angular/core';
import { AppConfig } from '../config/app.config';


const experienceData = [
  {
    "company": "Civil Group / BEST WAY NETWORK",
    "role": "Developer .NET Full Stack",
    "period": "Julio 2025 – Mayo 2026",
    "location": "Remoto",
    "description": [
      "Lideré integración end-to-end con Tyler Technologies bajo especificación EFSP/ECF 5, alcanzando 80–90% de efectividad en certificación.",
      "Reduje el tiempo de mantenimiento del backend en 80% aplicando SOLID y separación de responsabilidades.",
      "Diseñé controladores especializados para paseo de esquemas XML hacia SQL Server.",
      "Migré aplicación móvil corporativa de Java (Android Studio) a Flutter.",
      "Desplegué APIs REST en .NET para extraer lógica de negocio de sistemas legacy en Visual Basic."
    ],
    "technologies": [".NET 8", "ASP.NET Core", "Blazor", "SQL Server", "Flutter", "Docker", "Git"]
  },
  {
    "company": "Gastronomia Italiana en Colombia S.A",
    "role": "Intern Developer (Full-Stack)",
    "period": "Febrero 2024 – Agosto 2024",
    "location": "Remoto",
    "description": [
      "Reduje tiempos de procesamiento de ingesta de datos en 80% con Spring Boot, Angular y SQL Server.",
      "Co-desarrollé herramientas de generación automatizada de reportes contables consolidados.",
      "Ejecuté mantenimiento evolutivo y corrección de fallos en producción."
    ],
    "technologies": ["Spring Boot", "Angular", "SQL Server"]
  }
];

const projectsData = [
  {
    "name": "Sistema de Integración Legal EFSP/ECF 5",
    "description": "Plataforma de integración con Tyler Technologies para procesamiento de documentos legales.",
    "problem": "Sistemas legacy sin capacidad de interoperar con estándares modernos.",
    "solution": "Arquitectura en capas con .NET Core, integración SOAP/XML y mapeo automático.",
    "technologies": [".NET 8", "ASP.NET Core", "SQL Server", "Docker", "Blazor"],
    "github": "https://github.com/davidevelezg/legal-integration-system"
  },
  {
    "name": "App Móvil Corporativa — Flutter",
    "description": "Migración de aplicación móvil Android nativa a Flutter.",
    "problem": "Código base fragmentado en múltiples subprocesos (logística, inventarios, administración).",
    "solution": "Arquitectura modular en Flutter con integración de hardware (handhelds).",
    "technologies": ["Flutter", "Dart", "REST APIs", "SQL Server"],
    "github": "https://github.com/davidevelezg/corporate-mobile-flutter"
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
  constructor() {}

  getExperience() { return experienceData; }
  getProjects() { return projectsData; }
  getSkills() { return skillsData; }
  getConfig() { return AppConfig; }
}