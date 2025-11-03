import { Card } from '@/components/ui/card'
import { Star } from '@phosphor-icons/react'

const testimonials = [
    {
        name: "María G.",
        location: "Miami, FL",
        text: "Después de 6 meses separados, mi esposo volvió a casa. El Maestro me ayudó cuando ya había perdido toda esperanza. Eternamente agradecida.",
        rating: 5
    },
    {
        name: "Carlos R.",
        location: "Los Angeles, CA",
        text: "Los síntomas de brujería que sufría desaparecieron después de la limpieza espiritual. Ahora mi vida ha cambiado completamente para bien.",
        rating: 5
    },
    {
        name: "Ana L.",
        location: "Houston, TX",
        text: "Consulté sobre amarres para mi pareja y el resultado fue increíble. El ritual de amor funcionó mejor de lo que esperaba. Son brujos efectivos de verdad.",
        rating: 5
    },
    {
        name: "Roberto M.",
        location: "Nueva York, NY",
        text: "Busqué curanderos espirituales buenos por mucho tiempo. Aquí encontré la ayuda real que necesitaba. Los hechizos de brujería realmente funcionan.",
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
                        Testimonios Reales
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Miles de personas ya han encontrado solución a sus problemas. Lee lo que dicen quienes han confiado en nuestra ayuda espiritual
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
                                <p className="text-card-foreground leading-relaxed italic">
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
                
                <div className="text-center mt-12 p-6 bg-accent/10 border border-accent/30 rounded-lg max-w-3xl mx-auto">
                    <p className="text-lg text-foreground font-medium">
                        Estos son solo algunos de los cientos de casos exitosos que hemos ayudado
                    </p>
                    <p className="text-muted-foreground mt-2">
                        Tu historia de éxito puede ser la siguiente
                    </p>
                </div>
            </div>
        </section>
    )
}
