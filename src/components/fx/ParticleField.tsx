import React from "react";
import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticleField({ className }: { className?: string }) {
  const options = React.useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      fullScreen: { enable: false },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          repulse: { distance: 110, duration: 0.3 }
        }
      },
      particles: {
        color: { value: ["#B06CFF", "#4FD1FF", "#7C5CFF"] },
        links: {
          enable: true,
          color: "#6B5CFF",
          opacity: 0.14,
          distance: 130,
          width: 1
        },
        move: { enable: true, speed: 0.55, outModes: { default: "out" } },
        number: { value: 60, density: { enable: true } },
        opacity: { value: 0.35 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } }
      }
    }),
    []
  );

  const init = React.useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <Particles init={init} options={options} />
    </div>
  );
}

