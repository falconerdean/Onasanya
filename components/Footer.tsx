'use client';

import Link from 'next/link';
import { therapistProfile, contactDetails } from '@/data/augustadvice';
import { Phone, Mail, MapPin } from 'lucide-react';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy & Terms' },
  { href: '/good-faith', label: 'Good Faith Estimate' },
];

export function Footer() {
  // Generate email from first name and business name
  const generateEmail = () => {
    const firstName = therapistProfile.name.split(' ')[0].toLowerCase();
    const businessEmail = therapistProfile.companyName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '') // Remove any non-alphanumeric characters
      .concat('.com');
    return `${firstName}@${businessEmail}`;
  };

  return (
    <footer className="bg-midnight-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif font-medium text-white mb-4">
              {therapistProfile.companyName}
            </h3>
            <p className="text-white/80 font-sans leading-relaxed mb-6 max-w-md">
              Professional counseling services providing compassionate, evidence-based therapy 
              to individuals and couples seeking support and healing.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-3 text-light-sea-green" />
                <span className="font-sans">
                  {therapistProfile.address.street && `${therapistProfile.address.street}, `}
                  {therapistProfile.address.city}, {therapistProfile.address.state} {therapistProfile.address.zip}
                </span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-3 text-light-sea-green" />
                <a 
                  href={`tel:${therapistProfile.phone.replace(/\D/g, '')}`}
                  className="font-sans hover:text-light-sea-green transition-colors"
                >
                  {therapistProfile.phone}
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-3 text-light-sea-green" />
                <a 
                  href={`mailto:${generateEmail()}`}
                  className="font-sans hover:text-light-sea-green transition-colors"
                >
                  {generateEmail()}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-light-sea-green transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Legal */}
          <div>
            <h4 className="text-lg font-serif font-medium text-white mb-4">
              Available Hours
            </h4>
            <div className="text-white/80 font-sans text-sm space-y-1 mb-6">
              {therapistProfile.offersVirtual ? (
                <p>Available for virtual sessions</p>
              ) : (
                contactDetails.hours.map((hour, index) => (
                  <p key={index}>
                    <span className="text-light-sea-green">{hour.day}:</span> {hour.time}
                  </p>
                ))
              )}
            </div>
            
            <h4 className="text-lg font-serif font-medium text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-light-sea-green transition-colors font-sans text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 font-sans text-sm">
            © 2025 All Rights Reserved | {therapistProfile.companyName}, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}