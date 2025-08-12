'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/augustadvice';

const TestimonialCard = ({ text, rating, name }: { text: string; rating: number; name?: string }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 h-full flex flex-col hover:-translate-y-1">
    {/* Quote Icon */}
    <div className="mb-4">
      <Quote className="w-8 h-8 text-persian-green/30" />
    </div>
    
    {/* Testimonial Text */}
    <blockquote className="text-midnight-green/80 font-sans leading-relaxed text-lg flex-grow mb-6">
      "{text}"
    </blockquote>
    
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star 
          key={i} 
          className="fill-persian-green text-persian-green w-5 h-5" 
          aria-hidden="true"
        />
      ))}
    </div>
    
    {/* Client Name */}
    <div className="pt-4 border-t border-gray-100">
      <p className="text-midnight-green font-serif font-medium">
        {name || 'Verified Client'}
      </p>
      <p className="text-midnight-green/60 font-sans text-sm">
        Therapy Client
      </p>
    </div>
  </div>
);

export function TestimonialsSection() {
  // Add sample names to testimonials for better presentation
  const testimonialsWithNames = testimonials.map((testimonial, index) => ({
    ...testimonial,
    name: `Client ${String.fromCharCode(65 + index)}` // Generates Client A, Client B, etc.
  }));

  return (
    <section className="bg-light-sea-green/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-midnight-green mb-4">
            What Our Clients Say
        </h2>
          <p className="text-lg text-midnight-green/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Real experiences from individuals who have found healing and growth through our therapeutic services.
          </p>
        </div>
          
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsWithNames.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
}