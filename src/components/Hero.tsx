import React from 'react';
import { Plane, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

export default function Hero({ onStartQuiz }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-amber-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-amber-400 mr-3" />
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            Find Your Perfect
          </h1>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent mb-8">
          Escape
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Let our AI discover destinations that match your mood, budget, and dreams. 
          From tropical paradises to cultural wonders, your next adventure awaits.
        </p>
        
        <button
          onClick={onStartQuiz}
          className="group relative px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center space-x-3">
            <Plane className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            <span>Start Your Journey</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">50M+</div>
            <div className="text-blue-100">Travelers Inspired</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">200+</div>
            <div className="text-blue-100">Dream Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-amber-300 rounded-full animate-pulse delay-700"></div>
    </div>
  );
}