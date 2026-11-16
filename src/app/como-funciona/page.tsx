import type { Metadata } from 'next';
import { Methodology } from '@/components/Methodology';
import { PageIntro } from '@/components/PageIntro';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: `Como funciona | ${siteConfig.professional.treatmentTitle}`,
  description: siteConfig.methodologySection.subtitle,
};

export default function ComoFuncionaPage() {
  return (
    <>
      <PageIntro eyebrow="Método de atendimento" title="Um processo claro, construído em conjunto." description="Da avaliação ao acompanhamento, cada etapa é explicada com transparência para que paciente e família saibam o que esperar." />
      <Methodology />
    </>
  );
}
