import { siteConfig } from '@/data/site-config';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="sobre" className="bg-[#e8e4da] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">{siteConfig.aboutSection.tag}</p>
            <h2 className="mt-5 max-w-md text-4xl leading-tight text-[#25322f]">{siteConfig.aboutSection.title}</h2>
            <blockquote className="mt-10 border-l-2 border-[#b96745] pl-5 text-2xl leading-9 text-[#315b55]">
              &ldquo;{siteConfig.aboutSection.quote}&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-5 text-base leading-8 text-[#52605b]">
              {siteConfig.professional.fullBioParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-10 border-t border-[#cfc9bd] pt-7">
              <h3 className="text-xl text-[#25322f]">Formação e especializações</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {siteConfig.professional.qualifications.map((item) => (
                  <li key={item} className="group flex items-start gap-2 text-sm leading-6 text-[#52605b] transition-colors hover:text-[#315b55]">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#315b55] transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#b96745]">
                Registro informado: {siteConfig.professional.crfa} · confirmar antes da publicação
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
