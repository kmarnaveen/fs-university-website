# FS University Website

A modern, responsive website for FS University built with **Next.js 15**, **TypeScript**, **shadcn/ui**, **Aceternity UI**, and **Magic UI**, implementing the complete FS University Design System with a comprehensive component library.

## 🎨 Design System & Component Library

This project implements the official **FS University Design System** with a production-ready component library featuring:

### 🏗️ **Technology Stack**
- **shadcn/ui** - Accessible, customizable UI components
- **Radix UI** - Unstyled, accessible component primitives  
- **Framer Motion** - Smooth animations and interactions
- **Tailwind CSS v4** - Utility-first styling system
- **TypeScript** - Type-safe development

### 🎯 **Brand Implementation**
- **Brand Colors**: FSU Crimson (`#A02128`), FSU Gold (`#F5B700`), FSU Deep Maroon (`#6B0F1A`)
- **Typography**: Merriweather for headings, Inter for body text
- **Component Library**: 50+ pre-built, branded UI components
- **Responsive Design**: Mobile-first approach with proper breakpoints

See [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) for complete component documentation.

## ✨ Features

- 🚀 **Next.js 15** with App Router and Turbopack
- 🎨 **Complete FS University Design System** - Professional brand implementation
- � **Comprehensive Component Library** - shadcn/ui + Aceternity UI + Magic UI
- �📱 **Responsive Design** - Works beautifully on all devices
- ⚡ **TypeScript** for type safety and better DX
- 🔍 **SEO Optimized** with proper metadata
- 🌙 **Dark Mode Support** (partial implementation)
- ♿ **Accessibility First** - WCAG 2.1 AA compliant components
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 🧩 **Modular Architecture** - Reusable, maintainable components

## 🏗️ Component Library Structure

```
src/components/
├── ui/                     # shadcn/ui primitives (button, card, etc.)
├── layout/                 # Header, Footer, navigation
├── programs/               # Program cards, grids, details
├── notices/                # Notice cards, tables, filters
├── news/                   # News cards, events, timeline
├── faculty/                # Faculty cards, profiles
├── gallery/                # Image grids, lightbox, video
├── forms/                  # Form fields, multi-step forms
├── feedback/               # Alerts, toasts, loading states
└── fsu-specific/           # FS University branded components
```

## 🚀 Getting Started

### Installation & Development

```bash
# Clone and install
git clone [repository]
cd FS
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Using Components

```tsx
// Import components
import { Header, Footer, ApplyCTA, ProgramGrid } from '@/components';
import { Button, Card, Badge } from '@/components/ui';

// Use in your pages
export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <ApplyCTA variant="hero" showStats={true} />
        <ProgramGrid programs={featuredPrograms} />
      </main>
      <Footer />
    </div>
  );
}
```

## 🎯 Available Components

### Core UI Components
- **Buttons** - Primary, secondary, outline, ghost variants
- **Cards** - Content containers with header/body/footer
- **Badges** - Status indicators and tags
- **Forms** - Inputs, selects, checkboxes, validation
- **Navigation** - Tabs, accordions, dropdowns
- **Feedback** - Alerts, toasts, loading states

### Layout Components
- **Header** - Responsive navigation with FS branding
- **Footer** - Complete footer with links and contact info
- **Breadcrumbs** - Navigation path indicators

### Program Components
- **ProgramCard** - Individual program display
- **ProgramGrid** - Responsive program grid layout
- **ProgramDetailHero** - Detailed program pages

### Notice Components
- **NoticeCard** - University notice display
- **NoticeTable** - Tabular notice listing
- **NoticeFilters** - Search and filter controls

### FSU-Specific Components
- **ApplyCTA** - Multiple variants for different contexts
- **AdmissionSteps** - Application process visualization
- **DeadlineBanner** - Important deadline notifications
- **CampusMetrics** - University statistics display

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - Accessible component library
- **Radix UI** - Unstyled component primitives
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Brand Guidelines

### Colors
- **Primary**: FSU Crimson (`#A02128`) - Headers, CTAs, highlights
- **Secondary**: FSU Gold (`#F5B700`) - Accents, secondary buttons
- **Support**: FSU Deep Maroon (`#6B0F1A`) - Navigation, footers

### Typography
- **Headings**: Merriweather (serif) - Academic prestige
- **Body**: Inter (sans-serif) - Modern readability
- **Scale**: 48px (H1) → 12px (Caption) with proper line heights

### Component Usage
```tsx
// FS University branded button
<Button className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]">
  Apply Now
</Button>

// Program card with FS styling
<ProgramCard
  title="Computer Science"
  level="Undergraduate"
  featured={true}
/>

// Apply CTA with multiple variants
<ApplyCTA 
  variant="hero" 
  showStats={true}
  deadline={new Date('2025-10-15')}
/>
```

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ High contrast color ratios
- ✅ Focus indicators on all interactive elements
- ✅ Semantic HTML structure

## 🚀 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Or check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## 📖 Documentation

- [Component Library Guide](./COMPONENT_LIBRARY.md) - Complete component documentation
- [Design System Guide](./DESIGN_SYSTEM.md) - Brand and styling guidelines
- [Next.js Documentation](https://nextjs.org/docs) - Framework documentation
- [shadcn/ui Documentation](https://ui.shadcn.com) - Component library docs
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling documentation

## 🔄 Development Workflow

1. **Component Development** - Build reusable components in respective directories
2. **Brand Compliance** - Ensure all components follow FS University design system
3. **Accessibility Testing** - Test with screen readers and keyboard navigation
4. **Responsive Design** - Test across all device sizes
5. **Performance Optimization** - Regular audits and optimization

---

✅ **A complete, production-ready university website with a comprehensive component library that scales with your needs.**
