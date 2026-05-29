import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { InviertePage } from './pages/InviertePage';
import { CareersPage } from './pages/CareersPage';
import { PrivacidadPage } from './pages/PrivacidadPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { Footer } from './components/layout/Footer';

// UI Components
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Select } from './components/ui/Select';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import './App.css';

// Modal Quote validation schema
const modalQuoteSchema = z.object({
  name: z.string().min(3, { message: "Nombre es obligatorio (mínimo 3 letras)" }),
  phone: z.string().regex(/^9\d{8}$/, { message: "Celular peruano inválido (debe tener 9 dígitos y empezar con 9)" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  propertyOwner: z.enum(["si", "no"], { message: "Debe seleccionar si cuenta con propiedad" }),
  privacyPolicy: z.boolean().refine(val => val === true, { message: "Debe aceptar la política de privacidad" }),
});

type ModalQuoteValues = z.infer<typeof modalQuoteSchema>;

// Scroll To Top on navigation helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Add slight timeout to wait for components to render
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

interface AppContentProps {
  handleOpenQuoteModal: () => void;
}

function AppContent({ handleOpenQuoteModal }: AppContentProps) {
  return (
    <>
      <ScrollToTop />
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Router */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invierte" element={<InviertePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // React Hook Form for Quote Modal
  const {
    register: registerQuote,
    handleSubmit: handleSubmitQuote,
    control: controlQuote,
    formState: { errors: errorsQuote },
    reset: resetQuote
  } = useForm<ModalQuoteValues>({
    resolver: zodResolver(modalQuoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyOwner: "" as any,
      privacyPolicy: false,
    }
  });

  const onQuoteSubmit = async (data: ModalQuoteValues) => {
    setQuoteStatus('loading');
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
        setQuoteStatus('success');
        resetQuote();
      } else {
        console.error("Forminit submission error:", error);
        setQuoteStatus('error');
      }
    } catch (e) {
      console.error("Error submitting to Forminit:", e);
      setQuoteStatus('error');
    }
  };

  const handleOpenQuoteModal = () => {
    setQuoteStatus('idle');
    setIsQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-navy-deep text-white">
        <AppContent handleOpenQuoteModal={handleOpenQuoteModal} />

        {/* Global Quote Modal */}
        <Modal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          theme="light"
          className="max-w-2xl !p-8 md:!p-10"
        >
          {quoteStatus === 'success' ? (
            <div className="py-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 text-green-600 flex items-center justify-center mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-navy-secondary mb-3">Precalificación en Proceso</h4>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-6 font-light">
                Tus datos han sido registrados exitosamente. Uno de nuestros asesores especializados te llamará en las próximas 24 horas para guiarte en el proceso.
              </p>
              <Button variant="outline" size="sm" onClick={() => setIsQuoteModalOpen(false)}>
                Entendido
              </Button>
            </div>
          ) : quoteStatus === 'error' ? (
            <div className="py-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 border border-red-200 text-red-600 flex items-center justify-center mb-6">
                <AlertTriangle size={36} />
              </div>
              <h4 className="text-2xl font-bold text-navy-secondary mb-3">Error de Envío</h4>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-6 font-light">
                Hubo un problema al procesar tu precalificación. Por favor, intenta enviarlo nuevamente.
              </p>
              <Button variant="glow" size="sm" onClick={() => setQuoteStatus('idle')}>
                Reintentar
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmitQuote(onQuoteSubmit)} className="flex flex-col gap-5 text-left">
              <div>
                <h3 className="text-xl font-bold text-navy-secondary mb-1">Precalifica Ahora</h3>
                <p className="text-xs text-slate-500 mb-2 leading-relaxed font-light">Ingresa tus datos de contacto para iniciar la precalificación con tu propiedad.</p>
              </div>

              {/* Name Input - Full Width */}
              <Input
                label="Nombre Completo*"
                placeholder="Ej. Juan Pérez Ramos"
                theme="light"
                error={errorsQuote.name?.message}
                {...registerQuote("name")}
                className="mb-0"
              />

              {/* Phone & Email Grid - 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Teléfono*"
                  placeholder="Ej. 999888777"
                  type="tel"
                  theme="light"
                  error={errorsQuote.phone?.message}
                  {...registerQuote("phone")}
                  className="mb-0"
                />
                <Input
                  label="Correo Electrónico*"
                  placeholder="Ej. correo@dominio.com"
                  type="email"
                  theme="light"
                  error={errorsQuote.email?.message}
                  {...registerQuote("email")}
                  className="mb-0"
                />
              </div>

              {/* Property Details - Full Width */}
              <Controller
                name="propertyOwner"
                control={controlQuote}
                render={({ field }) => (
                  <Select
                    label="¿Cuentas con una propiedad a tu nombre?*"
                    options={[
                      { value: "", label: "Selecciona una opción" },
                      { value: "si", label: "Sí" },
                      { value: "no", label: "No" }
                    ]}
                    theme="light"
                    error={errorsQuote.propertyOwner?.message}
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
                    {...registerQuote("privacyPolicy")}
                  />
                  <span className="text-xs text-slate-600 font-medium">
                    Acepto la <a href="/privacidad" target="_blank" className="text-cyan-primary hover:underline font-semibold">Política de Privacidad</a>*
                  </span>
                </label>
                {errorsQuote.privacyPolicy?.message && (
                  <span className="text-red-500 text-xs mt-1.5 font-medium">
                    {errorsQuote.privacyPolicy.message}
                  </span>
                )}
              </div>

              <Button
                variant="glow"
                type="submit"
                size="lg"
                isLoading={quoteStatus === 'loading'}
                className="w-full mt-2 cursor-pointer"
              >
                Cotizar Ahora
              </Button>
            </form>
          )}
        </Modal>
      </div>
    </BrowserRouter>
  );
}

export default App;
