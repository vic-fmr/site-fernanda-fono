import type { Metadata } from 'next';
import { Faq } from '@/components/Faq';
import { Testimonials } from '@/components/Testimonials';
import { PageIntro } from '@/components/PageIntro';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: `Dúvidas e histórias | ${siteConfig.professional.treatmentTitle}`,
  description: siteConfig.faqSection.subtitle,
};

export default function DuvidasPage() {
  return (
    <>
      <PageIntro eyebrow="Dúvidas e histórias" title="Informação para decidir com mais segurança." description="Respostas diretas para as perguntas mais comuns e relatos que ajudam a entender a experiência de acompanhamento." />
      <Testimonials />
      <Faq />
    </>
  );
}
