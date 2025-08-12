import { Service, Credential, Value, Experience, Insurance, ContactDetails, TherapistProfile, HeroContent, QuoteSection, Testimonial, Organization, CtaBanner, Founder, ContactSection, WebsiteMetadata, FAQ, AboutPage, ContactPage, FAQsPage, ServicesPage, InsuranceProviderName, MissionStatement, InsuranceProvider } from '@/types';


// Website metadata
export const websiteMetadata: WebsiteMetadata = {
  "title": "Nyisha Rogers - Clinical Social Work/Therapist in Raleigh, NC",
  "description": "Nyisha Rogers, a therapist in Raleigh, NC, specializes in trauma, anxiety, and life transitions for women and youth. Offering virtual sessions.",
  "keywords": [
    "Therapist Raleigh NC",
    "Nyisha Rogers",
    "Clinical Social Work",
    "Women’s Issues Therapy",
    "Youth Counseling",
    "Trauma Therapy",
    "Anxiety Treatment",
    "Life Transitions",
    "Virtual Therapy",
    "Mindfulness-Based Therapy",
    "Cognitive Behavioral Therapy",
    "Stress Management",
    "PTSD Counseling",
    "10 years experience"
  ]
};

// Services data
export const services: Service[] = [
    {
      "title": "Women's Issues Therapy",
      "description": "This service focuses on supporting women as they navigate the complexities of life, including trauma, anxiety, and life transitions. Through a combination of therapeutic approaches such as Cognitive Behavioral Therapy (CBT) and Person-Centered therapy, I help clients uncover and process their unique experiences, empowering them to thrive rather than merely survive.",
      "image": "/images/services/womens-issues.webp",
      "points": [
        "Specialized in addressing trauma, anxiety, and life transitions specific to women's experiences",
        "Utilizes evidence-based approaches like CBT and mindfulness-based techniques",
        "Creates a safe, informal space for open dialogue and self-exploration",
        "Virtual sessions available for added convenience",
        "Accepts Aetna, BlueCross and BlueShield, Cigna and Evernorth, and Out of Network insurance"
      ]
    },
    {
      "title": "Racial Identity Counseling",
      "description": "In this service, I assist individuals in exploring and understanding their racial identity and its impact on their mental health. This includes addressing issues of identity, belonging, and the unique challenges faced within different cultural contexts. Through a supportive and educational approach, I aim to foster self-acceptance and empowerment.",
      "image": "/images/services/racial-identity.webp",
      "points": [
        "Focuses on the intersection of racial identity and mental health",
        "Encourages clients to explore personal experiences and societal influences",
        "Utilizes trauma-informed and strength-based techniques",
        "Offers virtual sessions for flexible access",
        "Insurance acceptance includes Aetna, BlueCross and BlueShield, Cigna and Evernorth, and Out of Network"
      ]
    },
    {
      "title": "Anxiety and Stress Management",
      "description": "This service is designed for individuals struggling with anxiety and stress. By utilizing techniques from Cognitive Behavioral Therapy and mindfulness practices, I help clients identify triggers, develop coping strategies, and learn to manage their symptoms effectively.",
      "image": "/images/services/anxiety.webp",
      "points": [
        "Addresses various forms of anxiety, including generalized anxiety and stress-related issues",
        "Employs mindfulness-based and solution-focused techniques",
        "Creates an educational environment where clients become informed about their symptoms",
        "Virtual sessions provide accessibility and convenience",
        "Accepts Aetna, BlueCross and BlueShield, Cigna and Evernorth, and Out of Network insurance"
      ]
    }
  ];

// Credentials data
export const credentials: Credential[] = [
  { "text": "Licensed Clinical Social Worker in North Carolina (C018115) with 10 years of experience." },
  { "text": "Specializes in Women's Issues, Racial Identity, and Anxiety, providing targeted support and therapy." },
  { "text": "Certified in various therapeutic modalities including Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy, and Mindfulness-Based Cognitive Therapy (MBCT)." },
  { "text": "Holds a Master of Social Work (MSW) from North Carolina Central University." },
  { "text": "Experienced in addressing a range of challenges including trauma, PTSD, life transitions, and peer relationships." }
];

