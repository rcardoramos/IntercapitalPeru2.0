import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  lightBg?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  align = 'center',
  lightBg = false,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === 'center' ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <Badge variant="cyan" className="mb-4">
          {badge}
        </Badge>
      )}
      
      <h2 className={cn(
        "text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight",
        lightBg ? "text-navy-secondary" : "text-white"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg leading-relaxed font-normal",
          lightBg ? "text-slate-600" : "text-gray-light"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

