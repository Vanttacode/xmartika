import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const HowItWorksSection = ({ whatsappNumber }) => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Fiscal",
      description: "Revisamos tu estatus en la DGII y TSS. Identificamos brechas, multas latentes y oportunidades de ahorro inmediato.",
      icon: <FileSearch className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "02",
      title: "Puesta al Día",
      description: "Sincronizamos tus bancos y reconstruimos tu contabilidad atrasada. Implementamos Odoo o Quickbooks para automatizar.",
      icon: <Settings className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      number: "03",
      title: "Control Total",
      description: "Recibes reportes financieros mensuales y nosotros nos encargamos de todos los impuestos (606, 607, IT-1).",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Tu contabilidad al día en 3 pasos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Sin papeleo innecesario y con total transparencia.
          </motion.p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Línea conectora (Solo desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.5 }}
               className="h-full bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400"
             />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group z-10"
            >
              {/* Badge del Número/Icono */}
              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm transition-transform group-hover:scale-110 ${step.color}`}>
                {step.icon}
              </div>
              
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-slate-50 rounded-full text-xs font-bold text-slate-500 mb-3 border border-slate-100">
                  PASO {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Flecha móvil (Solo visible en celular entre pasos) */}
              {index < steps.length - 1 && (
                 <div className="md:hidden flex justify-center mt-6 text-slate-300">
                   <ArrowRight className="rotate-90" />
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Intermedio */}
        <div className="mt-16 text-center">
          <WhatsAppButton 
             phoneNumber={whatsappNumber}
             message="Hola, me gustaría iniciar el Paso 1: Diagnóstico Fiscal."
             className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group"
          >
             Iniciar con el Paso 1
             <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
};