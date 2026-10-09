import React from 'react';
import { ChevronDown } from 'lucide-react';
import { actorInfo } from '../data/mock';

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${actorInfo.headshots[0].url}')`,
            backgroundPosition: 'center 15%',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight animate-fade-in"
          style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.02em' }}
        >
          {actorInfo.name.toUpperCase()}
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 tracking-wide animate-fade-in-delay"
          style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0.2s' }}
        >
          {actorInfo.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => document.getElementById('showreel').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-rose-700 hover:bg-rose-600 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Watch Showreel
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:border-rose-400 text-slate-300 hover:text-rose-400 font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-rose-400 transition-colors"
        aria-label="Scroll to gallery"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
