import { Service, Credential, Value, Experience, Insurance, ContactDetails, TherapistProfile, HeroContent, QuoteSection, Testimonial, Organization, CtaBanner, Founder, ContactSection, WebsiteMetadata, FAQ, AboutPage, ContactPage, FAQsPage, ServicesPage, InsuranceProviderName, MissionStatement } from '@/types';

// Website metadata
export const websiteMetadata: WebsiteMetadata = {
  title: "Ingredients Therapy Services - Opeyemi A. Onasanya, LPC, NCC",
  description: "Opeyemi A. Onasanya is a licensed professional counselor in Philadelphia, PA, specializing in OCD, Anxiety, Depression, and ADHD for adolescents, young adults, and adults.",
  keywords: [
    "Opeyemi Onasanya",
    "Yemi Onasanya",
    "Philadelphia therapist",
    "OCD therapy",
    "Anxiety counseling",
    "Depression counseling",
    "ADHD support",
    "ERP therapy",
    "Trauma-informed care",
    "Family conflict",
    "Mental health support",
    "Philadelphia counseling",
    "LPC",
    "NCC"
  ],
  author: "Opeyemi A. Onasanya, LPC, NCC",
  ogImage: "/images/yemi-onasanya.jpg",
  ogType: "website",
  twitterCard: "summary_large_image"
};

// Services data
export const services: Service[] = [
  {
    title: "OCD & Anxiety Treatment (ERP)",
    description: "Specialized therapy using Exposure and Response Prevention (ERP) for OCD and anxiety-related disorders to help you regain control from intrusive thoughts.",
    image: "/images/services/mental-health.webp",
    points: [
      "Exposure and Response Prevention (ERP)",
      "Intrusive thought management",
      "Anxiety reduction techniques",
      "Cognitive Behavioral Therapy (CBT)",
      "Building resilience",
      "Personalized treatment plans"
    ]
  },
  {
    title: "ADHD & Depression Support",
    description: "Compassionate support for managing ADHD and Depression, focusing on developing coping skills, improving executive function, and fostering emotional well-being.",
    image: "/images/services/mental-health.jpg",
    points: [
      "ADHD coping strategies",
      "Depression management",
      "Emotional regulation",
      "Executive functioning skills",
      "Cognitive Behavioral Therapy (CBT)",
      "Building self-esteem"
    ]
  },
  {
    title: "Family & Trauma Therapy",
    description: "Support for family conflict, life transitions, and trauma recovery using evidence-based approaches like TF-CBT and ESFT in a safe, validating environment.",
    image: "/images/services/couple.jpg",
    points: [
      "Family systems therapy",
      "Trauma-Focused CBT (TF-CBT)",
      "Healing from past trauma",
      "Conflict resolution",
      "Improving communication",
      "Navigating life transitions"
    ]
  }
];

// Credentials data
export const credentials: Credential[] = [
  { text: "Licensed Professional Counselor (LPC) in Pennsylvania (PC017808)" },
  { text: "National Certified Counselor (NCC)" },
  { text: "Master of Science from Springfield College (2021)" },
  { text: "Trained in ERP, CBT, TF-CBT, DBT, and ESFT" },
  { text: "Verified by Psychology Today" }
];

// Values data
export const values: Value[] = [
  {
    title: "Compassionate & Non-Judgmental Care",
    description: "Creating a safe, supportive, and collaborative space where you can explore your thoughts and emotions openly—without fear of judgment."
  },
  {
    title: "Evidence-Based & Tailored Therapy",
    description: "Using proven methods like ERP, CBT, and DBT, I tailor treatment to your unique needs to work together toward lasting change."
  },
  {
    title: "Empathy & Validation",
    description: "I am committed to helping you achieve your goals by ensuring you feel heard, seen, and supported throughout your healing journey."
  }
];

