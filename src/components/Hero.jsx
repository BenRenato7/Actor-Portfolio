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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Desktop: Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Photo Only */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Dramatic Photo */}
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_actor-hub-11/artifacts/ydmyolc6_YELLOWBELLY%20PHOTO%20-%20BEN%20RENATO-5%20copy.jpg"
                alt="Ben Renato - Dramatic Headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Name, Tagline, Buttons, Bio */}
          <div className="flex items-start justify-center order-1 lg:order-2">
            <div className="text-center space-y-8 w-full max-w-xl">
              <div>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-200 mb-6 tracking-tight"
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.02em' }}
                >
                  {actorInfo.name.toUpperCase()}
                </h1>
                <p
                  className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-8 tracking-wide"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {actorInfo.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('showreel').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-slate-200 hover:bg-white text-black font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Watch Showreel
                </button>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:border-white text-slate-300 hover:text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Get in Touch
                </button>
              </div>

              {/* Bio - Now on right side for all screen sizes */}
              <div className="mt-8">
                <p
                  className="text-slate-300 text-sm sm:text-base leading-relaxed text-left"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {actorInfo.bio}
                </p>
              </div>
            </div>
          </div>
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
