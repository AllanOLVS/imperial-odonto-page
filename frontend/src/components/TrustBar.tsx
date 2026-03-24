import { useCountUp } from "@/hooks/useCountUp";

const stats = [
    { value: 5000, prefix: "+", suffix: "", label: "Pacientes atendidos" },
    { value: 98, prefix: "", suffix: "%", label: "De satisfação" },
    { value: 24, prefix: "", suffix: "h", label: "Agendamento online" },
    { value: 10, prefix: "+", suffix: "", label: "Anos de experiência" },
];

const StatItem = ({ value, prefix, suffix, label }: { value: number; prefix: string; suffix: string; label: string }) => {
    const { count, ref } = useCountUp(value);
    return (
        <div ref={ref} className="flex flex-col items-center gap-1 px-6 py-4">
            <span className="font-display text-3xl font-light text-imperial-rose md:text-4xl">
                {prefix}{count.toLocaleString("pt-BR")}{suffix}
            </span>
            <span className="font-body text-xs font-light tracking-widest text-imperial-blush/70 uppercase">
                {label}
            </span>
        </div>
    );
};

const TrustBar = () => {
    return (
        <section className="relative bg-imperial-dark py-8 noise-overlay">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center divide-x divide-imperial-rose/20">
                    {stats.map((stat) => (
                        <StatItem key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
