import React, { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@/lib/auth';
import { createCheckoutSession, ApiError } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const PricingSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: false });
  const navigate = useNavigate();
  const { toast } = useToast();

  const monthlyPrice = "10,00";
  const annualPrice = "85,99";
  const annualInstallment = "21,50";

  const handleSubscribe = async () => {
    if (!isAuthenticated()) {
      setShowLoginDialog(true);
      return;
    }

    setIsLoading(true);
    try {
      const planName = isMonthly ? 'mensal' : 'anual' as 'mensal' | 'anual';
      const response = await createCheckoutSession(planName);
      
      if (response.checkout_url) {
        window.location.href = response.checkout_url;
      }
    } catch (error) {
      console.error('Erro ao criar sessão de checkout:', error);
      toast({
        title: "Erro",
        description: error instanceof ApiError 
          ? error.message 
          : "Erro ao processar assinatura. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToLogin = () => {
    setShowLoginDialog(false);
    navigate('/auth?mode=login');
  };

  const handleGoToRegister = () => {
    setShowLoginDialog(false);
    navigate('/auth?mode=register');
  };

  return (
    <section 
      ref={ref}
      id="planos" 
      className="w-full bg-zank-gray px-[150px] py-[120px] relative max-xl:px-[100px] max-lg:px-[80px] max-lg:py-[100px] max-md:p-[50px] max-sm:px-5 max-sm:py-[70px]"
    >
      {/* Background decorative emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a466ae1fb6a01410a92e33c3e2bfba9ea20abd16?width=453" 
          alt="Increase icon" 
          className="w-[180px] h-[180px] rotate-[17.422deg] absolute left-[50px] top-[100px] max-xl:left-[30px] max-xl:w-[140px] max-xl:h-[140px] max-lg:left-[20px] max-lg:w-[120px] max-lg:h-[120px] max-md:hidden" 
          loading="lazy"
          style={{ opacity: 0.85, filter: 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 4px rgba(32, 71, 73, 0.2))' }}
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1eb649955a94d51c84aa77aab6015f62bd599ad7?width=322" 
          alt="Money Mouth Face" 
          className="w-[140px] h-[140px] rotate-[14.546deg] absolute right-[200px] top-[50px] max-xl:right-[150px] max-xl:w-[110px] max-xl:h-[110px] max-lg:right-[100px] max-lg:w-[100px] max-lg:h-[100px] max-md:hidden" 
          loading="lazy"
          style={{ opacity: 0.85, filter: 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 4px rgba(32, 71, 73, 0.2))' }}
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e7f2f3ee8b727986c06190b5e8b962fbc8c2c087?width=460" 
          alt="Goal icon" 
          className="w-[180px] h-[180px] rotate-[19.289deg] absolute right-[200px] bottom-[100px] max-xl:right-[150px] max-xl:w-[140px] max-xl:h-[140px] max-lg:right-[100px] max-lg:w-[120px] max-lg:h-[120px] max-md:hidden" 
          loading="lazy"
          style={{ opacity: 0.85, filter: 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 4px rgba(32, 71, 73, 0.2))' }}
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b021498489cf6b84936c5d296ada9be6cc24a42f?width=335" 
          alt="Chatbot icon" 
          className="w-[140px] h-[140px] rotate-[-24.038deg] absolute left-[100px] bottom-[120px] max-xl:left-[70px] max-xl:w-[110px] max-xl:h-[110px] max-lg:left-[50px] max-lg:w-[100px] max-lg:h-[100px] max-md:hidden" 
          loading="lazy"
          style={{ opacity: 0.85, filter: 'brightness(1.15) saturate(1.3) drop-shadow(0 2px 4px rgba(32, 71, 73, 0.2))' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Pricing toggle */}
        <div 
          className={`flex justify-center mb-[60px] transition-all duration-700 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex w-[350px] h-[50px] relative rounded-[55px] border-[3px] border-solid border-zank-dark max-xl:w-[320px] max-lg:w-[300px] max-md:w-[280px] max-sm:w-[300px] bg-white/50 backdrop-blur-sm shadow-lg">
            <button
              onClick={() => setIsMonthly(true)}
              className={`flex w-[168px] h-10 justify-center items-center absolute px-[40px] py-[5px] rounded-[55px] left-[5px] top-0.5 transition-all duration-300 ${
                isMonthly ? 'bg-zank-dark shadow-lg' : 'bg-transparent'
              }`}
            >
              <span className={`text-xl font-semibold transition-colors duration-300 ${isMonthly ? 'text-white' : 'text-zank-dark'}`}>
                Mensal
              </span>
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`flex w-[168px] h-10 justify-center items-center absolute px-[40px] py-[5px] rounded-[55px] right-[5px] top-0.5 transition-all duration-300 ${
                !isMonthly ? 'bg-zank-dark shadow-lg' : 'bg-transparent'
              }`}
            >
              <span className={`text-xl font-semibold transition-colors duration-300 ${!isMonthly ? 'text-white' : 'text-zank-dark'}`}>
                Anual
              </span>
            </button>
          </div>
        </div>

        {/* Pricing card */}
        <div 
          className={`flex justify-center transition-all duration-700 delay-200 ${
            isInView 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="w-full max-w-[550px] backdrop-blur-[20px] relative rounded-[20px] border-[3px] border-solid border-[rgba(255,255,255,0.40)] bg-white/30 p-[50px] flex flex-col items-center gap-[30px] max-sm:p-[30px] shadow-xl transition-shadow duration-300">
            <h3 className="text-zank-dark text-4xl font-bold text-center max-sm:text-3xl">
              Plano {isMonthly ? 'mensal' : 'anual'}
            </h3>
            
            <div className="w-full bg-zank-light rounded-[20px] p-[30px] flex flex-col items-center justify-center min-h-[180px]">
              <div className="flex flex-col items-center gap-2">
                <span className="text-zank-dark text-5xl font-bold max-sm:text-4xl">R${isMonthly ? monthlyPrice : annualPrice}</span>
                {!isMonthly && (
                  <div className="flex flex-col items-center gap-1 mt-2">
                    <span className="text-zank-dark text-sm font-medium">ou parcele em até</span>
                    <span className="text-zank-dark text-lg font-bold">4x de R${annualInstallment} sem juros</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-[15px] w-full max-sm:flex-col">
              <button 
                onClick={handleSubscribe}
                disabled={isLoading}
                className="group flex-1 bg-zank-light text-zank-dark rounded-[25px] h-[60px] flex items-center justify-center gap-3 text-lg font-black hover:bg-zank-dark hover:text-zank-light transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Processando...' : 'Assinar plano'}
                {!isLoading && (
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
                )}
              </button>
              <button className="w-[60px] h-[60px] bg-zank-light text-zank-dark rounded-[25px] flex items-center justify-center hover:bg-zank-dark hover:text-zank-light transition-all duration-300 max-sm:w-full shadow-lg hover:shadow-xl hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog para usuário não logado */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login Necessário</DialogTitle>
            <DialogDescription>
              Você precisa fazer login ou criar uma conta para assinar um plano.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={handleGoToLogin}
              className="w-full sm:w-auto"
            >
              Fazer Login
            </Button>
            <Button
              onClick={handleGoToRegister}
              className="w-full sm:w-auto bg-zank-dark text-white hover:bg-zank-light hover:text-zank-dark"
            >
              Criar Conta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
