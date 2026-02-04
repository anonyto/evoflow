import { useEffect, useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, ArrowUp, ArrowDown,
  Home, BarChart3, ShoppingCart, Settings, Bell, Search, MoreVertical,
  Download, Filter
} from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber';
import { EvoFlowLogo } from './EvoFlowLogo';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend: number;
  delay?: number;
}

const StatCard = ({ icon, label, value, prefix = '', suffix = '', trend, delay = 0 }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white dark:bg-brand-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-brand-neutral-700/50 transition-all duration-500 hover:shadow-lg hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="p-2.5 bg-gradient-to-br from-brand-primary-500 to-brand-primary-600 rounded-lg shadow-sm">
          <div className="text-white">{icon}</div>
        </div>
        <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
          trend >= 0 
            ? 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30' 
            : 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
        }`}>
          {trend >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
          {Math.abs(trend)}%
        </div>
      </div>
      <div className="text-2xl font-semibold text-brand-neutral-900 dark:text-white mb-1">
        <AnimatedNumber end={value} prefix={prefix} suffix={suffix} decimals={suffix === '%' ? 1 : 0} />
      </div>
      <div className="text-xs text-brand-neutral-600 dark:text-brand-neutral-400 font-medium">{label}</div>
    </div>
  );
};

const LineChart = ({ delay = 0 }: { delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const data = [
    { month: 'Jan', value: 45000, target: 40000 },
    { month: 'Feb', value: 52000, target: 45000 },
    { month: 'Mar', value: 48000, target: 47000 },
    { month: 'Apr', value: 65000, target: 50000 },
    { month: 'May', value: 58000, target: 55000 },
    { month: 'Jun', value: 72000, target: 60000 },
    { month: 'Jul', value: 68000, target: 65000 },
    { month: 'Aug', value: 85000, target: 70000 },
    { month: 'Sep', value: 80000, target: 75000 },
    { month: 'Oct', value: 95000, target: 80000 },
    { month: 'Nov', value: 88000, target: 85000 },
    { month: 'Dec', value: 100000, target: 90000 },
  ];

  const maxValue = Math.max(...data.map(d => Math.max(d.value, d.target)));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-white dark:bg-brand-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-brand-neutral-700/50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-medium text-brand-neutral-900 dark:text-white">Revenue Overview</h3>
          <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400 mt-1">Monthly performance vs target</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-brand-neutral-700 rounded-lg transition-colors">
            <Filter className="w-4 h-4 text-brand-neutral-600 dark:text-brand-neutral-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-brand-neutral-700 rounded-lg transition-colors">
            <Download className="w-4 h-4 text-brand-neutral-600 dark:text-brand-neutral-400" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-primary-500 to-brand-primary-600"></div>
          <span className="text-xs text-brand-neutral-600 dark:text-brand-neutral-400">Actual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-neutral-300 dark:bg-brand-neutral-600"></div>
          <span className="text-xs text-brand-neutral-600 dark:text-brand-neutral-400">Target</span>
        </div>
      </div>

      <div className="relative h-48">
        <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 50}
              x2="800"
              y2={i * 50}
              stroke="currentColor"
              className="text-gray-200 dark:text-brand-neutral-700"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
          
          {/* Target line (dashed) */}
          <polyline
            points={data.map((d, i) => `${(i * 800) / (data.length - 1)},${200 - (d.target / maxValue) * 200}`).join(' ')}
            fill="none"
            stroke="currentColor"
            className="text-brand-neutral-400 dark:text-brand-neutral-600"
            strokeWidth="2"
            strokeDasharray="5,5"
            style={{
              strokeDashoffset: isVisible ? 0 : 1000,
              transition: 'stroke-dashoffset 2s ease-out',
            }}
          />
          
          {/* Actual revenue line with gradient */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Area under the line */}
          <path
            d={`M 0,200 ${data.map((d, i) => `L ${(i * 800) / (data.length - 1)},${200 - (d.value / maxValue) * 200}`).join(' ')} L 800,200 Z`}
            fill="url(#areaGradient)"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-out',
            }}
          />
          
          {/* Main line */}
          <polyline
            points={data.map((d, i) => `${(i * 800) / (data.length - 1)},${200 - (d.value / maxValue) * 200}`).join(' ')}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: isVisible ? 0 : 1000,
              transition: 'stroke-dashoffset 2s ease-out',
            }}
          />
          
          {/* Data points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={(i * 800) / (data.length - 1)}
              cy={200 - (d.value / maxValue) * 200}
              r="4"
              fill="white"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.5s ease-out ${i * 100}ms`,
              }}
            />
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 px-1">
          {data.map((d, i) => (
            <span key={i} className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
              {d.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const DonutChart = ({ delay = 0 }: { delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const data = [
    { label: 'Products', value: 45, color: 'rgb(59, 130, 246)' },
    { label: 'Services', value: 30, color: 'rgb(147, 51, 234)' },
    { label: 'Consulting', value: 15, color: 'rgb(236, 72, 153)' },
    { label: 'Other', value: 10, color: 'rgb(168, 85, 247)' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const createArc = (startAngle: number, endAngle: number, radius: number) => {
    const start = polarToCartesian(100, 100, radius, endAngle);
    const end = polarToCartesian(100, 100, radius, startAngle);
    const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}`;
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <div className={`bg-white dark:bg-brand-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-brand-neutral-700/50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-medium text-brand-neutral-900 dark:text-white">Revenue Sources</h3>
          <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400 mt-1">Distribution by category</p>
        </div>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-brand-neutral-700 rounded-lg transition-colors">
          <MoreVertical className="w-4 h-4 text-brand-neutral-600 dark:text-brand-neutral-400" />
        </button>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {data.map((item, index) => {
              const angle = (item.value / total) * 360;
              const arc = createArc(currentAngle, currentAngle + angle, 80);
              const arcElement = (
                <path
                  key={index}
                  d={arc}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="30"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: isVisible ? '1000' : '0 1000',
                    strokeDashoffset: 0,
                    transition: `stroke-dasharray 1s ease-out ${index * 200}ms`,
                  }}
                />
              );
              currentAngle += angle;
              return arcElement;
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-semibold text-brand-neutral-900 dark:text-white">
              <AnimatedNumber end={total} suffix="%" />
            </div>
            <div className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">Total</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div 
            key={index}
            className="flex items-center justify-between transition-all duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
              transitionDelay: `${delay + index * 100}ms`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-brand-neutral-700 dark:text-brand-neutral-300">{item.label}</span>
            </div>
            <span className="text-sm font-semibold text-brand-neutral-900 dark:text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AnimatedDashboard() {
  const [mounted, setMounted] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { name: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Sales', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Customers', icon: <Users className="w-5 h-5" /> },
    { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Dashboard Container with Sidebar - 16:9 Aspect Ratio */}
      <div className={`relative w-full bg-gradient-to-br from-gray-50/95 to-gray-100/95 dark:from-brand-neutral-900/95 dark:to-brand-neutral-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-brand-neutral-700/50 overflow-hidden transition-all duration-700 ${
        mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`} style={{ aspectRatio: '16/9' }}>
        
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-20 lg:w-64 bg-white/50 dark:bg-brand-neutral-800/50 backdrop-blur-xl border-r border-gray-200/50 dark:border-brand-neutral-700/50 p-4 lg:p-6 flex flex-col h-full">
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center">
              <EvoFlowLogo size="md" theme="light" />
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveNav(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeNav === item.name
                      ? 'bg-gradient-to-r from-brand-primary-500 to-brand-primary-600 text-white shadow-lg shadow-brand-primary-500/30'
                      : 'text-brand-neutral-600 dark:text-brand-neutral-400 hover:bg-gray-100 dark:hover:bg-brand-neutral-700/50'
                  }`}
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.icon}
                  <span className="font-medium hidden lg:block">{item.name}</span>
                </button>
              ))}
            </nav>

            {/* User Profile */}
            <div className="pt-4 border-t border-gray-200 dark:border-brand-neutral-700">
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-brand-neutral-700/50 cursor-pointer transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  IC
                </div>
                <div className="hidden lg:block flex-1">
                  <div className="text-sm font-medium text-brand-neutral-900 dark:text-white">Islem Charaf Eddine</div>
                  <div className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">Admin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6 h-full flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-lg lg:text-xl font-semibold text-brand-neutral-900 dark:text-white mb-1">
                  Welcome back, Islem! 👋
                </h1>
                <p className="text-xs text-brand-neutral-600 dark:text-brand-neutral-400">
                  Here's what's happening with your business today
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden lg:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-brand-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-brand-neutral-700 bg-white dark:bg-brand-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
                  />
                </div>
                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-brand-neutral-700 transition-colors">
                  <Bell className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </button>
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-brand-neutral-800 rounded-lg border border-gray-200 dark:border-brand-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-brand-neutral-600 dark:text-brand-neutral-400">Live</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <StatCard
                icon={<DollarSign className="w-5 h-5" />}
                label="Total Revenue"
                value={2847500}
                prefix="$"
                trend={12.3}
                delay={100}
              />
              <StatCard
                icon={<Users className="w-5 h-5" />}
                label="Total Customers"
                value={1247}
                trend={15}
                delay={200}
              />
              <StatCard
                icon={<ShoppingCart className="w-5 h-5" />}
                label="Total Orders"
                value={924}
                trend={8.2}
                delay={300}
              />
              <StatCard
                icon={<TrendingUp className="w-5 h-5" />}
                label="Growth Rate"
                value={24.5}
                suffix="%"
                trend={21}
                delay={400}
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <LineChart delay={500} />
              </div>
              <div>
                <DonutChart delay={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
