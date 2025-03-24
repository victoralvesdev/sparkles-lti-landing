"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface FloatingParticlesProps {
  className?: string;
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
}

export function FloatingParticles({
  className = "",
  count = 20,
  color = "#924ace",
  minSize = 2,
  maxSize = 6,
}: FloatingParticlesProps) {
  const particles = useRef<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate random particles
    particles.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random x position (0-100%)
      y: Math.random() * 100, // random y position (0-100%)
      size: Math.random() * (maxSize - minSize) + minSize, // random size
      duration: Math.random() * 50 + 50, // random animation duration (50-100s)
      delay: Math.random() * -20, // random delay to offset animations
    }));
  }, [count, minSize, maxSize]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            filter: "blur(1px)",
            opacity: 0.5,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`, `${particle.x}%`],
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
} 