'use client';

import { Button } from '@/components/ui/button';
import { ContactSection } from '@/components/ContactSection';
// import { AcceptedInsurance } from '@/components/AcceptedInsurance';
import { ServiceCard } from '@/components/ServiceCard';
import { services, servicesPage } from '@/data/augustadvice';

export default function ServicesPage() {
  return (
    <div className="p-4 sm:p-8 md:p-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-[95%] max-w-3xl mx-auto text-center mb-16">
          <div className="bg-persian-green/50 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-persian-green/10">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-midnight-green mb-6">
              {servicesPage.hero.title}
            </h1>
            <p className="text-midnight-green/80 font-sans text-lg leading-relaxed">
              {servicesPage.hero.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service}
            />
          ))}
        </div>

        <div className="my-16 text-center px-[2.5%] md:px-0">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-2xl font-serif font-medium text-midnight-green mb-4">
              {servicesPage.ctaSection.title}
            </h2>
            <p className="text-midnight-green/80 font-sans mb-8">
              {servicesPage.ctaSection.description}
            </p>
            <Button 
              className="bg-persian-green hover:bg-persian-green/90 text-white px-6 sm:px-12 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg whitespace-normal h-auto"
              onClick={() => window.location.href = '/contact'}
            >
              {servicesPage.ctaSection.ctaText}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#F4FFF6]">
        <ContactSection />
        {/* <AcceptedInsurance /> */}
      </div>
    </div>
  );
}