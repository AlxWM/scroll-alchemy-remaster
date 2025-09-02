import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export const ServicesSection = () => {
  const services = [
    {
      title: 'ПРОЕКТИРОВАНИЕ',
      description: 'Создание технических чертежей и 3D моделей мебели',
      features: ['3D визуализация', 'Технические чертежи', 'Расчет материалов']
    },
    {
      title: 'ДИЗАЙН ИНТЕРЬЕРА',
      description: 'Разработка уникального дизайна под ваш стиль',
      features: ['Планировка пространства', 'Подбор материалов', 'Цветовые решения']
    },
    {
      title: 'ИЗГОТОВЛЕНИЕ',
      description: 'Производство мебели на современном оборудовании',
      features: ['Качественные материалы', 'Точное изготовление', 'Контроль качества']
    },
    {
      title: 'МОНТАЖ',
      description: 'Профессиональная установка и настройка мебели',
      features: ['Быстрый монтаж', 'Гарантия качества', 'Послегарантийное обслуживание']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            НАШИ УСЛУГИ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл создания мебели от идеи до установки
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={400 + index * 200}>
              <div className="card-gradient p-8 rounded-2xl shadow-card hover-lift h-full">
                <div className="w-16 h-16 hero-gradient rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center" delay={1200}>
          <Button variant="hero" size="lg" className="px-12">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};