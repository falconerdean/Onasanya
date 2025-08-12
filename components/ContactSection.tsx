'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactForm } from './ContactForm';
import { contactSection } from '@/data/augustadvice';

export function ContactSection() {
  return (
    <section id="contact" className="bg-light-sea-green/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Info Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 h-full flex flex-col">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-midnight-green mb-8">
                {contactSection.title}
              </h2>
              <p className="text-lg text-midnight-green/80 font-sans leading-relaxed mb-8">
                {contactSection.description}
              </p>
            </div>
            <div className="mt-auto">
              <Link href="/contact">
                <Button className="bg-persian-green hover:bg-persian-green/90 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg">
                {contactSection.ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}