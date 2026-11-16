import { ArrowUpRight, BookOpenText, Hammer, Handshake } from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { aboutCards } from "../data/content";

const ICONS = [BookOpenText, Hammer, Handshake];

/**
 * Seção editorial: o que é a WebForge + três pilares.
 */
export default function About() {
  return (
    <section
      id="curso"
      className="grain relative border-t border-hairline/70 py-24 sm:py-28 lg:py-36"
      aria-labelledby="about-title"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel index="01">O que é a WebForge</SectionLabel>
            <p
              data-reveal
              data-delay="0.1"
              className="mt-8 max-w-sm text-sm leading-relaxed text-muted"
            >
              Um treinamento prático, do primeiro rascunho à apresentação
              comercial do projeto — construído para ser aplicado desde as
              primeiras semanas.
            </p>
          </div>

          <div className="lg:col-span-8">
            <TitleLines
              lines={["NÃO É APENAS", "SOBRE CRIAR SITES."]}
              className="text-[clamp(2.2rem,6.4vw,4.6rem)]"
            />
            <p
              data-reveal
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              A WebForge é um treinamento prático desenvolvido para ensinar o
              processo de criação de sites com inteligência artificial, desde a
              primeira ideia até a publicação e apresentação comercial do
              projeto.
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div
          data-stagger
          className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutCards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={card.id}
                className="card-sheen group relative flex min-h-[280px] flex-col justify-between bg-ink p-7 transition-colors duration-500 hover:bg-graphite sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="display text-sm tracking-[0.2em] text-silver/70 tabular-nums">
                    {card.id}
                  </span>
                  <Icon
                    className="h-5 w-5 text-silver transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-14">
                  <h3 className="display text-2xl text-chalk sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.text}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-silver/70 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </div>

        <a
          href="#projetos"
          data-reveal
          className="nav-link mt-10 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-silver uppercase"
        >
          Ver projetos demonstrativos
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
