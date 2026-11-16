'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site-config';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbfbf9]/95 backdrop-blur-md shadow-sm border-b border-stone-200/90'
          : 'bg-[#fbfbf9] border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Medical Brand */}
          <a
            href="#inicio"
            className="flex flex-col group py-1 rounded-lg focus-visible:ring-2 focus-visible:ring-teal-700"
            aria-label={`${siteConfig.professional.treatmentTitle} - Início`}
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-teal-800 transition-colors">
              {siteConfig.professional.treatmentTitle}
            </span>
            <span className="text-xs font-medium text-stone-500 flex items-center gap-2 mt-0.5">
              <span>{siteConfig.professional.role}</span>
              <span className="w-1 h-1 rounded-full bg-teal-600"></span>
              <span className="font-semibold text-teal-800">{siteConfig.professional.crfa}</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-7 text-sm font-medium text-stone-600"
            aria-label="Navegação primária"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-teal-800 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-700 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 shadow-sm hover:shadow active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Agendar Avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal-700"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-stone-200 bg-white/95 backdrop-blur-md px-5 pt-4 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-stone-800 hover:text-teal-800 hover:bg-stone-50 rounded-xl transition-colors"
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
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-base font-semibold text-white bg-teal-800 hover:bg-teal-900 shadow-sm active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
