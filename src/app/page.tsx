"use client";
import { BackgroundBeamsDemo } from "@/components/ui/background-beams-demo";
import { SparklesCore } from "@/components/ui/sparkles";
import { FeaturesCards } from "@/components/ui/features-cards";
import AnimatedTestimonialsDemo from "@/components/ui/animated-testimonials-demo";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AccordionDemo } from "@/components/ui/accordion-demo";
import { Cta11Demo } from "@/components/ui/cta11-demo";
import { FooterDemo } from "@/components/ui/footer-demo";
import { GlowLights } from "@/components/ui/glow-lights";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { PricingCardBasic } from "@/components/ui/pricing-card-demo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative" style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <section id="hero" className="h-screen relative">
        {/* Adicionar luzes de fundo ao hero */}
        <GlowLights 
          count={12} 
          colors={["#924ACE", "#7B3EB6", "#A75EE0", "#6431A3"]} 
          maxSize={900} 
          minSize={400} 
          className="z-0 opacity-30" 
        />
        <BackgroundBeamsDemo />
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-[#1C1D24] relative">
        {/* Glow lights in the background */}
        <GlowLights count={8} maxSize={600} minSize={300} className="z-0 opacity-30" />
        
        {/* Floating objects */}
        <FloatingParticles count={30} color="#924ACE" maxSize={15} minSize={4} className="z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Como funciona o <span className="text-[#924ACE]">L.T.I</span>
          </h2>
          <FeaturesCards />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-12 overflow-hidden bg-[#131419]">
        <FloatingParticles
          className="absolute inset-0 z-0"
          count={20}
          color="#924ace"
          minSize={2}
          maxSize={6}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Investimento
            </h2>
            <p className="text-xl text-[#E0E0E0]/70 max-w-3xl mx-auto">
              Transforme sua carreira com um investimento que retorna em oportunidades
            </p>
          </div>
          <PricingCardBasic />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-[#1c1d24] relative">
        {/* Background Grid */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          
        </div>
        
        {/* Adicionar mais luzes de fundo ao testimonials */}
        <GlowLights 
          count={4} 
          colors={["#924ACE", "#7B3EB6"]} 
          maxSize={800} 
          minSize={400} 
          className="z-0 opacity-20" 
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            O que <span className="text-[#924ACE]">dizem</span> nossos alunos sobre o <span className="text-[#924ACE]">L.T.I</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <AnimatedTestimonialsDemo />
          </div>
        </div>
        
        {/* Background effect for testimonials */}
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
          <BackgroundGradientAnimation />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-[#271e35] relative">
        {/* Glow lights for FAQ section */}
        <GlowLights 
          count={6} 
          colors={["#924ACE", "#6C31A3", "#A864E8"]} 
          maxSize={700} 
          minSize={400} 
          className="z-0 opacity-20" 
        />
        
        {/* Floating objects for FAQ section - different style */}
        <FloatingParticles 
          count={25} 
          color="#A864E8" 
          maxSize={20} 
          minSize={5} 
          className="z-0" 
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Perguntas <span className="text-[#924ACE]">Frequentes</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <AccordionDemo />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="w-full bg-[#1c1d24] flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Blur blob in the background */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] -z-10 pointer-events-none"
            aria-hidden="true"
          />
          
          {/* Adicionar luzes de fundo ao CTA */}
          <GlowLights 
            count={4} 
            colors={["#924ACE", "#6431A3"]} 
            maxSize={500} 
            minSize={200} 
            className="z-0 opacity-25" 
          />
          
          {/* Adicionar algumas partículas também */}
          <FloatingParticles 
            count={15} 
            color="#924ACE" 
            maxSize={10} 
            minSize={3} 
            className="z-0" 
          />
          
          <Cta11Demo />
        </div>
      </section>

      {/* Footer */}
      <FooterDemo />
    </main>
  );
}
