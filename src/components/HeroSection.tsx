import React from 'react';
import { Calendar, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { hospitalContact } from '../data/hospitalData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreTreatments,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-[#0c1016]">
      {/* Subtle ambient luxury lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#1f2c3d]/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background marble texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Location & Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161f2b]/90 border border-[#c5a059]/30 text-xs sm:text-sm text-[#e8dfd1] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
              <span className="font-medium">Kavadiguda, Hyderabad</span>
              <span className="text-[#41536b]">•</span>
              <span className="text-[#aebacd]">Comprehensive Dental Hospital</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight leading-[1.08]">
                Sri Anuradha <br />
                <span className="gold-gradient-text">Dental Hospital</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#cfc9be] font-light max-w-2xl mx-auto lg:mx-0 pt-2 leading-relaxed">
                Modern dentistry, delivered with precision and care.
              </p>
            </div>

            {/* Honest clinical highlight points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-lg bg-[#121820]/70 border border-[#232f3e]">
                <p className="text-xs uppercase text-[#c5a059] font-semibold tracking-wider">Facility</p>
                <p className="text-sm text-[#e5dfd5] font-medium mt-0.5">Advanced Operatory</p>
              </div>
              <div className="p-3 rounded-lg bg-[#121820]/70 border border-[#232f3e]">
                <p className="text-xs uppercase text-[#c5a059] font-semibold tracking-wider">Sterilization</p>
                <p className="text-sm text-[#e5dfd5] font-medium mt-0.5">Hospital-Grade Hygiene</p>
              </div>
              <div className="p-3 rounded-lg bg-[#121820]/70 border border-[#232f3e]">
                <p className="text-xs uppercase text-[#c5a059] font-semibold tracking-wider">Care Approach</p>
                <p className="text-sm text-[#e5dfd5] font-medium mt-0.5">Patient-First Focus</p>
              </div>
            </div>

            {/* Conversion Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-[#0a0d11] bg-gradient-to-r from-[#c5a059] via-[#d8b46d] to-[#c5a059] hover:from-[#d8b46d] hover:to-[#b38f46] rounded-xl shadow-lg shadow-[#c5a059]/20 hover:shadow-[#c5a059]/35 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-[#0a0d11]" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${hospitalContact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-medium text-[#faf8f5] bg-[#151c26] hover:bg-[#1c2634] border border-[#2f3d4f] hover:border-[#c5a059]/50 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5 text-[#c5a059]" />
                <span>Call {hospitalContact.phoneFormatted}</span>
              </a>
            </div>

            {/* Quick Micro Info */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#8f9cae]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                1st Floor, Union Bank Building, Kavadiguda
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                Open Mon–Sat till 8:30 PM
              </span>
            </div>

          </div>

          {/* Right Hero Column: Authentic Hospital Imagery Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold decorative border accents */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#c5a059]/30 via-transparent to-[#c5a059]/30 rounded-2xl blur-[2px]" />
              
              {/* Main Authentic Image Card: Hospital Signage & Interior Marble */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111720] border border-[#c5a059]/30 shadow-2xl group">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#0c1015]">
                  <img
                    src="/images/hospital-signage-marble.webp"
                    alt="Sri Anuradha Dental Hospital Metallic Gold Signage on Dark Marble Wall"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>
                
                {/* Image caption badge overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/80 to-transparent p-4 sm:p-5">
                  <p className="text-xs uppercase font-semibold tracking-wider text-[#c5a059]">
                    Authentic Hospital Facility
                  </p>
                  <p className="text-sm sm:text-base font-serif-luxury text-[#faf8f5] mt-0.5">
                    Premium Dark Marble & Metallic Gold Interior Ambience
                  </p>
                </div>
              </div>

              {/* Floating Operatory Preview Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 max-w-[240px] sm:max-w-[270px] p-2.5 rounded-xl bg-[#0f151d]/95 backdrop-blur-md border border-[#c5a059]/30 shadow-2xl hidden sm:flex items-center gap-3">
                <img
                  src="/images/treatment-operatory-chairs.webp"
                  alt="Modern Dental Operatory at Sri Anuradha Dental Hospital"
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-[#2b3848]"
                />
                <div className="text-left overflow-hidden">
                  <p className="text-[10px] uppercase font-bold text-[#c5a059] tracking-wider">Clinical Suite</p>
                  <p className="text-xs text-[#faf8f5] font-medium truncate">Modern Dental Chairs</p>
                  <button
                    onClick={onExploreTreatments}
                    className="text-[11px] text-[#e6ca7d] hover:text-[#faf8f5] flex items-center gap-0.5 mt-0.5 font-medium"
                  >
                    View Treatments <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
