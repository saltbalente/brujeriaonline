import { Separator } from '@/components/ui/separator'

export default function Footer() {
    return (
        <footer className="py-12 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h3 className="section-title text-xl mb-4 text-card-foreground text-center">
                        Aviso Legal Importante
                    </h3>
                    <div className="bg-muted/30 p-6 rounded-lg border border-border max-w-4xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-serif">
                            <strong className="text-foreground">Disclaimer:</strong> Los servicios espirituales ofrecidos son complementarios y no sustituyen en ningún caso la atención médica, psicológica o legal profesional. Los resultados pueden variar de persona a persona según múltiples factores individuales.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-serif">
                            Los testimonios presentados reflejan experiencias personales y no constituyen garantía de resultados específicos. Cada caso es único y se aborda de manera individual.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-serif">
                            Todos los rituales y ceremonias se realizan con el máximo respeto a las tradiciones espirituales y con el consentimiento explícito de los consultantes. Operamos con transparencia y ética profesional.
                        </p>
                    </div>
                </div>
                
                <Separator className="my-8" />
                
                <div className="text-center space-y-4">
                    <div>
                        <p className="text-card-foreground font-semibold mb-2">
                            Servicios de Consultoría Espiritual
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Amarres de amor • Limpiezas espirituales • Protección • Rituales personalizados
                        </p>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                        <p>Atención 24/7 por WhatsApp</p>
                        <p>Consultas confidenciales en español</p>
                    </div>
                    
                    <div className="text-xs text-muted-foreground pt-4">
                        © {new Date().getFullYear()} - Todos los derechos reservados
                    </div>
                </div>
            </div>
        </footer>
    )
}
