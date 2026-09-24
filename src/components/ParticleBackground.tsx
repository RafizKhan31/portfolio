import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  glowColor: string;
  core: boolean;
  pulseDelay: number;
}

interface Connection {
  from: number;
  to: number;
  dist: number;
}

export const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: -999,
    y: -999,
    active: false,
  });

  // Framer Motion spring-smoothed mouse tracker
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  // Color palette for neural network theme (dark vs light)
  const darkNodeColors = [
    { fill: '#06B6D4', glow: 'rgba(6, 182, 212, 0.6)' },   // Cyan
    { fill: '#3B82F6', glow: 'rgba(59, 130, 246, 0.6)' },  // Blue
    { fill: '#8B5CF6', glow: 'rgba(139, 92, 246, 0.5)' },  // Purple
    { fill: '#10B981', glow: 'rgba(16, 185, 129, 0.5)' },  // Emerald
  ];

  const lightNodeColors = [
    { fill: '#2563EB', glow: 'rgba(37, 99, 235, 0.3)' },   // Blue
    { fill: '#4F46E5', glow: 'rgba(79, 70, 229, 0.3)' },   // Indigo
    { fill: '#0284C7', glow: 'rgba(2, 132, 199, 0.3)' },   // Sky
    { fill: '#0D9488', glow: 'rgba(13, 148, 136, 0.3)' },  // Teal
  ];

  const nodeColors = isDark ? darkNodeColors : lightNodeColors;

  // Initialize and handle window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth || window.innerWidth;
        const height = containerRef.current.clientHeight || 750;
        setDimensions({ width, height });

        // Adaptive node count based on screen size
        const count = width < 768 ? 22 : 42;
        const newParticles: Particle[] = Array.from({ length: count }, (_, i) => {
          const col = nodeColors[i % nodeColors.length];
          const x = Math.random() * width;
          const y = Math.random() * height;
          return {
            id: i,
            x,
            y,
            baseX: x,
            baseY: y,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            size: Math.random() > 0.8 ? Math.random() * 2 + 3.5 : Math.random() * 1.5 + 2,
            color: col.fill,
            glowColor: col.glow,
            core: Math.random() > 0.75,
            pulseDelay: Math.random() * 3,
          };
        });
        setParticles(newParticles);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isDark]);

  // Animation loop updating positions and proximity connections
  useEffect(() => {
    if (particles.length === 0) return;

    let animId: number;
    const localParticles = [...particles];

    const step = () => {
      const { width, height } = dimensions;
      const curMouseX = smoothMouseX.get();
      const curMouseY = smoothMouseY.get();

      // Update positions
      for (let i = 0; i < localParticles.length; i++) {
        const p = localParticles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 10) {
          p.x = 10;
          p.vx *= -1;
        } else if (p.x > width - 10) {
          p.x = width - 10;
          p.vx *= -1;
        }

        if (p.y < 10) {
          p.y = 10;
          p.vy *= -1;
        } else if (p.y > height - 10) {
          p.y = height - 10;
          p.vy *= -1;
        }

        // Mouse gravity / gentle attraction & repulsion interaction
        if (mousePos.active && curMouseX > 0 && curMouseY > 0) {
          const dx = curMouseX - p.x;
          const dy = curMouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 0.5;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }
      }

      // Compute synaptic connections between proximal nodes
      const maxConnDist = dimensions.width < 768 ? 110 : 145;
      const newConns: Connection[] = [];
      for (let i = 0; i < localParticles.length; i++) {
        for (let j = i + 1; j < localParticles.length; j++) {
          const dx = localParticles[i].x - localParticles[j].x;
          const dy = localParticles[i].y - localParticles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxConnDist) {
            newConns.push({ from: i, to: j, dist });
          }
        }
      }

      setConnections(newConns);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [dimensions, mousePos.active, particles]);

  // Track cursor within the hero container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    setMousePos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
    mouseX.set(-999);
    mouseY.set(-999);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Ambient Neural Gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-cyan-500/8 blur-[100px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-1/3 right-1/4 w-[420px] h-[350px] rounded-full bg-indigo-500/5 dark:bg-indigo-600/8 blur-[120px] pointer-events-none"
      />

      {/* Interactive Neural Network SVG Layer */}
      <svg
        className="w-full h-full absolute inset-0 pointer-events-none"
        width={dimensions.width}
        height={dimensions.height}
      >
        <defs>
          <linearGradient id="neuralLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#06B6D4' : '#2563EB'} stopOpacity={isDark ? 0.6 : 0.4} />
            <stop offset="100%" stopColor={isDark ? '#8B5CF6' : '#4F46E5'} stopOpacity={isDark ? 0.3 : 0.25} />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={isDark ? 3 : 1.5} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Synaptic Connection Lines */}
        {connections.map((conn, idx) => {
          const p1 = particles[conn.from];
          const p2 = particles[conn.to];
          if (!p1 || !p2) return null;

          const maxDist = dimensions.width < 768 ? 110 : 145;
          const alpha = (1 - conn.dist / maxDist) * (isDark ? 0.28 : 0.2);
          const isHighlighted = p1.core || p2.core;

          return (
            <line
              key={`conn-${idx}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={isHighlighted ? 'url(#neuralLineGrad)' : (isDark ? '#38BDF8' : '#94A3B8')}
              strokeWidth={isHighlighted ? 1.2 : 0.75}
              strokeOpacity={alpha}
            />
          );
        })}

        {/* Cursor interactive proximity connection wires */}
        {mousePos.active &&
          particles.map((p) => {
            const curMouseX = smoothMouseX.get();
            const curMouseY = smoothMouseY.get();
            const dx = curMouseX - p.x;
            const dy = curMouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              const alpha = (1 - dist / 150) * (isDark ? 0.45 : 0.35);
              return (
                <line
                  key={`cursor-conn-${p.id}`}
                  x1={curMouseX}
                  y1={curMouseY}
                  x2={p.x}
                  y2={p.y}
                  stroke={isDark ? '#38BDF8' : '#2563EB'}
                  strokeWidth={1.2}
                  strokeDasharray="3 3"
                  strokeOpacity={alpha}
                />
              );
            }
            return null;
          })}

        {/* Floating Particles and Synaptic Nodes */}
        {particles.map((p) => (
          <g key={`particle-${p.id}`} transform={`translate(${p.x}, ${p.y})`}>
            {/* Ambient Pulse Ring for Core Nodes */}
            {p.core && (
              <circle
                r={p.size * 2.2}
                fill="none"
                stroke={p.color}
                strokeWidth={0.8}
                opacity={isDark ? 0.35 : 0.25}
              >
                <animate
                  attributeName="r"
                  values={`${p.size * 1.5};${p.size * 3.0};${p.size * 1.5}`}
                  dur="3s"
                  begin={`${p.pulseDelay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values={isDark ? '0.5;0.1;0.5' : '0.35;0.05;0.35'}
                  dur="3s"
                  begin={`${p.pulseDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}

            {/* Main Particle Node */}
            <circle
              r={p.size}
              fill={p.color}
              filter={p.core ? 'url(#nodeGlow)' : undefined}
              opacity={p.core ? 0.9 : 0.65}
            />

            {/* Core highlight dot */}
            {p.core && (
              <circle
                r={p.size * 0.4}
                fill={isDark ? '#FFFFFF' : '#EFF6FF'}
                opacity={0.85}
              />
            )}
          </g>
        ))}

        {/* Cursor Node Center Point */}
        {mousePos.active && (
          <g transform={`translate(${smoothMouseX.get()}, ${smoothMouseY.get()})`}>
            <circle r={14} fill="none" stroke={isDark ? '#06B6D4' : '#2563EB'} strokeWidth={1} opacity={0.3} />
            <circle r={6} fill="none" stroke={isDark ? '#38BDF8' : '#3B82F6'} strokeWidth={1.5} opacity={0.7} />
            <circle r={2.5} fill={isDark ? '#38BDF8' : '#2563EB'} />
          </g>
        )}
      </svg>

      {/* Floating Framer Motion Neural Matrix Data Badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-12 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-950/70 border border-blue-200 dark:border-cyan-500/20 backdrop-blur-sm text-[10px] font-mono text-blue-600 dark:text-cyan-400 pointer-events-none shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 animate-ping" />
        <span>TENSOR_GRAPH // ACTIVE</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: [0.25, 0.65, 0.25], y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-16 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-950/70 border border-indigo-200 dark:border-indigo-500/20 backdrop-blur-sm text-[10px] font-mono text-indigo-600 dark:text-indigo-400 pointer-events-none shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
        <span>LATENT_SPACE: 128-DIM</span>
      </motion.div>
    </div>
  );
};
