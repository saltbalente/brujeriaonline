# Planning Guide

Crear una landing page profesional y ética para servicios de consultoría espiritual que conecte personas buscando orientación espiritual con maestros experimentados, manteniendo transparencia y respeto hacia los visitantes.

**Experience Qualities**:
1. **Confiable**: Diseño profesional que transmite seriedad y honestidad desde el primer momento
2. **Acogedor**: Ambiente cálido y espiritual que hace sentir al visitante comprendido sin manipulación
3. **Claro**: Información directa sobre los servicios, proceso y expectativas realistas

**Complexity Level**: Content Showcase (information-focused)
- Es principalmente una página informativa que presenta servicios espirituales y facilita el contacto vía WhatsApp, con énfasis en contenido persuasivo pero ético.

## Essential Features

### Hero Section con CTA Principal
- **Functionality**: Captura inicial con titular, subtítulo, imagen impactante y botón de WhatsApp
- **Purpose**: Comunicar inmediatamente el valor y facilitar el contacto
- **Trigger**: Carga de la página
- **Progression**: Usuario ve titular → lee subtítulo → observa imagen → hace clic en WhatsApp CTA
- **Success criteria**: Visitante comprende la oferta y tiene acceso claro al contacto

### Sección de Empatía (El Problema)
- **Functionality**: Lista de situaciones comunes que el visitante puede estar experimentando
- **Purpose**: Generar conexión emocional sin explotar vulnerabilidades
- **Trigger**: Scroll natural
- **Progression**: Usuario lee problemas → se identifica → continúa leyendo para solución
- **Success criteria**: Usuario se siente comprendido y sigue navegando

### Presentación del Servicio
- **Functionality**: Descripción de los maestros espirituales, su experiencia y tipos de servicios
- **Purpose**: Establecer credibilidad y autoridad de forma honesta
- **Trigger**: Scroll natural
- **Progression**: Usuario lee sobre maestros → aprende sobre servicios → construye confianza
- **Success criteria**: Visitante entiende qué servicios se ofrecen y quién los proporciona

### Testimonios (Prueba Social)
- **Functionality**: Muestra experiencias de clientes previos (formato respetuoso)
- **Purpose**: Generar confianza mediante experiencias reales presentadas éticamente
- **Trigger**: Scroll natural
- **Progression**: Usuario lee testimonios → valida credibilidad → se siente más confiado
- **Success criteria**: Los testimonios refuerzan confianza sin hacer promesas irreales

### Proceso de Contacto
- **Functionality**: Explica paso a paso cómo funciona el proceso de consulta
- **Purpose**: Eliminar dudas y facilitar la decisión de contacto
- **Trigger**: Scroll natural
- **Progression**: Usuario ve pasos → comprende proceso → reduce ansiedad de contacto
- **Success criteria**: Proceso claro que reduce fricción para contactar

### CTA Final y Footer
- **Functionality**: Llamado final a la acción con disclaimers legales visibles
- **Purpose**: Última oportunidad de conversión con transparencia completa
- **Trigger**: Scroll al final
- **Progression**: Usuario lee CTA final → ve disclaimers → decide contactar o no
- **Success criteria**: Botón visible con términos legales claros

### Google Tag Manager Integration
- **Functionality**: Tracking de conversiones y comportamiento
- **Purpose**: Medir efectividad de la landing page
- **Trigger**: Carga de página y eventos
- **Progression**: Página carga → GTM se inicializa → eventos se rastrean
- **Success criteria**: GTM funciona correctamente sin afectar rendimiento

## Edge Case Handling

- **Sin JavaScript**: El contenido y enlaces de WhatsApp funcionan sin JS
- **Imágenes no cargan**: Texto alt descriptivo y diseño que funciona sin imágenes
- **Usuarios escépticos**: Disclaimers prominentes y lenguaje honesto desde el inicio
- **Diferentes dispositivos**: Diseño completamente responsivo, especialmente para móvil
- **Idioma**: Todo el contenido en español, apropiado para el público objetivo

## Design Direction

El diseño debe evocar misticismo y espiritualidad con profesionalismo y respeto. Debe sentirse como un santuario digital acogedor pero serio, evitando manipulación visual. Balance entre rico en atmósfera espiritual pero simple en estructura para mantener enfoque en el mensaje y el CTA.

## Color Selection

**Custom palette** - Paleta que evoca espiritualidad, misterio y confianza, con toques cálidos que invitan sin ser agresivos. Los colores deben sentirse ancestrales pero modernos.

- **Primary Color**: Púrpura profundo místico (oklch(0.35 0.15 300)) - Representa sabiduría espiritual y transformación
- **Secondary Colors**: 
  - Dorado cálido (oklch(0.75 0.12 85)) - Representa iluminación y valor
  - Verde jade profundo (oklch(0.40 0.10 160)) - Representa sanación y naturaleza
