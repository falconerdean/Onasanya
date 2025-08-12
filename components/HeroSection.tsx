'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { heroContent } from '@/data/augustadvice';

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center py-16 md:py-24"
      style={{
        backgroundImage: `url(${heroContent.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-white mb-6">
          <span className="block font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2">
            {heroContent.title.main}
          </span>
          <span className="block font-serif text-2xl md:text-3xl lg:text-4xl font-light opacity-90">
            {heroContent.title.sub}
          </span>
        </h1>

        {/* Introductory Paragraphs */}
        <div className="max-w-2xl mx-auto mb-8">
            {heroContent.paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-4 font-sans"
            >
                {paragraph}
              </p>
            ))}
          </div>

        {/* CTA Button */}
        <Link href="/contact">
          <Button className="bg-persian-green hover:bg-persian-green/90 text-white px-8 py-3 md:px-10 md:py-4 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            {heroContent.ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}