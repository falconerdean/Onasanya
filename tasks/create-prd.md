
# PRD: Website Redesign to Match Reference Site

## 1. Introduction

This document outlines the requirements for redesigning the existing Next.js website to match the look and feel of the reference website: https://effervescent-crostata-4c8e9b.netlify.app/. The primary goal is to update the visual design, layout, and component styling while ensuring the existing code structure and data flow from the `/data` directory remain unchanged.

## 2. Goals

- Update the website's visual design to be modern, clean, and professional, aligning with the reference site.
- Improve the user experience with a more intuitive layout and clearer visual hierarchy.
- Maintain the current architecture, including the use of Next.js, TypeScript, and the existing component structure.
- Ensure all content continues to be sourced from the `therapist.ts` and `augustadvice.ts` files in the `/data` directory. No content should be hardcoded into components.

## 3. Target Audience

The target audience remains the same: individuals seeking therapy and counseling services. The new design should be welcoming, trustworthy, and easy to navigate for users who may be experiencing emotional distress.

## 4. Key Features & Requirements

### 4.1. Global Styles

- **Typography:**
  - **Headings:** "Cormorant Garamond", a serif font, will be used for all main headings (h1, h2, h3).
  - **Body Text:** "Inter", a sans-serif font, will be used for all body text, paragraphs, and labels.
  - Font sizes, weights, and line heights should match the reference site.
- **Color Palette:** The following color palette will be used to match the reference site:
  - **Light Sea Green:** rgb(0, 191, 179)
  - **Pine Green:** rgb(42, 124, 111)
  - **Midnight Green:** rgb(2, 52, 54) - Used for primary text.
  - **Persian Green:** rgb(4, 154, 143) - Used for primary buttons and accents.
- **Layout:**
  - A consistent, spacious layout will be implemented across all pages, with a maximum width for content to ensure readability on larger screens.
  - The use of negative space will be prioritized to create a clean and uncluttered feel.

### 4.2. Component Redesign

The following components will be redesigned to match the look and feel of the reference site. The existing component files will be modified, but the props and data they receive will remain the same.

- **`Navigation.tsx`:**
  - The navigation bar will be updated to be a clean, simple header with the logo on the left and navigation links on the right.
  - The "Schedule a Free Consultation" button will be styled as a prominent call-to-action.
  - The mobile navigation will be a clean, slide-out menu.
- **`HeroSection.tsx`:**
  - The hero section will be redesigned to feature a large, centered heading with a subheading, followed by a brief introductory paragraph.
  - The call-to-action button will be prominently displayed below the text.
  - The background image will be updated to a more subtle, calming image that complements the new color palette.
- **`ServicesSection.tsx` & `ServiceCard.tsx`:**
  - The services section will be displayed in a clean, grid-based layout.
  - Each `ServiceCard` will feature an image, a title, a brief description, and a list of key points.
  - The styling will be updated to be more modern, with rounded corners, subtle shadows, and a clean typography.
- **`FounderSection.tsx`:**
  - This section will be redesigned to have the founder's image on one side and the text on the other.
  - The typography and spacing will be updated to match the reference site.
- **`QuoteSection.tsx`:**
  - The quote section will be styled with a large, elegant font for the quote itself and a smaller font for the attribution.
  - It will be centered on the page with ample white space around it.
- **`TestimonialsSection.tsx`:**
  - Testimonials will be displayed in a clean, card-based layout.
  - Each card will feature the testimonial text, the person's name, and potentially a rating.
- **`OrganizationsMarquee.tsx`:**
  - The marquee will be updated to be a smooth, continuous scroll of organization logos.
  - The logos will be displayed in grayscale to maintain a consistent visual style.
- **`CtaBanner.tsx`:**
  - The call-to-action banner will be a full-width section with a background color or image, a clear heading, and a prominent call-to-action button.
- **`Footer.tsx`:**
  - The footer will be redesigned to be a simple, clean section with links to key pages, contact information, and social media icons.

## 5. Non-Goals

- **Changing the existing code architecture:** The project will remain a Next.js application, and the existing component structure will be preserved.
- **Hardcoding content:** All content will continue to be sourced from the `/data` directory.
- **Adding new features or functionality:** This project is focused solely on the visual redesign of the existing website.

## 6. Assumptions and Dependencies

- All necessary image assets (e.g., logos, background images) will be provided or will be sourced from the existing `public/images` directory.
- The existing data structure in the `therapist.ts` and `augustadvice.ts` files is sufficient to populate the redesigned components.

## 7. Acceptance Criteria

- The final website's look and feel should be a close match to the reference site: https://effervescent-crostata-4c8e9b.netlify.app/
- The website must be fully responsive and functional on all major devices (desktop, tablet, mobile).
- The website must continue to load quickly and perform well.
- No content should be hardcoded into the components.
- All existing functionality (e.g., navigation, forms) must work as expected. 