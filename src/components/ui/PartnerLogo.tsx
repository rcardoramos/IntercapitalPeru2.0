import React from 'react';
import { cn } from '../../utils/cn';

interface PartnerLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({
  name,
  logo,
  className
}) => {
  const isCaene = name.toLowerCase() === 'caene';
  const isEle = name.toLowerCase() === 'ele';

  return (
    <div className={cn(
      "flex items-center justify-center px-8 py-4 transition-all duration-300",
      isEle && "bg-navy-deep rounded-2xl px-6 py-3 border border-white/5 shadow-md",
      className
    )}>
      <img
        src={logo}
        alt={`Logo de ${name}`}
        className={cn(
          "w-auto object-contain transition-all duration-300 ease-out select-none pointer-events-auto hover:scale-105",
          isCaene ? "h-14 md:h-16.5" : "h-10 md:h-12"
        )}
        loading="lazy"
      />
    </div>
  );
};

