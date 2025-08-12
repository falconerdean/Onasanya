import { Service, Credential, Value, Experience, Insurance, ContactDetails, TherapistProfile, HeroContent, QuoteSection, Testimonial, Organization, CtaBanner, Founder, ContactSection, WebsiteMetadata, FAQ, AboutPage, ContactPage, FAQsPage, ServicesPage, InsuranceProviderName, MissionStatement } from '@/types';

// Website metadata
export const websiteMetadata: WebsiteMetadata = {
  title: "Alexis Jones - Marriage and Family Therapist in Houston",
  description: "Professional counseling services specializing in relationship issues, depression, bipolar disorder, and family therapy. Licensed Marriage and Family Therapist serving Houston, TX.",
  keywords: [
    "Alexis Jones",
    "Houston therapist",
    "marriage counseling",
    "family therapy",
    "relationship issues",
    "depression therapy",
    "bipolar disorder",
    "anxiety counseling",
    "child therapy",
    "family conflict",
    "couples therapy",
    "mental health support",
    "Houston counseling",
    "LMFT",
    "LPC Intern"
  ],
  author: "Alexis Jones, LPC Intern, LMFT",
  ogImage: "/images/og-image.jpg",
  ogType: "website",
  twitterCard: "summary_large_image"
};

// Services data
export const services: Service[] = [
  {
    title: "Marriage & Family Therapy",
    description: "Comprehensive therapy for couples and families focused on improving communication, resolving conflicts, and strengthening relationships.",
    image: "/images/services/couple.jpg",
    points: [
      "Couples counseling",
      "Family conflict resolution",
      "Parent-child relationship support",
      "Communication skills development",
      "Trust building strategies",
      "Family dynamics improvement"
    ]
  },
  {
    title: "Depression & Bipolar Support",
    description: "Specialized treatment for mood disorders, helping you manage symptoms and develop effective coping strategies.",
    image: "/images/services/substance-abuse.webp",
    points: [
      "Depression management",
      "Bipolar disorder treatment",
      "Mood stabilization techniques",
      "Emotional regulation skills",
      "Coping strategy development",
      "Support system building"
    ]
  },
  {
    title: "Child & Teen Counseling",
    description: "Supportive therapy for young clients dealing with behavioral issues, school challenges, and emotional development.",
    image: "/images/services/mental-health.webp",
    points: [
      "Behavioral issues support",
      "School-related challenges",
      "Peer relationship guidance",
      "Emotional development",
      "Family communication",
      "Confidence building"
    ]
  }
];

// Credentials data
export const credentials: Credential[] = [
  { text: "Licensed Marriage and Family Therapist (LMFT)" },
  { text: "Licensed Professional Counselor Intern (LPC Intern)" },
  { text: "Master's in Marriage & Family Therapy from Touro University Worldwide" },
  { text: "Member of American Association for Marriage & Family Therapy" },
  { text: "Supervised by Tia Jennings (Texas / 66593)" }
];

// Values data
export const values: Value[] = [
  {
    title: "Trust & Safety",
    description: "Creating a non-judgmental and empathetic atmosphere where clients feel comfortable sharing their innermost thoughts and fears."
  },
  {
    title: "Evidence-Based Practice",
    description: "Utilizing proven therapeutic approaches like Cognitive Behavioral Therapy (CBT) and other evidence-based methods to help clients achieve their goals."
  },
  {
    title: "Family Systems Focus",
    description: "Understanding and addressing the complex dynamics of familial interactions to foster healing and positive change within relationships."
  }
];

// Experience paragraphs
export const experience: Experience[] = [
  {
    paragraph: "As a licensed marriage and family therapist, my private practice is dedicated to helping individuals, couples, and families navigate the complexities of their relationships. Each therapy session is an opportunity to explore the dynamics of familial interactions and personal challenges, fostering understanding and healing."
  },
  {
    paragraph: "I utilize a variety of therapeutic approaches that cater to different needs and situations. One such method is Cognitive Behavioral Therapy (CBT), which empowers clients to identify and challenge negative thought patterns that may be sabotaging their relationships."
  },
  {
    paragraph: "My expertise extends to complex issues such as depression, bipolar disorder, and family conflict. I work with clients of all ages, from children to adults, helping them develop healthier communication patterns and find solutions to the issues that trouble them."
  },
  {
    paragraph: "Building trust with clients is fundamental to the therapeutic process. In my practice, I prioritize creating a non-judgmental and empathetic atmosphere where clients feel comfortable sharing their innermost thoughts and fears."
  }
];

