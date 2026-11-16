'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { ChevronDown } from 'lucide-react';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3.5 py-1.5 rounded-full">
            {siteConfig.faqSection.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.faqSection.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {siteConfig.faqSection.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {siteConfig.faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-700 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-2 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
