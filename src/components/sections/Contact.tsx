"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Copy, Mail, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Button } from "@/components/ui/Button";
import { GitHubActivity } from "@/components/ui/GitHubActivity";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";
import { SITE, SOCIAL_LINKS } from "@/data/site";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const inputClasses =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-[15px] text-foreground placeholder:text-foreground-muted/50 transition-colors duration-200 focus:border-accent/50 focus:bg-white/[0.04] focus:outline-none";

export function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (field: keyof typeof EMPTY_FORM) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Opens the visitor's mail client with the message pre-filled
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(EMPTY_FORM);
    }, 4000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to software engineering roles, research collaborations and interesting problems. My inbox is always open."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={stagger(0.1)}
        className="grid gap-4 lg:grid-cols-5"
      >
        {/* Info column */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:col-span-2">
          <SpotlightCard className="p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">Email</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 block break-all text-lg font-medium text-foreground transition-colors hover:text-accent-light sm:text-xl">
              {SITE.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-foreground-muted transition-colors hover:border-white/20 hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" /> Compose
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-foreground-muted transition-colors hover:border-white/20 hover:text-foreground"
              >
                {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">Elsewhere</p>
            <ul className="mt-3 divide-y divide-white/[0.06]">
              {SOCIAL_LINKS.filter((l) => l.icon !== "mail").map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 text-foreground-muted transition-colors hover:text-foreground"
                  >
                    <span className="inline-flex items-center gap-3">
                      <SocialIcon icon={link.icon} className="h-4 w-4" />
                      {link.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground-muted">
              <MapPin className="h-3.5 w-3.5" /> Based in {SITE.location}
            </p>
          </SpotlightCard>
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <SpotlightCard className="h-full p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex h-full flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input type="text" value={form.name} onChange={update("name")} placeholder="Your name" required autoComplete="name" className={inputClasses} />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" required autoComplete="email" className={inputClasses} />
                </Field>
              </div>
              <Field label="Subject">
                <input type="text" value={form.subject} onChange={update("subject")} placeholder="Role, collaboration, or just saying hello" required className={inputClasses} />
              </Field>
              <Field label="Message" className="flex-1">
                <textarea value={form.message} onChange={update("message")} placeholder="Tell me a bit about it..." required rows={5} className={`${inputClasses} h-full min-h-[140px] resize-none`} />
              </Field>
              <Button type="submit" disabled={sent} className="w-full sm:w-auto sm:self-end">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Opening your mail app
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </form>
          </SpotlightCard>
        </motion.div>
      </motion.div>

      <GitHubActivity />
    </Section>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-xs font-medium text-foreground-muted">{label}</span>
      {children}
    </label>
  );
}
