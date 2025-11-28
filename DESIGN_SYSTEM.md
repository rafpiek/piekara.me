# Design System Implementation Guide

## Overview
Transform the existing Next.js portfolio to match the new dark, minimalist design with ruby red accents as defined in `example.html`.

## Design System Specification

### Color Palette
```css
/* --- VARIABLES --- */
--bg: #0a0a0a;         /* Deepest Black - Main background */
--surface: #171717;    /* Subtle separation for cards */
--surface-hover: #222222;

--text: #ededed;       /* Primary text */
--text-muted: #888888; /* Secondary/subtle text */

--accent: #D91D41;     /* Ruby Red - Strong but not neon */
```

### Typography
- **Headings**: Space Grotesk (600 weight)
- **Body**: Inter (400-500 weight)
- **Logo**: Space Grotesk with negative letter spacing

### Design Elements
- **Border Radius**: 8px (subtle, professional)
- **Container Max Width**: 1100px
- **Borders**: Very subtle rgba(255,255,255,0.05) for cards
- **Hover States**: Subtle transform and background color changes

## Implementation Strategy

### 1. Global Styles (`globals.css`)
- Implement CSS custom properties for the color system
- Add Space Grotesk and Inter fonts via Google Fonts
- Create base styles with the new typography
- Implement responsive utilities

### 2. Component Updates

#### Navigation (`/components/Navigation.tsx`)
- Transform to minimalist header design
- Remove backdrop blur, use solid dark background
- Simple logo with ruby accent
- Clean navigation links with muted text
- Remove mobile menu for now (optional enhancement)

#### Homepage (`/app/page.tsx`)
- Replace gradient hero with dark background
- Implement new typography hierarchy
- Convert app showcase to grid layout with cards
- Add subtle hover animations
- Maintain all existing content but restructure layout

#### Apps Page (`/app/apps/page.tsx`)
- Redesign app cards to match example design
- Add app icons with ruby accent backgrounds
- Include pricing/status badges
- Implement hover effects with transform and border changes

#### Projects Page (`/app/projects/page.tsx`)
- Convert to simple list format like example
- Left-aligned project names, right-aligned descriptions
- Hover states with ruby accent on project names
- Clean minimal design

### 3. Typography Updates
- Replace all headings with Space Grotesk
- Use Inter for body text
- Implement proper font weights and sizes
- Add text hierarchy with proper spacing

### 4. Interactive Elements
- Implement smooth color transitions (0.2s ease)
- Add hover transforms (-2px translateY)
- Create ruby accent hover states for links
- Maintain accessibility with proper contrast

## Content Preservation
All existing content should be preserved:
- Tapaterra app showcase
- Personal information and about sections
- Project descriptions
- Contact information
- Legal documents (GDPR page)

## Technical Requirements
- Maintain Next.js App Router structure
- Use Tailwind CSS where practical, but prefer custom CSS for design system consistency
- Ensure responsive design works on mobile (≤600px breakpoint)
- Keep existing metadata and SEO optimizations

## Success Criteria
1. [ ] Dark theme implemented consistently
2. [ ] Ruby red accent color used strategically
3. [ ] Typography matches Space Grotesk + Inter combination
4. [ ] All hover animations are smooth and subtle
5. [ ] Mobile responsiveness maintained
6. [ ] All existing content preserved
7. [ ] Build passes without errors
8. [ ] Lint passes without warnings

## Implementation Order
1. Update global CSS and fonts
2. Redesign Navigation component
3. Update homepage layout
4. Redesign apps page with new card design
5. Update projects page
6. Apply design system to remaining pages
7. Test responsive behavior
8. Final QA and polish

## Notes
- The example HTML shows excellent restraint - avoid over-animation
- Ruby accent should be used sparingly for maximum impact
- Maintain the professional, premium feel throughout
- Text readability is paramount - ensure good contrast ratios