import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export function SocialIcon({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
