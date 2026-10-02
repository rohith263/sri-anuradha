import React from 'react';
import { hospitalContact, treatmentsList } from '../data/hospitalData';
import { Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a0e] text-[#8e9cae] border-t border-[#1a2330] pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#141d27] border border-[#c5a059]/40 flex items-center justify-center p-1.5 shadow-inner">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <path
                    d="M18 6 C13 6 10 9 10 14 C10 18.5 12 22 13.5 26 C14.5 28.5 15.2 30 16.5 30 C17.5 30 17.7 27.5 18 26 C18.3 27.5 18.5 30 19.5 30 C20.8 30 21.5 28.5 22.5 26 C24 22 26 18.5 26 14 C26 9 23 6 18 6 Z"
                    stroke="#c5a059"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 13 C15 13 16.5 14.5 18 14.5 C19.5 14.5 21 13 21 13" stroke="#e6ca7d" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="block text-lg font-serif-luxury font-bold text-[#faf8f5]">
                  SRI ANURADHA
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                  Dental Hospital
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#9eb0c6] leading-relaxed max-w-sm">
              Modern dentistry, delivered with precision and care. Comprehensive oral health treatments in a calm, modern clinical environment at Kavadiguda, Hyderabad.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${hospitalContact.phone}`}
                className="p-2.5 rounded-lg bg-[#111722] hover:bg-[#182333] border border-[#212f42] text-[#c5a059] transition-colors"
                title="Call Hospital"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${hospitalContact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111722] hover:bg-[#182333] border border-[#212f42] text-[#25d366] transition-colors"
                title="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={hospitalContact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111722] hover:bg-[#182333] border border-[#212f42] text-[#e6ca7d] transition-colors"
                title="Find on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#faf8f5]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'treatments', 'doctor', 'gallery', 'reviews', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="capitalize text-[#8e9cae] hover:text-[#c5a059] transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#faf8f5]">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {treatmentsList.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onNavigate('treatments')}
                    className="text-[#8e9cae] hover:text-[#c5a059] transition-colors text-left truncate max-w-full block"
                  >
                    {t.category}: {t.title.split('&')[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#faf8f5]">
              Hospital Location
            </h4>
            <address className="not-italic text-xs text-[#9eb0c6] leading-relaxed">
              1st Floor, Union Bank Building,<br />
              1-3-176/35/22, Lakshmi Residency,<br />
              Bhagyalaxmi Nagar, Kavadiguda,<br />
              Hyderabad, Telangana 500080
            </address>

            <div className="pt-2 text-xs text-[#c5a059] space-y-1">
              <p className="font-semibold">Ph: {hospitalContact.phoneFormatted}</p>
              <button
                onClick={onOpenBooking}
                className="mt-2 block text-xs underline text-[#faf8f5] hover:text-[#c5a059]"
              >
                Schedule Appointment →
              </button>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#17202d] text-center space-y-3">
          <p className="text-[11px] text-[#607185] max-w-3xl mx-auto leading-relaxed">
            <strong>Medical Disclaimer:</strong> The information provided on this website is for general educational and informational purposes only and does not constitute formal medical or dental diagnostic advice. An individual clinical examination by a qualified dental surgeon is required for diagnosis and treatment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#607185] pt-2">
            <p>© {new Date().getFullYear()} Sri Anuradha Dental Hospital. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:underline"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
