import React from 'react';
import { useInView } from '@/hooks/use-in-view';

const FinalCTASection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref}
      id="contato" 
      className="w-full bg-zank-gray py-[120px] px-[150px] relative max-xl:px-[100px] max-xl:py-[100px] max-lg:px-[80px] max-lg:py-[100px] max-md:py-[100px] max-md:px-[50px] max-sm:py-[70px] max-sm:px-5"
    >
      <div className="relative max-w-[1400px] mx-auto">
        <div className="bg-zank-light p-[80px] rounded-[20px] relative overflow-hidden max-xl:p-[60px] max-lg:p-[50px] max-lg:overflow-x-hidden max-md:p-[50px] max-sm:p-[30px]">
          <div className="relative z-10 max-w-[600px]">
            <h2 
              className={`text-zank-dark text-5xl font-semibold mb-[30px] max-xl:text-4xl max-lg:text-3xl max-lg:mb-[25px] max-md:text-4xl max-md:mb-[20px] max-sm:text-3xl transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              Você chegou no fim da página.
            </h2>
            
            <p 
              className={`text-zank-dark text-xl font-normal mb-[40px] max-xl:text-lg max-lg:text-base max-lg:mb-[30px] max-md:text-lg max-md:mb-[35px] max-sm:text-lg max-sm:mb-[30px] transition-all duration-700 delay-200 ${
                isInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              Se chegou até aqui, é porque tá interessado. Então vai lá, ta esperando o que?
            </p>
            
            <button 
              className={`w-full max-w-[350px] h-[60px] flex items-center justify-between bg-white px-[30px] rounded-[30px] hover:bg-zank-dark hover:text-zank-light transition-all duration-300 group max-sm:max-w-full shadow-lg hover:shadow-xl hover:scale-105 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="text-zank-dark group-hover:text-zank-light text-lg font-normal transition-colors duration-300">
                Basta clicar nesse botão.
              </span>
              <div className="w-6 h-6 rounded-full bg-zank-dark flex items-center justify-center group-hover:bg-zank-light transition-all duration-300">
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 20 20" 
                  fill="none"
                  className="text-white group-hover:text-zank-dark"
                >
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* 
            IMPORTANTE: Substitua o caminho da imagem abaixo pela imagem que você adicionou.
            Coloque a imagem na pasta public/ ou src/assets/ e atualize o caminho.
            Exemplo: src="/sua-imagem.png" ou src="/images/sua-imagem.png"
          */}
          <img 
            src="/placeholder.png" 
            alt="Ilustração de pessoa voando com dinheiro e seta" 
            className={`w-[480px] max-w-[40vw] h-auto absolute right-[150px] bottom-0 max-xl:w-[400px] max-xl:right-[100px] max-xl:max-w-[35vw] max-lg:w-[350px] max-lg:right-[50px] max-lg:max-w-[30vw] max-lg:opacity-80 max-md:w-[300px] max-md:right-[20px] max-md:opacity-70 max-sm:hidden transition-all duration-1000 delay-300 ${
              isInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
            style={{ maxHeight: '80vh' }}
            loading="lazy"
            onError={(e) => {
              // Se a imagem não carregar, oculta o elemento
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
