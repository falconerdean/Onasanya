'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/public/images/logo-transparent-bg-center-only.webp';
import { Button } from '@/components/ui/button'; 
import { useState } from 'react';
import { therapistProfile } from '@/data/augustadvice';

const navigationLinks = [
  { href: '/', label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about', label: 'ABOUT' },
  { href: '/faqs', label: 'FAQS' },
  { href: '/contact', label: 'CONTACT' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
          
            <span className="ml-3 text-lg font-serif font-medium text-midnight-green">
              {therapistProfile.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-midnight-green/80 hover:text-midnight-green transition-colors duration-200 uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Button 
              asChild
              className="bg-persian-green hover:bg-persian-green/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg"
            >
              <Link href="/contact">
                {therapistProfile.offersFreeConsultation ? 'Schedule a Free Consultation' : 'Schedule a Session'}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-midnight-green hover:text-midnight-green/80 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-persian-green"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          </div>
        </div>
        
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-lg">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block w-full text-left px-3 py-2 text-base font-medium text-midnight-green/80 hover:text-midnight-green hover:bg-gray-50 rounded-md transition-colors duration-200 uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-3 py-2">
              <Button 
                asChild
                className="w-full bg-persian-green hover:bg-persian-green/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
              >
                <Link href="/contact" onClick={handleLinkClick} className="w-full">
                  {therapistProfile.offersFreeConsultation ? 'Schedule a Free Consultation' : 'Schedule a Session'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}