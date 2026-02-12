import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { getServiceBySlug, getServices } from "../data/services";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].serviceDetail;
  const service = getServiceBySlug(slug || "", language as "en" | "fr");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-fade');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach((el) => observer.observe(el));
    
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  if (!service) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-brand-neutral-900" : "bg-gray-50"}`}>
        <div className="text-center">
          <h1 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl font-bold mb-4`}>
            {t.notFound}
          </h1>
          <Link to="/" className="text-blue-600 hover:underline">
            {t.notFoundDescription}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  
  const allServices = getServices(language as "en" | "fr");
  const otherServices = allServices.filter((s) => s.id !== service.id);

  return (
    <div className={`${theme === "dark" ? "bg-brand-neutral-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen`}>

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="scroll-animate">
            <Link
              to="/"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"} inline-flex items-center gap-2 text-sm transition-colors mb-8 group`}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t.backToHome}
            </Link>

            <div className="flex items-start gap-5 mb-6">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 ${theme === "dark" ? "bg-brand-neutral-800" : "bg-blue-100"}`}>
                <Icon className={`w-7 h-7 md:w-8 md:h-8 ${theme === "dark" ? "text-white" : "text-blue-600"}`} />
              </div>
              <div>
                <h1 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`}>
                  {service.title}
                </h1>
                <p className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} text-lg md:text-xl mt-2 font-medium`}>
                  {service.tagline}
                </p>
              </div>
            </div>

            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg leading-relaxed max-w-3xl`}>
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="scroll-animate mb-12">
              <span className={`${theme === "dark" ? "bg-brand-neutral-800 text-blue-400" : "bg-blue-50 text-blue-600"} inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800`}>
              {t.ourSolutions}
            </span>
            <h2 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl md:text-3xl font-bold`}>{t.whatsIncluded}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, i) => {
              const SubIcon = sub.icon;
              return (
                <div
                  key={sub.title}
                  className={`scroll-animate stagger-${(i % 8) + 1} ${theme === "dark" ? "bg-brand-neutral-800 shadow-md" : "bg-white shadow-sm"} rounded-xl p-6 hover:shadow-md transition-shadow duration-300 group`}
                >
                  <div className={`${theme === "dark" ? "bg-brand-neutral-700" : "bg-blue-50"} w-11 h-11 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <SubIcon className={`${theme === "dark" ? "text-white" : "text-blue-600"} w-5 h-5`} />
                  </div>
                  <h3 className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-semibold text-lg mb-2`}>{sub.title}</h3>
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm leading-relaxed`}>{sub.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Features */}
            <div className="scroll-animate-left">
              <span className={`${theme === "dark" ? "bg-brand-neutral-800 text-blue-400" : "bg-blue-50 text-blue-600"} inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800`}>
                {t.keyCapabilities}
              </span>
              <h2 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl md:text-3xl font-bold mb-8`}>{t.beyondTheBasics}</h2>
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <div key={i} className={`${theme === "dark" ? "bg-brand-neutral-800 text-white shadow-md" : "bg-white text-gray-900 shadow-sm"} rounded-xl p-5 scroll-animate stagger-${(i % 8) + 1}`}>
                    <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm leading-relaxed`}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="scroll-animate-right">
              <span className={`${theme === "dark" ? "bg-brand-neutral-800 text-blue-400" : "bg-blue-50 text-blue-600"} inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800`}>
                {t.whyChooseUs}
              </span>
              <h2 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl md:text-3xl font-bold mb-8`}>{t.realResults}</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className={`${theme === "dark" ? "bg-brand-neutral-800 text-white shadow-md" : "bg-white text-gray-900 shadow-sm"} flex items-start gap-3 rounded-xl p-4 scroll-animate stagger-${(i % 8) + 1}`}
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
                    <span className="font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`scroll-animate ${theme === "dark" ? "bg-brand-neutral-800 text-white shadow-md" : "bg-white text-gray-900 shadow-md"} rounded-3xl p-8 md:p-12 text-center`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.readyToGetStarted}</h2>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} max-w-xl mx-auto mb-8`}>
              {t.transformYourBusiness.replace("{service}", service.title.toLowerCase())}
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl text-base font-semibold bg-blue-600 text-white hover:opacity-90 transition-all shadow-md group"
            >
              {t.getAFreeAudit}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl md:text-3xl font-bold mb-8 text-center scroll-animate`}>
            {t.exploreOtherServices}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {otherServices.map((other, i) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.id}
                  to={`/services/${other.slug}`}
                  className={`${theme === "dark" ? "bg-brand-neutral-800 text-white shadow-md" : "bg-white text-gray-900 shadow-sm"} flex items-start gap-4 p-6 rounded-2xl hover:shadow-md transition-shadow duration-300 group scroll-animate stagger-${(i % 8) + 1}`}
                >
                  <div className={`${theme === "dark" ? "bg-brand-neutral-700" : "bg-blue-50"} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <OtherIcon className={`${theme === "dark" ? "text-white" : "text-blue-600"} w-6 h-6`} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{other.title}</h3>
                    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm`}>{other.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
