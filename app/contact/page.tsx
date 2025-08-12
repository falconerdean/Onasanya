'use client';

import { ContactForm } from '@/components/ContactForm';
// import { AcceptedInsurance } from '@/components/AcceptedInsurance';
import { contactDetails, contactPage } from '@/data/augustadvice';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pb-16">
      <div className="bg-light-sea-green/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="bg-persian-green/50 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-persian-green/10 mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-light text-midnight-green mb-6 text-center">
                {contactPage.hero.title}
              </h1>
              <p className="text-midnight-green/80 font-sans text-lg text-center">
                {contactPage.hero.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Info Section */}
              <div className="bg-persian-green backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-persian-green/10">
                <h2 className="text-2xl font-serif font-medium text-white mb-4">
                  {contactPage.info.title}
                </h2>
                <p className="text-white font-sans mb-6">
                  {contactPage.info.description}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-evergreen-green p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-white">
                        <a href={`tel:${contactDetails.phone.replace(/\D/g, '')}`} className="hover:text-persian-green transition-colors">
                          {contactDetails.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-evergreen-green p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-white">
                        <a href={`mailto:${contactDetails.email}`} className="hover:text-persian-green transition-colors">
                          {contactDetails.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-evergreen-green p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Office Location</h3>
                      <p className="text-white whitespace-pre-line">
                        {contactDetails.location}
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-medium text-white mb-3 mt-12">{contactPage.hours.title}</h3>
                <div className="space-y-0">
                  {contactDetails.hours.map((hour, index) => (
                    <p key={index} className="text-white font-sans">
                      <span className="text-white font-medium">{hour.day}:</span> {hour.time}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* <AcceptedInsurance /> */}
      </div>
    </div>
  );
}