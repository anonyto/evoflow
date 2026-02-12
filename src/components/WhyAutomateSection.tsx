import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; 
import { translations } from "../i18n/translations";
import { iconMap } from "../data/iconMap"; 

export default function WhyAutomateSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  return (
    <section id="why-automate" className="section-padding bg-white dark:bg-brand-neutral-900">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-neutral-800 dark:bg-brand-neutral-800 bg-blue-50 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
            {st.benefits}
          </span>
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
              <div
                key={index}
                className={`bg-white dark:bg-brand-neutral-800 rounded-xl p-8 group border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-lg hover:-translate-y-1 hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 cursor-pointer scroll-animate stagger-${(index % 6) + 1}`}
              >
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
  );
}
