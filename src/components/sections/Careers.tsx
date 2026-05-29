import React from 'react';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Users, Briefcase, Award, ArrowUpRight } from 'lucide-react';

interface CareersProps {
  onOpenCareersModal: () => void;
}

export const Careers: React.FC<CareersProps> = ({ onOpenCareersModal }) => {
  const companyValues = [
    {
      icon: Users,
      title: "Cultura de Innovación",
      desc: "Trabajamos en un entorno tecnológico ágil donde se premia la iniciativa, el aprendizaje constante y las propuestas disruptivas."
    },
    {
      icon: Briefcase,
      title: "Desarrollo Profesional",
      desc: "Línea de carrera real en una fintech en pleno crecimiento. Brindamos capacitaciones constantes en finanzas avanzadas y tecnología."
    },
    {
      icon: Award,
      title: "Beneficios Premium",
      desc: "Seguro de salud EPS de primer nivel, horarios híbridos flexibles, convenios educativos corporativos y un clima laboral excepcional."
    }
  ];

  return (
    <section id="careers" className="py-24 relative overflow-hidden bg-navy-secondary/30 border-t border-white/5">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-medium/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Careers"
          title="Sé Parte del Futuro de las Finanzas"
          subtitle="En Intercapital Perú estamos transformando el acceso a créditos en el país. Si te apasiona la tecnología financiera y el impacto social, este es tu lugar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-tr from-navy-secondary to-navy-primary/30 p-1">
              <img
                src="/img/careers.jpg"
                alt="Equipo Intercapital Perú"
                className="w-full h-full object-cover rounded-[22px] opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs font-bold text-cyan-primary uppercase tracking-widest mb-1.5 block">Modalidad</span>
                <h4 className="text-xl font-bold text-white mb-2">Híbrida & Remota</h4>
                <p className="text-xs text-gray-light">San Isidro, Lima + flexibilidad home office.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Values & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {companyValues.map((value, idx) => {
                const IconComponent = value.icon;
                return (
                  <Card key={idx} className="p-6 !bg-navy-secondary/40 border border-white/5 hover:!bg-navy-secondary/60 transition-colors" hoverEffect={false}>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base mb-1.5">{value.title}</h4>
                        <p className="text-xs md:text-sm text-gray-light leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Button
                variant="glow"
                size="md"
                onClick={onOpenCareersModal}
                rightIcon={<ArrowUpRight size={16} />}
              >
                Ver Vacantes Disponibles
              </Button>
              <a
                href="mailto:contactanos@intercapitalperu.com"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl border border-white/5 hover:border-cyan-primary/30 text-gray-light hover:text-cyan-primary transition-all text-base"
              >
                Enviar CV Espontáneo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
