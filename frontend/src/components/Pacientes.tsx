import { useEffect, useRef } from "react";

// Importa todas as imagens .jpeg da pasta assets (Vite glob import)
const imageModules = import.meta.glob<{ default: string }>("@/assets/*.jpeg", { eager: true });

// Extraí as URLs das imagens e filtra apenas as numeradas (1.jpeg a 55.jpeg)
const patientPhotos = Object.entries(imageModules)
    .filter(([path]) => /\/(\d+)\.jpeg$/.test(path))
    .sort((a, b) => {
        const numA = parseInt(a[0].match(/\/(\d+)\.jpeg$/)![1], 10);
        const numB = parseInt(b[0].match(/\/(\d+)\.jpeg$/)![1], 10);
        return numA - numB;
    })
    .map(([_, module]) => module.default);

// Divide as fotos em duas fileiras
// Como há cerca de 53 fotos (faltam 25 e 48), cada fileira ficará com ~26 fotos
const half = Math.ceil(patientPhotos.length / 2);
const track1Photos = patientPhotos.slice(0, half);
const track2Photos = patientPhotos.slice(half);

/* ── componente ── */
const Pacientes = () => {
    const track1Ref = useRef<HTMLUListElement>(null);
    const track2Ref = useRef<HTMLUListElement>(null);

    /* Duplica os itens do track para criar loop seamless */
    useEffect(() => {
        const cloneTrack = (track: HTMLUListElement | null) => {
            if (!track) return;
            const items = Array.from(track.children);
            items.forEach((item) => {
                const clone = item.cloneNode(true) as HTMLElement;
                clone.setAttribute("aria-hidden", "true");
                track.appendChild(clone);
            });
        };
        cloneTrack(track1Ref.current);
        cloneTrack(track2Ref.current);
    }, []);

    return (
        <section id="pacientes" className="pacientes-section relative overflow-hidden noise-overlay">
            {/* Cabeçalho */}
            <div className="mx-auto max-w-[1200px] px-6 md:px-16 mb-16 animate-on-scroll">
                <p className="font-body text-[0.7rem] font-medium uppercase tracking-[0.3em] text-imperial-rose mb-4 flex items-center gap-3">
                    <span className="inline-block h-px w-8 bg-imperial-rose" />
                    Nossos Pacientes
                </p>
                <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl">
                    Sorrisos que<br /><em className="italic text-imperial-rose">transformamos</em>
                </h2>
                <p className="mt-4 max-w-xl font-body text-base font-light text-imperial-blush/80 leading-relaxed">
                    Cada foto representa uma história de confiança, cuidado e transformação.<br />
                    Conheça alguns dos sorrisos que tivemos o privilégio de cuidar.
                </p>
            </div>

            {/* Stage com fade lateral */}
            <div className="pacientes-stage relative flex flex-col gap-5">
                {/* Carrossel 1 → esquerda para direita */}
                <div className="w-full overflow-hidden" aria-label="Carrossel de pacientes - linha 1">
                    <ul className="carousel-track track-forward flex gap-4 list-none" ref={track1Ref}>
                        {track1Photos.map((url, i) => (
                            <li key={i} className="flex-shrink-0">
                                <div className="carousel-foto" data-label="Transformação">
                                    <img src={url} alt={`Transformação paciente ${i + 1}`} loading="lazy" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Carrossel 2 → direita para esquerda */}
                <div className="w-full overflow-hidden" aria-label="Carrossel de pacientes - linha 2">
                    <ul className="carousel-track track-reverse flex gap-4 list-none" ref={track2Ref}>
                        {track2Photos.map((url, i) => (
                            <li key={i} className="flex-shrink-0">
                                <div className="carousel-foto" data-label="Transformação">
                                    <img src={url} alt={`Transformação paciente ${half + i + 1}`} loading="lazy" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA sutil */}
            <div className="mt-14 text-center px-6 animate-on-scroll">
                <a
                    href="#agendamento"
                    className="inline-block border border-imperial-rose/40 px-8 py-3 font-body text-sm font-light tracking-wider text-imperial-rose transition-all duration-300 hover:bg-imperial-rose/10 hover:border-imperial-rose"
                >
                    Quero transformar meu sorriso também →
                </a>
            </div>
        </section>
    );
};

export default Pacientes;
