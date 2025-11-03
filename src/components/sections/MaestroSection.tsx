import { Button } from '@/components/ui/button'
import { Sparkle, Moon, Heart, ShieldCheck } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://wa.me/19142090428?text=Hola%2C+necesito+ayuda"

const services = [
    {
        icon: Heart,
        title: "Amarres de Amor Efectivos",
        description: "Rituales poderosos que REALMENTE funcionan para recuperar y mantener a tu pareja para siempre"
    },
    {
        icon: Sparkle,
        title: "Limpiezas Espirituales Profundas",
        description: "Destruye toda energía negativa, maldiciones y brujería que te están bloqueando"
    },
    {
        icon: ShieldCheck,
        title: "Protección Contra Enemigos",
        description: "Blindaje espiritual total contra personas que quieren hacerte daño o separarte"
    },
    {
        icon: Moon,
        title: "Rituales Personalizados",
        description: "Ceremonias diseñadas específicamente para TU caso con garantía de resultados"
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
                        Poder Ancestral Que FUNCIONA De Verdad
                    </h2>
                    <p className="text-lg md:text-xl text-secondary font-semibold max-w-3xl mx-auto">
                        Maestros reconocidos internacionalmente con resultados COMPROBADOS en amarres de amor y protección espiritual
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    <div className="bg-card/70 backdrop-blur-sm p-8 rounded-lg border-2 border-accent/50">
                        <h3 className="section-title text-2xl mb-4 text-card-foreground">⭐ Maestros Espirituales Certificados</h3>
                        <p className="text-card-foreground leading-relaxed mb-4 font-serif font-semibold">
                            NO somos charlatanes. Somos maestros con DÉCADAS de experiencia en brujería real, amarres efectivos y trabajos espirituales que SÍ funcionan.
                        </p>
                        <p className="text-card-foreground leading-relaxed font-serif font-semibold">
                            Tradición directa de Catemaco, San Luis Potosí y Nicaragua. Rituales probados por generaciones que han reunido a miles de parejas.
                        </p>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden border-2 border-accent/50 shadow-2xl">
                        <img 
                            src="https://i.pinimg.com/736x/fc/fa/ca/fcfacad064663c2d412976ba6e3fefb0.jpg"
                            alt="Maestro espiritual realizando ritual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="rounded-lg overflow-hidden border-2 border-accent/50 shadow-2xl">
                        <img 
                            src="https://i.pinimg.com/1200x/1c/f6/99/1cf6995c3e831c280f22d2ce2fef0587.jpg"
                            alt="Altar espiritual con santos"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative w-full rounded-lg overflow-hidden border border-border" style={{ paddingBottom: '177.78%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/EYugSE654tk?autoplay=1&mute=1&loop=1&playlist=EYugSE654tk&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0"
                            title="Video espiritual"
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                        />
                    </div>
                </div>
                
                <div className="mb-12">
                    <h3 className="section-title text-2xl md:text-3xl text-center mb-8 text-foreground">
                        💫 Servicios Espirituales Con Resultados Garantizados
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
                        className="pulse-glow bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-10 py-8 h-auto font-bold shadow-2xl animate-pulse"
                    >
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            🔥 QUIERO MI CONSULTA GRATIS AHORA
                        </a>
                    </Button>
                    <p className="mt-4 text-secondary font-bold text-lg">
                        ⚡ Respuesta Inmediata - Disponible 24/7
                    </p>
                </div>
            </div>
        </section>
    )
}
