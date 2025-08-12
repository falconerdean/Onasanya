'use client';

import { ServiceCard } from './ServiceCard';
import { services } from '@/data/augustadvice';

export function ServicesSection() {
  return (
    <section className="bg-evergreen-green py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-4">
            Specialities
          </h2>
          <p className="text-lg text-white font-sans max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive therapeutic services tailored to meet your unique needs and support your journey toward healing and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              points={service.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}