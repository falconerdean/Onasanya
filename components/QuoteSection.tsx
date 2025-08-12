'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { quoteSection } from '@/data/augustadvice';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  return (
    <section className="bg-light-sea-green/5 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-persian-green/30" />
        </div>

        {/* Main Quote */}
        <blockquote className="mb-12">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-midnight-green leading-tight mb-8">
            <span dangerouslySetInnerHTML={{ __html: quoteSection.quote.textHtml }} />
          </p>
        </blockquote>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-midnight-green/80 font-sans leading-relaxed max-w-3xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: quoteSection.description.textHtml }} />
          </p>
      </div>

        {/* CTA Button */}
        <Link href={quoteSection.cta.link}>
          <Button className="bg-persian-green hover:bg-persian-green/90 text-white px-8 py-4 md:px-10 md:py-5 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
          {quoteSection.cta.text}
        </Button>
        </Link>
      </div>
    </section>
  );
}