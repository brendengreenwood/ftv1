import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavigationItem } from "./NavigationItem";
import type {
  NavigationSection as NavigationSectionType,
  NavigationItem as NavigationItemType,
} from "@/types/navigation";
import { cn } from "@/lib/utils";
import { accordionVariants, staggerContainer } from "@/utils/animations";

interface NavigationSectionProps {
  section: NavigationSectionType;
  isOpen?: boolean;
  onToggle?: (sectionId: string) => void;
  onItemClick?: (item: NavigationItemType) => void;
  activeItemId?: string;
  className?: string;
  variant?: "accordion" | "simple";
}

export function NavigationSection({
  section,
  isOpen = false,
  onToggle,
  onItemClick,
  activeItemId,
  className,
  variant = "accordion",
}: NavigationSectionProps) {
  const handleToggle = () => {
    onToggle?.(section.id);
  };

  const renderItems = (items: NavigationItemType[], level = 0) => {
    return items.map((item, index) => (
      <motion.div
        key={item.id}
        className={cn("space-y-1", level > 0 && "ml-4")}
        variants={staggerContainer}
        initial="closed"
        animate="open"
      >
        <NavigationItem
          item={item}
          isActive={activeItemId === item.id}
          onClick={onItemClick}
          variant={level > 0 ? "compact" : "default"}
          animationDelay={index * 0.05}
        />
        <AnimatePresence>
          {item.children && item.children.length > 0 && (
            <motion.div
              className="ml-4 space-y-1"
              variants={accordionVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {renderItems(item.children, level + 1)}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ));
  };

  if (variant === "simple") {
    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground">
          {section.icon}
          <span>{section.label}</span>
        </div>
        <div className="space-y-1">{renderItems(section.items)}</div>
      </div>
    );
  }

  // If section has a direct path and no children, render as a simple navigation item
  if (section.path && section.items.length === 0) {
    return (
      <div className={className}>
        <NavigationItem
          item={{
            id: section.id,
            label: section.label,
            icon: section.icon,
            path: section.path,
            isExternal: section.isExternal,
            description: section.description,
          }}
          isActive={activeItemId === section.id}
          onClick={onItemClick}
        />
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className={className}>
      <AccordionItem value={section.id} className="border-none">
        <AccordionTrigger
          className={cn(
            "flex items-center gap-3 px-3 py-3 text-sm font-medium hover:no-underline",
            "hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
            isOpen && "bg-accent text-accent-foreground"
          )}
          onClick={handleToggle}
        >
          <div className="flex items-center gap-3 flex-1">
            {section.icon}
            <span className="text-left">{section.label}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-2 pt-1">
          <div className="space-y-1 pl-3">{renderItems(section.items)}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
