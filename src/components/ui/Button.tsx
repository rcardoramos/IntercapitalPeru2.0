import React from 'react';
import { cn } from '../../utils/cn';
import { Loader } from './Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-primary to-cyan-secondary text-navy-secondary hover:brightness-110 shadow-md shadow-cyan-primary/10 hover:shadow-cyan-primary/20 hover:scale-[1.02]",
    secondary: "bg-navy-primary hover:bg-blue-medium text-white border border-navy-primary/30 hover:border-cyan-primary/40 hover:scale-[1.02]",
    outline: "bg-transparent border border-gray-light/30 hover:border-cyan-primary hover:text-cyan-primary text-gray-light",
    ghost: "bg-transparent text-gray-light hover:text-white hover:bg-white/5",
    glow: "bg-cyan-primary text-navy-secondary hover:brightness-110 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:scale-[1.02] border border-cyan-light/30"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && "opacity-75 cursor-wait",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader size="sm" className="mr-2 border-current" />}
      {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </button>
  );
};
