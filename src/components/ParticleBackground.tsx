import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  originalX: number;
  originalY: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

export function ParticleBackground({ 
  particleCount = 80, 
  className = '' 
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        setDimensions({
          width: parent.offsetWidth,
          height: parent.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Colors for particles - blue and pink like the Antigravity site
    const colors = [
      '#3B82F6', // blue
      '#60A5FA', // light blue
      '#2563EB', // darker blue
      '#EC4899', // pink
      '#F472B6', // light pink
      '#8B5CF6', // purple
    ];

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        particlesRef.current.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.2,
        });
      }
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Mouse interaction - particles move away from cursor
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.5;
          particle.vy -= Math.sin(angle) * force * 0.5;
        }

        // Gentle return to original position
        particle.vx += (particle.originalX - particle.x) * 0.005;
        particle.vy += (particle.originalY - particle.y) * 0.005;

        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add slight floating motion
        particle.y += Math.sin(Date.now() * 0.001 + particle.originalX) * 0.1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw subtle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connection lines between nearby particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}

export default ParticleBackground;
