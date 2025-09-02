import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-kitchen.jpg';
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Современная кухня с мебелью на заказ" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <ScrollReveal className="animate-fade-in-up" delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Дизайн и проектирование мебели
          </h1>
        </ScrollReveal>
        
        <ScrollReveal className="animate-fade-in-up" delay={400}>
          <p className="text-xl md:text-2xl mb-4 font-medium">с Михаилом Скрипником</p>
        </ScrollReveal>

        <ScrollReveal className="animate-fade-in-up" delay={600}>
          <div className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold mb-8 inline-block shadow-elegant">
            ХОТИТЕ НАУЧИТЬСЯ ПРОЕКТИРОВАТЬ МЕБЕЛЬ В ИНТЕРЬЕРЕ РЕАЛЬНО?
          </div>
        </ScrollReveal>

        <ScrollReveal className="animate-scale-in" delay={800}>
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            УЗНАТЬ ПОДРОБНЕЕ
          </Button>
        </ScrollReveal>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};