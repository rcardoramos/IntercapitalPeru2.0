import React from 'react';
import { Container } from '../shared/Container';
import { Button } from '../ui/Button';
import { ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const CTAFinal: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-navy-secondary to-navy-deep text-white border-t border-white/5 text-center">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-blue-medium/10 rounded-full filter blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-primary text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
            <ShieldCheck size={14} />
            <span>Garantía de transparencia legal</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            ¿Listo para dar el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary via-cyan-light to-white">
              siguiente paso?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-light text-base md:text-xl mb-10 max-w-2xl leading-relaxed font-light">
            Consigue el financiamiento a tu medida y saca adelante tu negocio o consolida tus deudas hoy mismo. Sin cuotas sorpresa ni comisiones fantasmas.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto justify-center">
            <Button
              variant="glow"
              size="lg"
              onClick={() => {
                document.getElementById('cotiza')?.scrollIntoView({ behavior: 'smooth' });
              }}
              rightIcon={<ArrowRight size={18} />}
              className="w-full sm:w-auto px-8 py-4 text-base"
            >
              Solicitar mi Crédito
            </Button>
            <a href="#faq" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <HelpCircle size={18} />
                Ver Preguntas
              </Button>
            </a>
          </div>

          {/* Small print */}
          <p className="text-xs text-gray-neutral/50 mt-10">
            *Evaluación crediticia sujeta a tasación comercial de la propiedad de respaldo.
          </p>
        </div>
      </Container>
    </section>
  );
};
