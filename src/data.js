export const profile = {
  name: "Ramakrishna Maddinapudi",
  title: "Senior Full Stack .NET Developer",
  email: "maddinapudikrishna330@gmail.com",
  phone: "+1 (919) 421-4520",
  // LinkedIn confirmed by the owner; GitHub intentionally omitted at their request.
  linkedin: "https://www.linkedin.com/in/ramakrishnam0127/",
  github: null,
};

export const experience = [
  {
    company: "Public-sector enterprise applications",
    location: "USA",
    role: "Senior .NET Full Stack Developer",
    start: "Apr 2023",
    end: "Present",
    domain: "Government",
    summary:
      "Modernizing enterprise services and connecting complex business workflows.",
    achievements: [
      "Built C#/.NET 6 services, RESTful APIs, and microservices for high-volume departmental workflows; modernized legacy .NET Framework 4.7 components.",
      "Designed Angular 18 micro frontends with Module Federation, a shared host shell, and independently released business modules.",
      "Integrated Azure OpenAI for document summarization, contextual retrieval, and agentic workflows; deployed containerized services on OpenShift.",
      "Developed SQL Server data access with Dapper and Entity Framework Core, and maintained xUnit and Jasmine tests with Azure DevOps CI/CD.",
    ],
    tags: [".NET 6", "Angular 18", "Azure OpenAI", "OpenShift"],
  },
  {
    company: "Healthcare and laboratory systems",
    location: "USA",
    role: "Senior .NET Full Stack Developer",
    start: "Sep 2021",
    end: "Mar 2023",
    domain: "Healthcare",
    summary:
      "Building connected applications for laboratory and patient information workflows.",
    achievements: [
      "Developed ASP.NET Core APIs and Angular 14 micro frontends for laboratory orders, patient information, and diagnostic reporting.",
      "Applied Onion Architecture and domain-driven design, with JWT and OAuth 2.0 access controls and Swagger/OpenAPI documentation.",
      "Migrated legacy Oracle data into SQL Server using ETL and validation; tuned queries and built operational Power BI reports.",
      "Supported Azure deployments, monitoring with Application Insights, and automated NUnit validation.",
    ],
    tags: ["ASP.NET Core", "Angular 14", "SQL Server", "Azure"],
  },
  {
    company: "Financial services and lending platforms",
    location: "USA",
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
    location: "USA",
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
      "Dapper",
      "Onion Architecture",
      "SOLID & design patterns",
      "VB.NET",
      "ADO.NET & LINQ",
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
      "Micro Frontends",
      "Blazor",
      "Kendo UI",
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
      "Docker",
      "Kubernetes / OpenShift",
      "Azure DevOps",
      "Jenkins",
      "CI/CD",
      "Octopus Deploy",
      "Kafka & RabbitMQ",
      "Azure Monitor",
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

// Descriptive titles for work documented in the resume, not invented standalone products.
export const projects = [
  {
    id: "enterprise",
    category: "Enterprise",
    company: "Public-sector enterprise applications",
    period: "Apr 2023 – Present",
    title: "Enterprise, connected.",
    subtitle: "Modular applications for complex government workflows",
    number: "01",
    icon: "layers",
    description:
      "An Angular micro frontend architecture backed by secure .NET services, designed around independently owned business domains.",
    context:
      "Enterprise departments needed integrated applications with shared navigation and authentication while keeping individual business modules independently maintainable.",
    contributions: [
      "Separated Angular 18 applications into host and remote modules using Webpack Module Federation.",
      "Shared authentication context and permissions with RxJS and Angular services.",
      "Connected modules to ASP.NET Core APIs and configured independent Azure DevOps build and release pipelines.",
    ],
    outcome:
      "Enabled independent frontend releases without rebuilding the entire application, while keeping navigation and access consistent across modules.",
    technologies: ["Angular 18", "Module Federation", ".NET 6", "Azure DevOps"],
    visual: "architecture",
  },
  {
    id: "intelligence",
    category: "AI & Cloud",
    company: "Public-sector enterprise applications",
    period: "Apr 2023 – Present",
    title: "Context into clarity.",
    subtitle: "Generative AI within enterprise workflows",
    number: "02",
    icon: "sparkles",
    description:
      "Azure OpenAI integrated with ASP.NET Core to support document summarization, contextual retrieval, and automated responses.",
    context:
      "Enterprise workflows involved documents and contextual information that could benefit from intelligent retrieval and summarization.",
    contributions: [
      "Integrated Azure OpenAI through ASP.NET Core APIs.",
      "Added document summarization, contextual information retrieval, and automated response capabilities.",
      "Developed agentic workflows to coordinate tool interactions and automated tasks across application services.",
    ],
    outcome:
      "Brought document summarization, contextual information retrieval, and agent-assisted tasks into existing enterprise workflows.",
    technologies: ["Azure OpenAI", "ASP.NET Core", "AI agents", "C#"],
    visual: "intelligence",
  },
  {
    id: "healthcare",
    category: "Healthcare",
    company: "Healthcare and laboratory systems",
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
      "Built Angular 14 frontend modules and ASP.NET Core REST APIs using Onion Architecture.",
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
    company: "Financial services and lending platforms",
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
