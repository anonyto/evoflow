import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getServices } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function ServiceSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const currentServices = getServices(language as "en" | "fr");

  return (
    <section id="services" className="section-padding bg-brand-neutral-50 dark:bg-brand-neutral-800">
      <div className="container-max px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-animate"
        >

          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-neutral-800 dark:bg-brand-neutral-800 bg-blue-50 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
            {t.sectionTags.services}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {currentServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`scroll-animate stagger-${index + 1}`}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="bg-white dark:bg-brand-neutral-900 rounded-2xl p-6 md:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 h-full hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 flex flex-col cursor-pointer group"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 bg-brand-primary-100 dark:bg-brand-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="w-6 h-6 text-brand-primary-600 dark:text-brand-primary-400"/>
                  </div>


                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 text-brand-neutral-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-neutral-500 dark:text-brand-neutral-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <ul className="space-y-2 mb-6">
                    {service.subServices.slice(0, 3).map((sub) => (
                      <li
                        key={sub.title}
                        className="flex items-center gap-2 text-sm text-brand-neutral-500 dark:text-brand-neutral-400"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-brand-primary-600 dark:bg-brand-neutral-600 opacity-60`}
                        />
                        {sub.title}
                      </li>
                    ))}
                    {service.subServices.length > 3 && (
                      <li className="text-sm text-brand-neutral-400 pl-3.5">
                        +{service.subServices.length - 3} more
                      </li>
                    )}
                  </ul>

                  {/* Learn More */}
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-brand-primary-600 dark:text-brand-primary-400 group-hover:gap-3 transition-all mt-auto`}
                  >
                    {t.services.moreDetails}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
