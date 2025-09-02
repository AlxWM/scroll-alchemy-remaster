import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export const CourseSection = () => {
  const courseModules = [
    {
      number: '01',
      title: 'ОСНОВЫ ПРОЕКТИРОВАНИЯ',
      description: 'Изучение принципов создания мебели и работы с чертежами',
      duration: '2 недели'
    },
    {
      number: '02',
      title: 'РАБОТА С МАТЕРИАЛАМИ',
      description: 'Выбор и расчет материалов, фурнитуры и комплектующих',
      duration: '3 недели'
    },
    {
      number: '03',
      title: '3D МОДЕЛИРОВАНИЕ',
      description: 'Создание объемных моделей и визуализация проектов',
      duration: '4 недели'
    },
    {
      number: '04',
      title: 'РАБОТА С ЗАКАЗЧИКОМ',
      description: 'Презентация проектов и ведение переговоров',
      duration: '2 недели'
    },
    {
      number: '05',
      title: 'ПРОИЗВОДСТВО',
      description: 'Технологии изготовления и контроль качества',
      duration: '3 недели'
    },
    {
      number: '06',
      title: 'БИЗНЕС-ПРАКТИКА',
      description: 'Создание собственного бизнеса в сфере мебели',
      duration: '2 недели'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ПРОГРАММА ОБУЧЕНИЯ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Комплексный курс проектирования мебели от базовых знаний до создания собственного бизнеса
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courseModules.map((module, index) => (
            <ScrollReveal key={index} delay={400 + index * 150}>
              <div className="card-gradient p-8 rounded-2xl shadow-card hover-lift relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {module.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 hero-gradient rounded-lg mb-6 flex items-center justify-center text-white font-bold">
                    {module.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                  <p className="text-muted-foreground mb-6">{module.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-semibold">
                      Длительность: {module.duration}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-white text-center" delay={1200}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            СТОИМОСТЬ ПОЛНОГО КУРСА
          </h3>
          <div className="text-6xl md:text-7xl font-bold mb-6">
            89,900₽
          </div>
          <p className="text-xl mb-8 opacity-90">
            Включает все модули, практические задания и персональную поддержку
          </p>
          <Button variant="secondary" size="lg" className="px-12 text-lg">
            ЗАПИСАТЬСЯ НА КУРС
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};