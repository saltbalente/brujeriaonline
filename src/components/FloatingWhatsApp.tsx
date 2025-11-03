import { Button } from '@/components/ui/button'
import { WhatsappLogo } from '@phosphor-icons/react'

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B18392988226&text=Hola%2C+necesito+ayuda"

export default function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                asChild
                size="lg"
                className="pulse-glow bg-accent hover:bg-accent/90 text-accent-foreground h-16 w-16 md:h-auto md:w-auto md:px-6 rounded-full shadow-2xl"
            >
                <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <WhatsappLogo size={32} weight="fill" />
                    <span className="hidden md:inline font-semibold">Consulta Gratis</span>
                </a>
            </Button>
        </div>
    )
}
