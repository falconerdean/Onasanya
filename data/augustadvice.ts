import { Service, Credential, Value, Experience, Insurance, ContactDetails, TherapistProfile, HeroContent, QuoteSection, Testimonial, Organization, CtaBanner, Founder, ContactSection, WebsiteMetadata, FAQ, AboutPage, ContactPage, FAQsPage, ServicesPage, InsuranceProviderName, MissionStatement } from '@/types';

// Website metadata
export const websiteMetadata: WebsiteMetadata = {
  title: "Re-Therapy Counseling Services - Licensed Professional Counselor in Forney",
  description: "Professional counseling services specializing in anxiety, depression, grief, life transitions, relationship challenges, and cultural identity concerns. Licensed Professional Counselor serving Forney, TX.",
  keywords: [
    "Gilma Y Martinez",
    "Forney therapist",
    "anxiety therapy",
    "depression counseling",
    "grief counseling",
    "life transitions",
    "relationship counseling",
    "cultural identity",
    "stress management",
    "trauma therapy",
    "women's issues",
    "mental health support",
    "Forney counseling",
    "LPC",
    "NCC"
  ],
  author: "Gilma Y Martinez, MA, LPC, NCC",
  ogImage: "/images/og-image.jpg",
  ogType: "website",
  twitterCard: "summary_large_image"
};

// Services data
export const services: Service[] = [
  {
    title: "Anxiety & Depression Support",
    description: "Comprehensive therapy for managing anxiety and depression, helping you develop effective coping strategies and find emotional balance.",
    image: "/images/services/mental-health.jpg",
    points: [
      "Anxiety management",
      "Depression treatment",
      "Stress reduction",
      "Coping strategies",
      "Emotional regulation",
      "Mindfulness techniques"
    ]
  },
  {
    title: "Life Transitions & Personal Growth",
    description: "Support for navigating major life changes and personal development, focusing on building resilience and adapting to new circumstances.",
    image: "/images/services/therap.jpg",
    points: [
      "Career transitions",
      "Relationship changes",
      "Personal development",
      "Goal setting",
      "Decision making",
      "Identity exploration"
    ]
  },
  {
    title: "Cultural Identity & Women's Issues",
    description: "Specialized support for women and individuals exploring cultural identity, focusing on empowerment and authentic self-expression.",
    image: "/images/services/substance.webp",
    points: [
      "Cultural identity exploration",
      "Women's empowerment",
      "Self-esteem building",
      "Relationship dynamics",
      "Work-life balance",
      "Personal boundaries"
    ]
  }
];

// Credentials data
export const credentials: Credential[] = [
  { text: "Licensed Professional Counselor (LPC)" },
  { text: "National Certified Counselor (NCC)" },
  { text: "Master of Arts in Clinical Counseling and Marriage & Family from Hardin-Simmons University" },
  { text: "Member of American Counseling Association" },
  { text: "Member of National Board of Certified Counselors" }
];

// Values data
export const values: Value[] = [
  {
    title: "Person-Centered Approach",
    description: "Creating a safe, non-judgmental space where you can explore your thoughts and feelings at your own pace, with understanding and acceptance."
  },
  {
    title: "Culturally Sensitive Care",
    description: "Providing therapy that honors and respects your cultural background, identity, and unique life experiences."
  },
  {
    title: "Evidence-Based Methods",
    description: "Using proven therapeutic approaches including CBT, Mindfulness, and Motivational Interviewing to help you achieve your personal goals."
  }
];

// Experience paragraphs
export const experience: Experience[] = [
  {
    paragraph: "You may be feeling overwhelmed by anxiety, stuck in sadness, or navigating a life transition that's left you feeling lost or disconnected. Maybe you're balancing multiple roles—caregiver, partner, professional—and it feels like no one truly understands the weight you're carrying."
  },
  {
    paragraph: "I specialize in supporting individuals who are dealing with anxiety, depression, grief, life transitions, relationship challenges, and cultural identity concerns. With 8 years of experience in the field, I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Mindfulness, and Person-Centered Therapy."
  },
  {
    paragraph: "My practice is particularly focused on supporting women and individuals exploring cultural identity issues. I understand the unique challenges that come with navigating multiple cultural contexts and life transitions, and I provide a safe space for this exploration."
  },
  {
    paragraph: "I'm bilingual (English/Spanish) and culturally sensitive in my approach, making therapy accessible and comfortable for diverse populations. Whether you're dealing with anxiety, career transitions, or relationship challenges, I'm here to support your journey toward healing and growth."
  }
];

