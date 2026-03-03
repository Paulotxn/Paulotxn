import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#formacoes", label: "Formações" },
  { href: "#espetaculos", label: "Espetáculos" },
  { href: "#audiovisual", label: "Audiovisual" },
  { href: "#fotografia", label: "Fotografia" },
  { href: "#exposicao", label: "Exposição" },
];

const menuId = "mobile-nav-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const defaultTitle = "Nicoli Rizzoli — Atriz & Artista Visual";
    if (!activeSection) {
      document.title = defaultTitle;
      return;
    }

    const currentLink = navLinks.find(link => link.href === activeSection);
    if (currentLink) {
      document.title = `${currentLink.label} — Nicoli Rizzoli`;
    } else {
      document.title = defaultTitle;
    }
  }, [activeSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Focus management
    if (mobileOpen) {
      const menu = document.getElementById(menuId);
      const firstLink = menu?.querySelector("a") as HTMLElement;
      firstLink?.focus();
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl tracking-[0.15em] text-off-white hover:text-gold transition-colors duration-300"
          aria-label="Nicoli Rizzoli — Voltar ao topo"
        >
          N.RIZZOLI
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href ? "page" : undefined}
              className={`relative px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === link.href
                ? "text-gold"
                : "text-warm-gray hover:text-off-white"
                }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleBtnRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
        >
          <span
            aria-hidden="true"
            className={`block w-5 h-[1.5px] bg-off-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
          />
          <span
            aria-hidden="true"
            className={`block w-5 h-[1.5px] bg-off-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""
              }`}
          />
          <span
            aria-hidden="true"
            className={`block w-5 h-[1.5px] bg-off-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id={menuId}
        aria-label="Menu móvel"
        aria-hidden={!mobileOpen}
        className={`md:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-2 ${mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? undefined : -1}
            aria-current={activeSection === link.href ? "page" : undefined}
            className="font-mono text-sm tracking-[0.25em] uppercase text-warm-gray hover:text-gold transition-all duration-300 py-3"
            style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
