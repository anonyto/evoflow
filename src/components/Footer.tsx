import { EvoFlowLogo } from "./EvoFlowLogo";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext"; 
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-brand-neutral-900 text-brand-neutral-300 py-16">
      <div className="container-max px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <EvoFlowLogo size="lg" theme="dark" />
            </div>

            <p className="text-brand-neutral-400 mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">
              {t.footer.services.title}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.services.automation}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.services.chatbots}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.services.scraping}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.services.content}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">
              {t.footer.company.title}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.company.contact}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.company.blog}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-6">
              {t.footer.legal.title}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.legal.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-neutral-400 text-sm">
            © {t.footer.copyright}
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-brand-neutral-400 hover:text-white text-sm transition-colors"
            >
              {t.footer.legal.privacy}
            </a>

            <a
              href="#"
              className="text-brand-neutral-400 hover:text-white text-sm transition-colors"
            >
              {t.footer.legal.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
