import ImperialLogo from "./ImperialLogo";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
    const navLinks = [
        { label: "Início", href: "#inicio" },
        { label: "Serviços", href: "#servicos" },
        { label: "Sobre Nós", href: "#sobre" },
        { label: "Resultados", href: "#resultados" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <footer className="bg-imperial-dark py-16 border-t border-imperial-rose/10">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Logo & slogan */}
                    <div>
                        <ImperialLogo />
                        <p className="mt-4 font-display text-sm italic font-light text-imperial-blush/60">
                            Cuidando do seu sorriso com excelência.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-body text-xs font-medium tracking-[0.2em] text-imperial-cream uppercase mb-4">Navegação</h4>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-body text-sm font-light text-imperial-blush/60 transition hover:text-imperial-rose"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-body text-xs font-medium tracking-[0.2em] text-imperial-cream uppercase mb-4">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-imperial-blush/50 transition hover:text-imperial-rose" aria-label="Instagram">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-imperial-blush/50 transition hover:text-imperial-rose" aria-label="Facebook">
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-imperial-blush/50 transition hover:text-imperial-rose" aria-label="WhatsApp">
                                <MessageCircle size={20} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-imperial-rose/10 pt-8 text-center">
                    <p className="font-body text-xs font-light text-imperial-blush/40">
                        © {new Date().getFullYear()} Imperial Odontologia. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
