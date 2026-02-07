import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import { EvoFlowLogo } from "./components/EvoFlowLogo";
import { AnimatedCounter } from "./components/AnimatedCounter";
import {
  ArrowRight,
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  TrendingUp,
  Play,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  CheckCircle,
  Clock,
  Users2,
  Target,
  Link,
  BarChart,
  FileText,
  Share2,
  Bot,
  MapPin,
  Workflow,
  ChevronDown,
  ChevronUp,
  Building,
  Rocket,
  Store,
  Briefcase,
  Code,
} from "lucide-react";
import { useState, useEffect } from "react";

// Project Images
import stockkeepImg from "./assets/stockkeep.jpg";
import gamesooqImg from "./assets/GameSooq.jpg";
import smartcityImg from "./assets/SmartCity.jpg";
import anonytoImg from "./assets/Anonyto.png";

// Project images mapping
const projectImages: { [key: string]: string } = {
  'Stockkeep': stockkeepImg,
  'GameSooQ': gamesooqImg,
  'SmartCity': smartcityImg,
  'Anonyto': anonytoImg,
};


function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  // Icon mapping for services
  const iconMap: { [key: string]: any } = {
    FileText,
    Share2,
    Globe,
    Bot,
    MapPin,
    Workflow,
    Clock,
    Link,
    CheckCircle,
    TrendingUp,
    BarChart,
    Target,
    Code,
    Smartphone,
  };

  // Icon mapping for audiences
  const audienceIcons = [Globe, Rocket, Building, Store, Briefcase, Code];

  // Scroll animation hook
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Animate elements on scroll
      const animateOnScroll = () => {
        const animationClasses = [
          '.scroll-animate',
          '.scroll-animate-left',
          '.scroll-animate-right',
          '.scroll-animate-scale',
          '.scroll-animate-fade'
        ];
        
        animationClasses.forEach(className => {
          const elements = document.querySelectorAll(className);
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight * 0.85) {
              element.classList.add('animate-in');
            }
          });
        });
      };
      
      animateOnScroll();
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-neutral-900 text-white" : "bg-white text-brand-neutral-800"
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === "dark" 
            ? "bg-brand-neutral-900/95 backdrop-blur-md border-b border-brand-neutral-800" 
            : "bg-white/95 backdrop-blur-md border-b border-brand-neutral-200"
          : "bg-transparent"
      }`}>
        <div className="container-max px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <EvoFlowLogo size="lg" theme={theme} />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.services}
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.howItWorks}
              </a>
              <a href="#why-automate" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.about}
              </a>
              <a href="#our-projects" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.projects}
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Dark Mode Toggle - Pill Style */}
              <button
                onClick={toggleTheme}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 ${
                  theme === "dark" 
                    ? "bg-brand-neutral-700" 
                    : "bg-brand-neutral-200"
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                  theme === "dark" 
                    ? "left-7 bg-brand-neutral-900" 
                    : "left-1 bg-white"
                }`}>
                  {theme === "light" ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-400" />
                  )}
                </div>
              </button>
              
              {/* Language Selector - Globe Icon */}
              <div className="relative group">
                <button
                  onClick={() => {
                    const options = document.getElementById('desktop-lang-options');
                    if (options) {
                      options.classList.toggle('hidden');
                    }
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-brand-neutral-800 text-white hover:bg-brand-neutral-700"
                      : "bg-brand-neutral-100 text-brand-neutral-700 hover:bg-brand-neutral-200"
                  } focus:outline-none focus:ring-2 focus:ring-brand-primary-500`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">{language.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`} />
                </button>
                <div
                  id="desktop-lang-options"
                  className={`hidden absolute top-full mt-2 right-0 rounded-xl shadow-xl border overflow-hidden min-w-[130px] z-50 backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-brand-neutral-800/95 border-brand-neutral-700"
                      : "bg-white/95 border-brand-neutral-200"
                  }`}
                >
                  <button
                    onClick={() => {
                      setLanguage("fr");
                      document.getElementById('desktop-lang-options')?.classList.add('hidden');
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      language === "fr"
                        ? "bg-brand-primary-600 text-white"
                        : theme === "dark"
                        ? "text-white hover:bg-brand-neutral-700"
                        : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                    }`}
                  >
                    <span>Français</span>
                    {language === "fr" && <CheckCircle className="w-4 h-4 ml-auto" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      document.getElementById('desktop-lang-options')?.classList.add('hidden');
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      language === "en"
                        ? "bg-brand-primary-600 text-white"
                        : theme === "dark"
                        ? "text-white hover:bg-brand-neutral-700"
                        : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                    }`}
                  >
                    <span>English</span>
                    {language === "en" && <CheckCircle className="w-4 h-4 ml-auto" />}
                  </button>
                </div>
              </div>

              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2">
                {t.nav.audit}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-neutral-900">
            <div className="container-max py-6 space-y-4 px-4">
              <a href="#services" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.services}
              </a>
              <a href="#how-it-works" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.howItWorks}
              </a>
              <a href="#why-automate" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.about}
              </a>
              <a href="#our-projects" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.projects}
              </a>
              <a href="#contact" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.contact}
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-800">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    theme === "dark" 
                      ? "bg-brand-neutral-800 hover:bg-brand-neutral-700 text-brand-secondary-400" 
                      : "bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-neutral-600"
                  }`}
                >
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
                <div className="relative">
                  <button
                    onClick={() => {
                      const options = document.getElementById('mobile-lang-options');
                      if (options) {
                        options.classList.toggle('hidden');
                      }
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-brand-neutral-800 text-white hover:bg-brand-neutral-700"
                        : "bg-brand-neutral-100 text-brand-neutral-700 hover:bg-brand-neutral-200"
                    } focus:outline-none focus:ring-2 focus:ring-brand-primary-500`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="font-semibold">{language.toUpperCase()}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    id="mobile-lang-options"
                    className={`hidden absolute top-full mt-2 right-0 rounded-xl shadow-xl border overflow-hidden min-w-[130px] z-50 ${
                      theme === "dark"
                        ? "bg-brand-neutral-800 border-brand-neutral-700"
                        : "bg-white border-brand-neutral-200"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setLanguage("fr");
                        document.getElementById('mobile-lang-options')?.classList.add('hidden');
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors ${
                        language === "fr"
                          ? "bg-brand-primary-600 text-white"
                          : theme === "dark"
                          ? "text-white hover:bg-brand-neutral-700"
                          : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                      }`}
                    >
                      <span>Français</span>
                      {language === "fr" && <CheckCircle className="w-4 h-4 ml-auto" />}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        document.getElementById('mobile-lang-options')?.classList.add('hidden');
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors ${
                        language === "en"
                          ? "bg-brand-primary-600 text-white"
                          : theme === "dark"
                          ? "text-white hover:bg-brand-neutral-700"
                          : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                      }`}
                    >
                      <span>English</span>
                      {language === "en" && <CheckCircle className="w-4 h-4 ml-auto" />}
                    </button>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2 flex-1">
                  {t.nav.audit}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

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

      {/* Services Section */}
      <section id="services" className="section-padding bg-white dark:bg-brand-neutral-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
        </div>

        <div className="container-max px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 title-spacing text-balance">
              {t.services.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {t.services.items.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FileText;
              return (
                <div key={index} className={`bg-white dark:bg-brand-neutral-800 rounded-xl p-6 sm:p-8 group cursor-pointer border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-lg transition-all duration-300 scroll-animate stagger-${(index % 6) + 1}`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-primary-100 dark:bg-brand-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary-600 dark:text-brand-primary-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-neutral-800 dark:text-white mb-3 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2">
              {t.services.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.howItWorks.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className={`scroll-animate stagger-${index + 1}`}>
                <div className="bg-white dark:bg-brand-neutral-900 rounded-2xl p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 h-full">
                  <div className="text-5xl font-bold text-brand-primary-600/20 dark:text-brand-primary-400/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-neutral-800 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-11 px-8 group">
              {t.howItWorks.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Automate Section */}
      <section id="why-automate" className="section-padding bg-white dark:bg-brand-neutral-900">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.whyAutomate.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto mb-4 px-4">
              {t.whyAutomate.subtitle}
            </p>
            <p className="text-base text-brand-neutral-500 dark:text-brand-neutral-400 max-w-2xl mx-auto px-4">
              {t.whyAutomate.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.whyAutomate.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || CheckCircle;
              return (
                <div key={index} className={`bg-white dark:bg-brand-neutral-800 rounded-xl p-8 group border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-300 scroll-animate stagger-${(index % 6) + 1}`}>
                  <div className="w-12 h-12 bg-brand-primary-100 dark:bg-brand-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-brand-primary-600 dark:text-brand-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-neutral-800 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-11 px-8 group">
              {t.whyAutomate.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.whoWeServe.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
              {t.whoWeServe.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whoWeServe.audiences.map((audience, index) => {
              const IconComponent = audienceIcons[index] || Building;
              return (
                <div key={index} className={`bg-white dark:bg-brand-neutral-900 rounded-xl p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-300 scroll-animate stagger-${(index % 6) + 1}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-primary-100 dark:bg-brand-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-brand-primary-600 dark:text-brand-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-neutral-800 dark:text-white mb-2">
                        {audience.title}
                      </h3>
                      <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="our-projects" className="section-padding bg-white dark:bg-brand-neutral-900">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.ourProjects.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
              {t.ourProjects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ourProjects.projects.map((project, index) => {
              const CardWrapper = project.link ? 'a' : 'div';
              const cardProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};
              
              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  className={`bg-white dark:bg-brand-neutral-800 rounded-2xl p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-xl hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 group scroll-animate stagger-${(index % 4) + 1} ${project.link ? 'cursor-pointer' : ''} flex flex-col h-full`}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-40 rounded-xl mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={projectImages[project.name]} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-lg font-bold text-brand-neutral-800 dark:text-white mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => {
                      // Color mapping for different technologies
                      const tagColors: { [key: string]: string } = {
                        'React': 'text-blue-500',
                        'Flutter': 'text-cyan-500',
                        'Django': 'text-green-600',
                        'Firebase': 'text-orange-500',
                        'Yolo': 'text-purple-500',
                        'FastAPI': 'text-teal-500',
                        'Chrome Extension': 'text-yellow-600',
                        'Privacy': 'text-pink-500',
                        'AI Protection': 'text-indigo-500',
                      };
                      const colorClass = tagColors[tag] || 'text-brand-primary-500';
                      
                      return (
                        <span
                          key={tagIndex}
                          className={`text-xs font-semibold ${colorClass}`}
                        >
                          #{tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Visit Link Indicator for linked projects */}
                  {project.link && (
                    <div className="mt-4 pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-700">
                      <span className="text-sm font-medium text-brand-primary-600 dark:text-brand-primary-400 group-hover:underline flex items-center gap-1">
                        {language === 'fr' ? 'Visiter le site' : 'Visit website'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  )}
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.integrations.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
              {t.integrations.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {t.integrations.tools.map((tool, index) => (
              <div key={index} className={`bg-brand-neutral-100 dark:bg-brand-neutral-800 rounded-xl px-6 py-3 text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 hover:bg-brand-primary-100 dark:hover:bg-brand-primary-900/30 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 transition-all duration-300 scroll-animate-scale stagger-${(index % 8) + 1}`}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.faq.title}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {t.faq.items.map((item, index) => (
              <div key={index} className={`bg-white dark:bg-brand-neutral-900 rounded-xl border border-brand-neutral-200 dark:border-brand-neutral-700 overflow-hidden scroll-animate stagger-${(index % 5) + 1}`}>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-brand-neutral-800 dark:text-white">{item.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-neutral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-neutral-500 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white dark:bg-brand-neutral-900">
        <div className="container-max px-4">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-brand-neutral-600 dark:text-brand-neutral-300 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 scroll-animate">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2">
                  {t.contact.companyLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.companyPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2">
                  {t.contact.descriptionLabel}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.contact.descriptionPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-12 px-8"
              >
                {t.contact.submit}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-brand-neutral-900 text-brand-neutral-300 py-16">
        <div className="container-max px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <EvoFlowLogo size="lg" theme="dark" />
              </div>
              <p className="text-brand-neutral-400 mb-6 leading-relaxed">
                {t.footer.tagline}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6">{t.footer.services.title}</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.services.automation}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.services.chatbots}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.services.scraping}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.services.content}</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-6">{t.footer.company.title}</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.company.about}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.company.contact}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.company.blog}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-6">{t.footer.legal.title}</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.legal.privacy}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.legal.terms}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-brand-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-neutral-400 text-sm">
              © {t.footer.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-brand-neutral-400 hover:text-white text-sm transition-colors">
                {t.footer.legal.privacy}
              </a>
              <a href="#" className="text-brand-neutral-400 hover:text-white text-sm transition-colors">
                {t.footer.legal.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}