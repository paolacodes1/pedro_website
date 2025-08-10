# Pedro Tisott - Next.js + shadcn Website Documentation

## Project Overview
Create three distinct website versions for Pedro Tisott's Reiki and tarot services using Next.js 14+ with App Router, React, TypeScript, and shadcn/ui. Each version reflects different aspects of his journey from street fashion/urban culture to spiritual wellness, maintaining his bold, authentic aesthetic.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Next/font with Google Fonts
- **Internationalization**: next-intl
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand (if needed)

## Project Setup

```bash
# Create three separate Next.js projects
npx create-next-app@latest version1-streetzen --typescript --tailwind --app
npx create-next-app@latest version2-neonmystic --typescript --tailwind --app
npx create-next-app@latest version3-urbanspirit --typescript --tailwind --app

# For each project, install dependencies
cd version[X]-name
npm install @shadcn/ui framer-motion next-intl react-hook-form zod lucide-react
npx shadcn-ui@latest init
```

## Common Configuration

### Internationalization Setup (next-intl)
```typescript
// app/i18n.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));

// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

### Message Structure
```json
// messages/en.json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  },
  "hero": {
    "title": "Energy Healing & Spiritual Guidance",
    "subtitle": "From Fashion to Inner Peace",
    "cta": "Book Session"
  },
  "services": {
    "reiki": {
      "title": "Reiki Healing",
      "description": "Certified Reiki practitioner offering energy healing sessions",
      "price": "From $80"
    },
    "tarot": {
      "title": "Tarot Reading",
      "description": "Intuitive guidance through the ancient art of tarot",
      "price": "From $60"
    }
  }
}

// messages/pt.json
{
  "nav": {
    "home": "Início",
    "about": "Sobre",
    "services": "Serviços",
    "contact": "Contato"
  },
  "hero": {
    "title": "Cura Energética & Orientação Espiritual",
    "subtitle": "Da Moda para a Paz Interior",
    "cta": "Agendar Sessão"
  },
  "services": {
    "reiki": {
      "title": "Cura Reiki",
      "description": "Praticante certificado de Reiki oferecendo sessões de cura energética",
      "price": "A partir de R$400"
    },
    "tarot": {
      "title": "Leitura de Tarô",
      "description": "Orientação intuitiva através da antiga arte do tarô",
      "price": "A partir de R$300"
    }
  }
}
```

## Version 1: Street Zen
**Folder**: `version1-streetzen/`

### Design Concept
Merges Pedro's street fashion background with zen minimalism. Think Supreme meets meditation - bold but peaceful.

### Visual Identity
- **Color Palette**:
  ```typescript
  // tailwind.config.ts extension
  colors: {
    'street-black': '#0A0A0A',
    'concrete': '#D4D4D8',
    'electric-blue': '#3B82F6',
    'warning-red': '#EF4444',
    'zen-white': '#FAFAFA'
  }
  ```
- **Typography**: Inter for body, Bebas Neue for headers
- **Style**: Brutalist minimalism with street art influences

### Component Structure
```typescript
// app/[locale]/layout.tsx
import { Inter, Bebas_Neue } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-bebas' 
})

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${bebas.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

### Key Components
```typescript
// components/street-hero.tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function StreetHero() {
  const t = useTranslations('hero')
  
  return (
    <section className="min-h-screen bg-street-black relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'url("/graffiti-texture.svg")',
          backgroundSize: '200%'
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          <motion.h1 
            className="font-bebas text-8xl md:text-9xl text-zen-white uppercase tracking-wider"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            PEDRO TISOTT
          </motion.h1>
          
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-electric-blue text-xl">REIKI</span>
            <span className="text-concrete text-xl">//</span>
            <span className="text-warning-red text-xl">TAROT</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-zen-white text-street-black hover:bg-electric-blue hover:text-white transition-all duration-300 uppercase font-bold px-8"
            >
              {t('cta')}
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-concrete w-8 h-8" />
      </motion.div>
    </section>
  )
}
```

### shadcn Components to Install
```bash
npx shadcn-ui@latest add button card dialog form input label select separator sheet tabs textarea toast
```

## Version 2: Neon Mystic
**Folder**: `version2-neonmystic/`

### Design Concept
Cyberpunk meets spirituality. Inspired by Pedro's bold fashion choices and nightlife aesthetic mixed with mystical elements.

### Visual Identity
- **Color Palette**:
  ```typescript
  colors: {
    'cyber-black': '#000000',
    'neon-purple': '#A855F7',
    'neon-pink': '#EC4899',
    'neon-cyan': '#06B6D4',
    'gold-accent': '#FCD34D',
    'dark-gray': '#18181B'
  }
  ```
- **Typography**: Orbitron for headers, Space Grotesk for body
- **Style**: Dark mode with neon accents, glitch effects

### Key Components
```typescript
// components/neon-services.tsx
'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Moon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function NeonServices() {
  const t = useTranslations('services')
  
  const services = [
    {
      id: 'reiki',
      icon: Sparkles,
      gradient: 'from-neon-purple to-neon-pink',
      delay: 0
    },
    {
      id: 'tarot',
      icon: Moon,
      gradient: 'from-neon-cyan to-neon-purple',
      delay: 0.2
    }
  ]
  
  return (
    <section className="min-h-screen bg-cyber-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-orbitron text-5xl text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          SERVICES
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-dark-gray border border-neon-purple/30 p-8 relative overflow-hidden group">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <service.icon className="w-12 h-12 text-neon-cyan mb-4" />
                <h3 className="font-orbitron text-2xl text-white mb-2">
                  {t(`${service.id}.title`)}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t(`${service.id}.description`)}
                </p>
                <p className="text-gold-accent font-bold">
                  {t(`${service.id}.price`)}
                </p>
                
                {/* Glitch effect on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100">
                  <div className="glitch-effect" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Add to global.css
@keyframes glitch {
  0%, 100% { clip-path: inset(0 0 100% 0); }
  25% { clip-path: inset(0 0 50% 0); }
  50% { clip-path: inset(50% 0 0 0); }
  75% { clip-path: inset(25% 0 25% 0); }
}

.glitch-effect {
  animation: glitch 2s infinite;
  background: linear-gradient(45deg, #EC4899, #06B6D4);
}
```

## Version 3: Urban Spirit
**Folder**: `version3-urbanspirit/`

### Design Concept
Contemporary metropolitan aesthetic with spiritual depth. Clean, professional, but with urban edge.

### Visual Identity
- **Color Palette**:
  ```typescript
  colors: {
    'urban-navy': '#1E293B',
    'sage': '#84CC16',
    'warm-gold': '#FBBf24',
    'soft-cream': '#FEF3C7',
    'steel-gray': '#64748B'
  }
  ```
- **Typography**: Montserrat for headers, DM Sans for body
- **Style**: Modern, sophisticated with organic elements

### Key Components
```typescript
// components/urban-about.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function UrbanAbout() {
  const t = useTranslations('about')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  
  return (
    <section className="min-h-screen bg-gradient-to-b from-soft-cream to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/pedro-portrait.jpg"
                alt="Pedro Tisott"
                fill
                className="object-cover rounded-2xl"
              />
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-sage rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-warm-gold rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-montserrat text-4xl lg:text-5xl text-urban-navy">
              {t('title')}
            </h2>
            <div className="space-y-4 text-steel-gray">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
            </div>
            
            {/* Credentials */}
            <div className="flex gap-4 pt-4">
              <Badge variant="outline" className="border-sage text-sage">
                Certified Reiki Practitioner
              </Badge>
              <Badge variant="outline" className="border-warm-gold text-warm-gold">
                Tarot Reader
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

## Common Features Across All Versions

### Contact Form Component
```typescript
// components/contact-form.tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { useTranslations } from 'next-intl'

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.enum(['reiki', 'tarot', 'both']),
  message: z.string().min(10)
})

