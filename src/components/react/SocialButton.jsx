import React from 'react';

export const SocialButton = ({ href, className, children, ariaLabel }) => {
  // LÓGICA INTERNA:
  // Verificamos si existe href y si no es una cadena vacía
  const hasLink = href && href.trim() !== "";
  
  // Si hay link, usamos ese. Si no, usamos "#" para que el botón no se rompa visualmente.
  const finalLink = hasLink ? href : "#";
  
  // Si es un link real, abrimos en pestaña nueva (_blank).
  // Si es "#", abrimos en la misma (_self) para no molestar.
  const target = hasLink ? "_blank" : "_self";

  return (
    <a 
      href={finalLink}
      target={target}
      rel="noopener noreferrer"
      className={className} 
      aria-label={ariaLabel}
      onClick={(e) => {
        // Si no hay link, evitamos que el navegador salte al inicio de la página (#)
        if (!hasLink) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
};