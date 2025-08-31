import { SimpleUrbanHero } from '@/components/simple-urban-hero';
import { TarotServicesSection } from '@/components/tarot-services-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SimpleUrbanHero />
      <TarotServicesSection />
    </main>
  );
}