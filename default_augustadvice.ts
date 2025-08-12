import { Service, Credential, Value, Experience, Insurance, ContactDetails, TherapistProfile, HeroContent, QuoteSection, Testimonial, Organization, CtaBanner, Founder, ContactSection, WebsiteMetadata, FAQ, AboutPage, ContactPage, FAQsPage, ServicesPage, InsuranceProviderName, MissionStatement } from '@/types';

// Website metadata
export const websiteMetadata: WebsiteMetadata = {
  title: 'Kind Counseling',
  description: 'Professional counseling services specializing in relationship issues, infidelity, marital and premarital therapy, and trauma treatment. EMDR-trained and Gottman Method certified therapist serving Ohio.',
  keywords: [
    'relationship counseling',
    'couples therapy',
    'infidelity recovery',
    'marital counseling',
    'premarital counseling',
    'trauma therapy',
    'EMDR therapy',
    'Gottman Method',
    'Ohio therapist',
    'Perrysburg counseling',
    'mental health',
    'couples counseling',
    'affair recovery',
    'trust rebuilding',
    'family therapy'
  ],
  author: 'John Rodgers, LPC',
  ogImage: '/images/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image'
};


// Services data
export const services: Service[] = [
  {
    title: "Relationship Issues",
    description: "Professional counseling services to help you navigate relationship challenges and build healthier connections.",
    image: "/images/services/couple.jpg",
    points: [
      "Couples counseling for disconnection and communication issues",
      "Affair recovery and trust rebuilding",
      "Codependency treatment",
      "Family conflict resolution",
      "Divorce recovery support",
      "Interpersonal skills development"
    ]
  },
  {
    title: "Infidelity",
    description: "Specialized support for couples dealing with betrayal, affairs, and rebuilding trust in relationships.",
    image: "/images/services/infidelity.jpg",
    points: [
      "Affair recovery therapy",
      "Trust rebuilding strategies",
      "Processing betrayal trauma",
      "Communication rebuilding",
      "Individual support for both partners",
      "Guidance on relationship decisions"
    ]
  },
  {
    title: "Marital and Premarital",
    description: "Comprehensive counseling for couples preparing for marriage or working to strengthen their marital relationship.",
    image: "/images/services/couple.jpg",  // Updated to use a more appropriate image
    points: [
      "Premarital counseling and relationship preparation",
      "Communication skills development",
      "Conflict resolution techniques",
      "Building emotional intimacy",
      "Creating shared meaning and goals",
      "Managing life transitions together"
    ]
  }
];

// Credentials data
export const credentials: Credential[] = [
  { text: "Licensed Professional Counselor (LPC)" },
  { text: "EMDR-trained therapist" },
  { text: "Level 3 Gottman Trained therapist" },
  { text: "Specialized in relationship counseling" },
  { text: "Trained in treating affairs and trauma" },
  { text: "Specialized in couples and addiction recovery" }
];

// Values data
export const values: Value[] = [
  {
    title: "Evidence-Based Approach",
    description: "Using time-tested and well-studied couples counseling and trauma-treating approaches including the Gottman Method and EMDR therapy."
  },
  {
    title: "Systematic & Effective",
    description: "Therapy that follows a proven system with practical techniques to help you achieve measurable progress and lasting results."
  },
  {
    title: "Specialized Expertise",
    description: "Focused expertise in relationship issues, infidelity recovery, marital counseling, and trauma treatment with specific training."
  }
];

