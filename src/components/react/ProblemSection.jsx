import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, SearchX, Clock } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Contabilidad Atrasada",
      description: "Meses esperando balances que nunca llegan. Tomar decisiones hoy con números de hace 60 días es conducir a ciegas."
    },
    {
      icon: <SearchX className="w-8 h-8 text-red-500" />,
      title: "Ceguera Financiera",
      description: "¿Sabes cuál es tu margen real? Sin BI ni reportes claros, tu startup no es un negocio, es una apuesta arriesgada."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      title: "Riesgo Fiscal Latente",
      description: "La DGII no perdona errores. La gestión manual y las planillas de cálculo son una invitación a multas y auditorías."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Tu startup crece rápido, <br className="hidden md:block"/>
            <span className="text-slate-500">pero tu administración se quedó atrás</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            El sistema tradicional de contadores no está diseñado para la velocidad que exige la tecnología hoy.
          </motion.p>
        </div>

        {/* Grid Responsivo: 1 col en movil (por defecto), 3 cols en desktop (md:grid-cols-3) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};