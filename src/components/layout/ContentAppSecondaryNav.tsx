import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  title: string;
  path: string;
  icon?: React.ReactNode;
  badge?: string;
  isExternal?: boolean;
}

interface ContentAppSecondaryNavProps {
  /** Title for the navigation section */
  title?: string;
  /** Navigation items */
  items: NavItem[];
  /** Additional CSS classes */
  className?: string;
}

export function ContentAppSecondaryNav({
  title = "In this section",
  items,
  className,
}: ContentAppSecondaryNavProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 w-full h-full overflow-y-auto bg-background",
        className
      )}
      aria-label="Secondary navigation"
    >
      <div className="px-4 py-6">
        <motion.h4 
          className="text-sm font-medium text-foreground mb-4 px-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h4>
        
        <motion.ul 
          className="space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {items.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
            >
              <NavLink
                to={item.path}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 py-2 px-2 text-sm transition-colors rounded-md group",
                    isActive
                      ? "text-primary font-medium bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )
                }
              >
                {item.icon && (
                  <span className="flex-shrink-0 w-4 h-4">
                    {item.icon}
                  </span>
                )}
                <span className="flex-1">{item.title}</span>
                {item.badge && (
                  <span className="text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
                {item.isExternal && (
                  <span className="flex-shrink-0 w-3 h-3 opacity-50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                )}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
