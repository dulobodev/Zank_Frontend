import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index: React.FC = () => {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
      />
      
      <main className="w-full min-w-0 relative bg-[#E8E8E8] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <HeroSection />
        <StatsSection />
        <FeaturesGrid />
        <HowItWorksSection />
        <PricingSection />
        <FinalCTASection />
      </main>
    </>
  );
};

export default Index;
