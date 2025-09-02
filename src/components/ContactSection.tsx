import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ГОТОВЫ НАЧАТЬ ОБУЧЕНИЕ?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Получите персональную консультацию и узнайте, как стать профессиональным 
            дизайнером мебели уже через 4 месяца
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ScrollReveal delay={400}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h3>
              <p className="opacity-90">Узнайте все о курсе и возможностях</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
              <p className="opacity-90">Персональное сопровождение каждого студента</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">ГАРАНТИЯ РЕЗУЛЬТАТА</h3>
              <p className="opacity-90">100% возврат средств при неудовлетворении</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center" delay={1000}>
          <div className="max-w-md mx-auto space-y-4">
            <Button variant="secondary" size="lg" className="w-full text-lg">
              ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
            </Button>
            <p className="text-sm opacity-75">
              Или позвоните по телефону: +7 (495) 123-45-67
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};