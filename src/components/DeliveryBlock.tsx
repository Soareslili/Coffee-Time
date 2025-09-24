import { Clock, Package, MapPin } from "lucide-react";
import DeliveryImag from "../assets/delivery.jpg";


const DeliveryBlock = () => {
  const benefits = [
    { icon: Clock, text: "Entrega rápida" },
    { icon: Package, text: "Embalagem térmica" },
    { icon: MapPin, text: "Rastreio em tempo real" },
  ];

  return (
    <section id="delivery" className="py-20 bg-[#382820] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
            <div className="relative rounded-2xl overflow-hidden">
            <img
              src={DeliveryImag}
              alt="Coffee delivery service"
              className="w-full h-96 lg:h-full object-cover"
            />
            </div>

       
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Coffee Delivered to Your Door.
              </h2>
              <p className="text-lg text-card-foreground font-inter leading-relaxed mb-8">
                Desfrute do melhor café artesanal no conforto da sua casa. Nossa equipe garante que cada xícara chegue perfeita.
              </p>
            </div>

          
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-caramel" />
                  </div>
                  <span className="text-card-foreground font-inter font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

        
            <a 
              className="bg-[#C67C4E] hover:bg-[#c67c4e]/80 rounded-3xl cursor-pointer text-white font-inter font-medium px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Assinar plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBlock;