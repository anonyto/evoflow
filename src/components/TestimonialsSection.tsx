import { Star, MapPin, Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; 
import { translations } from "../i18n/translations";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-emerald-500 to-teal-400",
    "from-orange-500 to-amber-400",
  ];

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-brand-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary-500/5 dark:bg-brand-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-neutral-600 dark:text-brand-neutral-300 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto scroll-animate">
          {t.testimonials.items.map((item, index) => {
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={index}
                className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 group relative"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-brand-primary-200 dark:text-brand-primary-800 absolute top-6 right-6 sm:top-8 sm:right-8" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-brand-neutral-700 dark:text-brand-neutral-200 leading-relaxed mb-6 text-sm sm:text-base">
                  "{item.quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-700">
                  {/* Avatar with initials */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index % 4]} flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <span className="text-white font-bold text-sm">{initials}</span>
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold text-brand-neutral-800 dark:text-white text-sm sm:text-base truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-neutral-500 dark:text-brand-neutral-400 truncate">
                      {item.role} — {item.company}
                    </p>
                    <p className="text-xs text-brand-neutral-400 dark:text-brand-neutral-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
