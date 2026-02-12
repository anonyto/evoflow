import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; 
import { translations } from "../i18n/translations";

export default function HowItWorksSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  return (
    <>
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-neutral-800 dark:bg-brand-neutral-800 bg-blue-50 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
              {st.howItWorks}
            </span>
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
                <div className="bg-white dark:bg-brand-neutral-900 rounded-2xl p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 h-full hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 group cursor-pointer">
                  <div className="text-5xl font-bold text-brand-primary-600/20 dark:text-white mb-4">
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
    </>
  );
}
