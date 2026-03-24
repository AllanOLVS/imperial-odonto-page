import clinicImage from "@/assets/foto-equipe-anime.jpeg";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const features = [
    "Ambiente climatizado e acolhedor",
    "Profissionais com especialização e atualização constante",
    "Equipamentos de última geração",
    "Atendimento individualizado e humanizado",
];

const About = () => {
    return (
        <section id="sobre" className="relative bg-imperial-dark py-24 noise-overlay">
            <div className="container mx-auto px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Image */}
                    <div className="animate-on-scroll relative">
                        <img
                            src={clinicImage}
                            alt="Interior da clínica Imperial Odontologia"
                            className="w-full rounded-sm object-cover shadow-2xl"
                            loading="lazy"
                            width={960}
                            height={640}
                        />
                        {/* Diagonal line decoration */}
                        <div className="absolute -right-6 top-1/4 hidden h-32 w-px rotate-12 bg-imperial-rose/30 lg:block" />
                    </div>

                    {/* Text */}
                    <div className="animate-on-scroll">
                        <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl">
                            Uma clínica feita para cuidar de você com{" "}
                            <span className="italic text-imperial-rose">excelência</span>
                        </h2>
                        <div className="mt-4 h-px w-16 bg-imperial-rose/40" />

                        <p className="mt-8 font-body text-base font-light leading-relaxed text-imperial-blush/80">
                            Na Imperial Odontologia, cada sorriso é único — e merece um cuidado à altura.
                            Combinamos tecnologia de ponta com um atendimento humanizado para oferecer a
                            melhor experiência em saúde bucal da região.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {features.map((f) => (
                                <li key={f} className="flex items-center gap-3">
                                    <Check size={16} className="text-imperial-rose flex-shrink-0" />
                                    <span className="font-body text-sm font-light text-imperial-blush/70">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="imperial-cta" className="mt-10" asChild>
                            <a href="#agendamento">Agende sua consulta</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
