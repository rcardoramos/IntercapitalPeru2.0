import React from 'react';
import { Card } from './Card';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  rating,
  comment,
  image,
  className,
  theme = 'dark'
}) => {
  return (
    <Card 
      theme={theme} 
      className={cn("p-8 h-full flex flex-col justify-between", className)} 
      hoverEffect={true}
    >
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < rating ? "currentColor" : "none"}
              className={i < rating ? "text-gold" : "text-gray-neutral/30"}
            />
          ))}
        </div>

        {/* Comment */}
        <p className={cn(
          "italic leading-relaxed text-base mb-6",
          theme === 'light' ? "text-slate-600" : "text-gray-light"
        )}>
          "{comment}"
        </p>
      </div>

      {/* User Info */}
      <div className={cn(
        "flex items-center gap-4 border-t pt-6 mt-auto",
        theme === 'light' ? "border-slate-100" : "border-white/5"
      )}>
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-cyan-primary/30"
          loading="lazy"
        />
        <div>
          <h4 className={cn(
            "font-bold text-base",
            theme === 'light' ? "text-slate-900" : "text-white"
          )}>
            {name}
          </h4>
          <p className="text-xs text-cyan-primary font-medium">
            {role}
          </p>
        </div>
      </div>
    </Card>
  );
};