// Experience paragraphs
export const experience: Experience[] = [
  {
    paragraph: "Hi, I’m Yemi Onasanya—a licensed mental health professional dedicated to helping individuals and families navigate life’s challenges with compassion and care. I provide evidence-based therapy tailored to support healing, resilience, and meaningful personal growth."
  },
  {
    paragraph: "I specialize in working with adolescents, young adults, and middle-aged adults experiencing OCD, Anxiety and related disorders, Depression, ADHD, and co-occurring conditions. My goal is to create a safe, supportive, and collaborative space for you to explore your thoughts and emotions openly."
  },
  {
    paragraph: "I use evidence-based techniques like Exposure and Response Prevention (ERP), CBT, TF-CBT, DBT, and trauma-informed care. I tailor treatment to your unique needs—whether you're facing intrusive thoughts, emotional struggles, family conflict, or life transitions, I'm here to support your growth."
  },
  {
    paragraph: "Using empathy and validation, I am committed to helping you achieve your goals, heal from past traumas, and build resilience. You deserve to be heard, seen, and supported. I look forward to supporting your healing journey."
  }
];

// Contact details
export const contactDetails: ContactDetails = {
  location: "Philadelphia, PA 19143",
  phone: "(267) 478-1857",
  email: "Contact via phone or email form",
  hours: [
    { day: "Weekdays", time: "Available Online" },
    { day: "Evenings", time: "Available Online" },
    { day: "Weekends", time: "Some Availability" }
  ]
};

// Hero content
export const heroContent: HeroContent = {
  title: {
    main: "Opeyemi A. Onasanya",
    sub: "Licensed Professional Counselor, LPC, NCC"
  },
  paragraphs: [
    "I'm Yemi Onasanya, a licensed mental health professional dedicated to helping individuals and families navigate life’s challenges with compassion and care.",
    "I specialize in evidence-based therapy for OCD, Anxiety, Depression, and ADHD. My goal is to create a safe, supportive space where we can work together toward lasting change.",
    "You deserve to be heard, seen, and supported. Let's connect and begin your journey toward healing and personal growth."
  ],
  ctaText: "Schedule Your Free 15-Minute Consultation",
  backgroundImage: "/images/insite-hero-background.jpg"
};

// Quote section
export const quoteSection: QuoteSection = {
  quote: {
    textHtml: "You deserve to be <strong style='color: #E7963E;'>heard</strong>, <strong style='color: #E7963E;'>seen</strong>, and <strong style='color: #E7963E;'>supported</strong>.",
    author: "Opeyemi A. Onasanya"
  },
  description: {
    textHtml: "A <strong style='color: #E7963E;'>Philadelphia</strong> based practice specializing in <strong style='color: #E7963E;'>OCD & Anxiety</strong>, <strong style='color: #F59E0B;'>ADHD & Depression</strong>, and <strong style='color: #E7963E;'>Trauma-Informed Care</strong>."
  },
  cta: {
    text: "Start Your Journey",
    link: "/contact"
  }
};

// Testimonials
export const testimonials: Testimonial[] = [
  {
    text: "Yemi's expertise in ERP for my OCD was life-changing. He created such a safe and supportive space for me to confront my fears. I've seen huge improvements in just a few months.",
    rating: 5,
    author: "OCD Client"
  },
  {
    text: "As a young adult struggling with ADHD and anxiety, I felt really understood by Yemi. He provided practical tools and strategies that have helped me so much with school and life.",
    rating: 5,
    author: "Young Adult Client"
  },
  {
    text: "Therapy for my teenager was a big step for our family. Yemi's ability to connect with my child and address family dynamics with compassion has made a world of difference.",
    rating: 5,
    author: "Parent of Teen Client"
  },
  {
    text: "I was struggling with past trauma and depression. Yemi's trauma-informed approach was gentle yet effective. He helped me build resilience and find hope again.",
    rating: 5,
    author: "Trauma & Depression Client"
  }
];

// Organizations
export const organizations: Organization[] = [
  { name: "Psychology Today Verified", logo: "/images/orgs/psychologytoday.png", width: 200 },
  { name: "Headway", logo: "/images/orgs/headway-logo.png", width: 240 },
  { name: "Zocdoc", logo: "/images/orgs/zocdoc-logo-zocdoc.png", width: 200 }
];

// CTA Banner
export const ctaBanner: CtaBanner = {
  title: "Ready to begin your path to healing?",
  phone: "(267) 478-1857",
  ctaText: "Schedule Your Free Consultation",
  backgroundImage: "/images/tree-wallpaper-slice.webp"
};

