import { siteConfig } from '@/data/site-config';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Check, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

export function Services() {
  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const msg = `Olá, Dra. Fernanda! Gostaria de entender mais sobre o atendimento de: ${serviceTitle}.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-[#fbfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3.5 py-1.5 rounded-full border border-teal-200/80">
            {siteConfig.servicesSection.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.servicesSection.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed font-normal">
            {siteConfig.servicesSection.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.servicesSection.items.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl border border-stone-200/90 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of Service Card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-800 shadow-sm">
                    <ServiceIcon name={service.iconName} className="w-7 h-7" />
                  </div>
                  {service.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100/80 text-teal-900">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                {/* Indicated For */}
                <div className="pt-5 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-teal-700" />
                    <span>Indicado para quem apresenta:</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {service.indicatedFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-teal-700 font-bold leading-tight mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mt-6 pt-5 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal-700" />
                    <span>Objetivos e benefícios esperados:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs bg-stone-50 text-stone-700 px-3 py-1 rounded-lg border border-stone-200 font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Card Action */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-teal-900 bg-teal-50 hover:bg-teal-100/90 border border-teal-200/80 active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-teal-700" />
                  <span>Dúvidas sobre este tratamento? Fale com a Dra. Fernanda</span>
                  <ArrowRight className="w-4 h-4 text-teal-700" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Reassurance Consultation Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Não tem certeza de qual área é indicada para o seu caso?
            </h3>
            <p className="text-sm sm:text-base text-teal-100/80 max-w-2xl font-normal">
              Cada histórico de saúde é singular. Podemos realizar uma breve conversa inicial para compreender o quadro clínico e indicar o plano mais seguro.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Fernanda! Gostaria de uma orientação sobre qual é o atendimento adequado para o meu caso.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-7 py-4 rounded-xl font-bold text-teal-950 bg-emerald-300 hover:bg-emerald-200 shadow-md active:scale-[0.98] transition-all text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fazer Triagem no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
