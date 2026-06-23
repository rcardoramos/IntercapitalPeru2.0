import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../shared/Container';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  // const currentYear = new Date().getFullYear();
  const location = useLocation();

  const companyLinks = [
    { name: "Sobre Nosotros", href: "/" },
    { name: "Invierte con Nosotros", href: "/invierte" },
    { name: "Blog de Finanzas", href: "/#blog", isHash: true },
    { name: "Trabaja con Nosotros (Careers)", href: "/careers" }
  ];

  const legalLinks = [
    { name: "Términos y Condiciones", href: "#" },
    { name: "Políticas de Privacidad", href: "#" },
    { name: "Transparencia Financiera", href: "#" },
    { name: "Mapa de Sitio", href: "#" }
  ];

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(href.split('#')[1]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy-secondary/90 border-t border-white/5 pt-16 pb-8 text-gray-light relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-cyan-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img
                src="/img/Logo ICP Blanco.png"
                alt="Intercapital Perú"
                className="h-11 w-auto"
              />
            </Link>

            
            <p className="text-sm leading-relaxed text-gray-light">
              Especialistas en préstamos con garantía hipotecaria. Conectamos capital para impulsar el desarrollo de empresas y personas en todo el territorio nacional.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaWhatsapp, href: "https://wa.me/51908942105", label: "WhatsApp" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-primary/30 text-gray-light hover:text-cyan-primary flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links: Empresa */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">
              Empresa
            </h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.isHash ? (
                    <Link
                      to={link.href}
                      onClick={(e) => handleHashLink(e, link.href)}
                      className="text-sm hover:text-cyan-primary transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-primary text-[10px]">
                        →
                      </span>
                    </Link>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm hover:text-cyan-primary transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-primary text-[10px]">
                        →
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-cyan-primary transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-primary text-[10px]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-primary flex-shrink-0 mt-0.5" />
                <span>Calle Juan del Carpio 195, San Isidro, Lima</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-primary flex-shrink-0" />
                <span>+51 908 942 105</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-primary flex-shrink-0" />
                <a href="mailto:contactanos@intercapitalperu.com" className="hover:text-cyan-primary transition-colors">
                  contactanos@intercapitalperu.com
                </a>
              </li>
            </ul>

            {/* Libro de Reclamaciones Badge */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYjL_zaxPwxNXT3Dx3QB8-bNSgAiqBc82goK23KiA9Kmp75A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-gold/40 text-gray-light hover:text-gold transition-all duration-300 w-full group mt-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/img/ICP-EMPRESA-PNG.png"
                  alt="Libro de Reclamaciones"
                  className="h-7 w-auto object-contain brightness-90 filter group-hover:brightness-100 transition-all"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-gold transition-colors">
                    Libro de
                  </span>
                  <span className="text-[10px] text-gray-neutral group-hover:text-gold/90 transition-colors">
                    Reclamaciones Virtual
                  </span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-gray-neutral group-hover:text-gold transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center gap-4 text-xs text-gray-neutral font-medium text-center">
          {/* <p>© {currentYear} INTERCAPITAL PERU E.I.R.L RUC 20612766780. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Regulado bajo normas del marco legal peruano</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Sistemas de Seguridad Activos
            </span>
          </div> */}
          <p>
            Desarrollado por Ricardo Ramos Julca - Instituto Cibertec - Curso: EXPERIENCIA FORMATIVA EN SITUACIÓN REAL DE TRABAJO
          </p>
        </div>
      </Container>
    </footer>
  );
};
