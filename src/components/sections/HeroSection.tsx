import { Button } from '@/components/ui/button'
import { Sparkle } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B18392988226&text=Hola%2C+necesito+ayuda"

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
                
                <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground leading-tight">
                    ¿Sientes Que Has Perdido El Amor De Tu Vida?
                </h1>
                
                <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed font-serif">
                    Maestros espirituales con sabiduría ancestral te ayudan a recuperar lo que es tuyo
                </p>
                
                <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full mb-8 border border-accent/30">
                    <Sparkle size={20} weight="fill" className="text-accent" />
                    <span className="text-accent font-semibold text-lg">Primera Consulta Completamente Gratis</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        asChild
                        size="lg"
                        className="glow-accent bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-8 py-6 h-auto font-semibold"
                    >
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            Hablar con Maestro Ahora
                        </a>
                    </Button>
                </div>
                
                <p className="mt-6 text-sm text-muted-foreground">
                    Respuesta inmediata • Consulta confidencial • Sin compromiso
                </p>
            </div>
        </section>
    )
}
