import { useState } from "react";

import { Input } from "../components/ui/input";
import { Mail } from "lucide-react";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
  
    setTimeout(() => {
     
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#382820] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl" style={{ backgroundColor: "#C67C4E" }}>
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-lg text-card-foreground font-inter mb-8">
            Receba ofertas exclusivas, lançamentos e dicas sobre café diretamente no seu e-mail.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-coffee-brown border-border text-foreground placeholder:text-card-foreground font-inter"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#C67C4E] hover:bg-[#c67c4e]/80 text-white font-inter rounded-3xl cursor-pointer font-medium px-8"
            >
              {isLoading ? "Inscrevendo..." : "Inscrever"}
            </button>
          </form>
          <p className="text-xs text-card-foreground mt-2">
            Não enviamos spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;