// Founder information
export const founder: Founder = {
  name: "Opeyemi 'Yemi' Onasanya",
  title: "Licensed Professional Counselor, LPC, NCC",
  image: "/images/yemi-onasanya.jpg",
  paragraphs: [
    "I'm a licensed mental health professional with 4 years of experience, dedicated to providing evidence-based therapy to diverse clients. I focus on fostering healing, resilience, and personal growth.",
    "I specialize in treating OCD, Anxiety, Depression, and ADHD in adolescents and adults. My approach is rooted in empathy and validation, utilizing powerful techniques like ERP, CBT, and trauma-informed care.",
    "I earned my Master of Science from Springfield College and am a National Certified Counselor. I am committed to creating a safe, collaborative space where you feel heard, seen, and supported on your journey to lasting growth."
  ],
  highlights: [
    "Licensed Professional Counselor",
    "National Certified Counselor",
    "4 Years of Experience",
    "Speaks English, Pidgin, Yoruba",
    "ERP, CBT, & DBT Trained",
    "Trauma-Informed Care"
  ]
};

// Contact section
export const contactSection: ContactSection = {
  title: "Let's Connect",
  description: "Taking the first step can be challenging, but you don't have to do it alone. I offer a safe and collaborative space to explore what's on your mind. I accept many major insurance plans, including Aetna, Cigna, and Blue Cross Blue Shield.",
  ctaText: "Schedule Your Free 15-Minute Consultation"
};

// FAQs data
export const faqs: FAQ[] = [
  {
    question: "What types of therapy do you specialize in?",
    answer: "I specialize in treating OCD, Anxiety, Depression, and ADHD. I use evidence-based techniques like Exposure and Response Prevention (ERP), Cognitive Behavioral Therapy (CBT), and trauma-informed care, tailored to your unique needs."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I offer therapy sessions primarily online via a secure video platform. I am available most weekdays, some weekends, and in the evenings."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "I accept a variety of insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, Carelon, Quest Behavioral Health, and others. I also offer out-of-network options."
  },
  {
    question: "What are your fees and payment methods?",
    answer: "Individual sessions are $150 and couple sessions are $200. I offer a sliding scale for those who may be eligible. I accept all major credit cards, HSA, PayPal, Zelle, and other payment methods."
  },
  {
    question: "How do I get started?",
    answer: "You can call or email me to schedule a free 15-minute consultation. This allows us to discuss your needs and see if we're a good fit to work together. My number is (267) 478-1857."
  }
];

// About page data
export const aboutPage: AboutPage = {
  hero: {
    title: "Meet Your Therapist",
    description: "Hi, I’m Yemi Onasanya, a licensed professional counselor in Philadelphia. I am dedicated to helping individuals and families navigate life’s challenges with compassion and care, using evidence-based therapy to support healing, resilience, and growth.",
    image: "/images/yemi-onasanya.jpg",
    ctaText: "Schedule Your Free Consultation"
  },
  values: {
    title: "My Therapeutic Philosophy"
  },
  experience: {
    title: "Experience & Expertise",
    ctaText: "Begin Your Journey"
  }
};

// Contact page data
export const contactPage: ContactPage = {
  hero: {
    title: "Let's Connect",
    description: "Ready to take the first step? I'm here to help you on your journey. Reach out today to schedule your free 15-minute consultation and learn how we can work together."
  },
  info: {
    title: "Contact Information",
    description: "Whether you have questions about therapy, insurance, or scheduling, I'm here to help. I offer convenient online sessions via a secure platform. Call (267) 478-1857 to connect."
  },
  hours: {
    title: "Available Hours"
  }
};

// FAQs page data
export const faqsPage: FAQsPage = {
  hero: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about my therapy services, fees, insurance, and what to expect when working with me."
  },
  footer: {
    description: "Still have questions? I'm here to help you feel confident in your decision to start therapy. Reach out to discuss how we can support your mental health journey.",
    ctaText: "Schedule Your Free Consultation"
  }
};

// Services page data
export const servicesPage: ServicesPage = {
  hero: {
    title: "Therapy Services",
    description: "I offer tailored therapy services for OCD, anxiety, depression, and ADHD using proven methods like ERP and CBT. My goal is to provide compassionate, effective care that fosters healing and personal growth."
  },
  ctaSection: {
    title: "Ready to Begin?",
    description: "Take the first step toward improved well-being. Schedule your free 15-minute consultation to begin your journey toward lasting growth.",
    ctaText: "Schedule Your Free Consultation"
  }
};

