import React from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load slim engine (includes circle shapes)
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
  <Particles
    id="tsparticles"
    style={{
      position: "fixed",     
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,            
    }}
    options={{
      background: { color: { value: "#1a1a1a" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#deca16" },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        number: { value: 80, density: { enable: true, area: 800 } },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }}
  />
);

}

export default ParticlesBackground;
