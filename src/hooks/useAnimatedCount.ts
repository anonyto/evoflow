import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCountProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const useAnimatedCount = ({
  end,
  duration = 2000,
  start = 0,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0
}: UseAnimatedCountProps) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const difference = end - start;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = start + (difference * easeOutQuart);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, start, duration, delay]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${prefix}${(num / 1000000).toFixed(decimals)}M${suffix}`;
    } else if (num >= 1000) {
      return `${prefix}${(num / 1000).toFixed(decimals)}K${suffix}`;
    }
    return `${prefix}${num.toFixed(decimals)}${suffix}`;
  };

  return {
    count: formatNumber(count),
    elementRef,
    isVisible
  };
};