// Contact details
export const contactDetails: ContactDetails = {
  location: "Forney, TX 75126",
  phone: "(469) 290-4004",
  email: "Contact via phone",
  hours: [
    { day: "Monday", time: "Available Online" },
    { day: "Tuesday", time: "Available Online" },
    { day: "Wednesday", time: "Available Online" },
    { day: "Thursday", time: "Available Online" },
    { day: "Friday", time: "Available Online" }
  ]
};

// Hero content
export const heroContent: HeroContent = {
  title: {
    main: "Gilma Y Martinez",
    sub: "Licensed Professional Counselor"
  },
  paragraphs: [
    "Welcome to Re-Therapy Counseling Services. I'm here to offer a safe and supportive space where you can explore what's on your heart at your own pace.",
    "Whether you're feeling overwhelmed by anxiety, stuck in sadness, or navigating life transitions, I'm here to help you find clarity and healing. With expertise in anxiety, depression, grief, and cultural identity concerns, I provide compassionate, culturally-sensitive care.",
    "As a bilingual therapist (English/Spanish), I'm committed to making therapy accessible and comfortable for diverse populations. Together, we can work through the challenges you're facing and move toward greater understanding and personal growth."
  ],
  ctaText: "Schedule Your Free 15-Minute Consultation",
  backgroundImage: "/images/insite-hero-background.jpg"
};

// Quote section
export const quoteSection: QuoteSection = {
  quote: {
    textHtml: "You deserve a place where you can be <strong style='color: #E7963E;'>yourself</strong> and find <strong style='color: #E7963E;'>clarity and healing</strong>.",
    author: "Gilma Y Martinez"
  },
  description: {
    textHtml: "A <strong style='color: #E7963E;'>Forney</strong> based practice specializing in <strong style='color: #E7963E;'>anxiety & depression</strong>, <strong style='color: #F59E0B;'>life transitions</strong>, and <strong style='color: #E7963E;'>cultural identity</strong>."
  },
  cta: {
    text: "Start Your Journey",
    link: "/contact"
  }
};

// Testimonials
export const testimonials: Testimonial[] = [
  {
    text: "Gilma's culturally sensitive approach helped me navigate the complexities of my identity and relationships. Her understanding of cultural nuances made me feel truly seen and understood.",
    rating: 5,
    author: "Cultural Identity Client"
  },
  {
    text: "Working with Gilma during my career transition was transformative. Her support helped me manage my anxiety and find clarity in making important life decisions.",
    rating: 5,
    author: "Life Transition Client"
  },
  {
    text: "As a woman balancing multiple roles, I found Gilma's perspective invaluable. She helped me develop strategies for managing stress and setting healthy boundaries.",
    rating: 5,
    author: "Women's Issues Client"
  },
  {
    text: "Gilma's compassionate approach to treating my anxiety and depression has been life-changing. Her mindfulness techniques and practical coping strategies have made a real difference.",
    rating: 5,
    author: "Anxiety & Depression Client"
  }
];

// Organizations
export const organizations: Organization[] = [
  { name: "Hardin-Simmons University", logo: "/images/orgs/hardin-simmons.png", width: 200 },
  { name: "American Counseling Association", logo: "/images/orgs/aca.png", width: 240 },
  { name: "National Board of Certified Counselors", logo: "/images/orgs/nbcc.png", width: 200 }
];

// CTA Banner
export const ctaBanner: CtaBanner = {
  title: "Ready to begin your path to healing?",
  phone: "(469) 290-4004",
  ctaText: "Schedule Your Free Consultation",
  backgroundImage: "/images/tree-wallpaper-slice.webp"
};

