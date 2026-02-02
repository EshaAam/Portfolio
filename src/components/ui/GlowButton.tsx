"use client";

import React from "react";
import styled from "styled-components";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  as?: "button" | "a";
}

/**
 * Glowing neon button with purple glow effect
 * Features box-shadow glow, hover color inversion, and floor reflection
 */
export function GlowButton({
  children,
  onClick,
  href,
  target,
  rel,
  className,
  as = "button",
}: GlowButtonProps) {
  return (
    <StyledWrapper className={className}>
      {as === "a" ? (
        <a href={href} target={target} rel={rel} className="glow-btn">
          {children}
        </a>
      ) : (
        <button type="button" className="glow-btn" onClick={onClick}>
          {children}
        </button>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .glow-btn {
    --glow-color: rgb(217, 176, 255);
    --glow-spread-color: rgba(191, 123, 255, 0.4);
    --enhanced-glow-color: rgb(231, 206, 255);
    --btn-color: rgb(100, 61, 136);
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 0.15em solid var(--glow-color);
    padding: 0.75em 1.5em;
    color: var(--glow-color);
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    background-color: var(--btn-color);
    border-radius: 0.75em;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 0 0.5em 0.1em var(--glow-color),
      0 0 1.5em 0.3em var(--glow-spread-color),
      inset 0 0 0.4em 0.1em var(--glow-color);
    text-shadow: 0 0 0.3em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  .glow-btn::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(1.5em);
    opacity: 0.4;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  .glow-btn:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 0.6em 0.15em var(--glow-color),
      0 0 2em 0.5em var(--glow-spread-color),
      inset 0 0 0.4em 0.15em var(--glow-color);
  }

  .glow-btn:active {
    box-shadow: 0 0 0.4em 0.15em var(--glow-color),
      0 0 1.5em 0.8em var(--glow-spread-color),
      inset 0 0 0.3em 0.15em var(--glow-color);
  }

  .glow-btn svg {
    width: 1rem;
    height: 1rem;
  }
`;

export default GlowButton;