// Experience paragraphs
export const experience: Experience[] = [
  {
    paragraph: "Welcome to the one-stop shop for your relational repair needs. If you have been struggling in your relationship, or have trauma(s) from past or present relationships, you have come to the right place."
  },
  {
    paragraph: "By utilizing time-tested and well-studied couples counseling and trauma-treating approaches, I help couples and individuals who have struggled with addiction, trauma, affair(s), betrayal, codependency, disconnection, and unresolved perpetual issues."
  },
  {
    paragraph: "There is a science to building a healthy relationship and healing from past traumas. As an EMDR-trained and level 3 Gottman Trained therapist, I guide you towards newfound wellbeing."
  },
  {
    paragraph: "I'm passionate about helping individuals and couples heal from the disconnect and trauma they experience(d) in relationship. Therapy with me is systematic and effective. We go to those places you have been ailing and begin practicing new ways of being that work towards and support your deepest desires for relationship."
  }
];
// Contact details
export const contactDetails: ContactDetails = {
  location: "217 West 3rd Street, Perrysburg, OH 43551",
  phone: "897-2740-4370",
  email: "John@counseling.com",
  hours: [
    { day: "Monday", time: "9:00am - 5:00pm" },
    { day: "Tuesday", time: "9:00am - 5:00pm" },
    { day: "Wednesday", time: "9:00am - 5:00pm" },
    { day: "Thursday", time: "9:00am - 5:00pm" },
    { day: "Friday", time: "9:00am - 5:00pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" }
  ]
};

// Hero content
export const heroContent: HeroContent = {
  title: {
    main: "Kind Counseling",
    sub: "Counseling Services"
  },
  paragraphs: [
    "We're so glad you're here. Life can be complex and challenging, but you don't have to face it alone. This is a space where your feelings, experiences, and story matter.",
    "At Kind Counseling, we believe in the power of compassion, connection, and hope. No matter where you are on your journey, we're here to walk alongside you—offering understanding, support, and the tools to help you thrive.",
    "You are seen. You are valued. And you deserve care. Let's take this step toward healing and growth together."
  ],
  ctaText: "Schedule a Free Consultation",
  backgroundImage: "/images/insite-hero-background.jpg"
};

// Quote section
export const quoteSection: QuoteSection = {
  quote: {
    textHtml: "Nothing is <strong style='color: #E7963E;'>Impossible</strong>. The word itself says, <strong style='color: #E7963E;'>I'm possible!</strong>",
    author: "Audrey Hepburn"
  },
  description: {
    textHtml: "An <strong style='color: #E7963E;'>Ohio</strong> based psychology practice specializing in <strong style='color: #E7963E;'>relationship counseling</strong>, <strong style='color: #F59E0B;'>trauma treatment</strong>, and <strong style='color: #E7963E;'>marital therapy</strong> for individuals and couples.",
  },
  cta: {
    text: "Get Started",
    link: "/contact"
  }
};

// Testimonials
export const testimonials: Testimonial[] = [
  {
    text: "John is exactly the kind of therapist I was looking for. We spend the right amount of time discussing and exploring my relationship issues and finding solutions for them.",
    rating: 5
  },
  {
    text: "John has been instrumental in our marriage recovery. I've never felt judged by him. Every session he leaves us with comfort in that we're getting healthier together.",
    rating: 5
  },
  {
    text: "He's absolutely amazing. Very understanding and I do look forward to our sessions. His EMDR approach really helped with my trauma.",
    rating: 5
  },
  {
    text: "Has been very helpful speaking with John. He has assisted us and given valuable direction for our relationship issues.",
    rating: 5
  },
  {
    text: "The Gottman Method techniques John uses have transformed our communication. We're now able to discuss issues without fighting.",
    rating: 5
  },
  {
    text: "John helped us heal after infidelity. His compassionate approach and practical strategies have been life-changing for our marriage.",
    rating: 5
  }
];

// Organizations
export const organizations: Organization[] = [
  { name: "Therapist.com", logo: "/images/orgs/therapist.png", width: 220 },
  { name: "Psychology Today", logo: "/images/orgs/psychologytoday.png", width: 240 },
  { name: "Mental Health Match", logo: "/images/orgs/logo-mental-health-match.png", width: 210 },
  { name: "Headway", logo: "/images/orgs/headway-logo.png", width: 200 },
  { name: "ZocDoc", logo: "/images/orgs/zocdoc-logo-zocdoc.png", width: 260 }
];

// CTA Banner
export const ctaBanner: CtaBanner = {
  title: "Spend less time worrying and more time living",
  phone: "897-2740-4370",
  ctaText: "Schedule a Free Consultation",
  backgroundImage: "/images/tree-wallpaper-slice.webp"  // Updated to use local image
};

