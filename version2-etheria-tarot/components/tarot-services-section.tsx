'use client'
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  cardImage: string;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 'oracle',
    title: 'Oracle of Etherias',
    description: 'Journey beyond the veil with sacred oracle divination that channels ethereal wisdom from higher realms. Through intuitive guidance and mystical symbolism, this reading reveals hidden energies surrounding your path, illuminates spiritual blocks, and awakens the dormant wisdom within your soul. Each session opens doorways to profound self-discovery and cosmic understanding.',
    price: 'From 7€',
    cardImage: '🌟',
    benefits: ['Ethereal realm connection', 'Hidden energy revelation', 'Spiritual awakening', 'Cosmic understanding', 'Soul wisdom activation']
  },
  {
    id: 'thoth',
    title: 'Thoth Tarot',
    description: 'Delve into the profound mysteries of Aleister Crowley\'s Thoth Tarot, where ancient Egyptian wisdom meets modern psychological insight. These powerful archetypal symbols unlock the deepest layers of your psyche, revealing karmic patterns, shadow work opportunities, and your true spiritual destiny. Each card carries centuries of esoteric knowledge, offering transformative guidance for your evolutionary journey.',
    price: 'From 15€',
    cardImage: '🔮',
    benefits: ['Ancient Egyptian wisdom', 'Karmic pattern revelation', 'Shadow work guidance', 'Psychological insights', 'Spiritual destiny clarity', 'Transformative healing']
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
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-rich-burgundy via-rich-burgundy/90 to-deep-maroon shadow-2xl overflow-hidden" 
             style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
          <div className="relative h-full p-4">
            <div className="absolute inset-3 bg-ivory-light rounded-lg">
              <div className="absolute inset-1 bg-gradient-to-br from-rich-burgundy via-rich-burgundy/90 to-deep-maroon rounded-md overflow-hidden">
                
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0" style={{
                    background: `repeating-conic-gradient(from 0deg at 50% 50%, 
                      #800020 0deg 45deg, 
                      #D4AF37 45deg 90deg, 
                      #800020 90deg 135deg, 
                      #D4AF37 135deg 180deg,
                      #800020 180deg 225deg, 
                      #D4AF37 225deg 270deg,
                      #800020 270deg 315deg, 
                      #D4AF37 315deg 360deg)`,
                    backgroundSize: '20px 20px'
                  }}>
                  </div>
                </div>

                {/* Central Cross Design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute left-1/2 top-6 bottom-6 w-8 bg-gradient-to-b from-warm-gold via-warm-gold/90 to-warm-gold transform -translate-x-1/2 rounded-sm shadow-lg"></div>
                    <div className="absolute top-1/2 left-4 right-4 h-8 bg-gradient-to-r from-warm-gold via-warm-gold/90 to-warm-gold transform -translate-y-1/2 rounded-sm shadow-lg"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-rich-burgundy via-rich-burgundy/80 to-deep-maroon rounded-full shadow-lg border-2 border-warm-gold">
                      <div className="absolute inset-1 bg-gradient-to-br from-rich-burgundy/90 to-deep-maroon rounded-full">
                        <div className="absolute inset-1 bg-gradient-to-br from-rich-burgundy/80 to-deep-maroon rounded-full">
                          <div className="absolute inset-1 bg-rich-burgundy rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-br from-warm-gold to-warm-gold/80 transform -translate-y-1/2 rounded-sm shadow-md"></div>
                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-gradient-to-br from-warm-gold to-warm-gold/80 transform -translate-y-1/2 rounded-sm shadow-md"></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-br from-warm-gold to-warm-gold/80 transform -translate-x-1/2 rounded-sm shadow-md"></div>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gradient-to-br from-warm-gold to-warm-gold/80 transform -translate-x-1/2 rounded-sm shadow-md"></div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 w-3 h-3 bg-warm-gold rounded-full opacity-80"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-warm-gold rounded-full opacity-80"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-warm-gold rounded-full opacity-80"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-warm-gold rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Front (Service Info) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-black-pearl via-deep-maroon to-rich-burgundy shadow-2xl" 
             style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="flex flex-col h-full p-6">
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-warm-gold/20 to-warm-gold/10 rounded-full flex items-center justify-center shadow-lg border border-warm-gold/30">
                <div className="text-4xl">{service.cardImage}</div>
              </div>
              
              <h3 className="text-2xl font-poiret-one font-semibold text-ivory-light">{service.title}</h3>
              <div className="text-lg font-medium text-warm-gold">{service.price}</div>
              
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 text-sm text-ivory-light/80">
                    <div className="w-1.5 h-1.5 bg-warm-gold rounded-full"></div>
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
      className="flex flex-col justify-center space-y-6 px-4"
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      animate={{ 
        opacity: descIsInView ? 1 : 0, 
        x: descIsInView ? 0 : (index % 2 === 0 ? 50 : -50)
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="space-y-4">
        <h2 className="text-4xl font-poiret-one font-bold text-ivory-light">{service.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-rich-burgundy to-warm-gold rounded-full"></div>
        <p className="text-lg text-ivory-light/80 leading-relaxed font-cormorant-infant">
          {service.description}
        </p>
        <div className="text-2xl font-poiret-one font-semibold text-warm-gold">{service.price}</div>
      </div>
    </motion.div>
  );
}

export function TarotServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Card on left for even indices, right for odd */}
              {index % 2 === 0 ? (
                <>
                  <TarotCard service={service} index={index} />
                  <ServiceDescription service={service} index={index} />
                </>
              ) : (
                <>
                  <ServiceDescription service={service} index={index} />
                  <TarotCard service={service} index={index} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}