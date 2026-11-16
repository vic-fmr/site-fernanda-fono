'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-[#d7d3c9] bg-[#f7f5f0]/95 backdrop-blur-md' : 'border-transparent bg-[#f7f5f0]'}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex flex-col rounded-md py-1"
            aria-label={`${siteConfig.professional.treatmentTitle} - Início`}
          >
            <span className="font-serif text-xl tracking-tight text-[#25322f] transition-colors group-hover:text-[#315b55] sm:text-2xl">
              Fernanda Marques
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6e766f]">
              Fonoaudiologia clínica
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#52605b] lg:flex" aria-label="Navegação primária">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-sm py-2 transition-colors hover:text-[#b96745] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#b96745] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[#315b55] px-4 py-2.5 text-sm font-semibold text-[#315b55] transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-[#315b55] hover:text-white"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2.5 text-[#315b55] transition-colors hover:bg-[#e8e4da]"
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
          className="space-y-4 border-b border-[#d7d3c9] bg-[#f7f5f0] px-5 pb-6 pt-4 lg:hidden"
        >
          <nav className="flex flex-col">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative border-b border-[#e2ded5] px-1 py-3.5 text-base text-[#33423d] transition-colors hover:text-[#b96745] after:absolute after:bottom-0 after:left-1 after:right-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#b96745] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2.5 bg-[#315b55] px-4 py-3.5 text-base font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#24443f]"
            >
              <MessageCircle className="h-5 w-5 text-[#e9b08f]" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
