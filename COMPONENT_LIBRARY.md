# 📦 FS University Component Library

A comprehensive, production-ready component library built with **shadcn/ui**, **Aceternity UI**, and **Magic UI** specifically for FS University's website and applications.

## 🏗️ Architecture

### Built With
- **shadcn/ui** - Core UI primitives and components
- **Radix UI** - Accessible, unstyled component primitives
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful, customizable icons
- **Next.js 15** - React framework with App Router

### Design System Integration
- **FS University Brand Colors**: Crimson, Gold, Deep Maroon
- **Typography**: Merriweather (headings) + Inter (body)
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliant

---

## 📂 Component Structure

```
src/components/
├── ui/                     # shadcn/ui primitives
│   ├── button.tsx         # Button variants
│   ├── card.tsx           # Card container
│   ├── badge.tsx          # Status badges
│   ├── accordion.tsx      # Collapsible content
│   ├── tabs.tsx           # Tab navigation
│   ├── dialog.tsx         # Modals/popups
│   ├── dropdown-menu.tsx  # Context menus
│   ├── table.tsx          # Data tables
│   ├── input.tsx          # Form inputs
│   └── ...               # Other UI primitives
├── layout/                # Site structure
│   ├── Header.tsx         # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── NavMenu.tsx        # Navigation component
│   └── Sidebar.tsx        # Optional sidebar
├── programs/              # Academic programs
│   ├── ProgramCard.tsx    # Program display card
│   ├── ProgramGrid.tsx    # Grid layout for programs
│   ├── ProgramDetailHero.tsx
│   └── CurriculumAccordion.tsx
├── notices/               # University notices
│   ├── NoticeCard.tsx     # Notice display card
│   ├── NoticeTable.tsx    # Tabular notice view
│   └── NoticeFilters.tsx  # Filter controls
├── news/                  # News & events
│   ├── NewsCard.tsx       # News article card
│   ├── EventCard.tsx      # Event display card
│   └── EventTimeline.tsx  # Timeline view
├── faculty/               # Faculty information
│   ├── FacultyCard.tsx    # Faculty member card
│   └── FacultyProfile.tsx # Detailed faculty view
├── gallery/               # Media gallery
│   ├── GalleryGrid.tsx    # Image grid
│   ├── Lightbox.tsx       # Image viewer
│   └── VideoEmbed.tsx     # Video player
├── forms/                 # Form components
│   ├── FormField.tsx      # Generic form field
│   ├── MultiStepForm.tsx  # Multi-step forms
│   └── SearchBar.tsx      # Search input
├── feedback/              # User feedback
│   ├── Toast.tsx          # Notifications
│   ├── Alert.tsx          # System alerts
│   ├── LoadingSpinner.tsx # Loading states
│   └── SkeletonLoader.tsx # Content placeholders
└── fsu-specific/          # FS University branded
    ├── ApplyCTA.tsx       # Application call-to-action
    ├── AdmissionSteps.tsx # Application process
    ├── DeadlineBanner.tsx # Deadline notifications
    ├── CampusMetrics.tsx  # University statistics
    ├── HeroSection.tsx    # Landing page hero
    └── NoticeBoardWidget.tsx
```

---

## 🎨 Core UI Components

### Button
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="destructive">Delete Action</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    Card footer actions
  </CardFooter>
</Card>
```

### Badge
```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

---

## 🏛️ Layout Components

### Header
```tsx
import { Header } from '@/components';

// Automatically includes:
// - FS University branding
// - Responsive navigation
// - Apply Now CTA
// - Mobile menu
<Header />
```

### Footer
```tsx
import { Footer } from '@/components';

// Includes:
// - Contact information
// - Quick links
// - Social media links
// - Apply CTA
<Footer />
```

---

## 🎓 Program Components

### ProgramCard
```tsx
import { ProgramCard } from '@/components';

<ProgramCard
  id="computer-science"
  title="Computer Science"
  description="Comprehensive CS program with AI focus"
  duration="4 years"
  level="Undergraduate"
  department="School of Engineering"
  fees="$45,000/year"
  studentsEnrolled={450}
  featured={true}
  image="/program-image.jpg"
/>
```

