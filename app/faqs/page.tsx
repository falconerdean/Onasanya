'use client';

import { ContactSection } from '@/components/ContactSection';
// import { AcceptedInsurance } from '@/components/AcceptedInsurance';
import { faqs, faqsPage } from '@/data/augustadvice';

export default function FAQsPage() {
  return (
    <div className="pb-16">
      <div className="bg-light-sea-green/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <div className="bg-persian-green/50 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-persian-green/10 mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-light text-midnight-green mb-6 text-center">
            {faqsPage.hero.title}
          </h1>
              <p className="text-midnight-green/80 font-sans text-lg text-center">
            {faqsPage.hero.description}
          </p>
            </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-6 py-2 shadow-[0_2px_10px_rgb(0,0,0,0.08)]"
              >
                  <h2 className="text-xl font-serif font-medium text-midnight-green py-4">
                  {faq.question}
                </h2>
                  <p className="text-midnight-green/80 font-sans text-lg pb-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

            <div className="mt-16">
              <div className="bg-persian-green/50 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-persian-green/10 text-center">
                <p className="text-midnight-green/80 font-sans text-lg mb-8">
              {faqsPage.footer.description}
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
                  className="bg-persian-green hover:bg-persian-green/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg"
            >
              {faqsPage.footer.ctaText}
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="bg-white">
        <ContactSection />
        {/* <AcceptedInsurance /> */}
      </div>
    </div>
  );
}