import { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import type { NavigationState, SearchOption } from '@/types/navigation';
import { navigationData } from '@/data/navigation';
import { 
  flattenNavigationItems, 
  filterSearchOptions, 
  sortNavigationSections,
  findNavigationItem 
} from '@/utils/navigation';

/**
 * Custom hook for navigation state management
 */
export function useNavigation() {
  const location = useLocation();
  
  // Navigation state
  const [state, setState] = useState<NavigationState>({
    activeSection: undefined,
    activeItem: undefined,
    openSections: [],
    searchQuery: '',
    isMobileOpen: false,
  });

  // Memoized navigation data
  const sortedSections = useMemo(() => 
    sortNavigationSections(navigationData.sections), 
    []
  );

  // Memoized search options
  const searchOptions = useMemo(() => 
    flattenNavigationItems(sortedSections), 
    [sortedSections]
  );

  // Filtered search results
  const filteredSearchOptions = useMemo(() => 
    filterSearchOptions(searchOptions, state.searchQuery),
    [searchOptions, state.searchQuery]
  );

  // Actions
  const setActiveSection = useCallback((sectionId?: string) => {
    setState(prev => ({ ...prev, activeSection: sectionId }));
  }, []);

  const setActiveItem = useCallback((itemId?: string) => {
    setState(prev => ({ ...prev, activeItem: itemId }));
  }, []);

  const toggleSection = useCallback((sectionId: string) => {
    setState(prev => ({
      ...prev,
      openSections: prev.openSections.includes(sectionId)
        ? prev.openSections.filter(id => id !== sectionId)
        : [...prev.openSections, sectionId]
    }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const setMobileOpen = useCallback((open: boolean) => {
    setState(prev => ({ ...prev, isMobileOpen: open }));
  }, []);

  const reset = useCallback(() => {
    setState({
      activeSection: undefined,
      activeItem: undefined,
      openSections: [],
      searchQuery: '',
      isMobileOpen: false,
    });
  }, []);

  // Auto-close mobile menu on route change
  const handleRouteChange = useCallback(() => {
    setMobileOpen(false);
  }, [setMobileOpen]);

  // Find current active item based on location
  const currentItem = useMemo(() => {
    return searchOptions.find(option => option.url === location.pathname);
  }, [searchOptions, location.pathname]);

  return {
    state,
    actions: {
      setActiveSection,
      setActiveItem,
      toggleSection,
      setSearchQuery,
      setMobileOpen,
      reset,
      handleRouteChange,
    },
    data: {
      sections: sortedSections,
    },
    searchOptions: filteredSearchOptions,
    allSearchOptions: searchOptions,
    currentItem,
    isHomePage: location.pathname === '/',
  };
}
