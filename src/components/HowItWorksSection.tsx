import React from 'react';
import { useInView } from '@/hooks/use-in-view';

interface ExampleItemProps {
  icon: string;
  title: string;
  subtitle: string;
  example: string;
  iconAlt: string;
  index: number;
  isInView: boolean;
}

const ExampleItem: React.FC<ExampleItemProps> = ({ icon, title, subtitle, example, iconAlt, index, isInView }) => (
  <div 
    className={`relative mb-[60px] transition-all duration-700 ${
      isInView 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-10'
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <h3 className="text-zank-dark text-2xl font-semibold mb-2 max-sm:text-xl">
      {title}
    </h3>
    <p className="text-zank-dark text-base font-normal mb-3 max-sm:text-sm">
      {subtitle}
    </p>
    <div className="flex items-start gap-2 mb-1">
      <img src={icon} alt={iconAlt} className="w-5 h-5 mt-1 flex-shrink-0" loading="lazy" />
      <div>
        <span className="text-zank-dark text-base font-normal max-sm:text-sm">Exemplo:</span>
        <p className="text-zank-dark text-base font-light max-sm:text-sm italic">
          {example}
        </p>
      </div>
    </div>
  </div>
);

const HowItWorksSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
  
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
      subtitle: "Para criar uma meta, passe o nome, valor, data",
      example: '"Criar meta carro novo 40.000 20/10/2027"',
      iconAlt: "Goal"
    }
  ];

  return (
    <section 
      ref={ref}
      id="funcionalidades" 
      className="w-full bg-zank-gray py-[120px] pb-[160px] px-[150px] max-xl:px-[100px] max-xl:pb-[150px] max-lg:px-[80px] max-lg:py-[100px] max-lg:pb-[140px] max-md:py-[100px] max-md:pb-[140px] max-md:px-[50px] max-sm:py-[70px] max-sm:pb-[100px] max-sm:px-5"
    >
      <h2 
        className={`text-zank-dark text-center text-4xl font-semibold mb-[80px] max-xl:text-3xl max-xl:mb-[60px] max-lg:text-2xl max-lg:mb-[50px] max-md:text-3xl max-md:mb-[40px] max-sm:text-2xl max-sm:mb-[50px] transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        Como o Zank funciona?
      </h2>
      
      <div className="flex gap-[80px] items-start justify-center max-w-[1400px] mx-auto max-xl:gap-[60px] max-lg:gap-[40px] max-lg:flex-col max-md:flex-col max-md:gap-[50px]">
        <div className="flex-1 max-w-[600px] max-lg:max-w-full">
          {examples.map((example, index) => (
            <ExampleItem
              key={index}
              icon={example.icon}
              title={example.title}
              subtitle={example.subtitle}
              example={example.example}
              iconAlt={example.iconAlt}
              index={index}
              isInView={isInView}
            />
          ))}
          
          <p 
            className={`text-zank-dark text-2xl font-medium mb-[40px] max-sm:text-xl transition-all duration-700 ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            Isso é apenas o básico, o Zank possui muitas funcionalidades.
          </p>
          
          <a 
            href="#planos" 
            className="group inline-flex bg-zank-dark text-zank-light px-[40px] py-[18px] rounded-[25px] text-lg font-semibold hover:bg-zank-light hover:text-zank-dark transition-all duration-300 items-center gap-3 no-underline shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver funcionalidades
            <div className="w-6 h-6 rounded-full bg-zank-light flex items-center justify-center group-hover:bg-zank-dark transition-all duration-300">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 20 20" 
                fill="none"
                className="text-zank-dark group-hover:text-zank-light"
              >
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7e08af812bc002af84a602707b56ca0b634dc883?width=734" 
          alt="WhatsApp conversation example" 
          className={`w-[350px] max-w-full h-auto shrink-0 rounded-[25px] max-xl:w-[320px] max-lg:w-[300px] max-lg:mx-auto max-md:w-[300px] max-md:self-center max-sm:w-full max-sm:max-w-[280px] transition-all duration-700 ${
            isInView 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
