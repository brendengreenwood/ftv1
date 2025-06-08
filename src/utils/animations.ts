import { Variants } from 'framer-motion';

/**
 * Animation variants for different components
 */

// Accordion animations
export const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.2, ease: 'easeInOut' },
      opacity: { duration: 0.15, ease: 'easeInOut' },
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.2, ease: 'easeInOut' },
      opacity: { duration: 0.2, ease: 'easeInOut', delay: 0.05 },
    },
  },
};

// Mobile navigation slide animations
export const mobileNavVariants: Variants = {
  closed: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Backdrop/overlay animations
export const backdropVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Search dropdown animations
export const searchDropdownVariants: Variants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Stagger animations for lists
export const staggerContainer: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  closed: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Button hover animations
export const buttonHoverVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

// Icon rotation animations
export const iconRotateVariants: Variants = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  open: {
    rotate: 90,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Slide in from different directions
export const slideVariants = {
  fromLeft: {
    closed: { x: '-100%', opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  fromRight: {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  fromTop: {
    closed: { y: '-100%', opacity: 0 },
    open: { y: 0, opacity: 1 },
  },
  fromBottom: {
    closed: { y: '100%', opacity: 0 },
    open: { y: 0, opacity: 1 },
  },
};

// Fade animations
export const fadeVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Scale animations
export const scaleVariants: Variants = {
  closed: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

/**
 * Animation configuration
 */
export const animationConfig = {
  // Respect user's motion preferences
  reducedMotion: {
    transition: { duration: 0 },
  },
  
  // Default transition settings
  defaultTransition: {
    type: 'tween',
    duration: 0.2,
    ease: 'easeInOut',
  },
  
  // Spring configurations
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  
  // Bounce configuration
  bounce: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};
