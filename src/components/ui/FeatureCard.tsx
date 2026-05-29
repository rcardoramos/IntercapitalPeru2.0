import React from 'react';
import { Card } from './Card';
import * as LucideIcons from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  lightBg?: boolean;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  lightBg = false,
  className
}) => {
  // Dynamically extract Lucide icon component, default to Shield
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Shield;

  return (
    <Card
      theme={lightBg ? 'light' : 'dark'}
      className={`p-8 group relative ${className}`}
      hoverEffect={true}
    >
      {/* Background glow hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-inner ${
          lightBg
            ? 'bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20 group-hover:bg-cyan-primary group-hover:text-white'
            : 'bg-gradient-to-br from-navy-primary to-blue-medium border border-white/10 text-cyan-primary group-hover:text-white group-hover:border-cyan-primary/50'
        }`}>
          <IconComponent size={28} className="transition-transform duration-500 group-hover:scale-110" />
        </div>
        
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          lightBg ? 'text-navy-secondary group-hover:text-cyan-primary' : 'text-white group-hover:text-cyan-light'
        }`}>
          {title}
        </h3>
        
        <p className={`leading-relaxed text-sm md:text-base ${
          lightBg ? 'text-slate-600' : 'text-gray-light'
        }`}>
          {description}
        </p>
      </div>
    </Card>
  );
};

