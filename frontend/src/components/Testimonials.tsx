import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    { name: "Ana Clara S.", treatment: "Clareamento Dental", text: "Fui atendida com tanto carinho e profissionalismo que nem parecia estar no dentista. O resultado ficou incrível!" },
    { name: "Ricardo M.", treatment: "Implantes Dentários", text: "Depois de anos evitando sorrir, a Imperial me devolveu a confiança. Equipe excepcional e resultado perfeito." },
    { name: "Juliana P.", treatment: "Lentes de Contato Dental", text: "O sorriso dos meus sonhos se tornou realidade. O atendimento é de outro nível — recomendo de olhos fechados." },
    { name: "Carlos H.", treatment: "Ortodontia Invisível", text: "Alinhei meus dentes sem que ninguém percebesse. Tecnologia incrível e acompanhamento impecável." },
    { name: "Fernanda L.", treatment: "Harmonização Orofacial", text: "A transformação foi sutil e natural, exatamente como eu queria. Profissionais extremamente capacitados." },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        if (paused) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [paused, next]);

    return (
        <section id="depoimentos" className="relative bg-imperial-dark py-24 noise-overlay">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center animate-on-scroll">
                    <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl">
                        O que nossos pacientes <span className="italic text-imperial-rose">dizem</span>
                    </h2>
                    <div className="mx-auto mt-4 h-px w-24 bg-imperial-rose/40" />
                </div>

                <div
                    className="relative mx-auto max-w-2xl animate-on-scroll"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className="rounded-sm border border-imperial-rose/15 bg-imperial-mid/15 p-10 text-center backdrop-blur-sm">
                        {/* Avatar */}
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-imperial-rose bg-imperial-mid/30">
                            <span className="font-display text-xl text-imperial-cream">
                                {testimonials[current].name.charAt(0)}
                            </span>
                        </div>

                        {/* Stars */}
                        <div className="mb-4 flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-imperial-rose text-imperial-rose" />
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="font-display text-lg font-light italic leading-relaxed text-imperial-cream">
                            "{testimonials[current].text}"
                        </p>

                        {/* Author */}
                        <div className="mt-6">
                            <p className="font-body text-sm font-medium text-imperial-cream">{testimonials[current].name}</p>
                            <p className="font-body text-xs text-imperial-blush/60">{testimonials[current].treatment}</p>
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 text-imperial-rose/50 transition hover:text-imperial-rose hidden md:block" aria-label="Anterior">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 text-imperial-rose/50 transition hover:text-imperial-rose hidden md:block" aria-label="Próximo">
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${i === current ? "bg-imperial-rose w-6" : "bg-imperial-rose/30"
                                    }`}
                                aria-label={`Depoimento ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