// Mission Statement
export const missionStatement: MissionStatement = {
  title: "My Mission",
  subtitle: "Fostering Healing, Resilience, and Personal Growth",
  description: "My mission is to create a safe, supportive, and collaborative space where you can explore your thoughts and emotions openly. I use empathy, validation, and evidence-based care to help you achieve your goals, heal from past traumas, and build resilience.",
  image: "/images/services/mens-mental.webp",
  methods: {
    title: "My Therapeutic Approach",
    sections: [
      {
        title: "Exposure & Response Prevention (ERP)",
        description: "A specialized, evidence-based approach for OCD and anxiety, helping you confront fears and reduce compulsive behaviors in a structured, supportive way."
      },
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        description: "Utilizing proven CBT techniques to identify, challenge, and reframe unhelpful thought patterns and behaviors to improve your mental health."
      },
      {
        title: "Trauma-Informed & Family Systems",
        description: "Integrating trauma-informed care with family systems therapy (ESFT) to address past wounds and improve relational dynamics in a holistic way."
      }
    ]
  },
  cta: {
    discover: {
      text: "View Services",
      href: "/services"
    },
    background: {
      text: "Learn More About Me",
      href: "/about"
    }
  }
};

// Insurance providers data
export const insuranceProviders: Insurance[] = [
  { name: "Aetna", logo: "/images/logos/aetna.png", width: 120 },
  { name: "Blue Cross Blue Shield", logo: "/images/logos/BCBSMA_Logo.png", width: 200 },
  { name: "Carelon Behavioral Health", logo: "/images/logos/carelon-logo.png", width: 140 },
  { name: "Cigna", logo: "/images/logos/Cigna-Logo.png", width: 120 },
  { name: "Quest Behavioral Health", logo: "/images/logos/quest-logo-light.png", width: 160 },
  { name: "Out of Network", logo: "/images/logos/oscar.png", width: 100 }
];

// Therapist Profile
export const therapistProfile: TherapistProfile = {
  name: "Opeyemi A Onasanya",
  legalName: "Opeyemi A Onasanya",
  companyName: "Ingredients Therapy Services",
  title: "Licensed Professional Counselor, LPC, NCC",
  bio: "Hi, I’m Yemi Onasanya—a licensed mental health professional dedicated to helping individuals and families navigate life’s challenges with compassion and care. I specialize in working with adolescents, young adults, and middle-aged adults experiencing OCD, Anxiety and related disorders, Depression, ADHD, and co-occurring conditions.",
  fees: {
    individual: 150,
    couple: 200
  },
  acceptedPaymentMethods: [
    "ACH Bank transfer",
    "American Express",
    "Discover",
    "Health Savings Account",
    "Mastercard",
    "Paypal",
    "Venmo",
    "Visa",
    "Wire",
    "Zelle"
  ],
  takesInsurance: true,
  acceptedInsurances: [
    "Aetna",
    "Blue Cross",
    "Blue Shield",
    "BlueCross and BlueShield",
    "Capital Blue Cross",
    "Carelon Behavioral Health",
    "Cigna and Evernorth",
    "Horizon Blue Cross and Blue Shield",
    "Independence Blue Cross",
    "Quest Behavioral Health",
    "Out of Network"
  ],
  address: {
    city: "Philadelphia",
    state: "PA",
    zip: "19143"
  },
  specialties: [
    "Obsessive-Compulsive (OCD)",
    "Anxiety",
    "ADHD",
    "Depression",
    "Trauma and PTSD"
  ],
  expertise: [
    "Anger Management",
    "Behavioral Issues",
    "Bipolar Disorder",
    "Coping Skills",
    "Family Conflict",
    "Impulse Control Disorders",
    "Mood Disorders",
    "Oppositional Defiance (ODD)",
    "Spirituality"
  ],
  certifications: [
    "Licensed Professional Counselor (LPC)",
    "National Certified Counselor (NCC)",
    "Exposure and Response Prevention (ERP)",
    "Cognitive Behavioral (CBT)",
    "Trauma Focused Cognitive Behavioral (TF-CBT)",
    "Dialectical Behavior (DBT)"
  ],
  education: {
    degree: "MSc",
    school: "Springfield College",
    graduationYear: 2021
  },
  yearsInPractice: 4,
  phone: "(267) 478-1857",
  email: "Contact via form",
  website: null,
  offersVirtual: true,
  offersFreeConsultation: true,
  consultationLength: 15
};