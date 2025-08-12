# Project Documentation: Therapy Practice Website

## Business Logic Summary

The project is a professional portfolio website for a therapy and counseling practice. It is designed to be a welcoming and informative online presence for individuals seeking mental health services.

The core business logic is to:
1.  **Attract and Inform Potential Clients:** The website serves as a digital storefront, providing essential information about the therapist, their specialties, and their approach to counseling. It aims to build trust and credibility with visitors who may be in a vulnerable state.
2.  **Showcase Services:** It clearly outlines the different therapeutic services offered, such as relationship counseling, infidelity recovery, and trauma treatment. For each service, it details the benefits and specific issues addressed.
3.  **Generate Leads:** The site is designed to convert visitors into potential clients. This is achieved through prominent "Call to Action" (CTA) buttons and banners that encourage visitors to schedule a free consultation or get in touch.
4.  **Establish Credibility:** The website reinforces the therapist's qualifications by displaying their credentials, professional affiliations, and testimonials from previous clients. This helps to build confidence in their expertise.
5.  **Provide a Seamless User Experience:** The design is clean, modern, and easy to navigate, with a calming color palette and professional typography. This ensures that users can find the information they need without friction.

The entire website is data-driven, with all content (therapist profiles, services, testimonials, etc.) sourced from a central configuration file. This allows for easy updates and maintenance without requiring code changes, making it adaptable for different therapists or practices.

## Technical Documentation

This section provides a detailed breakdown of the codebase, including the purpose, inputs, and outputs of each major component.

---

### File: `app/page.tsx`

*   **Purpose:** This is the main entry point for the homepage of the website. It serves as a container that assembles all the major sections of the page in the correct order.
*   **Inputs:** None. This component does not accept any props.
*   **Outputs:** A single page composed of various sections, including the hero, services, testimonials, and contact information. All content is rendered dynamically from the data source.
*   **Structure:**
    ```tsx
    import { HeroSection } from '@/components/HeroSection';
    import { ServicesSection } from '@/components/ServicesSection';
    // ... other imports

    export default function Home() {
      return (
        <>
          <HeroSection />
          <ServicesSection />
          {/* ... other components */}
        </>
      );
    }
    ```

---

### File: `components/HeroSection.tsx`

*   **Purpose:** This component creates the large, visually prominent "hero" section at the top of the homepage. It is designed to make a strong first impression and clearly state the website's purpose.
*   **Inputs:** None. It directly imports the `heroContent` object from `data/augustadvice.ts`.
*   **Outputs:** A full-width section with a background image, an overlay for text readability, a main heading, a subheading, introductory paragraphs, and a call-to-action button.
*   **Key Features:**
    *   **Dynamic Content:** All text and the background image are sourced from the `heroContent` object.
    *   **Responsive Design:** The layout and typography are designed to adapt to different screen sizes.
    *   **Call to Action:** Includes a prominent button that links to the contact page.
*   **Example Usage (in `app/page.tsx`):**
    ```tsx
    <HeroSection />
    ```

---

### File: `components/ServicesSection.tsx`

*   **Purpose:** This component displays a grid of the various therapeutic services offered by the practice. It provides a high-level overview of the specialties.
*   **Inputs:** None. It imports the `services` array from `data/augustadvice.ts`.
*   **Outputs:** A section with a heading, a descriptive paragraph, and a grid of `ServiceCard` components.
*   **Dependencies:** This component uses the `ServiceCard` component to render each individual service.

---

### File: `components/ServiceCard.tsx`

*   **Purpose:** This component is a reusable card that displays information about a single service.
*   **Inputs (Props):**
    *   `title` (string): The name of the service.
    *   `description` (string): A brief explanation of the service.
    *   `image` (string): The URL or path to an image representing the service.
    *   `points` (string[]): An array of key benefits or features of the service.
*   **Outputs:** A styled card with an image, title, description, and a bulleted list of key points.
*   **Example Usage (in `ServicesSection.tsx`):**
    ```tsx
    <ServiceCard
      key={index}
      title={service.title}
      description={service.description}
      image={service.image}
      points={service.points}
    />
    ```

---

### File: `components/FounderSection.tsx`

*   **Purpose:** This component introduces the therapist, displaying their photo, name, title, and a brief biography. It is designed to build a personal connection with potential clients.
*   **Inputs:** None. It imports the `founder` object from `data/augustadvice.ts`.
*   **Outputs:** A section with a two-column layout. One column contains the therapist's headshot, and the other contains their name, title, and biographical paragraphs.
*   **Example Usage (in `app/page.tsx`):**
    ```tsx
    <FounderSection />
    ```

