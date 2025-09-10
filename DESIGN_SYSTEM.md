# FS University Design System Implementation

## Overview
This project implements the complete FS University Design System with proper branding colors, typography, and component system.

## 🎨 Brand Colors
- **FSU Crimson**: `#A02128` - Primary brand color
- **FSU Gold**: `#F5B700` - Secondary brand color  
- **FSU Deep Maroon**: `#6B0F1A` - Support color

## 🔧 Implementation Details

### CSS Variables
All brand colors are implemented as CSS custom properties in `src/app/globals.css`:
```css
--fsu-crimson: #A02128;
--fsu-gold: #F5B700;
--fsu-maroon: #6B0F1A;
```

### Typography
- **Headings**: Merriweather (serif) - Academic, prestigious feel
- **Body Text**: Inter (sans-serif) - Clean, modern readability
- **Font Scale**: H1 (48px) → H4 (22px) with proper line heights

### Components
Pre-built components following the design system:

#### Button Component (`src/components/Button.tsx`)
- Primary: Crimson background, white text
- Secondary: Gold background, crimson text
- Includes hover states and focus outlines

#### Card Component (`src/components/Card.tsx`)
- White background with subtle shadow
- 12px border radius
- 24px padding
- Hover effects

#### Notice Component (`src/components/Notice.tsx`)
- Info, Warning, Error, Success variants
- Semantic colors with proper contrast
- Icon indicators

#### Input Component (`src/components/Input.tsx`)
- Form validation states
- Error messaging
- Focus outlines in FSU Gold

### Usage Examples

```jsx
import { Button, Card, Notice, Input } from '@/components';

// Primary CTA button
<Button variant="primary">Apply Now</Button>

// Secondary button  
<Button variant="secondary">Learn More</Button>

// Information notice
<Notice type="info">Application deadline approaching!</Notice>

// Form input with validation
<Input 
  label="Email Address" 
  type="email" 
  required 
  error="Please enter a valid email"
/>

// Content card
<Card>
  <h3>Program Title</h3>
  <p>Program description...</p>
</Card>
```

## 🏗️ Project Structure
```
src/
├── app/
│   ├── globals.css     # Design system styles
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Homepage implementation
├── components/         # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Notice.tsx
│   ├── Input.tsx
│   └── index.ts
```

## 🚀 Current Features
- ✅ Complete brand color implementation
- ✅ Typography system with Google Fonts
- ✅ Responsive homepage design
- ✅ Reusable component library
- ✅ Form components with validation
- ✅ Notice/alert system
- ✅ Accessibility considerations
- ✅ Dark mode support (partial)

## 🎯 Next Steps
1. Add more page templates (About, Programs, Contact)
2. Implement navigation component
3. Add data tables for schedules/notices
4. Create form templates for applications
5. Add image placeholder system
6. Implement search functionality

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid system: 1 column mobile → 3-4 columns desktop
- Max content width: 1200px (centered)

## ♿ Accessibility
- Minimum 4.5:1 contrast ratio
- Semantic HTML elements
- Focus indicators on all interactive elements
- Screen reader friendly structure
- Keyboard navigation support

The design system is now fully implemented and ready for development!
