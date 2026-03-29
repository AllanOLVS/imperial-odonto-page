import { Button } from "./ui/button";
import ImperialLogo from "./ImperialLogo";
import heroImage from "@/assets/foto-equipe-imperial.jpeg";
import { Link } from "react-router-dom";
import { Heart, Cpu, Users } from "lucide-react";

const BOOKING_URL = "/agendamento";

const Hero = () => {
    return (
        <section id="inicio" className="noise-overlay relative min-h-screen bg-imperial-deep overflow-hidden flex items-center">
            {/* Decorative logo background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <ImperialLogo decorative className="w-[600px] h-[400px] text-imperial-rose opacity-[0.06]" />
            </div>

            <div className="container mx-auto px-6 py-32 lg:py-0">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Text */}
                    <div className="relative z-10 animate-on-scroll">
                        <h1 className="font-display text-5xl font-light leading-[1.1] tracking-wide text-imperial-cream md:text-6xl lg:text-7xl">
                            Seu sorriso merece{" "}
                            <span className="italic text-imperial-rose">tratamento imperial.</span>
                        </h1>
                        <p className="mt-6 max-w-lg font-body text-lg font-light leading-relaxed text-imperial-blush">
                            Odontologia estética e de alta performance em um ambiente pensado para você.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button variant="booking-primary" size="lg" asChild className="px-8 h-14 text-base">
                                <Link to={BOOKING_URL}>
                                    Agendar Minha Consulta
                                </Link>
                            </Button>
                            <Button variant="imperial-ghost" size="lg" asChild>
                                <a href="#servicos">Conheça Nossos Tratamentos</a>
                            </Button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-12 flex flex-wrap items-center gap-6 text-imperial-blush/70">
                            <div className="flex items-center gap-2">
                                <Heart size={16} className="text-imperial-rose" />
                                <span className="font-body text-xs tracking-wider">Atendimento humanizado</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Cpu size={16} className="text-imperial-rose" />
                                <span className="font-body text-xs tracking-wider">Tecnologia de ponta</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-imperial-rose" />
                                <span className="font-body text-xs tracking-wider">Equipe especializada</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-on-scroll mt-12 lg:mt-0">
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -top-4 -right-4 bottom-4 left-4 border border-imperial-rose/30 rounded-sm" />
                            <img
                                src={heroImage}
                                alt="Paciente sorrindo na Imperial Odontologia"
                                className="relative z-10 w-full rounded-sm object-cover shadow-2xl"
                                width={768}
                                height={1024}
                            />
                            {/* Corner decoration */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-imperial-rose z-20" />
                            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-imperial-rose z-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
