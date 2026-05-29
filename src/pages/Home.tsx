import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Partners } from '../components/sections/Partners';
import { Benefits } from '../components/sections/Benefits';
import { Process } from '../components/sections/Process';
import { FormQuote } from '../components/sections/FormQuote';
import { Testimonials } from '../components/sections/Testimonials';
import { VideoTestimonials } from '../components/sections/VideoTestimonials';
import { Blog } from '../components/sections/Blog';
import { FAQ } from '../components/sections/FAQ';
import { CTAFinal } from '../components/sections/CTAFinal';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Benefits />
      <Process />
      <FormQuote />
      <Testimonials />
      <VideoTestimonials />
      <Blog />
      <FAQ />
      <CTAFinal />
    </>
  );
};
export default Home;
