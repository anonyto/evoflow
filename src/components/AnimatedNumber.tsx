import React from 'react';
import { useAnimatedCount } from '../hooks/useAnimatedCount';

interface AnimatedNumberProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  delay = 0,
  className = ''
}) => {
  const { count, elementRef } = useAnimatedCount({
    end,
    duration,
    delay,
    suffix,
    prefix,
    decimals
  });

  return (
    <span ref={elementRef} className={className}>
      {count}
    </span>
  );
};