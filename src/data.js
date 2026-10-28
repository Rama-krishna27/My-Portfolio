export const profile = {
  name: "Ramakrishna Maddinapudi",
  title: "Senior Full Stack .NET Developer",
  email: "maddinapudikrishna330@gmail.com",
  phone: "+1 (919) 421-4520",
  linkedin: "https://www.linkedin.com/in/ramakrishnam0127/",
  github: null,
};

export const experience = [
  {
    company: "Public-sector enterprise applications",
    location: "United States",
    role: "Senior .NET Full Stack Developer",
    start: "Apr 2023",
    end: "Present",
    domain: "Government",
    summary:
      "Modernizing enterprise services and connecting complex business workflows.",
    achievements: [
      "Engineered ASP.NET Core APIs and reusable Angular and Blazor components for enterprise business workflows.",
      "Orchestrated event-driven integrations with Azure Functions and Service Bus, including retries, message correlation, and exception handling.",
      "Secured REST APIs with API Management, Key Vault, Microsoft Entra ID, and Managed Identities; integrated document storage and relational processing.",
      "Optimized SQL Server queries, investigated production incidents with Application Insights, and maintained Azure DevOps releases with xUnit and Jasmine validation.",
    ],
    tags: [".NET 6", "Angular 18", "Azure Functions", "Service Bus"],
  },
  {
    company: "Healthcare & laboratory systems",
    location: "United States",
    role: "Senior .NET Full Stack Developer",
    start: "Sep 2021",
    end: "Mar 2023",
    domain: "Healthcare",
    summary:
      "Building connected applications for laboratory and patient information workflows.",
    achievements: [
      "Developed ASP.NET Core APIs and reusable Angular 14 components for laboratory, patient information, and diagnostic workflows.",
      "Applied Onion Architecture and domain-driven design, with JWT and OAuth 2.0 access controls and Swagger/OpenAPI documentation.",
      "Migrated legacy Oracle data into SQL Server using ETL validation, tuned queries, and built operational Power BI reports.",
      "Supported Azure deployments, Application Insights monitoring, and automated NUnit validation.",
    ],
    tags: ["ASP.NET Core", "Angular 14", "SQL Server", "Azure"],
  },
  {
    company: "Financial services & lending",
    location: "United States",
    role: "Full Stack .NET Developer",
    start: "Jan 2020",
    end: "Aug 2021",
    domain: "Financial services",
    summary:
      "Supporting lending journeys from customer onboarding to underwriting.",
    achievements: [
      "Engineered ASP.NET MVC and React applications for loan origination, customer management, credit evaluation, and underwriting workflows.",
      "Built reusable React components and REST APIs with Entity Framework and ADO.NET for transactional business services.",
      "Supported AWS migration, deployments, and monitoring using EC2, Lambda, S3, RDS, and CloudWatch; used NUnit and TDD for validation.",
    ],
    tags: ["React", "ASP.NET MVC", "AWS", "MongoDB"],
  },
  {
    company: "Retail enterprise applications",
    location: "United States",
    role: ".NET Developer",
    start: "Sep 2017",
    end: "Dec 2019",
    domain: "Retail",
    summary:
      "Improving customer experience through integrated retail applications.",
    achievements: [
      "Developed ASP.NET MVC/Core services and Angular interfaces for retail dashboards and customer data workflows.",
      "Implemented OAuth and Active Directory access, background Windows Services, and SSRS reporting.",
      "Contributed to Azure migration, monitoring, CI/CD, and unit and integration coverage with NUnit and MSTest.",
    ],
    tags: ["ASP.NET Core", "Angular", "Azure SQL", "SSRS"],
  },
  {
    company: "Enterprise technology consulting",
    location: "India",
    role: ".NET Developer",
    start: "Jul 2014",
    end: "May 2017",
    domain: "Consulting",
    summary:
      "Establishing a foundation in modular enterprise software and cloud delivery.",
    achievements: [
      "Developed N-Tier ASP.NET applications, reusable C# business components, and responsive Angular interfaces.",
      "Built SOAP and REST integrations with Entity Framework, LINQ, and PostgreSQL data access.",
      "Supported Azure-hosted deployments, production troubleshooting, source control, and xUnit testing.",
    ],
    tags: ["C#", "ASP.NET", "PostgreSQL", "Azure"],
  },
];

