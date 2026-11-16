'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#e8e4da] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">{siteConfig.faqSection.tag}</p>
          <h2 className="mt-5 text-4xl leading-tight text-[#25322f]">{siteConfig.faqSection.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#52605b]">{siteConfig.faqSection.subtitle}</p>
        </Reveal>
        <Reveal className="border-t border-[#cfc9bd]" delay={150}>
          {siteConfig.faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-[#cfc9bd]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left text-lg text-[#25322f] transition-colors hover:text-[#315b55]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#315b55] transition-[color,transform] duration-200 group-hover:text-[#b96745] ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <div id={`faq-answer-${index}`} className="max-w-3xl pb-6 pr-8 text-base leading-7 text-[#52605b]">{item.answer}</div>}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
