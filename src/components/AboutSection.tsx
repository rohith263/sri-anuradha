import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onNavigateToDoctor: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onNavigateToDoctor,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Doctor Consultation & Reception Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Main Consultation Desk Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#121822] shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/doctor-consultation-desk.webp"
                    alt="Doctor at Sri Anuradha Dental Hospital Consultation Suite"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#0e141d]/90 border-t border-[#232f3f] flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-[#c5a059] font-semibold">Consultation Chamber</p>
                    <p className="text-sm font-serif-luxury text-[#faf8f5]">Personalized diagnostic discussions</p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] rounded bg-[#1c2635] text-[#d8b46d] border border-[#c5a059]/30">
                    Kavadiguda Clinic
                  </span>
                </div>
              </div>

              {/* Overlapping Reception Welcome Image */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-8 sm:w-2/3 rounded-xl overflow-hidden border-2 border-[#1a2330] shadow-2xl bg-[#0f151e]">
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src="/images/reception-doctor-welcome.jpg"
                    alt="Sri Anuradha Dental Hospital Reception and Welcome Area"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#0d121a]/95 text-xs text-[#d8cfc4] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span>Reception & Patient Care Welcome</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
                About The Hospital
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight leading-tight">
                A dental hospital built around patient care
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#cfc9be] leading-relaxed">
              At <strong className="text-[#faf8f5] font-semibold">Sri Anuradha Dental Hospital</strong>, we believe dental treatment should be transparent, calm, and grounded in clinical precision. Situated in the heart of Kavadiguda, Hyderabad, our hospital provides comprehensive dental care tailored to your individual oral health needs.
            </p>

            <p className="text-sm sm:text-base text-[#9eb0c6] leading-relaxed">
              From routine preventative evaluations and modern root canal therapies to cosmetic smile restorations and implant rehabilitations, our clinical operatory is equipped with modern ergonomic chairs and hospital-grade sterilization protocols to ensure your safety and comfort at every step.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#121822] border border-[#212c3b]">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf8f5]">Honest Treatment Planning</h4>
                  <p className="text-xs text-[#8f9cae] mt-0.5">Clear diagnosis with no unwarranted procedures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#121822] border border-[#212c3b]">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf8f5]">Patient Comfort First</h4>
                  <p className="text-xs text-[#8f9cae] mt-0.5">Gentle clinical touch designed to minimize anxiety.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#121822] border border-[#212c3b]">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf8f5]">Sterile Clinical Protocols</h4>
                  <p className="text-xs text-[#8f9cae] mt-0.5">Strict multi-barrier infection control standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#121822] border border-[#212c3b]">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf8f5]">Accessible Healthcare</h4>
                  <p className="text-xs text-[#8f9cae] mt-0.5">Conveniently located at Union Bank Building, Kavadiguda.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-[#0a0d11] font-semibold text-sm shadow-md hover:shadow-[#c5a059]/25 transition-all"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToDoctor}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#151c27] text-[#faf8f5] hover:bg-[#1e2736] border border-[#2f3d4f] text-sm font-medium transition-colors"
              >
                <span>Meet the Doctor</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
