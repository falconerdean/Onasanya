import { Service, Credential, Value, Experience, Insurance, ContactDetails, TherapistProfile, HeroContent, QuoteSection, Testimonial, Organization, CtaBanner, Founder, ContactSection, WebsiteMetadata, FAQ, AboutPage, ContactPage, FAQsPage, ServicesPage, InsuranceProviderName, MissionStatement } from '@/types';

// Website metadata
export const websiteMetadata: WebsiteMetadata = {
  title: "Yemi A Onasanya - Licensed Professional Counselor in Ypsilanti",
  description: "Evidence-based therapy specializing in OCD, Anxiety, Depression, ADHD, and family therapy. Licensed Professional Counselor serving Ypsilanti, MI.",
  keywords: [
    "Yemi Onasanya",
    "Ypsilanti therapist",
    "OCD treatment",
    "anxiety therapy",
    "depression counseling",
    "ADHD treatment",
    "family therapy",
    "couples counseling",
    "mental health support",
    "Ypsilanti counseling",
    "ERP therapy",
    "CBT therapy",
    "trauma-focused therapy",
    "LPC",
    "NCC"
  ],
  author: "Yemi A Onasanya, MSc, LPC, NCC",
  ogImage: "/images/yemi-onasanya.jpg",
  ogType: "website",
  twitterCard: "summary_large_image"
};

// Services data
export const services: Service[] = [
  {
    title: "OCD & Anxiety Treatment",
    description: "Specialized treatment using Exposure and Response Prevention (ERP) for OCD and anxiety-related disorders, helping you manage intrusive thoughts and develop effective coping strategies.",
    image: "/images/services/mental-health.webp",
    points: [
      "Exposure and Response Prevention (ERP)",
      "Anxiety management",
      "OCD treatment",
      "Panic disorder support",
      "Social anxiety treatment",
      "Agoraphobia management"
    ]
  },
  {
    title: "Depression & Mood Disorders",
    description: "Evidence-based therapy for depression and mood-related challenges, focusing on building resilience and developing healthy coping mechanisms.",
    image: "/images/services/mental-health.jpg",
    points: [
      "Depression management",
      "Mood disorder treatment",
      "Emotional regulation",
      "Coping strategies",
      "Behavioral activation",
      "Support system building"
    ]
  },
  {
    title: "ADHD & Behavioral Support",
    description: "Comprehensive treatment for ADHD and behavioral challenges, helping you develop strategies for better focus, organization, and impulse control.",
    image: "/images/services/mental-health.webp",
    points: [
      "ADHD management",
      "Behavioral strategies",
      "Impulse control techniques",
      "Organization skills",
      "Focus improvement",
      "Academic/work support"
    ]
  }
];

// Credentials data
export const credentials: Credential[] = [
  { text: "Licensed Professional Counselor (LPC)" },
  { text: "National Certified Counselor (NCC)" },
  { text: "Master of Science (MSc) from Springfield College, 2021" },
  { text: "Licensed in PA and MI, NJ license in view" },
  { text: "Specialized training in ERP, CBT, and ESFT" }
];

// Values data
export const values: Value[] = [
  {
    title: "Evidence-Based Practice",
    description: "Utilizing proven therapeutic approaches including ERP, CBT, TF-CBT, DBT, and ESFT to provide effective, research-supported treatment."
  },
  {
    title: "Compassionate Care",
    description: "Creating a safe, supportive, and collaborative space where you can explore your thoughts and emotions openly without fear of judgment."
  },
  {
    title: "Cultural Sensitivity",
    description: "Providing culturally aware therapy that respects and incorporates diverse backgrounds and experiences."
  }
];

// Experience paragraphs
export const experience: Experience[] = [
  {
    paragraph: "As a licensed mental health professional, I'm dedicated to helping individuals and families navigate life's challenges with compassion and care. I provide evidence-based therapy tailored to support healing, resilience, and meaningful personal growth."
  },
  {
    paragraph: "I specialize in working with adolescents, young adults, and middle-aged adults experiencing OCD, Anxiety and related disorders, Depression, ADHD, and co-occurring conditions. My goal is to create a safe, supportive, and collaborative space where you can explore your thoughts and emotions openly."
  },
  {
    paragraph: "Using empathy and validation, I am committed to helping you achieve your goals, heal from past traumas, build resilience, address family system dysfunction, and reduce maladaptive responses that keep you stuck. Together we can move toward lasting growth."
  }
];

