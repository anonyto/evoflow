import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// Import client logos
import logo1 from "../assets/clients/1630644930593.jpg";
import logoCloud from "../assets/clients/Logo-cloud.svg";
import logoFlow from "../assets/clients/flowPink2.webp";
import logoPng from "../assets/clients/logo1-CjbS2CUt.png";
import logoTtb from "../assets/clients/ttb.png";

const clientLogos = [
  { name: "ThinX Power Bank", src: logo1, hasBackground: true },
  { name: "Cloud Conseils", src: logoCloud, hasBackground: false },
  { name: "Flow", src: logoFlow, hasBackground: false },
  { name: "Partner", src: logoPng, hasBackground: false },
  { name: "TTB", src: logoTtb, hasBackground: false },
];

export default function ClientsSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  // Triple the logos for smooth infinite loop
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section
      id="clients"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary-500/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="container-max px-4 mb-14 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary-600/10 border border-brand-primary-500/20 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-400 animate-pulse" />
          <span className="text-brand-primary-300 text-sm font-medium tracking-wide">
            {t.clients.tag}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          {t.clients.title}
        </h2>
        <p className="text-brand-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {t.clients.subtitle}
        </p>
      </div>

      {/* Scrolling Logos Band */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0f172a, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-0 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0f172a, transparent)" }}
        />

        {/* Marquee */}
        <div className="flex items-center clients-marquee">
          <div className="flex items-center gap-20 md:gap-28 clients-marquee-track">
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto max-w-[140px] object-contain"
                  style={
                    logo.hasBackground
                      ? {
                          /* JPG with white bg: invert makes bg black & logo white, screen blend makes black transparent */
                          filter: "invert(1)",
                          mixBlendMode: "screen" as const,
                        }
                      : {
                          filter: "brightness(0) invert(1)",
                        }
                  }
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary-500/40 to-transparent" />
    </section>
  );
}
