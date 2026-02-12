import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { EvoFlowLogo } from "./EvoFlowLogo";
import { Menu, X, Sun, Moon, Globe, ChevronDown, CheckCircle } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === "dark" 
            ? "bg-brand-neutral-900/95 backdrop-blur-md border-b border-brand-neutral-800" 
            : "bg-white/95 backdrop-blur-md border-b border-brand-neutral-200"
          : "bg-transparent"
      }`}>
        <div className="container-max px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center" onClick={(e) => { 
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}>
              <EvoFlowLogo size="lg" theme={theme} />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" onClick={(e) => handleNavClick(e, "services")} className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.services}
              </a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, "how-it-works")} className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.howItWorks}
              </a>
              <a href="#why-automate" onClick={(e) => handleNavClick(e, "why-automate")} className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.advantages}
              </a>
              {/*<a href="#our-projects" className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.projects}
              </a>
              <a href="#testimonials" className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.testimonials}
              </a>*/}
              <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.faq}
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={`text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.contact}
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 ${
                  theme === "dark" 
                    ? "bg-brand-neutral-700" 
                    : "bg-brand-neutral-200"
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                  theme === "dark" 
                    ? "left-7 bg-brand-neutral-900" 
                    : "left-1 bg-white"
                }`}>
                  {theme === "light" ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-400" />
                  )}
                </div>
              </button>
              
              {/* Language Selector - Globe Icon */}
              <div className="relative group">
                <button
                  onClick={() => {
                    const options = document.getElementById('desktop-lang-options');
                    if (options) {
                      options.classList.toggle('hidden');
                    }
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-brand-neutral-800 text-white hover:bg-brand-neutral-700"
                      : "bg-brand-neutral-100 text-brand-neutral-700 hover:bg-brand-neutral-200"
                  } focus:outline-none focus:ring-2 focus:ring-brand-primary-500`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">{language.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`} />
                </button>
                <div
                  id="desktop-lang-options"
                  className={`hidden absolute top-full mt-2 right-0 rounded-xl shadow-xl border overflow-hidden min-w-[130px] z-50 backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-brand-neutral-800/95 border-brand-neutral-700"
                      : "bg-white/95 border-brand-neutral-200"
                  }`}
                >
                  <button
                    onClick={() => {
                      setLanguage("fr");
                      document.getElementById('desktop-lang-options')?.classList.add('hidden');
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      language === "fr"
                        ? "bg-brand-primary-600 text-white"
                        : theme === "dark"
                        ? "text-white hover:bg-brand-neutral-700"
                        : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                    }`}
                  >
                    <span>Français</span>
                    {language === "fr" && <CheckCircle className="w-4 h-4 ml-auto" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      document.getElementById('desktop-lang-options')?.classList.add('hidden');
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      language === "en"
                        ? "bg-brand-primary-600 text-white"
                        : theme === "dark"
                        ? "text-white hover:bg-brand-neutral-700"
                        : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                    }`}
                  >
                    <span>English</span>
                    {language === "en" && <CheckCircle className="w-4 h-4 ml-auto" />}
                  </button>
                </div>
              </div>

              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2">
                {t.nav.audit}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-neutral-900">
            <div className="container-max py-6 space-y-4 px-4">
              <a href="#services" onClick={(e) => handleNavClick(e, "services")} className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.services}
              </a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, "how-it-works")} className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.howItWorks}
              </a>
              <a href="#why-automate" onClick={(e) => handleNavClick(e, "why-automate")} className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.advantages}
              </a>
              {/*<a href="#our-projects" className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.projects}
              </a>
              <a href="#testimonials" className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.testimonials}
              </a>*/}
              <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.faq}
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={`block text-sm font-medium transition-colors ${theme === "dark" ? "text-brand-neutral-300 hover:text-brand-primary-400" : "text-brand-neutral-700 hover:text-brand-primary-600"}`}>
                {t.nav.contact}
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-800">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    theme === "dark" 
                      ? "bg-brand-neutral-800 hover:bg-brand-neutral-700 text-brand-secondary-400" 
                      : "bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-neutral-600"
                  }`}
                >
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
                <div className="relative">
                  <button
                    onClick={() => {
                      const options = document.getElementById('mobile-lang-options');
                      if (options) {
                        options.classList.toggle('hidden');
                      }
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-brand-neutral-800 text-white hover:bg-brand-neutral-700"
                        : "bg-brand-neutral-100 text-brand-neutral-700 hover:bg-brand-neutral-200"
                    } focus:outline-none focus:ring-2 focus:ring-brand-primary-500`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="font-semibold">{language.toUpperCase()}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    id="mobile-lang-options"
                    className={`hidden absolute top-full mt-2 right-0 rounded-xl shadow-xl border overflow-hidden min-w-[130px] z-50 ${
                      theme === "dark"
                        ? "bg-brand-neutral-800 border-brand-neutral-700"
                        : "bg-white border-brand-neutral-200"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setLanguage("fr");
                        document.getElementById('mobile-lang-options')?.classList.add('hidden');
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors ${
                        language === "fr"
                          ? "bg-brand-primary-600 text-white"
                          : theme === "dark"
                          ? "text-white hover:bg-brand-neutral-700"
                          : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                      }`}
                    >
                      <span>Français</span>
                      {language === "fr" && <CheckCircle className="w-4 h-4 ml-auto" />}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        document.getElementById('mobile-lang-options')?.classList.add('hidden');
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors ${
                        language === "en"
                          ? "bg-brand-primary-600 text-white"
                          : theme === "dark"
                          ? "text-white hover:bg-brand-neutral-700"
                          : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                      }`}
                     >
                      <span>English</span>
                      {language === "en" && <CheckCircle className="w-4 h-4 ml-auto" />}
                    </button>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2 flex-1">
                  {t.nav.audit}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}