// Contact details
export const contactDetails: ContactDetails = {
  location: "Ypsilanti, MI 48197",
  phone: "(734) 724-6266",
  email: "contact@onasanyatherapy.com",
  hours: [
    { day: "Monday", time: "Available for online sessions" },
    { day: "Tuesday", time: "Available for online sessions" },
    { day: "Wednesday", time: "Available for online sessions" },
    { day: "Thursday", time: "Available for online sessions" },
    { day: "Friday", time: "Available for online sessions" }
  ]
};

// Hero content
export const heroContent: HeroContent = {
  title: {
    main: "Yemi A Onasanya",
    sub: "Licensed Professional Counselor"
  },
  paragraphs: [
    "Hi, I'm Yemi Onasanya—a licensed mental health professional dedicated to helping individuals and families navigate life's challenges with compassion and care.",
    "I provide evidence-based therapy tailored to support healing, resilience, and meaningful personal growth. I specialize in working with adolescents, young adults, and middle-aged adults experiencing OCD, Anxiety and related disorders, Depression, ADHD, and co-occurring conditions.",
    "My goal is to create a safe, supportive, and collaborative space where you can explore your thoughts and emotions openly—without fear of judgment—as we work together toward lasting change."
  ],
  ctaText: "Schedule Your Free 15-Minute Consultation",
  backgroundImage: "/images/insite-hero-background.jpg"
};

// Quote section
export const quoteSection: QuoteSection = {
  quote: {
    textHtml: "Using <strong style='color: #E7963E;'>empathy and validation</strong>, I am committed to helping you achieve your goals and build <strong style='color: #E7963E;'>lasting resilience</strong>.",
    author: "Yemi A Onasanya"
  },
  description: {
    textHtml: "An <strong style='color: #E7963E;'>Ypsilanti</strong> based practice specializing in <strong style='color: #E7963E;'>OCD & anxiety treatment</strong>, <strong style='color: #F59E0B;'>depression</strong>, and <strong style='color: #E7963E;'>ADHD support</strong>."
  },
  cta: {
    text: "Start Your Journey",
    link: "/contact"
  }
};

// Organizations
export const organizations: Organization[] = [
  { name: "Springfield College", logo: "/images/orgs/springfield-college.png", width: 200 },
  { name: "National Board for Certified Counselors", logo: "/images/orgs/nbcc.png", width: 240 }
];

// CTA Banner
export const ctaBanner: CtaBanner = {
  title: "Ready to start your healing journey?",
  phone: "(734) 724-6266",
  ctaText: "Schedule Your Free 15-Minute Consultation",
  backgroundImage: "/images/tree-wallpaper-slice.webp"
};

// Founder information
export const founder: Founder = {
  name: "Yemi A Onasanya",
  title: "Licensed Professional Counselor, MSc, LPC, NCC",
  image: "/images/yemi-onasanya.jpg",
  paragraphs: [
    "Hi, I'm Yemi Onasanya—a licensed mental health professional dedicated to helping individuals and families navigate life's challenges with compassion and care. I provide evidence-based therapy tailored to support healing, resilience, and meaningful personal growth.",
    "I specialize in Exposure and Response Prevention (ERP) for OCD and anxiety-related disorders, and use CBT, TF-CBT, DBT, ESFT, and trauma-informed care. I tailor treatment to your unique needs—whether you're facing intrusive thoughts, emotional struggles, family conflict, or life transitions.",
    "Using empathy and validation, I am committed to helping you achieve your goals, heal from past traumas, build resilience, address family system dysfunction, and reduce maladaptive responses that keep you stuck. Together we can move toward lasting growth."
  ],
  highlights: [
    "Licensed Professional Counselor (LPC)",
    "National Certified Counselor (NCC)",
    "Master's from Springfield College",
    "ERP Specialist",
    "CBT & DBT Trained",
    "Trauma-Informed Care Expert"
  ]
};

