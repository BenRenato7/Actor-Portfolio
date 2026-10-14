import React from 'react';
import { Quote } from 'lucide-react';
import { actorInfo } from '../data/mock';

const InTheirWords = () => {
  return (
    <section id="in-their-words" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-200 mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            IN THEIR WORDS
          </h2>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What collaborators say
          </p>
        </div>

        <div className="space-y-8">
          {actorInfo.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 rounded-lg p-8 md:p-12 hover:border-slate-700 transition-all duration-300"
            >
              <div className="absolute top-6 left-6 opacity-10">
                <Quote size={60} className="text-slate-200" />
              </div>

              <div className="mb-6">
                <span
                  className="inline-block px-4 py-1 bg-slate-800 text-slate-200 text-xs font-bold tracking-wider rounded-full"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {testimonial.project} · {testimonial.type}
                </span>
              </div>

              <blockquote className="relative z-10 mb-6">
                <p
                  className="text-slate-200 text-lg md:text-xl leading-relaxed italic"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="border-t border-slate-800 pt-4">
                <p
                  className="text-slate-400 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InTheirWords;
