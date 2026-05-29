import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  theme?: 'dark' | 'light';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glass = true,
  theme = 'dark',
  ...props
}) => {
  const themes = {
    dark: cn(
      "border border-white/5",
      glass ? "glass" : "bg-navy-secondary",
      hoverEffect && "glass-hover"
    ),
    light: cn(
      "bg-white border border-slate-200/60 shadow-sm text-slate-900",
      hoverEffect && "hover:shadow-lg hover:border-cyan-primary/30 hover:-translate-y-1"
    )
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 overflow-hidden",
        themes[theme],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

