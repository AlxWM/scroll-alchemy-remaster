import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import designerPortrait from '@/assets/designer-portrait.jpg';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20"></div>
              <img
                src={designerPortrait}
                alt="Михаил Скрипник - дизайнер мебели"
                className="relative w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                О МИХАИЛЕ СКРИПНИКЕ
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  Дизайнер с 15-летним опытом создания эксклюзивной мебели. 
                  Автор более 500 реализованных проектов и основатель успешной 
                  мебельной мастерской.
                </p>
                
                <p>
                  Специализируется на проектировании корпусной мебели, 
                  кухонных гарнитуров и комплексных интерьерных решений. 
                  Преподает курсы по мебельному дизайну уже 8 лет.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="card-gradient p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                
                <div className="card-gradient p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                
                <div className="card-gradient p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1822</div>
                  <div className="text-sm text-muted-foreground">студентов</div>
                </div>
                
                <div className="card-gradient p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">лет преподавания</div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="px-12">
                СВЯЗАТЬСЯ С МИХАИЛОМ
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};