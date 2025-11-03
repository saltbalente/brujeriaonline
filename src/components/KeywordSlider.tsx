import { Sparkle } from '@phosphor-icons/react'

const keywords = [
  'Consulta Espiritual Gratis',
  'Maestros Espirituales',
  'Amarres de Amor',
  'Protección Espiritual',
  'Limpieza Energética',
  'Tarot Profesional',
  'Sanación Espiritual',
  'Rituales Místicos',
  'Lectura de Cartas',
  'Guía Espiritual'
]

export default function KeywordSlider() {
  const whatsappUrl = 'https://wa.me/19142090428?text=Hola%2C+necesito+ayuda'

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20 overflow-hidden">
      <div className="relative h-12 flex items-center">
        <div className="animate-scroll flex items-center gap-8 whitespace-nowrap">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8">
              {keywords.map((keyword, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center gap-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground font-medium text-sm hover:text-accent transition-colors duration-300 cursor-pointer"
                  >
                    {keyword}
                  </a>
                  <Sparkle 
                    className="text-accent flex-shrink-0" 
                    weight="fill" 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
