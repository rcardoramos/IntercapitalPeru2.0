import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from '../shared/Container';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Monitor scroll for transition effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowSolidHeader = isScrolled || location.pathname !== '/';

  const navLinks = [
    { name: "Beneficios", href: "#beneficios", isHash: true },
    { name: "Proceso", href: "#proceso", isHash: true },
    { name: "Invierte con Nosotros", href: "/invierte", isHash: false },
    { name: "Blog", href: "#blog", isHash: true },
    { name: "Careers", href: "/careers", isHash: false },
    { name: "Preguntas Frecuentes", href: "#faq", isHash: true }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.isHash) {
      e.preventDefault();
      if (location.pathname === '/') {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + link.href);
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          shouldShowSolidHeader
            ? "py-3 bg-white/95 backdrop-blur-lg border-b border-slate-200/80 shadow-md"
            : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center group">
            <img
              src={shouldShowSolidHeader ? "/img/Logo ICP azul.png" : "/img/Logo ICP Blanco.png"}
              alt="Intercapital Perú"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>


          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.isHash 
                ? false 
                : location.pathname === link.href;

              return link.isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cyan-primary after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                    shouldShowSolidHeader ? "text-slate-700 hover:text-cyan-primary" : "text-gray-light hover:text-cyan-primary"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cyan-primary after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                    isActive 
                      ? "text-cyan-primary after:scale-x-100" 
                      : (shouldShowSolidHeader ? "text-slate-700 hover:text-cyan-primary" : "text-gray-light hover:text-cyan-primary")
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="glow"
              size="sm"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('cotiza')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#cotiza');
                }
              }}
              rightIcon={<ArrowRight size={14} />}
            >
              Cotizar préstamo
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-all cursor-pointer border",
              shouldShowSolidHeader
                ? "text-slate-700 hover:text-slate-900 bg-slate-100 border-slate-200/80 hover:border-cyan-primary/50"
                : "text-gray-light hover:text-white bg-white/5 border-white/5 hover:border-cyan-primary/30"
            )}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-x-0 top-[72px] z-30 lg:hidden py-6 px-4 shadow-xl border-b backdrop-blur-lg transition-all duration-300",
              shouldShowSolidHeader
                ? "bg-white/95 border-slate-200/80"
                : "glass border-white/10"
            )}
          >
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => {
                const isActive = link.isHash 
                  ? false 
                  : location.pathname === link.href;

                return link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={cn(
                      "text-base font-semibold py-2 transition-colors border-b",
                      shouldShowSolidHeader 
                        ? "text-slate-700 hover:text-cyan-primary border-slate-100" 
                        : "text-gray-light hover:text-cyan-primary border-white/5"
                    )}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-semibold py-2 transition-colors border-b block",
                      isActive
                        ? "text-cyan-primary"
                        : (shouldShowSolidHeader ? "text-slate-700 hover:text-cyan-primary border-slate-100" : "text-gray-light hover:text-cyan-primary border-white/5")
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3">
              <Button
                variant="glow"
                size="md"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname === '/') {
                    document.getElementById('cotiza')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#cotiza');
                  }
                }}
                rightIcon={<ArrowRight size={14} />}
              >
                Cotizar préstamo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
