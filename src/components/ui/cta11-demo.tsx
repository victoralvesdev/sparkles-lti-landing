"use client";
import React from "react";
import { Cta11 } from "@/components/ui/shadcnblocks-com-cta11";

const demoData = {
  heading: "Ficou com alguma dúvida ainda?",
  description:
    "Clique no botão abaixo e fale comigo. Método testado e aprovado por centenas de alunos.",
  buttons: {
    primary: {
      text: "Fale comigo",
      url: "https://example.com/start-now",
    },
  },
  imageUrl: "https://i.ibb.co/7xkSkLx8/Imagem-do-Whats-App-de-2025-03-15-s-21-50-06-e857b4f3.jpg",
};

export function Cta11Demo() {
  return (
    <Cta11
      heading={demoData.heading}
      description={demoData.description}
      buttons={demoData.buttons}
      imageUrl={demoData.imageUrl}
    />
  );
} 