import React from 'react';
import { motion } from 'framer-motion';

export const PartnersSection = () => {
  // Estos son los placeholders. Cuando el cliente te pase los logos reales 
  // (ej: Empresas de Santo Domingo, Startups locales), solo reemplazas los archivos en /public
  const partners = [
    { name: "Partner 1", logo: "/partner-logo-1.svg" },
    { name: "Partner 2", logo: "/partner-logo-2.svg" },
    { name: "Partner 3", logo: "/partner-logo-3.svg" },
    { name: "Partner 4", logo: "/partner-logo-4.svg" },
    { name: "Partner 5", logo: "/partner-logo-5.svg" },
    { name: "Partner 6", logo: "/partner-logo-6.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Título pequeño y centrado */}
        <div className="text-center mb-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-slate-500 uppercase tracking-widest"
          >
            Startups y empresas que confían en Xmartika
          </motion.p>
        </div>
        
        {/* Grid de Logos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-80"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative w-full flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-10 w-auto opacity-40 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};