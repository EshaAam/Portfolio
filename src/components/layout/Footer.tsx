"use client";

import { SITE, SOCIAL_LINKS } from "@/data/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-foreground-muted sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} <span className="text-foreground">{SITE.name}</span>. Built with Next.js &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-1">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/[0.05] hover:text-foreground"
            >
              <SocialIcon icon={link.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
