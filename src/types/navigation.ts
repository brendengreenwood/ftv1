import { ReactNode } from "react";

/**
 * Base navigation item interface
 */
export interface NavigationItem {
  id: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  path?: string;
  isExternal?: boolean;
  children?: NavigationItem[];
}

/**
 * Navigation section interface for grouping related items
 */
export interface NavigationSection {
  id: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  path?: string;
  isExternal?: boolean;
  items: NavigationItem[];
  order?: number;
}

/**
 * Complete navigation structure
 */
export interface NavigationData {
  sections: NavigationSection[];
}

/**
 * Search option for navigation search functionality
 */
export interface SearchOption {
  id: string;
  label: string;
  path: string[];
  icon?: ReactNode;
  section?: string;
  description?: string;
  url?: string;
}

/**
 * Navigation state interface
 */
export interface NavigationState {
  activeSection?: string;
  activeItem?: string;
  openSections: string[];
  searchQuery: string;
  isMobileOpen: boolean;
}

/**
 * Navigation context interface
 */
export interface NavigationContextType {
  state: NavigationState;
  actions: {
    setActiveSection: (sectionId?: string) => void;
    setActiveItem: (itemId?: string) => void;
    toggleSection: (sectionId: string) => void;
    setSearchQuery: (query: string) => void;
    setMobileOpen: (open: boolean) => void;
    reset: () => void;
  };
  data: NavigationData;
  searchOptions: SearchOption[];
}

/**
 * Icon mapping type for consistent icon usage
 */
export type IconName =
  | "home"
  | "work"
  | "group"
  | "school"
  | "security"
  | "email"
  | "manage-accounts"
  | "card-giftcard"
  | "favorite"
  | "health-safety"
  | "flight"
  | "trending-up"
  | "nature"
  | "business"
  | "monetization"
  | "folder"
  | "public"
  | "newspaper"
  | "menu-book"
  | "article"
  | "lightbulb"
  | "notifications"
  | "hotel"
  | "directions-car"
  | "app-registration"
  | "question-answer"
  | "assignment";

/**
 * Navigation component props
 */
export interface NavigationProps {
  className?: string;
  variant?: "sidebar" | "mobile" | "dropdown";
  onItemClick?: (item: NavigationItem) => void;
  onSectionClick?: (section: NavigationSection) => void;
}
