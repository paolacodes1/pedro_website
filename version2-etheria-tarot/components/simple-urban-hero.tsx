'use client'

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
          <h1 className="font-poiret-one text-6xl md:text-8xl font-bold text-ivory-light mb-6">
            Etheria Tarot
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-rich-burgundy to-warm-gold mx-auto rounded-full" />
        </div>
        
        {/* Tagline */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-poiret-one font-medium text-ivory-light">
            Mystical Guidance
            <br />
            <span className="text-warm-gold">for the Awakened Soul</span>
          </h2>
          <p className="text-xl text-ivory-light/80 max-w-2xl mx-auto font-cormorant-infant">
            Profound readings with Thoth Tarot, channeled with intuition, symbols and spiritual connection.
            From 7€ (mini reading) to 15€ (complete reading). All readings delivered via audio + written summary.
            Choose your reading and book your consultation via DM.
          </p>
        </div>
        
        {/* Service badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Oracle of Etherias Badge */}
          <div className="group bg-rich-burgundy/20 border border-warm-gold/30 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-rich-burgundy/30 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-warm-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14 10.202a1 1 0 000-1.732l-4.445-2.634z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-ivory-light font-cormorant-infant font-medium">Oracle of Etherias</span>
            </div>
          </div>
          
          {/* Thoth Tarot Badge */}
          <div className="group bg-rich-burgundy/20 border border-warm-gold/30 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-rich-burgundy/30 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-warm-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-ivory-light font-cormorant-infant font-medium">Thoth Tarot</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Find out more arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-ivory-light/70 text-sm font-medium mb-2 font-cormorant-infant">Discover the mysteries</span>
        <div className="w-6 h-6 border-l-2 border-b-2 border-warm-gold transform rotate-[-45deg]"></div>
      </div>
    </section>
  );
}