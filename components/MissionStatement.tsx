'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { missionStatement } from '@/data/augustadvice';

export function MissionStatement() {
  return (
    <section className="py-16 md:py-24 bg-light-sea-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-light-sea-green/10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-midnight-green mb-4">
            {missionStatement.title}
          </h2>
          
          <h3 className="text-xl md:text-2xl font-serif font-light text-midnight-green mb-6">
            {missionStatement.subtitle}
          </h3>
          
          <p className="text-lg md:text-xl leading-relaxed text-midnight-green/80 mb-12 max-w-4xl mx-auto">
            {missionStatement.description}
          </p>

          <div className="max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden aspect-video mb-12">
            <img 
              src={missionStatement.image || "/images/services/mens-mental.webp"}
              alt="Mental Health Support"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-serif font-medium text-midnight-green mb-6 text-center">
              {missionStatement.methods.title}
            </h4>
            
            <div className="space-y-8 mt-8">
              {missionStatement.methods.sections.map((section, index) => (
                <div key={index}>
                  <h5 className="text-xl md:text-2xl font-serif font-medium text-midnight-green mb-3 text-center">
                    {section.title}
                  </h5>
                  <p className="text-midnight-green/80 leading-relaxed text-center">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href={missionStatement.cta.discover.href}
              className="inline-flex items-center justify-center px-8 py-3 bg-persian-green hover:bg-persian-green/90 text-white font-medium rounded-full transition-all duration-200 hover:shadow-lg"
            >
              {missionStatement.cta.discover.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              href={missionStatement.cta.background.href}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-persian-green text-persian-green hover:bg-persian-green/10 font-medium rounded-full transition-all duration-200"
            >
              {missionStatement.cta.background.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 