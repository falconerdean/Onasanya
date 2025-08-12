
import { z } from "zod";

// Schema for insurance provider names
const insuranceProviderNameSchema = z.string();

// Schema for contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// TherapistProfile Schema
const therapistProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  legalName: z.string().min(1, 'Legal name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  title: z.string().min(1, 'Title is required'),
  bio: z.string().min(1, 'Bio is required'),
  fees: z.object({
    individual: z.number().positive(),
    couple: z.number().positive(),
  }),
  acceptedPaymentMethods: z.array(z.string()),
  takesInsurance: z.boolean(),
  acceptedInsurances: z.array(insuranceProviderNameSchema),
  address: z.object({
    street: z.string().min(1, 'Street is required').optional(),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'ZIP code is required'),
  }),
  specialties: z.array(z.string()),
  expertise: z.array(z.string()),
  certifications: z.array(z.string()),
  education: z.object({
    degree: z.string().min(1, 'Degree is required'),
    school: z.string().min(1, 'School is required'),
    graduationYear: z.number().int().positive(),
  }),
  yearsInPractice: z.number().int().positive(),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  website: z.string().url().nullable(),
  offersVirtual: z.boolean(),
  offersFreeConsultation: z.boolean(),
  consultationLength: z.number().int().positive(),
});

// Service Schema
const serviceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().url('Image must be a valid URL'),
  points: z.array(z.string()).min(1, 'At least one point is required'),
});

// Credential Schema
const credentialSchema = z.object({
  text: z.string().min(1, 'Credential text is required'),
});

// Value Schema
const valueSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

// Experience Schema
const experienceSchema = z.object({
  paragraph: z.string().min(1, 'Paragraph is required'),
});

// ContactDetails Schema
const contactDetailsSchema = z.object({
  location: z.string().min(1, 'Location is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  hours: z.array(z.object({
    day: z.string().min(1, 'Day is required'),
    time: z.string().min(1, 'Time is required'),
  })),
});

// HeroContent Schema
const heroContentSchema = z.object({
  title: z.object({
    main: z.string().min(1, 'Main title is required'),
    sub: z.string().min(1, 'Subtitle is required'),
  }),
  paragraphs: z.array(z.string()).min(1, 'At least one paragraph is required'),
  ctaText: z.string().min(1, 'CTA text is required'),
  backgroundImage: z.string().url('Background image must be a valid URL'),
});

// Testimonial Schema
const testimonialSchema = z.object({
  text: z.string().min(1, 'Testimonial text is required'),
  rating: z.number().min(1).max(5),
  author: z.string().optional(),
});

// Organization Schema
const organizationSchema = z.object({
  name: z.string().min(1, 'Organization name is required'),
  logo: z.string().url('Logo must be a valid URL'),
  width: z.number().positive('Width must be a positive number'),
});

// CtaBanner Schema
const ctaBannerSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  phone: z.string().min(1, 'Phone is required'),
  ctaText: z.string().min(1, 'CTA text is required'),
  backgroundImage: z.string().url('Background image must be a valid URL'),
});

// Founder Schema
const founderSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  title: z.string().min(1, 'Title is required'),
  image: z.string().url('Image must be a valid URL'),
  paragraphs: z.array(z.string()).min(1, 'At least one paragraph is required'),
  highlights: z.array(z.string()),
});

// ContactSection Schema
const contactSectionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  ctaText: z.string().min(1, 'CTA text is required'),
});

// FAQ Schema
const faqSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  answer: z.string().min(1, 'Answer is required'),
});

// WebsiteMetadata Schema
const websiteMetadataSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  keywords: z.array(z.string()).optional(),
  author: z.string().optional(),
  ogImage: z.string().url().optional(),
  ogType: z.string().optional(),
  twitterCard: z.string().optional(),
});

// MissionStatement Schema
const missionStatementSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  description: z.string().min(1, "Description is required"),
  
  methods: z.object({
    title: z.string().min(1, "Methods title is required"),
    sections: z.array(
      z.object({
        title: z.string().min(1, "Section title is required"),
        description: z.string().min(1, "Section description is required"),
      })
    ),
  }),
  cta: z.object({
    discover: z.object({
      text: z.string().min(1, "CTA text is required"),
      href: z.string().min(1, "CTA link is required"),
    }),
    background: z.object({
      text: z.string().min(1, "CTA text is required"),
      href: z.string().min(1, "CTA link is required"),
    }),
  }),
});

// QuoteSection Schema
const quoteSectionSchema = z.object({
  quote: z.object({
    textHtml: z.string().min(1, 'Quote text is required'),
    author: z.string().optional()
  }),
  description: z.object({
    textHtml: z.string().min(1, 'Description text is required')
  }),
  cta: z.object({
    text: z.string().min(1, 'CTA text is required'),
    link: z.string().min(1, 'CTA link is required')
  })
});

// InsuranceProvider Schema
const insuranceProviderSchema = z.object({
  name: z.string().min(1, 'Insurance provider name is required'),
  logo: z.string().url('Logo must be a valid URL').optional()
});

// Data Validation Function
export const validateData = (data: any, schema: z.ZodSchema<any>) => {
  try {
    schema.parse(data);
    return { isValid: true, errors: null };
  } catch (e) {
    if (e instanceof z.ZodError) {
      return { isValid: false, errors: e.flatten() };
    }
    throw e;
  }
};

// Export all schemas
export {
  serviceSchema,
  credentialSchema,
  valueSchema,
  experienceSchema,
  contactDetailsSchema,
  heroContentSchema,
  testimonialSchema,
  organizationSchema,
  ctaBannerSchema,
  founderSchema,
  contactSectionSchema,
  faqSchema,
  websiteMetadataSchema,
  therapistProfileSchema,
  missionStatementSchema,
  quoteSectionSchema,
  insuranceProviderSchema
}; 