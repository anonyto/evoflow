import { EvoFlowLogo } from "./EvoFlowLogo";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";
import { Facebook, Twitter, Linkedin, Github, ArrowRight, Mail, MapPin, Zap } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const services = [
  { label: t.footer.services.cybersec,     href: "/services/cyber-security" },
  { label: t.footer.services.digitalTrans, href: "/services/digital-transformation" },
  { label: t.footer.services.automation,   href: "/services/ai-automation" },
  { label: t.footer.services.cloud,        href: "/services/devops-cloud" },
  { label: t.footer.services.it,           href: "/services/it-strategy-infrastructure" },
  { label: t.footer.services.scraping,     href: "/services/web-scraping" },
];

  const company = [
    { label: t.footer.company.about, href: "#about" },
    { label: t.footer.company.services, href: "#services" },
    { label: t.footer.company.advantages, href: "#advantages" },
    { label: t.footer.company.faq, href: "#faq" },
    { label: t.footer.company.contact, href: "#contact" },
  ];

  const socials = [
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-brand-neutral-900 text-brand-neutral-300 overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary-500 to-transparent opacity-60" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative border-b border-brand-neutral-800">
        <div className="container-max px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary-600/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-brand-primary-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg leading-tight">{t.cta.title}</p>
              <p className="text-brand-neutral-400 text-sm">{t.cta.subtitle}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-brand-primary-600 hover:bg-brand-primary-500 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-brand-primary-600/25 flex-shrink-0 group"
          >
            {t.cta.button}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="relative container-max px-4 pt-14 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-14">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4">
            <div className="mb-5">
              <EvoFlowLogo size="lg" theme="dark" />
            </div>

            <p className="text-brand-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t.footer.tagline}
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-7">
              <a href="mailto:hello@evobit.io" className="flex items-center gap-3 text-sm text-brand-neutral-400 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-brand-neutral-800 flex items-center justify-center group-hover:bg-brand-primary-600/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-neutral-400 group-hover:text-brand-primary-400 transition-colors" />
                </span>
                contact@evobit.ca
              </a>
              <div className="flex items-center gap-3 text-sm text-brand-neutral-400">
                <span className="w-8 h-8 rounded-lg bg-brand-neutral-800 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-neutral-400" />
                </span>
                Canada
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-brand-neutral-800 border border-brand-neutral-700/50 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 hover:border-brand-primary-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Services */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              {t.footer.services.title}
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm text-brand-neutral-400 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              {t.footer.company.title}
            </h4>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm text-brand-neutral-400 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              {t.footer.newsletter}
            </h4>
            <p className="text-brand-neutral-400 text-sm leading-relaxed mb-4">
              {t.footer.newsletterDesc}
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-neutral-700 bg-brand-neutral-800 text-white placeholder:text-brand-neutral-500 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent focus:outline-none text-sm transition-all"
              />
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-primary-600 hover:bg-brand-primary-500 text-white rounded-xl text-sm font-medium transition-all duration-200 group">
                {t.footer.subscribe}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-neutral-500 text-xs">{t.footer.copyright}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-brand-neutral-500 hover:text-white text-xs transition-colors">
              {t.footer.legal.privacy}
            </a>
            <span className="text-brand-neutral-700 text-xs">·</span>
            <a href="#" className="text-brand-neutral-500 hover:text-white text-xs transition-colors">
              {t.footer.legal.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}