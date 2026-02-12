import { ArrowRight, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; 
import { translations } from "../i18n/translations";
import { iconMap } from "../data/iconMap"; 

export default function ProjectsSection() { 
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <>
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
                <div
                  key={index}
                  className={`bg-white dark:bg-brand-neutral-800 rounded-xl p-6 sm:p-8 group cursor-pointer border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-lg transition-all duration-300 scroll-animate stagger-${(index % 6) + 1}`}
                >
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
    </>
  );
}
