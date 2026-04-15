import React from 'react';
import { Download } from 'lucide-react';
import { actorInfo } from '../data/mock';

const Resume = () => {
  const handleDownloadResume = () => {
    // Download the actual resume PDF
    const link = document.createElement('a');
    link.href = actorInfo.resumePDF;
    link.download = 'Ben_Renato_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            RESUME
          </h2>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-700 hover:bg-rose-600 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 mt-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Download size={20} />
            Download Full Resume
          </button>
        </div>

        <div className="space-y-12">
          {/* Training */}
          <div>
            <h3
              className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-rose-700"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              TRAINING
            </h3>
            <div className="space-y-4">
              {actorInfo.resume.training.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.institution}
                      </h4>
                      <p className="text-slate-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.program}
                      </p>
                    </div>
                    <span className="text-rose-400 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credits */}
          <div>
            <h3
              className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-rose-700"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              CREDITS
            </h3>
            <div className="space-y-4">
              {actorInfo.resume.credits.map((credit) => (
                <div
                  key={credit.id}
                  className="bg-slate-900 p-6 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-rose-700 text-white text-xs font-bold rounded-full">
                          {credit.type.toUpperCase()}
                        </span>
                        <span className="text-rose-400 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {credit.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {credit.title}
                      </h4>
                      <p className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="text-slate-500">Role:</span> {credit.role}
                      </p>
                      {credit.director && (
                        <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Director: {credit.director}
                        </p>
                      )}
                      {credit.network && (
                        <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Network: {credit.network}
                        </p>
                      )}
                      {credit.venue && (
                        <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Venue: {credit.venue}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3
              className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-rose-700"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              SPECIAL SKILLS
            </h3>
            <div className="flex flex-wrap gap-3">
              {actorInfo.resume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-900 text-slate-300 rounded-full hover:bg-rose-700 hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;