export const skills = [
  {
    title: "Backend & architecture",
    icon: "code",
    description: "Well-defined boundaries. Maintainable services.",
    items: [
      "C# / .NET 6",
      "ASP.NET Core",
      "REST & SOAP APIs",
      "Microservices",
      "Entity Framework Core",
      "LINQ",
      "Onion Architecture",
      "SOLID & design patterns",
      "Event-driven architecture",
    ],
  },
  {
    title: "Frontend & experience",
    icon: "layout",
    description: "Interfaces built around real business workflows.",
    items: [
      "Angular 6–18",
      "React",
      "TypeScript",
      "JavaScript",
      "Blazor",
      "Angular Material",
      "HTML5 & CSS3",
      "Responsive UI / UX",
    ],
  },
  {
    title: "Cloud & delivery",
    icon: "cloud",
    description: "From a local build to a reliable release.",
    items: [
      "Microsoft Azure",
      "AWS",
      "Azure Functions",
      "Service Bus",
      "API Management",
      "Key Vault",
      "Managed Identities",
      "Azure DevOps",
      "CI/CD",
      "Application Insights",
    ],
  },
  {
    title: "Data & persistence",
    icon: "database",
    description: "Reliable data foundations, tuned for performance.",
    items: [
      "SQL Server",
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "T-SQL / PL/SQL",
      "ETL & data migration",
      "Query optimization",
      "Power BI / SSRS",
    ],
  },
  {
    title: "AI & intelligent workflows",
    icon: "sparkles",
    description: "Putting enterprise context to work.",
    items: [
      "Azure OpenAI",
      "OpenAI APIs",
      "RAG",
      "AI agents",
      "Semantic search",
      "Vector databases",
      "Prompt engineering",
      "Python / FastAPI",
    ],
  },
  {
    title: "Quality & security",
    icon: "shield",
    description: "Confidence at every step of delivery.",
    items: [
      "xUnit / NUnit / MSTest",
      "Jasmine",
      "Selenium",
      "Postman / OpenAPI",
      "TDD",
      "OAuth 2.0 / JWT",
      "Entra ID / SSO",
      "OIDC / SAML",
      "WCAG 2.1",
      "Agile Scrum / Kanban",
    ],
  },
];

export const projects = [
  {
    id: "enterprise",
    category: "Enterprise",
    company: "Public-sector enterprise applications",
    period: "Apr 2023 – Present",
    title: "Enterprise, connected.",
    subtitle: "Secure services and maintainable enterprise interfaces",
    number: "01",
    icon: "layers",
    description:
      "Reusable Angular and Blazor interfaces, backed by secure .NET services and carefully defined application boundaries.",
    context:
      "Enterprise workflows needed maintainable application components, secure resource access, and consistent integration contracts.",
    contributions: [
      "Developed ASP.NET Core APIs and reusable frontend components with Angular and Blazor Server.",
      "Applied repository patterns, Entity Framework Core, and LINQ for maintainable SQL Server data access.",
      "Protected APIs and cloud integrations with API Management, Key Vault, Entra ID, and Managed Identities.",
    ],
    outcome:
      "Supported maintainable enterprise workflows with reusable interfaces, secure service integration, and centralized access controls.",
    technologies: ["ASP.NET Core", "Angular", "Blazor", "Entra ID"],
    visual: "architecture",
  },
  {
    id: "integration",
    category: "Cloud & Integration",
    company: "Public-sector enterprise applications",
    period: "Apr 2023 – Present",
    title: "Built to keep flowing.",
    subtitle: "Event-driven document and data integrations",
    number: "02",
    icon: "sparkles",
    description:
      "Azure Functions and Service Bus connecting document workflows, relational data, and asynchronous application services.",
    context:
      "Enterprise integrations needed reliable asynchronous processing, secure document handling, and visibility into exceptions.",
    contributions: [
      "Orchestrated asynchronous workflows using Azure Functions and Service Bus with retry handling and message correlation.",
      "Integrated document storage and retrieval with Azure Storage, Blob Storage, and Azure SQL.",
      "Investigated failures and performance bottlenecks through Azure Monitor and Application Insights.",
    ],
    outcome:
      "Supported resilient message processing, secure document workflows, and operational troubleshooting across integrated services.",
    technologies: [
      "Azure Functions",
      "Service Bus",
      "Azure SQL",
      "Blob Storage",
    ],
    visual: "intelligence",
  },
  {
    id: "healthcare",
    category: "Healthcare",
    company: "Healthcare & laboratory systems",
    period: "Sep 2021 – Mar 2023",
    title: "Care, in the details.",
    subtitle: "Connected laboratory and patient workflows",
    number: "03",
    icon: "activity",
    description:
      "Healthcare applications connecting laboratory orders, test status, patient information, and diagnostic reporting.",
    context:
      "Laboratory users needed consistent interactions across order entry, test tracking, and results, supported by secure backend integrations.",
    contributions: [
      "Built reusable Angular 14 modules and ASP.NET Core REST APIs using Onion Architecture.",
      "Implemented JWT and OAuth 2.0 authorization with role-based access controls.",
      "Migrated Oracle data to SQL Server with ETL validation and added Azure application monitoring.",
    ],
    outcome:
      "Supported connected laboratory and patient information workflows, with validated data migration and improved operational visibility.",
    technologies: ["Angular 14", "ASP.NET Core", "SQL Server", "Azure"],
    visual: "healthcare",
  },
  {
    id: "lending",
    category: "Financial services",
    company: "Financial services & lending",
    period: "Jan 2020 – Aug 2021",
    title: "A clearer lending journey.",
    subtitle: "Financial applications from onboarding to underwriting",
    number: "04",
    icon: "workflow",
    description:
      "Reusable React interfaces and .NET services supporting customer onboarding, loan origination, and lending operations.",
    context:
      "Lending applications needed maintainable customer interfaces and reliable transactional services across the loan processing lifecycle.",
    contributions: [
      "Built React components, hooks, and frontend modules for financial workflows.",
      "Implemented ASP.NET MVC business services and RESTful APIs using Entity Framework and ADO.NET.",
      "Contributed to AWS cloud migration and application monitoring using EC2, Lambda, S3, RDS, and CloudWatch.",
    ],
    outcome:
      "Supported onboarding, credit evaluation, and underwriting workflows alongside cloud deployment and monitoring capabilities.",
    technologies: ["React", "ASP.NET MVC", "AWS", "Entity Framework"],
    visual: "lending",
  },
];
