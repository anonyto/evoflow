import { translations } from "../i18n/translations"; 
import { useLanguage } from "../context/LanguageContext"; 
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-brand-neutral-900"
    >
      <div className="container-max px-4">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-neutral-800 dark:bg-brand-neutral-800 bg-blue-50 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
            {st.contact}
          </span>
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
              />
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
  );
}
