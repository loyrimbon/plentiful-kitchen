import React from 'react';

// 1. Définition de l'interface pour les propriétés
interface LogoSouadProps {
  src: string;
  alt: string;
  size?: string; // Le "?" signifie que la propriété est optionnelle
}

// 2. Application du type au composant
function LogoSouad({ src, alt, size = '150px' }: LogoSouadProps) {
  const imageStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return <img src={src} alt={alt} style={imageStyle} />;
}

export default LogoSouad;
