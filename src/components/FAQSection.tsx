import React, { useState } from 'react';
import { faqList } from '../data/hospitalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0a0d13] border-t border-[#1b2533]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Common Patient Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#faf8f5]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#a0aec0] font-light">
            Helpful information regarding appointments, location, and clinical treatments.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#111722] border-[#c5a059]/40 shadow-lg'
                    : 'bg-[#0e131b] border-[#1e2938] hover:border-[#2b3a4d]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-[#faf8f5]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c5a059] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#9eb0c6] leading-relaxed border-t border-[#1d2735]">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
