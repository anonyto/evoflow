import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterOptions {
  duration?: number;
  delay?: number;
}

export function useAnimatedCounter(
  endValue: number,
  options: UseAnimatedCounterOptions = {}
): number {
  const { duration = 2000, delay = 0 } = options;
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const progress = Math.min(
          (timestamp - startTimeRef.current) / duration,
          1
        );

        // Ease out cubic for smooth deceleration
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        countRef.current = Math.floor(easeOutCubic * endValue);
        setCount(countRef.current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(startAnimation, delay);
    return () => clearTimeout(timeoutId);
  }, [endValue, duration, delay]);

  return count;
}

interface AnimatedCounterProps {
  value: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  delay = 0,
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  // Extract number and suffix (e.g., "50+" -> 50, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const numericValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  
  const animatedValue = useAnimatedCounter(numericValue, { duration, delay });

  return (
    <span className={className}>
      {animatedValue}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