---

### File: `components/OrganizationsMarquee.tsx`

*   **Purpose:** This component displays a scrolling marquee of logos from trusted professional organizations that the therapist is affiliated with. This serves as social proof and helps to build credibility.
*   **Inputs:** None. It imports the `organizations` array from `data/augustadvice.ts`.
*   **Outputs:** A section with a heading and a continuously scrolling list of organization logos.
*   **Key Features:**
    *   **Smooth Scrolling:** Uses the `react-fast-marquee` library to create a seamless, looping animation.
    *   **Visual Consistency:** Applies a grayscale filter to the logos, which are revealed in color on hover. This maintains a clean and professional look.
*   **Example Usage (in `app/page.tsx`):**
    ```tsx
    <OrganizationsMarquee />
    ```

---

### File: `components/CtaBanner.tsx`

*   **Purpose:** This is a full-width "Call to Action" banner designed to grab the user's attention and encourage them to get in touch. It is a key component for lead generation.
*   **Inputs:** None. It imports the `ctaBanner` object from `data/augustadvice.ts`.
*   **Outputs:** A visually distinct section with a background image, a compelling headline, supporting text, a primary CTA button, and a secondary "click-to-call" option.
*   **Key Features:**
    *   **High-Impact Design:** Uses a background image with a dark overlay to make the text stand out.
    *   **Multiple Contact Options:** Provides both a link to the contact page and a direct phone number to accommodate different user preferences.
*   **Example Usage (in `app/page.tsx`):**
    ```tsx
    <CtaBanner />
    ```

---

### Data Configuration: `data/augustadvice.ts`

*   **Purpose:** This file is the single source of truth for all content displayed on the website. It exports a series of objects and arrays that are imported by the various components. This separation of data from presentation allows for easy updates to the website's content without needing to modify the component code.
*   **Structure:** The file exports a collection of constants, each corresponding to a specific section of the website. Key exports include:
    *   `websiteMetadata`: Site-wide SEO and metadata.
    *   `heroContent`: Text and images for the main hero section.
    *   `services`: An array of objects, each defining a therapeutic service.
    *   `founder`: Information about the therapist.
    *   `testimonials`: A list of client testimonials.
    *   `organizations`: Logos and names of affiliated organizations.
    *   `ctaBanner`: Content for the call-to-action banner.
*   **Usage:** To update any text, image, or content on the website, you should modify the corresponding export in this file.

---
## Bug Fix History

*   **Initial Issue:** After creating a new therapist profile (`nyisharogers.ts`) and attempting to use it as the main data source, images were not displaying correctly on the website.
*   **Incorrect Fix Attempt:** The initial attempt to fix this was to use direct URLs from Unsplash in the configuration file. This worked temporarily but was not a good long-term solution, as it relied on external hotlinking and did not follow Next.js best practices for image handling.
*   **Underlying Cause:** The root cause was identified as a misconfiguration in how image paths were being handled. The application expected local images to be stored in the `/public` directory, but the configuration was pointing to external URLs.
*   **Successful Fix:** The issue was resolved by:
    1.  Downloading the required images from Unsplash.
    2.  Converting them to `.webp` format for better performance.
    3.  Placing them in the `/public/images/services` directory.
    4.  Updating the `image` paths in the `nyisharogers.ts` configuration file to use relative local paths (e.g., `/images/services/womens-issues.webp`).
    This ensured that the images were correctly served by the Next.js application, resolving the display issue permanently.

*   **Module Not Found Error:** After deleting the `data/augustadvice.ts` file, the application crashed with a "Module not found" error.
*   **Cause:** The error was caused by multiple components (`app/about/page.tsx`, etc.) that still had `import` statements pointing to the deleted file.
*   **Resolution:** The problem was resolved by recognizing that the deleted file was the active configuration. The issue was fixed by restoring the file and its content, which allowed the imports to resolve correctly and the application to build successfully.

*   **Data Structure Mismatch:** A new configuration file (`augustadvice.ts`) was created with an incorrect data structure. Arrays were improperly wrapped in objects (e.g., `{"services": [...]}` instead of just `[...]`), causing TypeScript errors and breaking the components that consumed this data.
*   **Cause:** The new file did not follow the established data structure defined in `types/index.ts` and used in the `augustadvice_old.ts` file.
*   **Resolution:** The issue was fixed by comparing the incorrect file with the correctly structured `augustadvice_old.ts` file. The content of the incorrect file was replaced with the content of the correct one, ensuring that all data structures matched the expected TypeScript types. 