// Contact details
export const contactDetails: ContactDetails = {
  location: "Houston, TX 77089",
  phone: "(346) 472-4377",
  email: "alexis@somethingspecialcounseling.com",
  hours: [
    { day: "Monday", time: "9:00am - 7:00pm" },
    { day: "Tuesday", time: "9:00am - 7:00pm" },
    { day: "Wednesday", time: "9:00am - 7:00pm" },
    { day: "Thursday", time: "9:00am - 7:00pm" },
    { day: "Friday", time: "9:00am - 7:00pm" }
  ]
};

// Hero content
export const heroContent: HeroContent = {
  title: {
    main: "Alexis Jones",
    sub: "Marriage & Family Therapy"
  },
  paragraphs: [
    "Welcome to Something Special Counseling. As a licensed marriage and family therapist, I'm dedicated to helping individuals, couples, and families navigate life's challenges and build stronger relationships.",
    "My practice offers a safe, supportive space where you can explore your thoughts and feelings, develop healthier communication patterns, and find solutions to the issues that trouble you. Whether you're dealing with relationship issues, depression, or family conflict, I'm here to help.",
    "Therapy with me is like speaking to a real-life diary - I am here not only to listen but to truly hear what you're saying. Together, we'll work to create positive change and build the relationships you desire."
  ],
  ctaText: "Schedule Your Free Consultation",
  backgroundImage: "/images/insite-hero-background.jpg"
};

// Quote section
export const quoteSection: QuoteSection = {
  quote: {
    textHtml: "In the tapestry of relationships, <strong style='color: #E7963E;'>open communication</strong> is the thread that weaves <strong style='color: #E7963E;'>connection and understanding</strong>.",
    author: "Alexis Jones"
  },
  description: {
    textHtml: "A <strong style='color: #E7963E;'>Houston</strong> based practice specializing in <strong style='color: #E7963E;'>marriage & family therapy</strong>, <strong style='color: #F59E0B;'>depression</strong>, and <strong style='color: #E7963E;'>relationship issues</strong>."
  },
  cta: {
    text: "Start Your Journey",
    link: "/contact"
  }
};

// Testimonials
export const testimonials: Testimonial[] = [
  {
    text: "I felt lost and overwhelmed by my emotions, but Alexis helped me navigate through my depression with understanding and compassion. I can finally see a light at the end of the tunnel.",
    rating: 5,
    author: "Depression Client"
  },
  {
    text: "Our relationship was struggling, but through therapy with Alexis, we learned to communicate better and understand each other's needs. It was a transformative experience for both of us.",
    rating: 5,
    author: "Couple in Therapy"
  },
  {
    text: "As a parent, I found it difficult to connect with my child who was facing school issues. Alexis provided us with strategies that improved our relationship immensely.",
    rating: 5,
    author: "Parent Client"
  },
  {
    text: "The therapist's approach to managing my bipolar disorder has been incredibly effective. I now feel more in control and equipped to handle my mood swings.",
    rating: 5,
    author: "Bipolar Disorder Client"
  }
];

// Organizations
export const organizations: Organization[] = [
  { name: "Touro University Worldwide", logo: "/images/orgs/touro.png", width: 200 },
  { name: "American Association for Marriage & Family Therapy", logo: "/images/orgs/aamft.png", width: 240 },
  { name: "Something Special Counseling", logo: "/images/orgs/something-special.png", width: 200 }
];

// CTA Banner
export const ctaBanner: CtaBanner = {
  title: "Ready to strengthen your relationships?",
  phone: "(346) 472-4377",
  ctaText: "Schedule Your Free Consultation",
  backgroundImage: "/images/tree-wallpaper-slice.webp"
};

