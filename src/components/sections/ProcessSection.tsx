import { Card } from '@/components/ui/card'
import { ChatCircle, MagnifyingGlass, Sparkle } from '@phosphor-icons/react'

const steps = [
    {
        number: 1,
        icon: ChatCircle,
        title: "Click Y Escríbenos AHORA",
        description: "Contáctanos por WhatsApp en ESTE MOMENTO. Primera consulta 100% GRATIS. Respuesta en menos de 5 minutos garantizada."
    },
    {
        number: 2,
        icon: MagnifyingGlass,
        title: "Maestro Analiza TU Caso",
        description: "Un experto con 20+ años de experiencia revisa tu situación específica y diseña el ritual PERFECTO para ti."
    },
    {
        number: 3,
        icon: Sparkle,
        title: "Ritual Poderoso Actúa",
        description: "Iniciamos el trabajo espiritual inmediatamente. Rituales ancestrales PROBADOS que SÍ funcionan. Verás resultados REALES."
    }
]

export default function ProcessSection() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
                        ⚡ Proceso Rápido Y Simple
                    </h2>
                    <p className="text-lg md:text-xl text-secondary font-semibold max-w-3xl mx-auto">
                        En solo 3 pasos puedes empezar a RECUPERAR el amor de tu vida HOY MISMO
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step) => {
                        const Icon = step.icon
                        return (
                            <Card 
                                key={step.number}
                                className="p-8 bg-card/70 backdrop-blur-sm border-2 border-accent/50 hover:border-accent transition-all text-center relative shadow-xl"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-black text-2xl border-4 border-background shadow-lg">
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
                    <div className="inline-flex items-center gap-2 bg-accent/20 px-8 py-4 rounded-full border-2 border-accent">
                        <Sparkle size={24} weight="fill" className="text-accent animate-pulse" />
                        <span className="text-foreground font-bold text-lg">
                            🔒 Proceso 100% Privado Y Confidencial
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
