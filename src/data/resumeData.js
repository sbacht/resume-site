const DATA = {
  name: "Serge Bacht",
  title: "MLOps Engineer / Software Architect",
  location: "Munich, Germany",
  summary:
    "MLOps Engineer transitioning from 10+ years in software engineering and architecture. Experienced in building scalable, cloud-native platforms and now focused on deploying, monitoring, and automating machine learning systems in production.",
  contacts: {
    email: "serge.bacht@gmail.com", 
    phone: "", 
    website: "", 
    linkedin: "https://www.linkedin.com/in/sbacht/",
    github: "https://github.com/sbacht",
  },
  highlights: [
    "Architected and delivered microservices platforms in insurance and automotive domains",
    "Hands-on experience with ML pipelines (MLflow, Airflow) and big data (Apache Spark)",
    "Built CI/CD pipelines on Azure DevOps to cut deployment time and improve quality",
    "Skilled in containerization (Docker, Kubernetes) and cloud IaC (Terraform, AWS, GCP)",
    "Mentored teams, drove best practices, and delivered complex enterprise-grade solutions",
    "Passionate about MLOps, automation, and deploying machine learning models at scale",
    "Currently building personal MLOps projects to deepen practical skills in model deployment and monitoring",
  ],
  skills: {
    core: [
      "Python", "MLOps", "MLflow", "Airflow", "Apache Spark", "Docker", "Kubernetes",
      "Terraform", "AWS", "GCP", "CI/CD", "Azure DevOps", ".NET", "C#", "Microservices",
      "Machine Learning Algorithms", "PyTorch", "NLP"
    ],
    complementary: [
      "React/TypeScript", "Angular", "SQL Server", "NoSQL", "Observability", "Problem Solving", "Team Leadership"
    ],
  },
  experience: [
    {
      company: "Self-Employed",
      role: "MLOps Engineer",
      period: "Jun 2025 – Present",
      location: "Munich, Germany (Hybrid)",
      bullets: [
        "Building personal projects to practice MLOps: automating ML pipelines with MLflow & Airflow, deploying ML models in production.",
        "Designed scalable data pipelines with Apache Spark and containerized deployments.",
        "Exploring cloud infrastructure automation with Terraform, AWS, and GCP.",
      ],
      links: [],
    },
    {
      company: "Ascent",
      role: "Senior Software Engineer",
      period: "Jul 2019 – Jun 2025",
      location: "Munich, Germany",
      bullets: [
        "Architected and developed a scalable, microservices-based platform for Re-Insurance.",
        "Led a cross-functional team to deliver Angular-based web applications integrated with Azure services.",
        "Implemented CI/CD pipelines with Azure DevOps, reducing deployment times and improving quality.",
        "Collaborated with stakeholders to define specs and align business objectives with technical solutions.",
        "Mentored junior developers and promoted engineering best practices.",
      ],
      links: [],
    },
    {
      company: "IF-Blueprint AG",
      role: "IT Consultant / Senior Full Stack Developer",
      period: "Jul 2017 – Jun 2019",
      location: "Munich, Germany",
      bullets: [
        "Designed and developed cloud-native applications for automotive and insurance clients.",
        "Delivered optimized, scalable full-stack solutions.",
      ],
      links: [],
    },
    {
      company: "Tieto",
      role: "Senior Software Developer",
      period: "2015 – 2017",
      location: "St. Petersburg, Russia",
      bullets: [
        "Developed SharePoint Farm Solutions for IKEA Russia.",
        "Migrated 10,000 external users to Active Directory and SharePoint 2013.",
        "Improved user experience by replacing jQuery with Knockout.js.",
      ],
      links: [],
    },
    {
      company: "Astrosoft-Development",
      role: "Software Developer",
      period: "2013 – Oct 2015",
      location: "St. Petersburg, Russia",
      bullets: [
        "Full-stack development for OpusCapita web-based invoice handling and archival systems.",
        "Built ASP.NET applications, SQL Server access layers, and AngularJS frontends.",
      ],
      links: [],
    },
    {
      company: "IT-GRAD (CloudMTS)",
      role: "System Administrator",
      period: "2013",
      location: "St. Petersburg, Russia",
      bullets: [
        "Supported VMware and Active Directory in a cloud virtualization provider.",
        "Provided L2 support, troubleshooting, and system training for support staff.",
      ],
      links: [],
    },
  ],
  education: [
    {
      school: "St. Petersburg State University of Telecommunications named after prof. M.A. Bonch-Bruevich",
      degree: "Bachelor's Degree, Communications Systems and Networks (FCSN)",
      period: "2011 - 2015",
      highlights: ["Department of Infocommunication Systems"],
    },
  ],
  certifications: [
    { 
      name: "Microsoft Certified: DevOps Engineer Expert", 
      issuer: "Microsoft",
      year: "2021"
    },
    { 
      name: "Exam AZ-204: Developing Solutions for Microsoft Azure", 
      issuer: "Microsoft",
      year: "2021"
    },
    { 
      name: "Exam AZ-400: Designing and Implementing Microsoft DevOps Solutions", 
      issuer: "Microsoft",
      year: "2021"
    },
    { 
      name: "MCSA: Web Applications", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "70-486: Developing ASP.NET MVC Web Applications", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "70-480: Programming in HTML5 with JavaScript and CSS3", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "MCSD: App Builder", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "70-410: Installing and Configuring Windows Server 2012", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "70-487: Developing Microsoft Azure and Web Services", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "70-488: Developing Microsoft SharePoint Server 2013 Core Solutions", 
      issuer: "Microsoft",
      year: "2018"
    },
    { 
      name: "74-409: Server Virtualization with Windows Server Hyper-V and System Center", 
      issuer: "Microsoft",
      year: "2018"
    },
  ],
  projects: [
    {
      name: "SmartYachtMonitor",
      description:
        "Full MLOps cycle demonstration project implementing ML pipelines, data processing with Spark, and model deployment pipelines with Docker & Kubernetes.",
      tags: ["Python", "MLOps", "MLflow", "Airflow", "Spark", "Kubernetes", "Terraform"],
      link: "https://github.com/sbacht/SmartYachtMonitor",
    },
    {
      name: "SAX Stock Pattern Detection",
      description:
        "Stock market index pattern detection with SAX algorithm and API data fetching for financial time series analysis.",
      tags: ["Python", "Data Science", "SAX Algorithm", "Financial Analysis", "API Integration"],
      link: "https://github.com/sbacht/sax-stock-patterns",
    },
    {
      name: "Insurance Microservices Platform",
      description:
        "Architected microservices platform for re-insurance domain; Angular front-end + Azure cloud integrations.",
      tags: [".NET", "Azure", "Angular", "Microservices"],
      link: "",
    },
  ],
  speaking: [],
};

export default DATA;