import React from 'react';
import { authenticReviews, hospitalContact } from '../data/hospitalData';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0c1016] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-semibold">
              Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#faf8f5] tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-sm text-[#a0aec0] font-light">
              Real feedback from patients treated at Sri Anuradha Dental Hospital in Kavadiguda.
            </p>
          </div>

          <a
            href={hospitalContact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141c26] hover:bg-[#1b2533] border border-[#2b394b] hover:border-[#c5a059]/40 text-xs sm:text-sm text-[#faf8f5] font-medium transition-all self-start md:self-auto"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#c5a059]" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authenticReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#111722] border border-[#232f3f] hover:border-[#c5a059]/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars & verified tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#c5a059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#25D366] bg-[#0c2417] px-2.5 py-0.5 rounded-full border border-[#25D366]/30 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified Patient
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-[#cfc9be] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#1e2837] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif-luxury font-bold text-[#faf8f5]">
                    {rev.patientName}
                  </h4>
                  <p className="text-xs text-[#7e8e9f]">
                    Treatment: <span className="text-[#aebacd]">{rev.treatment}</span>
                  </p>
                </div>
                <span className="text-[11px] text-[#5e6d80] font-medium">
                  {rev.source}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
