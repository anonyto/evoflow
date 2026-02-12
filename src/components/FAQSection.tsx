import { useState } from "react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext"; 
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="container-max px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-brand-primary-600 dark:bg-brand-neutral-800 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
            {st.faq}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-neutral-600 dark:text-brand-neutral-300 max-w-2xl mx-auto">
            {language === "fr"
              ? "Tout ce que vous devez savoir pour démarrer"
              : "Everything you need to know to get started"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 scroll-animate">
          {t.faq.items.map((item, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div
                key={index}
                className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white dark:bg-brand-neutral-900 border-brand-primary-300 dark:border-brand-primary-600 shadow-lg shadow-brand-primary-500/5 dark:shadow-brand-primary-500/10"
                    : "bg-white dark:bg-brand-neutral-900 border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-neutral-300 dark:hover:border-brand-neutral-600 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaqIndex(isOpen ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center gap-4 text-left transition-colors duration-200"
                >
                  {/* Number badge */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-primary-600 text-white"
                        : "bg-brand-neutral-100 dark:bg-brand-neutral-800 text-brand-neutral-500 dark:text-brand-neutral-400 group-hover:bg-brand-primary-100 dark:group-hover:bg-brand-primary-900/30 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 font-semibold transition-colors duration-200 ${
                      isOpen
                        ? "text-brand-primary-600 dark:text-brand-primary-400"
                        : "text-brand-neutral-800 dark:text-white group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400"
                    }`}
                  >
                    {item.q}
                  </span>

                  {/* Toggle icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-primary-600 text-white"
                        : "bg-brand-neutral-100 dark:bg-brand-neutral-800 text-brand-neutral-500 group-hover:bg-brand-primary-100 dark:group-hover:bg-brand-primary-900/30 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pl-[4.5rem]">
                      <div className="h-px bg-gradient-to-r from-brand-primary-500/30 via-brand-primary-500/10 to-transparent mb-4"></div>
                      <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-brand-neutral-500 dark:text-brand-neutral-400 mb-4">
            {language === "fr"
              ? "Vous avez d'autres questions ?"
              : "Still have questions?"}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary-500/25 group"
          >
            {language === "fr" ? "Contactez-nous" : "Contact us"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
