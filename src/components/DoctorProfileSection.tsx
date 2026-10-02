import React from 'react';
import { doctorProfile, hospitalContact } from '../data/hospitalData';
import { CheckCircle2, Phone, Calendar } from 'lucide-react';

interface DoctorProfileSectionProps {
  onOpenBooking: () => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-[#0a0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
            Meet Your Dental Surgeon
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light">
            Dedicated to gentle, ethical, and patient-centered dental care.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="max-w-5xl mx-auto bg-[#111722] rounded-3xl border border-[#c5a059]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Authentic Doctor Consultation Desk Photograph */}
            <div className="lg:col-span-5 relative bg-[#0b0f16] h-full">
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full w-full overflow-hidden relative">
                <img
                  src={doctorProfile.image}
                  alt="Doctor at Sri Anuradha Dental Hospital Consultation Suite"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e141d] via-transparent to-transparent lg:hidden" />
              </div>
            </div>

            {/* Right: Doctor Information & Ethos */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#c5a059]">
                  {doctorProfile.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#faf8f5]">
                  Sri Anuradha Clinical Dental Director
                </h3>
                <p className="text-xs sm:text-sm text-[#d8b46d] font-medium pt-1">
                  {doctorProfile.qualifications}
                </p>
              </div>

              {/* Bio & Patient-Care Ethos */}
              <p className="text-sm sm:text-base text-[#cfc9be] leading-relaxed">
                {doctorProfile.bio}
              </p>

              <div className="p-4 rounded-xl bg-[#161e2a] border border-[#232f3f] space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#c5a059] font-bold">
                  Clinical Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {doctorProfile.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#e5dfd5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Philosophy Quote */}
              <blockquote className="border-l-2 border-[#c5a059] pl-4 py-1 text-xs sm:text-sm italic text-[#9eb0c6]">
                "Every patient deserves clear communication, gentle treatment techniques, and long-term restorative solutions that protect natural teeth."
              </blockquote>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-[#0a0d11] font-semibold text-sm shadow-md hover:shadow-[#c5a059]/25 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Doctor</span>
                </button>

                <a
                  href={`tel:${hospitalContact.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#17202b] text-[#faf8f5] hover:bg-[#1e2736] border border-[#2f3d4f] text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call {hospitalContact.phoneFormatted}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
