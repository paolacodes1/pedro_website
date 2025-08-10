'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Heart } from 'lucide-react';

export function UrbanHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-stone-100 to-amber-50">
      {/* Organic background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-lime-200/30 to-emerald-300/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-yellow-200/30 to-orange-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-slate-300/20 to-stone-300/20 rounded-full filter blur-2xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Floating organic elements */}
      <motion.div
        className="absolute top-32 left-16"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="w-3 h-3 bg-lime-500 rounded-full opacity-40" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-32"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      >
        <div className="w-4 h-4 bg-emerald-400 rounded-full opacity-30" />
      </motion.div>

      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
        style={{ y, opacity }}
      >
        <div className="text-center space-y-12 max-w-6xl">
          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-slate-900 leading-tight mb-6">
              Pedro Tisott
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-500 to-yellow-500 mx-auto rounded-full" />
          </motion.div>
          
          {/* Services with icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-wrap gap-8 justify-center items-center text-lg md:text-xl"
          >
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-stone-200/50">
              <Sun className="text-yellow-600 w-6 h-6" />
              <span className="text-slate-700 font-medium">Reiki Healing</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-stone-200/50">
              <Leaf className="text-emerald-600 w-6 h-6" />
              <span className="text-slate-700 font-medium">Tarot Reading</span>
            </div>
          </motion.div>
          
          {/* Refined tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-slate-800 leading-relaxed">
              Contemporary Wellness
              <br />
              <span className="text-slate-600">for the Modern Soul</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Where ancient healing wisdom meets urban sanctuary. 
              Experience transformation in a space designed for today's seeker.
            </p>
          </motion.div>
          
          {/* Elegant CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button 
              size="lg" 
              className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 text-lg font-medium rounded-full transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Begin Your Journey
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 px-10 py-4 text-lg font-medium rounded-full transition-all duration-500 hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center items-center gap-8 pt-16"
          >
            <div className="flex items-center gap-2 text-slate-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-light">Certified Practitioner</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2 text-slate-500">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-light">5+ Years Experience</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2 text-slate-500">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-light">Urban Sanctuary</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-light">Explore</div>
        <div className="w-px h-16 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}