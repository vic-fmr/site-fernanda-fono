import { siteConfig } from '@/data/site-config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#25322f] py-14 text-[#d8e5df]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Identity & Registry */}
          <div className="space-y-4 md:col-span-5">
            <span className="block font-serif text-2xl text-[#f7f5f0]">
              {siteConfig.professional.treatmentTitle}
            </span>
            <p className="max-w-sm text-sm leading-6 text-[#b8d0c8]">
              {siteConfig.professional.shortBio}
            </p>
            <div className="pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e9b08f]">
              {siteConfig.professional.crfa} • Conselho Regional de Fonoaudiologia
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f7f5f0]">Navegação</h4>
            <ul className="space-y-2 text-sm text-[#b8d0c8]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-block transition-[color,transform] hover:translate-x-0.5 hover:text-[#e9b08f]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Details & Ethical Notice */}
          <div className="space-y-3 md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f7f5f0]">Atendimento</h4>
            <p className="text-sm text-[#b8d0c8]">
              {siteConfig.contact.address} — {siteConfig.contact.neighborhoodAndCity}
            </p>
            <p className="text-sm text-[#b8d0c8]">
              WhatsApp: {siteConfig.contact.phoneDisplay}
            </p>
            <p className="pt-3 text-xs leading-relaxed text-[#89a9a0]">
              * Conteúdo de caráter educativo e orientativo, em conformidade com as diretrizes e código de ética do Conselho Federal de Fonoaudiologia (CFFa).
            </p>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#49665f] pt-8 text-xs text-[#89a9a0] sm:flex-row">
          <p>
            © {currentYear} {siteConfig.professional.name}. Todos os direitos reservados.
          </p>
          <p className="text-[#b8d0c8]">
            Fonoaudiologia Baseada em Evidências
          </p>
        </div>
      </div>
    </footer>
  );
}
