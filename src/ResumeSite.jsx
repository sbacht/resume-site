import { useMemo } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, GraduationCap, Download } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "./assets/profile-photo.png";
import GitHubStats from "./components/GitHubStats";
import { Collapsible } from "./components/ui/collapsible";
import DATA from "./data/resumeData";

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
