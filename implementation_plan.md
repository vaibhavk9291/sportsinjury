# MY Sports Injury Website — Premium Design Upgrade

This plan outlines the steps required to execute the comprehensive visual upgrade to the "MY Sports Injury" Next.js 14 website as specified.

## Open Questions
- Do you have a preference for any specific Unsplash images in the new Video Testimonial section, or should I select generic sports-related placeholders?
- Are you okay if we implement the custom "CountUp" behavior using Framer Motion's `useSpring` and `useTransform` hooks for a smoother number counting experience?

## Proposed Changes

### 1. Global Setup
- **Dependencies:** Install `embla-carousel-autoplay`. (`embla-carousel-react` is already installed).
- **Global CSS:** Add all custom utility classes to `/app/globals.css` including `.divider-lime`, `.grain-overlay`, `.lime-underline`, `.btn-glow-pulse`, `.urgency-pulse`, `.marquee` classes, and no-scrollbar utilities.

---

### 2. New Components

#### [NEW] `components/CountUp.tsx`
- A reusable component using Framer Motion and `useInView` to smoothly animate numbers from 0 to their target value over 1.5 seconds.
- Append a "+" suffix on completion.

#### [NEW] `components/BackToTop.tsx`
- A fixed bottom-right button that appears after 600px of scrolling.
- Hover states with lime accents and smooth scrolling behavior to the top of the page.

#### [NEW] `components/ServicesCarousel.tsx`
- Replaces the current `Services.tsx` static grid.
- Implements a horizontal Embla carousel with `embla-carousel-autoplay` (4000ms delay).
- Includes category filtering logic (All, Physiotherapy, Chiropractic, Massage, Holistic, Specialist) with Framer Motion layout animations.
- Upgraded service card design with hover borders, shadow glows, and detailed category pills and duration badges.

#### [NEW] `components/VideoTestimonialsSection.tsx`
- A new dual-carousel section placed between Services and Partners.
- **Part A:** A video carousel containing 3 video cards with play overlays and specific patient badges.
- **Part B:** A text reviews carousel containing the 5 existing text reviews moved from the old `Reviews.tsx` section.
- Combined navigation arrows and dot indicators for both.

---

### 3. Updated Components

#### [MODIFY] `components/Navbar.tsx`
- Full redesign with a new sticky behavior, `backdrop-blur-2xl`, and a lime border.
- **Desktop:** Hover effects, active state styling, a mega-dropdown for "Services" with a 3-column grid and bottom CTA strip.
- **Right side:** Phone number with icon, ShoppingBag cart icon, and an upgraded "Book Now" button.
- **Mobile:** Slide-in drawer from the right with a custom cubic-bezier animation, backdrop overlay, and animated hamburger menu icon.

#### [MODIFY] `components/Footer.tsx`
- Complete restructure into a darker `#080808` background.
- **Pre-footer CTA Band:** A large CTA section inviting users to "Start Today" with primary and secondary buttons.
- **Main Body:** 5-column layout containing the logo, tagline, social links, accreditation pills, and robust routing links.
- **Animations:** Framer Motion staggered fade-ups for each column on scroll.

#### [MODIFY] `app/page.tsx`
- **Hero Section:** Add the 3 floating lime glow orbs with scroll-based parallax. Implement the `CountUp` components for the stats row. Add floating social proof cards overlapping the video area. Add `.lime-underline` to the word "Pain" in the H1.
- **Structure:** Replace `<Services />` with `<ServicesCarousel />`. Remove `<Reviews />` and inject `<VideoTestimonialsSection />` before the Trust Marquee / Partners.
- Add `<BackToTop />` to the page.

#### [MODIFY] `components/TrustMarquee.tsx`
- Add `.divider-lime` lines above and below.
- Slow the marquee speed to 45s per loop.
- Make the second row run in reverse.
- Upgrade hover states so logos switch from a darkened silhouette to full color instead of just inverting.

## Verification Plan

### Automated Checks
- `npm run build` to ensure the project compiles with no TypeScript errors or missing imports.
- Ensure all new dependencies (`embla-carousel-autoplay`) resolve correctly.

### Manual Verification
- Review the `Navbar` mega-dropdown on desktop and drawer animation on mobile.
- Verify `Hero` parallax orbs and number counters.
- Test `ServicesCarousel` filtering and autoplay.
- Check `VideoTestimonialsSection` dual carousel sync and video play logic.
- Verify all new Global CSS utilities render the intended aesthetic (grain overlays, lime glows, underlines).
