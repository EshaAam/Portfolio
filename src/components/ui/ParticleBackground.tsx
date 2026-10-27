"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

/**
 * Particle background component
 * Creates subtle, floating particles for depth and visual interest
 */
export function ParticleBackground() {
  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {
    // Particles loaded callback - can be used for debugging
  };

  // Particle configuration - subtle and premium feeling
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#a855f7",
        },
        links: {
          color: "#a855f7",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 60,
        },
        opacity: {
          value: 0.3,
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
            startValue: "random",
            count: 0,
            decay: 0,
            mode: "auto",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      // Fewer particles and no hover links on small screens
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: { number: { value: 24 } },
            interactivity: { events: { onHover: { enable: false } } },
          },
        },
      ],
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
