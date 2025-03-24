"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="animate-slide-up [--slide-delay:0]">
        <AccordionTrigger className="text-white text-lg font-medium">
          O que é o L.T.I?
        </AccordionTrigger>
        <AccordionContent className="text-zinc-300">
          L.T.I (Laboratório de Tecnologia e Inovação) é um programa de formação 
          avançada em tecnologia que combina metodologias ágeis, mentoria 
          especializada e projetos práticos para desenvolver profissionais 
          prontos para o mercado.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="animate-slide-up [--slide-delay:1]">
        <AccordionTrigger className="text-white text-lg font-medium">
          Quem pode participar do programa?
        </AccordionTrigger>
        <AccordionContent className="text-zinc-300">
          O programa é aberto para estudantes universitários, recém-formados 
          e profissionais em transição de carreira que buscam especialização 
          em tecnologia. Não é necessário conhecimento prévio em programação 
          para algumas trilhas.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="animate-slide-up [--slide-delay:2]">
        <AccordionTrigger className="text-white text-lg font-medium">
          Quanto tempo dura o programa?
        </AccordionTrigger>
        <AccordionContent className="text-zinc-300">
          O programa tem duração flexível, com trilhas que variam de 3 a 6 meses, 
          dependendo da área de especialização escolhida. Todas as trilhas incluem 
          formação intensiva e projetos práticos com empresas parceiras.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="animate-slide-up [--slide-delay:3]">
        <AccordionTrigger className="text-white text-lg font-medium">
          Quais são as áreas de especialização?
        </AccordionTrigger>
        <AccordionContent className="text-zinc-300">
          Oferecemos especialização em Desenvolvimento Web Full Stack, Ciência de Dados, 
          UX/UI Design, Marketing Digital, Inteligência Artificial e Desenvolvimento Mobile. 
          Cada trilha é atualizada constantemente conforme as demandas do mercado.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="animate-slide-up [--slide-delay:4]">
        <AccordionTrigger className="text-white text-lg font-medium">
          Como funciona o processo seletivo?
        </AccordionTrigger>
        <AccordionContent className="text-zinc-300">
          O processo seletivo inclui análise de perfil, entrevista e um desafio 
          prático adequado ao nível do candidato. Valorizamos mais o potencial 
          de aprendizado e a determinação do que conhecimentos técnicos prévios.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
} 