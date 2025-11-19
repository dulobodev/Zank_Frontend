import React from 'react';
import { useInView } from '@/hooks/use-in-view';

interface StatItemProps {
  percentage: string;
  description: string;
  index: number;
  isInView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ percentage, description, index, isInView }) => (
  <div 
    className={`text-center flex flex-col items-center transition-all duration-700 ${
      isInView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="text-zank-dark text-5xl font-bold mb-2 max-md:text-4xl max-sm:text-3xl">
      {percentage}
    </div>
    <div className="text-zank-dark text-sm font-medium max-w-[220px] mx-auto max-sm:text-xs">
      {description}
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
  
  const stats = [
    { percentage: "81%", description: "dos brasileiros estão endividados" },
    { percentage: "R$4.600", description: "é a dívida média no cartão de crédito" },
    { percentage: "45%", description: "não sabem quanto gastam por mês" },
    { percentage: "417%", description: "é a taxa de juros média no cartão de crédito" }
  ];

  return (
    <section 
      ref={ref}
      id="home" 
      className="w-full bg-zank-light px-[150px] py-[80px] max-xl:px-[100px] max-lg:px-[80px] max-md:px-[50px] max-md:py-[60px] max-sm:px-5 max-sm:py-[40px]"
    >
      <h2 
        className={`text-zank-dark text-center text-4xl font-semibold mb-[50px] max-xl:text-3xl max-lg:text-2xl max-md:text-3xl max-md:mb-[40px] max-sm:text-2xl max-sm:mb-[30px] transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        A Realidade Financeira do Brasil
      </h2>
      
      <div className="flex justify-around items-start max-w-[1200px] mx-auto gap-8 max-xl:gap-6 max-lg:gap-4 max-lg:flex-wrap max-lg:justify-center max-md:grid max-md:grid-cols-2 max-md:gap-6 max-sm:grid-cols-1 max-sm:gap-6">
        {stats.map((stat, index) => (
          <StatItem 
            key={index} 
            percentage={stat.percentage} 
            description={stat.description}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