// Founder information
export const founder: Founder = {
  name: "John Rodgers",
  title: "Licensed Professional Counselor, MA, LPC",
  image: "/images/genarichs.jpg",
  paragraphs: [
    "I'm John Rodgers, a Licensed Professional Counselor with specialized training in relationship therapy and trauma treatment. I provide both in-person and virtual sessions for clients in the Ohio area. I graduated from the University of Toledo with a Master's in Clinical Mental Health Counseling.",
    "My approach is rooted in evidence-based practices including the Gottman Method and EMDR therapy. I tailor each session to meet the unique needs of my clients. Through in-person and virtual therapy, I offer convenient and accessible care for individuals and couples.",
    "My goal is to create a compassionate and empowering space for relational healing and lasting change."
  ],
  highlights: ["John Rodgers", "Licensed Professional Counselor", "Gottman Method", "EMDR therapy", "relational healing", "lasting change"]
};

// Contact section
export const contactSection: ContactSection = {
  title: "Reach Out Today!",
  description: "Ready to begin your journey to relationship wellness? Whether you have questions about our specialities, insurance coverage, or would like to schedule a consultation, I'm here to support you every step of the way. Your path to better relational health starts with a simple conversation.",
  ctaText: "View Our Contact Page"
};

// FAQs data
export const faqs: FAQ[] = [
  {
    question: "What types of therapy do you offer?",
    answer: "I specialize in relationship counseling, infidelity recovery, marital and premarital therapy, and trauma treatment using evidence-based approaches including the Gottman Method and EMDR therapy."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I offer both in-person and virtual sessions to provide convenient and accessible care for my clients."
  },
  {
    question: "How long are therapy sessions?",
    answer: "Standard therapy sessions are 50 minutes long. I also offer extended sessions for couples when needed."
  },
  {
    question: "What are your fees?",
    answer: "Individual and couple sessions are $135 per session. I accept most major insurance plans and offer a free 15-minute consultation."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, I accept most major insurance plans including Aetna, Blue Cross Blue Shield, Anthem, UnitedHealthcare, and others. Please contact me to verify your specific coverage."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling 897-2740-4370 or filling out the contact form on my website. I'll respond within 2-4 business hours."
  },
  {
    question: "What is the Gottman Method?",
    answer: "The Gottman Method is a research-based approach to couples therapy that helps couples build stronger relationships through improved communication, conflict resolution, and emotional connection."
  },
  {
    question: "What is EMDR therapy?",
    answer: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy for treating trauma and PTSD. It helps process traumatic memories and reduce their emotional impact."
  },
  {
    question: "How long does therapy typically take?",
    answer: "The length of therapy varies depending on your specific needs and goals. Some clients see improvement in just a few sessions, while others benefit from longer-term therapy."
  },
  {
    question: "What if I'm not sure if therapy is right for me?",
    answer: "I offer a free 15-minute consultation to help you determine if therapy with me would be a good fit. This is a great opportunity to ask questions and discuss your concerns."
  }
];

// About page data
export const aboutPage: AboutPage = {
  hero: {
    title: "Meet Your Therapist",
    description: "Hi, I'm John Rodgers, a dedicated mental health professional committed to helping individuals navigate life's challenges and achieve personal growth. With over 2 years of experience, I specialize in providing comprehensive counseling services focused on relationships and trauma recovery.",
    image: "/images/genarichs.jpg",
    ctaText: "Schedule a Free Consultation"
  },
  values: {
    title: "My Approach to Therapy"
  },
  experience: {
    title: "Experience & Expertise",
    ctaText: "Begin Your Journey Today"
  }
};

// Contact page data
export const contactPage: ContactPage = {
  hero: {
    title: "Contact Us",
    description: "We're here to help you take the first step on your journey to better mental health. Fill out the form below, and we'll respond to your inquiry within 24 hours."
  },
  info: {
    title: "Get in Touch",
    description: "Whether you have questions about our specialities, insurance coverage, or would like to schedule a consultation, we're here to support you every step of the way."
  },
  hours: {
    title: "Available Hours"
  }
};

