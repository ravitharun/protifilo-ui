// src/Components/ParticleBackground.jsx
// import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Set background color to transparent
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push", // Add particles on click
        },
        onHover: {
          enable: true,
          mode: "repulse", // Repulse particles on hover
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4, // Number of particles added on click
        },
        repulse: {
          distance: 100, // Distance to repulse particles
          duration: 2,   // Duration of the repulse effect
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Set to a default color, but will use images
      },
      links: {
        enable: false, // Disable links between particles
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2, // Speed of particle movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Number of particles
      },
      opacity: {
        value: 0.6, // Opacity of particles
      },
      shape: {
        type: "image", // Use images as particles
        image: [
          {
            src: "path/to/your/image1.png", // Replace with the path to your image
            width: 20,
            height: 20,
          },
          {
            src: "path/to/your/image2.png", // Replace with the path to another image
            width: 20,
            height: 20,
          },
          // Add more images as needed
        ],
      },
      size: {
        random: {
          enable: true,
          minimumValue: 10, // Minimum size of the particle
        },
        value: { min: 10, max: 20 }, // Size range of particles
      },
    },
    detectRetina: true,
  };

  return <Particles options={particlesOptions} />;
};

export default ParticleBackground;
