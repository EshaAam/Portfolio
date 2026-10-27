"use client";

import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out " +
  "hover:-translate-y-px active:translate-y-0 active:scale-[0.98] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Gradient-border "space" button with drifting stars (see .btn-cosmic in globals.css)
  primary: "btn-cosmic font-semibold tracking-wide text-white",
  accent:
    "bg-accent/15 text-accent-light ring-1 ring-inset ring-accent/30 hover:bg-accent/25 hover:text-white",
  secondary:
    "border border-white/10 bg-white/[0.03] text-foreground backdrop-blur hover:border-white/20 hover:bg-white/[0.07]",
  ghost: "text-foreground-muted hover:text-foreground hover:bg-white/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm sm:text-[15px]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

/** Calm, understated button: a 1px lift and a color shift on hover, nothing more */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, className, children, type = "button", ...props },
  ref
) {
  return (
    <button ref={ref} type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
});

type LinkButtonProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({ variant, size, className, children, ...props }: LinkButtonProps) {
  const external = props.href?.startsWith("http");
  return (
    <a
      className={buttonClasses(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