// FAQs page data
export const faqsPage: FAQsPage = {
  hero: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our counseling services, appointments, insurance, and more."
  },
  footer: {
    description: "Still have questions? Don't hesitate to reach out. I'm here to help you understand how we can work together to achieve your goals.",
    ctaText: "Contact Us"
  }
};

// Complete therapist profile
export const therapistProfile: TherapistProfile = {
  name: "John Rodgers",
  legalName: "Kind Counseling",
  companyName: "Kind Counseling",
  title: "Licensed Professional Counselor, MA, LPC",
  bio: "Welcome to the one-stop shop for your relational repair needs. If you have been struggling in your relationship, or have trauma(s) from past or present relationships, you have come to the right place. By utilizing time-tested and well-studied couples counseling and trauma-treating approaches, I help couples and individuals who have struggled with addiction, trauma, affair(s), betrayal, codependency, disconnection, and unresolved perpetual issues.",
  fees: {
    individual: 135,
    couple: 135
  },
  takesInsurance: true,
  acceptedPaymentMethods: [
    "American Express", 
    "Cash", 
    "Check", 
    "Discover", 
    "Health Savings Account", 
    "Mastercard", 
    "Visa"
  ],
  acceptedInsurances: [
    'Aetna',
    'BlueCross BlueShield',
    'UnitedHealthcare',
    'Carelon',
    'Cigna',
    'Oscar',
    'Oxford Health',
    'Quest'
  ],
  address: {
    city: "Perrysburg",
    state: "OH",
    zip: "43551"
  },
  specialties: [
    "Relationship Issues",
    "Infidelity",
    "Marital and Premarital"
  ],
  expertise: [
    "Codependency",
    "Divorce",
    "Family Conflict",
    "Life Transitions",
    "Self Esteem",
    "Sexual Abuse",
    "Trauma and PTSD"
  ],
  certifications: [
    "EMDR-trained therapist",
    "Level 3 Gottman Trained therapist",
    "Specialized in 'Couples and Addiction Recovery'",
    "Specialized in 'Treating Affairs and Trauma'"
  ],
  education: {
    degree: "MA (Clinical Mental Health Counseling)",
    school: "University of Toledo",
    graduationYear: 2023
  },
  yearsInPractice: 2,
  phone: "897-2740-4370",
  email: "John@counseling.com",
  website: null,
  offersVirtual: true,
  offersFreeConsultation: true,
  consultationLength: 15
};

// Services page content
export const servicesPage: ServicesPage = {
  hero: {
    title: "Specialities",
    description: "We offer comprehensive mental health support through evidence-based practices and compassionate care. Each service is tailored to meet your unique needs and goals."
  },
  ctaSection: {
    title: "Ready to Take the First Step?",
    description: "Schedule a free consultation to discuss how we can help you achieve your mental health goals. We accept most major insurance plans and offer flexible scheduling options.",
    ctaText: "Schedule a Free Consultation"
  }
}; 

// Mission Statement data
export const missionStatement: MissionStatement = {
  title: "Mission Statement",
  subtitle: "Setting you on the right path to healing and personal growth.",
  description: "At Kind Counseling, we help individuals and families improve their mental and emotional function through self-awareness and skill improvement. We achieve the goal of inner peace by combining innovative approaches in mental health, personal compassion and sensory awareness.",

  methods: {
    title: "Our Integrated Method Includes",
    sections: [
      {
        title: "Traditional Talk Therapy",
        description: "We utilize evidence-based treatment models such as Cognitive Perceptual and Cognitive Behavioral modalities. We also provide EMDR and Internal Family Systems work to help clients understand and manage their internal landscape."
      },
      {
        title: "Tactile and Auditory Interventions",
        description: "We work with our Autism Spectrum clientel on script development, social anxiety, and self-soothing and centering techniques."
      },
      {
        title: "Natural Medicine-based Interventions",
        description: "For the treatment of pre-verbal trauma, PTSD, Depression, and Anxiety are available in both the Colorado Natural Medicine model and the personal use space."
      }
    ]
  },
  cta: {
    discover: {
      text: "Discover Our Approach",
      href: "/services"
    },
    background: {
      text: "Background & Qualifications",
      href: "/about"
    }
  }
}; 