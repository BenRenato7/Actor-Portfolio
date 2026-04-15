import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import { actorInfo } from '../data/mock';
import { Dialog, DialogContent } from './ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'casual', 'dramatic', 'professional'];

  const filteredHeadshots = filter === 'all'
    ? actorInfo.headshots
    : actorInfo.headshots.filter(shot => shot.category === filter);

  const handleDownload = (imageUrl, fileName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName || 'headshot.jpg';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            GALLERY
          </h2>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Professional Headshots
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-rose-700 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHeadshots.map((shot) => (
            <div
              key={shot.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(shot)}
            >
              <img
                src={shot.url}
                alt={shot.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {shot.category.charAt(0).toUpperCase() + shot.category.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-slate-900 border-slate-800">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-900/80 hover:bg-slate-800 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <button
                onClick={() => handleDownload(selectedImage.url, `${actorInfo.name}-${selectedImage.category}.jpg`)}
                className="absolute top-4 right-16 z-10 p-2 bg-slate-900/80 hover:bg-slate-800 rounded-full text-white transition-colors"
                title="Download"
              >
                <Download size={24} />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Gallery;