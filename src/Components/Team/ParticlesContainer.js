import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded", engine);
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 20, density: { enable: true, area: 800 } },
            color: { value: "#fafafa" },
            links: {
              enable: true,
              color: "#0d47a1",
              opacity: 0.3,
              distance: 50,
            },
            move: { enable: true, speed: 1 },
          },
        }}
      />
    </div>
  );
};

export default ParticlesContainer;
