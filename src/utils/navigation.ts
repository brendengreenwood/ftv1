import type { NavigationItem, NavigationSection, SearchOption } from '@/types/navigation';

/**
 * Flatten navigation items for search functionality
 */
export function flattenNavigationItems(
  sections: NavigationSection[],
  parentPath: string[] = []
): SearchOption[] {
  const options: SearchOption[] = [];

  sections.forEach((section) => {
    // Add section itself as a search option
    options.push({
      id: section.id,
      label: section.label,
      path: [section.label],
      icon: section.icon,
      section: section.label,
      description: section.description,
    });

    // Flatten items within the section
    section.items.forEach((item) => {
      options.push(...flattenItems([item], [section.label], section.label));
    });
  });

  return options;
}

/**
 * Recursively flatten navigation items
 */
function flattenItems(
  items: NavigationItem[],
  parentPath: string[] = [],
  sectionName?: string
): SearchOption[] {
  const options: SearchOption[] = [];

  items.forEach((item) => {
    const currentPath = [...parentPath, item.label];
    
    options.push({
      id: item.id,
      label: item.label,
      path: currentPath,
      icon: item.icon,
      section: sectionName,
      description: item.description,
      url: item.path,
    });

    if (item.children) {
      options.push(...flattenItems(item.children, currentPath, sectionName));
    }
  });

  return options;
}

/**
 * Find a navigation item by ID
 */
export function findNavigationItem(
  sections: NavigationSection[],
  itemId: string
): NavigationItem | null {
  for (const section of sections) {
    const found = findItemInItems(section.items, itemId);
    if (found) return found;
  }
  return null;
}

/**
 * Recursively search for an item in a list of items
 */
function findItemInItems(items: NavigationItem[], itemId: string): NavigationItem | null {
  for (const item of items) {
    if (item.id === itemId) return item;
    if (item.children) {
      const found = findItemInItems(item.children, itemId);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Find a navigation section by ID
 */
export function findNavigationSection(
  sections: NavigationSection[],
  sectionId: string
): NavigationSection | null {
  return sections.find(section => section.id === sectionId) || null;
}

/**
 * Get the breadcrumb path for a navigation item
 */
export function getNavigationBreadcrumb(
  sections: NavigationSection[],
  itemId: string
): string[] {
  for (const section of sections) {
    const path = findItemPath(section.items, itemId, [section.label]);
    if (path) return path;
  }
  return [];
}

/**
 * Recursively find the path to an item
 */
function findItemPath(
  items: NavigationItem[],
  itemId: string,
  currentPath: string[]
): string[] | null {
  for (const item of items) {
    const newPath = [...currentPath, item.label];
    
    if (item.id === itemId) {
      return newPath;
    }
    
    if (item.children) {
      const found = findItemPath(item.children, itemId, newPath);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Filter search options based on query
 */
export function filterSearchOptions(
  options: SearchOption[],
  query: string
): SearchOption[] {
  if (!query.trim()) return options;

  const lowercaseQuery = query.toLowerCase();
  
  return options.filter((option) => {
    return (
      option.label.toLowerCase().includes(lowercaseQuery) ||
      option.path.some(pathItem => pathItem.toLowerCase().includes(lowercaseQuery)) ||
      option.description?.toLowerCase().includes(lowercaseQuery) ||
      option.section?.toLowerCase().includes(lowercaseQuery)
    );
  });
}

/**
 * Sort navigation sections by order
 */
export function sortNavigationSections(sections: NavigationSection[]): NavigationSection[] {
  return [...sections].sort((a, b) => (a.order || 0) - (b.order || 0));
}
