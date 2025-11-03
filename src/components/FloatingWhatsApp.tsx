import { Button } from '@/components/ui/button'
import { WhatsappLogo } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://wa.me/19142090428?text=Hola%2C+necesito+ayuda"

export default function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
            <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-60 animate-ping-slow"></div>
                <Button
                    asChild
                    size="lg"
                    className="relative pulse-glow bg-accent hover:bg-accent/90 hover:scale-110 text-accent-foreground h-16 w-16 md:h-auto md:w-auto md:px-8 md:py-6 rounded-full shadow-2xl transition-transform duration-300"
                >
                    <a 
                        href={WHATSAPP_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                    >
                        <WhatsappLogo size={36} weight="fill" className="animate-pulse" />
                        <span className="hidden md:inline font-bold text-lg">¡Consulta GRATIS!</span>
                    </a>
                </Button>
            </div>
        </div>
    )
}
