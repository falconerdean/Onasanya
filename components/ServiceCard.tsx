'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Service } from '@/types';
import { Check, Calendar } from 'lucide-react';

export function ServiceCard({ title, description, image, points }: Service) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white rounded-t-2xl p-6 flex items-center justify-center h-[100px]">
        <h2 className="text-3xl font-light text-midnight-green text-center m-0 leading-tight">{title}</h2>
      </div>
      
      {/* Centered Image */}
      <div className="mb-0">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-white p-8 flex flex-col flex-grow justify-between rounded-b-2xl">
        <div>
          <p className="text-lg text-midnight-green/80 mb-6">
            {description}
          </p>
          
          {/* Key Points */}
          <div className="mb-8">
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              {points.slice(0, 4).map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 mt-0.5 mr-3 text-persian-green flex-shrink-0" />
                  <span className="text-base text-midnight-green/80 font-sans leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-persian-green hover:bg-persian-green/90 text-white font-medium rounded-full transition-all duration-200 hover:shadow-lg mt-auto"
        >
          Schedule Your Consultation
          <Calendar className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  
  );
}