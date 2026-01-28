import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const CTASection = ({ whatsappNumber }) => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Efectos de Fondo (Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          ¿Tu contabilidad resiste una <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            auditoría de la DGII?
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          No esperes a la notificación fiscal. Agenda un diagnóstico gratuito de 30 minutos y descubre cómo optimizar tus impuestos y automatizar tus finanzas.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Botón Principal: Agendar */}
          <WhatsAppButton 
            phoneNumber={whatsappNumber}
            message="Hola, quiero agendar mi diagnóstico gratuito de DGII."
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-900 bg-teal-400 rounded-xl hover:bg-teal-300 transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transform hover:-translate-y-1"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Agendar Diagnóstico Gratis
          </WhatsAppButton>

          {/* Botón Secundario: Duda Rápida */}
          <WhatsAppButton 
            phoneNumber={whatsappNumber}
            message="Hola, tengo una duda rápida sobre mi contabilidad."
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all hover:-translate-y-1"
          >
            Solo tengo una duda rápida
            <MessageCircle className="ml-2 w-5 h-5 text-slate-400" />
          </WhatsAppButton>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Cupos limitados para startups en RD. Sin compromiso.
        </motion.p>

      </div>
    </section>
  );
};