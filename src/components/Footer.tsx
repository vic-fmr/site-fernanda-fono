import { siteConfig } from '@/data/site-config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Identity & Registry */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-bold text-white tracking-tight block">
              {siteConfig.professional.treatmentTitle}
            </span>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              {siteConfig.professional.shortBio}
            </p>
            <div className="pt-2 text-xs text-teal-400 font-semibold tracking-wide">
              {siteConfig.professional.crfa} • Conselho Regional de Fonoaudiologia
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Details & Ethical Notice */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Atendimento</h4>
            <p className="text-sm text-stone-400">
              {siteConfig.contact.address} — {siteConfig.contact.neighborhoodAndCity}
            </p>
            <p className="text-sm text-stone-400">
              WhatsApp: {siteConfig.contact.phoneDisplay}
            </p>
            <p className="text-xs text-stone-500 pt-3 leading-relaxed">
              * Conteúdo de caráter educativo e orientativo, em conformidade com as diretrizes e código de ética do Conselho Federal de Fonoaudiologia (CFFa).
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {siteConfig.professional.name}. Todos os direitos reservados.
          </p>
          <p className="text-stone-400">
            Fonoaudiologia Baseada em Evidências
          </p>
        </div>
      </div>
    </footer>
  );
}
