import { Button } from "./ui/button";
import ImperialLogo from "./ImperialLogo";
import { Phone } from "lucide-react";

const BOOKING_URL = "#agendamento";

const CTASection = () => {
    return (
        <section id="agendamento" className="relative overflow-hidden py-24 noise-overlay" style={{ background: "linear-gradient(135deg, hsl(320 35% 27%), hsl(320 25% 36%))" }}>
            {/* Decorative logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <ImperialLogo decorative className="w-[500px] h-[350px] text-imperial-rose opacity-[0.05]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <div className="animate-on-scroll">
                    <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl lg:text-6xl">
                        Pronto para transformar{" "}
                        <span className="italic text-imperial-rose">seu sorriso?</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-lg font-body text-base font-light text-imperial-blush/80">
                        Agende sua consulta de avaliação gratuita. Nossa equipe está pronta para te atender.
                    </p>

                    <Button variant="imperial-cta" className="mt-10 text-lg" asChild>
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                            Agendar Minha Consulta Agora
                        </a>
                    </Button>

                    <p className="mt-6 flex items-center justify-center gap-2 font-body text-sm text-imperial-blush/60">
                        <Phone size={14} className="text-imperial-rose" />
                        Ou ligue para nós:{" "}
                        <a href="tel:+5500000000000" className="text-imperial-rose transition hover:text-imperial-cream">
                            (XX) XXXXX-XXXX
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
