import React from 'react';
import { motion } from 'framer-motion';

export const AuthoritySection = () => {
  const partners = [
    { name: "Power BI", logo: "/partner-logo-1.svg" },
    { name: "Excel", logo: "/partner-logo-2.svg" },
    { name: "Odoo", logo: "/partner-logo-3.svg" },
    { name: "QuickBooks", logo: "/partner-logo-4.svg" },
    { name: "DGII", logo: "/partner-logo-5.svg" },
    { name: "TSS", logo: "/partner-logo-6.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration (Very subtle grid) */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-2 block"
          >
            Stack Tecnológico & Experiencia
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900"
          >
            Integración nativa con tus herramientas
          </motion.h3>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative w-full flex justify-center items-center py-4"
            >
              {/* Tarjeta sutil que aparece al pasar el mouse (Hover Effect Pro) */}
              <div className="absolute inset-0 bg-slate-50 rounded-xl scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="relative h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-10"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};