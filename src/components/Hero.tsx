import coffeeHeroVideo from "../../public/CoffeeHero.mp4";

interface HeroProps {
  videoSrc?: string;
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

const Hero = ({ videoSrc, title, subtitle, primaryCta, secondaryCta }: HeroProps) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src={coffeeHeroVideo}
          alt="Coffee brewing"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}


      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      </div>


      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-[0_8px_30px_rgba(0,0,0,.9)]">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={primaryCta.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(primaryCta.href)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl bg-[#C67C4E] hover:bg-[#b35f33] text-white font-semibold px-8 py-3 text-lg shadow-lg shadow-black/30 ring-1 ring-black/20 transition"
          >
            {primaryCta.text}
          </a>

          <a
            href="#sobre" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl border border-white/70 text-white/95 hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition"
          >
            Sobre a Loja
          </a>
        </div>
      </div>



    </section>
  );
};

export default Hero;
