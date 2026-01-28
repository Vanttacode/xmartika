import React from 'react';
import { Facebook, Instagram, MessageCircle, Lock } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { SocialButton } from './SocialButton';

// MIRA ACÁ: HACEMOS LO MISMO QUE EN EL HERO. RECIBIMOS LAS VARIABLES DIRECTAS.
export const FooterSection = ({ whatsappNumber, facebookUrl, instagramUrl }) => {
  
  // Si llegan vacíos, SocialButton se encarga de poner "#".
  // Pero aquí aseguramos que las variables existan.
  const waNum = whatsappNumber || "18295550000";

  const socialBtnClass = "w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 group hover:bg-slate-800 hover:scale-110 cursor-pointer";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-slate-900">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 justify-center md:justify-start">
               <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-slate-950 font-bold text-xl">X</div>
               Xmartika.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            
            {/* Facebook - Pasamos la variable directa igual que en el Hero */}
            <SocialButton 
              href={facebookUrl} 
              className={`${socialBtnClass} hover:text-white hover:border-teal-500`}
              ariaLabel="Facebook"
            >
              <Facebook size={18} className="transition-transform" />
            </SocialButton>

            {/* Instagram - Pasamos la variable directa */}
            <SocialButton 
              href={instagramUrl}
              className={`${socialBtnClass} hover:text-white hover:border-teal-500`}
              ariaLabel="Instagram"
            >
              <Instagram size={18} className="transition-transform" />
            </SocialButton>

            {/* WhatsApp - Igual que tu Hero */}
            <WhatsAppButton 
              phoneNumber={waNum}
              className={`${socialBtnClass} hover:text-white hover:border-teal-500`}
              message="Hola, vengo desde el footer."
              aria-label="WhatsApp"
            >
               <MessageCircle size={18} className="transition-transform" />
            </WhatsAppButton>

          </div>
        </div>
        
        {/* Resto del footer (Copyright, etc)... */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="font-medium">
             <span className="text-teal-500">© {currentYear} Xmartika.</span> República Dominicana.
          </div>
          <div className="flex items-center gap-1">
             Designed by <a href="https://vanttacode.cl" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 font-bold transition-colors">Vantta Code</a>
          </div>
          <div>
            <a href="/login" className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 text-slate-600 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 text-xs font-medium">
              <Lock size={12} /> Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};