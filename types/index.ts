// Service Type
export interface Service {
  title: string;
  description: string;
  image: string;
  points: string[];
}

// Credential Type
export interface Credential {
  text: string;
}

// Value Type
export interface Value {
  title: string;
  description: string;
}

// Experience Type
export interface Experience {
  paragraph: string;
}

// Insurance Type
export interface Insurance {
  name: InsuranceProviderName;
  logo: string;
  width: number;
}

// Contact Details Type
export interface ContactDetails {
  location: string;
  phone: string;
  email: string;
  hours: {
    day: string;
    time: string;
  }[];
}

// Hero Content Type
export interface HeroContent {
  title: {
    main: string;
    sub: string;
  };
  paragraphs: string[];
  ctaText: string;
  backgroundImage: string;
}

// Home Page Config Type
export interface HomePageConfig {
  hero: HeroContent;
  quote?: QuoteSection;
  testimonials?: Testimonial[];
  organizations?: Organization[];
  ctaBanner: CtaBanner;
  services: Service[];
  founder: Founder;
  contact: ContactSection;
}

// Quote Section Type
export interface QuoteSection {
  quote: {
    textHtml: string;
    author?: string;
  };
  description: {
    textHtml: string;
  };
  cta: {
    text: string;
    link: string;
  };
}

// Testimonial Type
export interface Testimonial {
  text: string;
  rating: number;
  author?: string;
}

// Organization Type
export interface Organization {
  name: string;
  logo: string;
  width: number;
}

// CTA Banner Type
export interface CtaBanner {
  title: string;
  phone: string;
  ctaText: string;
  backgroundImage: string;
}

// Founder Type
export interface Founder {
  name: string;
  title: string;
  image: string;
  paragraphs: string[];
  highlights: string[];
}

// Contact Section Type
export interface ContactSection {
  title: string;
  description: string;
  ctaText: string;
}

// FAQ Type
export interface FAQ {
  question: string;
  answer: string;
}

// About Page Type
export interface AboutPage {
  hero: {
    title: string;
    description: string;
    image: string;
    ctaText: string;
  };
  values: {
    title: string;
  };
  experience: {
    title: string;
    ctaText: string;
  };
}

// Contact Page Type
export interface ContactPage {
  hero: {
    title: string;
    description: string;
  };
  info: {
    title: string;
    description: string;
  };
  hours: {
    title: string;
  };
}

// FAQs Page Type
export interface FAQsPage {
  hero: {
    title: string;
    description: string;
  };
  footer: {
    description: string;
    ctaText: string;
  };
}

// Website Metadata Type
export interface WebsiteMetadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

// Insurance Provider Type
export type InsuranceProviderName = string;

export interface InsuranceProvider {
  name: string;
  logo?: string;
}

// Therapist Profile Type
export interface TherapistProfile {
  name: string;
  legalName: string;
  companyName: string;
  title: string;
  bio: string;
  fees: {
    individual: number;
    couple: number;
  };
  acceptedPaymentMethods: string[];
  takesInsurance: boolean;
  acceptedInsurances: string[];
  address: {
    street?: string;
    city: string;
    state: string;
    zip: string;
  };
  specialties: string[];
  expertise: string[];
  certifications: string[];
  education: {
    degree: string;
    school: string;
    graduationYear: number;
  };
  yearsInPractice: number;
  phone: string;
  email: string;
  website: string | null;
  offersVirtual: boolean;
  offersFreeConsultation: boolean;
  consultationLength: number;
}

// Services Page Type
export interface ServicesPage {
  hero: {
    title: string;
    description: string;
  };
  ctaSection: {
    title: string;
    description: string;
    ctaText: string;
  };
} 

export interface MissionStatement {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  methods: {
    title: string;
    sections: {
      title: string;
      description: string;
    }[];
  };
  cta: {
    discover: {
      text: string;
      href: string;
    };
    background: {
      text: string;
      href: string;
    };
  };
} 