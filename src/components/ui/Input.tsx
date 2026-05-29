import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  theme?: 'dark' | 'light';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  className,
  type = "text",
  theme = 'dark',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const themes = {
    dark: "bg-navy-deep/60 border-white/10 text-white placeholder-gray-neutral/40 focus:border-cyan-primary/50",
    light: "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-primary focus:bg-white"
  };

  return (
    <div className={cn("w-full text-left flex flex-col mb-4", className)}>
      <label
        htmlFor={inputId}
        className={cn(
          "text-xs md:text-sm font-semibold mb-2 block uppercase tracking-wider",
          theme === 'light' ? "text-slate-600" : "text-gray-light"
        )}
      >
        {label}
      </label>
      
      <input
        ref={ref}
        type={type}
        id={inputId}
        className={cn(
          "w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-primary/20",
          themes[theme],
          error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
        )}
        {...props}
      />


      {error ? (
        <span className="text-red-400 text-xs mt-1.5 font-medium block">
          {error}
        </span>
      ) : helperText ? (
        <span className="text-gray-neutral text-xs mt-1.5 block">
          {helperText}
        </span>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';
