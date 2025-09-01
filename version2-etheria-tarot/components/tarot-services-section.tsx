'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function TarotServicesSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      
      if (isInView) {
        setIsFlipped(scrollingDown);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isInView]);

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Oracle of Etherias Card */}
          <div className="perspective-1000">
            <motion.div
              className="card-container relative w-full h-80"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-rich-burgundy to-deep-maroon border border-warm-gold/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-warm-gold/20"></div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Mystical Oracle Symbol - Sacred Geometry */}
                      <circle cx="50" cy="50" r="35" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.8" />
                      <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6" />
                      <circle cx="50" cy="50" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.8" />
                      {/* Star pattern */}
                      <path d="M50 15 L52 25 L50 35 L48 25 Z" fill="#D4AF37" opacity="0.7" />
                      <path d="M50 65 L52 75 L50 85 L48 75 Z" fill="#D4AF37" opacity="0.7" />
                      <path d="M15 50 L25 52 L35 50 L25 48 Z" fill="#D4AF37" opacity="0.7" />
                      <path d="M65 50 L75 52 L85 50 L75 48 Z" fill="#D4AF37" opacity="0.7" />
                      {/* Center dot */}
                      <circle cx="50" cy="50" r="3" fill="#D4AF37" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poiret-one text-warm-gold mb-2">Oracle of Etherias</h3>
                  <p className="text-ivory-light/60 font-cormorant-infant">Ethereal Guidance</p>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-deep-maroon to-rich-burgundy border border-warm-gold/30 p-8">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-warm-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.5L14.09 8.26L20 9L14.09 9.74L12 15.5L9.91 9.74L4 9L9.91 8.26L12 2.5Z" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6" />
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poiret-one text-ivory-light mb-4">Oracle of Etherias</h3>
                  <p className="text-ivory-light/80 font-cormorant-infant mb-6">
                    Connect with ethereal realms through sacred oracle guidance. Reveals mystical energies and awakens inner wisdom.
                  </p>
                  <div className="text-warm-gold font-poiret-one text-xl">From 7€</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thoth Tarot Card */}
          <div className="perspective-1000">
            <motion.div
              className="card-container relative w-full h-80"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            >
              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-rich-burgundy to-deep-maroon border border-warm-gold/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-warm-gold/20"></div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Rosicrucian Cross - Traditional Thoth Symbol */}
                      <path d="M50 10 L50 90" stroke="#D4AF37" strokeWidth="3" opacity="0.9" />
                      <path d="M20 50 L80 50" stroke="#D4AF37" strokeWidth="3" opacity="0.9" />
                      <path d="M30 30 L70 70" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
                      <path d="M70 30 L30 70" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
                      {/* Rose at center */}
                      <circle cx="50" cy="50" r="8" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.8" />
                      <circle cx="50" cy="50" r="4" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.9" />
                      <circle cx="50" cy="50" r="2" fill="#D4AF37" opacity="1" />
                      {/* Additional mystical elements */}
                      <circle cx="50" cy="25" r="3" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6" />
                      <circle cx="50" cy="75" r="3" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6" />
                      <circle cx="25" cy="50" r="3" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6" />
                      <circle cx="75" cy="50" r="3" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poiret-one text-warm-gold mb-2">Thoth Tarot</h3>
                  <p className="text-ivory-light/60 font-cormorant-infant">Ancient Wisdom</p>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-deep-maroon to-rich-burgundy border border-warm-gold/30 p-8">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-warm-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="currentColor" opacity="0.3" />
                      <path d="M12 6L18 12L12 18L6 12L12 6Z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poiret-one text-ivory-light mb-4">Thoth Tarot</h3>
                  <p className="text-ivory-light/80 font-cormorant-infant mb-6">
                    Experience profound wisdom of Aleister Crowley&apos;s Thoth Tarot. Ancient symbols unlock deep spiritual insights.
                  </p>
                  <div className="text-warm-gold font-poiret-one text-xl">From 15€</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}