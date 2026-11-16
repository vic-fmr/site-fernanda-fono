import type { Metadata } from 'next';
import { About } from '@/components/About';
import { PageIntro } from '@/components/PageIntro';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: `Sobre | ${siteConfig.professional.treatmentTitle}`,
  description: siteConfig.aboutSection.subtitle,
};

export default function SobrePage() {
  return (
    <>
      <PageIntro eyebrow="Sobre a especialista" title="Experiência técnica com escuta e presença." description={siteConfig.aboutSection.subtitle} />
      <About />
    </>
  );
}
