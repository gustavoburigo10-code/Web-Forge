import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Layout";
import { BrowserFrame, HeroScreen } from "./ui/Mockups";
import { gsap, prefersReducedMotion } from "../lib/anim";

const TITLE_LINES = ["CRIE SITES.", "VENDA SOLUÇÕES."];

/**
 * Primeira dobra: título monumental, subtítulo e mockup cinematográfico.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-hero-tag]", { y: 18, opacity: 0, duration: 0.9 })
        .from(
          "[data-hero-line] > span",
          { yPercent: 118, duration: 1.3, stagger: 0.12 },
          "-=0.55",
        )
        .from(
          "[data-hero-sub]",
          { y: 24, opacity: 0, duration: 1 },
          "-=0.8",
        )
        .from(
          "[data-hero-cta]",
          { y: 20, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.75",
        )
        .from(
          "[data-hero-device]",
          { y: 60, opacity: 0, scale: 0.96, duration: 1.5 },
          "-=1.2",
        )
        .from(
          "[data-hero-meta]",
          { opacity: 0, duration: 1 },
          "-=0.9",
        );
    }, root.current ?? undefined);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="inicio"
      className="grain relative overflow-hidden pt-[104px] pb-20 sm:pt-[120px] lg:min-h-[100svh] lg:pt-[136px] lg:pb-24"
      aria-labelledby="hero-title"
    >
      {/* Iluminação cinematográfica de fundo */}
      <div
        aria-hidden="true"
        data-parallax="-6"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(191,192,195,0.16),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18%] left-[-12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(191,192,195,0.08),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Coluna editorial */}
          <div className="lg:col-span-7">
            <div
              data-hero-tag
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <span className="h-px w-8 bg-silver/60 sm:w-12" aria-hidden="true" />
              <span className="eyebrow text-[0.6rem] text-silver sm:text-[0.6875rem]">
                Web Development · Digital Business · Education
              </span>
            </div>

            <h1
              id="hero-title"
              className="display mt-7 text-[clamp(3.1rem,12.5vw,8.6rem)] leading-[0.86] text-chalk sm:mt-8"
            >
              {TITLE_LINES.map((line, i) => (
                <span
                  key={line}
                  data-hero-line
                  className="block overflow-hidden pb-[0.04em]"
                >
                  <span className={`block ${i === 1 ? "outline-text" : ""}`}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              data-hero-sub
              className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Aprenda a criar sites profissionais com inteligência artificial,
              publicar seus projetos e apresentar seus serviços para potenciais
              clientes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                data-hero-cta
                href="#curso"
                className="btn-metal inline-flex items-center gap-2 border border-silver/70 bg-silver px-7 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase"
              >
                Conhecer o curso
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                data-hero-cta
                href="#aprender"
                className="btn-metal inline-flex items-center gap-2 border border-hairline px-7 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-chalk uppercase transition-colors duration-300 hover:border-silver/60"
              >
                Explorar conteúdo
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div
              data-hero-meta
              className="mt-12 hidden max-w-xl items-center gap-6 border-t border-hairline pt-6 lg:flex"
              aria-hidden="true"
            >
              {[
                ["06", "Módulos práticos"],
                ["04", "Etapas do processo"],
                ["IA", "Processo assistido"],
              ].map(([big, small]) => (
                <div key={small} className="flex items-baseline gap-3">
                  <span className="display text-2xl text-chalk">{big}</span>
                  <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
                    {small}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup cinematográfico */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-8 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(191,192,195,0.2),transparent_70%)] blur-2xl"
            />
            <div
              data-hero-device
              data-parallax="7"
              className="relative mx-auto max-w-[560px]"
            >
              <div className="anim-float">
                <BrowserFrame url="projetodemonstrativo.com" className="rotate-[-0.6deg]">
                  <HeroScreen />
                </BrowserFrame>
              </div>

              {/* Reflexo metálico no plano inferior */}
              <div
                aria-hidden="true"
                className="pointer-events-none mx-auto mt-3 h-24 w-[92%] bg-gradient-to-b from-silver/22 to-transparent blur-md [mask-image:linear-gradient(to_bottom,#000,transparent)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-4 h-px bg-gradient-to-r from-transparent via-silver/50 to-transparent"
              />
            </div>

            {/* Etiqueta flutuante do mockup */}
            <span
              aria-hidden="true"
              className="anim-float-slow absolute -left-2 top-6 hidden border border-hairline bg-graphite/90 px-3 py-2 text-[0.6rem] tracking-[0.18em] text-silver uppercase backdrop-blur-sm sm:block lg:-left-6"
            >
              Mockup conceitual
            </span>
          </div>
        </div>
      </Container>

      {/* Indicador de rolagem */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <span className="eyebrow text-[0.55rem] text-muted">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-hairline">
          <span className="anim-scroll-cue absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent to-silver" />
        </span>
      </div>
    </section>
  );
}
