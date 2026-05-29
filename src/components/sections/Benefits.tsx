import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { FeatureCard } from '../ui/FeatureCard';
import { benefitsData } from '../../data/mockData';

export const Benefits: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="beneficios" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <Container>
        {/* Title */}
        <SectionTitle
          badge="Beneficios"
          title="Financiamiento Inteligente"
          subtitle="Diseñamos soluciones financieras con las mejores condiciones del mercado local para que resuelvas tus necesidades de capital sin complicaciones."
          lightBg={true}
        />

        {/* 2x2 Grid of Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {benefitsData.map((benefit) => (
            <motion.div key={benefit.id} variants={itemVariants}>
              <FeatureCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                lightBg={true}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );

};
