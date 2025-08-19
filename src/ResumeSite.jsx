import { useMemo } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, GraduationCap, Download } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "./assets/profile-photo.png";
import GitHubStats from "./components/GitHubStats";
import { Collapsible } from "./components/ui/collapsible";

const DATA = {
  name: "Serge Bacht",
  title: "MLOps Engineer / Software Architect",
  location: "Munich, Germany",
  summary:
    "MLOps Engineer transitioning from 10+ years in software engineering and architecture. Experienced in building scalable, cloud-native platforms and now focused on deploying, monitoring, and automating machine learning systems in production.",
  contacts: {
    email: "", // add your email
    phone: "", // optional
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

export default function ResumeSite() {
  const hasLinks = useMemo(() => {
    const { linkedin, github, website, email } = DATA.contacts;
    return Boolean(linkedin || github || website || email);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Profile Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <img 
                src={profilePhoto} 
                alt={`${DATA.name} - Professional Photo`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </motion.div>
            
            {/* Header Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{DATA.name}</h1>
              <p className="mt-2 text-xl text-slate-600">{DATA.title}</p>
              <div className="mt-3 flex items-center gap-3 text-slate-600">
                <MapPin className="h-4 w-4" /> <span>{DATA.location}</span>
              </div>
              <p className="mt-6 max-w-3xl text-slate-700 leading-relaxed">{DATA.summary}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Download CV Button - Always visible */}
            <Button asChild variant="default" className="rounded-2xl bg-blue-600 hover:bg-blue-700">
              <a href="/Serge_Bacht_CV.pdf" download="Serge_Bacht_CV.pdf">
                <Download className="h-4 w-4 mr-2"/>Download CV
              </a>
            </Button>
            
            {/* Contact buttons - only show if links exist */}
            {hasLinks && (
              <>
                {DATA.contacts.email && (
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <a href={`mailto:${DATA.contacts.email}`}><Mail className="h-4 w-4 mr-2"/>Email</a>
                  </Button>
                )}
                {DATA.contacts.linkedin && (
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href={DATA.contacts.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a>
                  </Button>
                )}
                {DATA.contacts.github && (
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href={DATA.contacts.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a>
                  </Button>
                )}
                {DATA.contacts.website && (
                  <Button asChild className="rounded-2xl">
                    <a href={DATA.contacts.website} target="_blank" rel="noreferrer">Personal Site<ExternalLink className="h-4 w-4 ml-2"/></a>
                  </Button>
                )}
              </>
            )}
          </div>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Career Highlights</h2>
                <ul className="space-y-3 list-disc ml-6">
                  {DATA.highlights.map((h, i) => (<li key={i} className="text-slate-700">{h}</li>))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div className="space-y-6">
                  {DATA.experience.map((exp, i) => (
                    <div key={i} className="border-l-2 border-slate-200 pl-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-medium">{exp.role}</h3>
                        <span className="text-slate-500">@ {exp.company}</span>
                      </div>
                      <div className="text-sm text-slate-500">{exp.period}{exp.location ? ` • ${exp.location}` : ""}</div>
                      <ul className="mt-3 list-disc ml-6 space-y-2 text-slate-700">
                        {exp.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {DATA.projects.map((p, i) => (
                    <div key={i} className="border rounded-xl p-4">
                      <div className="font-medium">{p.name}</div>
                      <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.tags.map((t, j) => (<Badge key={j} variant="secondary" className="rounded-full">{t}</Badge>))}
                      </div>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="text-sm underline inline-flex items-center mt-2">
                          View <ExternalLink className="h-3 w-3 ml-1"/>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <aside className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">Core</div>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.core.map((s, i) => (<Badge key={i} className="rounded-full" variant="outline">{s}</Badge>))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium text-slate-500 mb-1">Complementary</div>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.complementary.map((s, i) => (<Badge key={i} className="rounded-full" variant="outline">{s}</Badge>))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <Collapsible 
                  title="Education" 
                  icon={GraduationCap}
                  defaultOpen={false}
                >
                  <div className="space-y-4">
                  {DATA.education.map((e, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="border-l-2 border-blue-200 pl-4 py-2"
                    >
                      <div className="font-semibold text-slate-800 text-sm leading-tight">{e.school}</div>
                      <div className="text-sm text-slate-700 mt-1 font-medium">{e.degree}</div>
                      <div className="text-xs text-slate-500 mt-1">{e.period}</div>
                      {e.highlights?.length ? (
                        <div className="mt-2">
                          {e.highlights.map((h, j) => (
                            <div key={j} className="text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded inline-block mr-2">
                              {h}
                            </div>
                          ))}
                        </div>
                      ) : null}
                                          </motion.div>
                    ))}
                  </div>
                </Collapsible>
              </CardContent>
            </Card>
          </motion.div>

          {DATA.certifications?.length ? (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <Collapsible 
                    title="Certifications" 
                    icon={Award}
                    defaultOpen={false}
                  >
                    {/* Certification Summary */}
                    <div className="bg-blue-50 rounded-lg p-3 mb-4 text-center">
                      <div className="text-lg font-bold text-blue-700">{DATA.certifications.length}</div>
                      <div className="text-sm text-blue-600">Microsoft Certifications</div>
                    </div>
                    
                    <div className="space-y-3">
                      {DATA.certifications.map((c, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="border-l-2 border-blue-200 pl-3 py-1"
                        >
                                                  <div className="font-medium text-slate-800 text-sm">{c.name}</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <span>{c.issuer}</span>
                          <span>•</span>
                          <span>{c.year}</span>
                        </div>
                        </motion.div>
                      ))}
                    </div>
                  </Collapsible>
                </CardContent>
              </Card>
            </motion.div>
          ) : null}

          {/* GitHub Activity Section */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <Collapsible 
                  title="GitHub Activity" 
                  icon={Github}
                  defaultOpen={false}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-600">Live GitHub Data</span>
                    <a 
                      href="https://github.com/sbacht" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Profile →
                    </a>
                  </div>
                  <GitHubStats username="sbacht" />
                </Collapsible>
              </CardContent>
            </Card>
          </motion.div>
        </aside>
      </main>

      <motion.footer 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-5xl mx-auto px-6 pb-12 text-center text-slate-400 text-sm"
      >
        <p>
          Serge Bacht, 2025
        </p>
      </motion.footer>
    </div>
  );
}
