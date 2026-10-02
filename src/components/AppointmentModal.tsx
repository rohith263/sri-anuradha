import React from 'react';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatment = ''
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#05070a]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#111722] border border-[#c5a059]/40 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#182230] text-[#aebacd] hover:text-[#faf8f5] hover:bg-[#223042] transition-colors z-20"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <AppointmentSection initialTreatment={initialTreatment} />
        </div>

      </div>
    </div>
  );
};
