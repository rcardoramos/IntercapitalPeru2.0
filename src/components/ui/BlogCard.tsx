import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  lightBg?: boolean;
  onClick?: () => void;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  excerpt,
  date,
  readTime,
  lightBg = false,
  onClick,
  className
}) => {
  return (
    <Card
      theme={lightBg ? 'light' : 'dark'}
      className={`group flex flex-col h-full cursor-pointer ${className}`}
      hoverEffect={true}
      onClick={onClick}
    >
      {/* Blog Image Container */}
      <div className="relative overflow-hidden aspect-video w-full">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="cyan">{category}</Badge>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata */}
          <div className={`flex items-center gap-4 text-xs mb-4 ${lightBg ? 'text-slate-500' : 'text-gray-light'}`}>
            <span className="flex items-center gap-1">
              <Calendar size={12} className="text-cyan-primary" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-cyan-primary" />
              {readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 line-clamp-2 ${
            lightBg ? 'text-navy-secondary group-hover:text-cyan-primary' : 'text-white group-hover:text-cyan-light'
          }`}>
            {title}
          </h3>

          {/* Excerpt */}
          <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
            lightBg ? 'text-slate-600' : 'text-gray-light'
          }`}>
            {excerpt}
          </p>
        </div>


        {/* Read More Action */}
        <div className="flex items-center gap-2 text-cyan-primary font-semibold text-sm group-hover:text-cyan-light transition-colors mt-auto">
          <span>Leer más</span>
          <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Card>
  );
};
