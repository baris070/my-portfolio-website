import { useEffect, useState } from "react";

export const ParticleBackground = () => {
  const [floatingOrbs, setFloatingOrbs] = useState([]);
  const [geometricShapes, setGeometricShapes] = useState([]);
  const [waveDots, setWaveDots] = useState([]);

  useEffect(() => {
    generateFloatingOrbs();
    generateGeometricShapes();
    generateWaveDots();

    const handleResize = () => {
      generateFloatingOrbs();
      generateGeometricShapes();
      generateWaveDots();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateFloatingOrbs = () => {
    const numberOfOrbs = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    const newOrbs = [];

    for (let i = 0; i < numberOfOrbs; i++) {
      newOrbs.push({
        id: i,
        size: Math.random() * 40 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.1,
        animationDuration: Math.random() * 8 + 10,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    setFloatingOrbs(newOrbs);
  };

  const generateGeometricShapes = () => {
    const numberOfShapes = 6;
    const newShapes = [];

    for (let i = 0; i < numberOfShapes; i++) {
      newShapes.push({
        id: i,
        size: Math.random() * 60 + 40,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        animationDuration: Math.random() * 15 + 20,
        shape: ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)],
      });
    }

    setGeometricShapes(newShapes);
  };

  const generateWaveDots = () => {
    const numberOfDots = 25;
    const newDots = [];

    for (let i = 0; i < numberOfDots; i++) {
      newDots.push({
        id: i,
        size: Math.random() * 8 + 4,
        x: (i * 4) % 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        amplitude: Math.random() * 30 + 20,
      });
    }

    setWaveDots(newDots);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs */}
      {floatingOrbs.map((orb) => (
        <div
          key={`orb-${orb.id}`}
          className="floating-orb animate-float-drift"
          style={{
            width: orb.size + "px",
            height: orb.size + "px",
            left: orb.x + "%",
            top: orb.y + "%",
            opacity: orb.opacity,
            animationDuration: orb.animationDuration + "s",
            animationDirection: orb.direction > 0 ? "normal" : "reverse",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape) => (
        <div
          key={`shape-${shape.id}`}
          className={`geometric-shape shape-${shape.shape} animate-rotate-slow`}
          style={{
            width: shape.size + "px",
            height: shape.size + "px",
            left: shape.x + "%",
            top: shape.y + "%",
            transform: `rotate(${shape.rotation}deg)`,
            animationDuration: shape.animationDuration + "s",
          }}
        />
      ))}

      {/* Wave Dots */}
      {waveDots.map((dot) => (
        <div
          key={`dot-${dot.id}`}
          className="wave-dot animate-wave-motion"
          style={{
            width: dot.size + "px",
            height: dot.size + "px",
            left: dot.x + "%",
            top: dot.y + "%",
            animationDelay: dot.delay + "s",
            "--wave-amplitude": dot.amplitude + "px",
          }}
        />
      ))}

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
    </div>
  );
};