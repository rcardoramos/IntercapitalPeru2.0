import React, { useState } from 'react';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { FAQItem } from '../ui/FAQItem';
import { faqsData } from '../../data/mockData';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <Container>
        {/* Title */}
        <SectionTitle
          badge="Preguntas Frecuentes"
          title="Resuelve tus Dudas Financieras"
          subtitle="Queremos que operes con total tranquilidad. Aquí respondemos las dudas más comunes sobre las condiciones y el proceso de préstamo."
          lightBg={true}
        />

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: CTA & Info Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="bg-gradient-to-br from-navy-deep to-navy-secondary text-white p-8 rounded-3xl relative overflow-hidden shadow-xl border border-white/5">
              {/* Decorative light elements */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-primary/20 rounded-full filter blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-gold/10 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block text-xs font-bold text-cyan-light bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Soporte Inmediato
                </span>
                <h3 className="text-2xl font-bold mb-4 text-white">¿Aún tienes dudas sobre los préstamos?</h3>
                <p className="text-gray-light text-sm leading-relaxed mb-6">
                  Conversa directamente con un asesor financiero experto. Te ayudaremos a resolver cualquier consulta sobre garantías, plazos y requisitos sin ningún compromiso.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/51908942105?text=Hola,%20quisiera%20más%20información%20sobre%20los%20préstamos%20con%20garantía%20hipotecaria."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all text-white font-bold rounded-xl text-sm shadow-lg shadow-green-500/20 group cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    <span>Chatear por WhatsApp</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="mailto:contactanos@intercapitalperu.com"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all text-white font-semibold rounded-xl text-sm border border-white/10 cursor-pointer"
                  >
                    <span>Enviar un Correo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqsData.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                lightBg={true}
                index={index}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
