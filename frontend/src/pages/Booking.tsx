import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  User, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Activity,
  UserRound,
  Users
} from "lucide-react";
import ImperialLogo from "@/components/ImperialLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const STEPS = [
  "Identificação",
  "Procedimento",
  "Especialista",
  "Data",
  "Horário & Confirmação"
];

const PROCEDURES = [
  { id: 1, name: "Limpeza e Profilaxia", description: "Remoção de tártaro e placa bacteriana.", duration: "45 min", icon: Sparkles },
  { id: 2, name: "Clareamento Dental", description: "Procedimento estético para clarear os dentes.", duration: "60 min", icon: Sparkles },
  { id: 3, name: "Implante Dentário", description: "Substituição de dentes perdidos por implantes.", duration: "90 min", icon: ShieldCheck },
  { id: 4, name: "Ortodontia", description: "Correção da posição dos dentes e ossos maxilares.", duration: "30 min", icon: Activity },
  { id: 5, name: "Tratamento de Canal", description: "Tratamento da polpa dentária infectada.", duration: "60 min", icon: Stethoscope },
  { id: 6, name: "Consulta Avaliação", description: "Primeira consulta para diagnóstico geral.", duration: "30 min", icon: CheckCircle2 },
];

const PROFESSIONALS = [
  { id: 0, name: "Sem preferência", specialty: "Primeiro disponível", cro: "", photo: null, icon: CalendarIcon },
  { id: 1, name: "Dra. Ana Silveira", specialty: "Ortodontista", cro: "CRO-SP 12345", photo: null, icon: UserRound },
  { id: 2, name: "Dr. Roberto Santos", specialty: "Implantodontista", cro: "CRO-SP 54321", photo: null, icon: UserRound },
  { id: 3, name: "Dra. Clara Mendes", specialty: "Clínica Geral", cro: "CRO-SP 98765", photo: null, icon: UserRound },
];

