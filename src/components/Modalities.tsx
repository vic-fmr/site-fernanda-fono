import { siteConfig } from '@/data/site-config';
import { Building2, Home, Video, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const icons = [Building2, Home, Video];

export function Modalities() {
  return (
    <section className="border-b border-[#d7d3c9] bg-[#e8e4da] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">
              <span className="h-px w-8 bg-[#b96745]" />
              Formatos de atendimento
            </p>
            <h2 className="mt-5 max-w-sm text-4xl leading-tight text-[#25322f]">
              {siteConfig.positioning.modalitiesTitle}
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#52605b]">
              {siteConfig.positioning.modalitiesSubtitle}
            </p>
          </Reveal>
          <Reveal className="divide-y divide-[#cfc9bd] border-y border-[#cfc9bd]" delay={150}>
            {siteConfig.positioning.modalities.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.title} className="group grid gap-5 px-2 py-7 transition-colors hover:bg-[#ded9cd] sm:grid-cols-[auto_1fr_auto] sm:items-start sm:px-4">
                  <Icon className="h-6 w-6 text-[#315b55] transition-transform duration-200 group-hover:scale-105" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b96745]">{item.tag}</p>
                    <h3 className="mt-2 text-2xl text-[#25322f] transition-colors group-hover:text-[#315b55]">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#52605b]">{item.description}</p>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 text-[#315b55] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                </article>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
