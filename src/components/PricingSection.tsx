import React, { useState } from 'react';

const PricingSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="w-full bg-white px-[150px] py-[100px] relative min-h-[900px] max-md:p-[50px] max-sm:px-5 max-sm:py-[60px]">
      {/* Background decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a466ae1fb6a01410a92e33c3e2bfba9ea20abd16?width=453" 
          alt="Increase icon" 
          className="w-[180px] h-[180px] rotate-[17.422deg] absolute left-[50px] top-[100px] max-sm:hidden" 
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1eb649955a94d51c84aa77aab6015f62bd599ad7?width=322" 
          alt="Money Mouth Face" 
          className="w-[140px] h-[140px] rotate-[14.546deg] absolute right-[200px] top-[50px] max-sm:hidden" 
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e7f2f3ee8b727986c06190b5e8b962fbc8c2c087?width=460" 
          alt="Goal icon" 
          className="w-[180px] h-[180px] rotate-[19.289deg] absolute right-[200px] bottom-[100px] max-sm:hidden" 
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b021498489cf6b84936c5d296ada9be6cc24a42f?width=335" 
          alt="Chatbot icon" 
          className="w-[140px] h-[140px] rotate-[-24.038deg] absolute left-[100px] bottom-[120px] max-sm:hidden" 
        />
      </div>

      {/* Pricing toggle */}
      <div className="relative flex justify-center mb-[60px]">
        <div className="flex w-[350px] h-[50px] relative rounded-[55px] border-[3px] border-solid border-[#204749] max-sm:w-[300px]">
          <button
            onClick={() => setIsMonthly(true)}
            className={`flex w-[168px] h-10 justify-center items-center absolute px-[40px] py-[5px] rounded-[55px] left-[5px] top-0.5 transition-all ${
              isMonthly ? 'bg-[#204749]' : 'bg-transparent'
            }`}
          >
            <span className={`text-xl font-semibold ${isMonthly ? 'text-white' : 'text-[#204749]'}`}>
              Mensal
            </span>
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`flex w-[168px] h-10 justify-center items-center absolute px-[40px] py-[5px] rounded-[55px] right-[5px] top-0.5 transition-all ${
              !isMonthly ? 'bg-[#204749]' : 'bg-transparent'
            }`}
          >
            <span className={`text-xl font-semibold ${!isMonthly ? 'text-white' : 'text-[#204749]'}`}>
              Anual
            </span>
          </button>
        </div>
      </div>

      {/* Pricing card */}
      <div className="relative flex justify-center">
        <div className="w-full max-w-[500px] backdrop-blur-[20px] relative rounded-[20px] border-[3px] border-solid border-[rgba(255,255,255,0.40)] bg-white/30 p-[50px] flex flex-col items-center gap-[40px] max-sm:p-[30px]">
          <h3 className="text-[#204749] text-4xl font-bold text-center max-sm:text-3xl">
            Plano {isMonthly ? 'mensal' : 'anual'}
          </h3>
          
          <div className="w-full bg-[#9EEA6C] rounded-[20px] p-[30px] flex items-center justify-center min-h-[150px]">
            <span className="text-[#204749] text-5xl font-bold max-sm:text-4xl">R$10,00</span>
          </div>
          
          <div className="flex gap-[15px] w-full max-sm:flex-col">
            <button className="flex-1 bg-[#9EEA6C] text-[#204749] rounded-[25px] h-[60px] flex items-center justify-center text-lg font-black hover:opacity-90 transition-opacity">
              Assinar plano
            </button>
            <button className="w-[60px] h-[60px] bg-[#9EEA6C] text-[#204749] rounded-[25px] flex items-center justify-center hover:opacity-90 transition-opacity max-sm:w-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
