'use client'
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Heart } from 'lucide-react';

export function SimpleUrbanHero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-100 via-stone-200 to-amber-100 flex items-center justify-center">
      {/* Simple background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-lime-300/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl" />
      
      <div className="relative z-10 text-center space-y-12 max-w-4xl px-4">
        {/* Main title */}
        <div>
          <h1 className="font-montserrat text-6xl md:text-8xl font-bold text-slate-900 mb-6">
            Pedro Tisott
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-lime-600 to-yellow-600 mx-auto rounded-full" />
        </div>
        
        {/* Services */}
        <div className="flex flex-wrap gap-8 justify-center items-center text-xl">
          <div className="flex items-center gap-3 bg-white/80 px-8 py-4 rounded-full border border-stone-300">
            <Sun className="text-yellow-700 w-6 h-6" />
            <span className="text-slate-800 font-semibold">Reiki Healing</span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 px-8 py-4 rounded-full border border-stone-300">
            <Leaf className="text-emerald-700 w-6 h-6" />
            <span className="text-slate-800 font-semibold">Tarot Reading</span>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-montserrat font-medium text-slate-800">
            Contemporary Wellness
            <br />
            <span className="text-slate-700">for the Modern Soul</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Where ancient healing wisdom meets urban sanctuary. 
            Experience transformation in a space designed for today's seeker.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-4 text-xl font-medium rounded-full"
          >
            Begin Your Journey
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-2 border-slate-700 text-slate-800 hover:bg-slate-800 hover:text-white px-12 py-4 text-xl font-medium rounded-full"
          >
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 pt-12">
          <div className="flex items-center gap-2 text-slate-600">
            <Heart className="w-5 h-5" />
            <span className="font-medium">Certified Practitioner</span>
          </div>
          <div className="w-px h-6 bg-slate-400" />
          <div className="flex items-center gap-2 text-slate-600">
            <Leaf className="w-5 h-5" />
            <span className="font-medium">5+ Years Experience</span>
          </div>
          <div className="w-px h-6 bg-slate-400" />
          <div className="flex items-center gap-2 text-slate-600">
            <Sun className="w-5 h-5" />
            <span className="font-medium">Urban Sanctuary</span>
          </div>
        </div>
      </div>
    </section>
  );
}