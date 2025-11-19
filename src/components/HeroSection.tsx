import React from 'react';
import { useInView } from '@/hooks/use-in-view';

const HeroSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative w-full min-h-[997px] bg-zank-gray px-[150px] pt-[150px] pb-[120px] max-xl:px-[100px] max-lg:px-[80px] max-md:px-[50px] max-md:pt-[100px] max-md:pb-[80px] max-sm:px-5 max-sm:pt-[80px] max-sm:pb-[60px] overflow-hidden"
    >
      <div className="relative max-w-[1089px] z-10">
        <div className="relative mb-[50px] max-sm:mb-[30px]">
          <h1 
            className={`text-[64px] font-bold leading-tight max-xl:text-[56px] max-lg:text-[48px] max-md:text-5xl max-sm:text-[32px] transition-all duration-1000 ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-zank-dark">Controle financeiro inteligente,</span>
            <br />
            <span className="text-zank-dark">direto do seu </span>
            <span style={{ color: '#13C538' }}>WhatsApp</span>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0098b2ff2e78296d2bba932b48dfd791b5685fd1?width=154" 
              alt="WhatsApp Icon" 
              className="w-[50px] h-[50px] inline-block ml-2 mb-2 max-xl:w-[45px] max-xl:h-[45px] max-lg:w-[40px] max-lg:h-[40px] max-md:w-[38px] max-md:h-[38px] max-sm:w-[35px] max-sm:h-[35px] animate-pulse" 
            />
          </h1>
        </div>
        
        <p 
          className={`max-w-[769px] text-black text-[22px] font-normal mb-[50px] leading-relaxed max-xl:text-xl max-lg:text-lg max-md:text-xl max-md:w-full max-sm:text-base max-sm:mb-[40px] transition-all duration-1000 delay-200 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          Controle de gastos, lembretes de contas e recomendações personalizadas na palma da sua mão.
        </p>
        
        <div 
          className={`flex gap-5 max-sm:flex-col max-sm:gap-4 transition-all duration-1000 delay-300 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="#planos" 
            className="group bg-zank-light text-zank-dark px-[30px] py-[20px] rounded-[25px] text-lg font-semibold hover:bg-zank-dark hover:text-zank-light transition-all duration-300 flex items-center gap-3 max-sm:w-full max-sm:h-[55px] max-sm:justify-center no-underline shadow-lg hover:shadow-xl hover:scale-105"
          >
            Verificar plano
            <div className="w-6 h-6 rounded-full bg-zank-dark flex items-center justify-center group-hover:bg-zank-light transition-all duration-300">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 20 20" 
                fill="none"
                className="text-zank-light group-hover:text-zank-dark"
              >
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
          
          <a 
            href="#funcionalidades" 
            className="group flex w-[240px] h-[65px] justify-center items-center relative px-[30px] py-[20px] rounded-[25px] border-2 border-zank-dark bg-white hover:bg-zank-dark hover:text-zank-light transition-all duration-300 max-sm:w-full max-sm:h-[55px] no-underline"
          >
            <span className="text-zank-dark group-hover:text-zank-light text-lg font-medium max-sm:text-base transition-colors duration-300">
              Como funciona?
            </span>
          </a>
        </div>
      </div>
      
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/82772f06c1e309be86adb46f691821100598b26b?width=1698" 
        alt="iPhone 15 Pro mockup" 
        className={`w-[750px] max-w-[50vw] h-auto absolute right-0 top-[120px] max-xl:w-[600px] max-xl:max-w-[45vw] max-lg:w-[500px] max-lg:max-w-[40vw] max-lg:opacity-80 max-md:w-[450px] max-md:right-[-50px] max-md:opacity-60 max-sm:hidden z-0 transition-all duration-1000 delay-500 ${
          isInView 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-20'
        }`}
        loading="lazy"
        style={{ maxHeight: '85vh' }}
      />
    </section>
  );
};

export default HeroSection;
