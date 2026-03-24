import logoSbg from "@/assets/logo-imperial-sFundo.png";

const ImperialLogo = ({ className = "", decorative = false }: { className?: string; decorative?: boolean }) => {
    if (decorative) {
        return (
            <svg className={className} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M100 10 Q60 60 20 110" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
                <path d="M100 10 Q140 60 180 110" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
                <path d="M100 10 L95 20 L100 30 L105 20 Z" fill="currentColor" opacity="0.4" />
                <path d="M70 55 L65 65 L70 75 L75 65 Z" fill="currentColor" opacity="0.3" />
                <path d="M130 55 L125 65 L130 75 L135 65 Z" fill="currentColor" opacity="0.3" />
            </svg>
        );
    }

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img src={logoSbg} alt="Imperial Odontologia" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
                <span className="font-display text-xl font-light tracking-[0.15em] text-imperial-cream leading-none mt-1">IMPERIAL</span>
                <span className="font-body text-[10px] font-light tracking-[0.3em] text-imperial-blush leading-none mt-1">ODONTOLOGIA</span>
            </div>
        </div>
    );
};

export default ImperialLogo;
