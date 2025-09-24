import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Star } from "lucide-react";
// Se este arquivo está em src/components/TestimonialsSection.tsx:
import { Card, CardContent } from "./ui/card"; // <- ajuste o path se necessário

const testimonials = [
  {
    id: 1,
    name: "Marina Silva",
    location: "São Paulo, SP",
    rating: 5,
    comment:
      "O melhor café que já provei! A entrega é super rápida e o aroma chega perfeito. Recomendo de olhos fechados.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b900?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    comment:
      "Desde que descobri a Coffee Time, não consigo mais tomar café de outros lugares. A qualidade é incomparável!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    comment:
      "Como profissional da área, posso garantir que os grãos da Coffee Time são de primeira qualidade. Sempre frescos e saborosos.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Roberto Santos",
    location: "Porto Alegre, RS",
    rating: 5,
    comment:
      "Aroma inconfundível e sabor equilibrado. Virou meu ritual da manhã — não vivo sem!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Juliana Oliveira",
    location: "Salvador, BA",
    rating: 5,
    comment:
      "A torra especial realça notas de chocolate e caramelo. Dá para sentir o cuidado em cada xícara.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Eduardo Lima",
    location: "Brasília, DF",
    rating: 5,
    comment:
      "Ambiente aconchegante e atendimento impecável. Mais que café — é uma experiência.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 40,
    });
  }, []);

  return (
    <section id="testimonial" className="py-20 bg-[#2b1d16] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de quem já se apaixonou pelo nosso café
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card
              key={t.id}
              data-aos="fade-up"
              data-aos-delay={index * 150} // delay progressivo por card
              data-aos-anchor-placement="top-bottom"
              className="bg-[#4b3621] border border-transparent rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{t.comment}</p>

                <div className="flex items-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
