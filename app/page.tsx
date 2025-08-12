import { HeroSection } from '@/components/HeroSection';
import { QuoteSection } from '@/components/QuoteSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CtaBanner } from '@/components/CtaBanner';
import { ServicesSection } from '@/components/ServicesSection';
import { FounderSection } from '@/components/FounderSection';
// import { AcceptedInsurance } from '@/components/AcceptedInsurance';
// import { OrganizationsMarquee } from '@/components/OrganizationsMarquee';
import { ContactFormEmbed } from '@/components/ContactFormEmbed';
import { MissionStatement } from '@/components/MissionStatement';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FounderSection />
      {/* <TestimonialsSection /> */}
      {/* <OrganizationsMarquee /> */}
      <CtaBanner />
      <MissionStatement />
      {/* <AcceptedInsurance /> */}

    </>
  );
}