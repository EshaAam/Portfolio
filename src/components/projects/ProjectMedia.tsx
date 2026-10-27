import Image from "next/image";
import type { Project } from "@/types";

interface ProjectMediaProps {
  project: Project;
  priority?: boolean;
  sizes: string;
}

/** Project screenshot, or a designed placeholder when there's no live build */
export function ProjectMedia({ project, priority, sizes }: ProjectMediaProps) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(120% 80% at 50% 0%, rgb(${project.accent} / 0.28), transparent 60%), #0b0b12`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative w-[78%] max-w-md rounded-xl border border-white/10 bg-black/50 p-4 font-mono text-[10px] leading-relaxed text-foreground-muted shadow-2xl backdrop-blur sm:text-xs">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p>
          <span className="text-pink-400">router</span>.<span className="text-sky-300">get</span>(
          <span className="text-emerald-300">&quot;/api/posts&quot;</span>, requireAuth, listPosts);
        </p>
        <p>
          <span className="text-pink-400">router</span>.<span className="text-sky-300">post</span>(
          <span className="text-emerald-300">&quot;/api/posts&quot;</span>, requireRole(
          <span className="text-emerald-300">&quot;admin&quot;</span>), createPost);
        </p>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{project.title}</p>
        <p className="mt-1 font-sans text-xs text-foreground-muted">{project.tagline}</p>
      </div>
    </div>
  );
}
