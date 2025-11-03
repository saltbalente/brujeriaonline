import { Button } from '@/components/ui/button'
import { Sparkle } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://wa.me/19142090428?text=Hola%2C+necesito+ayuda"

export default function FinalCTASection() {
    return (
        <section className="py-20 md:py-32 bg-background/50 relative overflow-hidden">
            <div 
                className="absolute inset-0 opacity-10 z-0"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/736x/cb/76/0a/cb760abae366a921253db25d6887cd0d.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="flex justify-center mb-6">
                    <Sparkle size={48} weight="fill" className="text-accent animate-pulse" />
                </div>
                
                <h2 className="section-title text-3xl md:text-5xl mb-6 text-foreground">
                    ⏰ Cada Minuto Que Pasa, Más Se Aleja Tu Amor
                </h2>
                
                <p className="text-xl md:text-2xl text-secondary font-bold mb-8 leading-relaxed font-serif">
                    NO dejes que otra persona ocupe tu lugar. Maestros con 20+ años de experiencia están LISTOS para ayudarte AHORA MISMO.
                </p>
                
                <div className="bg-card/70 backdrop-blur-sm border-2 border-accent rounded-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-accent mb-1">+1,500</div>
                            <div className="text-sm text-muted-foreground font-semibold">Parejas Reunidas</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-accent mb-1">20+</div>
                            <div className="text-sm text-muted-foreground font-semibold">Años de Experiencia</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-accent mb-1">24/7</div>
                            <div className="text-sm text-muted-foreground font-semibold">Disponibilidad</div>
                        </div>
                    </div>
                </div>
                
                <Button 
                    asChild
                    size="lg"
                    className="pulse-glow bg-accent hover:bg-accent/90 text-accent-foreground text-2xl px-12 py-10 h-auto font-black mb-4 shadow-2xl animate-pulse"
                >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        🚨 CONSULTA GRATIS - CLICK AQUÍ 🚨
                    </a>
                </Button>
                
                <p className="text-base text-secondary font-bold mb-2">
                    ✅ Primera consulta GRATIS ✅ Respuesta en MINUTOS ✅ 100% Privado
                </p>
                <p className="text-lg text-accent font-bold animate-pulse">
                    ⚠️ PLAZAS LIMITADAS - No esperes más
                </p>
            </div>
        </section>
    )
}
