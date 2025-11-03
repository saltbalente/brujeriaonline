import HeroSection from '@/components/sections/HeroSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import MaestroSection from '@/components/sections/MaestroSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import Footer from '@/components/sections/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import KeywordSlider from '@/components/KeywordSlider'

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <KeywordSlider />
            <div className="pt-12">
                <HeroSection />
                <ProblemsSection />
                <MaestroSection />
                <TestimonialsSection />
                <ProcessSection />
                <FinalCTASection />
                <Footer />
            </div>
            <FloatingWhatsApp />
        </div>
    )
}

export default App