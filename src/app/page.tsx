import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Modalities } from '@/components/Modalities';
import { Services } from '@/components/Services';
import { Methodology } from '@/components/Methodology';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Modalities />
        <Services />
        <Methodology />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
