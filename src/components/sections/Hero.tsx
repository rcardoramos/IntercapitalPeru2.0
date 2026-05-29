import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, BadgeCheck } from 'lucide-react';
import { Container } from '../shared/Container';
import { Button } from '../ui/Button';
import { StatCard } from '../ui/StatCard';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-navy-deep">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-primary/10 rounded-full filter blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-medium/25 rounded-full filter blur-[100px]" />
      
      {/* Mesh/Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Promo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-light text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Shield size={12} className="text-cyan-primary animate-pulse" />
              <span>Aprobación rápida con garantía hipotecaria</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Préstamos Hipotecarios <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary via-cyan-light to-white">
                Rápidos y Seguros
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-light text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal"
            >
              Obtén la liquidez que necesitas adaptada al valor real de tu propiedad. Sin comisiones ocultas y con aprobación flexible, incluso si estás reportado en Infocorp.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Button
                variant="glow"
                size="lg"
                onClick={() => {
                  document.getElementById('cotiza')?.scrollIntoView({ behavior: 'smooth' });
                }}
                rightIcon={<ArrowRight size={18} />}
                className="cursor-pointer"
              >
                Solicitar Ahora
              </Button>
              <a href="#beneficios" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center cursor-pointer"
                >
                  Conoce Más
                </Button>
              </a>
            </motion.div>

            {/* Core Trust Factors */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 w-full"
            >
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs md:text-sm font-bold flex items-center gap-1.5">
                  <Clock size={14} className="text-cyan-primary" />
                  Evaluación
                </span>
                <span className="text-gray-light text-[10px] md:text-xs">En menos de 48 horas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs md:text-sm font-bold flex items-center gap-1.5">
                  <Shield size={14} className="text-cyan-primary" />
                  Legalidad
                </span>
                <span className="text-gray-light text-[10px] md:text-xs">Firma notarial transparente</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs md:text-sm font-bold flex items-center gap-1.5">
                  <BadgeCheck size={14} className="text-cyan-primary" />
                  Flexibilidad
                </span>
                <span className="text-gray-light text-[10px] md:text-xs">Aprobación con Infocorp</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Mockup / Image & Floating Elements */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Main Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-tr from-navy-secondary to-navy-primary/30 p-1 flex items-center justify-center group"
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-primary/10 to-transparent pointer-events-none" />

              {/* Assesoria image (Using Careers or Article Image) */}
              <img
                src="/img/careers.jpg"
                alt="Asesoría Financiera Premium"
                className="w-full h-full object-cover rounded-[22px] opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
              />
              
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Metric 1 */}
            <div className="absolute -top-6 -left-6 md:-left-12 w-48 md:w-56 pointer-events-none">
              <StatCard
                value={1600}
                prefix="+"
                label="Préstamos otorgados"
                duration={1500}
                className="!bg-navy-secondary/90 !backdrop-blur-md shadow-2xl border border-white/10"
              />
            </div>

            {/* Floating Metric 2 */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 w-48 md:w-56 pointer-events-none">
              <StatCard
                value={5}
                prefix="+"
                label="Años de experiencia"
                duration={1000}
                className="!bg-navy-secondary/90 !backdrop-blur-md shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
