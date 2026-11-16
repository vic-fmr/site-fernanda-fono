import { siteConfig } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';

export function Methodology() {
  return (
    <section id="metodologia" className="border-y border-[#d7d3c9] bg-[#f7f5f0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">{siteConfig.methodologySection.tag}</p>
            <h2 className="mt-5 max-w-sm text-4xl leading-tight text-[#25322f]">{siteConfig.methodologySection.title}</h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#52605b]">{siteConfig.methodologySection.subtitle}</p>
          </Reveal>
          <Reveal className="motion-stagger divide-y divide-[#d7d3c9] border-y border-[#d7d3c9]" delay={150}>
            {siteConfig.methodologySection.steps.map((step) => (
              <li key={step.number} className="grid gap-4 py-7 sm:grid-cols-[5rem_1fr]">
                <span className="text-sm font-semibold text-[#b96745]">{step.number}</span>
                <div>
                  <h3 className="text-2xl text-[#25322f]">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#52605b]">{step.description}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
