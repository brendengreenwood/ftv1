import React, { useState, useRef, useEffect } from "react";
import { Search, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigation } from "@/hooks/useNavigation";
import { cn } from "@/lib/utils";
import {
  searchDropdownVariants,
  staggerContainer,
  staggerItem,
} from "@/utils/animations";

interface NavigationSearchProps {
  className?: string;
  placeholder?: string;
}

export function NavigationSearch({
  className,
  placeholder = "Search navigation...",
}: NavigationSearchProps) {
  const { state, actions, searchOptions } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleInputChange = (value: string) => {
    actions.setSearchQuery(value);
    setIsOpen(value.length > 0);
  };

  const handleItemClick = (item: any) => {
    setIsOpen(false);
    actions.setSearchQuery("");
    if (state.isMobileOpen) {
      actions.setMobileOpen(false);
    }
  };

  const handleInputFocus = () => {
    if (state.searchQuery.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={state.searchQuery}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleInputFocus}
          className="pl-10 pr-4"
        />
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && searchOptions.length > 0 && (
          <motion.div
            variants={searchDropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cn(
              "absolute top-full left-0 right-0 mt-2 z-50",
              "bg-background border rounded-md shadow-lg max-h-80 overflow-y-auto"
            )}
          >
            <motion.div
              variants={staggerContainer}
              initial="closed"
              animate="open"
              className="p-2"
            >
              {searchOptions.slice(0, 10).map((option, index) => (
                <motion.div
                  key={option.id}
                  variants={staggerItem}
                  custom={index}
                >
                  {option.url ? (
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-start h-auto p-3 text-left"
                      onClick={() => handleItemClick(option)}
                    >
                      <Link to={option.url}>
                        <div className="flex items-center gap-3 w-full">
                          {option.icon && (
                            <span className="flex-shrink-0 text-sm">
                              {option.icon}
                            </span>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">
                              {option.label}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {option.path.join(" > ")}
                            </div>
                          </div>
                          {option.url?.startsWith("http") && (
                            <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-auto p-3 text-left"
                      onClick={() => handleItemClick(option)}
                    >
                      <div className="flex items-center gap-3 w-full">
                        {option.icon && (
                          <span className="flex-shrink-0 text-sm">
                            {option.icon}
                          </span>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">
                            {option.label}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {option.path.join(" > ")}
                          </div>
                        </div>
                      </div>
                    </Button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen &&
          state.searchQuery.length > 0 &&
          searchOptions.length === 0 && (
            <motion.div
              variants={searchDropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                "absolute top-full left-0 right-0 mt-2 z-50",
                "bg-background border rounded-md shadow-lg p-4"
              )}
            >
              <div className="text-sm text-muted-foreground text-center">
                No results found for "{state.searchQuery}"
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
