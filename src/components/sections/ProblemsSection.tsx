import { Heart, Shield, TrendUp, X } from '@phosphor-icons/react'

const problems = [
    {
        icon: Heart,
        text: "¿Tu pareja te dejó de la noche a la mañana sin explicación?"
    },
    {
        icon: X,
        text: "¿Sientes que fuerzas oscuras están destruyendo tu relación?"
    },
    {
        icon: TrendUp,
        text: "¿Has intentado todo y nada funciona para recuperar su amor?"
    },
    {
        icon: Shield,
        text: "¿Alguien está haciendo brujería contra ti o tu pareja?"
    }
]

export default function ProblemsSection() {
    return (
        <section className="py-20 md:py-32 bg-background/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
                        ¿Esto Te Está Pasando A Ti?
                    </h2>
                    <p className="text-lg md:text-xl text-secondary font-semibold max-w-3xl mx-auto">
                        Cada día que pasa sin actuar, más se aleja tu ser amado. NO ESPERES MÁS
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon
                        return (
                            <div 
                                key={index}
                                className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-accent/50 transition-colors"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                    <Icon size={24} className="text-accent" weight="fill" />
                                </div>
                                <p className="text-lg text-card-foreground pt-2">
                                    {problem.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
                
                <div className="text-center mt-12 bg-accent/10 border-2 border-accent p-8 rounded-lg max-w-3xl mx-auto">
                    <p className="text-2xl text-foreground font-bold font-serif mb-2">
                        ⚠️ Si respondiste "Sí" a cualquiera, ACTÚA AHORA
                    </p>
                    <p className="text-lg text-accent mt-2 font-semibold font-serif">
                        Maestros con 20+ años de experiencia esperan tu llamado
                    </p>
                </div>
            </div>
        </section>
    )
}
