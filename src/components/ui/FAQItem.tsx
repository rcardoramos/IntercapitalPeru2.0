import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  lightBg?: boolean;
  className?: string;
  index?: number;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  lightBg = false,
  className,
  index
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 ease-out",
        lightBg
          ? isOpen 
            ? "border-cyan-primary/30 border-l-4 border-l-cyan-primary shadow-lg bg-slate-50/90 translate-x-1 md:translate-x-1.5" 
            : "border-slate-200 bg-white hover:border-cyan-primary/30 hover:bg-slate-50/20"
          : isOpen 
            ? "border-cyan-primary/20 border-l-4 border-l-cyan-primary shadow-[0_4px_20px_-5px_rgba(6,182,212,0.15)] bg-navy-secondary/80 translate-x-1 md:translate-x-1.5" 
            : "border-white/5 bg-navy-secondary/40 backdrop-blur-md hover:border-white/10 hover:bg-navy-secondary/50",
        className
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-primary/30"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-base md:text-lg font-semibold pr-4 flex items-center gap-3.5",
          lightBg ? "text-navy-secondary" : "text-white"
        )}>
          {index !== undefined && (
            <span className="text-cyan-primary font-mono text-sm md:text-base font-bold opacity-80 select-none">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          )}
          <span>{question}</span>
        </span>
        <span className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300",
          lightBg
            ? isOpen 
              ? "rotate-180 bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20" 
              : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-cyan-primary"
            : isOpen 
              ? "rotate-180 bg-cyan-primary/10 text-cyan-light border-cyan-primary/20" 
              : "bg-white/5 border border-white/10 text-cyan-primary"
        )}>
          <ChevronDown size={18} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={cn(
              "px-6 pb-6 leading-relaxed text-sm md:text-base pt-4 border-t",
              lightBg 
                ? "text-slate-600 border-slate-200/60" 
                : "text-gray-light border-white/5"
            )}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

