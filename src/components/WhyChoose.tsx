import { Coffee, Zap, ShieldCheck, Leaf } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="h-full bg-[#382820] py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Why Choose Us</h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">Descubra o que nos torna únicos no mundo do café premium.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="bg-[#4b3621] p-8 rounded-lg shadow-lg"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        <Coffee className="w-10 h-10 text-white mb-4 mx-auto" />
                        <h2 className="text-2xl font-semibold text-white mb-4">Grãos Selecionados</h2>
                        <p className="text-gray-300 leading-relaxed">Selecionamos apenas os melhores grãos de café, garantindo uma experiência rica e saborosa em cada xícara.</p>
                    </div>

                    <div className="bg-[#4b3621] p-8 rounded-lg shadow-lg"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        <Leaf className='w-10 h-10 text-white mb-4 mx-auto' />
                        <h2 className="text-2xl font-semibold text-white mb-4">Torra Fresca</h2>
                        <p className="text-gray-300 leading-relaxed">Nosso café é torrado semanalmente em pequenos lotes para garantir máximo frescor e sabor.</p>
                    </div>

                    <div className="bg-[#4b3621] p-8 rounded-lg shadow-lg"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="600"
                    >
                        <Zap className='w-10 h-10 text-white mb-4 mx-auto' />
                        <h2 className="text-2xl font-semibold text-white mb-4">Sustentável</h2>
                        <p className="text-gray-300 leading-relaxed">Apoiamos práticas sustentáveis e comércio justo, cuidando do meio ambiente e dos produtores.</p>
                    </div>

                    <div className="bg-[#4b3621] p-8 rounded-lg shadow-lg"
                        data-aos="zoom-in"
                        data-aos-duration="1400"
                        data-aos-delay="600"
                    >
                        <ShieldCheck className='w-10 h-10 text-white mb-4 mx-auto' />
                        <h2 className="text-2xl font-semibold text-white mb-4">Pagamento Seguro</h2>
                        <p className="text-gray-300 leading-relaxed">Transações 100% seguras com criptografia de ponta e múltiplas opções de pagamento.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;