// Contact section
export const contactSection: ContactSection = {
  title: "Let's Connect",
  description: "Ready to take the first step towards better mental health? Whether you have questions about therapy, insurance coverage, or would like to schedule a consultation, I'm here to help. Your path to healing starts with a simple conversation.",
  ctaText: "Schedule Your Free 15-Minute Consultation"
};

// FAQs data
export const faqs: FAQ[] = [
  {
    question: "What types of therapy do you offer?",
    answer: "I specialize in evidence-based treatments including Exposure and Response Prevention (ERP) for OCD, CBT, TF-CBT, DBT, and ESFT. I work with individuals and families dealing with anxiety, depression, ADHD, and related conditions."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I offer therapy sessions online through secure video platforms. I'm available most weekdays, with flexibility for evening appointments."
  },
  {
    question: "What are your fees?",
    answer: "Individual sessions are $150. I offer a sliding scale for eligible clients and accept various insurance plans including Aetna, Blue Cross Blue Shield, Carelon, Cigna, and UnitedHealthcare."
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept ACH bank transfer, cash, check, credit cards (Mastercard, Visa), PayPal, Venmo, wire transfer, and Zelle."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling (734) 724-6266 or sending me an email. I offer a free 15-minute consultation to discuss your needs and ensure we're a good fit."
  }
];

// About page data
export const aboutPage: AboutPage = {
  hero: {
    title: "Meet Your Therapist",
    description: "Hi, I'm Yemi A Onasanya, a Licensed Professional Counselor committed to helping individuals and families navigate life's challenges with compassion and care. I specialize in evidence-based treatments for OCD, anxiety, depression, and ADHD, creating a safe and supportive environment for healing and growth.",
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
    title: "Connect With Me",
    description: "Ready to take the first step towards better mental health? I'm here to help you begin your journey. Reach out today to schedule your free 15-minute consultation."
  },
  info: {
    title: "Contact Information",
    description: "Whether you have questions about therapy, insurance coverage, or would like to schedule an appointment, I'm here to support you every step of the way. I offer convenient online therapy sessions through secure video platforms."
  },
  hours: {
    title: "Available Hours"
  }
};

// FAQs page data
export const faqsPage: FAQsPage = {
  hero: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about my therapy services, fees, insurance coverage, and what to expect in our sessions."
  },
  footer: {
    description: "Still have questions? Don't hesitate to reach out. I'm here to help you understand how we can work together to improve your mental health and well-being.",
    ctaText: "Contact Me"
  }
};

// Services page data
export const servicesPage: ServicesPage = {
  hero: {
    title: "Therapy Services",
    description: "I offer evidence-based therapy services focused on treating OCD, anxiety, depression, ADHD, and related conditions. Each approach is tailored to meet your unique needs and goals, using proven methods like ERP, CBT, and trauma-informed care."
  },
  ctaSection: {
    title: "Ready to Begin?",
    description: "Take the first step toward better mental health. Schedule a free 15-minute consultation to discuss how we can work together to achieve your goals.",
    ctaText: "Schedule Your Free Consultation"
  }
};

// Mission Statement
export const missionStatement: MissionStatement = {
  title: "Mission Statement",
  subtitle: "Evidence-Based Care for Lasting Change",
  description: "My mission is to provide compassionate, evidence-based therapy that helps individuals and families overcome mental health challenges and achieve meaningful personal growth. Each therapy session is an opportunity to build resilience, develop coping skills, and work towards lasting positive change.",

  methods: {
    title: "My Therapeutic Approach",
    sections: [
      {
        title: "Evidence-Based Treatment",
        description: "Utilizing proven therapeutic approaches like ERP, CBT, and trauma-informed care to provide effective, research-supported treatment for various mental health conditions."
      },
      {
        title: "Collaborative Care",
        description: "Working together to create a personalized treatment plan that addresses your unique needs and goals, while providing the tools and support needed for success."
      },
      {
        title: "Safe & Supportive Environment",
        description: "Creating a non-judgmental and empathetic atmosphere where you can explore your thoughts and emotions openly, fostering trust and facilitating healing."
      }
    ]
  },
  cta: {
    discover: {
      text: "Explore My Services",
      href: "/services"
    },
    background: {
      text: "Meet Your Therapist",
      href: "/about"
    }
  }
};