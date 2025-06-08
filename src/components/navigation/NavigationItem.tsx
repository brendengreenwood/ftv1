import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { NavigationItem } from "@/types/navigation";
import { cn } from "@/lib/utils";
import { staggerItem } from "@/utils/animations";

interface NavigationItemProps {
  item: NavigationItem;
  isActive?: boolean;
  onClick?: (item: NavigationItem) => void;
  className?: string;
  variant?: "default" | "compact";
  animationDelay?: number;
}

export function NavigationItem({
  item,
  isActive = false,
  onClick,
  className,
  variant = "default",
  animationDelay = 0,
}: NavigationItemProps) {
  const handleClick = () => {
    onClick?.(item);
  };

  const content = (
    <div
      className={cn(
        "flex items-center gap-3 w-full text-left",
        variant === "compact" && "gap-2"
      )}
    >
      {item.icon && (
        <span
          className={cn(
            "flex-shrink-0",
            variant === "compact" ? "text-xs" : "text-sm"
          )}
        >
          {item.icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div
          className={cn(
            "font-medium truncate",
            variant === "compact" ? "text-xs" : "text-sm"
          )}
        >
          {item.label}
        </div>
        {item.description && variant === "default" && (
          <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {item.description}
          </div>
        )}
      </div>
      {item.isExternal && (
        <ExternalLink
          className={cn(
            "flex-shrink-0 text-muted-foreground",
            variant === "compact" ? "h-3 w-3" : "h-4 w-4"
          )}
        />
      )}
    </div>
  );

  const buttonProps = {
    variant: isActive ? "secondary" : ("ghost" as const),
    className: cn(
      "justify-start h-auto p-3 text-left",
      variant === "compact" && "p-2",
      isActive && "bg-secondary",
      className
    ),
    onClick: handleClick,
  };

  const MotionButton = motion(Button);

  if (item.path) {
    return (
      <motion.div
        variants={staggerItem}
        initial="closed"
        animate="open"
        transition={{ delay: animationDelay }}
      >
        <MotionButton asChild {...buttonProps}>
          <Link to={item.path} target={item.isExternal ? "_blank" : undefined}>
            {content}
          </Link>
        </MotionButton>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      initial="closed"
      animate="open"
      transition={{ delay: animationDelay }}
    >
      <MotionButton {...buttonProps}>{content}</MotionButton>
    </motion.div>
  );
}
