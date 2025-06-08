import React from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./NavigationMenu";
import { useNavigation } from "@/hooks/useNavigation";
import { cn } from "@/lib/utils";
import {
  mobileNavVariants,
  backdropVariants,
  staggerContainer,
} from "@/utils/animations";

interface MobileNavigationProps {
  className?: string;
}

export function MobileNavigation({ className }: MobileNavigationProps) {
  const { state, actions } = useNavigation();

  const toggleMobileMenu = () => {
    actions.setMobileOpen(!state.isMobileOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="p-2 text-foreground hover:bg-accent"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {state.isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Navigation Panel */}
            <motion.div
              variants={mobileNavVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-80 bg-background border-r shadow-lg lg:hidden",
                "flex flex-col overflow-hidden",
                className
              )}
            >
              {/* Header */}
              <motion.div
                className="flex items-center justify-between p-4 border-b"
                variants={staggerContainer}
                initial="closed"
                animate="open"
              >
                <motion.h2
                  className="text-lg font-semibold"
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0 },
                  }}
                >
                  Navigation
                </motion.h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="h-8 w-8"
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Navigation Content */}
              <motion.div
                className="flex-1 overflow-y-auto p-4"
                variants={staggerContainer}
                initial="closed"
                animate="open"
              >
                <NavigationMenu variant="mobile" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