- **Accent Color**: Ámbar brillante (oklch(0.70 0.18 65)) - Para CTAs, transmite urgencia positiva y calidez
- **Foreground/Background Pairings**:
  - Background (Casi negro con tinte púrpura oklch(0.12 0.02 300)): Texto dorado claro (oklch(0.95 0.05 85)) - Ratio 15.2:1 ✓
  - Card (Púrpura oscuro oklch(0.20 0.08 300)): Texto blanco (oklch(0.98 0 0)) - Ratio 12.8:1 ✓
  - Primary (Púrpura místico oklch(0.35 0.15 300)): Texto blanco (oklch(0.98 0 0)) - Ratio 8.5:1 ✓
  - Accent (Ámbar oklch(0.70 0.18 65)): Texto negro (oklch(0.15 0 0)) - Ratio 8.2:1 ✓
  - Secondary (Dorado oklch(0.75 0.12 85)): Texto negro (oklch(0.15 0 0)) - Ratio 10.1:1 ✓

## Font Selection

Las tipografías deben transmitir elegancia espiritual y misterio sin sacrificar legibilidad. MedievalSharp para el hero title (estilo místico/gótico similar a Netherworld), Cormorant Unicase para otros headings (elegante y espiritual), e Inter para cuerpo (facilita lectura y profesionalismo).

- **Typographic Hierarchy**:
  - H1 (Titular Hero): MedievalSharp Regular / 48px / letter-spacing: 0.03em - Estilo místico/gótico con text-shadow
  - H2 (Secciones): Cormorant Unicase SemiBold / 36px / letter-spacing: 0.02em
  - H3 (Subtítulos): Cormorant Unicase Medium / 24px / letter-spacing: 0.02em
  - Body (Párrafos): Inter Regular / 18px / line-height: 1.7 - Legibilidad moderna
  - CTA Buttons: Inter SemiBold / 20px / letter-spacing: 0.02em
  - Testimonials: Inter Italic / 16px / line-height: 1.6

## Animations

Las animaciones deben sentirse como energía espiritual fluyendo - sutiles, suaves y orgánicas. Movimientos que evocan humo de incienso, velas parpadeando y energía en movimiento, pero sin distraer del mensaje principal.

- **Purposeful Meaning**: Animaciones que refuerzan la atmósfera mística - fade-ins suaves, parallax sutil en imágenes de fondo, glow effects en CTAs
- **Hierarchy of Movement**: 
  1. CTAs de WhatsApp (pulsing glow sutil para atraer atención)
  2. Imágenes hero (parallax muy sutil al scroll)
  3. Testimonios (fade-in al entrar en viewport)
  4. Secciones de texto (slide-up suave)

## Component Selection

- **Components**: 
  - Button (shadcn) - Para CTAs de WhatsApp con variante personalizada que incluya icono y glow effect
  - Card (shadcn) - Para testimonios y pasos del proceso, con backdrop blur y bordes sutiles
  - Separator (shadcn) - Para dividir secciones con estilo místico
  - ScrollArea (shadcn) - Si se necesita para contenido largo en móvil
  
- **Customizations**:
  - WhatsAppCTA component - Botón flotante sticky con icono de WhatsApp y animación de pulso
  - TestimonialCard - Card especial con comillas decorativas y estrellas de rating
  - ProcessStep - Card numerado con iconos esotéricos (vela, cristal, pentáculo)
  - HeroSection - Sección con overlay gradient sobre imagen de fondo
  
- **States**:
  - Buttons: Default (glow sutil) → Hover (glow intenso + scale 1.05) → Active (scale 0.98)
  - Cards: Default (backdrop-blur) → Hover (border glow + slight lift)
  - Links: Default (underline offset) → Hover (color shift a accent)
  
- **Icon Selection**:
  - WhatsApp (para CTAs de contacto)
  - Sparkles (para elementos místicos)
  - Heart (para servicios de amor)
  - Shield (para protección)
  - Moon / Sun (para rituales)
  - CheckCircle (para pasos del proceso)
  
- **Spacing**: 
  - Secciones: py-20 (móvil) / py-32 (desktop)
  - Contenedores: max-w-7xl mx-auto px-4
  - Cards: p-6 (móvil) / p-8 (desktop), gap-4
  - Elementos: gap-8 entre grupos, gap-4 dentro de grupos
  
- **Mobile**: 
  - Hero: Single column, imagen full-width arriba, texto abajo
  - Testimonios: Carousel horizontal scroll en móvil, grid en desktop
  - CTA flotante: Sticky bottom con z-50 en móvil, inline en desktop
  - Imágenes: Aspect ratio 16:9 en móvil, variado en desktop
  - Font sizes: Reducir 20% en móvil (H1 38px, Body 16px)
