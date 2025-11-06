import React from 'react';

interface ExampleItemProps {
  icon: string;
  title: string;
  subtitle: string;
  example: string;
  iconAlt: string;
}

const ExampleItem: React.FC<ExampleItemProps> = ({ icon, title, subtitle, example, iconAlt }) => (
  <div className="relative mb-[60px]">
    <h3 className="text-[#204749] text-2xl font-semibold mb-2 max-sm:text-xl">
      {title}
    </h3>
    <p className="text-[#204749] text-base font-normal mb-3 max-sm:text-sm">
      {subtitle}
    </p>
    <div className="flex items-start gap-2 mb-1">
      <img src={icon} alt={iconAlt} className="w-5 h-5 mt-1 flex-shrink-0" />
      <div>
        <span className="text-[#204749] text-base font-normal max-sm:text-sm">Exemplo:</span>
        <p className="text-[#204749] text-base font-light max-sm:text-sm">
          {example}
        </p>
      </div>
    </div>
  </div>
);

const HowItWorksSection: React.FC = () => {
  const examples = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/11935fb3e16ef605c8baae25b5310ec683790a56?width=48",
      title: "Registrar um gasto",
      subtitle: "Basta passar um gasto, contendo nome e valor",
      example: '"Comprei uma pizza por 80 reais"',
      iconAlt: "Salami Pizza"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d93a4fe291fb4020e38b16ab813905a465fc1453?width=48",
      title: "Visualizar Gastos",
      subtitle: "Solicite ao bot os seus gastos",
      example: '"Quero ver os meus gastos"',
      iconAlt: "Bar Chart"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b0cafddb4efba8c7615bd0c3b32ebbd07d192d5f?width=48",
      title: "Criar uma meta",
      subtitle: "Para criar uma meta, passse o nome, valor, data",
      example: '"Criar meta carro novo 40.000 20/10/2027"',
      iconAlt: "Goal"
    }
  ];

  return (
    <section className="w-full bg-white py-[100px] px-[150px] max-md:py-[80px] max-md:px-[50px] max-sm:py-[60px] max-sm:px-5">
      <h2 className="text-[#204749] text-center text-4xl font-semibold mb-[80px] max-md:text-3xl max-sm:text-2xl max-sm:mb-[50px]">
        Como o Zank funciona?
      </h2>
      
      <div className="flex gap-[80px] items-start justify-center max-w-[1400px] mx-auto max-md:flex-col max-md:gap-[50px]">
        <div className="flex-1 max-w-[600px]">
          {examples.map((example, index) => (
            <ExampleItem
              key={index}
              icon={example.icon}
              title={example.title}
              subtitle={example.subtitle}
              example={example.example}
              iconAlt={example.iconAlt}
            />
          ))}
          
          <p className="text-[#204749] text-2xl font-medium mb-[40px] max-sm:text-xl">
            Isso e apenas o básico, o Zank possui muitas funcionalidades.
          </p>
          
          <button className="bg-[#204749] text-[#9EEA6C] px-[40px] py-[18px] rounded-[25px] text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-3">
            Ver funcionalidades
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#9EEA6C]">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7e08af812bc002af84a602707b56ca0b634dc883?width=734" 
          alt="WhatsApp conversation example" 
          className="w-[350px] h-auto shrink-0 rounded-[25px] max-md:w-[300px] max-md:self-center max-sm:w-full max-sm:max-w-[280px]" 
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
