import { useTheme } from "../context/ThemeContext"; 
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext"; 
import { integrationLogos, integrationBrandColors } from "./IntegrationLogos";


export default function IntegrationsSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  const { theme } = useTheme(); 
  

  return (
    <section id="integrations" className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-neutral-800 dark:bg-brand-neutral-800 bg-blue-50 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
            {st.integrations}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
            {t.integrations.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
            {t.integrations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {t.integrations.tools.map((tool, index) => {
            const LogoComponent = integrationLogos[tool];
            const brandColor = integrationBrandColors[tool] || "#6366f1";

            return (
              <div
                key={index}
                className={`group flex flex-col items-center gap-3 bg-white dark:bg-brand-neutral-900 rounded-2xl px-4 py-6 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-lg hover:border-brand-primary-300 dark:hover:border-brand-primary-600 hover:-translate-y-1 transition-all duration-300 scroll-animate-scale stagger-${(index % 8) + 1}`}
              >
                {LogoComponent && (
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${brandColor}15` }}
                  >
                    <LogoComponent
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300"
                      style={{
                        color: theme === "dark" ? "#ffffff" : brandColor,
                      } as React.CSSProperties}
                    />
                  </div>
                )}
                <span className="text-sm font-semibold text-brand-neutral-700 dark:text-brand-neutral-200 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors duration-300">
                  {tool}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
