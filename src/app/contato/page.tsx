import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { PageIntro } from '@/components/PageIntro';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: `Contato | ${siteConfig.professional.treatmentTitle}`,
  description: siteConfig.contact.subtitle,
};

export default function ContatoPage() {
  return (
    <>
      <PageIntro eyebrow="Contato e agendamento" title="Vamos conversar sobre o próximo passo." description={siteConfig.contact.subtitle} />
      <Contact />
    </>
  );
}
