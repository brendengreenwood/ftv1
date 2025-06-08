import React from "react";
import { motion } from "framer-motion";
import { NavigationSection } from "./NavigationSection";
import { useNavigation } from "@/hooks/useNavigation";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/utils/animations";

interface NavigationMenuProps {
  className?: string;
  variant?: "sidebar" | "mobile";
}

export function NavigationMenu({
  className,
  variant = "sidebar",
}: NavigationMenuProps) {
  const { data, state, actions } = useNavigation();

  const handleSectionToggle = (sectionId: string) => {
    actions.toggleSection(sectionId);
  };

  const handleItemClick = (item: any) => {
    if (item.path) {
      // Navigation will be handled by React Router
      if (variant === "mobile") {
        actions.setMobileOpen(false);
      }
    }
  };

  return (
    <motion.nav
      className={cn("space-y-2", className)}
      variants={staggerContainer}
      initial="closed"
      animate="open"
    >
      {data.sections.map((section, index) => (
        <motion.div
          key={section.id}
          variants={{
            closed: { opacity: 0, y: 20 },
            open: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1 },
            },
          }}
        >
          <NavigationSection
            section={section}
            isOpen={state.openSections.includes(section.id)}
            onToggle={handleSectionToggle}
            onItemClick={handleItemClick}
            activeItemId={state.activeItem}
            variant="accordion"
          />
        </motion.div>
      ))}
    </motion.nav>
  );
}
