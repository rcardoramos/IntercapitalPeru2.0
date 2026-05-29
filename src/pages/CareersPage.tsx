import React from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Award, Heart, Coffee, Globe2, Briefcase, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';


export const CareersPage: React.FC = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd-XynITc2aQLW44rzN4gFw-9z6gnuLQfx271sDRPUcewXD6A/viewform";

  const jobOpenings = [
    {
      id: "ejecutivo-ventas",
      title: "Ejecutivo(a) de ventas",
      type: "Full-time",
      modality: "Presencial",
      status: "Activo",
      description: "Gestión de cartera, contactabilidad a base de leads, negociación y cierre. Experiencia en ventas valorada.",
      bullets: [
        "Excelente habilidad de comunicación verbal y escrita.",
        "Conocimientos básicos de herramientas informáticas CRM.",
        "Experiencia previa en Call Center mínimo 1 año."
      ]
    },
    {
      id: "supervisor-ventas",
      title: "Supervisor(a) de ventas",
      type: "Full-time",
      modality: "Presencial",
      status: "Activo",
      description: "Profesional universitario de las carreras de Administración, Marketing, Ing Industrial o afines.",
      bullets: [
        "Dominio de Excel nv. Mid - avanzado.",
        "Habilidad de comunicación y liderazgo.",
        "+2 años de experiencia en telecomunicaciones/banca (CC)."
      ]
    }
  ];

  const perks = [
    { icon: Heart, label: "EPS de primer nivel", desc: "Seguro de salud privado cubierto al 100%." },
    { icon: Globe2, label: "Modalidad Híbrida", desc: "Equilibrio ideal entre oficina y trabajo en casa." },
    { icon: Coffee, label: "Clima Startup", desc: "Ambiente joven, ágil, con fruta, café y sin jerarquías rígidas." },
    { icon: Award, label: "Línea de Carrera", desc: "Crecimiento real garantizado con evaluaciones de desempeño." }
  ];

  return (
    <div className="pt-24 pb-20 relative bg-slate-50 min-h-screen text-slate-900">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-cyan-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Hero Header (Keep it dark and elegant) */}
      <div className="py-16 md:py-24 border-b border-slate-100 relative z-10 bg-navy-deep text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-light text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
              Trabaja con Nosotros
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Construye tu Carrera en el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary via-cyan-light to-white">
                Futuro de las Fintechs
              </span>
            </h1>
            <p className="text-gray-light text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Buscamos mentes comerciales enfocadas en resultados para revolucionar la colocación de créditos inmobiliarios en el Perú.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Content Container */}
      <Container className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          
          {/* Perks Grid */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-secondary text-center mb-10">
              ¿Por qué unirte a nuestro equipo?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <Card key={i} theme="light" className="p-6" hoverEffect={true}>
                    <div className="flex flex-col gap-4 items-start text-left">
                      <div className="w-10 h-10 rounded-xl bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-secondary text-base mb-1">{perk.label}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{perk.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Vacancies Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-navy-secondary mb-3">Puestos disponibles</h2>
              <p className="text-slate-500 text-sm">Postula al rol que mejor se adapte a tu perfil.</p>
            </div>

            {/* 2-Column Job Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  theme="light"
                  className="p-8 flex flex-col justify-between text-left relative overflow-hidden group"
                  hoverEffect={true}
                >
                  <div>
                    {/* Top Row: Job Title & Active Status */}
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-navy-secondary group-hover:text-cyan-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                        {job.status}
                      </span>
                    </div>

                    {/* Modality & Schedule info */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} className="text-cyan-primary" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-cyan-primary" />
                        {job.modality}
                      </span>
                    </div>

                    {/* Role Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Bullet Points Requirements */}
                    <ul className="flex flex-col gap-3.5 mb-8 text-sm text-slate-600">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-primary flex-shrink-0 mt-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Submit CTA Button pointing directly to Google Forms */}
                  <div className="mt-auto">
                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full sm:w-auto"
                    >
                      <Button
                        variant="glow"
                        className="w-full sm:w-auto justify-center text-sm py-3 px-8"
                      >
                        Postular ahora
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom Spontaneous Application info */}
            <div className="text-center mt-12">
              <p className="text-sm text-slate-600 font-normal">
                ¿No ves tu rol?{" "}
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-primary hover:text-cyan-light hover:underline font-semibold transition-colors duration-300"
                >
                  Envíanos tu perfil igualmente
                </a>{" "}
                y te consideramos para futuras posiciones.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default CareersPage;