const TIME_SLOTS = [
  "08:00", "08:30", "09:15", "10:00", "11:00", "13:30", "14:15", "15:00", "16:30", "17:15"
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [patientType, setPatientType] = useState<"existing" | "new" | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    procedure: null as any,
    professional: null as any,
    date: undefined as Date | undefined,
    time: null as string | null,
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderProgress = () => (
    <div className="w-full max-w-md mx-auto mb-12">
      <div className="flex justify-between mb-2">
        {STEPS.map((_step, index) => (
          <div 
            key={index} 
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentStep === index + 1 ? "bg-booking-gold scale-125 shadow-[0_0_10px_rgba(201,169,110,0.5)]" : 
              currentStep > index + 1 ? "bg-booking-gold/60" : "bg-white/20"
            )}
          />
        ))}
      </div>
      <Progress value={(currentStep / 5) * 100} className="h-1 bg-white/10" indicatorClassName="bg-booking-gold" />
      <div className="text-center mt-4 font-inter text-xs tracking-widest uppercase text-booking-offwhite/60">
        Etapa {currentStep} de 5: {STEPS[currentStep - 1]}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="grid gap-6 animate-fade-up">
      <h2 className="font-playfair text-3xl md:text-4xl text-booking-offwhite text-center mb-8">Vamos começar seu agendamento</h2>
      
      {!patientType ? (
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="p-8 bg-booking-glass border-white/10 hover:border-booking-gold/50 cursor-pointer transition-all group flex flex-col items-center text-center gap-4"
            onClick={() => setPatientType("existing")}
          >
            <div className="w-16 h-16 rounded-full bg-booking-gold/10 flex items-center justify-center group-hover:bg-booking-gold/20 transition-colors">
              <User className="text-booking-gold w-8 h-8" />
            </div>
            <div>
              <h3 className="font-playfair text-xl text-booking-offwhite mb-2">Já sou paciente</h3>
              <p className="text-booking-offwhite/60 text-sm">Acesse seu cadastro rapidamente usando seu CPF.</p>
            </div>
          </Card>
          
          <Card 
            className="p-8 bg-booking-glass border-white/10 hover:border-booking-gold/50 cursor-pointer transition-all group flex flex-col items-center text-center gap-4"
            onClick={() => setPatientType("new")}
          >
            <div className="w-16 h-16 rounded-full bg-booking-gold/10 flex items-center justify-center group-hover:bg-booking-gold/20 transition-colors">
              <Users className="text-booking-gold w-8 h-8" />
            </div>
            <div>
              <h3 className="font-playfair text-xl text-booking-offwhite mb-2">Primeiro atendimento</h3>
              <p className="text-booking-offwhite/60 text-sm">Seja bem-vindo. Preencha seus dados para começar.</p>
            </div>
          </Card>
        </div>
      ) : (
        <Card className="p-8 bg-booking-glass border-white/10 max-w-lg mx-auto w-full">
          <div className="flex items-center gap-2 mb-6 cursor-pointer text-booking-offwhite/60 hover:text-booking-gold transition-colors" onClick={() => setPatientType(null)}>
            <ChevronLeft size={16} />
            <span className="text-sm">Voltar</span>
          </div>
          
          <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
            {patientType === "existing" ? (
              <div className="space-y-2">
                <Label htmlFor="cpf" className="text-booking-offwhite">CPF</Label>
                <Input id="cpf" placeholder="000.000.000-00" className="bg-white/5 border-white/10 text-booking-offwhite focus:border-booking-gold h-12" required />
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-booking-offwhite">Nome completo</Label>
                  <Input id="nome" placeholder="Digite seu nome" className="bg-white/5 border-white/10 text-booking-offwhite focus:border-booking-gold h-12" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf-new" className="text-booking-offwhite">CPF</Label>
                    <Input id="cpf-new" placeholder="000.000.000-00" className="bg-white/5 border-white/10 text-booking-offwhite focus:border-booking-gold h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dataNascimento" className="text-booking-offwhite">Data de nascimento</Label>
                    <Input id="dataNascimento" type="date" className="bg-white/5 border-white/10 text-booking-offwhite focus:border-booking-gold h-12" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-booking-offwhite">Telefone</Label>
                    <Input id="telefone" placeholder="(00) 00000-0000" className="bg-white/5 border-white/10 text-booking-offwhite focus:border-booking-gold h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-booking-offwhite">E-mail</Label>
                    <Input id="email" type="email" placeholder="email@exemplo.com" className="bg-white/5 border-white/10 text-booking-offwhite focus:border-booking-gold h-12" required />
                  </div>
                </div>
              </>
            )}
            <Button type="submit" className="w-full bg-booking-gold hover:bg-booking-gold/90 text-booking-burgundy font-inter font-semibold rounded-full h-12 mt-4">
              Continuar
            </Button>
          </form>
        </Card>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="grid gap-6 animate-fade-up">
      <h2 className="font-playfair text-3xl md:text-4xl text-booking-offwhite text-center mb-8">Qual tratamento você deseja?</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROCEDURES.map((proc) => (
          <Card 
            key={proc.id}
            className={cn(
              "p-6 bg-booking-glass border-white/10 hover:border-booking-gold/50 cursor-pointer transition-all relative flex flex-col gap-3 h-full",
              formData.procedure?.id === proc.id && "border-booking-gold bg-booking-burgundy/80 ring-1 ring-booking-gold"
            )}
            onClick={() => setFormData({ ...formData, procedure: proc })}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-booking-gold/10">
                <proc.icon className="text-booking-gold w-6 h-6" />
              </div>
              <Badge variant="outline" className="text-[10px] text-booking-gold border-booking-gold/30 bg-booking-gold/5">
                {proc.duration}
              </Badge>
            </div>
            <div>
              <h3 className="font-playfair text-lg text-booking-offwhite">{proc.name}</h3>
              <p className="text-booking-offwhite/50 text-sm mt-1">{proc.description}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          disabled={!formData.procedure}
          onClick={nextStep}
          className="px-12 bg-booking-gold hover:bg-booking-gold/90 text-booking-burgundy font-inter font-semibold rounded-full h-12"
        >
          Continuar
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="grid gap-6 animate-fade-up">
      <h2 className="font-playfair text-3xl md:text-4xl text-booking-offwhite text-center mb-8">Escolha seu especialista</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROFESSIONALS.map((prof) => (
          <Card 
            key={prof.id}
            className={cn(
              "p-6 bg-booking-glass border-white/10 hover:border-booking-gold/50 cursor-pointer transition-all flex flex-col items-center text-center gap-4",
              formData.professional?.id === prof.id && "border-booking-gold bg-booking-burgundy/80 ring-1 ring-booking-gold"
            )}
            onClick={() => setFormData({ ...formData, professional: prof })}
          >
            <div className="w-20 h-20 rounded-full bg-booking-gold/10 border border-booking-gold/20 flex items-center justify-center overflow-hidden">
               <prof.icon className="text-booking-gold w-10 h-10" />
            </div>
            <div>
              <h3 className="font-playfair text-lg text-booking-offwhite leading-tight">{prof.name}</h3>
              <p className="text-booking-gold text-xs font-inter uppercase tracking-wider mt-1">{prof.specialty}</p>
              {prof.cro && <p className="text-booking-offwhite/40 text-[10px] mt-2">{prof.cro}</p>}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          disabled={!formData.professional}
          onClick={nextStep}
          className="px-12 bg-booking-gold hover:bg-booking-gold/90 text-booking-burgundy font-inter font-semibold rounded-full h-12"
        >
          Continuar
        </Button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="grid gap-6 animate-fade-up">
      <h2 className="font-playfair text-3xl md:text-4xl text-booking-offwhite text-center mb-8">Escolha a data</h2>
      
      <div className="flex justify-center">
        <Card className="p-4 bg-booking-glass border-white/10 inline-block overflow-hidden shadow-2xl">
          <Calendar
            mode="single"
            selected={formData.date}
            onSelect={(date) => setFormData({ ...formData, date })}
            className="rounded-md border-none text-booking-offwhite bg-transparent"
            locale={ptBR}
            disabled={(date) => date < new Date() || date.getDay() === 0 }
            classNames={{
              day_today: "bg-white/10 text-booking-gold font-bold",
              day_selected: "!bg-booking-gold !text-booking-burgundy hover:!bg-booking-gold/90",
              day: "h-11 w-11 p-0 font-normal aria-selected:opacity-100 hover:bg-booking-gold/20 flex items-center justify-center text-base transition-colors",
              head_cell: "text-booking-offwhite/40 font-medium uppercase text-[11px] py-4",
              month: "space-y-4",
              nav_button: "border-white/10 text-booking-offwhite hover:bg-booking-gold/20 hover:text-booking-gold h-9 w-9 p-0",
              caption: "flex justify-center pt-2 relative items-center mb-4 capitalize font-playfair text-xl text-booking-offwhite",
            }}
          />
        </Card>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          disabled={!formData.date}
          onClick={nextStep}
          className="px-12 bg-booking-gold hover:bg-booking-gold/90 text-booking-burgundy font-inter font-semibold rounded-full h-12"
        >
          Continuar
        </Button>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="grid gap-8 animate-fade-up lg:grid-cols-2">
      <div className="space-y-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-booking-offwhite mb-4">Escolha o horário</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {TIME_SLOTS.map((time) => (
            <Button
              key={time}
              variant="outline"
              className={cn(
                "h-12 border-booking-gold/30 text-booking-gold bg-transparent hover:bg-booking-gold/20 hover:text-booking-gold font-inter",
                formData.time === time && "bg-booking-gold text-booking-burgundy hover:bg-booking-gold border-booking-gold shadow-[0_0_15px_rgba(201,169,110,0.3)]"
              )}
              onClick={() => setFormData({ ...formData, time })}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-booking-offwhite mb-4">Resumo</h2>
        <Card className="p-8 bg-booking-glass border-booking-gold/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <ImperialLogo decorative className="w-32 h-32" />
          </div>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-lg bg-booking-gold/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-booking-gold w-5 h-5" />
              </div>
              <div>
                <p className="text-booking-offwhite/40 text-[10px] uppercase tracking-widest">Tratamento</p>
                <p className="text-booking-offwhite font-playfair text-lg leading-tight">{formData.procedure?.name}</p>
                <p className="text-booking-gold text-xs mt-1 italic">{formData.procedure?.duration}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-lg bg-booking-gold/10 flex items-center justify-center flex-shrink-0">
                <UserRound className="text-booking-gold w-5 h-5" />
              </div>
              <div>
                <p className="text-booking-offwhite/40 text-[10px] uppercase tracking-widest">Especialista</p>
                <p className="text-booking-offwhite font-playfair text-lg leading-tight">{formData.professional?.name}</p>
                <p className="text-booking-offwhite/60 text-xs mt-1">{formData.professional?.specialty}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-booking-gold/10 flex items-center justify-center flex-shrink-0">
                <CalendarIcon className="text-booking-gold w-5 h-5" />
              </div>
              <div>
                <p className="text-booking-offwhite/40 text-[10px] uppercase tracking-widest">Agendamento</p>
                <p className="text-booking-offwhite font-playfair text-lg leading-tight">
                  {formData.date ? format(formData.date, "EEEE, dd 'de' MMMM", { locale: ptBR }) : "--"}
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-booking-gold text-sm font-semibold">
                  <Clock size={14} />
                  <span>{formData.time || "--:--"}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="space-y-4 pt-4">
          <Button 
            disabled={!formData.time}
            className="w-full h-16 bg-booking-gold hover:bg-booking-gold/90 text-booking-burgundy font-booking font-bold text-lg rounded-xl shadow-xl hover:shadow-booking-gold/20 transition-all active:scale-[0.98]"
            onClick={() => alert("Agendamento confirmado!")}
          >
            Confirmar Agendamento
          </Button>
          <p className="text-center text-booking-offwhite/40 text-[11px] px-6">
            Ao confirmar, enviaremos os detalhes e a confirmação via E-mail e WhatsApp cadastrados.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-booking-burgundy font-inter selection:bg-booking-gold selection:text-booking-burgundy overflow-x-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-booking-gold/5 rounded-full blur-[80px]" />
      </div>

      <header className="container relative z-10 pt-8 pb-12 flex flex-col items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity mb-10">
          <ImperialLogo className="scale-125" />
        </Link>
        {renderProgress()}
      </header>

      <main className="container relative z-10 pb-24">
        <div className="max-w-4xl mx-auto">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          
          {currentStep > 1 && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={prevStep}
                className="text-booking-offwhite/40 hover:text-booking-gold transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
              >
                <ChevronLeft size={16} />
                Voltar etapa
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="container relative z-10 border-t border-white/5 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 opacity-40 grayscale">
             <ImperialLogo className="scale-75" />
             <div className="text-[10px] text-booking-offwhite border-l border-white/20 pl-4 py-1">
               <p>© 2026 Imperial Odontologia</p>
               <p>Todos os direitos reservados</p>
             </div>
          </div>
          <Link to="/login" className="text-white/30 text-[10px] uppercase tracking-widest hover:text-booking-gold transition-colors">
            Área restrita
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Booking;
