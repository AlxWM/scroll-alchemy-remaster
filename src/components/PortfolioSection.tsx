import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import portfolioImage from '@/assets/portfolio-showcase.jpg';

export const PortfolioSection = () => {
  const portfolioItems = [
    { title: 'Современная кухня', category: 'Кухонная мебель' },
    { title: 'Гостиная премиум', category: 'Мебель для гостиной' },
    { title: 'Детская комната', category: 'Детская мебель' },
    { title: 'Спальня люкс', category: 'Спальная мебель' },
    { title: 'Рабочий кабинет', category: 'Офисная мебель' },
    { title: 'Прихожая', category: 'Корпусная мебель' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            НАШЕ ПОРТФОЛИО
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 реализованных проектов мебели на заказ
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal delay={400}>
            <div className="relative overflow-hidden rounded-2xl shadow-elegant hover-lift">
              <img
                src={portfolioImage}
                alt="Портфолио дизайна мебели"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Премиум проекты</h3>
                <p className="text-lg">Эксклюзивная мебель на заказ</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="grid grid-cols-2 gap-4">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="card-gradient p-6 rounded-xl shadow-card hover-lift cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center" delay={800}>
          <Button variant="default" size="lg" className="px-12">
            ПОСМОТРЕТЬ ВСЕ РАБОТЫ
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};