import React from 'react';
import { Container } from '../shared/Container';
import { PartnerLogo } from '../ui/PartnerLogo';
import { partnersData } from '../../data/mockData';

export const Partners: React.FC = () => {
  // Duplicate partner list to guarantee seamless loop scrolling
  const marqueePartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="py-16 relative overflow-hidden bg-white border-t border-slate-100 select-none">
      <Container>
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
          Respaldado por las instituciones y notarias líderes del país
        </p>

        {/* Marquee Outer Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Left Gradient Cover */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Cover */}
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />


          {/* Marquee Inner Flex Scroller */}
          <div className="flex w-max items-center animate-infinite-scroll gap-4 md:gap-8 hover:[animation-play-state:paused]">
            {marqueePartners.map((partner, index) => (
              <PartnerLogo
                key={`${partner.name}-${index}`}
                name={partner.name}
                logo={partner.logo}
                className="flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
