import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { TestimonialCard } from '../ui/TestimonialCard';
import { testimonialsData } from '../../data/mockData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        {/* Title */}
        <SectionTitle
          badge="Testimonios"
          title="Historias de Éxito Reales"
          subtitle="La confianza de nuestros clientes es nuestro activo más valioso. Descubre cómo ayudamos a personas y empresas a impulsar sus proyectos."
          lightBg={true}
        />

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  image={testimonial.image}
                  theme="light"
                  className="h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
