import { siteConfig } from '@/data/site-config';
import { MessageCircle, Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, FileText } from 'lucide-react';

export function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section id="contato" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/80">
            {siteConfig.contact.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.contact.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed font-normal">
            {siteConfig.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct WhatsApp Scheduling Card */}
          <div className="lg:col-span-7 bg-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/90 text-teal-200 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Atendimento Direto & Triagem
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Inicie o acompanhamento clínico
              </h3>

              <p className="text-teal-100/85 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Converse diretamente comigo ou com a equipe pelo WhatsApp. Esclareceremos dúvidas sobre o diagnóstico, procedimentos de avaliação em consultório ou visita domiciliar (home care).
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-teal-950 bg-emerald-300 hover:bg-emerald-200 shadow-md active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Conversar pelo WhatsApp</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-200/80 pt-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sigilo e ética profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Recibos para reembolso de convênio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details & Practice Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#fbfbf9] border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Consultório</h4>
                  <p className="text-sm text-stone-600 mt-1">{siteConfig.contact.address}</p>
                  <p className="text-xs font-semibold text-stone-500 mt-0.5">{siteConfig.contact.neighborhoodAndCity}</p>
                  <a
                    href={siteConfig.contact.directMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 mt-3"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-2xl bg-[#fbfbf9] border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Horários</h4>
                  <p className="text-sm text-stone-600 mt-1">{siteConfig.contact.hours}</p>
                  <p className="text-xs text-stone-500 mt-0.5">Atendimentos presenciais e domiciliares com hora marcada.</p>
                </div>
              </div>
            </div>

            {/* Phone & Direct Channel */}
            <div className="p-6 rounded-2xl bg-[#fbfbf9] border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Contato Direto</h4>
                  <p className="text-sm text-stone-600 mt-1">{siteConfig.contact.phoneDisplay}</p>
                  <p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-teal-700" />
                    <span>{siteConfig.contact.email}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
