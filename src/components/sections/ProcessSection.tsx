import { Card } from '@/components/ui/card'
import { ChatCircle, MagnifyingGlass, Sparkle } from '@phosphor-icons/react'

const steps = [
    {
        number: 1,
        icon: ChatCircle,
        title: "Contacta por WhatsApp",
        description: "Escríbenos ahora mismo. Tu primera consulta es completamente gratis y confidencial. Respuesta inmediata."
    },
    {
        number: 2,
        icon: MagnifyingGlass,
        title: "Analizamos Tu Caso",
        description: "Un maestro espiritual revisa tu situación con atención y determina el mejor camino a seguir."
    },
    {
        number: 3,
        icon: Sparkle,
        title: "Iniciamos El Trabajo Espiritual",
        description: "Con tu autorización, realizamos el ritual o ceremonia específica para tu caso siguiendo tradiciones ancestrales."
    }
]

export default function ProcessSection() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
                        ¿Cómo Funciona?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Un proceso simple y directo para que recibas la ayuda espiritual que necesitas
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step) => {
                        const Icon = step.icon
                        return (
                            <Card 
                                key={step.number}
                                className="p-8 bg-card/70 backdrop-blur-sm border-border hover:border-accent/50 transition-all text-center relative"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl border-4 border-background">
                                    {step.number}
                                </div>
                                
                                <div className="flex justify-center mb-4 mt-4">
                                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Icon size={32} className="text-accent" weight="fill" />
                                    </div>
                                </div>
                                
                                <h3 className="section-title text-xl mb-3 text-card-foreground">
                                    {step.title}
                                </h3>
                                
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </Card>
                        )
                    })}
                </div>
                
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 bg-secondary/20 px-6 py-3 rounded-full border border-secondary/30">
                        <Sparkle size={20} weight="fill" className="text-secondary" />
                        <span className="text-secondary-foreground font-medium">
                            Todo el proceso es discreto y respetuoso
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
