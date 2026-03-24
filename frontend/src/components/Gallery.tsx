import { useState } from "react";
import { Button } from "./ui/button";

const galleryItems = [
    { id: 1, label: "Clareamento" },
    { id: 2, label: "Lentes de Contato" },
    { id: 3, label: "Implantes" },
    { id: 4, label: "Ortodontia" },
    { id: 5, label: "Harmonização" },
    { id: 6, label: "Facetas" },
];

const Gallery = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="resultados" className="relative bg-imperial-deep py-24 noise-overlay">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center animate-on-scroll">
                    <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl">
                        Resultados que <span className="italic text-imperial-rose">falam por si</span>
                    </h2>
                    <div className="mx-auto mt-4 h-px w-24 bg-imperial-rose/40" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="animate-on-scroll group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm bg-imperial-mid/30"
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Before state */}
                            <div className="absolute inset-0 flex items-center justify-center bg-imperial-mid/40">
                                <span className="font-display text-lg italic text-imperial-blush/50">Antes</span>
                            </div>

                            {/* After state */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center bg-imperial-rose/20 transition-all duration-500 ${hoveredId === item.id ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="text-center">
                                    <span className="font-display text-lg italic text-imperial-cream">Depois</span>
                                    <p className="mt-1 font-body text-xs text-imperial-blush">{item.label}</p>
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute bottom-3 left-3 rounded-sm bg-imperial-dark/70 px-3 py-1 backdrop-blur-sm">
                                <span className="font-body text-xs tracking-wider text-imperial-cream">
                                    {hoveredId === item.id ? "Depois" : "Antes"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center animate-on-scroll">
                    <Button variant="imperial-cta" asChild>
                        <a href="#agendamento">Agende sua avaliação</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
