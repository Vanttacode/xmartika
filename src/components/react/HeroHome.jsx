import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, CheckCircle2, FileText, Wallet } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

// AHORA RECIBE EL NÚMERO COMO PROP
export const HeroHome = ({ whatsappNumber }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-teal-50/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-slate-100/80 rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copywriting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Ingeniería Contable & BI
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Control Financiero <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-slate-600">
                Inteligente y Escalable
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Olvídate de la contabilidad tradicional. Transformamos tus datos en inteligencia de negocios, automatización y seguridad fiscal (DGII) para startups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* LE PASAMOS EL NÚMERO AL BOTÓN */}
              <WhatsAppButton 
                phoneNumber={whatsappNumber} // <--- AQUÍ ESTÁ LA MAGIA
                message="Hola Xmartika, me interesa agendar un diagnóstico gratuito para mi empresa."
                className="inline-flex justify-center items-center px-6 py-3.5 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 group cursor-pointer"
              >
                Agenda diagnóstico gratuito
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>

              <a 
                href="#servicios" 
                className="inline-flex justify-center items-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
              >
                Ver soluciones
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Potenciado por tecnología
              </p>
              <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-slate-600 font-bold flex items-center gap-2 text-sm"><BarChart3 className="w-4 h-4"/> PowerBI</span>
                <span className="text-slate-600 font-bold flex items-center gap-2 text-sm"><Wallet className="w-4 h-4"/> Odoo</span>
                <span className="text-slate-600 font-bold flex items-center gap-2 text-sm"><ShieldCheck className="w-4 h-4"/> DGII Expertos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: INTERFAZ CONTABLE */}
          <div className="relative hidden lg:block h-[500px] w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="absolute top-10 left-0 w-full max-w-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10"
            >
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50"></div>
                </div>
                <div className="text-xs font-medium text-slate-400">Panel Financiero</div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Flujo de Caja (Neto)</p>
                    <h3 className="text-3xl font-bold text-slate-900">RD$ 845,200</h3>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    +12.5% vs mes ant.
                  </span>
                </div>

                <div className="relative h-32 w-full">
                   <div className="absolute inset-0 flex flex-col justify-between">
                      <div className="border-t border-slate-100 w-full h-0"></div>
                      <div className="border-t border-slate-100 w-full h-0"></div>
                      <div className="border-t border-slate-100 w-full h-0"></div>
                   </div>
                   <svg viewBox="0 0 400 100" className="w-full h-full visible overflow-visible">
                      <motion.path
                        d="M0,80 C50,80 50,40 100,50 C150,60 150,90 200,70 C250,50 250,10 300,30 C350,50 350,0 400,10"
                        fill="none"
                        stroke="#0D9488" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                      />
                      <path 
                        d="M0,80 C50,80 50,40 100,50 C150,60 150,90 200,70 C250,50 250,10 300,30 C350,50 350,0 400,10 V100 H0 Z" 
                        className="fill-teal-50 opacity-50"
                      />
                   </svg>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-0 right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-4 max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Estado DGII</p>
                <p className="text-sm font-bold text-slate-900">Al día (Solvente)</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-16 -left-8 bg-slate-900 p-4 rounded-xl shadow-2xl shadow-slate-900/20 z-30 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Automatización</p>
                <p className="text-sm font-bold text-white">606 & IT-1 Listos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};