// Values data
export const values: Value[] = [
    {
      "title": "Empowerment Through Education",
      "description": "Education is a cornerstone of effective therapy. By ensuring clients are well-informed about their symptoms and the underlying causes, we empower them to take an active role in their healing journey. This knowledge not only demystifies the therapeutic process but also fosters confidence in their ability to manage their challenges effectively."
    },
    {
      "title": "Acceptance of Uncertainty",
      "description": "In a world filled with unpredictability, learning to accept what we cannot change is vital for emotional well-being. This value emphasizes the importance of developing resilience and coping strategies that allow clients to navigate life's uncertainties with grace and strength, ultimately leading to personal growth."
    },
    {
      "title": "Safe and Authentic Space",
      "description": "Creating a genuine and informal environment is essential for effective therapy. This value highlights the importance of fostering trust and openness, allowing clients to express themselves freely. When clients feel safe, they can delve deeper into their experiences and work towards meaningful change."
    },
    {
      "title": "Holistic Approach to Healing",
      "description": "A holistic approach considers the interconnectedness of emotional, mental, and social factors in a client's life. This value reflects the commitment to address not just symptoms, but the whole person, helping clients to understand the broader context of their experiences and fostering comprehensive healing."
    },
    {
      "title": "Strength-Based Perspective",
      "description": "Utilizing a strength-based perspective empowers clients to recognize and harness their inherent strengths. This value underscores the belief that every individual possesses unique qualities that can be leveraged to overcome difficulties, promoting a sense of agency and hope throughout the therapeutic process."
    }
  ];

// Experience paragraphs
export const experience: Experience[] = [{
  "paragraph": "Nyisha Rogers is a dedicated Clinical Social Worker and therapist with 10 years of experience in the field. She earned her Master of Social Work (MSW) from North Carolina Central University in 2017. Nyisha specializes in Women's Issues, Racial Identity, and Anxiety, and has a diverse expertise that includes Child Therapy, Codependency, Life Transitions, and Trauma and PTSD. Utilizing a variety of treatment approaches such as Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy, Mindfulness-Based Cognitive Therapy (MBCT), and Trauma-Focused therapy, she creates a genuine and informal space for clients. Nyisha is committed to empowering women and youth to navigate challenges related to trauma, stress, and life transitions, helping them develop effective coping strategies and a deeper understanding of their experiences."
}];

// Contact details
export const contactDetails: ContactDetails = {
  "location": "4814 Six Forks Road, Raleigh, NC 27609 (Virtual sessions available)",
  "phone": "(919) 769-9913",
  "email": "nyisha.rogers@counseling.com",
  "hours": [
      { "day": "Monday - Friday", "time": "9am - 5pm" }
  ]
};

// Hero content
export const heroContent: HeroContent = {
  "title": {
    "main": "Nyisha Rogers Clinical Social Work/Therapist",
    "sub": "I help women and youth tackle issues with trauma, stress/anxiety and life transitions."
  },
  "paragraphs": [
    "I help women and youth tackle issues with trauma, stress/anxiety and life transitions. We live in a world of uncertainty and at times we find ourselves greatly overwhelmed by it. The difficult truth is uncertainty does'nt disappear. Best case scenario is we become more accepting of the uncertainty that we can’t change and more skilled at managing the uncertainty that’s ours to manage.",
    "I've helped women connect the dots by uncovering trauma, growing awareness about symptoms, and empowering them to end survival mode. I show up so that I can help clients reveal what they should do next. I understand that almost every client wants a fast track to easing their symptoms. I take an approach that ensures clients are equally as educated about their symptoms as they are motivated towards managing them."
  ],
  "ctaText": "Free Consultation",
  "backgroundImage": "/images/insite-hero-background.jpg"
};

// Quote section
export const quoteSection: QuoteSection = {
  "quote": {
    "textHtml": "Embracing uncertainty is not about eliminating fear; it's about learning to <strong style='color: #E7963E;'>dance</strong> with it, finding strength in the <strong style='color: #E7963E;'>unknown</strong>.",
    "author": "On Managing Life's Challenges"
  },
  "description": {
    "textHtml": "A theme of <strong style='color: #E7963E;'>Acceptance of Uncertainty</strong>."
  },
  "cta": {
    "text": "Get Started",
    "link": "/contact"
  }
};

