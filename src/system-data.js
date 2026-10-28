export const systemLayers = [
  {
    id: "interface",
    number: "01",
    title: "Experience layer",
    label: "Angular · React · Blazor",
    icon: "layout",
    detail:
      "Responsive interfaces. Reusable components. Accessibility built into the experience.",
    tags: ["TypeScript", "Component architecture", "WCAG 2.1"],
  },
  {
    id: "services",
    number: "02",
    title: ".NET application services",
    label: "C# · ASP.NET Core · REST",
    icon: "services",
    detail:
      "Clear contracts and maintainable service boundaries. Secure APIs built around real business workflows.",
    tags: [".NET 6", "SOLID", "Microservices"],
  },
  {
    id: "cloud",
    number: "03",
    title: "Cloud & integration",
    label: "Azure · Functions · Service Bus",
    icon: "cloud",
    detail:
      "Event-driven integrations with message correlation, retry handling, and secure cloud resource access.",
    tags: ["Managed Identities", "API Management", "Key Vault"],
  },
  {
    id: "data",
    number: "04",
    title: "Data & documents",
    label: "SQL Server · Storage · EF Core",
    icon: "data",
    detail:
      "Reliable relational and document workflows, supported by query optimization and application telemetry.",
    tags: ["Azure SQL", "Blob Storage", "Application Insights"],
  },
];

export const deliverySteps = [
  {
    title: "Source & review",
    detail: "Git · Code reviews",
    description:
      "Changes are reviewed with the application context and service contracts in mind.",
  },
  {
    title: "Build & validate",
    detail: "CI/CD · xUnit · Jasmine",
    description:
      "Automated builds and tests help catch regressions before a release.",
  },
  {
    title: "Release & observe",
    detail: "Azure DevOps · Application Insights",
    description:
      "Release validation and production monitoring support investigation and follow-through.",
  },
];
