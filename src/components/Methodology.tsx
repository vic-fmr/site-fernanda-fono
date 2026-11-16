import { siteConfig } from '@/data/site-config';

export function Methodology() {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/80">
            {siteConfig.methodologySection.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.methodologySection.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed font-normal">
            {siteConfig.methodologySection.subtitle}
          </p>
        </div>

        {/* 4 Steps Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.methodologySection.steps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#fbfbf9] border border-stone-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-black text-teal-900/15 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-stone-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-700"></span>
                <span className="text-xs font-bold text-teal-900">Etapa {step.number}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
