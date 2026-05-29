import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '../components/shared/Container';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { ShieldCheck, TrendingUp, Landmark, ShieldAlert, Award, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

// Investor Zod validation schema
const investorSchema = z.object({
  name: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  phone: z.string().regex(/^9\d{8}$/, { message: "Celular inválido (9 dígitos y empezar con 9)" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  investmentRange: z.enum(["range1", "range2", "range3", "range4"]),
  hasInvestedBefore: z.enum(["si", "no"]),
});


type InvestorFormValues = z.infer<typeof investorSchema>;

export const InviertePage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [currency, setCurrency] = useState<'PEN' | 'USD'>('PEN');
  const [amount, setAmount] = useState<number>(100000);
  const [term, setTerm] = useState<number>(12); // months

  // Projected Annual Net Interest Rate (18% for Soles, 10% for Dollars)
  const annualYield = currency === 'PEN' ? 0.18 : 0.10;
  const totalEarnings = amount * annualYield * (term / 12);
  const monthlyEarnings = totalEarnings / term;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<InvestorFormValues>({
    resolver: zodResolver(investorSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      investmentRange: "range1",
      hasInvestedBefore: "no"
    }
  });

  const onSubmit = async (data: InvestorFormValues) => {
    setStatus('loading');
    try {
      if (!(window as any).Forminit) {
        throw new Error("El SDK de Forminit no se ha cargado correctamente.");
      }

      const forminit = new (window as any).Forminit();
      const formData = new FormData();
      formData.append("fi-sender-fullName", data.name);
      formData.append("fi-sender-phone", `+51${data.phone}`);
      formData.append("fi-sender-email", data.email);
      formData.append("fi-select-investmentRange", data.investmentRange);
      formData.append("fi-select-hasInvestedBefore", data.hasInvestedBefore);

      const { error } = await forminit.submit('nntcaf7hmws', formData);

      if (!error) {
        setStatus('success');
      } else {
        console.error("Forminit submission error:", error);
        setStatus('error');
      }
    } catch (e) {
      console.error("Error submitting investor form:", e);
      setStatus('error');
    }
  };

  const investmentRanges = [
    { value: "range1", label: "S/. 50,000 - S/. 100,000 (o eq. en $)" },
    { value: "range2", label: "S/. 100,000 - S/. 250,000 (o eq. en $)" },
    { value: "range3", label: "S/. 250,000 - S/. 500,000 (o eq. en $)" },
    { value: "range4", label: "S/. 500,000 a más" }
  ];

  return (
    <div className="pt-24 pb-20 relative bg-slate-50 min-h-screen text-slate-900">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-cyan-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Hero Header */}
      <div className="py-16 md:py-24 border-b border-slate-100 relative z-10 bg-navy-deep text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-light text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
              Rentabilidad & Seguridad
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Multiplica tu Capital con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary via-cyan-light to-white">
                Garantía Hipotecaria
              </span>
            </h1>
            <p className="text-gray-light text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Invierte de forma segura y transparente financiando préstamos respaldados por propiedades inscritas en SUNARP. Retornos mensuales de hasta 22% anual.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Investor Video Section */}
      <div className="relative z-10 py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-primary text-xs font-semibold uppercase tracking-wider mb-5 inline-block">
                  Conoce Más
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-secondary mb-4 leading-tight">
                  Descubre el Potencial de <br />
                  <span className="text-cyan-primary">Invertir con Nosotros</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Te explicamos en detalle cómo funciona nuestra plataforma de inversiones respaldadas por garantía hipotecaria, los procesos legales, los retornos esperados y cómo protegemos tu capital en todo momento.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Retorno anual', value: 'Hasta 22%' },
                    { label: 'LTV máximo', value: '30-40%' },
                    { label: 'Respaldo legal', value: 'SUNARP' },
                    { label: 'Plazo mínimo', value: '6 meses' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-xl font-extrabold text-navy-secondary">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Video side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-black aspect-video">
                  <video
                    src="/videos/page-inversionista-video.mp4"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-cyan-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-primary/5 rounded-full blur-xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* Simulator and Detailed Section */}
      <Container className="py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Simulator */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Card theme="light" className="p-8" hoverEffect={false}>
              <h2 className="text-2xl font-bold text-navy-secondary mb-6 flex items-center gap-3">
                <TrendingUp className="text-cyan-primary" size={24} />
                Calcula tu Rendimiento
              </h2>

              {/* Currency Selector */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => { setCurrency('PEN'); if (amount < 50000) setAmount(50000); }}
                  className={`flex-1 py-3 rounded-xl border font-bold text-sm transition-all cursor-pointer ${
                    currency === 'PEN'
                      ? 'bg-cyan-primary text-navy-secondary border-cyan-primary shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-cyan-primary/30'
                  }`}
                >
                  Soles (S/.)
                </button>
                <button
                  onClick={() => { setCurrency('USD'); if (amount < 20000) setAmount(20000); }}
                  className={`flex-1 py-3 rounded-xl border font-bold text-sm transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-cyan-primary text-navy-secondary border-cyan-primary shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-cyan-primary/30'
                  }`}
                >
                  Dólares ($)
                </button>
              </div>

              {/* Amount Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Monto a Invertir</label>
                  <span className="text-xl font-extrabold text-cyan-primary">
                    {currency === 'PEN' ? 'S/. ' : '$ '}
                    {amount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === 'PEN' ? 50000 : 15000}
                  max={currency === 'PEN' ? 1000000 : 300000}
                  step={currency === 'PEN' ? 10000 : 5000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>{currency === 'PEN' ? 'S/. 50K' : '$ 15K'}</span>
                  <span>{currency === 'PEN' ? 'S/. 500K' : '$ 150K'}</span>
                  <span>{currency === 'PEN' ? 'S/. 1M' : '$ 300K'}</span>
                </div>
              </div>

              {/* Term Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Plazo de Inversión</label>
                  <span className="text-xl font-extrabold text-cyan-primary">{term} meses</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="36"
                  step="6"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>6 meses</span>
                  <span>18 meses</span>
                  <span>36 meses</span>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Ganancia Mensual Est.
                  </p>
                  <p className="text-lg font-extrabold text-slate-800">
                    {currency === 'PEN' ? 'S/. ' : '$ '}
                    {Math.round(monthlyEarnings).toLocaleString()}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Retorno Total Est.
                  </p>
                  <p className="text-lg font-extrabold text-cyan-primary">
                    {currency === 'PEN' ? 'S/. ' : '$ '}
                    {Math.round(totalEarnings).toLocaleString()}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tasa Efectiva Anual (TEA)
                  </p>
                  <p className="text-lg font-extrabold text-slate-800">
                    {currency === 'PEN' ? '18.0%' : '10.0%'}
                  </p>
                </div>
              </div>
            </Card>

            {/* How it works */}
            <div className="flex flex-col gap-6 text-left">
              <h3 className="text-2xl font-bold text-navy-secondary mb-2">¿Cómo se resguarda tu dinero?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1">LTV Saludable</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      El monto prestado nunca supera el 30% al 40% de la tasación comercial, asegurando una cobertura holgada del capital.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1">Escritura en SUNARP</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      El gravamen hipotecario se inscribe formalmente ante registros públicos (SUNARP) a nombre del fideicomiso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1">Cobranza y Legalidad</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Intercapital gestiona de forma integral la administración del crédito, la cobranza mensual y la asesoría jurídica.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center text-cyan-primary flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1">Regulación del Mercado</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operaciones enmarcadas en la legislación de mutuos con garantía real bajo la normatividad de leyes peruanas aplicables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Investor Registry Form */}
          <div className="lg:col-span-5">
            <Card theme="light" className="p-8 relative" hoverEffect={false}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center animate-fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-secondary mb-3">¡Registro Completo!</h3>
                  <p className="text-slate-600 text-sm max-w-xs leading-relaxed mb-6">
                    Tu solicitud para formar parte del pool de inversionistas ha sido recibida. Un ejecutivo te llamará para explicarte los proyectos actuales listos para financiamiento.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
                    Simular Nuevamente
                  </Button>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-6">
                    <AlertTriangle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-secondary mb-3">Error en el Servidor</h3>
                  <p className="text-slate-600 text-sm max-w-xs leading-relaxed mb-6">
                    No pudimos procesar tus datos. Por favor reintenta en unos instantes.
                  </p>
                  <Button variant="glow" size="sm" onClick={() => setStatus('idle')}>
                    Reintentar
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-navy-secondary mb-2">Registrarme como Inversionista</h3>
                  <p className="text-xs text-slate-500 mb-4">Déjanos tus datos de contacto para enviarte las fichas informativas de los préstamos disponibles.</p>

                  <Input
                    label="Nombre Completo"
                    placeholder="Ej. Martín Vizcarra Ugarte"
                    theme="light"
                    error={errors.name?.message}
                    {...register("name")}
                  />

                  <Input
                    label="Teléfono Celular"
                    placeholder="Ej. 998877665"
                    type="tel"
                    theme="light"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />

                  <Input
                    label="Correo Electrónico"
                    placeholder="Ej. martin@empresa.com"
                    type="email"
                    theme="light"
                    error={errors.email?.message}
                    {...register("email")}
                  />

                  <Controller
                    name="investmentRange"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Monto Estimado a Invertir"
                        options={investmentRanges}
                        theme="light"
                        error={errors.investmentRange?.message}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="hasInvestedBefore"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="¿Tiene experiencia en este tipo de inversión?"
                        options={[
                          { value: "no", label: "No, es mi primera vez" },
                          { value: "si", label: "Sí, ya he invertido en hipotecas" }
                        ]}
                        theme="light"
                        error={errors.hasInvestedBefore?.message}
                        {...field}
                      />
                    )}
                  />

                  <Button
                    variant="glow"
                    type="submit"
                    size="lg"
                    isLoading={status === 'loading'}
                    className="w-full mt-4 cursor-pointer"
                  >
                    Registrarme
                  </Button>

                  <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 mt-2">
                    <ShieldCheck size={14} className="text-cyan-primary" />
                    <span>Inversiones amparadas por la legislación notarial del Perú.</span>
                  </div>
                </form>
              )}
            </Card>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default InviertePage;
