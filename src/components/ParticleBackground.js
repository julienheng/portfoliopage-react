import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <div className=" pointer-events-none opacity-40 w-full h-full absolute top-0 left-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 30,
              limit: 50,
              density: {
                enable: true,
                value_area: 100,
              },
            },
            color: {
              value: ["#A855F7", "#EC4899"],
            },
            shape: {
              type: ["circle", "triangle", "square"],
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "images/github.svg",
                width: 50,
                height: 50,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },

          retina_detect: true,
          fps_limit: 30,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
