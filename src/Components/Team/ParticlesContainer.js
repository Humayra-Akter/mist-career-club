import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded", engine);
    await loadSlim(engine); // Use loadSlim instead of loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#fafafa",
          },
          links: {
            enable: true,
            color: "#0d47a1",
            opacity: 0.3,
            distance: 10,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
