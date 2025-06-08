import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContentAppState {
  /** Whether mobile secondary nav is open */
  isMobileSecondaryNavOpen: boolean;
  /** Whether mobile table of contents is open */
  isMobileTocOpen: boolean;
  /** Current active section in content */
  activeSection?: string;
}

interface ContentAppActions {
  setMobileSecondaryNavOpen: (open: boolean) => void;
  setMobileTocOpen: (open: boolean) => void;
  setActiveSection: (section?: string) => void;
}

interface ContentAppContextType {
  state: ContentAppState;
  actions: ContentAppActions;
}

const ContentAppContext = createContext<ContentAppContextType | undefined>(undefined);

interface ContentAppProviderProps {
  children: ReactNode;
}

export function ContentAppProvider({ children }: ContentAppProviderProps) {
  const [state, setState] = useState<ContentAppState>({
    isMobileSecondaryNavOpen: false,
    isMobileTocOpen: false,
    activeSection: undefined,
  });

  const actions: ContentAppActions = {
    setMobileSecondaryNavOpen: (open: boolean) =>
      setState(prev => ({ ...prev, isMobileSecondaryNavOpen: open })),
    
    setMobileTocOpen: (open: boolean) =>
      setState(prev => ({ ...prev, isMobileTocOpen: open })),
    
    setActiveSection: (section?: string) =>
      setState(prev => ({ ...prev, activeSection: section })),
  };

  return (
    <ContentAppContext.Provider value={{ state, actions }}>
      {children}
    </ContentAppContext.Provider>
  );
}

export function useContentApp() {
  const context = useContext(ContentAppContext);
  if (context === undefined) {
    throw new Error('useContentApp must be used within a ContentAppProvider');
  }
  return context;
}
