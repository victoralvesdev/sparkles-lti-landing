"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Acessibilidade",
    description:
      "Com o foco em produtos ou serviços de baixo custo, o método possibilita que você inicie com orçamento limitado, ampliando suas chances de sucesso.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Alto Volume de Vendas",
    description:
      "Ao oferecer ofertas acessíveis, o método atrai um grande número de clientes, permitindo que os empreendedores gerem um volume alto de vendas, o que é essencial para a sustentabilidade do negócio.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Funis de Vendas Otimizados",
    description:
      "O método utiliza funis de vendas eficientes, que são projetados para guiar o cliente desde a descoberta até a compra, aumentando significativamente as taxas de conversão.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Técnicas de Persuação Eficazes",
    description:
      "Incorpora estratégias de marketing persuasivas que conectam emocionalmente os clientes com a oferta, aumentando a probabilidade de compras e fidelização.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Escale de Forma Rápida",
    description:
      "Com sua abordagem prática, o método permite que os negócios cresçam rapidamente, pois a aquisição de clientes e a repetição de vendas tornam-se mais fáceis e eficientes à medida que a reputação aumenta.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Atendimento Personalizado",
    description:
      "O foco em um atendimento personalizado ajuda a construir relacionamentos duradouros com os clientes, aumentando a satisfação e incentivando a recompra, o que é fundamental para o sucesso a longo prazo.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Springs for smoother animation
  const xSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(ySpring, [-0.50, 0.50], ["15deg", "-15deg"]);
  const rotateY = useTransform(xSpring, [-0.50, 0.50], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center (normalized -0.5 to 0.5)
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Update motion values
    x.set(xPos);
    y.set(yPos);
  };
  
  const handleMouseLeave = () => {
    // Reset position when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export function FeaturesCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {features.map((feature) => (
        <div 
          key={feature.id}
          className="relative h-[280px] animate-slide-up" 
          style={{ animationDelay: `${(feature.id - 1) * 0.1}s` }}
          onMouseEnter={() => setHoveredCard(feature.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <TiltCard>
            <div 
              className="h-full w-full rounded-xl p-6 flex flex-col relative overflow-hidden backdrop-blur-[8px] bg-[#924ACE]/10 border border-[#924ACE]/30"
              style={{
                transform: "translateZ(0)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ...(hoveredCard === feature.id ? {
                  transform: "translateZ(10px) scale(1.03)",
                  boxShadow: "0 10px 40px rgba(146, 74, 206, 0.2)"
                } : {})
              }}
            >
              <div
                className="absolute inset-0 opacity-0 bg-gradient-to-br from-[#924ACE]/20 to-transparent transition-opacity duration-300"
                style={{
                  opacity: hoveredCard === feature.id ? 0.6 : 0,
                  transform: "translateZ(-1px)"
                }}
              />
              
              <div className="flex flex-col h-full" style={{ transform: "translateZ(10px)" }}>
                <div className="flex items-start gap-4 mb-3">
                  <div 
                    className="p-3 rounded-full bg-[#924ACE]/20 text-white relative"
                    style={{ 
                      transform: "translateZ(40px)",
                      transition: "transform 0.3s ease"
                    }}
                  >
                    {hoveredCard === feature.id && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#924ACE]/10"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white pt-1">{feature.title}</h3>
                </div>
                
                <p className="text-[#E0E0E0]/70" style={{ transform: "translateZ(20px)" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      ))}
    </div>
  );
} 