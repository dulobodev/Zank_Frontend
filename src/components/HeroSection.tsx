import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[997px] bg-[#E8E8E8] px-[150px] pt-[150px] max-md:px-[50px] max-md:pt-[100px] max-sm:px-5 max-sm:pt-[80px]">
      <div className="relative max-w-[1089px]">
        <div className="relative mb-[50px] max-sm:mb-[30px]">
          <h1 className="text-[64px] font-bold leading-tight max-md:text-5xl max-sm:text-[32px]">
            <span className="text-[#204749]">Controle financeiro inteligente,</span>
            <br />
            <span className="text-[#204749]">direto do seu </span>
            <span className="text-[#00D026]">WhatsApp</span>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0098b2ff2e78296d2bba932b48dfd791b5685fd1?width=154" 
              alt="WhatsApp Icon" 
              className="w-[50px] h-[50px] inline-block ml-2 mb-2 max-sm:w-[35px] max-sm:h-[35px]" 
            />
          </h1>
        </div>
        
        <p className="max-w-[769px] text-black text-[22px] font-normal mb-[50px] leading-relaxed max-md:text-xl max-md:w-full max-sm:text-base max-sm:mb-[40px]">
          Controle de gastos, lembretes de contas e recomendações personalizadas na palma da sua mão.
        </p>
        
        <div className="flex gap-5 max-sm:flex-col max-sm:gap-4">
          <button className="hover:opacity-90 transition-opacity">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a018453fa5d3189c6fb5ffb0f8de0756697153ab?width=570" 
              alt="Começar agora" 
              className="w-[240px] h-[65px] rounded-[25px] max-sm:w-full max-sm:h-[55px]" 
            />
          </button>
          
          <button className="flex w-[240px] h-[65px] justify-center items-center relative px-[30px] py-[20px] rounded-[25px] border-2 border-[#204749] bg-white hover:bg-gray-50 transition-colors max-sm:w-full max-sm:h-[55px]">
            <span className="text-[#204749] text-lg font-medium max-sm:text-base">Como funciona?</span>
          </button>
        </div>
      </div>
      
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/82772f06c1e309be86adb46f691821100598b26b?width=1698" 
        alt="iPhone 15 Pro mockup" 
        className="w-[750px] h-auto absolute right-0 top-[120px] max-md:w-[550px] max-md:right-[-50px] max-sm:hidden" 
      />
    </section>
  );
};

export default HeroSection;
