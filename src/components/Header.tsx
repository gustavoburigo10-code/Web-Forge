import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../config/site";
import { course, isCheckoutLive } from "../config/course";

/**
 * Barra de navegação fixa: fundo semitransparente com blur ao rolar,
 * animações suaves nos links e menu responsivo.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks
        .map((l) => document.querySelector<HTMLElement>(l.href))
        .filter(Boolean) as HTMLElement[];
      let current: HTMLElement | null = null;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        if (sections[i].getBoundingClientRect().top <= 140) {
          current = sections[i];
          break;
        }
      }
      if (current) setActive(`#${current.id}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goToCheckout = () => {
    if (isCheckoutLive) {
      window.open(course.checkoutUrl, "_blank", "noopener,noreferrer");
    } else {
      document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline/70 bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logotipo tipográfico */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="WebForge — início"
        >
          <span
            className="grid h-7 w-7 place-items-center border border-hairline bg-graphite transition-colors duration-300 group-hover:border-silver/60"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-white to-silver" />
          </span>
          <span className="display text-[1.35rem] leading-none tracking-[0.12em] text-chalk">
            WEBFORGE
          </span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-active={active === link.href}
              className="nav-link text-[0.8rem] font-medium tracking-[0.14em] text-muted uppercase transition-colors duration-300 hover:text-chalk data-[active=true]:text-chalk"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goToCheckout}
            className="btn-metal hidden border border-silver/70 bg-silver px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase sm:block"
          >
            Começar agora
            <ArrowUpRight className="ml-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-10 w-10 place-items-center border border-hairline text-chalk transition-colors duration-300 hover:border-silver/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-hairline/60 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col px-5 py-4 sm:px-8"
          aria-label="Menu móvel"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-hairline/50 py-4 text-sm tracking-[0.16em] text-muted uppercase transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {link.label}
              <span className="text-[0.65rem] text-silver/60 tabular-nums">
                0{i + 1}
              </span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              goToCheckout();
            }}
            className="btn-metal mt-5 border border-silver/70 bg-silver px-5 py-3.5 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase"
          >
            Começar agora
            <ArrowUpRight className="ml-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}
