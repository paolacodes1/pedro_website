'use client'
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Heart } from 'lucide-react';

export function SimpleUrbanHero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-warm-ivory flex items-center justify-center">
      {/* Simple background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-sage-blue/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-antique-gold/30 rounded-full filter blur-3xl" />
      
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
              <stop offset="0%" stopColor="#B2D0D3" />
              <stop offset="50%" stopColor="#7E4C74" />
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
              <stop offset="0%" stopColor="#B2D0D3" />
              <stop offset="50%" stopColor="#7E4C74" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10 text-center space-y-12 max-w-4xl px-4">
        {/* Main title */}
        <div>
          <h1 className="font-montserrat text-6xl md:text-8xl font-bold text-charcoal mb-6">
            Pedro Tisott
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-deep-plum to-antique-gold mx-auto rounded-full" />
        </div>
        
        {/* Tagline */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-montserrat font-medium text-charcoal">
            Contemporary Wellness
            <br />
            <span className="text-deep-plum">for the Modern Soul</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Where ancient healing wisdom meets urban sanctuary. 
            Experience transformation in a space designed for today&apos;s seeker.
          </p>
        </div>
        
        {/* Services */}
        <div className="space-y-8">
          <div className="flex flex-wrap gap-8 justify-center items-center text-xl">
            <div className="flex items-center gap-3 bg-warm-ivory/90 backdrop-blur-sm px-8 py-4 rounded-full border border-sage-blue/40 shadow-lg">
              <Sun className="text-antique-gold w-6 h-6" />
              <span className="text-charcoal font-semibold">Reiki Healing</span>
            </div>
            <div className="flex items-center gap-3 bg-warm-ivory/90 backdrop-blur-sm px-8 py-4 rounded-full border border-sage-blue/40 shadow-lg">
              <Leaf className="text-deep-plum w-6 h-6" />
              <span className="text-charcoal font-semibold">Tarot Reading</span>
            </div>
          </div>
          
          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Reiki Healing Details */}
            <div className="bg-warm-ivory/70 backdrop-blur-sm rounded-2xl p-6 border border-sage-blue/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="text-antique-gold w-8 h-8" />
                <h3 className="text-2xl font-montserrat font-semibold text-charcoal">Reiki Healing</h3>
              </div>
              <p className="text-charcoal/80 mb-4">
                Experience the profound healing power of universal life energy. Through gentle touch and energy channeling, restore balance to your body, mind, and spirit.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-deep-plum">From $80</div>
                <div className="text-sm text-charcoal/60">Per session</div>
              </div>
            </div>

            {/* Tarot Reading Details */}
            <div className="bg-warm-ivory/70 backdrop-blur-sm rounded-2xl p-6 border border-sage-blue/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-deep-plum w-8 h-8" />
                <h3 className="text-2xl font-montserrat font-semibold text-charcoal">Tarot Reading</h3>
              </div>
              <p className="text-charcoal/80 mb-4">
                Gain clarity and insight into your life&apos;s journey through the ancient wisdom of tarot. Each reading reveals hidden patterns and illuminates your path.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-deep-plum">From $60</div>
                <div className="text-sm text-charcoal/60">Per session</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-deep-plum hover:bg-deep-plum/90 text-warm-ivory px-12 py-4 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Begin Your Journey
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-2 border-antique-gold text-charcoal hover:bg-antique-gold hover:text-charcoal px-12 py-4 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 pt-12">
          <div className="flex items-center gap-2 text-charcoal/70">
            <Heart className="w-5 h-5 text-deep-plum" />
            <span className="font-medium">Certified Practitioner</span>
          </div>
          <div className="w-px h-6 bg-sage-blue" />
          <div className="flex items-center gap-2 text-charcoal/70">
            <Sun className="w-5 h-5 text-antique-gold" />
            <span className="font-medium">Urban Sanctuary</span>
          </div>
        </div>
      </div>
      
      {/* Find out more arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-charcoal/70 text-sm font-medium mb-2">Find out more</span>
        <div className="w-6 h-6 border-l-2 border-b-2 border-deep-plum transform rotate-[-45deg]"></div>
      </div>
    </section>
  );
}