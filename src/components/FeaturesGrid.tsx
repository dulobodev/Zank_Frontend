import React from 'react';
import FeatureCard from './FeatureCard';
import { useInView } from '@/hooks/use-in-view';

const FeaturesGrid: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4de5a2906114115d6cbce537305388575611393b?width=172",
      title: "Bot com IA",
      description: "Receba atendimento automatizado e inteligente. Com poucas palavras você consegue utilizar o bot.",
      iconAlt: "Chatbot"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/51ce3024f041b01be14e8f1736cf68c45c542d6e?width=172",
      title: "Controle o seu dinheiro",
      description: "Tenha controle total do seu saldo, despesas e metas. Receba relatórios diários direto no WhatsApp para tomar decisões com segurança.",
      iconAlt: "Money Box"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/40e027fa4f6def5205c27c326957d4e6c649e997?width=172",
      title: "Lembretes personalizados",
      description: "Não esqueça mais contas! Programe lembretes e receba notificações para manter suas finanças sempre em dia.",
      iconAlt: "Bell"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c0ce2fe3fbd1f76c00aac8a4f52bedac86772307?width=172",
      title: "Gerencie os seus gastos",
      description: "Acompanhe seus gastos por categoria e identifique oportunidades de economia para melhorar seu orçamento mensal.",
      iconAlt: "Split Transaction"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/2658949a25cee882097d70f79c778b89290fd59e?width=172",
      title: "Organize as suas metas",
      description: "Defina metas financeiras e monitore o progresso, tornando seus objetivos mais alcançáveis com o auxílio de recomendações inteligentes.",
      iconAlt: "Goal"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/425355af7de04524cac4a48181c74cfa955e52bb?width=172",
      title: "Visualize as suas despesas",
      description: "Veja gráficos simples e detalhados sobre suas despesas ao longo do tempo, facilitando a análise e o planejamento financeiro.",
      iconAlt: "Increase"
    }
  ];

  return (
    <section 
      ref={ref}
      className="w-full bg-zank-gray px-[150px] py-[120px] max-xl:px-[100px] max-lg:px-[80px] max-md:px-[50px] max-md:py-[100px] max-sm:px-5 max-sm:py-[60px]"
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-x-[100px] gap-y-[80px] justify-items-center max-w-[1400px] mx-auto max-xl:gap-x-[60px] max-xl:gap-y-[60px] max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:gap-x-[40px] max-lg:gap-y-[50px] max-md:grid-cols-2 max-md:gap-[40px] max-sm:grid-cols-1 max-sm:gap-[30px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconAlt={feature.iconAlt}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
