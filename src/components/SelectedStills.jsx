import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { actorInfo } from '../data/mock';

const SelectedStills = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="selected-stills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-200 mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            SELECTED STILLS
          </h2>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Production Photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actorInfo.selectedStills.map((still) => (
            <div
              key={still.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-black border border-slate-800 hover:border-slate-600 transition-all duration-300"
              onClick={() => setSelectedImage(still)}
            >
              <img
                src={still.url}
                alt={`${still.project} - ${still.character}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3
                    className="text-slate-200 font-bold text-xl mb-1"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {still.project}
                  </h3>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {still.character} • {still.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black border-slate-800">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/80 hover:bg-slate-900 rounded-full text-slate-200 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.url}
                alt={`${selectedImage.project} - ${selectedImage.character}`}
                className="w-full h-auto"
              />
              <div className="p-6 bg-black">
                <h3
                  className="text-slate-200 font-bold text-2xl mb-2"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {selectedImage.project}
                </h3>
                <p className="text-slate-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedImage.character} • {selectedImage.year}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default SelectedStills;
