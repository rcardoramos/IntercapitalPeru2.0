import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { CheckCircle2, AlertTriangle, Calculator, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Schema validation with Zod (exactly the same as the modal form)
const quoteSchema = z.object({
  name: z.string().min(3, { message: "Nombre es obligatorio (mínimo 3 letras)" }),
  phone: z.string().regex(/^9\d{8}$/, { message: "Celular peruano inválido (debe tener 9 dígitos y empezar con 9)" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  propertyOwner: z.enum(["si", "no"], { message: "Debe seleccionar si cuenta con propiedad" }),
  privacyPolicy: z.boolean().refine(val => val === true, { message: "Debe aceptar la política de privacidad" }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export const FormQuote: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Real-time calculation states (independent of form submission)
  const [amount, setAmount] = useState<number>(50000);
  const [term, setTerm] = useState<number>(24);

  // Interest rate mock (approx 1.25% monthly / 15% annual)
  const monthlyRate = 0.0125; 
  
  // Amortization formula (PMT)
  const calculateInstallment = (p: number, n: number) => {
    const r = monthlyRate;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const estimatedInstallment = calculateInstallment(amount, term);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyOwner: "" as any,
      privacyPolicy: false,
    }
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setStatus('loading');
    
    try {
      if (!(window as any).Forminit) {
        throw new Error("El SDK de Forminit no se ha cargado correctamente.");
      }

      const forminit = new (window as any).Forminit();
      const formData = new FormData();
      formData.append("fi-sender-fullName", data.name);
      formData.append("fi-sender-email", data.email);
      formData.append("fi-sender-phone", `+51${data.phone}`);
      formData.append("fi-select-propertyOwner", data.propertyOwner);
      formData.append("fi-checkbox-privacyPolicy", data.privacyPolicy ? "si" : "no");

      console.log("Submitting quote request to Forminit via SDK...");
      const { error } = await forminit.submit('q0v0rfl5gr7', formData);

      if (!error) {
        setStatus('success');
        reset();
      } else {
        console.error("Forminit submission error:", error);
        setStatus('error');
      }
    } catch (e) {
      console.error("Error submitting quote:", e);
      setStatus('error');
    }
  };

  return (
    <section id="cotiza" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Simulador de Crédito"
          title="Calcula tu Préstamo Hipotecario"
          subtitle="Utiliza nuestro cotizador inteligente en tiempo real y solicita tu precalificación inmediata de forma 100% digital."
          lightBg={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Calculator Slider */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Card theme="light" className="p-8" hoverEffect={false}>
              <h3 className="text-xl font-bold text-navy-secondary mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                <Calculator className="text-cyan-primary" size={22} />
                Calculadora de Cuota
              </h3>

              {/* Amount Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Monto a Solicitar</label>
                  <span className="text-xl font-bold text-cyan-primary">S/. {amount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={amount}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setAmount(val);
                  }}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>S/. 20K</span>
                  <span>S/. 250K</span>
                  <span>S/. 500K</span>
                </div>
              </div>

              {/* Term Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Plazo de Pago</label>
                  <span className="text-xl font-bold text-cyan-primary">{term} meses</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="6"
                  value={term}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTerm(val);
                  }}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>12 meses</span>
                  <span>36 meses</span>
                  <span>60 meses</span>
                </div>
              </div>

              {/* Simulation Result */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Cuota Mensual Estimada</p>
                  <p className="text-xs text-slate-500">Tasa referencial sujeta a evaluación</p>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary via-cyan-light to-navy-primary">
                    S/. {Math.round(estimatedInstallment).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 text-xs text-slate-600 bg-cyan-primary/5 border border-cyan-primary/10 p-3.5 rounded-xl">
                <ShieldCheck className="text-cyan-primary flex-shrink-0" size={18} />
                <span>Nuestros préstamos cumplen con todas las regulaciones de la SBS y son firmados exclusivamente ante Notario Público.</span>
              </div>
            </Card>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-6">
            <Card theme="light" className="p-8 relative" hoverEffect={false}>
              
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-secondary mb-3">¡Solicitud Recibida!</h3>
                  <p className="text-slate-600 text-sm max-w-sm leading-relaxed mb-6 font-light">
                    Tu solicitud para un préstamo de <strong>S/. {amount.toLocaleString()}</strong> a <strong>{term} meses</strong> ha sido enviada con éxito. Un asesor se comunicará contigo en menos de 24 horas hábiles.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
                    Calcular Otra Vez
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
                  <h3 className="text-2xl font-bold text-navy-secondary mb-3">Algo salió mal</h3>
                  <p className="text-slate-600 text-sm max-w-sm leading-relaxed mb-6">
                    No pudimos procesar tu solicitud en este momento. Por favor verifica tu conexión e inténtalo de nuevo.
                  </p>
                  <Button variant="glow" size="sm" onClick={() => setStatus('idle')}>
                    Intentar de nuevo
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-left">
                  <h3 className="text-xl font-bold text-navy-secondary mb-1">Precalifica Ahora</h3>
                  <p className="text-xs text-slate-500 mb-2 leading-relaxed font-light">Ingresa tus datos de contacto para iniciar la precalificación con tu propiedad.</p>
                  
                  {/* Name Input */}
                  <Input
                    label="Nombre Completo*"
                    placeholder="Ej. Juan Pérez Ramos"
                    theme="light"
                    error={errors.name?.message}
                    {...register("name")}
                    className="mb-0"
                  />

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Teléfono*"
                      placeholder="Ej. 999888777"
                      type="tel"
                      theme="light"
                      error={errors.phone?.message}
                      {...register("phone")}
                      className="mb-0"
                    />
                    <Input
                      label="Correo Electrónico*"
                      placeholder="Ej. correo@dominio.com"
                      type="email"
                      theme="light"
                      error={errors.email?.message}
                      {...register("email")}
                      className="mb-0"
                    />
                  </div>

                  {/* Property Details */}
                  <Controller
                    name="propertyOwner"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="¿Cuentas con una propiedad a tu nombre?*"
                        options={[
                          { value: "", label: "Selecciona una opción" },
                          { value: "si", label: "Sí" },
                          { value: "no", label: "No" }
                        ]}
                        theme="light"
                        error={errors.propertyOwner?.message}
                        {...field}
                        className="mb-0"
                      />
                    )}
                  />

                  {/* Privacy Policy Checkbox */}
                  <div className="flex flex-col mt-1">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-cyan-primary focus:ring-cyan-primary/20 accent-cyan-primary cursor-pointer"
                        {...register("privacyPolicy")}
                      />
                      <span className="text-xs text-slate-600 font-medium">
                        Acepto la <a href="/privacidad" target="_blank" className="text-cyan-primary hover:underline font-semibold">Política de Privacidad</a>*
                      </span>
                    </label>
                    {errors.privacyPolicy?.message && (
                      <span className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.privacyPolicy.message}
                      </span>
                    )}
                  </div>

                  <Button
                    variant="glow"
                    type="submit"
                    size="lg"
                    isLoading={status === 'loading'}
                    className="w-full mt-2 cursor-pointer"
                  >
                    Cotizar Ahora
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>
      </Container>
    </section>
  );
};
