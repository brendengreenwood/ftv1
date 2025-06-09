# Spacing Token System

This project uses a consistent spacing system based on 4px and 8px increments, following design system best practices.

## Base Spacing Tokens

All spacing values are based on 4px increments:

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--spacing-xs` | 0.25rem | 4px | Minimal spacing, borders |
| `--spacing-sm` | 0.5rem | 8px | Small element spacing |
| `--spacing-md` | 0.75rem | 12px | Component spacing |
| `--spacing-lg` | 1rem | 16px | Section spacing |
| `--spacing-xl` | 1.25rem | 20px | Large element spacing |
| `--spacing-2xl` | 1.5rem | 24px | Content padding |
| `--spacing-3xl` | 2rem | 32px | Large section spacing |
| `--spacing-4xl` | 2.5rem | 40px | Extra large spacing |
| `--spacing-5xl` | 3rem | 48px | Page-level spacing |
| `--spacing-6xl` | 4rem | 64px | Maximum spacing |

## Semantic Spacing Tokens

For consistent usage across components:

| Token | Value | Usage |
|-------|-------|-------|
| `--section-spacing` | 16px | Space between major sections |
| `--content-padding` | 24px | Padding for content areas |
| `--card-padding` | 24px | Padding inside cards |
| `--element-spacing` | 8px | Space between small elements |
| `--component-spacing` | 12px | Space between components |

## Tailwind Classes

These tokens are available as Tailwind classes:

```css
/* Semantic spacing classes */
.p-content     /* padding: var(--content-padding) */
.p-card        /* padding: var(--card-padding) */
.space-y-section  /* gap: var(--section-spacing) */
.gap-component    /* gap: var(--component-spacing) */
.gap-element      /* gap: var(--element-spacing) */
```

## Usage Examples

### Section Spacing
```jsx
// Use space-y-section for consistent spacing between sections
<div className="space-y-section">
  <section>...</section>
  <section>...</section>
</div>
```

### Content Padding
```jsx
// Use p-content for main content areas
<div className="p-content">
  Content here
</div>
```

### Component Spacing
```jsx
// Use gap-component for spacing between related components
<div className="grid grid-cols-2 gap-component">
  <Card>...</Card>
  <Card>...</Card>
</div>
```

## Best Practices

1. **Always use tokens**: Never use arbitrary spacing values
2. **Prefer semantic tokens**: Use `--section-spacing` instead of `--spacing-lg` when possible
3. **Consistent hierarchy**: Larger elements should have larger spacing
4. **Mobile considerations**: Spacing may need to be reduced on smaller screens

## Migration Guide

When updating existing components:

1. Replace `space-y-12` (48px) with `space-y-section` (16px) for tighter sections
2. Replace `px-6 py-8` with `p-content` for consistent content padding
3. Replace `gap-6` with `gap-component` for component grids
4. Replace `mb-12` with container-level `space-y-section`

This creates a much more professional and consistent spacing system throughout the application.
