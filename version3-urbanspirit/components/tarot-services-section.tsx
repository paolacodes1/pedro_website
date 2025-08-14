'use client'
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Sparkles, Moon, Heart, Eye } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType;
  cardImage: string;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 'reiki',
    title: 'Reiki Healing',
    description: 'Experience the profound healing power of universal life energy. Through gentle touch and energy channeling, I help restore balance to your body, mind, and spirit, promoting natural healing and deep relaxation.',
    price: 'From $80',
    icon: Sparkles,
    cardImage: '✨', // We'll use emojis as placeholders for now
    benefits: ['Energy balancing', 'Stress relief', 'Emotional healing', 'Physical wellness']
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    description: 'Gain clarity and insight into your life\'s journey through the ancient wisdom of tarot. Each reading is a sacred conversation that reveals hidden patterns, illuminates choices, and guides you toward your highest path.',
    price: 'From $60',
    icon: Moon,
    cardImage: '🔮',
    benefits: ['Life guidance', 'Decision clarity', 'Spiritual insight', 'Future preparation']
  }
];

interface TarotCardProps {
  service: Service;
  index: number;
}

function TarotCard({ service, index }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardIsInView = useInView(cardRef, { margin: "-20%", once: true });
  
  // Flip when card comes into view
  useEffect(() => {
    if (cardIsInView && !isFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [cardIsInView, isFlipped]);

  return (
    <div ref={cardRef} className="relative w-full max-w-xs mx-auto perspective-1000">
      <motion.div
        className="relative w-full h-[500px] cursor-pointer card-container"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Card Back (Traditional Tarot Design) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-deep-plum via-deep-plum/90 to-deep-plum shadow-2xl overflow-hidden" 
             style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
          <div className="relative h-full p-4">
            {/* White border */}
            <div className="absolute inset-3 bg-warm-ivory rounded-lg">
              <div className="absolute inset-1 bg-gradient-to-br from-deep-plum via-deep-plum/90 to-deep-plum rounded-md overflow-hidden">
                
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-40">
                  {/* Create diamond/geometric pattern */}
                  <div className="absolute inset-0" style={{
                    background: `repeating-conic-gradient(from 0deg at 50% 50%, 
                      #7E4C74 0deg 45deg, 
                      #C3A27C 45deg 90deg, 
                      #7E4C74 90deg 135deg, 
                      #C3A27C 135deg 180deg,
                      #7E4C74 180deg 225deg, 
                      #C3A27C 225deg 270deg,
                      #7E4C74 270deg 315deg, 
                      #C3A27C 315deg 360deg)`,
                    backgroundSize: '20px 20px'
                  }}>
                  </div>
                  
                  {/* Diamond overlay pattern */}
                  <div className="absolute inset-0" style={{
                    background: `repeating-linear-gradient(45deg, 
                      transparent 0px, 
                      transparent 8px, 
                      rgba(0,0,0,0.1) 8px, 
                      rgba(0,0,0,0.1) 10px),
                    repeating-linear-gradient(-45deg, 
                      transparent 0px, 
                      transparent 8px, 
                      rgba(0,0,0,0.1) 8px, 
                      rgba(0,0,0,0.1) 10px)`
                  }}>
                  </div>
                </div>

                {/* Central Cross Design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* Vertical bar of cross */}
                    <div className="absolute left-1/2 top-6 bottom-6 w-8 bg-gradient-to-b from-antique-gold via-antique-gold/90 to-antique-gold transform -translate-x-1/2 rounded-sm shadow-lg"></div>
                    
                    {/* Horizontal bar of cross */}
                    <div className="absolute top-1/2 left-4 right-4 h-8 bg-gradient-to-r from-antique-gold via-antique-gold/90 to-antique-gold transform -translate-y-1/2 rounded-sm shadow-lg"></div>
                    
                    {/* Rose center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-deep-plum via-deep-plum/80 to-deep-plum rounded-full shadow-lg border-2 border-antique-gold">
                      <div className="absolute inset-1 bg-gradient-to-br from-deep-plum/90 to-deep-plum rounded-full">
                        <div className="absolute inset-1 bg-gradient-to-br from-deep-plum/80 to-deep-plum rounded-full">
                          <div className="absolute inset-1 bg-deep-plum rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cross arms decorations */}
                    <div className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-br from-sage-blue to-sage-blue/80 transform -translate-y-1/2 rounded-sm shadow-md"></div>
                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-gradient-to-br from-sage-blue to-sage-blue/80 transform -translate-y-1/2 rounded-sm shadow-md"></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-br from-sage-blue to-sage-blue/80 transform -translate-x-1/2 rounded-sm shadow-md"></div>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gradient-to-br from-sage-blue to-sage-blue/80 transform -translate-x-1/2 rounded-sm shadow-md"></div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-antique-gold rounded-full opacity-80"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-antique-gold rounded-full opacity-80"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-antique-gold rounded-full opacity-80"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-antique-gold rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Front (Service Info) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-warm-ivory via-warm-ivory to-sage-blue/10 shadow-2xl" 
             style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="flex flex-col h-full p-6">
            {/* Service Icon - Centered */}
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-deep-plum to-deep-plum/80 rounded-full flex items-center justify-center shadow-lg">
                <service.icon className="w-12 h-12 text-warm-ivory" />
              </div>
              
              <h3 className="text-2xl font-montserrat font-semibold text-charcoal">{service.title}</h3>
              <div className="text-lg font-medium text-deep-plum">{service.price}</div>
              
              {/* Benefits */}
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 text-sm text-charcoal/70">
                    <div className="w-1.5 h-1.5 bg-antique-gold rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface ServiceDescriptionProps {
  service: Service;
  index: number;
}

function ServiceDescription({ service, index }: ServiceDescriptionProps) {
  const descRef = useRef<HTMLDivElement>(null);
  const descIsInView = useInView(descRef, { margin: "-20%", once: true });
  
  return (
    <motion.div
      ref={descRef}
      initial={{ opacity: 0, x: 50 }}
      animate={descIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-3xl md:text-4xl font-montserrat font-light text-charcoal">
          {service.title}
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-deep-plum to-antique-gold"></div>
      </div>
      
      <p className="text-lg leading-relaxed text-charcoal/80 max-w-2xl">
        {service.description}
      </p>
      
      <div className="flex items-center gap-4">
        <div className="text-2xl font-semibold text-deep-plum">{service.price}</div>
        <div className="text-sm text-charcoal/60">Per session</div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-deep-plum hover:bg-deep-plum/90 text-warm-ivory px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Book {service.title}
      </motion.button>
    </motion.div>
  );
}

export function TarotServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-30%" });
  
  return (
    <section ref={containerRef} className="min-h-screen bg-gradient-to-b from-warm-ivory to-sage-blue/10 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-light text-charcoal mb-6">
            Sacred Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-deep-plum via-antique-gold to-deep-plum mx-auto mb-6"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Discover transformative healing through ancient wisdom and modern sanctuary
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
              {/* Tarot Card */}
              <div className="flex justify-center">
                <TarotCard service={service} index={index} />
              </div>
              
              {/* Service Description */}
              <div className="flex items-center">
                <ServiceDescription service={service} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}