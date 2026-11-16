import { siteConfig } from '@/data/site-config';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section
      id="inicio"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#fbfbf9] overflow-hidden border-b border-stone-200/60"
    >
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#134e48_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Clinical Positioning Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 text-teal-900 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-700 animate-subtle-beacon"></span>
              {siteConfig.positioning.badge}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
              {siteConfig.positioning.heroHeadline}{' '}
              <span className="text-teal-800 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-8">
                {siteConfig.positioning.heroHighlightWord}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl font-normal">
              {siteConfig.positioning.heroSubheadline}
            </p>

            {/* Tactile Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-teal-800 hover:bg-teal-900 shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>{siteConfig.positioning.primaryCtaText}</span>
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 shadow-sm active:scale-[0.98] transition-all"
              >
                <span>{siteConfig.positioning.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Trust commitments list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-600">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
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

          </div>

          {/* Clinical Authority Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Elevated Medical Profile Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-stone-200/90 relative">
                
                {/* Professional Identification */}
                <div className="flex items-center gap-4 pb-6 border-b border-stone-100">
                  <div className="w-16 h-16 rounded-2xl bg-teal-900 text-white flex items-center justify-center text-xl font-bold tracking-tight shadow-md">
                    FM
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                      {siteConfig.professional.treatmentTitle}
                    </h2>
                    <p className="text-xs font-bold text-teal-800 tracking-wide mt-0.5">
                      {siteConfig.professional.crfa}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {siteConfig.professional.role}
                    </p>
                  </div>
                </div>

                {/* Patient-Centered Statement */}
                <div className="py-5">
                  <blockquote className="text-sm text-stone-700 leading-relaxed italic bg-stone-50 p-4 rounded-2xl border-l-4 border-teal-700">
                    &ldquo;{siteConfig.professional.shortBio}&rdquo;
                  </blockquote>
                </div>

                {/* Verified Credentials */}
                <div className="space-y-3 pt-1">
                  {siteConfig.professional.credentials.map((cred) => (
                    <div
                      key={cred.label}
                      className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-stone-100 last:border-none"
                    >
                      <span className="text-stone-500 font-medium">{cred.label}</span>
                      <span className="font-semibold text-stone-900">{cred.value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer validation badge */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                  <div className="flex items-center gap-1.5 text-teal-800 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-teal-700" />
                    <span>Inscrita no Conselho Regional</span>
                  </div>
                  <div className="flex items-center gap-1 text-stone-500">
                    <HeartHandshake className="w-4 h-4 text-teal-600" />
                    <span>Cuidado Humanizado</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quantitative Credibility Metrics */}
        <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.positioning.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-900">{stat.value}</p>
              <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
