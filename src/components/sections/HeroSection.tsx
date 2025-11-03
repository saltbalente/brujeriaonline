import { Button } from '@/components/ui/button'
import { Sparkle } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://wa.me/19142090428?text=Hola%2C+necesito+ayuda"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/1200x/13/46/7c/13467c9f8c0bbba4a4ee04794079f49c.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
                <div className="flex justify-center mb-6">
                    <Sparkle size={48} weight="fill" className="text-accent animate-pulse" />
                </div>
                
                <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-serif font-black text-gray-50">¿El Amor De Tu Vida Te Abandonó Y No Sabes Por Qué?</h1>
                
                <p className="text-xl md:text-2xl mb-4 text-secondary font-semibold max-w-3xl mx-auto leading-relaxed font-serif">
                    Recupera a tu pareja con rituales ancestrales que han funcionado por generaciones
                </p>
                
                <div className="inline-flex items-center gap-2 bg-accent/30 px-6 py-3 rounded-full mb-8 border-2 border-accent pulse-glow">
                    <Sparkle size={24} weight="fill" className="text-accent" />
                    <span className="text-accent font-bold text-xl">¡Primera Consulta 100% GRATIS!</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        asChild
                        size="lg"
                        className="pulse-glow bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-10 py-8 h-auto font-bold shadow-2xl animate-pulse"
                    >
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            💬 Hablar con Maestro AHORA
                        </a>
                    </Button>
                </div>
                
                <p className="mt-6 text-base text-secondary font-semibold">
                    ⚡ Respuesta en Menos de 5 Minutos • 🔒 100% Confidencial • ✨ Sin Compromiso
                </p>
            </div>
        </section>
    );
}
