import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

import Logo from "../assets/logo.png";

const Footer = () => {
  const contactInfo = [
    { icon: MapPin, text: "São Paulo, SP - Brasil" },
    { icon: Phone, text: "(11) 9999-9999" },
    { icon: Mail, text: "contato@coffeetime.com.br" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer id="contact" className="bg-[#382820] text-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="space-y-2">
            <div className="flex-shrink-0">
              <img src={Logo} alt="Coffee Shop Logo" className="h-16 w-auto" />
            </div>
            <p className="text-card-foreground font-inter leading-relaxed">
              Experiência única em cada xícara. Café artesanal de qualidade premium entregue na sua casa.
            </p>
          </div>


          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-foreground">
              Contato
            </h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3" >
                  <item.icon className="w-5 h-5 text-caramel flex-shrink-0" />
                  <span className="text-card-foreground font-inter text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-foreground">
              Links Rápidos
            </h4>
            <div className="space-y-3">
              {["Home", "Best Sellers", "Delivery", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-card-foreground font-inter text-sm hover:text-caramel transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>


          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold text-foreground">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-card-foreground hover:bg-caramel hover:text-white transition-all duration-300"
                  style={{ backgroundColor: "#C67C4E" }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>


        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-card-foreground font-inter text-sm">
            © 2024 Coffee Time. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;