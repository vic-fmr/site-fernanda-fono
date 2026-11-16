import { siteConfig } from '@/data/site-config';
import { Building2, Home, Video } from 'lucide-react';

export function Modalities() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-6 h-6 text-teal-700" />;
      case 1:
        return <Home className="w-6 h-6 text-teal-700" />;
      case 2:
        return <Video className="w-6 h-6 text-teal-700" />;
      default:
        return <Building2 className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section className="py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            {siteConfig.positioning.modalitiesTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600">
            {siteConfig.positioning.modalitiesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.positioning.modalities.map((item, index) => (
            <div
              key={item.title}
              className="relative p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  {getIcon(index)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100/80 text-teal-800">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
