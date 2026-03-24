import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Pacientes from "@/components/Pacientes";
import CTASection from "@/components/CTASection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
    useScrollAnimation();

    return (
        <>
            <Header />
            <main>
                <Hero />
                <TrustBar />
                <Services />
                <About />
                <Gallery />
                <Testimonials />
                <Pacientes />
                <CTASection />
                <Location />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
};

export default Index;
