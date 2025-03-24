"use client";

import { PricingCard } from "@/components/ui/pricing-card";

export function PricingCardBasic() {
  const basicPlan = {
    title: "Programa L.T.I",
    description: "Programa completo de formação em liderança tecnológica",
    price: 2497,
    originalPrice: 3997,
    features: [
      {
        title: "Conteúdo do programa",
        items: [
          "6 módulos completos",
          "20 horas de aulas gravadas",
          "Exercícios práticos",
          "Certificado de conclusão",
          "Acesso por 12 meses",
          "Material complementar"
        ],
      },
      {
        title: "Mentorias e suporte",
        items: [
          "4 mentorias coletivas",
          "Acesso ao grupo exclusivo",
          "Feedback em projetos",
          "Suporte por e-mail",
          "Eventos ao vivo mensais",
          "Networking com profissionais"
        ],
      },
      {
        title: "Bônus exclusivos",
        items: [
          "E-book: Carreiras em Tech",
          "Workshop de LinkedIn",
          "Templates de documentação",
          "Roadmaps personalizados",
          "Dicas de entrevistas",
          "Descontos em outros cursos"
        ],
      },
    ],
    buttonText: "Inscreva-se agora",
    onButtonClick: () => console.log("Basic plan clicked"),
  };

  return <PricingCard {...basicPlan} />;
} 