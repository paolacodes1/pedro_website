'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, Leaf } from 'lucide-react';

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
                      <path
                        d="M50 10 L50 90 M30 30 L70 70 M70 30 L30 70 M50 25 L50 75 M35 35 L65 65"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-80"
                      />
                      <circle cx="50" cy="50" r="8" fill="#D4AF37" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poiret-one text-warm-gold mb-2">Oracle of Etherias</h3>
                  <p className="text-ivory-light/60 font-cormorant-infant">Ethereal Guidance</p>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-deep-maroon to-rich-burgundy border border-warm-gold/30 p-8">
                <div className="text-center h-full flex flex-col justify-center">
                  <Sun className="w-12 h-12 text-warm-gold mx-auto mb-4" />
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
                      <path
                        d="M50 10 L50 90 M30 30 L70 70 M70 30 L30 70 M25 50 L75 50"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-80"
                      />
                      <circle cx="50" cy="30" r="6" fill="#D4AF37" />
                      <circle cx="50" cy="70" r="6" fill="#D4AF37" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poiret-one text-warm-gold mb-2">Thoth Tarot</h3>
                  <p className="text-ivory-light/60 font-cormorant-infant">Ancient Wisdom</p>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-deep-maroon to-rich-burgundy border border-warm-gold/30 p-8">
                <div className="text-center h-full flex flex-col justify-center">
                  <Leaf className="w-12 h-12 text-warm-gold mx-auto mb-4" />
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