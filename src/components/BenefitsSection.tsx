import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

export const BenefitsSection = () => {
  const benefits = [
    {
      title: 'ЭКОНОМИЯ ВРЕМЕНИ',
      description: 'Готовые решения и проверенные методики'
    },
    {
      title: 'ПРОФЕССИОНАЛЬНЫЙ РОСТ',
      description: 'Повышение квалификации и доходов'
    },
    {
      title: 'ПРАКТИЧЕСКИЕ НАВЫКИ',
      description: 'Реальные проекты и кейсы'
    },
    {
      title: 'ПОДДЕРЖКА КУРАТОРОВ',
      description: 'Индивидуальное сопровождение'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ПОЧЕМУ ВЫБИРАЮТ НАШ КУРС
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Преимущества обучения с профессионалами
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={400 + index * 150}>
              <div className="card-gradient p-8 rounded-2xl shadow-card hover-lift text-center h-full">
                <div className="w-20 h-20 hero-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};