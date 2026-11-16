import { siteConfig } from '@/data/site-config';
import { Building2, Home, Video } from 'lucide-react';

export function Modalities() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-6 h-6 text-teal-800" />;
      case 1:
        return <Home className="w-6 h-6 text-teal-800" />;
      case 2:
        return <Video className="w-6 h-6 text-teal-800" />;
      default:
        return <Building2 className="w-6 h-6 text-teal-800" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/80">
            Formatos de Atendimento
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            {siteConfig.positioning.modalitiesTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {siteConfig.positioning.modalitiesSubtitle}
          </p>
        </div>

        {/* Modality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.positioning.modalities.map((item, index) => (
            <div
              key={item.title}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#fbfbf9] border border-stone-200 hover:border-teal-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center group-hover:bg-teal-800 group-hover:border-teal-800 transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(index)}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100/90 text-teal-900">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 group-hover:text-teal-900 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center text-xs font-semibold text-teal-800">
                <span>Agendamento sob medida</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
