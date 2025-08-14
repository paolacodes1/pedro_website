# Pedro Tisott Website Project - Development Guide

## Project Overview
Building three completely standalone website versions for Pedro Tisott's Reiki and tarot services. Each version is self-contained with no shared dependencies.

## Project Structure
```
Pedro/
├── version1-streetzen/          # Complete Next.js app - Street fashion meets zen
├── version2-neonmystic/         # Complete Next.js app - Cyberpunk spirituality  
├── version3-urbanspirit/        # Complete Next.js app - Contemporary metropolitan
├── shared-components-template/   # Template components to copy to each version
├── pedro-website-docs.md        # Original design documentation
└── CLAUDE.md                   # This file - project tracking
```

## Development Approach
- **Self-Contained**: Each version has its own complete Next.js setup, node_modules, dependencies
- **No Sharing**: Versions don't share any files or folders - completely independent
- **Template System**: Create shared components once, then copy/customize for each version
- **Individual Testing**: Each version can be developed, tested, and deployed independently

## Tech Stack (Per Version)
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- next-intl (English/Portuguese)
- React Hook Form + Zod (forms)
- Lucide React (icons)

## Quick Commands

### Setup New Version
```bash
# Create Next.js project
npx create-next-app@latest [version-name] --typescript --tailwind --app

# Navigate and install dependencies
cd [version-name]
npm install @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-sheet @radix-ui/react-tabs @radix-ui/react-toast class-variance-authority clsx framer-motion lucide-react next-intl react-hook-form tailwind-merge tailwindcss-animate zod @hookform/resolvers

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Install commonly used shadcn components
npx shadcn-ui@latest add button card dialog form input label select separator sheet tabs textarea toast
```

### Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Version Specifications

### Version 1: Street Zen
- **Colors**: Street black (#0A0A0A), concrete (#D4D4D8), electric blue (#3B82F6), warning red (#EF4444)
- **Fonts**: Inter (body), Bebas Neue (headers)
- **Style**: Brutalist minimalism with street art influences
- **Port**: 3000

### Version 2: Neon Mystic  
- **Colors**: Cyber black (#000000), neon purple (#A855F7), neon pink (#EC4899), neon cyan (#06B6D4)
- **Fonts**: Orbitron (headers), Space Grotesk (body)
- **Style**: Dark cyberpunk with glitch effects
- **Port**: 3001

### Version 3: Urban Spirit ✅ ACTIVE
- **Colors**: 
  - Warm Ivory (#F9F5F1) - luxurious background
  - Deep Plum (#7E4C74) - mystical primary accent
  - Antique Gold (#C3A27C) - warm luxury accent
  - Sage Blue (#B2D0D3) - calming highlight
  - Charcoal (#2B2B2B) - elegant text
- **Fonts**: Montserrat (headers), DM Sans (body)
- **Style**: Contemporary sophisticated with spiritual elegance
- **Port**: 3001

## Current Progress - Version 3 Complete ✅
- [x] Documentation review and planning
- [x] CLAUDE.md setup  
- [x] Version 3 (Urban Spirit) project setup and hero implementation
- [x] Deleted Version 1 (Street Zen) and Version 2 (Neon Mystic) to focus on Urban Spirit
- [x] **HERO SECTION COMPLETE**: Refined color palette, elegant curtain design, "Find out more" arrow
- [x] **SERVICES SECTION COMPLETE**: Interactive tarot card flip animations with scroll-triggered reveals
- [x] **Advanced ANIMATIONS**: Synchronized card flips with text descriptions, smooth scroll-based triggers
- [x] **DESIGN REFINEMENTS**: Removed redundant elements, centered icons, consistent right-to-left text animations

## Version 3 Implementation Details

### Completed Components ✅

#### 1. Hero Section (`components/simple-urban-hero.tsx`)
- **Refined Color Palette**: Implemented warm ivory, deep plum, antique gold, sage blue, and charcoal
- **Elegant Curtain Design**: SVG-based theatrical curtains with gradient overlays
- **Service Badges**: Reiki and Tarot service highlights with icons
- **Call-to-Action**: Primary and secondary buttons with hover effects
- **Trust Indicators**: Certified Practitioner and Urban Sanctuary badges
- **Navigation Aid**: Static "Find out more" with down-pointing arrow

#### 2. Services Section (`components/tarot-services-section.tsx`)
- **Tarot Card Animation**: 3D flip cards with traditional Rosicrucian cross design
- **Custom Color Scheme**: Deep plum backgrounds with antique gold crosses and sage blue accents
- **Scroll-Triggered**: Cards flip when scrolling into view using Framer Motion
- **Service Information**: Reiki ($80) and Tarot ($60) with benefits lists
- **Synchronized Animations**: Card flips occur simultaneously with text descriptions
- **Performance Optimized**: Fixed React infinite render loops with useCallback

#### 3. Technical Implementations
- **3D CSS Transforms**: Custom flip card animations with backface visibility
- **Framer Motion Integration**: Smooth scroll-based animations with useInView
- **Color System**: Global CSS variables for consistent theming
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Performance**: Optimized re-renders and animation timing

### Key Features Delivered
1. **Elegant Color Palette**: Professional spiritual aesthetic
2. **Interactive Animations**: Engaging scroll-triggered card flips
3. **Traditional Tarot Design**: Authentic Rosicrucian cross imagery
4. **Synchronized UX**: Cards and text appear together seamlessly
5. **Clean Architecture**: Modular component structure
6. **Cross-browser Support**: CSS fallbacks and vendor prefixes

## Lessons Learned from Version 1

### Issues Encountered & Solutions:
1. **next-intl TypeScript Conflicts**: 
   - Problem: Version 4.3.4 has breaking changes with Next.js 15
   - Solution: Simplified without i18n for now, can add back later with correct version
   
2. **Custom Tailwind Colors in v4**:
   - Problem: Custom CSS variables not recognized as classes
   - Solution: Use standard Tailwind colors (blue-500, red-500, gray-400, etc.)
   
3. **Async Params in Next.js 15**:
   - Problem: `params` must be awaited in layouts/pages
   - Solution: Simplified structure without dynamic routes initially
   
4. **CSS Import Order**:
   - Problem: Google Fonts @import must come before other CSS
   - Solution: Use Next.js font loading instead of CSS imports

### Working Setup Pattern:
```bash
# 1. Create Next.js project
npx create-next-app@latest [name] --typescript --tailwind --eslint --app

# 2. Install dependencies
npm install @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-tabs @radix-ui/react-toast class-variance-authority clsx framer-motion lucide-react react-hook-form tailwind-merge tailwindcss-animate zod @hookform/resolvers

# 3. Initialize shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card dialog form input label select separator tabs textarea toast

# 4. Use Google Fonts via Next.js, not CSS imports
# 5. Stick to standard Tailwind colors initially
# 6. Keep structure simple without complex routing
```

## Development Notes
- Each version should run on different ports during development
- Copy shared components template to each version, then customize
- Test each version independently - no cross-version dependencies
- Maintain Pedro's authentic voice: street fashion to spiritual without losing edge
- Mobile-first responsive design
- Perfect Instagram integration potential

## Deployment Strategy
Each version can be deployed independently:
- Version 1: streetzen.pedrotisott.com
- Version 2: neonmystic.pedrotisott.com  
- Version 3: urbanspirit.pedrotisott.com

## Contact Information Integration
- Reiki sessions: From $80 (From R$400)
- Tarot readings: From $60 (From R$300)
- Booking integration with Calendly or Cal.com
- WhatsApp/Instagram contact methods