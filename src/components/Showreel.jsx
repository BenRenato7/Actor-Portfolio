import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { actorInfo } from '../data/mock';

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            SHOWREEL
          </h2>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {actorInfo.showreel.title}
          </p>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img
                src={actorInfo.showreel.thumbnail}
                alt="Showreel Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-rose-700 group-hover:bg-rose-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          ) : (
            actorInfo.showreel.isDirectVideo ? (
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={actorInfo.showreel.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                className="w-full h-full"
                src={`${actorInfo.showreel.videoUrl}?autoplay=1`}
                title="Actor Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          )}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/@benjaminpirie-renato224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            View more videos on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showreel;