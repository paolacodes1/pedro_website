'use client'
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Heart } from 'lucide-react';

export function SimpleUrbanHero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black-pearl flex items-center justify-center">
      {/* Simple background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-warm-gold/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-rich-burgundy/30 rounded-full filter blur-3xl" />
      
      {/* Elegant Curtain Design */}
      {/* Left curtain */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
        <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0,0 Q15,10 25,25 Q30,35 20,50 Q10,65 15,80 Q20,90 0,100 L0,0 Z" 
            fill="url(#leftCurtainGradient)" 
            opacity="0.15"
          />
          <defs>
            <linearGradient id="leftCurtainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#800020" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Right curtain */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none">
        <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M100,0 Q85,10 75,25 Q70,35 80,50 Q90,65 85,80 Q80,90 100,100 L100,0 Z" 
            fill="url(#rightCurtainGradient)" 
            opacity="0.15"
          />
          <defs>
            <linearGradient id="rightCurtainGradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#800020" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10 text-center space-y-12 max-w-4xl px-4">
        {/* Main title */}
        <div>
          <h1 className="font-poiret-one text-6xl md:text-8xl font-normal text-ivory-light mb-6" style={{fontFamily: 'Poiret One, cursive'}}>
            Etheria Tarot
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-rich-burgundy to-warm-gold mx-auto rounded-full" />
        </div>
        
        {/* Tagline */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-poiret-one font-normal text-ivory-light" style={{fontFamily: 'Poiret One, cursive'}}>
            Mystical Guidance
            <br />
            <span className="text-warm-gold">for the Awakened Soul</span>
          </h2>
          <p className="text-xl text-ivory-light/80 max-w-2xl mx-auto font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>
            Unlock the secrets of the ethereal realm through ancient divination. 
            Experience profound insights with tarot and oracle readings.
          </p>
        </div>
        
        {/* Services */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-8 justify-center items-center text-xl">
            <div className="flex items-center gap-3 bg-deep-maroon/90 backdrop-blur-sm px-8 py-4 rounded-full border border-warm-gold/40 shadow-lg">
              <Sun className="text-warm-gold w-6 h-6" />
              <span className="text-ivory-light font-semibold font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Oráculo de Etherias</span>
            </div>
            <div className="flex items-center gap-3 bg-deep-maroon/90 backdrop-blur-sm px-8 py-4 rounded-full border border-warm-gold/40 shadow-lg">
              <Leaf className="text-warm-gold w-6 h-6" />
              <span className="text-ivory-light font-semibold font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Tarot de Thoth</span>
            </div>
          </div>
          
          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Oráculo de Etherias Details */}
            <div className="bg-deep-maroon/70 backdrop-blur-sm rounded-2xl p-6 border border-warm-gold/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="text-warm-gold w-8 h-8" />
                <h3 className="text-2xl font-poiret-one font-normal text-ivory-light" style={{fontFamily: 'Poiret One, cursive'}}>Oráculo de Etherias</h3>
              </div>
              <p className="text-ivory-light/80 mb-4 font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>
                Connect with the ethereal realm through sacred oracle guidance. Each reading reveals the mystical energies surrounding your path and awakens your inner wisdom.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-warm-gold font-poiret-one" style={{fontFamily: 'Poiret One, cursive'}}>From $60</div>
                <div className="text-sm text-ivory-light/60 font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Per session</div>
              </div>
            </div>

            {/* Tarot de Thoth Details */}
            <div className="bg-deep-maroon/70 backdrop-blur-sm rounded-2xl p-6 border border-warm-gold/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-warm-gold w-8 h-8" />
                <h3 className="text-2xl font-poiret-one font-normal text-ivory-light" style={{fontFamily: 'Poiret One, cursive'}}>Tarot de Thoth</h3>
              </div>
              <p className="text-ivory-light/80 mb-4 font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>
                Experience the profound wisdom of Aleister Crowley&apos;s Thoth Tarot. These ancient symbols unlock deep spiritual insights and illuminate your soul&apos;s journey.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-warm-gold font-poiret-one" style={{fontFamily: 'Poiret One, cursive'}}>From $80</div>
                <div className="text-sm text-ivory-light/60 font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Per session</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-rich-burgundy hover:bg-rich-burgundy/90 text-ivory-light px-12 py-4 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-cormorant-infant"
            style={{fontFamily: 'Cormorant Infant, serif'}}
          >
            Begin Your Mystical Journey
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-2 border-warm-gold text-ivory-light hover:bg-warm-gold hover:text-black-pearl px-12 py-4 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-cormorant-infant"
            style={{fontFamily: 'Cormorant Infant, serif'}}
          >
            Book a Reading
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 pt-12">
          <div className="flex items-center gap-2 text-ivory-light/70">
            <Heart className="w-5 h-5 text-warm-gold" />
            <span className="font-medium font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Mystical Practitioner</span>
          </div>
          <div className="w-px h-6 bg-warm-gold" />
          <div className="flex items-center gap-2 text-ivory-light/70">
            <Sun className="w-5 h-5 text-warm-gold" />
            <span className="font-medium font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Ethereal Sanctuary</span>
          </div>
        </div>
      </div>
      
      {/* Find out more arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-ivory-light/70 text-sm font-medium mb-2 font-cormorant-infant" style={{fontFamily: 'Cormorant Infant, serif'}}>Discover the mysteries</span>
        <div className="w-6 h-6 border-l-2 border-b-2 border-warm-gold transform rotate-[-45deg]"></div>
      </div>
    </section>
  );
}