import { Heart, Shield, TrendUp, X } from '@phosphor-icons/react'

const problems = [
    {
        icon: Heart,
        text: "¿Tu pareja se alejó sin razón aparente?"
    },
    {
        icon: X,
        text: "¿Sientes que alguien ha puesto barreras entre ustedes?"
    },
    {
        icon: TrendUp,
        text: "¿La suerte no te acompaña en el amor?"
    },
    {
        icon: Shield,
        text: "¿Necesitas protección espiritual para tu relación?"
    }
]

export default function ProblemsSection() {
    return (
        <section className="py-20 md:py-32 bg-background/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
                        ¿Te Sientes Identificado?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        No estás solo. Miles de personas han encontrado respuestas y soluciones con la ayuda de curanderos espirituales expertos
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
                
                <div className="text-center mt-12">
                    <p className="text-xl text-foreground font-medium">
                        Si respondiste "Sí" a alguna pregunta, estás en el lugar correcto
                    </p>
                    <p className="text-lg text-muted-foreground mt-2">
                        Maestros espiritistas con décadas de experiencia pueden ayudarte
                    </p>
                </div>
            </div>
        </section>
    )
}
