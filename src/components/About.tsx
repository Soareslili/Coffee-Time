
import CoffeeAboutVideo from "../../public/CoffeeAbout.mp4";

const About = () => {
  return (
    <section id="about" className="bg-[#2b1d16]">
      <div className="container mx-auto px-4 py-16">

        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa paixão pelo café nos levou a uma jornada em busca da perfeição.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="w-full]">
            <div className="relative overflow-hidden rounded-xl shadow-xl ring-1 ring-black/10">
              <video
                src="/CoffeeAbout.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                disableRemotePlayback
                controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
                className="block w-full h-[400px] object-cover aspect-[16/9]"
                aria-label="Torrecação de café em funcionamento"
              />
            </div>
          </div>


          <div className="space-y-6 text-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              Há mais de 10 anos, dedicamos nossa vida ao café. Começamos como
              uma pequena torrefação familiar e hoje somos reconhecidos pela
              qualidade excepcional dos nossos blends.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Trabalhamos diretamente com produtores locais, garantindo não
              apenas a melhor qualidade, mas também um impacto positivo nas
              comunidades cafeeiras.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Cada grão é cuidadosamente selecionado e torrado em pequenos
              lotes para preservar as características únicas de cada origem.
            </p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default About;
