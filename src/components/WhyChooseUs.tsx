import React from 'react';
import { Stethoscope, ShieldCheck, HeartPulse, MapPin, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: "Modern Clinical Infrastructure",
      desc: "Dual ergonomic treatment operatory units designed with patient comfort and clinical precision in mind.",
      icon: <Stethoscope className="w-6 h-6 text-[#c5a059]" />
    },
    {
      title: "Hospital-Grade Sterilization",
      desc: "Strict protocol for autoclave instrument sterilization, disposable barriers, and clean operatory turnover between patients.",
      icon: <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
    },
    {
      title: "Patient-Centered Dentistry",
      desc: "Clear explanations of clinical findings before treatment, ensuring you remain comfortable and informed at every stage.",
      icon: <HeartPulse className="w-6 h-6 text-[#c5a059]" />
    },
    {
      title: "Central Accessible Location",
      desc: "Located on the 1st Floor, Union Bank Building, Lakshmi Residency in Kavadiguda, easily reachable across Secunderabad & Hyderabad.",
      icon: <MapPin className="w-6 h-6 text-[#c5a059]" />
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0a0d13] relative border-t border-[#1a2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
            Clinical Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
            Why Patients Trust Sri Anuradha
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light">
            A healthcare practice designed around clinical precision, transparency, and patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111722] border border-[#212d3c] hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#17212e] border border-[#2b3a4d] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#faf8f5]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9eb0c6] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1d2735] flex items-center gap-1.5 text-xs text-[#c5a059]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="font-medium">Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
