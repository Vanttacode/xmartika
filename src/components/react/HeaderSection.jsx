import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const HeaderSection = ({ whatsappNumber }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Soluciones', href: '#servicios' },
    { name: 'Clientes', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl group-hover:scale-105 transition-transform">X</div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Xmartika.</span>
        </a>

        {/* DESKTOP NAV (Estilizado mejor) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS (Sin Login, Texto actualizado) */}
        <div className="hidden md:flex items-center space-x-4">
          <WhatsAppButton 
             phoneNumber={whatsappNumber}
             message="Hola, me interesa agendar una hora para asesoría."
             className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:-translate-y-0.5"
          >
            Agendar Hora
          </WhatsAppButton>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none bg-slate-50 rounded-lg border border-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-slate-100">
                <WhatsAppButton 
                   phoneNumber={whatsappNumber}
                   message="Hola, me interesa agendar una hora."
                   className="w-full flex items-center justify-center px-4 py-4 text-base font-bold text-white bg-teal-500 hover:bg-teal-600 rounded-xl shadow-md transition-colors"
                >
                  Agendar Hora
                </WhatsAppButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};