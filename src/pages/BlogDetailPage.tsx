import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/shared/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { blogArticles } from '../data/mockData';
import { ArrowLeft, Calendar, Clock, ArrowUpRight, MessageCircle, AlertCircle } from 'lucide-react';

interface BlogDetailPageProps {
  onOpenQuoteModal: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { id } = useParams<{ id: string }>();
  const article = blogArticles.find(art => art.id === id);

  useEffect(() => {
    if (article) {
      // Update document title for SEO
      document.title = `${article.title} | Intercapital Perú`;

      // Update meta description for SEO
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', article.excerpt);
        document.head.appendChild(metaDescription);
      }
    }
    
    return () => {
      // Restore default values on cleanup
      document.title = "Intercapital Perú | Préstamos con Garantía Hipotecaria";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Obtén liquidez rápida y segura con préstamos con garantía hipotecaria a tu medida. Tasas competitivas, desembolso ágil y aprobación incluso en Infocorp.");
      }
    };
  }, [article]);

  if (!article) {
    return (
      <div className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-900 flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-navy-secondary mb-2">Artículo no encontrado</h1>
            <p className="text-slate-600 mb-6">El artículo de blog que buscas no existe o ha sido trasladado.</p>
            <Link to="/">
              <Button variant="primary">Volver al Inicio</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen text-slate-900">
      {/* Article Header Banner */}
      <div className="bg-navy-deep text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-primary/10 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-start">
            {/* Back Button */}
            <Link 
              to="/#blog" 
              className="inline-flex items-center gap-2 text-cyan-light hover:text-white transition-colors text-sm font-semibold mb-6 group"
            >
              <ArrowLeft size={16} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al Blog
            </Link>

            {/* Category Badge */}
            <span className="inline-block text-xs font-bold text-cyan-light bg-cyan-primary/20 px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-cyan-primary/30">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-light">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-cyan-primary" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-cyan-primary" />
                {article.readTime}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Article Content Layout */}
      <Container className="py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Main Article Column */}
          <div className="lg:col-span-8">
            <Card theme="light" hoverEffect={false} className="p-6 md:p-10 bg-white border border-slate-200/60 shadow-sm rounded-3xl overflow-hidden">
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden aspect-video mb-8 border border-slate-100 shadow-inner">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="object-cover w-full h-full"
                />
              </div>

              {/* HTML Content Body */}
              <article 
                className="prose prose-slate max-w-none prose-headings:text-navy-secondary prose-headings:font-bold prose-a:text-cyan-primary hover:prose-a:text-cyan-light prose-strong:text-navy-secondary"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </Card>
          </div>

          {/* Sidebar CTA Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="flex flex-col gap-6">
              
              {/* Main Conversion CTA Card */}
              <div className="bg-gradient-to-br from-navy-deep to-navy-secondary text-white p-8 rounded-3xl relative overflow-hidden shadow-xl border border-white/5">
                {/* Decorative glows */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-primary/20 rounded-full filter blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-gold/10 rounded-full filter blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="inline-block text-xs font-bold text-cyan-light bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Financiamiento Ágil
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">¿Buscas liquidez inmediata?</h3>
                  <p className="text-gray-light text-sm leading-relaxed mb-6">
                    Utiliza el valor de tu propiedad como garantía y obtén desde S/. 20,000 hasta S/. 1,000,000 con tasas competitivas y desembolso rápido.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="glow" 
                      onClick={onOpenQuoteModal} 
                      className="w-full py-3.5 text-sm"
                    >
                      Precalificar Ahora
                    </Button>
                    <a
                      href="https://wa.me/51908942105?text=Hola,%20leí%20su%20artículo%20sobre%20préstamos%20y%20quisiera%20más%20información."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all text-white font-bold rounded-xl text-sm shadow-md group cursor-pointer"
                    >
                      <MessageCircle size={18} />
                      <span>Hablar con un Asesor</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal Confidence Sidebar Info */}
              <div className="bg-white border border-slate-200 p-6 rounded-3xl text-left shadow-sm">
                <h4 className="text-sm font-bold text-navy-secondary uppercase tracking-wider mb-3">Seguridad Garantizada</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  En <strong>Intercapital Perú</strong>, todas nuestras operaciones de préstamos con garantía hipotecaria se formalizan bajo escritura pública ante Notaría y se inscriben en SUNARP para tu absoluta tranquilidad.
                </p>
                <div className="border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                  RUC: 20612766780 | INTERCAPITAL PERU E.I.R.L
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};
