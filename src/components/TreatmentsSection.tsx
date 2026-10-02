import React, { useState } from 'react';
import { treatmentsList } from '../data/hospitalData';
import type { Treatment } from '../types';
import { 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Anchor, 
  Smile, 
  HeartHandshake, 
  Crosshair, 
  Clock, 
  Check, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const categories = ['All', ...Array.from(new Set(treatmentsList.map(t => t.category)))];

  const filteredTreatments = selectedCategory === 'All'
    ? treatmentsList
    : treatmentsList.filter(t => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#c5a059]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#c5a059]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#c5a059]" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-[#c5a059]" />;
      case 'Smile': return <Smile className="w-6 h-6 text-[#c5a059]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#c5a059]" />;
      case 'Crosshair': return <Crosshair className="w-6 h-6 text-[#c5a059]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#0c1016] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Clinical Services & Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
            Comprehensive Dental Care, Thoughtfully Delivered
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light leading-relaxed">
            From routine preventive checkups to complex restorations and cosmetic enhancements, explore our specialized clinical treatments.
          </p>
        </div>

        {/* Category Pill Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#c5a059] text-[#0a0d11] font-semibold shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#151c27] text-[#aebacd] hover:text-[#faf8f5] hover:bg-[#1f2937] border border-[#232f3e]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Editorial Layout: Alternating Highlight Card & Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="group rounded-2xl bg-[#111722] border border-[#222e3e] hover:border-[#c5a059]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#05070a]/80"
            >
              <div className="space-y-4">
                {/* Header with Icon & Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#182230] border border-[#2c3b4e] flex items-center justify-center group-hover:border-[#c5a059]/40 transition-colors">
                    {getIcon(treatment.iconName)}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#c5a059] bg-[#1a2330] px-3 py-1 rounded-full border border-[#c5a059]/20">
                    {treatment.category}
                  </span>
                </div>

                {/* Treatment Title */}
                <h3 className="text-xl font-serif-luxury font-bold text-[#faf8f5] group-hover:text-[#c5a059] transition-colors leading-snug">
                  {treatment.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#9eb0c6] leading-relaxed line-clamp-3">
                  {treatment.shortDesc}
                </p>

                {/* Key Symptoms / Indicators */}
                <div className="pt-2 border-t border-[#1d2735]">
                  <p className="text-[11px] uppercase text-[#7e8e9f] font-semibold tracking-wider mb-2 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 text-[#c5a059]" /> Common Indicators:
                  </p>
                  <ul className="space-y-1.5">
                    {treatment.symptoms.slice(0, 2).map((symptom, idx) => (
                      <li key={idx} className="text-xs text-[#cfc9be] flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#c5a059] mt-1.5 flex-shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-[#1d2735] flex items-center justify-between">
                {treatment.duration && (
                  <span className="text-[11px] text-[#7e8e9f] flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#c5a059]" />
                    {treatment.duration}
                  </span>
                )}
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalTreatment(treatment)}
                    className="text-xs font-semibold text-[#aebacd] hover:text-[#faf8f5] px-2.5 py-1.5 rounded-lg hover:bg-[#182230] transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onSelectTreatmentForBooking(treatment.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0a0d11] bg-gradient-to-r from-[#c5a059] to-[#d8b46d] hover:from-[#d8b46d] hover:to-[#b38f46] px-3 py-1.5 rounded-lg transition-all shadow-sm"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Treatment Details Modal */}
        {activeModalTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070a]/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-[#111722] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between border-b border-[#222e3e] pb-4">
                <div>
                  <span className="text-xs uppercase font-semibold text-[#c5a059] tracking-wider">
                    {activeModalTreatment.category}
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#faf8f5] mt-1">
                    {activeModalTreatment.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalTreatment(null)}
                  className="p-1 rounded-lg text-[#8f9cae] hover:text-[#faf8f5] hover:bg-[#1a2330]"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-[#cfc9be] leading-relaxed">
                <p>{activeModalTreatment.fullDesc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#151c27] border border-[#232f3e]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-2">
                      When Is This Needed?
                    </h4>
                    <ul className="space-y-2">
                      {activeModalTreatment.symptoms.map((s, i) => (
                        <li key={i} className="text-xs text-[#cfc9be] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#151c27] border border-[#232f3e]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-2">
                      Key Clinical Benefits
                    </h4>
                    <ul className="space-y-2">
                      {activeModalTreatment.benefits.map((b, i) => (
                        <li key={i} className="text-xs text-[#cfc9be] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activeModalTreatment.duration && (
                  <p className="text-xs text-[#8e9ab0]">
                    <strong className="text-[#faf8f5]">Expected Duration:</strong> {activeModalTreatment.duration}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#222e3e]">
                <button
                  onClick={() => setActiveModalTreatment(null)}
                  className="px-4 py-2 text-xs font-medium text-[#aebacd] hover:text-[#faf8f5]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalTreatment.title;
                    setActiveModalTreatment(null);
                    onSelectTreatmentForBooking(title);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-[#0a0d11] font-semibold text-xs shadow-md"
                >
                  Book Appointment for this Treatment
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
