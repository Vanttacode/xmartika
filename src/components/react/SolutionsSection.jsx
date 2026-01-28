import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Cpu, ShieldCheck, Smartphone, ArrowUpRight } from 'lucide-react';

export const SolutionsSection = () => {
  const services = [
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "BI Financiero",
      description: "Transformamos números fríos en dashboards interactivos. Visualiza tu flujo de caja y rentabilidad en tiempo real para decidir, no para adivinar."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Automatización Contable",
      description: "Conectamos tu banco y facturación electrónica vía API. Eliminamos la digitación manual para reducir errores humanos a cero."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Control Fiscal Inteligente",
      description: "Auditoría preventiva continua. Detectamos inconsistencias ante el SII antes de que se conviertan en multas o problemas legales."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Ecosistema Digital",
      description: "Implementación de apps contables modernas. Tu contabilidad disponible 24/7 en tu bolsillo, sin carpetas físicas ni papeleo."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-semibold tracking-wider uppercase text-sm"
          >
            Nuestras Soluciones
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4"
          >
            Ingeniería aplicada a tus finanzas
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Dejamos atrás la contabilidad de "ingreso de datos" para enfocarnos en la estrategia y la tecnología.
          </p>
        </div>

        {/* Grid 2x2 Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};