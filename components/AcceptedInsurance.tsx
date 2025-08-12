'use client';

import Image from 'next/image';
import { therapistProfile } from '@/data/augustadvice';
import { convertInsuranceNamesToTypes } from '@/lib/utils';

export function AcceptedInsurance() {
  const insuranceList = convertInsuranceNamesToTypes(therapistProfile.acceptedInsurances);

  return therapistProfile.takesInsurance && (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-midnight-green mb-4">
          Accepted Insurance
        </h2>
          <p className="text-lg text-midnight-green/70 font-sans max-w-2xl mx-auto">
            We work with most major insurance providers to make therapy accessible and affordable.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {insuranceList.map((insurance, index) => (
            <div 
              key={insurance.name}
              className="flex justify-center items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <div 
                className="relative transition-transform duration-200 hover:scale-105"
                style={{
                  width: `${Math.min(insurance.width, 120)}px`,
                  height: '60px'
                }}
              >
                <Image
                  src={insurance.logo}
                  alt={`${insurance.name} insurance accepted`}
                  fill
                  className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200"
                  sizes={`(max-width: 640px) 100px, (max-width: 768px) 120px, ${Math.min(insurance.width, 120)}px`}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-midnight-green/70 font-sans leading-relaxed">
            Don't see your insurance provider? Contact us to discuss alternative payment options and sliding scale fees.
          </p>
        </div>
      </div>
    </section>
  );
}