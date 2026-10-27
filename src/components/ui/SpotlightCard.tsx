"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** RGB triplet for the spotlight tint, e.g. "168 85 247" */
  tint?: string;
}

/**
 * Glass card with a soft radial spotlight that follows the cursor.
 * Uses CSS variables updated on pointer move, so no React re-renders.
 */
export function SpotlightCard({ children, className, tint = "168 85 247" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      style={{ "--tint": tint } as React.CSSProperties}
      className={cn("spotlight-card group relative overflow-hidden rounded-2xl", className)}
    >
      {children}
    </div>
  );
}
