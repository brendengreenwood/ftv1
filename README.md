# FTV1 - ft.ual Intranet Navigation System

A modern, responsive intranet navigation system built with React, TypeScript, and Tailwind CSS. Features a comprehensive navigation structure based on ft.ual.com with reusable content app layout patterns.

## 🚀 Features

### Navigation System

- **Comprehensive Navigation**: 100+ navigation items across 6 main sections
- **Multi-level Structure**: Supports nested navigation with smooth animations
- **External System Integration**: Links to Coupa, Concur, Egencia, YBR, Wayfinder, and more
- **Mobile Responsive**: Optimized mobile navigation with slide-out panels
- **Search Functionality**: Built-in navigation search with fuzzy matching

### Content App Layout Pattern

- **Reusable Architecture**: "App within an app" pattern for content areas
- **Top Bar System**: Configurable headers with titles, subtitles, icons, and actions
- **Three-Panel Layout**: Secondary navigation (ITS) + Content + Table of Contents (OTP)
- **Theme Support**: Multiple color themes (default, blue, green, purple)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing with active state management
- **Component Architecture**: Modular, reusable components
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Material-UI Icons, MDI React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/                 # Reusable layout components
│   │   ├── ContentAppLayout.tsx
│   │   ├── ContentAppProvider.tsx
│   │   └── ContentAppSecondaryNav.tsx
│   ├── navigation/             # Navigation system
│   │   ├── NavigationMenu.tsx
│   │   ├── NavigationSection.tsx
│   │   ├── NavigationItem.tsx
│   │   └── NavigationSearch.tsx
│   └── ui/                     # Base UI components
├── data/
│   └── navigation.ts           # Navigation data structure
├── pages/
│   └── UniformsPage.tsx        # Example content app
├── types/
│   └── navigation.ts           # TypeScript definitions
└── lib/
    └── utils.ts               # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brendengreenwood/ftv1.git
cd ftv1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 🎨 Usage Examples

### Basic Content App Layout

```tsx
import {
  ContentAppLayout,
  ContentAppProvider,
  ContentAppSecondaryNav,
} from "@/components/layout";

const MyContentApp = () => {
  const navItems = [
    { id: "overview", title: "Overview", path: "/my-app" },
    { id: "settings", title: "Settings", path: "/my-app/settings" },
  ];

  return (
    <ContentAppProvider>
      <ContentAppLayout
        title="My Application"
        subtitle="Description of the application"
        icon={<MyIcon />}
        theme="blue"
        secondaryNav={
          <ContentAppSecondaryNav title="In this section" items={navItems} />
        }
      >
        {/* Your content here */}
      </ContentAppLayout>
    </ContentAppProvider>
  );
};
```

### Custom Navigation Section

```tsx
import { NavigationSection } from "@/components/navigation";

const customSection = {
  id: "my-section",
  label: "My Section",
  icon: <MyIcon />,
  items: [
    { id: "item1", label: "Item 1", path: "/item1" },
    { id: "item2", label: "Item 2", path: "/item2" },
  ],
};

<NavigationSection section={customSection} />;
```

## 🎯 Key Design Principles

1. **Intranet-First**: Optimized for internal employee use with focus on efficiency
2. **Content Over Navigation**: Navigation is condensed to maximize content space
3. **Reusable Patterns**: Consistent "app within app" experience across sections
4. **Professional Aesthetics**: Clean, modern design suitable for enterprise use
5. **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 📱 Responsive Behavior

- **Desktop**: Full three-panel layout with persistent navigation
- **Tablet**: Collapsible secondary navigation, maintained content focus
- **Mobile**: Slide-out navigation panels with touch-optimized interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Navigation structure based on ft.ual.com
- Built with modern React patterns and best practices
- Inspired by enterprise intranet design principles
