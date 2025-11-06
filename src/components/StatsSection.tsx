import React from 'react';

interface StatItemProps {
  percentage: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ percentage, description }) => (
  <div className="text-center flex flex-col items-center">
    <div className="text-[#204749] text-5xl font-bold mb-2 max-md:text-4xl max-sm:text-3xl">
      {percentage}
    </div>
    <div className="text-[#204749] text-sm font-medium max-w-[220px] mx-auto max-sm:text-xs">
      {description}
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  const stats = [
    { percentage: "81%", description: "dos brasileiros estão endividados" },
    { percentage: "R$4.600", description: "é a dívida média no cartão de crédito" },
    { percentage: "45%", description: "não sabem quanto gastam por mês" },
    { percentage: "417%", description: "não sabem quanto gastam por mês" }
  ];

  return (
    <section className="w-full bg-[#9EEA6C] px-[150px] py-[60px] max-md:px-[50px] max-md:py-[40px] max-sm:px-5 max-sm:py-[30px]">
      <h2 className="text-[#204749] text-center text-4xl font-semibold mb-[50px] max-md:text-3xl max-sm:text-2xl max-sm:mb-[30px]">
        A Realidade Financeira do Brasil
      </h2>
      
      <div className="flex justify-around items-start max-w-[1200px] mx-auto gap-8 max-md:grid max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1 max-sm:gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} percentage={stat.percentage} description={stat.description} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
