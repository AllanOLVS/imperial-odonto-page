import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ImperialLogo from "./ImperialLogo";
import { Button } from "./ui/button";

const BOOKING_URL = "/agendamento";

const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Resultados", href: "#resultados" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Pacientes", href: "#pacientes" },
    { label: "Contato", href: "#contato" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-imperial-dark/95 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <ImperialLogo />

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-body text-sm font-light tracking-wider text-imperial-blush transition-colors duration-300 hover:text-imperial-rose"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="booking-primary" size="sm" asChild>
                        <Link to={BOOKING_URL}>
                            Agendar Consulta
                        </Link>
                    </Button>
                </nav>

                <button
                    className="text-imperial-cream lg:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 top-0 z-40 bg-imperial-dark/98 backdrop-blur-lg transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-6">
                    <button onClick={() => setMobileOpen(false)} className="text-imperial-cream" aria-label="Fechar menu">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col items-center gap-8 pt-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="font-display text-2xl font-light tracking-wider text-imperial-cream transition-colors hover:text-imperial-rose"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="booking-primary" size="lg" asChild>
                        <Link to={BOOKING_URL}>
                            Agendar Consulta
                        </Link>
                    </Button>
                </nav>
            </div>

            {/* Bottom accent line */}
            <div className="h-px w-full bg-imperial-rose/20" />
        </header>
    );
};

export default Header;
