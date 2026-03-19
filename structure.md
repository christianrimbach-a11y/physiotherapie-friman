1. Project Setup
* Framework: Next.js (App Router) + TypeScript
* Styling: Tailwind CSS
* Architecture: Component-driven
* Font: Montserrat (Google Font, global)
* Fully responsive (mobile / tablet / desktop)
* Accessibility:
    * semantic HTML
    * aria labels for icons
    * proper contrast
    * focus states
    * validated forms

2. Design System
Look & Feel
* modern
* calm
* trustworthy
* medical
* minimal
* premium
* lots of white space
Colors
* Primary: #FFFFFF
* Black: #000000
* Gray scale: #111, #333, #666, #EAEAEA
Header + Footer: black backgroundPages: white background, large spacing
Typography (Montserrat only)
* H1: 44–64px, bold
* H2/H3: strong hierarchy
* Body: 16–18px
* Use weights: 300 / 400 / 500 / 600 / 700

3. Global Layout Rules
* max content width: 1100–1200px
* generous padding (py-16, py-24)
* minimal dividers
* subtle hover animations
* clean medical aesthetic
* Primary buttons invert color depending on background

4. Routes (7 Main Pages)
Route	Page
/	Startseite
/ueber-uns	Über uns
/leistungen	Leistungen / Behandlungen
/praxis	Praxis
/kontakt	Kontakt
/impressum	Impressum
/datenschutz	Datenschutz
Additional required route:
/buchung (appointment booking page)
Dynamic routes:
/leistungen/[slug] (treatment detail pages)

5. Header
* black background
* left: text logo Physiotherapie Friman
* center navigation:
    * Startseite
    * Über uns
    * Leistungen
    * Praxis
    * Kontakt
* right: social icons (Instagram / Facebook / LinkedIn)
* sticky on scroll (subtle)
* active link styling

6. Footer
* black background, white text
* left: logo
* center navigation including legal:
    * Startseite
    * Über uns
    * Leistungen
    * Praxis
    * Kontakt
    * Impressum
    * Datenschutz
* right: social icons
* embedded Google Maps iframe
* clean section spacing

7. Reusable Components
Create reusable UI components:
* Header
* Footer (with map embed)
* Hero (image slider or video support)
* SectionWrapper
* CTASection
* ServiceCard
* TestimonialCard
* GalleryGrid
* Button / Input / Textarea
* ContactForm
* BookingForm

8. Home Page (/)
Sections in this exact order:
A. Hero
* image slider (3–5 images)
* overlay for readability
* title + subtitle
* CTA → /buchung
B. Welcome Section
* 2 columns (text left, image right)
C. Keywords Row
Keywords:Behandlung • Massage • Schmerztherapie • Rehabilitation • Bewegung • Gesundheit
D. Services Preview
4–6 treatments preview cardsbutton → detail or /leistungen
E. About Preview
short intro + imagebutton → /ueber-uns
F. Testimonials
3–6 reviews in cards
G. CTA Section
full-width background imagebutton → /buchung

9. Booking Page (/buchung)
Form fields:
* Name
* Phone
* Email
* Preferred date
* Message
* Consent checkbox
Validation + success state (mock submit ok)

10. About Page (/ueber-uns)
Hero with background image
Team Section (2 members)
Member 1Friman Muster — Physiotherapeut (B.Sc.) / Manuelle Therapie
Member 2Lea Beispiel — Physiotherapeutin / Rehabilitation & Prävention
Alternating layout (text/image swap)
Closing CTA → /buchung

11. Services Page (/leistungen)
Hero + intro
Treatments List (alternating layout)
Include:
* Krankengymnastik
* Manuelle Therapie
* Massage / Weichteiltechniken
* Lymphdrainage
* Wärme-/Kältetherapie
* Rehabilitation & Prävention
Only selected treatments have detail pages.

12. Dynamic Treatment Pages
Route: /leistungen/[slug]
Content is data-driven from local file treatments.ts.
Each detail page contains:
* Was ist diese Behandlung?
* Wie funktioniert sie?
* Für wen geeignet?
* Welche Ziele?
* CTA → /buchung
Detail pages required for:
* Manuelle Therapie
* Lymphdrainage
* Rehabilitation & Prävention

13. Praxis Page (/praxis)
* intro section
* image gallery grid
* alternating sections:
    * Allgemeine Praxisübersicht
    * Behandlungsraum A
    * Behandlungsraum B

14. Kontakt Page (/kontakt)
Two-column layout:
Left:
* phone (tel link)
* email (mailto link)
* address (Google Maps link)
Right:
* contact form (Name, Email, Phone optional, Message, Consent)
Optional: opening hours

15. Legal Pages
Impressum
clean legal layout with placeholder data
Datenschutz
standard GDPR structure:controller • contact • processing • cookies • maps • user rights

16. Assets
Use professional physiotherapy placeholder images (local /public assets preferred).
Hero slider must rotate smoothly.

17. UX Details
* subtle hover states
* smooth scrolling optional
* consistent spacing
* no visual clutter
* premium medical feel

 Goal
Deliver a fully working, minimal, modern physiotherapy websitewith reusable architecture, dynamic services, and booking flow.
