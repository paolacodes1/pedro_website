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

### Version 3: Urban Spirit
- **Colors**: Urban navy (#1E293B), sage (#84CC16), warm gold (#FBBf24), soft cream (#FEF3C7)
- **Fonts**: Montserrat (headers), DM Sans (body)
- **Style**: Contemporary sophisticated with organic elements  
- **Port**: 3002

## Current Progress
- [x] Documentation review and planning
- [x] CLAUDE.md setup
- [x] Version 3 (Urban Spirit) project setup and hero implementation
- [x] Deleted Version 1 (Street Zen) and Version 2 (Neon Mystic) to focus on Urban Spirit
- [ ] Complete Urban Spirit website with all sections
- [ ] About section with Pedro's journey
- [ ] Services section with Reiki and Tarot details
- [ ] Contact section with booking form
- [ ] Navigation and footer
- [ ] Mobile optimization and final polish

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