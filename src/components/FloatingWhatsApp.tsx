'use client';

import { siteConfig } from '@/data/site-config';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <aside aria-label="Canal de agendamento rápido" className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex min-h-12 items-center justify-center gap-2 bg-[#315b55] px-4 text-sm font-semibold text-white shadow-lg transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-[#24443f] hover:shadow-xl active:translate-y-px"
        aria-label="Abrir conversa no WhatsApp com a Dra. Fernanda Marques"
      >
        <MessageCircle className="h-5 w-5 text-[#e9b08f] transition-transform duration-200 group-hover:translate-x-0.5" />
        <span className="hidden sm:inline">WhatsApp</span>
        
        {/* Subtle beacon */}
        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="animate-subtle-beacon absolute inline-flex h-full w-full rounded-full bg-[#e9b08f] opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#315b55] bg-[#f7f5f0]"></span>
        </span>

        {/* Desktop Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3.5 hidden whitespace-nowrap bg-[#25322f] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