### ProgramGrid
```tsx
import { ProgramGrid } from '@/components';

<ProgramGrid 
  programs={programList}
  columns={3}
  showFeatured={true}
/>
```

---

## 📢 Notice Components

### NoticeCard
```tsx
import { NoticeCard } from '@/components';

<NoticeCard
  id="exam-schedule"
  title="Final Exam Schedule Released"
  description="Check your exam dates and locations"
  publishDate={new Date()}
  type="Examination"
  department="Academic Office"
  isPinned={true}
  downloadUrl="/exam-schedule.pdf"
/>
```

---

## 🚀 FSU-Specific Components

### ApplyCTA
The flagship component with multiple variants for different contexts:

```tsx
import { ApplyCTA } from '@/components';

// Hero section with full features
<ApplyCTA 
  variant="hero"
  showStats={true}
  showBenefits={true}
  deadline={new Date('2025-10-15')}
/>

// Compact header version
<ApplyCTA variant="header" />

// Sticky mobile bottom bar
<ApplyCTA variant="sticky" />

// Sidebar version
<ApplyCTA 
  variant="sidebar"
  deadline={new Date('2025-10-15')}
/>

// Banner notification
<ApplyCTA 
  variant="banner"
  deadline={new Date('2025-10-15')}
/>
```

---

## 📱 Responsive Design

All components are built mobile-first with responsive breakpoints:

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px - 1280px
- **Large**: 1280px+

---

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements support keyboard navigation
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Visible focus states for all interactive elements
- **Color Contrast**: WCAG 2.1 AA compliant contrast ratios
- **Motion Preferences**: Respects user's motion preferences

---

## 🎭 Animation & Interactions

Built with **Framer Motion** for smooth, performant animations:

- **Hover Effects**: Subtle scale and color transitions
- **Loading States**: Skeleton loaders and spinners
- **Page Transitions**: Smooth enter/exit animations
- **Micro-interactions**: Button presses, form validation

---

## 🔧 Usage Examples

### Complete Page Layout
```tsx
import { Header, Footer, ApplyCTA, ProgramGrid } from '@/components';

export default function HomePage() {
  return (
    <div>
      <Header />
      
      <main>
        <ApplyCTA variant="hero" showStats={true} />
        <ProgramGrid programs={featuredPrograms} />
      </main>
      
      <ApplyCTA variant="sticky" />
      <Footer />
    </div>
  );
}
```

### Program Listing Page
```tsx
import { Header, Footer, ProgramGrid, SearchBar } from '@/components';

export default function ProgramsPage() {
  return (
    <div>
      <Header />
      
      <main className="container mx-auto py-8">
        <SearchBar placeholder="Search programs..." />
        <ProgramGrid 
          programs={allPrograms}
          columns={3}
          showFeatured={false}
        />
      </main>
      
      <Footer />
    </div>
  );
}
```

---

## 🚀 Getting Started

### 1. Import Components
```tsx
// Individual imports
import { Button } from '@/components/ui/button';
import { Header, Footer } from '@/components';

// Bulk imports
import { Button, Card, Badge, Header, Footer, ApplyCTA } from '@/components';
```

### 2. Use in Your Pages
```tsx
export default function MyPage() {
  return (
    <div>
      <Header />
      <main>
        <ApplyCTA variant="hero" />
      </main>
      <Footer />
    </div>
  );
}
```

### 3. Customize with Props
Each component accepts props for customization while maintaining brand consistency.

---

## 🔄 Updates & Maintenance

- **Version Control**: Components follow semantic versioning
- **Breaking Changes**: Documented in CHANGELOG.md
- **Backward Compatibility**: Legacy components maintained for transition period
- **Performance**: Regular audits and optimizations

---

✅ **This component library provides everything needed to build a complete, professional university website that matches FS University's brand and requirements.**
