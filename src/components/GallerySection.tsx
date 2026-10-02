import React, { useState } from 'react';
import { authenticGallery } from '../data/hospitalData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? authenticGallery.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === authenticGallery.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0c1016] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Hospital Tour & Facility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
            Authentic Clinical Environment
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light">
            Explore our state-of-the-art operatory, dark marble interior ambience, and calm patient consultation suites in Kavadiguda.
          </p>
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Feature: Hospital Gold Signage & Marble (7 cols) */}
          <div 
            onClick={() => handleOpenLightbox(0)}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#111722] border border-[#232f3e] hover:border-[#c5a059]/50 shadow-xl cursor-pointer transition-all duration-300"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={authenticGallery[0].imageUrl}
                alt={authenticGallery[0].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <span className="text-xs uppercase text-[#c5a059] font-bold tracking-wider">
                {authenticGallery[0].category}
              </span>
              <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-[#faf8f5] mt-1">
                {authenticGallery[0].title}
              </h3>
              <p className="text-xs text-[#aebacd] mt-1 hidden sm:block">
                {authenticGallery[0].description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#e6ca7d] font-semibold">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </div>
            </div>
          </div>

          {/* Consultation Suite (5 cols) */}
          <div 
            onClick={() => handleOpenLightbox(1)}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#111722] border border-[#232f3e] hover:border-[#c5a059]/50 shadow-xl cursor-pointer transition-all duration-300"
          >
            <div className="aspect-[16/11] md:aspect-full md:h-full overflow-hidden">
              <img
                src={authenticGallery[1].imageUrl}
                alt={authenticGallery[1].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <span className="text-xs uppercase text-[#c5a059] font-bold tracking-wider">
                {authenticGallery[1].category}
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-[#faf8f5] mt-1">
                {authenticGallery[1].title}
              </h3>
              <p className="text-xs text-[#aebacd] mt-1 hidden sm:block">
                {authenticGallery[1].description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#e6ca7d] font-semibold">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </div>
            </div>
          </div>

          {/* Treatment Operatory & Chairs (6 cols) */}
          <div 
            onClick={() => handleOpenLightbox(2)}
            className="md:col-span-6 group relative rounded-2xl overflow-hidden bg-[#111722] border border-[#232f3e] hover:border-[#c5a059]/50 shadow-xl cursor-pointer transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={authenticGallery[2].imageUrl}
                alt={authenticGallery[2].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <span className="text-xs uppercase text-[#c5a059] font-bold tracking-wider">
                {authenticGallery[2].category}
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-[#faf8f5] mt-1">
                {authenticGallery[2].title}
              </h3>
              <p className="text-xs text-[#aebacd] mt-1 hidden sm:block">
                {authenticGallery[2].description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#e6ca7d] font-semibold">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </div>
            </div>
          </div>

          {/* Reception & Welcome Lounge (6 cols) */}
          <div 
            onClick={() => handleOpenLightbox(3)}
            className="md:col-span-6 group relative rounded-2xl overflow-hidden bg-[#111722] border border-[#232f3e] hover:border-[#c5a059]/50 shadow-xl cursor-pointer transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={authenticGallery[3].imageUrl}
                alt={authenticGallery[3].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <span className="text-xs uppercase text-[#c5a059] font-bold tracking-wider">
                {authenticGallery[3].category}
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-[#faf8f5] mt-1">
                {authenticGallery[3].title}
              </h3>
              <p className="text-xs text-[#aebacd] mt-1 hidden sm:block">
                {authenticGallery[3].description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#e6ca7d] font-semibold">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <div 
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-[#05070a]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#182230] text-[#cfc9be] hover:text-[#faf8f5] border border-[#2b394b] z-50 transition-colors"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Nav Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#182230]/80 hover:bg-[#1f2d40] text-[#faf8f5] border border-[#2b394b] z-50 transition-colors"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Nav Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#182230]/80 hover:bg-[#1f2d40] text-[#faf8f5] border border-[#2b394b] z-50 transition-colors"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Card */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden bg-[#111722] border border-[#c5a059]/40 shadow-2xl flex flex-col"
            >
              <div className="relative flex-1 bg-[#090c10] flex items-center justify-center overflow-hidden p-2">
                <img
                  src={authenticGallery[activeLightboxIndex].imageUrl}
                  alt={authenticGallery[activeLightboxIndex].title}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-5 bg-[#0e141d] border-t border-[#232f3f] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                    {authenticGallery[activeLightboxIndex].category}
                  </span>
                  <h4 className="text-lg font-serif-luxury font-bold text-[#faf8f5] mt-0.5">
                    {authenticGallery[activeLightboxIndex].title}
                  </h4>
                  <p className="text-xs text-[#aebacd] mt-1">
                    {authenticGallery[activeLightboxIndex].description}
                  </p>
                </div>
                <span className="text-xs text-[#718096] font-medium">
                  {activeLightboxIndex + 1} of {authenticGallery.length}
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
