import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  theme?: 'dark' | 'light';
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  options,
  error,
  helperText,
  className,
  theme = 'dark',
  id,
  ...props
}, ref) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const themes = {
    dark: "bg-navy-deep/60 border-white/10 text-white focus:border-cyan-primary/50",
    light: "bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-primary focus:bg-white"
  };

  return (
    <div className={cn("w-full text-left flex flex-col mb-4", className)}>
      <label
        htmlFor={selectId}
        className={cn(
          "text-xs md:text-sm font-semibold mb-2 block uppercase tracking-wider",
          theme === 'light' ? "text-slate-600" : "text-gray-light"
        )}
      >
        {label}
      </label>

      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-primary/20 appearance-none cursor-pointer",
            themes[theme],
            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className={theme === 'light' ? "bg-white text-slate-900" : "bg-navy-secondary text-white"}>
              {option.label}
            </option>
          ))}
        </select>

        
        {/* Custom Chevron Indicator */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-light">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

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

Select.displayName = 'Select';
