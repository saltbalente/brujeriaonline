import { Button } from '@/components/ui/button'
import { Sparkle } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B18392988226&text=Hola%2C+necesito+ayuda"

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
                    No Sufras Más En Silencio
                </h2>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-serif">
                    La ayuda espiritual que buscas está a un clic de distancia. Maestros con décadas de experiencia en brujería real están listos para escucharte.
                </p>
                
                <div className="bg-card/70 backdrop-blur-sm border border-border rounded-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-1">+1000</div>
                            <div className="text-sm text-muted-foreground">Casos Exitosos</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-1">20+</div>
                            <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-1">100%</div>
                            <div className="text-sm text-muted-foreground">Confidencial</div>
                        </div>
                    </div>
                </div>
                
                <Button 
                    asChild
                    size="lg"
                    className="pulse-glow bg-accent hover:bg-accent/90 text-accent-foreground text-2xl px-10 py-8 h-auto font-bold mb-4"
                >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        Obtener Mi Consulta Gratis Ahora
                    </a>
                </Button>
                
                <p className="text-sm text-muted-foreground">
                    ✓ Primera consulta gratis ✓ Respuesta inmediata ✓ Total confidencialidad
                </p>
            </div>
        </section>
    )
}
