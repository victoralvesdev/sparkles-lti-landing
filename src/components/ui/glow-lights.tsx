"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlowLightsProps {
  count?: number;
  colors?: string[];
  maxSize?: number;
  minSize?: number;
  className?: string;
}

export function GlowLights({
  count = 15,
  colors = ["#924ACE", "#7B3EB6", "#A75EE0", "#6431A3"],
  maxSize = 500,
  minSize = 200,
  className = "",
}: GlowLightsProps) {
  const [lights, setLights] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
    delay: number;
  }>>([]);
  
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const newLights = Array.from({ length: count }).map((_, index) => {
      return {
        id: index,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 10 + 10, // Between 10-20 seconds
        delay: Math.random() * -10, // Negative delay for staggered start
      };
    });
    
    setLights(newLights);
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const newLights = Array.from({ length: count }).map((_, index) => {
        return {
          id: index,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 10 + 10,
          delay: Math.random() * -10,
        };
      });
      
      setLights(newLights);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, colors, maxSize, minSize]);
  
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full"
          style={{
            left: light.x,
            top: light.y,
            width: light.size,
            height: light.size,
            background: `radial-gradient(circle, ${light.color}20 0%, ${light.color}05 50%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: light.duration,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 