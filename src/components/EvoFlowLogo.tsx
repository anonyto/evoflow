import React from 'react';
import { Zap } from 'lucide-react';

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
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  // Dark grey color that works on both light and dark backgrounds
  const flowColor = theme === 'dark' ? '#E5E7EB' : '#1F2937';

  return (
    <div className={`font-display font-bold tracking-tight flex items-center ${sizeClasses[size]} ${className}`}>
      <span style={{ color: '#2563EB' }}>Evo</span>
      <Zap className={`${iconSizes[size]} text-blue-500 fill-blue-500`} />
      <span style={{ color: flowColor }}>low</span>
    </div>
  );
};

export default EvoFlowLogo;
