import React, { useState, useEffect, useRef } from 'react';

interface ChartData {
  month: string;
  value: number;
}

interface AnimatedChartProps {
  data: ChartData[];
  height?: number;
  width?: number;
  color?: string;
  delay?: number;
}

export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  data,
  height = 80,
  width = 100,
  color = "#3B82F6",
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, value: 0 })));
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        const newData = data.map((d, index) => ({
          ...d,
          value: d.value * easeOutCubic
        }));
        
        setAnimatedData(newData);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, data, delay]);

  // Calculate SVG path
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const getPath = () => {
    const points = animatedData.map((d, index) => {
      const x = (index / (animatedData.length - 1)) * (width - 40) + 20;
      const y = height - 20 - ((d.value - minValue) / range) * (height - 40);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    return points.join(' ');
  };

  const getAreaPath = () => {
    const points = animatedData.map((d, index) => {
      const x = (index / (animatedData.length - 1)) * (width - 40) + 20;
      const y = height - 20 - ((d.value - minValue) / range) * (height - 40);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    
    // Close the area path
    const lastX = ((animatedData.length - 1) / (animatedData.length - 1)) * (width - 40) + 20;
    const bottomY = height - 20;
    return `${points.join(' ')} L ${lastX} ${bottomY} L 20 ${bottomY} Z`;
  };

  return (
    <div ref={chartRef} className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <svg width={width} height={height} className="overflow-visible">
        {/* Area fill */}
        <path
          d={getAreaPath()}
          fill={`url(#gradient-${color.replace('#', '')})`}
          opacity="0.2"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Line path */}
        <path
          d={getPath()}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-1000 ease-out"
        />
        
        {/* Data points */}
        {animatedData.map((d, index) => {
          const x = (index / (animatedData.length - 1)) * (width - 40) + 20;
          const y = height - 20 - ((d.value - minValue) / range) * (height - 40);
          
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              className="transition-all duration-1000 ease-out hover:r-4"
            />
          );
        })}
      </svg>
    </div>
  );
};