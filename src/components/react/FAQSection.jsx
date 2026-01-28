import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
// Importamos el botón maestro
import { WhatsAppButton } from './WhatsAppButton';

// Aceptamos la prop whatsappNumber por si quieres pasarle el dato dinámico
export const FAQSection = ({ whatsappNumber }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo garantizan el cumplimiento con la DGII?",
      answer: "Es nuestra prioridad #1. Automatizamos la generación y envío de los formatos 606, 607, IT-1 e IR-17. Nuestro sistema valida cada NCF (Comprobante Fiscal) antes de que sea declarado, reduciendo el riesgo de inconsistencias a cero."
    },
    {
      question: "¿Xmartika sustituye a mi contador actual o trabaja con él?",
      answer: "Depende de tu etapa. Para startups en etapa temprana, podemos ser tu departamento fiscal completo. Si ya tienes un equipo interno, actuamos como 'Auditores Tecnológicos', implementando herramientas de BI y control sin interferir en su operación diaria."
    },
    {
      question: "¿Qué pasa si tengo la contabilidad atrasada de meses anteriores?",
      answer: "Es el escenario más común. Realizamos un 'Levantamiento Fiscal' inicial para identificar brechas en la DGII y TSS. Nuestro equipo reconstruye tu historia financiera digitalmente para ponerte al día en tiempo récord."
    },
    {
      question: "¿Se integran con los bancos locales (Popular, BHD, Reservas)?",
      answer: "Sí. Implementamos conciliación bancaria automática. Ya no tendrás que esperar al extracto en papel a fin de mes; verás tus flujos de caja reflejados en el dashboard casi en tiempo real."
    },
    {
      question: "¿Qué diferencia hay entre 'Ingeniería Contable' y un contador tradicional?",
      answer: "El contador tradicional registra el pasado. Nosotros diseñamos el futuro. Usamos Código y Datos para estructurar tus costos, predecir flujos y optimizar tu carga impositiva legalmente antes de que ocurran los hechos."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-20 right-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
         <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 mb-4 text-teal-600">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dudas frecuentes antes de empezar
          </h2>
          <p className="text-lg text-slate-600">
            Resolvemos las inquietudes más comunes de los fundadores y gerentes en RD.
          </p>
        </div>

        {/* Acordeón */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeIndex === index 
                  ? 'bg-white border-teal-200 shadow-lg shadow-teal-900/5' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold transition-colors ${
                    activeIndex === index ? 'text-teal-700' : 'text-slate-800'
                }`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 p-1 rounded-full border transition-all duration-300 ${
                    activeIndex === index 
                        ? 'bg-teal-50 border-teal-200 text-teal-600 rotate-180' 
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* --- AQUÍ ESTÁ EL CAMBIO IMPORTANTE --- */}
        {/* Footer del FAQ Destacado (High Impact Card) */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center shadow-2xl shadow-slate-900/10 max-w-4xl mx-auto"
          >
            {/* Decoración de fondo (Glow effects) */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Tienes una situación fiscal compleja?
              </h3>
              <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Auditorías abiertas, multas pendientes o desorden de años anteriores. No dejes que el problema crezca, nuestros expertos pueden manejar casos críticos.
              </p>
              
              <WhatsAppButton 
                phoneNumber={whatsappNumber}
                message="Hola Xmartika, tengo una situación fiscal compleja (multas/auditoría) y necesito ayuda experta."
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-teal-400 rounded-xl hover:bg-teal-300 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.3)] group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Hablemos con un Experto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};