import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const Cancel = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zank-gray to-white px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-100 p-4">
            <XCircle className="h-16 w-16 text-red-600" />
          </div>
        </div>
        
        <h1 className="mb-4 text-4xl font-bold text-zank-dark">
          Pagamento cancelado
        </h1>
        
        <p className="mb-8 text-lg text-zank-dark/80">
          Você cancelou o processo de pagamento. Nenhuma cobrança foi realizada.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="bg-zank-dark text-white hover:bg-zank-light hover:text-zank-dark transition-all duration-300"
            size="lg"
          >
            <Link to="/#planos">Tentar Novamente</Link>
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

export default Cancel;

