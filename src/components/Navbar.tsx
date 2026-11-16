'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#inicio" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-teal-950 group-hover:text-teal-800 transition-colors">
              {siteConfig.professional.treatmentTitle}
            </span>
            <span className="text-xs font-medium text-stone-500 flex items-center gap-1.5">
              <span>{siteConfig.professional.role}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-teal-600"></span>
              <span className="font-semibold text-teal-700">{siteConfig.professional.crfa}</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-stone-600" aria-label="Navegação principal">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-700 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-teal-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-stone-700 hover:text-teal-800 hover:bg-stone-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-stone-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
