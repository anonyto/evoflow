import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { ArrowRight, Clock, Play, TrendingUp, Users2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

   const stats = [
    { 
      number: "50+", 
      label: t.hero.stats.clients, 
      icon: Users2, 
    },
    { 
      number: "10,000+", 
      label: t.hero.stats.hours, 
      icon: Clock, 
    },
    { 
      number: "300%", 
      label: t.hero.stats.roi, 
      icon: TrendingUp, 
    },
  ];

  return (
    <>
    {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-brand-neutral-900">
        {/* Simple animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-400/15 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-800"></div>
        </div>


        <div className="container-max relative z-10 flex flex-col items-center text-center px-4">

          {/* Main Headline - One Line */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-neutral-800 dark:text-white mb-6 px-4 animate-fade-in animation-delay-200 text-balance">
            {t.hero.title}{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                {t.hero.titleHighlight}
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-lg animate-pulse-slow"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed max-w-3xl mb-12 px-4 animate-fade-in animation-delay-400">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4 animate-fade-in animation-delay-600">
            <button className="inline-flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-11 sm:h-12 px-6 sm:px-8 shadow-sm hover:shadow-md group">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-2 border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-700 text-brand-neutral-800 dark:text-white h-11 sm:h-12 px-6 sm:px-8 group">
              <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              {t.hero.ctaSecondary}
            </button>
          </div>

          {/* Stats with enhanced animations */}
          <div className="flex justify-center items-start gap-8 sm:gap-16 md:gap-24 animate-fade-in animation-delay-800 w-full max-w-3xl">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center group cursor-pointer stagger-${index + 1} flex-1`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div className="relative flex flex-col items-center p-4 sm:p-6 rounded-2xl transition-all duration-500 hover:bg-brand-primary-50/50 dark:hover:bg-brand-primary-900/20 hover:scale-110 hover:-translate-y-2">
                  {/* Animated icon */}
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-brand-primary-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                    <stat.icon className="relative w-6 h-6 sm:w-8 sm:h-8 text-brand-primary-600 group-hover:text-brand-primary-500 transition-colors duration-300 group-hover:animate-bounce-subtle" />
                  </div>
                  
                  {/* Number with animated counter */}
                  <AnimatedCounter 
                    value={stat.number} 
                    delay={800 + index * 300}
                    duration={2000}
                    className="text-2xl sm:text-4xl font-bold text-brand-neutral-800 dark:text-white transition-all duration-300 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 group-hover:scale-110"
                  />
                  
                  {/* Label */}
                  <p className="text-xs sm:text-sm text-brand-neutral-600 dark:text-brand-neutral-400 mt-1 transition-colors duration-300 group-hover:text-brand-neutral-800 dark:group-hover:text-white">
                    {stat.label}
                  </p>
                  
                  {/* Decorative underline */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* White Gradient Fade at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20">
          <div className="w-full h-full bg-gradient-to-t from-white via-white/95 to-transparent dark:from-brand-neutral-900 dark:via-brand-neutral-900/95 dark:to-transparent"></div>
        </div>
      </section>
    </>
  );
}
