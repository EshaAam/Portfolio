"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button, LinkButton } from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/motion";
import { SITE, SOCIAL_LINKS } from "@/data/site";
import { ACHIEVEMENTS, EDUCATION, EXPERIENCE } from "@/data/journey";
import { RESUME_PROJECTS, RESUME_SKILLS } from "@/data/resume";
import { PUBLICATIONS } from "@/data/research";

export function Resume() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="Curriculum vitae"
        description="The short version of my education, experience, projects and research. Download the PDF for the one-page copy."
      />

      <Reveal className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c12]/90 shadow-[0_40px_120px_-40px_rgba(124,58,237,0.35)] backdrop-blur-xl">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-white/[0.06] px-6 py-8 sm:px-10 sm:py-10">
            <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/15 blur-[80px]" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{SITE.fullName}</h3>
                <p className="mt-1 text-foreground-muted">{SITE.role}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground-muted">
                  <ContactItem icon={<MapPin className="h-3.5 w-3.5" />}>{SITE.location}</ContactItem>
                  <ContactItem icon={<Mail className="h-3.5 w-3.5" />} href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </ContactItem>
                  <ContactItem icon={<Phone className="h-3.5 w-3.5" />} href={`tel:${SITE.phone}`}>
                    {SITE.phoneDisplay}
                  </ContactItem>
                  <ContactItem icon={<Linkedin className="h-3.5 w-3.5" />} href={SOCIAL_LINKS[1].url}>
                    ekramul-esham
                  </ContactItem>
                  <ContactItem icon={<Github className="h-3.5 w-3.5" />} href={SOCIAL_LINKS[0].url}>
                    EshaAam
                  </ContactItem>
                  <ContactItem icon={<Globe className="h-3.5 w-3.5" />} href={SITE.url}>
                    ekramulesham.vercel.app
                  </ContactItem>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 md:flex-col md:items-stretch">
                <LinkButton href={SITE.resumeUrl} download="Ekramul_Esham_CV.pdf">
                  <Download className="h-4 w-4" />
                  Download PDF
                </LinkButton>
                <LinkButton href={SITE.resumeUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Open PDF
                </LinkButton>
              </div>
            </div>
          </div>

          {/* Always-visible summary */}
          <div className="grid gap-8 px-6 py-8 sm:px-10 md:grid-cols-2">
            <ResumeBlock title="Education">
              {EDUCATION.map((e) => (
                <Entry key={e.id} title={e.organization} meta={e.period} subtitle={e.title} note={e.id === "iut" ? "First Class" : undefined} />
              ))}
            </ResumeBlock>
            <ResumeBlock title="Experience">
              {EXPERIENCE.map((e) => (
                <Entry key={e.id} title={e.title} meta={e.period} subtitle={e.organization} />
              ))}
            </ResumeBlock>
          </div>

          {/* Expandable detail */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className="overflow-hidden"
              >
                <div className="space-y-10 border-t border-white/[0.06] px-6 py-8 sm:px-10">
                  <ResumeBlock title="Experience details">
                    <ul className="space-y-2">
                      {EXPERIENCE[0].points?.map((p) => (
                        <Bullet key={p}>{p}</Bullet>
                      ))}
                    </ul>
                  </ResumeBlock>

                  <ResumeBlock title="Projects">
                    <div className="space-y-6">
                      {RESUME_PROJECTS.map((p) => (
                        <div key={p.name}>
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent-light">
                              {p.name}
                            </a>
                            <span className="text-sm text-foreground-muted">· {p.subtitle}</span>
                            {p.liveUrl && (
                              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-emerald-300 hover:text-emerald-200">
                                Live demo <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                          <ul className="mt-2 space-y-1.5">
                            {p.points.map((pt) => (
                              <Bullet key={pt}>{pt}</Bullet>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ResumeBlock>

                  <ResumeBlock title="Skills">
                    <dl className="divide-y divide-white/[0.05]">
                      {RESUME_SKILLS.map((s) => (
                        <div key={s.label} className="grid gap-1 py-2.5 sm:grid-cols-[150px_1fr] sm:gap-4">
                          <dt className="text-sm font-medium text-foreground">{s.label}</dt>
                          <dd className="text-sm text-foreground-muted">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </ResumeBlock>

                  <ResumeBlock title="Publications">
                    <ul className="space-y-3">
                      {PUBLICATIONS.map((p) => (
                        <Bullet key={p.id}>
                          <span className="text-foreground">{p.title}</span>, {p.venue}
                          {p.id === "benhallueval" ? " (Main Conference). Co-first author." : `, ${p.venueDetail}.`}{" "}
                          <a href={p.links[0].url} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                            {p.links[0].label}
                          </a>
                        </Bullet>
                      ))}
                    </ul>
                  </ResumeBlock>

                  <ResumeBlock title="Achievements">
                    <ul className="space-y-2">
                      {ACHIEVEMENTS.slice(1).map((a) => (
                        <Bullet key={a}>{a}</Bullet>
                      ))}
                    </ul>
                  </ResumeBlock>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center border-t border-white/[0.06] px-6 py-4">
            <Button variant="ghost" size="sm" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
              {expanded ? "Show less" : "Show full resume"}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ContactItem({ icon, href, children }: { icon: ReactNode; href?: string; children: ReactNode }) {
  const content = (
    <span className="inline-flex items-center gap-1.5">
      {icon}
      {children}
    </span>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function ResumeBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">{title}</h4>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Entry({ title, subtitle, meta, note }: { title: string; subtitle: string; meta: string; note?: string }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <p className="font-medium text-foreground">{title}</p>
        <p className="font-mono text-xs text-foreground-muted">{meta}</p>
      </div>
      <p className="mt-0.5 text-sm text-foreground-muted">
        {subtitle}
        {note && <span className="text-foreground"> · {note}</span>}
      </p>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  );
}
