import React from 'react';
import { Star, Building, Sparkles, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="border-y border-[#c5a059]/20 bg-[#0e131b] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center md:text-left">
          
          {/* Trust Point 1: Google Reviews Verified */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#1b2533] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] flex-shrink-0">
              <Star className="w-5 h-5 fill-[#c5a059]" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1">
                <span className="font-bold text-base text-[#faf8f5]">Patient Trusted</span>
              </div>
              <p className="text-xs text-[#8e9cb0] mt-0.5">Top-rated patient feedback on Google</p>
            </div>
          </div>

          {/* Trust Point 2: Modern Clinical Operatory */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#1b2533] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-[#faf8f5]">Modern Operatory</span>
              <p className="text-xs text-[#8e9cb0] mt-0.5">Ergonomic chairs & precision dental units</p>
            </div>
          </div>

          {/* Trust Point 3: Comprehensive Care */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#1b2533] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] flex-shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-[#faf8f5]">Full Spectrum Care</span>
              <p className="text-xs text-[#8e9cb0] mt-0.5">General, Root Canal, Crowns & Aligners</p>
            </div>
          </div>

          {/* Trust Point 4: Central Hyderabad Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#1b2533] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-[#faf8f5]">Kavadiguda Center</span>
              <p className="text-xs text-[#8e9cb0] mt-0.5">1st Flr, Union Bank Bldg, Hyderabad</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
