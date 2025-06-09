import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentAppLayoutProps {
  /** Title for the top bar */
  title: string;
  /** Subtitle or description for the top bar */
  subtitle?: string;
  /** Icon for the top bar */
  icon?: ReactNode;
  /** Actions/buttons for the top bar */
  actions?: ReactNode;
  /** Secondary navigation component (like DocNavigation) */
  secondaryNav?: ReactNode;
  /** Table of contents or "On this page" navigation */
  tableOfContents?: ReactNode;
  /** Main content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Background color theme */
  theme?: "default" | "blue" | "green" | "purple";
}

const themeStyles = {
  default: {
    bg: "bg-background",
    border: "border-border",
    text: "text-foreground",
    accent: "bg-accent",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-900",
    accent: "bg-blue-100",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-900",
    accent: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-900",
    accent: "bg-purple-100",
  },
};

export function ContentAppLayout({
  title,
  subtitle,
  icon,
  actions,
  secondaryNav,
  tableOfContents,
  children,
  className,
  theme = "default",
}: ContentAppLayoutProps) {
  const styles = themeStyles[theme];

  return (
    <div
      className={cn("flex-1 min-h-screen flex flex-col", styles.bg, className)}
    >
      {/* Top Bar - App Header */}
      <motion.header
        className={cn(
          "border-b px-6 py-4 flex items-center justify-between bg-white",
          styles.border
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4">
          {icon && (
            <div className={cn("flex-shrink-0", styles.text)}>{icon}</div>
          )}
          <div>
            <h1 className={cn("text-2xl font-bold", styles.text)}>{title}</h1>
            {subtitle && (
              <p className={cn("text-sm opacity-70", styles.text)}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </motion.header>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Secondary Navigation (ITS) */}
        {secondaryNav && (
          <motion.aside
            className={cn("hidden lg:block w-56 border-r", styles.border)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {secondaryNav}
          </motion.aside>
        )}

        {/* Main Content */}
        <motion.main
          className="flex-1 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Content */}
          <div className="flex-1 overflow-y-auto">{children}</div>

          {/* Table of Contents (OTP) */}
          {tableOfContents && (
            <motion.aside
              className="hidden xl:block w-64 border-l border-border bg-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {tableOfContents}
            </motion.aside>
          )}
        </motion.main>
      </div>
    </div>
  );
}
