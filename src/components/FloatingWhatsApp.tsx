'use client';

import { siteConfig } from '@/data/site-config';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Abrir conversa no WhatsApp com a Dra. Fernanda"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Pulsing indicator */}
        <span className="absolute top-1 right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-100 border-2 border-emerald-600"></span>
        </span>

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
