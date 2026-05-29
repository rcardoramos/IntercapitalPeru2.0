import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  theme = 'dark'
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-deep/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={cn(
              "relative z-10 w-full max-w-lg rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto no-scrollbar transition-all duration-300",
              theme === 'light'
                ? "bg-slate-50 border border-slate-200/80 shadow-2xl text-slate-900 shadow-slate-300/40"
                : "bg-navy-secondary border border-white/10 shadow-2xl shadow-cyan-primary/5 text-white",
              className
            )}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute top-4 right-4 p-2 rounded-full border transition-all cursor-pointer focus:outline-none",
                theme === 'light'
                  ? "bg-slate-100 border-slate-200 hover:border-slate-300 hover:bg-slate-200/60 text-slate-500 hover:text-slate-900"
                  : "bg-white/5 border border-white/5 hover:border-cyan-primary/30 text-gray-light hover:text-cyan-primary"
              )}
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>

            {/* Title */}
            {title && (
              <h3 className={cn(
                "text-xl md:text-2xl font-bold mb-6 pr-6",
                theme === 'light' ? "text-navy-secondary" : "text-white"
              )}>
                {title}
              </h3>
            )}

            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
