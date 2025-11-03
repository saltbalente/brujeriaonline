import { Button } from '@/components/ui/button'
import { Sparkle, Moon, Heart, ShieldCheck } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B18392988226&text=Hola%2C+necesito+ayuda"

const services = [
    {
        icon: Heart,
        title: "Amarres de Amor",
        description: "Rituales ancestrales para fortalecer vínculos y recuperar el amor perdido"
    },
    {
        icon: Sparkle,
        title: "Limpiezas Espirituales",
        description: "Eliminación de energías negativas y bloqueos que afectan tu vida"
    },
    {
        icon: ShieldCheck,
        title: "Protección Espiritual",
        description: "Escudos energéticos para proteger tu amor y tu bienestar"
    },
    {
        icon: Moon,
        title: "Rituales Especializados",
        description: "Ceremonias personalizadas según tu situación específica"
    }
]

export default function MaestroSection() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div 
                className="absolute inset-0 opacity-10 z-0"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/736x/6a/ca/fe/6acafe09a35c0f39b4cb8c38abbe4876.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
                        Sabiduría Ancestral A Tu Alcance
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Nuestros maestros espirituales combinan la tradición de brujos de Catemaco, chamanes de Nicaragua y curanderos con décadas de experiencia en magia y brujería para el amor
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    <div className="bg-card/70 backdrop-blur-sm p-8 rounded-lg border border-border">
                        <h3 className="section-title text-2xl mb-4 text-card-foreground">¿Quiénes Somos?</h3>
                        <p className="text-card-foreground leading-relaxed mb-4">
                            Somos un colectivo de maestros espiritistas que han dedicado su vida al estudio de las artes ancestrales. Cada consulta se realiza con profundo respeto a las tradiciones milenarias.
                        </p>
                        <p className="text-card-foreground leading-relaxed">
                            Nuestra experiencia abarca desde rituales de brujería tradicional hasta ceremonias especializadas de amarres de parejas, siempre con ética y responsabilidad.
                        </p>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden border border-border">
                        <img 
                            src="https://i.pinimg.com/736x/fc/fa/ca/fcfacad064663c2d412976ba6e3fefb0.jpg"
                            alt="Maestro espiritual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="mb-12">
                    <h3 className="section-title text-2xl md:text-3xl text-center mb-8 text-foreground">
                        Nuestros Servicios Espirituales
                    </h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <div 
                                    key={index}
                                    className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                                        <Icon size={28} className="text-accent" weight="fill" />
                                    </div>
                                    <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="text-center">
                    <Button 
                        asChild
                        size="lg"
                        className="glow-accent bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-8 py-6 h-auto font-semibold"
                    >
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            Consulta Gratis con Maestro
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
