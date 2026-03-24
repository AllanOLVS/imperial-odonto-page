import { Sparkles, CircleDot, SmilePlus, Gem, Wrench, Baby, Zap, Scan, AlertTriangle } from "lucide-react";

const services = [
    { icon: Sparkles, title: "Clareamento Dental", desc: "Devolva a luminosidade natural do seu sorriso com técnicas seguras e resultados imediatos." },
    { icon: CircleDot, title: "Implantes Dentários", desc: "Recupere dentes perdidos com implantes de última geração e máxima naturalidade." },
    { icon: SmilePlus, title: "Ortodontia Invisível", desc: "Alinhe seu sorriso com discrição usando alinhadores transparentes personalizados." },
    { icon: Gem, title: "Lentes de Contato Dental", desc: "Facetas ultrafinas que transformam seu sorriso de forma rápida e minimamente invasiva." },
    { icon: Wrench, title: "Próteses Dentárias", desc: "Próteses modernas que restauram função e estética com conforto e durabilidade." },
    { icon: Baby, title: "Odontopediatria", desc: "Cuidado especializado e acolhedor para os sorrisos dos pequenos." },
    { icon: Zap, title: "Tratamento de Canal", desc: "Procedimentos indolores com tecnologia avançada para preservar seu dente natural." },
    { icon: Scan, title: "Harmonização Orofacial", desc: "Procedimentos estéticos que harmonizam o rosto e realçam a beleza natural." },
    { icon: AlertTriangle, title: "Emergências Odontológicas", desc: "Atendimento de urgência com rapidez, acolhimento e eficiência." },
];

const Services = () => {
    return (
        <section id="servicos" className="relative bg-imperial-deep py-24 noise-overlay">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center animate-on-scroll">
                    <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl">
                        Tratamentos que <span className="italic text-imperial-rose">transformam</span>
                    </h2>
                    <div className="mx-auto mt-4 h-px w-24 bg-imperial-rose/40" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="animate-on-scroll group rounded-sm border border-imperial-rose/10 bg-imperial-mid/20 p-8 transition-all duration-300 hover:border-imperial-rose/40 hover:bg-imperial-mid/30 hover:shadow-[0_0_30px_rgba(196,144,122,0.08)]"
                        >
                            <service.icon size={28} className="text-imperial-rose mb-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                            <h3 className="font-display text-xl font-normal text-imperial-cream mb-2">{service.title}</h3>
                            <p className="font-body text-sm font-light leading-relaxed text-imperial-blush/70">{service.desc}</p>
                            <a href="#agendamento" className="mt-4 inline-block font-body text-xs font-medium tracking-wider text-imperial-rose transition-colors hover:text-imperial-cream">
                                Saiba mais →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
