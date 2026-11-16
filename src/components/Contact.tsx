import { siteConfig } from '@/data/site-config';
import { MessageCircle, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section id="contato" className="bg-[#315b55] py-20 text-[#f7f5f0] md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e9b08f]">{siteConfig.contact.tag}</p>
            <h2 className="mt-5 max-w-xl text-5xl leading-[1.05] text-[#f7f5f0]">{siteConfig.contact.title}</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#d8e5df]">{siteConfig.contact.subtitle}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center gap-3 bg-[#e9b08f] px-6 py-3.5 text-sm font-semibold text-[#25322f] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#f3c5a8]">
              <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              Conversar pelo WhatsApp
            </a>
          </Reveal>
          <Reveal className="border-t border-[#6e9187]" delay={150}>
            <div className="grid gap-7 py-7 text-sm sm:grid-cols-2">
              <div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[#e9b08f]" /><div><p className="font-semibold">Consultório</p><p className="mt-2 leading-6 text-[#d8e5df]">{siteConfig.contact.address}<br />{siteConfig.contact.neighborhoodAndCity}</p><a className="group mt-3 inline-flex items-center gap-1 text-[#e9b08f] transition-colors hover:text-white" href={siteConfig.contact.directMapUrl} target="_blank" rel="noopener noreferrer">Abrir mapa <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></div></div>
              <div className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-[#e9b08f]" /><div><p className="font-semibold">Horários</p><p className="mt-2 leading-6 text-[#d8e5df]">{siteConfig.contact.hours}</p></div></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-[#e9b08f]" /><div><p className="font-semibold">Telefone</p><p className="mt-2 text-[#d8e5df]">{siteConfig.contact.phoneDisplay}</p></div></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-[#e9b08f]" /><div><p className="font-semibold">E-mail</p><p className="mt-2 break-all text-[#d8e5df]">{siteConfig.contact.email}</p></div></div>
            </div>
            <p className="border-t border-[#6e9187] pt-5 text-xs leading-5 text-[#b8d0c8]">Dados de contato e endereço do protótipo · confirmar antes da publicação.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
