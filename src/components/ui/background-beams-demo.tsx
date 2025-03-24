"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { SparklesCore } from "./sparkles";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-[#271e35] relative flex flex-col items-center justify-center antialiased overflow-hidden">
       
      {/* White stars background layer */}
      <SparklesCore
        id="hero-sparkles-white"
        className="w-full h-full pointer-events-none absolute inset-0 z-10"
        background="transparent"
        minSize={0.2}
        maxSize={1}
        particleDensity={60}
        particleColor="#FFFFFF"
        speed={0.5}
      />
       
      {/* Purple accent stars layer */}
      <SparklesCore
        id="hero-sparkles-purple"
        className="w-full h-full pointer-events-none absolute inset-0 z-10"
        background="transparent"
        minSize={0.4}
        maxSize={1.8}
        particleDensity={30}
        particleColor="#924ACE"
        speed={0.8}
      />
       
      <div className="max-w-3xl mx-auto p-4 animate-fade-in relative z-20">
        <h1 className="text-2xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#E0E0E0] text-center font-sans font-bold tracking-tight animate-slide-up">
          Comece uma nova história!
        </h1>
        <p className="text-[#E0E0E0] max-w-xl mx-auto my-6 text-base md:text-lg text-center animate-slide-up font-medium">
          Conheça o Método L.T.I - Laboratório de Tecnologias Intensivas. O programa que vai te levar do zero ao mercado de trabalho.
        </p>
        <div className="flex justify-center mt-8 animate-slide-up">
          <a 
            href="#features"
            className="px-8 py-4 bg-transparent border-2 border-[#924ACE] rounded-full text-white font-semibold hover:bg-[#924ACE]/20 transition-all shadow-xl hover:shadow-[#924ACE]/25 hover:border-[#924ACE]/80 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Saiba mais
          </a>
        </div>
         
        <div className="flex justify-center mt-16 animate-bounce">
          <a 
            href="#features"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="animate-pulse"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
       
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#271e35] via-[#271e35] to-[#1c1d24] opacity-40 z-0 pointer-events-none"></div>
       
      {/* Animated beams effect */}
      <BackgroundBeams />
    </div>
  );
}

// Add some animation styles to global.css for fade-in and slide-up animations 