import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Location = () => {
    return (
        <section id="contato" className="relative bg-imperial-deep py-24 noise-overlay">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center animate-on-scroll">
                    <h2 className="font-display text-4xl font-light text-imperial-cream md:text-5xl">
                        Como <span className="italic text-imperial-rose">nos encontrar</span>
                    </h2>
                    <div className="mx-auto mt-4 h-px w-24 bg-imperial-rose/40" />
                </div>

                <div className="grid gap-12 lg:grid-cols-2 animate-on-scroll">
                    {/* Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin size={20} className="mt-1 flex-shrink-0 text-imperial-rose" />
                            <div>
                                <h3 className="font-body text-sm font-medium tracking-wider text-imperial-cream uppercase">Endereço</h3>
                                <p className="mt-1 font-body text-sm font-light text-imperial-blush/70">
                                    Rua Exemplo, 123 — Centro<br />
                                    Cidade — Estado, CEP 00000-000
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone size={20} className="mt-1 flex-shrink-0 text-imperial-rose" />
                            <div>
                                <h3 className="font-body text-sm font-medium tracking-wider text-imperial-cream uppercase">Telefone</h3>
                                <a href="tel:+5500000000000" className="mt-1 block font-body text-sm font-light text-imperial-blush/70 transition hover:text-imperial-rose">
                                    (XX) XXXXX-XXXX
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MessageCircle size={20} className="mt-1 flex-shrink-0 text-imperial-rose" />
                            <div>
                                <h3 className="font-body text-sm font-medium tracking-wider text-imperial-cream uppercase">WhatsApp</h3>
                                <a
                                    href="https://wa.me/5500000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 block font-body text-sm font-light text-imperial-blush/70 transition hover:text-imperial-rose"
                                >
                                    Clique para conversar
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock size={20} className="mt-1 flex-shrink-0 text-imperial-rose" />
                            <div>
                                <h3 className="font-body text-sm font-medium tracking-wider text-imperial-cream uppercase">Horários</h3>
                                <p className="mt-1 font-body text-sm font-light text-imperial-blush/70">
                                    Segunda a Sexta: 8h — 18h<br />
                                    Sábado: 8h — 12h
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map placeholder */}
                    <div className="aspect-video overflow-hidden rounded-sm border border-imperial-rose/15 bg-imperial-mid/20">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976851372476!2d-46.65!3d-23.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM2LjAiUyA0NsKwMzknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "saturate(0.3) brightness(0.8) hue-rotate(320deg)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Imperial Odontologia"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
