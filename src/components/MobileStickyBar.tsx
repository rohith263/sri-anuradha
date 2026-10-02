import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { hospitalContact } from '../data/hospitalData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0c1015]/95 backdrop-blur-lg border-t border-[#c5a059]/25 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Button */}
        <a
          href={`tel:${hospitalContact.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#141b24] active:bg-[#1c2633] border border-[#2b3747] text-[#faf8f5] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c5a059] mb-0.5" />
          <span className="text-[11px] font-medium tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${hospitalContact.whatsappNumber}?text=Hello%20Sri%20Anuradha%20Dental%20Hospital,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#0f241a] active:bg-[#163626] border border-[#25D366]/40 text-[#d4f8e3] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-medium tracking-tight">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-[#c5a059] via-[#d8b46d] to-[#c5a059] text-[#0a0d11] active:opacity-90 font-semibold shadow-md shadow-[#c5a059]/20"
        >
          <Calendar className="w-4 h-4 text-[#0a0d11] mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Book Visit</span>
        </button>
      </div>
    </div>
  );
};