// Founder information
export const founder: Founder = {
  name: "Alexis Jones",
  title: "Licensed Marriage and Family Therapist, LPC Intern",
  image: "/images/alexis.jpeg",
  paragraphs: [
    "As a licensed marriage and family therapist, my private practice is dedicated to helping individuals, couples, and families navigate the complexities of their relationships. Each therapy session is an opportunity to explore the dynamics of familial interactions and personal challenges, fostering understanding and healing.",
    "With a Master's degree in Marriage & Family Therapy from Touro University Worldwide and membership in the American Association for Marriage & Family Therapy, I bring both expertise and compassion to my work with clients.",
    "I specialize in relationship issues, depression, bipolar disorder, and family therapy, creating a safe and supportive environment where you can openly explore your thoughts and feelings."
  ],
  highlights: [
    "Licensed Marriage and Family Therapist",
    "LPC Intern",
    "Masters in Marriage & Family Therapy",
    "AAMFT Member",
    "CBT Trained",
    "Family Systems Expert"
  ]
};

// Contact section
export const contactSection: ContactSection = {
  title: "Let's Talk",
  description: "Ready to begin your journey to better relationships? Whether you have questions about therapy, insurance coverage, or would like to schedule a consultation, I'm here to help. Your path to healthier relationships starts with a simple conversation.",
  ctaText: "Schedule Your Free 15-Minute Consultation"
};

// FAQs data
export const faqs: FAQ[] = [
  {
    question: "What types of therapy do you offer?",
    answer: "I specialize in marriage and family therapy, relationship counseling, and individual therapy for issues like depression and bipolar disorder. I use evidence-based approaches including CBT and family systems therapy."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I offer telehealth therapy sessions for your convenience. I'm available Monday through Friday from 9am to 7pm (CST)."
  },
  {
    question: "What are your fees?",
    answer: "Individual sessions are $80, and couple sessions are $120. I offer a sliding scale for eligible clients and accept most major insurance plans."
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept American Express, Discover, Mastercard, Visa, Apple Cash, and Zelle. I'm happy to work with you to keep therapy affordable."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling (346) 472-4377 or sending me an email. I offer a free 15-minute consultation to discuss your needs and ensure we're a good fit."
  }
];

// About page data
export const aboutPage: AboutPage = {
  hero: {
    title: "Meet Your Therapist",
    description: "Hi, I'm Alexis Jones, a Licensed Marriage and Family Therapist committed to helping individuals, couples, and families navigate life's challenges and build stronger relationships. With over 5 years of experience, I specialize in providing comprehensive therapy services focused on relationship issues, depression, and family dynamics.",
    image: "/images/alexis.jpeg",
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
    description: "Ready to take the first step towards healthier relationships? I'm here to help you begin your journey. Reach out today to schedule your free 15-minute consultation."
  },
  info: {
    title: "Contact Information",
    description: "Whether you have questions about therapy, insurance coverage, or would like to schedule an appointment, I'm here to support you every step of the way. I offer both in-person and telehealth sessions."
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
    description: "Still have questions? Don't hesitate to reach out. I'm here to help you understand how we can work together to strengthen your relationships and improve your well-being.",
    ctaText: "Contact Me"
  }
};

// Services page data
export const servicesPage: ServicesPage = {
  hero: {
    title: "Therapy Services",
    description: "I offer comprehensive therapy services focused on strengthening relationships and supporting mental health through evidence-based practices and compassionate care. Each approach is tailored to meet your unique needs and goals."
  },
  ctaSection: {
    title: "Ready to Begin?",
    description: "Take the first step toward healthier relationships and improved well-being. Schedule a free 15-minute consultation to discuss how we can work together to achieve your goals.",
    ctaText: "Schedule Your Free Consultation"
  }
};

// Mission Statement
export const missionStatement: MissionStatement = {
  title: "Mission Statement",
  subtitle: "Building Stronger Relationships Through Understanding",
  description: "My mission is to provide compassionate, evidence-based therapy that helps individuals, couples, and families navigate their relationships and achieve lasting positive change. Each therapy session is an opportunity to explore dynamics, foster understanding, and build healthier connections.",

  methods: {
    title: "My Therapeutic Approach",
    sections: [
      {
        title: "Family Systems Focus",
        description: "Understanding and addressing the complex dynamics of familial interactions to foster healing and positive change within relationships."
      },
      {
        title: "Evidence-Based Practice",
        description: "Utilizing proven therapeutic approaches like CBT and other evidence-based methods to help clients achieve their relationship and personal goals."
      },
      {
        title: "Safe & Supportive Environment",
        description: "Creating a non-judgmental and empathetic atmosphere where clients feel comfortable sharing their innermost thoughts and working through challenges."
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