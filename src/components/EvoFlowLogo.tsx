import React from 'react';
import logoLight from '../assets/logo_LightMood.png';
import logoDark from '../assets/logo_DarkMood.png';

interface EvoFlowLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
}

export const EvoFlowLogo: React.FC<EvoFlowLogoProps> = ({ 
  className = '', 
  size = 'md',
  theme = 'light'
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
    xl: 'h-12',
  };

  // Use light logo on dark backgrounds, dark logo on light backgrounds
  const logoSrc = theme === 'dark' ? logoDark : logoLight;

  return (
    <img 
      src={logoSrc} 
      alt="Evoflow" 
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );
};

export default EvoFlowLogo;