// Testimonials
export const testimonials: Testimonial[] = [
    {
      "text": "Working with this therapist has been life-changing. I learned to navigate my anxiety and uncertainty in a healthier way, and I finally feel empowered to face my challenges head-on.",
      "rating": 5,
      "author": "Client in Therapy"
    },
    {
      "text": "I appreciate the supportive and informal atmosphere created during our sessions. It allowed me to open up about my experiences with racial identity and trauma without fear of judgment.",
      "rating": 4,
      "author": "Client in Therapy"
    },
    {
      "text": "The techniques I learned have been incredibly effective in managing my stress and life transitions. I feel more equipped to handle uncertainty now.",
      "rating": 5,
      "author": "Client in Therapy"
    },
    {
      "text": "This therapist has a unique ability to help me connect the dots regarding my past traumas. I now understand my triggers better and feel more in control of my emotions.",
      "rating": 5,
      "author": "Client in Therapy"
    },
    {
      "text": "As a young person, I struggled to articulate my feelings around peer relationships. The therapist's approach made it easy for me to express myself, and I learned valuable coping strategies.",
      "rating": 4,
      "author": "Client in Therapy"
    },
    {
      "text": "I was overwhelmed during my postpartum period, but the support and insight I gained from these sessions made a significant difference in my well-being.",
      "rating": 5,
      "author": "Client in Therapy"
    },
    {
      "text": "The mindfulness techniques taught in therapy have helped me manage my anxiety significantly. I feel more grounded and present in my daily life.",
      "rating": 4,
      "author": "Client in Therapy"
    }
  ];

// Organizations
export const organizations: Organization[] = [
    {
      "name": "Aetna",
      "logo": "/images/logos/aetna.png",
      "width": 150
    },
    {
      "name": "BlueCross and BlueShield",
      "logo": "/images/logos/BCBSMA_Logo.png",
      "width": 150
    },
    {
      "name": "Cigna and Evernorth",
      "logo": "/images/logos/Cigna-Logo.png",
      "width": 150
    }
  ];

// Insurance data
export const insuranceProviders: InsuranceProvider[] = [
  {
    name: "Aetna",
    logo: "/images/logos/aetna.png"
  },
  {
    name: "BlueCross BlueShield",
    logo: "/images/logos/BCBSMA_Logo.png"
  },
  {
    name: "UnitedHealthcare",
    logo: "/images/logos/united-healthcare.png"
  },
  {
    name: "Carelon",
    logo: "/images/logos/carelon-logo.png"
  },
  {
    name: "Cigna",
    logo: "/images/logos/Cigna-Logo.png"
  },
  {
    name: "Oscar",
    logo: "/images/logos/oscar.png"
  },
  {
    name: "Oxford Health",
    logo: "/images/logos/oxford-health-plans-logo-png-transparent.png"
  },
  {
    name: "Quest",
    logo: "/images/logos/quest-logo-light.png"
  }
];

// Complete therapist profile
export const therapistProfile: TherapistProfile = {
  name: "Nyisha Rogers",
  legalName: "Creative Therapies NC",
  companyName: "Creative Therapies NC",
  title: "Clinical Social Work/Therapist",
  bio: "I help women and youth tackle issues with trauma, stress/anxiety and life transitions. We live in a world of uncertainty and at times we find ourselves greatly overwhelmed by it. The difficult truth is uncertainty doesn't disappear. Best case scenario is we become more accepting of the uncertainty that we can't change and more skilled at managing the uncertainty that's ours to manage.",
  fees: {
    individual: 125,
    couple: 125
  },
  takesInsurance: true,
  acceptedPaymentMethods: [
    "American Express",
    "Discover",
    "Health Savings Account",
    "Mastercard",
    "Visa"
  ],
  acceptedInsurances: [
    'Aetna',
    'BlueCross BlueShield',
    'Cigna'
  ],
  address: {
    city: "Raleigh",
    state: "NC",
    zip: "27609"
  },
  specialties: [
    "Women's Issues",
    "Racial Identity",
    "Anxiety"
  ],
  expertise: [
    "Child",
    "Codependency",
    "Life Transitions",
    "Peer Relationships",
    "Pregnancy, Prenatal, Postpartum",
    "Stress",
    "Thinking Disorders",
    "Trauma and PTSD"
  ],
  certifications: [
    "Licensed by State of North Carolina / C018115",
    "MSW from North Carolina Central University (2017)",
    "BS from North Carolina Central University (2013)"
  ],
  education: {
    degree: "MSW",
    school: "North Carolina Central University",
    graduationYear: 2017
  },
  yearsInPractice: 10,
  phone: "(919) 769-9913",
  email: "Contact through Psychology Today",
  website: null,
  offersVirtual: true,
  offersFreeConsultation: false,
  consultationLength: 0
};