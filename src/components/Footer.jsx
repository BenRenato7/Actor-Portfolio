import React from 'react';
import { Film, Instagram, Video, Linkedin } from 'lucide-react';
import { actorInfo } from '../data/mock';

const Footer = () => {
  const getIcon = (iconName) => {
    const icons = {
      film: Film,
      video: Video,
      instagram: Instagram,
      linkedin: Linkedin
    };
    const Icon = icons[iconName] || Film;
    return <Icon size={20} />;
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Name */}
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold text-white mb-2"
              style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}
            >
              {actorInfo.name.toUpperCase()}
            </h3>
            <p className="text-slate-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {actorInfo.tagline}
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {actorInfo.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 hover:bg-rose-700 text-slate-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label={social.platform}
              >
                {getIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © {new Date().getFullYear()} {actorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;