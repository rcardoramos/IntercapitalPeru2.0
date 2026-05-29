import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../ui/Card';
import { processSteps } from '../../data/mockData';

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <Container>
        {/* Title */}
        <SectionTitle
          badge="Proceso"
          title="Tu Crédito en 4 Simples Pasos"
          subtitle="Hemos digitalizado y optimizado cada etapa de evaluación para entregarte una experiencia rápida, transparente y sin papeleos innecesarios."
          lightBg={true}
        />

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto mt-16">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-slate-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-cyan-primary via-cyan-light to-blue-medium origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Bubble */}
                  <div className="w-22 h-22 rounded-3xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-900 mb-6 relative group-hover:border-cyan-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
                    {/* Inner glowing circle */}
                    <div className="absolute inset-1.5 rounded-[20px] bg-white flex items-center justify-center shadow-sm">
                      <span className="text-2xl font-extrabold text-cyan-primary group-hover:text-cyan-light transition-colors duration-300">
                        0{step.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Step Info Card */}
                  <Card theme="light" className="p-6 h-full flex flex-col flex-grow" hoverEffect={true}>
                    <h3 className="text-lg font-bold text-navy-secondary mb-3 group-hover:text-cyan-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
