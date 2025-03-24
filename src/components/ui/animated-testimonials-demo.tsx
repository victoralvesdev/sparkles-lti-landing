"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

const testimonials = [
  {
    quote:
      "Mano as aulas realmente são super práticas, diferente de vários cursos que vendem por ai. Até nas explicações você é fora da curva!",
    name: "Junior",
    designation: "Método L.T.I",
    src: "https://i.ibb.co/PvFdnmY9/1.png",
  },
  {
    quote:
      "Nosso to amando! Com suas aulas, aprendi a fazer as campanhas, coloco R$20 e ganho R$1000 a R$1500.",
    name: "Nyra",
    designation: "Método L.T.I",
    src: "https://i.ibb.co/PvFdnmY9/1.png",
  },
  {
    quote:
      "Obrigadão, graças a mentoria eu consegui subir caixa e vai ser o que vou aplicar nas campanhas.",
    name: "Renata Galarça",
    designation: "Método L.T.I",
    src: "https://i.ibb.co/DDz8QTSx/andy3.png",
  },
  {
    quote:
      "Com o Método L.T.I, eu consegui fazer + de 1000 reais somente hoje!",
    name: "Higor",
    designation: "Método L.T.I",
    src: "https://i.ibb.co/fV7bgVQX/andy4.png",
  },
  {
    quote:
      "Com o método L.T.I, eu consigo ter uma boa constancia, algo que não conseguia antes, essa semana fiz mais de 1300 reais.",
    name: "Anne",
    designation: "Método L.T.I",
    src: "https://i.ibb.co/3m8TfmHj/andy5.png",
  },
];

const AnimatedTestimonialsDemo = () => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-10"></div>
      <div className="relative z-20 w-full">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <div className="h-[40vh] w-[40vh] bg-[#924ace]/30 rounded-full blur-[100px]"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 h-full " />
    </div>
  );
};

export default AnimatedTestimonialsDemo; 