import { siteConfig } from '@/data/site-config';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-b border-[#d7d3c9] bg-[#f7f5f0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">{siteConfig.testimonialsSection.tag}</p>
          <h2 className="mt-5 text-4xl leading-tight text-[#25322f]">{siteConfig.testimonialsSection.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#52605b]">{siteConfig.testimonialsSection.subtitle}</p>
        </Reveal>
        <Reveal className="motion-stagger grid gap-0 border-y border-[#d7d3c9] md:grid-cols-3 md:divide-x md:divide-[#d7d3c9]" delay={150}>
          {siteConfig.testimonialsSection.items.map((testimonial) => (
            <article key={testimonial.name} className="group flex flex-col justify-between border-b border-[#d7d3c9] px-0 py-8 transition-colors hover:bg-[#efebe3] md:border-b-0 md:px-7 first:md:pl-0 last:md:pr-0">
              <div>
                <Quote className="h-6 w-6 text-[#b96745] transition-transform duration-200 group-hover:translate-x-0.5" />
                <p className="mt-5 text-base leading-7 text-[#33423d]">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
              <div className="mt-8 border-t border-[#e2ded5] pt-4">
                <p className="text-sm font-semibold text-[#25322f]">{testimonial.name}</p>
                <p className="mt-1 text-xs leading-5 text-[#6e766f]">{testimonial.role}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#b96745]">{testimonial.highlight}</p>
              </div>
            </article>
          ))}
        </Reveal>
        <p className="mt-6 text-xs text-[#6e766f]">Depoimentos ilustrativos no protótipo · validar autorização e identificação antes da publicação.</p>
      </div>
    </section>
  );
}
