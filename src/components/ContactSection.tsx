import React from 'react';
import { hospitalContact } from '../data/hospitalData';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0c1016] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Location & Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
            Visit Sri Anuradha Dental Hospital
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light">
            Conveniently located on the 1st floor of the Union Bank Building in Kavadiguda, Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hospital Contact Details & Quick Triggers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111722] border border-[#232f3f] shadow-xl space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#182230] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] flex-shrink-0 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif-luxury font-bold text-[#faf8f5]">
                    Sri Anuradha Dental Hospital
                  </h3>
                  <p className="text-xs uppercase text-[#c5a059] font-semibold mt-0.5">
                    1st Floor • Union Bank Building
                  </p>
                  <address className="not-italic text-sm text-[#cfc9be] mt-2 leading-relaxed">
                    1-3-176/35/22, Lakshmi Residency,<br />
                    Bhagyalaxmi Nagar, Kavadiguda,<br />
                    Hyderabad, Telangana 500080
                  </address>
                </div>
              </div>

              {/* Action Buttons for Directions, Call & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${hospitalContact.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#17202d] hover:bg-[#1e2a3a] border border-[#2e3b4d] text-xs font-semibold text-[#faf8f5] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call: {hospitalContact.phoneFormatted}</span>
                </a>

                <a
                  href={`https://wa.me/${hospitalContact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0f241a] hover:bg-[#163626] border border-[#25d366]/40 text-xs font-semibold text-[#d4f8e3] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25d366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <a
                href={hospitalContact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-[#0a0d11] font-bold text-xs shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving / Metro Directions</span>
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#111722] border border-[#232f3f] shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#c5a059]" />
                <h4 className="text-base font-serif-luxury font-bold text-[#faf8f5]">
                  Clinical Hours
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-[#1c2635]">
                  <span className="text-[#aebacd]">Monday – Saturday</span>
                  <span className="text-[#faf8f5] font-semibold">10:00 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#aebacd]">Sunday</span>
                  <span className="text-[#c5a059] font-medium">10:00 AM – 2:00 PM</span>
                </div>
              </div>
              <p className="text-[11px] text-[#718096] italic">
                * Prior appointment recommended for Sunday consultations & complex procedures.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-[#111722] border border-[#232f3f] shadow-2xl">
              <div className="p-4 bg-[#0e141d] border-b border-[#232f3f] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-xs font-semibold text-[#faf8f5]">
                    Interactive Map: Kavadiguda, Hyderabad
                  </span>
                </div>
                <a
                  href={hospitalContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c5a059] hover:underline font-medium"
                >
                  Open in Maps
                </a>
              </div>

              {/* Map View */}
              <div className="aspect-[16/11] sm:aspect-[16/10] w-full bg-[#0a0d12] relative">
                <iframe
                  title="Sri Anuradha Dental Hospital Location Map"
                  src="https://maps.google.com/maps?q=17.4213028,78.4927673&hl=en&z=16&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-90"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-[#0e141d] text-xs text-[#8f9cae] flex items-center justify-between">
                <span>Landmark: 1st Floor, Union Bank Building, Kavadiguda</span>
                <span className="text-[#c5a059]">PIN: 500080</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
