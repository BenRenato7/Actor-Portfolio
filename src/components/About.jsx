import React from 'react';
import { actorInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            ABOUT
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p
                className="text-slate-300 text-lg leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {actorInfo.bio}
              </p>
              <div className="pt-4">
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  CONTACT INFORMATION
                </h3>
                <div className="space-y-2 text-slate-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p>
                    <span className="text-rose-400 font-semibold">Email:</span> {actorInfo.email}
                  </p>
                  <p>
                    <span className="text-rose-400 font-semibold">Phone:</span> {actorInfo.phone}
                  </p>
                  <p>
                    <span className="text-rose-400 font-semibold">Location:</span> {actorInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={actorInfo.headshots[4].url}
                alt="Ben Renato"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;