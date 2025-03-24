"use client";

import { useEffect, useRef } from "react";

export function BackgroundGradientAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once to initialize
    setCanvasDimensions();

    // Update on resize
    window.addEventListener("resize", setCanvasDimensions);

    // Animation variables
    const colors = [
      "rgba(146, 74, 206, 0.4)",
      "rgba(146, 74, 206, 0.3)",
      "rgba(146, 74, 206, 0.2)",
      "rgba(146, 74, 206, 0.1)",
    ];
    const blobs: {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      maxRadius: number;
      growthRate: number;
      growing: boolean;
      update: () => void;
      draw: () => void;
    }[] = [];
    const blobCount = 6;

    // Create blob class
    class Blob {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      maxRadius: number;
      growthRate: number;
      growing: boolean;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.radius = Math.random() * 100 + 50;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.velocity = {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2,
        };
        this.maxRadius = Math.random() * 150 + 100;
        this.growthRate = Math.random() * 0.1 + 0.05;
        this.growing = Math.random() > 0.5;
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bouncing off the edges
        if (this.x < 0 || this.x > (canvas?.width || 0)) this.velocity.x *= -1;
        if (this.y < 0 || this.y > (canvas?.height || 0)) this.velocity.y *= -1;

        // Growing and shrinking
        if (this.growing) {
          this.radius += this.growthRate;
          if (this.radius >= this.maxRadius) this.growing = false;
        } else {
          this.radius -= this.growthRate;
          if (this.radius <= this.maxRadius / 2) this.growing = true;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create blobs
    for (let i = 0; i < blobCount; i++) {
      blobs.push(new Blob());
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = "rgba(18, 18, 24, 0.8)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        blob.update();
        blob.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
} 