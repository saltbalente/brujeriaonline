import { Card } from '@/components/ui/card'
import { Star } from '@phosphor-icons/react'

const testimonials = [
    {
        name: "María G.",
        location: "Miami, FL",
        text: "Mi esposo volvió después de 6 meses con otra mujer. El amarre funcionó en solo 2 semanas. Ahora está más enamorado que nunca. ¡NO LO PUEDO CREER! Estos maestros son REALES.",
        rating: 5
    },
    {
        name: "Carlos R.",
        location: "Los Angeles, CA",
        text: "Me estaban haciendo brujería fuerte. Después de la limpieza TODO cambió. Mi negocio mejoró, mi salud volvió. Son brujos con poder REAL, no charlatanes.",
        rating: 5
    },
    {
        name: "Ana L.",
        location: "Houston, TX",
        text: "Mi pareja me dejó por su ex. Hice el amarre y en 3 semanas regresó rogando perdón. El ritual funcionó EXACTAMENTE como me dijeron. 100% recomendado.",
        rating: 5
    },
    {
        name: "Roberto M.",
        location: "Nueva York, NY",
        text: "Probé con 5 brujos antes. NINGUNO funcionó. Estos maestros me ayudaron de verdad. Recuperé a mi esposa y ahora tenemos un matrimonio más fuerte. ¡GRACIAS!",
        rating: 5
    }
]

export default function TestimonialsSection() {
    return (
        <section className="py-20 md:py-32 bg-background/50 relative overflow-hidden">
            <div 
                className="absolute inset-0 opacity-5 z-0"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/736x/d0/48/1b/d0481b9d7d950e96e3c0ab606a2e9663.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
                        🌟 Casos Reales - Resultados Reales
                    </h2>
                    <p className="text-lg md:text-xl text-secondary font-semibold max-w-3xl mx-auto">
                        Lee lo que dicen personas que RECUPERARON a sus parejas gracias a nuestros rituales
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card 
                            key={index}
                            className="p-6 bg-card/70 backdrop-blur-sm border-border hover:border-accent/50 transition-colors"
                        >
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={20} weight="fill" className="text-accent" />
                                ))}
                            </div>
                            
                            <div className="mb-4">
                                <p className="text-card-foreground leading-relaxed italic font-serif">
                                    "{testimonial.text}"
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div>
                                    <p className="font-semibold text-card-foreground">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.location}
                                    </p>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Cliente verificado
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                
                <div className="text-center mt-12 p-8 bg-accent/20 border-2 border-accent rounded-lg max-w-3xl mx-auto">
                    <p className="text-xl text-foreground font-bold font-serif mb-2">
                        ✅ +1,500 Parejas Reunidas En El Último Año
                    </p>
                    <p className="text-lg text-accent font-bold mt-2 font-serif">
                        TÚ puedes ser el siguiente caso de éxito
                    </p>
                </div>
            </div>
        </section>
    )
}
