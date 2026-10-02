import React, { useState } from 'react';
import type { AppointmentFormData } from '../types';
import { treatmentsList, hospitalContact } from '../data/hospitalData';
import { Phone, MessageSquare, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

interface AppointmentSectionProps {
  initialTreatment?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialTreatment = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    treatment: initialTreatment || treatmentsList[0]?.title || 'General Dental Consultation',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timeSlots = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 4:30 PM)',
    'Evening (4:30 PM – 8:30 PM)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile phone number.');
      return;
    }
    if (!formData.preferredDate) {
      setError('Please select your preferred appointment date.');
      return;
    }

    setLoading(true);

    // Simulate reliable API / booking pipeline
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Appointment Enquiry - Sri Anuradha Dental Hospital*%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Preferred Date:* ${encodeURIComponent(formData.preferredDate)}%0A*Preferred Slot:* ${encodeURIComponent(formData.preferredTime)}%0A*Treatment:* ${encodeURIComponent(formData.treatment)}%0A*Message:* ${encodeURIComponent(formData.message || 'None')}`;
    window.open(`https://wa.me/${hospitalContact.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
      treatment: treatmentsList[0]?.title || 'General Dental Consultation',
      message: ''
    });
  };

  // Get tomorrow's date as min attribute for date picker
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#0a0d13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Appointment Reservation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
            Ready to take care of your smile?
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light">
            Schedule your visit with Sri Anuradha Dental Hospital. We will confirm your preferred time slot promptly.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-[#111722] border border-[#c5a059]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#163023] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mx-auto shadow-lg shadow-[#25D366]/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-serif-luxury font-bold text-[#faf8f5]">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-[#cfc9be]">
                  Thank you, <strong className="text-[#faf8f5]">{formData.fullName}</strong>. Our clinical coordinator will call you shortly at <strong className="text-[#c5a059]">{formData.phone}</strong> to confirm your slot for <strong className="text-[#faf8f5]">{formData.preferredDate}</strong> ({formData.preferredTime}).
                </p>
              </div>

              {/* Instant WhatsApp Option */}
              <div className="p-4 rounded-xl bg-[#0e141d] border border-[#232f3f] max-w-md mx-auto space-y-3">
                <p className="text-xs text-[#aebacd]">
                  Need faster confirmation or have urgent dental pain?
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-[#0a1f13] font-semibold text-xs shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details Instantly via WhatsApp</span>
                </button>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-medium text-[#aebacd] hover:text-[#faf8f5] underline"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Main Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-3.5 rounded-xl bg-[#2a1317] border border-[#e53e3e]/40 flex items-center gap-3 text-xs text-[#ffb8b8]">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#ff6b6b]" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e8dfd1] uppercase tracking-wider">
                    Full Name <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#17202d] border border-[#2b394b] text-[#faf8f5] placeholder-[#607185] text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e8dfd1] uppercase tracking-wider">
                    Phone Number <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 090598 12753"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#17202d] border border-[#2b394b] text-[#faf8f5] placeholder-[#607185] text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e8dfd1] uppercase tracking-wider">
                    Preferred Date <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#17202d] border border-[#2b394b] text-[#faf8f5] text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e8dfd1] uppercase tracking-wider">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#17202d] border border-[#2b394b] text-[#faf8f5] text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#111722] text-[#faf8f5]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Treatment / Reason */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e8dfd1] uppercase tracking-wider">
                    Treatment / Reason for Visit
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#17202d] border border-[#2b394b] text-[#faf8f5] text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  >
                    <option value="General Dental Consultation & Checkup" className="bg-[#111722]">
                      General Dental Consultation & Checkup
                    </option>
                    {treatmentsList.map((t) => (
                      <option key={t.id} value={t.title} className="bg-[#111722]">
                        {t.category}: {t.title}
                      </option>
                    ))}
                    <option value="Tooth Pain / Emergency Visit" className="bg-[#111722]">
                      Tooth Pain / Emergency Visit
                    </option>
                    <option value="Other / Routine Enquiry" className="bg-[#111722]">
                      Other / General Dental Enquiry
                    </option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="block text-xs font-semibold text-[#e8dfd1] uppercase tracking-wider">
                    Additional Symptoms or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe any discomfort, specific tooth concerns, or history..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#17202d] border border-[#2b394b] text-[#faf8f5] placeholder-[#607185] text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

              </div>

              {/* Submit Button & Hospital Call Option */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1f2a3a]">
                <div className="flex items-center gap-2 text-xs text-[#8f9cae]">
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Immediate query? Call: <a href={`tel:${hospitalContact.phone}`} className="text-[#e6ca7d] font-semibold hover:underline">{hospitalContact.phoneFormatted}</a></span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d8b46d] to-[#c5a059] text-[#0a0d11] font-bold text-sm shadow-lg hover:shadow-[#c5a059]/30 transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0a0d11]" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0a0d11]" />
                      <span>Request Appointment</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
