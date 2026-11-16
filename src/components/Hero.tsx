import { siteConfig } from '@/data/site-config';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-stone-50 via-white to-stone-50 overflow-hidden">
      {/* Decorative subtle background circle */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              {siteConfig.positioning.badge}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              {siteConfig.positioning.heroHeadline}{' '}
              <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-8">
                {siteConfig.positioning.heroHighlightWord}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl">
              {siteConfig.positioning.heroSubheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{siteConfig.positioning.primaryCtaText}</span>
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
              >
                <span>{siteConfig.positioning.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Trust checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Prática 100% baseada em evidências</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Atendimento domiciliar & consultório</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Orientação direcionada a cuidadores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Emissão de laudo para reembolso</span>
              </div>
            </div>

          </div>

          {/* Authority Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/80 relative">
                
                {/* Header of Card */}
                <div className="flex items-center gap-4 pb-6 border-b border-stone-100">
                  <div className="w-16 h-16 rounded-2xl bg-teal-800 text-white flex items-center justify-center text-xl font-bold shadow-inner">
                    FM
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-stone-900">
                      {siteConfig.professional.treatmentTitle}
                    </h2>
                    <p className="text-xs font-semibold text-teal-700">
                      {siteConfig.professional.crfa}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {siteConfig.professional.role}
                    </p>
                  </div>
                </div>

                {/* Highlight Quote */}
                <div className="py-5">
                  <p className="text-sm text-stone-600 italic bg-stone-50 p-4 rounded-xl border-l-4 border-teal-600">
                    &ldquo;{siteConfig.professional.shortBio}&rdquo;
                  </p>
                </div>

                {/* Credentials list */}
                <div className="space-y-3 pt-2">
                  {siteConfig.professional.credentials.map((cred) => (
                    <div key={cred.label} className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-stone-100 last:border-none">
                      <span className="text-stone-500">{cred.label}</span>
                      <span className="font-semibold text-stone-800">{cred.value}</span>
                    </div>
                  ))}
                </div>

                {/* Floating Badge */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-teal-800">
                    <ShieldCheck className="w-4 h-4 text-teal-700" />
                    <span>Profissional Habilitada CFFa / CRFa</span>
                  </div>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.positioning.stats.map((stat) => (
            <div key={stat.label} className="p-4 rounded-2xl bg-white/60 border border-stone-100 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-800">{stat.value}</p>
              <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
