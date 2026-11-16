import { siteConfig } from '@/data/site-config';
import { Award, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3.5 py-1.5 rounded-full">
            {siteConfig.aboutSection.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {siteConfig.aboutSection.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {siteConfig.aboutSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation Column */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg relative overflow-hidden">
              <div className="w-24 h-24 rounded-3xl bg-teal-800 text-white flex items-center justify-center text-3xl font-black mb-6 shadow-md">
                FM
              </div>

              <h3 className="text-2xl font-bold text-stone-900">
                {siteConfig.professional.treatmentTitle}
              </h3>
              <p className="text-sm font-semibold text-teal-700 mt-1">
                {siteConfig.professional.role}
              </p>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-teal-800">
                {siteConfig.professional.crfa}
              </div>

              <blockquote className="mt-6 p-4 rounded-xl bg-stone-50 border-l-4 border-teal-600 text-sm text-stone-700 italic">
                &ldquo;{siteConfig.aboutSection.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-stone-100 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>CRFa Ativo & Regular</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <Award className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>+10 Anos de Clínica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Qualifications Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-stone-700 leading-relaxed text-base sm:text-lg">
              {siteConfig.professional.fullBioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Qualifications / Formação */}
            <div className="pt-6 border-t border-stone-200">
              <h4 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-700" />
                <span>Formação & Destaques Acadêmicos:</span>
              </h4>
              <div className="space-y-3">
                {siteConfig.professional.qualifications.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
