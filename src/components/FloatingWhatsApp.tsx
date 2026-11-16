'use client';

import { siteConfig } from '@/data/site-config';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <aside aria-label="Canal de agendamento rápido" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label="Abrir conversa no WhatsApp com a Dra. Fernanda Marques"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Subtle beacon */}
        <span className="absolute top-1 right-1 flex h-4 w-4">
          <span className="animate-subtle-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-100 border-2 border-emerald-700"></span>
        </span>

        {/* Desktop Tooltip */}
        <span className="hidden sm:block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
