import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Success = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zank-gray to-white px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle2 className="h-16 w-16 text-green-600" />
          </div>
        </div>
        
        <h1 className="mb-4 text-4xl font-bold text-zank-dark">
          Pagamento realizado com sucesso! ✅
        </h1>
        
        <p className="mb-8 text-xl text-zank-dark/80">
          Sua assinatura está ativa
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="bg-zank-dark text-white hover:bg-zank-light hover:text-zank-dark transition-all duration-300"
            size="lg"
          >
            <Link to="/">Voltar ao Dashboard</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-zank-dark text-zank-dark hover:bg-zank-dark hover:text-white"
          >
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;

