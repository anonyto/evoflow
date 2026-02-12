import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

import {iconMap} from "../data/iconMap"; 
import { Building } from "lucide-react";

export default function InfoSections() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  return (
    <>
      {/* Who We Serve Section */}
      <section className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
        <div className="container-max px-4">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-brand-primary-600 dark:bg-brand-neutral-800 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
              {st.whoWeServe}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.whoWeServe.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
              {t.whoWeServe.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whoWeServe.audiences.map((audience, index) => {
              const IconComponent = iconMap[index] || Building;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-brand-neutral-900 rounded-xl p-6 group border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-lg hover:-translate-y-1 hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 cursor-pointer scroll-animate stagger-${
                    (index % 6) + 1
                  }`}
                >
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
    </>
  );
}
