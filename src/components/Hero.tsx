import { siteConfig } from '@/data/site-config';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" className="border-b border-[#d7d3c9] bg-[#f7f5f0] lg:min-h-[calc(100svh-77px)] lg:flex lg:items-center">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:py-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <Reveal className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">
              <span className="h-px w-10 bg-[#b96745]" />
              {siteConfig.positioning.badge}
            </p>
            <h1 className="max-w-3xl text-5xl leading-[1.04] text-[#25322f] sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem]">
              {siteConfig.positioning.heroHeadline}{' '}
              <span className="text-[#315b55]">
                {siteConfig.positioning.heroHighlightWord}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52605b] sm:text-xl">
              {siteConfig.positioning.heroSubheadline}
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-primary group relative inline-flex items-center justify-center overflow-hidden bg-[#315b55] px-6 py-3.5 text-base font-semibold text-white shadow-none transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(37,50,47,0.16)]"
              >
                <span className="inline-flex items-center gap-2.5 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02] group-active:translate-y-0 group-active:scale-[0.98]">
                  <MessageCircle className="h-5 w-5 text-[#e9b08f] transition-transform duration-200 group-hover:scale-110" />
                  <span>{siteConfig.positioning.primaryCtaText}</span>
                </span>
              </a>

              <a
                href="#especialidades"
                className="hero-cta-secondary group relative inline-flex items-center justify-center overflow-hidden border-b border-[#315b55] px-2 py-3.5 text-base font-semibold text-[#315b55] transition-[border-color,color] duration-300 hover:border-[#b96745] hover:text-[#b96745]"
              >
                <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-0">
                  <span>{siteConfig.positioning.secondaryCtaText}</span>
                  <ArrowRight className="h-4 w-4 text-stone-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#b96745]" />
                </span>
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-2.5 border-t border-[#d7d3c9] pt-4 text-sm text-[#52605b] sm:grid-cols-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#b96745]" />
                <span>Prática clínica baseada em evidências</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Consultório e Home Care (domiciliar)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Capacitação contínua a cuidadores</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Relatórios detalhados para reembolso</span>
              </div>
            </div>

          </Reveal>

          <Reveal delay={150}>
            <aside className="border-t-4 border-[#315b55] bg-[#e8e4da] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-[#cfc9bd] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b96745]">Perfil clínico</p>
                <h2 className="mt-3 text-3xl text-[#25322f]">{siteConfig.professional.treatmentTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-[#52605b]">{siteConfig.professional.role}</p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#315b55] text-lg font-semibold text-[#315b55]">
                FM
              </div>
            </div>
            <blockquote className="border-b border-[#cfc9bd] py-5 text-base leading-7 text-[#33423d]">
              &ldquo;{siteConfig.professional.shortBio}&rdquo;
            </blockquote>
            <div className="space-y-3 pt-5">
              {siteConfig.professional.credentials.slice(0, 3).map((cred) => (
                <div key={cred.label} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-[#6e766f]">{cred.label}</span>
                  <span className="text-right font-semibold text-[#25322f]">{cred.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#315b55]">
              <ShieldCheck className="h-4 w-4" />
              {siteConfig.professional.crfa}
            </div>
            </aside>
          </Reveal>
        </div>

        <Reveal className="mt-8 grid grid-cols-2 border-y border-[#d7d3c9] md:grid-cols-4" delay={200}>
          {siteConfig.positioning.stats.map((stat) => (
            <div
              key={stat.label}
              className="group border-r border-[#d7d3c9] px-4 py-4 transition-colors hover:bg-[#efebe3] last:border-r-0 sm:px-6"
            >
              <p className="text-3xl text-[#315b55] transition-transform duration-200 group-hover:translate-x-0.5 sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs leading-5 text-[#6e766f] sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
