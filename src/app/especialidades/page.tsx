import type { Metadata } from 'next';
import { Services } from '@/components/Services';
import { PageIntro } from '@/components/PageIntro';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: `Especialidades | ${siteConfig.professional.treatmentTitle}`,
  description: siteConfig.servicesSection.subtitle,
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageIntro eyebrow="Áreas de atuação" title="Cuidado especializado para recuperar funções essenciais." description="Conheça as frentes de reabilitação para comunicação, deglutição, voz e motricidade orofacial no adulto e no idoso." />
      <Services />
    </>
  );
}
