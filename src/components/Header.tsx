import { useState } from "react";
import { Menu, X } from "lucide-react"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "#home" },
      { name: "Best Sellers", href: "#best-sellers" },
        { name: "About", href: "#about" },
         {name: "Testimonial", href: "#testimonial"},
         { name: "Delivery", href: "#delivery" },
    ]

    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3E2C23]/80 text-white/80 backdrop-blur-sm ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-foreground">
              Coffee Time
            </h1>
          </div>

    
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" text-sm font-medium text-latte hover:text-shadow-amber-950 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

         
          <div className="hidden md:block">
            <a className="bg-[#C67C4E] hover:bg-[#c67c4e]/80 text-white font-inter font-medium px-2 py-2 rounded-2xl cursor-pointer">
              Comprar agora
            </a>
          </div>

        
          <div className="md:hidden">
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-latte hover:text-foreground transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </a>
          </div>
        </div>

     
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-coffee-brown border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-latte hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a className="w-full bg-caramel hover:bg-caramel/90 text-white font-inter font-medium">
                  Comprar agora
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


