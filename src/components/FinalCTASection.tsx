import React from 'react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full bg-white py-[100px] px-[150px] relative max-md:py-[80px] max-md:px-[50px] max-sm:py-[60px] max-sm:px-5">
      <div className="relative max-w-[1400px] mx-auto">
        <div className="bg-[#9EEA6C] p-[80px] rounded-[20px] relative overflow-hidden max-md:p-[50px] max-sm:p-[30px]">
          <div className="relative z-10 max-w-[600px]">
            <h2 className="text-[#204749] text-5xl font-semibold mb-[30px] max-md:text-4xl max-sm:text-3xl">
              Você chegou no fim da página.
            </h2>
            
            <p className="text-[#204749] text-xl font-normal mb-[40px] max-sm:text-lg">
              Se chegou até aqui, é porque tá interessado. Então vai lá, ta esperando o que?
            </p>
            
            <button className="w-full max-w-[350px] h-[60px] flex items-center justify-between bg-white px-[30px] rounded-[30px] hover:bg-gray-50 transition-colors group max-sm:max-w-full">
              <span className="text-[#204749] text-lg font-normal">
                Basta clicar nesse botão.
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#204749] group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9640ecf5081f7d234e188c226d867afa23d1450f?width=1438" 
            alt="Final illustration" 
            className="w-[550px] h-auto absolute right-[50px] bottom-0 max-md:w-[400px] max-md:right-[20px] max-sm:hidden" 
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
