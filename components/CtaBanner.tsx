'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { ctaBanner } from '@/data/augustadvice';

export function CtaBanner() {
  return (
    <section className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${ctaBanner.backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-midnight-green/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white mb-8 leading-tight">
              {ctaBanner.title}
            </h2>
            
          {/* Supporting text */}
          <p className="text-lg md:text-xl text-white/90 font-sans leading-relaxed mb-12 max-w-2xl mx-auto">
            Ready to take the first step toward healing and growth? We're here to support you on your journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button className="bg-persian-green hover:bg-persian-green/90 text-white px-8 py-4 md:px-10 md:py-5 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                {ctaBanner.ctaText}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            {/* Phone CTA */}
              <a 
                href={`tel:${ctaBanner.phone.replace(/\D/g, '')}`} 
              className="flex items-center gap-3 text-white/90 hover:text-white text-lg font-sans transition-colors duration-200 group"
              >
              <div className="p-3 rounded-full border-2 border-white/30 group-hover:border-light-sea-green transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-white/70">Call us directly</div>
                <div className="font-medium">{ctaBanner.phone}</div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}