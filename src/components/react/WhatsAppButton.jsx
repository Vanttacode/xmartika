import React from 'react';

export const WhatsAppButton = ({ 
  className, 
  children, 
  message, 
  phoneNumber, // <--- NUEVA PROP: Recibe el número desde la base de datos
  ...props 
}) => {
  
  // Si por alguna razón la BD falla, usamos este de respaldo
  const FALLBACK_NUMBER = "18295550000"; 
  
  const targetNumber = phoneNumber || FALLBACK_NUMBER;
  
  // Mensaje por defecto
  const defaultMessage = "Hola Xmartika, vi su web y me interesa conocer más sobre sus servicios.";
  
  const finalMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${targetNumber}?text=${finalMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};