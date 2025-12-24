# Prajwal Shetty - Portfolio Website

A modern, minimal personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, minimal design with black & white color scheme
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 🎨 shadcn/ui components for consistent UI

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add your profile image:
   - Place your profile image at `public/profile.jpg`
   - Recommended size: 400x400px
   - If no image is provided, initials "PS" will be displayed

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`):
   - Update name, subtitle, and description
   - Update GitHub link

2. **About Section** (`components/about.tsx`):
   - Update professional summary
   - Modify experience timeline
   - Update technologies list

3. **Projects Section** (`components/projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and live links

4. **Footer** (`components/footer.tsx`):
   - Update social media links

### Change Accent Color

The accent color for the name is set in `components/hero.tsx`. To change it, modify the gradient classes:

```tsx
className="inline-block bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"
```

You can change `from-violet-500 to-blue-500` to any Tailwind gradient you prefer.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About/Experience section
│   ├── projects.tsx      # Projects section
│   └── footer.tsx        # Footer
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    └── profile.jpg       # Profile image (add your own)
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

