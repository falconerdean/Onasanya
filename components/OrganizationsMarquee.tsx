'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { organizations } from '@/data/augustadvice';

export function OrganizationsMarquee() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-midnight-green mb-4">
            Trusted by Professional Organizations
          </h2>
          <p className="text-midnight-green/70 font-sans max-w-2xl mx-auto">
            We maintain affiliations with leading healthcare and mental health organizations to ensure the highest standards of care.
          </p>
        </div>

        <div className="relative">
          {/* Fade edges for smooth visual transition */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling container */}
          <Marquee 
            direction="left" 
            speed={30} 
            gradient={false} 
            pauseOnHover={true} 
            className="py-8"
          >
            {/* Duplicate organizations array for seamless loop */}
            {[...organizations, ...organizations].map((org, index) => (
              <div
                key={`${org.name}-${index}`}
                className="mx-8 md:mx-12 flex-shrink-0 transition-all duration-300 hover:scale-110 relative"
                style={{ width: `${org.width}px` }}
              >
                <div className="relative h-16 md:h-20 flex items-center justify-center">
                  <Image
                    src={org.logo}
                    alt={`${org.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
} 