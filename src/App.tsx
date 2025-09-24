import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import type { ProductCardProps } from "./components/ProductCard";
import DeliveryBlock from "./components/DeliveryBlock";

import Coffee1 from "./assets/coffee-1.jpg";
import Coffee2 from "./assets/coffee-2.jpg";
import Coffee3 from "./assets/coffee-3.jpg";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from "./components/Testimonial";

const products: ProductCardProps[] = [
  {
    image: Coffee1,
    title: "Espresso Blend",
    subtitle: "Rico e encorpado com notas de chocolate",
    price: "R$ 12,90",
    rating: 4.8,
  },
  {
    image: Coffee2,
    title: "House Blend",
    subtitle: "Equilibrado com toque frutado",
    price: "R$ 14,90",
    rating: 4.6,
  },
  {
    image: Coffee3,
    title: "Cold Brew Concentrate",
    subtitle: "Suave e refrescante para drink gelado",
    price: "R$ 36,90",
    rating: 4.7,
  },
];

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <Hero
        videoSrc="/CoffeeHero.mp4"
        title="Experimente a arte do café."
        subtitle="Descubra sabores únicos e aromas excepcionais com nossos blends artesanais premium."
        primaryCta={{ text: "Ver Best Sellers", href: "#best-sellers" }}
        secondaryCta={{ text: "Acessar a Loja", href: "#shop" }}
      />

      <section id="best-sellers" className="bg-[#3E2C23] relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Best Sellers
            </h2>
            <p className="mt-2 text-white/85 max-w-2xl mx-auto">
              Nossos cafés mais amados pelos clientes. Sabores que conquistaram corações e paladares.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <WhyChoose />
     <Testimonial />
      <DeliveryBlock />
    </>
  );
}

export default App;
