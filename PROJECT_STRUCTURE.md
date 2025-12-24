# Project Structure

```
prajwallshetty.me-1/
├── app/
│   ├── globals.css          # Global Tailwind styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── badge.tsx        # Badge component for tech stack
│   │   ├── button.tsx       # Button component
│   │   └── card.tsx         # Card component
│   ├── about.tsx            # About/Experience section
│   ├── footer.tsx           # Footer with social links
│   ├── hero.tsx             # Hero section with animated name
│   └── projects.tsx         # Projects grid section
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/
│   └── profile.jpg          # Profile image (add your own)
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Features

### Hero Section (`components/hero.tsx`)
- Animated name with letter-by-letter stagger effect
- Gradient accent color (violet to blue) on name
- Profile picture with fallback to initials
- Smooth scroll to projects section
- GitHub link button

### About Section (`components/about.tsx`)
- Professional summary
- Experience timeline with vertical layout
- Technology badges
- Responsive two-column grid

### Projects Section (`components/projects.tsx`)
- Grid layout (3 columns on desktop, responsive)
- Project cards with hover animations
- Tech stack badges
- GitHub and live demo links
- Smooth scale and shadow on hover

### Footer (`components/footer.tsx`)
- Black background with white text
- Social media icons (GitHub, LinkedIn)
- Copyright notice

## Design System

- **Colors**: Pure black (#000000) and white (#FFFFFF)
- **Accent**: Violet to blue gradient (only on name)
- **Typography**: Inter font family
- **Spacing**: Consistent Tailwind spacing scale
- **Animations**: Framer Motion with custom easing curves

## Customization Points

1. **Name Animation**: `components/hero.tsx` - letterVariants
2. **Accent Color**: `components/hero.tsx` - gradient classes
3. **Experience Data**: `components/about.tsx` - experience array
4. **Technologies**: `components/about.tsx` - technologies array
5. **Projects**: `components/projects.tsx` - projects array
6. **Social Links**: `components/footer.tsx` - Link hrefs

