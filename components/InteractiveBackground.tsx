'use client';
import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Configuration
    const particleCount = 60; // Number of dots
    const connectionDistance = 150; // How close dots need to be to connect
    const mouseDistance = 200; // Interaction radius

    // Mouse State
    const mouse = { x: 0, y: 0 };
    
    // Particles Array
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Speed X
        this.vy = (Math.random() - 0.5) * 0.5; // Speed Y
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)'; // Indigo-500
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Draw connections
        for (let j = index; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse Interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseDistance) {
            // Gentle push away from mouse
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (mouseDistance - dist) / mouseDistance;
            const directionX = forceDirectionX * force * 0.6;
            const directionY = forceDirectionY * force * 0.6;
            p.vx -= directionX;
            p.vy -= directionY;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Event Listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Gradient Backdrop */}
        <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
        {/* The Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
        {/* The Interactive Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}