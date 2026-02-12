import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; 
import { translations } from "../i18n/translations";
import { projectImages } from "../data/projectImages"; 

export default function ProjectsSection() { 
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section id="our-projects" className="section-padding bg-white dark:bg-brand-neutral-900">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
            {t.ourProjects.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
            {t.ourProjects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.ourProjects.projects.map((project, index) => {
            const CardWrapper: any = project.link ? "a" : "div"; // dynamic element type
            const cardProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className={`bg-white dark:bg-brand-neutral-800 rounded-2xl p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary-300 dark:hover:border-brand-primary-600 transition-all duration-300 group scroll-animate stagger-${(index % 4) + 1} ${project.link ? "cursor-pointer" : ""} flex flex-col h-full`}
              >
                {/* Project Image */}
                <div className="relative w-full h-40 rounded-xl mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={projectImages[project.name]} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Name */}
                <h3 className="text-lg font-bold text-brand-neutral-800 dark:text-white mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Category */}
                <div className="mt-auto">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-primary-600 dark:text-brand-primary-400 bg-brand-primary-50 dark:bg-brand-primary-900/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Visit Link Indicator */}
                {project.link && (
                  <div className="mt-4 pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-700">
                    <span className="text-sm font-medium text-brand-primary-600 dark:text-brand-primary-400 group-hover:underline flex items-center gap-1">
                      {language === "fr" ? "Visiter le site" : "Visit website"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
