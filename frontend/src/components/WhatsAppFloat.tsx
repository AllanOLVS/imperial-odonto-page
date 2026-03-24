import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Conversar no WhatsApp"
        >
            <MessageCircle size={28} className="text-white" fill="white" />
        </a>
    );
};

export default WhatsAppFloat;
