import { useState } from "react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const allItems = t.faq.items;
  const mid = Math.ceil(allItems.length / 2);
  const leftColumn = allItems.slice(0, mid);
  const rightColumn = allItems.slice(mid);

  const renderItem = (item: { q: string; a: string }, globalIndex: number) => {
    const isOpen = openFaqIndex === globalIndex;
    return (
      <div
        key={globalIndex}
        className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
          isOpen
            ? "bg-white dark:bg-brand-neutral-900 border-brand-primary-300 dark:border-brand-primary-600 shadow-lg shadow-brand-primary-500/5 dark:shadow-brand-primary-500/10"
            : "bg-white dark:bg-brand-neutral-900 border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-neutral-300 dark:hover:border-brand-neutral-600 hover:shadow-md"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpenFaqIndex(isOpen ? null : globalIndex)}
          className="w-full px-5 py-4 min-h-[4.5rem] flex items-center gap-3 text-left transition-colors duration-200"
        >
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              isOpen
                ? "bg-brand-primary-600 text-white"
                : "bg-brand-neutral-100 dark:bg-brand-neutral-800 text-brand-neutral-500 dark:text-brand-neutral-400 group-hover:bg-brand-primary-100 dark:group-hover:bg-brand-primary-900/30 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400"
            }`}
          >
            {String(globalIndex + 1).padStart(2, "0")}
          </span>

          <span
            className={`flex-1 font-semibold text-sm sm:text-base transition-colors duration-200 ${
              isOpen
                ? "text-brand-primary-600 dark:text-brand-primary-400"
                : "text-brand-neutral-800 dark:text-white group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400"
            }`}
          >
            {item.q}
          </span>

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

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-4 pl-16">
              <div className="h-px bg-gradient-to-r from-brand-primary-500/30 via-brand-primary-500/10 to-transparent mb-3"></div>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed text-sm">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            {t.faq.subtitle}
          </p>
        </div>

        {/* 2-column layout — independent columns so expanding one item doesn't affect the other */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-start scroll-animate">
          <div className="space-y-4">
            {allItems
              .slice(0, mid)
              .map((item, index) => renderItem(item, index))}
          </div>
          <div className="space-y-4">
            {allItems
              .slice(mid)
              .map((item, index) => renderItem(item, mid + index))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-brand-neutral-500 dark:text-brand-neutral-400 mb-4">
            {t.faq.stillHaveQuestions}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary-500/25 group"
          >
            {t.faq.contactUs}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
