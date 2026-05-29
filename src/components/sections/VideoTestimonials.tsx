import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';

interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  description: string;
  videoSrc: string;
  thumbnail: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Flavio',
    role: 'Cliente Satisfecho',
    description: 'Conoce la experiencia de Flavio con Intercapital Perú y cómo logramos impulsar su proyecto.',
    videoSrc: '/videos/Testimonio1_Flavio.mp4',
    thumbnail: '/videos/Testimonio1_Flavio.mp4',
  },
  {
    id: 2,
    name: 'Cecilia',
    role: 'Clienta Satisfecha',
    description: 'Cecilia comparte cómo Intercapital la apoyó en obtener el financiamiento que necesitaba.',
    videoSrc: '/videos/Testimonio2_Cecilia.mp4',
    thumbnail: '/videos/Testimonio2_Cecilia.mp4',
  },
  {
    id: 3,
    name: 'Maribel',
    role: 'Clienta Satisfecha',
    description: 'Maribel nos cuenta su historia de éxito y cómo el crédito hipotecario transformó su vida.',
    videoSrc: '/videos/Testimonio3_Maribel.mp4',
    thumbnail: '/videos/Testimonio3_Maribel.mp4',
  },
];

export const VideoTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveIndex(null);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
    } else {
      modalVideoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const navigate = (dir: 'prev' | 'next') => {
    if (activeIndex === null) return;
    const next = dir === 'next'
      ? (activeIndex + 1) % testimonials.length
      : (activeIndex - 1 + testimonials.length) % testimonials.length;
    setActiveIndex(next);
    setIsPlaying(true);
  };


  return (
    <section className="py-24 relative overflow-hidden bg-navy-deep">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Testimonios en Video"
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Historias reales de personas que confiaron en Intercapital Perú para alcanzar sus metas financieras."
          lightBg={false}
        />

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Video thumbnail (autoplay muted loop as bg preview) */}
              <div className="relative aspect-[9/14] overflow-hidden">
                <video
                  src={t.videoSrc}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  playsInline
                  preload="metadata"
                  loop
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-cyan-primary/20 border-2 border-cyan-primary backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:bg-cyan-primary/40 transition-all duration-300"
                  >
                    <Play className="text-white ml-1" size={26} fill="white" />
                  </motion.div>
                </div>

                {/* Quote icon top-left */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-cyan-primary/20 border border-cyan-primary/30 flex items-center justify-center">
                  <Quote size={14} className="text-cyan-light" />
                </div>
              </div>

              {/* Card footer */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1">{t.name}</h3>
                <p className="text-cyan-light text-xs font-medium uppercase tracking-wider mb-2">{t.role}</p>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-lg w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video player */}
              <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl aspect-[9/16]">
                <video
                  ref={modalVideoRef}
                  key={activeIndex}
                  src={testimonials[activeIndex].videoSrc}
                  className="w-full h-full object-contain"
                  autoPlay
                  playsInline
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Video controls overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {isPlaying
                      ? <Pause size={16} className="text-white" />
                      : <Play size={16} className="text-white ml-0.5" fill="white" />
                    }
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{testimonials[activeIndex].name}</p>
                    <p className="text-cyan-light text-xs">{testimonials[activeIndex].role}</p>
                  </div>
                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {isMuted
                      ? <VolumeX size={16} className="text-white" />
                      : <Volume2 size={16} className="text-white" />
                    }
                  </button>
                </div>

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4 px-1">
                <button
                  onClick={() => navigate('prev')}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group/nav"
                >
                  <ChevronLeft size={18} className="group-hover/nav:-translate-x-1 transition-transform" />
                  Anterior
                </button>
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveIndex(i); setIsPlaying(true); }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-cyan-primary w-5' : 'bg-white/30 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => navigate('next')}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group/nav"
                >
                  Siguiente
                  <ChevronRight size={18} className="group-hover/nav:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
