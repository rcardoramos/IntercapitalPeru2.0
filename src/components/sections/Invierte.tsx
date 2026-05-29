import React, { useState } from 'react';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ShieldCheck, TrendingUp, Landmark, ArrowRight } from 'lucide-react';


interface InvierteProps {
  onOpenQuoteModal: () => void;
}

export const Invierte: React.FC<InvierteProps> = ({ onOpenQuoteModal }) => {
  const [investment, setInvestment] = useState<number>(100000);
  
  // Mock annual interest rate (e.g. 18% annual yield)
  const annualYield = 0.18;
  const estimatedAnnualEarnings = investment * annualYield;
  const estimatedMonthlyEarnings = estimatedAnnualEarnings / 12;

  return (
    <section id="invierte" className="py-24 relative overflow-hidden bg-navy-deep border-t border-white/5">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Inversiones"
          title="Invierte con Garantía Hipotecaria"
          subtitle="Haz crecer tu capital participando como inversionista en préstamos respaldados por inmuebles de alta liquidez. Obtén rentabilidades muy superiores al sistema financiero tradicional."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Investment Benefits */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Alto Rendimiento</h4>
                <p className="text-sm text-gray-light leading-relaxed">
                  Tasas de retorno anuales netas entre el <strong>16% y 22% en soles</strong>, distribuidas mensualmente o al finalizar el periodo contratado.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Garantía Inmobiliaria Real</h4>
                <p className="text-sm text-gray-light leading-relaxed">
                  Cada inversión está 100% respaldada por una hipoteca de primer grado inscrita en SUNARP a favor del fideicomiso de inversiones o del inversionista.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                <Landmark size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Respaldo Legal Completo</h4>
                <p className="text-sm text-gray-light leading-relaxed">
                  Administramos todo el proceso de cobranza y estructuración legal. Monitoreamos activamente las garantías para mitigar cualquier riesgo operativo.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="glow"
                size="md"
                onClick={onOpenQuoteModal}
                rightIcon={<ArrowRight size={16} />}
              >
                Quiero Ser Inversionista
              </Button>
            </div>
          </div>

          {/* Right Column: Simulator Card */}
          <div className="lg:col-span-6">
            <Card className="p-8 !bg-navy-secondary/85 relative" hoverEffect={true}>
              <h3 className="text-xl font-bold text-white mb-6">Simulador de Retorno</h3>

              {/* Investment range slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-light uppercase tracking-wider">Monto a Invertir</label>
                  <span className="text-xl font-extrabold text-cyan-primary">S/. {investment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-navy-deep rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between text-xs text-gray-neutral mt-2">
                  <span>S/. 50,000</span>
                  <span>S/. 500,000</span>
                  <span>S/. 1,000,000</span>
                </div>
              </div>

              {/* Return Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-navy-deep/80 border border-white/5 p-4 rounded-xl text-center">
                  <p className="text-[10px] md:text-xs font-bold text-gray-neutral uppercase tracking-wider mb-1">
                    Ganancia Mensual Est.
                  </p>
                  <p className="text-lg md:text-xl font-extrabold text-white">
                    S/. {Math.round(estimatedMonthlyEarnings).toLocaleString()}
                  </p>
                </div>
                <div className="bg-navy-deep/80 border border-white/5 p-4 rounded-xl text-center">
                  <p className="text-[10px] md:text-xs font-bold text-gray-neutral uppercase tracking-wider mb-1">
                    Retorno Anual Est. (18%)
                  </p>
                  <p className="text-lg md:text-xl font-extrabold text-cyan-primary">
                    S/. {Math.round(estimatedAnnualEarnings).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Security info */}
              <div className="border border-white/5 bg-navy-deep/50 p-4 rounded-xl text-xs text-gray-light text-center leading-relaxed">
                Tasa proyectada del 18% anual. Las ganancias netas reales dependen de las condiciones específicas del préstamo seleccionado y la tasación de la propiedad en garantía.
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