// Founder information
export const founder: Founder = {
  name: "Gilma Y Martinez",
  title: "Licensed Professional Counselor, MA, LPC, NCC",
  image: "/images/gm.jpeg",
  paragraphs: [
    "With 8 years of experience in the field, I've dedicated my practice to helping individuals navigate life's challenges with understanding and compassion. I hold a Master of Arts in Clinical Counseling and Marriage & Family from Hardin-Simmons University.",
    "As a Licensed Professional Counselor and National Certified Counselor, I bring both expertise and cultural sensitivity to my work. I'm bilingual (English/Spanish) and understand the unique challenges of navigating multiple cultural contexts.",
    "I specialize in anxiety, depression, grief, life transitions, and cultural identity concerns. My approach combines evidence-based methods like CBT and Mindfulness with a deep appreciation for each person's unique journey and cultural background."
  ],
  highlights: [
    "Licensed Professional Counselor",
    "National Certified Counselor",
    "8 Years of Experience",
    "Bilingual (English/Spanish)",
    "CBT & Mindfulness Trained",
    "Culturally Sensitive Care"
  ]
};

// Contact section
export const contactSection: ContactSection = {
  title: "Let's Connect",
  description: "Taking the first step to start therapy can feel intimidating. I'm here to offer a safe and supportive space where you can explore what's on your heart at your own pace. I accept most major insurance plans including Aetna, BlueCross and BlueShield, Cigna, and UnitedHealthcare.",
  ctaText: "Schedule Your Free 15-Minute Consultation"
};

// FAQs data
export const faqs: FAQ[] = [
  {
    question: "What types of therapy do you offer?",
    answer: "I specialize in anxiety, depression, grief, life transitions, relationship challenges, and cultural identity concerns. I use evidence-based approaches including CBT, Mindfulness, and Person-Centered Therapy, tailoring each session to your unique needs."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I provide online therapy sessions through a secure platform. This allows you to receive support from the comfort of your own space."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "I accept most major insurance plans including Aetna, BlueCross and BlueShield, Carelon, Cigna, Optum, Oscar Health, Oxford, Quest Behavioral Health, and UnitedHealthcare."
  },
  {
    question: "What are your fees and payment methods?",
    answer: "Individual sessions are $100. I accept American Express, Discover, Mastercard, Visa, Health Savings Account, and Zelle. I work with insurance to make therapy accessible and affordable."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling (469) 290-4004. I offer a free 15-minute consultation to discuss your needs and ensure we're a good fit for working together."
  }
];

// About page data
export const aboutPage: AboutPage = {
  hero: {
    title: "Meet Your Therapist",
    description: "Hi, I'm Gilma Y Martinez, a Licensed Professional Counselor committed to helping individuals navigate life's challenges with understanding and compassion. With 8 years of experience, I specialize in providing culturally sensitive therapy focused on anxiety, depression, life transitions, and cultural identity concerns.",
    image: "/images/gm.jpeg",
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
    description: "Ready to take the first step towards better mental health? I'm here to help you begin your journey. Reach out today to schedule your free 15-minute consultation."
  },
  info: {
    title: "Contact Information",
    description: "Whether you have questions about therapy, insurance coverage, or would like to schedule an appointment, I'm here to support you. I offer convenient online sessions through a secure platform."
  },
  hours: {
    title: "Available Hours"
  }
};

// FAQs page data
export const faqsPage: FAQsPage = {
  hero: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about my therapy services, fees, insurance coverage, and what to expect in our work together."
  },
  footer: {
    description: "Still have questions? Don't hesitate to reach out. I'm here to help you understand how we can work together to support your mental health journey and improve your well-being.",
    ctaText: "Schedule Your Free Consultation"
  }
};

// Services page data
export const servicesPage: ServicesPage = {
  hero: {
    title: "Therapy Services",
    description: "I offer comprehensive therapy services focused on anxiety, depression, life transitions, and cultural identity concerns through evidence-based practices and compassionate care. Each approach is tailored to meet your unique needs and goals."
  },
  ctaSection: {
    title: "Ready to Begin?",
    description: "Take the first step toward better mental health and improved well-being. Schedule your free 15-minute consultation to begin your journey toward healing and growth.",
    ctaText: "Schedule Your Free Consultation"
  }
};

