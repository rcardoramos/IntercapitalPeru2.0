import React from 'react';
import { Container } from '../components/shared/Container';
import { Card } from '../components/ui/Card';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const PrivacidadPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 relative bg-slate-50 min-h-screen text-slate-900">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-cyan-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Hero Header */}
      <div className="py-16 md:py-24 border-b border-slate-100 relative z-10 bg-navy-deep text-white text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-light text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
              Seguridad & Transparencia
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Política de Privacidad
            </h1>
            <p className="text-gray-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              En Intercapital Perú, valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales, conforme a la Ley N° 29733.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Content Container */}
      <Container className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card theme="light" className="p-8 md:p-12 shadow-md bg-white border border-slate-200/60" hoverEffect={false}>
            <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-8">
              <ShieldCheck className="text-cyan-primary flex-shrink-0" size={32} />
              <div>
                <h2 className="text-xl font-bold text-navy-secondary">INTERCAPITAL PERU E.I.R.L</h2>
                <p className="text-xs text-slate-500">RUC: 20612766780 | Última actualización: Julio 2025</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              En Intercapital Perú, valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales, conforme a la Ley N° 29733 – Ley de Protección de Datos Personales y su reglamento. Al completar nuestros formularios o comunicarte con nosotros, estás aceptando las prácticas descritas a continuación.
            </p>

            <div className="flex flex-col gap-8 text-left">
              {/* Point 1 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">1. Datos que recopilamos</h3>
                <ul className="list-disc pl-5 text-sm text-slate-600 flex flex-col gap-2">
                  <li>Nombres y apellidos</li>
                  <li>Número de teléfono</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Información relacionada con tus intereses inmobiliarios</li>
                </ul>
              </div>

              {/* Point 2 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">2. Finalidad del tratamiento de datos</h3>
                <ul className="list-disc pl-5 text-sm text-slate-600 flex flex-col gap-2">
                  <li>Contactarte y brindarte asesoría sobre propiedades.</li>
                  <li>Enviarte información relevante sobre nuestros servicios y oportunidades del mercado.</li>
                  <li>Atender tus consultas o solicitudes.</li>
                  <li>Evaluar tu perfil como potencial cliente o usuario.</li>
                  <li>Cumplir con obligaciones legales o contractuales.</li>
                </ul>
              </div>

              {/* Point 3 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">3. Confidencialidad y uso de la información</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tus datos personales son tratados de forma confidencial y no serán compartidos con terceros, salvo que exista una obligación legal o sea necesario para la ejecución de nuestros servicios con tu consentimiento.
                </p>
              </div>

              {/* Point 4 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">4. Seguridad de la información</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, pérdida, alteración o destrucción.
                </p>
              </div>

              {/* Point 5 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">5. Derechos del titular de los datos (ARCO)</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Tienes derecho a acceder a tus datos personales, solicitar su rectificación, actualización o eliminación, oponerte a su tratamiento para fines específicos o revocar tu consentimiento en cualquier momento.
                </p>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col gap-3">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Puedes ejercer estos derechos escribiéndonos a:</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-xs font-medium text-slate-600">
                    <a href="mailto:contactanos@intercapitalperu.com" className="flex items-center gap-2 hover:text-cyan-primary transition-colors">
                      <Mail size={16} className="text-cyan-primary" />
                      contactanos@intercapitalperu.com
                    </a>
                    <a href="tel:+51908942105" className="flex items-center gap-2 hover:text-cyan-primary transition-colors">
                      <Phone size={16} className="text-cyan-primary" />
                      +51 908 942 105
                    </a>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">6. Actualizaciones de esta política</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Intercapital Perú se reserva el derecho de modificar esta política de privacidad para adaptarla a cambios legislativos o mejoras en nuestros procesos. Las modificaciones serán publicadas oportunamente en nuestro sitio web.
                </p>
              </div>

              {/* Point 7 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">7. Jurisdicción y Ley aplicable</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Se rige por las leyes peruanas y cualquier disputa o controversia será resuelta en los tribunales de la ciudad de Lima.
                </p>
              </div>

              {/* Point 8 */}
              <div>
                <h3 className="text-lg font-bold text-navy-secondary mb-3">8. Contacto y Domicilio</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-600 mt-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-cyan-primary flex-shrink-0 mt-0.5" />
                    <span>Calle Juan del Carpio 195, San Isidro, Lima</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={16} className="text-cyan-primary flex-shrink-0 mt-0.5" />
                    <span>+51 908 942 105</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={16} className="text-cyan-primary flex-shrink-0 mt-0.5" />
                    <span>contactanos@intercapitalperu.com</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default PrivacidadPage;
