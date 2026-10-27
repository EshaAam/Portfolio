import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small "Live" pill linking to a deployed project */
export function LiveBadge({ href, className }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-black/60 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md transition-colors duration-200 hover:border-emerald-400/50 hover:text-emerald-200",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      Live
      <ArrowUpRight className="h-3 w-3" />
    </a>
  );
}
