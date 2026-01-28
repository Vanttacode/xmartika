import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  // Testimonios improvisados pero realistas para el contexto RD
  const testimonials = [
    {
      quote: "Antes perdíamos 3 días al mes cuadrando el 606 y 607. Con Xmartika todo se sincroniza automático con nuestro banco. Ahora dormimos tranquilos con la DGII.",
      author: "Carlos M.",
      role: "CEO en TechDominicana",
      initials: "CM",
      color: "bg-blue-100 text-blue-600"
    },
    {
      quote: "Necesitábamos reportes financieros claros para presentar a inversionistas ángeles. El dashboard de BI que nos implementaron fue clave para cerrar nuestra ronda.",
      author: "Ana Luisa R.",
      role: "Founder de MercadoFresh",
      initials: "AR",
      color: "bg-teal-100 text-teal-600"
    },
    {
      quote: "No es solo contabilidad, es estrategia. Nos ayudaron a estructurar los costos de nuestro SaaS para no pagar impuestos de más legalmente. Servicio 10/10.",
      author: "David S.",
      role: "CTO en PagosRápidos",
      initials: "DS",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Lo que dicen los fundadores
          </motion.h2>
          <p className="text-lg text-slate-600">
            Startups en Santo Domingo y Santiago que ya escalan con nuestras finanzas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              {/* Icono de Cita */}
              <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity text-teal-500">
                <Quote size={40} className="fill-current" />
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar con Iniciales (Sin fotos) */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.color}`}>
                  {item.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};