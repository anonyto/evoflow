import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface Errors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const st = t.sectionTags;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    if (!formRef.current) return false;
    const data = new FormData(formRef.current);
    const name = data.get("from_name")?.toString().trim();
    const email = data.get("from_email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    const company = data.get("company")?.toString().trim();

    const newErrors: Errors = {};
    if (!name) newErrors.name = t.contact.errors.nameRequired;
    if (!email) newErrors.email = t.contact.errors.emailRequired;
    if (!company) newErrors.company = t.contact.errors.companyRequired;
    if (!message) newErrors.message = t.contact.errors.messageRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.warning(t.contact.toaster.validationTitle, {
        description: t.contact.toaster.validationDescription,
      });
      return;
    }
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success(t.contact.toaster.successTitle, {
          description: t.contact.toaster.successDescription,
        });
        formRef.current?.reset();
        setErrors({});
      })
      .catch(() => {
        toast.error(t.contact.toaster.errorTitle, {
          description: t.contact.toaster.errorDescription,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-brand-neutral-900"
    >
      <div className="container-max px-4">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-brand-primary-600 dark:bg-brand-neutral-800 dark:text-brand-primary-400 text-sm font-medium mb-4 border border-brand-primary-200 dark:border-brand-primary-800">
            {st.contact}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-neutral-600 dark:text-brand-neutral-300 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 scroll-animate"
          >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                    <XCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder={t.contact.emailPlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                    <XCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.contact.companyLabel}
              </label>
              <input
                type="text"
                name="company"
                placeholder={t.contact.companyPlaceholder}
                className={`w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 ${
                  errors.company ? "border-red-500" : ""
                }`}
              />
              {errors.company && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                    <XCircle className="w-4 h-4" />
                    {errors.company}
                  </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.contact.descriptionLabel}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={t.contact.descriptionPlaceholder}
                className={`w-full px-4 py-3 rounded-xl border border-brand-neutral-300 dark:border-brand-neutral-600 bg-white dark:bg-brand-neutral-800 text-brand-neutral-800 dark:text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                  <XCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-xl bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-12 px-8 disabled:opacity-60"
            >
              {loading ? t.contact.sending : t.contact.submit}
              {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}