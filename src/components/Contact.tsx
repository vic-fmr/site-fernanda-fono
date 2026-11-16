import { siteConfig } from '@/data/site-config';
import { MessageCircle, Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section id="contato" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3.5 py-1.5 rounded-full">
            {siteConfig.contact.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.contact.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {siteConfig.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main WhatsApp Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-teal-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800/80 text-teal-200 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Atendimento Rápido via WhatsApp
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Pronto para agendar sua avaliação ou tirar dúvidas?
              </h3>

              <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed mb-8">
                Fale diretamente comigo pelo WhatsApp. Entenderemos o quadro clínico e esclareceremos qualquer dúvida sobre atendimento em consultório ou visita domiciliar (home care).
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-teal-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Conversar pelo WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-teal-200/80 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Atendimento confidencial e em conformidade com o código de ética</span>
              </div>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Localização do Consultório</h4>
                  <p className="text-sm text-stone-600 mt-1">{siteConfig.contact.address}</p>
                  <p className="text-xs font-medium text-stone-500">{siteConfig.contact.neighborhoodAndCity}</p>
                  <a
                    href={siteConfig.contact.directMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 mt-3"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Horários de Atendimento</h4>
                  <p className="text-sm text-stone-600 mt-1">{siteConfig.contact.hours}</p>
                  <p className="text-xs text-stone-500 mt-1">Sessões presenciais e domiciliares com agendamento prévio.</p>
                </div>
              </div>
            </div>

            {/* Email & Phone Card */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Telefone & E-mail</h4>
                  <p className="text-sm text-stone-600 mt-1">{siteConfig.contact.phoneDisplay}</p>
                  <p className="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
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
