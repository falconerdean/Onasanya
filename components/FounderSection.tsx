'use client';

import { founder } from '@/data/augustadvice';

export function FounderSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:pl-8">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-midnight-green mb-4">
                  Meet Your Therapist
                </h2>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-persian-green mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg text-gray-600">{founder.title}</p>
              </div>
              
              <div className="space-y-6">
                {founder.paragraphs.map((paragraph: string, index: number) => (
                  <p 
                    key={index} 
                    className="text-midnight-green/80 font-sans leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}