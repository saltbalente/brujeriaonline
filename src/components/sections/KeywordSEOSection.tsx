import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const WHATSAPP_URL = "https://wa.me/+15103624147?text=ayuda%20con%20el%20maestro%20en%20consulta%20gratis"

export default function KeywordSEOSection() {
  return (
    <section className="py-20 md:py-32 bg-background/50 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/7d/67/3b/7d673b1cc5220af66b4908b6b1a25f78.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-5xl mb-4 text-foreground">
            Amarres de amor y brujería en Guatemala
          </h2>
          <p className="text-lg md:text-xl text-secondary font-semibold max-w-3xl mx-auto">
            Información clara y directa sobre prácticas espirituales: amarres de amor, brujería y santería.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/70 backdrop-blur-sm border-border">
            <div className="rounded-lg overflow-hidden border border-border mb-4">
              <img
                src="https://i.pinimg.com/1200x/f4/4e/4e/f44e4e849c42e73517103a5a48deff0f.jpg"
                alt="Amarres de amor realizados por brujos de Guatemala"
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="section-title text-xl mb-2 text-card-foreground">Amarres de amor en Guatemala</h3>
            <p className="text-muted-foreground leading-relaxed">
              Los <strong>amarres de amor</strong> son rituales tradicionales practicados por <strong>brujos de Guatemala</strong> y 
              <strong>brujos en Guatemala</strong> con el fin de recuperar, fortalecer o estabilizar una relación. Se realizan con respeto, 
              intención y siguiendo lineamientos ancestrales.
            </p>
          </Card>

          <Card className="p-6 bg-card/70 backdrop-blur-sm border-border">
            <div className="rounded-lg overflow-hidden border border-border mb-4">
              <img
                src="https://i.pinimg.com/736x/7d/67/3b/7d673b1cc5220af66b4908b6b1a25f78.jpg"
                alt="Guía sobre cómo hacer un amarre de amor en casa gratis"
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="section-title text-xl mb-2 text-card-foreground">¿Cómo hacer un amarre de amor en casa gratis?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Si te preguntas <strong>cómo hacer un amarre de amor en casa gratis</strong>, recuerda que la efectividad depende de la intención, 
              el respeto y el conocimiento de los pasos correctos. Para casos serios, lo más recomendable es solicitar guía profesional para 
              evitar errores y consecuencias no deseadas.
            </p>
            <div className="mt-4">
              <Button asChild variant="outline" className="border-accent text-accent">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  📲 Consultar con un maestro
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-card/70 backdrop-blur-sm border-border">
            <h3 className="section-title text-xl mb-2 text-card-foreground">¿Cómo hacer un pacto con la Santa Muerte?</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Cómo hacer un pacto con la Santa Muerte</strong> es una pregunta que requiere responsabilidad y comprensión profunda. 
              Estas ceremonias deben realizarse con acompañamiento experto y una intención clara, respetando la tradición y las normas espirituales.
            </p>
          </Card>

          <Card className="p-6 bg-card/70 backdrop-blur-sm border-border">
            <h3 className="section-title text-xl mb-2 text-card-foreground">¿Cómo saber si me están haciendo brujería?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Si te preguntas <strong>cómo saber si me están haciendo brujería</strong>, observa cambios repentinos: agotamiento extremo, mala racha 
              constante, discusiones inexplicables o bloqueos emocionales. Una <em>limpieza espiritual</em> y diagnóstico profesional ayudan a confirmar y revertir estas energías.
            </p>
          </Card>

          <Card className="p-6 bg-card/70 backdrop-blur-sm border-border">
            <h3 className="section-title text-xl mb-2 text-card-foreground">¿Qué es un endulzamiento de amor?</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Qué es un endulzamiento de amor</strong>: es un ritual para suavizar corazones, reducir conflictos y fomentar empatía. 
              Ideal para parejas con tensión o distanciamiento, busca armonía y comunicación desde la energía.
            </p>
          </Card>

          <Card className="p-6 bg-card/70 backdrop-blur-sm border-border">
            <h3 className="section-title text-xl mb-2 text-card-foreground">Santeros y santeros cubanos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Los <strong>santeros</strong> y <strong>santeros cubanos</strong> trabajan con ceremonias de protección, apertura de caminos y 
              equilibrio espiritual. Su experiencia es clave para casos complejos que requieren manejo de energías y respeto por la tradición.
            </p>
          </Card>
        </div>

        <div className="text-center mt-12 p-8 bg-accent/20 border-2 border-accent rounded-lg max-w-3xl mx-auto">
          <p className="text-xl text-foreground font-bold font-serif mb-2">
            💬 ¿Necesitas ayuda inmediata? Escríbenos por WhatsApp
          </p>
          <Button asChild size="lg" className="pulse-glow bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto font-bold shadow-2xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Hablar con un maestro ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}