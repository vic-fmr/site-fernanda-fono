import { siteConfig } from '@/data/site-config';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3.5 py-1.5 rounded-full">
            {siteConfig.testimonialsSection.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.testimonialsSection.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {siteConfig.testimonialsSection.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonialsSection.items.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-teal-700/40" />
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-teal-100/80 text-teal-900">
                    {testimonial.highlight}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80">
                <p className="font-bold text-stone-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
