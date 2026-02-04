import React from 'react';
import { useAnimatedCount } from '../hooks/useAnimatedCount';
import { LucideIcon } from 'lucide-react';

interface AnimatedStatProps {
  number: string;
  label: string;
  icon: LucideIcon;
  actualNumber: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  number,
  label,
  icon: Icon,
  actualNumber,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2000,
  delay = 0
}) => {
  const { count, elementRef } = useAnimatedCount({
    end: actualNumber,
    duration,
    delay,
    suffix,
    prefix,
    decimals
  });

  return (
    <div ref={elementRef} className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-neutral-100 dark:bg-brand-neutral-800 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-neutral-200 dark:border-brand-neutral-700">
        <Icon className="w-8 h-8 text-brand-neutral-700 dark:text-brand-neutral-300" />
      </div>
      <div className="text-4xl font-display font-bold text-brand-neutral-900 dark:text-white mb-2">
        {count}
      </div>
      <div className="text-brand-neutral-600 dark:text-brand-neutral-300 font-medium">
        {label}
      </div>
    </div>
  );
};