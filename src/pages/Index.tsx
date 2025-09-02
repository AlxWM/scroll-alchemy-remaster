import React from 'react';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { CourseSection } from '@/components/CourseSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <PortfolioSection />
      <ServicesSection />
      <BenefitsSection />
      <CourseSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
