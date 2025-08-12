'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
// import { AcceptedInsurance } from '@/components/AcceptedInsurance';
import { credentials, values, experience, therapistProfile, aboutPage, missionStatement } from '@/data/augustadvice';
import { MissionStatement } from '@/components/MissionStatement';

export default function AboutPage() {
  return (
    <div className="">
      <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-persian-green/50 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-persian-green/10">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-midnight-green mb-8">
              {aboutPage.hero.title}
            </h1>
            <p className="text-midnight-green/80 text-xl font-sans leading-relaxed mb-8">
              {aboutPage.hero.description}
            </p>
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-persian-green w-5 h-5 flex-shrink-0" />
                  <span className="text-midnight-green/70 font-sans">{credential.text}</span>
                </div>
              ))}
            </div>
            <Button 
              className="bg-persian-green hover:bg-persian-green/90 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              {aboutPage.hero.ctaText}
            </Button>
          </div>
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src={aboutPage.hero.image}
                alt={`${therapistProfile.name} - ${therapistProfile.title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Values Section */}
      <section className="bg-[#E3E7E0] bg-opacity-90 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-midnight-green text-center mb-16">
            {aboutPage.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <h3 className="text-2xl font-serif font-medium text-midnight-green mb-4">
                  {value.title}
                </h3>
                <p className="text-midnight-green/80 font-sans leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-midnight-green mb-8">
              {aboutPage.experience.title}
            </h2>
            {experience.map((exp, index) => (
              <p key={index} className="text-midnight-green/80 font-sans text-lg leading-relaxed mb-8">
                {exp.paragraph}
              </p>
            ))}
            <Button 
              className="bg-persian-green hover:bg-persian-green/90 text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              {aboutPage.experience.ctaText}
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-[#F4FFF6]">
        
        <MissionStatement />
        <ContactSection />
        {/* <AcceptedInsurance /> */}
      </div>
    </div>
  );
}