export function ContactForm() {
  const t = useTranslations('contact')
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // API call here
    console.log(data)
    toast({
      title: t('success.title'),
      description: t('success.description'),
    })
  }
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Input {...form.register('name')} placeholder={t('name')} />
      <Input {...form.register('email')} type="email" placeholder={t('email')} />
      <Select {...form.register('service')}>
        <SelectTrigger>
          <SelectValue placeholder={t('selectService')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="reiki">Reiki</SelectItem>
          <SelectItem value="tarot">Tarot</SelectItem>
          <SelectItem value="both">{t('both')}</SelectItem>
        </SelectContent>
      </Select>
      <Textarea {...form.register('message')} placeholder={t('message')} />
      <Button type="submit" className="w-full">
        {t('submit')}
      </Button>
    </form>
  )
}
```

### Language Switcher
```typescript
// components/language-switcher.tsx
'use client'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]
  
  const switchLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'pt' : 'en'
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="fixed top-4 right-4 z-50"
    >
      {currentLocale === 'en' ? '🇵🇹 PT' : '🇬🇧 EN'}
    </Button>
  )
}
```

## Deployment Configuration

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://pedrotisott.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_XXXXXXXXXX
```

### SEO Configuration
```typescript
// app/[locale]/layout.tsx
export const metadata: Metadata = {
  title: 'Pedro Tisott - Reiki & Tarot',
  description: 'Certified Reiki practitioner and Tarot reader. Book your spiritual wellness session.',
  keywords: ['Reiki', 'Tarot', 'Spiritual Healing', 'Energy Work', 'Pedro Tisott'],
  openGraph: {
    title: 'Pedro Tisott - Reiki & Tarot',
    description: 'From fashion to spiritual wellness',
    images: ['/og-image.jpg'],
  },
}
```

## Package.json for Each Version
```json
{
  "name": "pedro-tisott-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-sheet": "^1.0.5",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.312.0",
    "next-intl": "^3.4.0",
    "react-hook-form": "^7.48.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

## Testing & Performance

### Lighthouse Targets
- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## Folder Structure (Each Version)
```
version[X]-name/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   └── globals.css
├── components/
│   ├── ui/           (shadcn components)
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── services.tsx
│       ├── about.tsx
│       └── contact.tsx
├── lib/
│   └── utils.ts
├── messages/
│   ├── en.json
│   └── pt.json
├── public/
│   └── images/
└── middleware.ts
```

## Implementation Notes

1. **Pedro's Aesthetic**: Based on the Instagram images, incorporate:
   - Bold, confident typography
   - Street fashion influences
   - Urban/graffiti elements in Version 1
   - Nightlife/neon vibes in Version 2
   - Contemporary clean lines in Version 3

2. **Authenticity**: Maintain Pedro's authentic voice - from streetwear to spiritual without losing edge

3. **Mobile First**: Given Instagram presence, ensure perfect mobile experience

4. **Social Integration**: Consider Instagram feed widget or gallery

5. **Booking System**: Integrate Calendly or Cal.com for appointments

This documentation provides everything needed to build three distinct, professional Next.js websites with shadcn/ui that honor Pedro's unique journey from fashion to spiritual practice.