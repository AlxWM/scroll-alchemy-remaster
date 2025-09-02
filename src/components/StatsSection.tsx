import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center" delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              О КУРСЕ ДО ДЕТАЛЕЙ ЗАКАЗОВ
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed">
                  ЧТО УМЕЕТ АРХИТЕКТОР ИНТЕРЬЕРА
                  ПОМИМО СОЗДАНИЯ КРАСИВЫХ ДИЗАЙНОВ?
                </p>
              </div>
              
              <div className="md:col-span-1">
                <div className="text-8xl md:text-9xl font-bold text-center">
                  1822
                </div>
                <p className="text-center text-xl mt-4">
                  СТУДЕНТОВ ОБУЧЕНЫ
                </p>
              </div>
              
              <div>
                <p className="text-lg leading-relaxed">
                  ЛИЕТ СОЗДАНИЕ КРАСИВЫХ ИНТЕРЬЕРОВ,
                  НО ГРАМОТНОЕ ПРОЕКТИРОВАНИЕ ПОД ЗАКАЗ
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};