// Mission Statement
export const missionStatement: MissionStatement = {
  title: "Mission Statement",
  subtitle: "Empowering Growth Through Evidence-Based Care",
  description: "My mission is to provide compassionate, evidence-based therapy that helps individuals overcome challenges and achieve lasting positive change. Each therapy session is an opportunity to build resilience, develop coping skills, and work toward your personal goals.",
  image: "/images/services/mens-mental.webp",
  methods: {
    title: "My Therapeutic Approach",
    sections: [
      {
        title: "Trauma-Informed Care",
        description: "Using specialized approaches like Trauma-Focused CBT to help you process past experiences and build resilience in a safe, supportive environment."
      },
      {
        title: "Evidence-Based Methods",
        description: "Utilizing proven therapeutic approaches including CBT, DBT, and motivational interviewing to help you achieve your mental health and personal goals."
      },
      {
        title: "Strength-Based Support",
        description: "Creating an empowering atmosphere that focuses on your inner strengths and capabilities while providing the tools you need to overcome challenges."
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
  { name: "Blue Cross Blue Shield of Massachusetts", logo: "/images/logos/BCBSMA_Logo.png", width: 200 },
  { name: "Carelon", logo: "/images/logos/carelon-logo.png", width: 140 },
  { name: "Cigna", logo: "/images/logos/Cigna-Logo.png", width: 120 },
  { name: "Oscar", logo: "/images/logos/oscar.png", width: 100 },
  { name: "Oxford", logo: "/images/logos/oxford-health-plans-logo-png-transparent.png", width: 160 },
  { name: "United Healthcare", logo: "/images/logos/united-healthcare.png", width: 180 }
];

// Therapist Profile
export const therapistProfile: TherapistProfile = {
  name: "Gilma Y Martinez",
  legalName: "Gilma Y Martinez",
  companyName: "Re-Therapy Counseling Services",
  title: "Licensed Professional Counselor, MA, LPC, NCC",
  bio: "You may be feeling overwhelmed by anxiety, stuck in sadness, or navigating a life transition that's left you feeling lost or disconnected. I specialize in supporting individuals who are dealing with anxiety, depression, grief, life transitions, relationship challenges, and cultural identity concerns. As a bilingual therapist (English/Spanish), I provide culturally sensitive care in a safe and supportive environment.",
  fees: {
    individual: 100,
    couple: 100
  },
  acceptedPaymentMethods: [
    "American Express",
    "Discover",
    "Mastercard",
    "Visa",
    "Apple Cash",
    "Zelle"
  ],
  takesInsurance: true,
  acceptedInsurances: [
    "Aetna",
    "Blue Cross Blue Shield",
    "Carelon",
    "Cigna",
    "Oscar",
    "Oxford",
    "United Healthcare"
  ],
  address: {
    city: "Houston",
    state: "TX",
    zip: "77089"
  },
  specialties: [
    "Depression",
    "Relationship Issues",
    "Bipolar Disorder"
  ],
  expertise: [
    "Anxiety",
    "Child Therapy",
    "Dissociative Disorders",
    "Divorce",
    "Dual Diagnosis",
    "Family Conflict",
    "Infidelity",
    "Marital and Premarital",
    "Mood Disorders",
    "Parenting",
    "Peer Relationships",
    "Self Esteem",
    "Trauma and PTSD"
  ],
  certifications: [
    "Licensed Marriage and Family Therapist (LMFT)",
    "Licensed Professional Counselor Intern (LPC Intern)",
    "Member of American Association for Marriage & Family Therapy"
  ],
  education: {
    degree: "Master's of Art in Marriage & Family Therapy",
    school: "Touro University Worldwide",
    graduationYear: 2018
  },
  yearsInPractice: 5,
  phone: "(346) 472-4377",
  email: "alexis@somethingspecialcounseling.com",
  website: null,
  offersVirtual: true,
  offersFreeConsultation: true,
  consultationLength: 15
};