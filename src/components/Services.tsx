'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Reveal } from '@/components/Reveal';
import { Check, HelpCircle, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

export function Services() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const msg = `Olá, Dra. Fernanda! Gostaria de entender mais sobre o atendimento de: ${serviceTitle}.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const renderServiceCard = (service: (typeof siteConfig.servicesSection.items)[number]) => (
    <article
      key={service.id}
      className="flex self-start flex-col justify-between border-t border-[#d7d3c9] py-7 sm:py-8"
    >
      <div>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center border border-[#315b55] text-[#315b55]">
            <ServiceIcon name={service.iconName} className="h-5 w-5" />
          </div>
          {service.badge && (
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b96745]">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="mb-3 text-2xl text-[#25322f]">
          {service.title}
        </h3>

        <p className="mb-6 text-sm leading-7 text-[#52605b] sm:text-base">
          {service.shortDescription}
        </p>

        <div className="border-t border-[#e2ded5] pt-4">
          <button
            type="button"
            onClick={() => setOpenServiceId(openServiceId === service.id ? null : service.id)}
            className="group flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 text-left text-sm font-semibold text-[#315b55] transition-colors hover:text-[#b96745]"
            aria-expanded={openServiceId === service.id}
            aria-controls={`service-details-${service.id}`}
          >
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">{openServiceId === service.id ? 'Ocultar detalhes' : 'Entender este atendimento'}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 transition-[color,transform] duration-300 group-hover:text-[#b96745] group-hover:translate-y-0.5 ${openServiceId === service.id ? 'rotate-180' : ''}`} />
          </button>

          <div
            id={`service-details-${service.id}`}
            className={`service-details-grid ${openServiceId === service.id ? 'is-open' : ''}`}
            aria-hidden={openServiceId !== service.id}
          >
            <div className={`service-details-content ${openServiceId === service.id ? 'border-t border-[#e2ded5] pt-5' : ''}`}>
              <p className="text-sm leading-7 text-[#52605b]">{service.fullDescription}</p>

              <div className="mt-6 grid gap-6 border-t border-[#e2ded5] pt-5 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#52605b]">
                    <HelpCircle className="h-4 w-4 text-[#b96745]" />
                    <span>Quando procurar</span>
                  </h4>
                  <ul className="space-y-2 text-xs leading-5 text-[#52605b] sm:text-sm">
                    {service.indicatedFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 font-bold leading-tight text-[#b96745]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#52605b]">
                    <Check className="h-4 w-4 text-[#315b55]" />
                    <span>O que buscamos</span>
                  </h4>
                  <ul className="space-y-2 text-xs leading-5 text-[#52605b] sm:text-sm">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <span className="mt-0.5 font-bold leading-tight text-[#315b55]">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#e2ded5] pt-6">
        <a
          href={getServiceWhatsAppUrl(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#315b55] transition-colors hover:text-[#b96745]"
        >
          <span className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
            <MessageCircle className="h-4 w-4 text-[#b96745] transition-transform duration-200 group-hover:scale-110" />
            <span>Dúvidas sobre este tratamento? Fale com a Dra. Fernanda</span>
            <ArrowRight className="h-4 w-4 text-[#b96745] transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </article>
  );

  return (
    <section id="especialidades" className="bg-[#f7f5f0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Header */}
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">
            {siteConfig.servicesSection.tag}
          </span>
          <h2 className="mt-5 text-4xl leading-tight text-[#25322f] sm:text-5xl">
            {siteConfig.servicesSection.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#52605b]">
            {siteConfig.servicesSection.subtitle}
          </p>
        </Reveal>

        {/* Services Grid */}
        <Reveal className="motion-stagger md:hidden">
          {siteConfig.servicesSection.items.map(renderServiceCard)}
        </Reveal>
        <Reveal className="hidden items-start gap-x-12 md:grid md:grid-cols-2">
          <div className="motion-stagger">
            {siteConfig.servicesSection.items.filter((_, index) => index % 2 === 0).map(renderServiceCard)}
          </div>
          <div className="motion-stagger">
            {siteConfig.servicesSection.items.filter((_, index) => index % 2 === 1).map(renderServiceCard)}
          </div>
        </Reveal>

        {/* Reassurance Consultation Banner */}
        <Reveal className="mt-16 flex flex-col items-start justify-between gap-7 border-y border-[#315b55] py-8 md:flex-row md:items-center" delay={150}>
          <div className="space-y-2">
            <h3 className="text-2xl text-[#25322f]">
              Não tem certeza de qual área é indicada para o seu caso?
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-[#52605b] sm:text-base">
              Cada histórico de saúde é singular. Podemos realizar uma breve conversa inicial para compreender o quadro clínico e indicar o plano mais seguro.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Fernanda! Gostaria de uma orientação sobre qual é o atendimento adequado para o meu caso.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 cursor-pointer items-center gap-2 bg-[#315b55] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#24443f]"
          >
            <span className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-0.5">
              <MessageCircle className="h-4 w-4 text-[#e9b08f]" />
              <span>Fazer Triagem no WhatsApp</span>
            </span>
          </a>
        </Reveal>

      </div>
    </section>
  );
}
