import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-[#d7d3c9] bg-[#e8e4da]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315b55] hover:text-[#b96745]">
          ← Voltar para início
        </Link>
        <Reveal className="mt-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96745]">{eyebrow}</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-[#25322f] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52605b]">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
