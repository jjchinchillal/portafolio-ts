import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "dot" | "cross" | "bracket";
  char?: string;
}

const TECH_CHARS = ["</>", "{}", "[ ]", "=>", "&&", "||", "fn", "::"];
const COLORS = [
  "rgba(221, 35, 67,",   
  "rgba(0, 120, 200,",  
  "rgba(255,255,255,",   
];

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    /* ── tamaño ── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── crear partículas ── */
    const COUNT = Math.min(38, Math.floor(window.innerWidth / 40));

    for (let i = 0; i < COUNT; i++) {
      const typeRoll = Math.random();
      particles.push({
        x:       Math.random() * window.innerWidth,
        y:       Math.random() * window.innerHeight,
        vx:      (Math.random() - 0.5) * 0.25,
        vy:      (Math.random() - 0.5) * 0.25,
        size:    Math.random() * 1.2 + 0.6,
        opacity: Math.random() * 0.18 + 0.04,
        type:    typeRoll < 0.5 ? "dot" : typeRoll < 0.75 ? "cross" : "bracket",
        char:    TECH_CHARS[Math.floor(Math.random() * TECH_CHARS.length)],
      });
    }

    /* ── líneas de conexión ── */
    const MAX_DIST = 140;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* conexiones */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.06;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(221,35,67,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      /* partículas */
      particles.forEach((p) => {
        const color = COLORS[Math.floor(Math.random() * 0.99 * COLORS.length)]; // estable por frame

        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${COLORS[0]}${p.opacity})`;
          ctx.fill();

        } else if (p.type === "cross") {
          /* pequeña cruz / plus */
          const s = p.size * 3;
          ctx.strokeStyle = `rgba(0,120,200,${p.opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x - s, p.y); ctx.lineTo(p.x + s, p.y);
          ctx.moveTo(p.x, p.y - s); ctx.lineTo(p.x, p.y + s);
          ctx.stroke();

        } else {
          /* texto tech */
          ctx.font = `${Math.floor(p.size * 7 + 6)}px 'Courier New', monospace`;
          ctx.fillStyle = `rgba(255,255,255,${p.opacity * 0.7})`;
          ctx.fillText(p.char ?? "</>", p.x, p.y);
        }

        /* movimiento */
        p.x += p.vx;
        p.y += p.vy;

        /* rebote en bordes */
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    /* ── prefers-reduced-motion ── */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      animId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        opacity: 1,
      }}
    />
  );
}
