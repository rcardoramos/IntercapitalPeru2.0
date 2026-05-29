import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './Card';

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number; // Animation duration in milliseconds
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
  className
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    // Calculate increment interval based on duration
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <Card className={`p-6 text-center ${className}`} hoverEffect={true}>
        <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary via-cyan-light to-white mb-2">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <p className="text-gray-light text-sm md:text-base font-medium tracking-wide uppercase">
          {label}
        </p>
      </Card>
    </motion.div>
  );
};
