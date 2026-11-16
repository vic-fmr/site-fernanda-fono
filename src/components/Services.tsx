import { siteConfig } from '@/data/site-config';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

export function Services() {
  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const msg = `Olá, Dra. Fernanda! Gostaria de entender mais sobre o atendimento de: ${serviceTitle}.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3.5 py-1.5 rounded-full">
            {siteConfig.servicesSection.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.servicesSection.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {siteConfig.servicesSection.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.servicesSection.items.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg border border-stone-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800">
                    <ServiceIcon name={service.iconName} className="w-7 h-7" />
                  </div>
                  {service.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100/80 text-teal-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                  {service.fullDescription}
                </p>

                {/* Indicated For */}
                <div className="mt-6 pt-5 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-teal-700" />
                    <span>Indicado especialmente para:</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {service.indicatedFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-700 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Pills */}
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal-700" />
                    <span>Resultados & Ganhos esperados:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-lg border border-stone-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Card CTA */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100/80 border border-teal-200 transition-colors"
                >
                  <span>Dúvidas sobre este tratamento? Fale com a Dra. Fernanda</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Global callout */}
        <div className="mt-16 p-8 rounded-3xl bg-teal-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">
              Não tem certeza de qual é a área indicada para o seu caso?
            </h3>
            <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl">
              Cada caso é único. Podemos fazer uma triagem rápida para esclarecer o diagnóstico e o melhor caminho terapêutico.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Fernanda! Gostaria de uma orientação sobre o diagnóstico e tratamento ideal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-bold text-teal-950 bg-teal-200 hover:bg-teal-100 shadow-md transition-all text-sm"
          >
            Fazer Triagem via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
