import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MessageSquare, MapPin, Clock } from 'lucide-react';
import { hospitalContact } from '../data/hospitalData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (preselectedTreatment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'doctor', label: 'Doctor' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-bar for clinical hours & emergency call */}
      <div className="bg-[#080b0e] text-[#a0aec0] text-xs border-b border-[#232d3a]/60 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#cfc9be]">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              Union Bank Building, Kavadiguda, Hyderabad
            </span>
            <span className="flex items-center gap-1.5 text-[#a6b0be]">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              Mon–Sat: 10:00 AM – 8:30 PM | Sun: 10:00 AM – 2:00 PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${hospitalContact.whatsappNumber}?text=Hello%20Sri%20Anuradha%20Dental%20Hospital,%20I%20would%20like%20to%20enquire%20about%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cfc9be] hover:text-[#25D366] transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3 text-[#25D366]" />
              WhatsApp Helpdesk
            </a>
            <span className="text-[#3a4756]">|</span>
            <a
              href={`tel:${hospitalContact.phone}`}
              className="text-[#c5a059] hover:text-[#d8b46d] font-semibold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {hospitalContact.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c1015]/95 backdrop-blur-md shadow-lg border-b border-[#c5a059]/20 py-3'
            : 'bg-[#0d1218]/80 backdrop-blur-sm border-b border-[#232d3a]/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1b2430] to-[#0e131a] border border-[#c5a059]/40 flex items-center justify-center p-1.5 shadow-inner group-hover:border-[#c5a059] transition-all">
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
              <span className="block text-lg sm:text-xl font-serif-luxury font-bold tracking-wide text-[#faf8f5] group-hover:text-[#c5a059] transition-colors leading-tight">
                SRI ANURADHA
              </span>
              <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                Dental Hospital
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#faf8f5] font-semibold'
                      : 'text-[#aebacd] hover:text-[#faf8f5] hover:bg-[#1a232f]/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#c5a059] to-[#e6ca7d] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${hospitalContact.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#e5dfd5] bg-[#171f2a] hover:bg-[#1e2a38] border border-[#313e50] rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0a0d11] bg-gradient-to-r from-[#c5a059] via-[#d8b46d] to-[#c5a059] hover:from-[#d8b46d] hover:to-[#b38f46] rounded-lg shadow-md shadow-[#c5a059]/15 hover:shadow-[#c5a059]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0a0d11]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#cfc9be] hover:text-[#faf8f5] hover:bg-[#17202b] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e131a] border-b border-[#c5a059]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-[#232d3a]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-left text-sm font-medium rounded-md transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#1b2533] text-[#c5a059] font-semibold border-l-2 border-[#c5a059]'
                      : 'text-[#cfc9be] hover:bg-[#161e29]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-[#0a0d11] font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${hospitalContact.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#17202b] text-[#faf8f5] border border-[#2f3d4e] text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  Call Hospital
                </a>
                <a
                  href={`https://wa.me/${hospitalContact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#12281c] text-[#a9dfbf] border border-[#25d366]/30 text-xs font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25d366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
