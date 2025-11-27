import React, { useRef, useEffect } from "react";

export default function ParticleNetwork({ width = 1200, height = 600, numPoints = 6 }) {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Initialise les points avec positions et vitesses aléatoires
    points.current = Array.from({ length: numPoints }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dessine les lignes
      for (let i = 0; i < points.current.length; i++) {
        for (let j = i + 1; j < points.current.length; j++) {
          const dx = points.current[i].x - points.current[j].x;
          const dy = points.current[i].y - points.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 800) { // distance pour connecter les points
            ctx.strokeStyle = `rgba(255, 125, 0, ${1 - dist / 600})`; // bleu doux, plus clair si proche
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points.current[i].x, points.current[i].y);
            ctx.lineTo(points.current[j].x, points.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Dessine les points
      points.current.forEach((p) => {
        ctx.fillStyle = "#15616d"; // couleur bleu doux
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Met à jour la position
        p.x += p.vx;
        p.y += p.vy;

        // Rebonds sur les bords
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height, numPoints]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // pour que ça ne bloque pas le clic sur l'image
      }}
    />
  );
}
