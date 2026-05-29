import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'gold' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className
}) => {
  const baseStyles = "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border";

  const variants = {
    default: "bg-navy-primary/50 text-white border-white/10",
    cyan: "bg-cyan-primary/10 text-cyan-light border-cyan-primary/20",
    gold: "bg-gold/10 text-gold border-gold/20",
    outline: "bg-transparent text-gray-light border-gray-light/30"
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};
