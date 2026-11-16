import {
  BookOpen,
  CheckSquare,
  LayoutTemplate,
  Layers,
  MessageSquareText,
  PlayCircle,
} from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { materials } from "../data/content";

const ICONS = {
  play: PlayCircle,
  book: BookOpen,
  layers: Layers,
  message: MessageSquareText,
  check: CheckSquare,
  layout: LayoutTemplate,
} as const;

/**
 * Materiais inclusos no treinamento.
 */
export default function Materials() {
  return (
    <section
      id="materiais"
      className="grain relative border-t border-hairline/70 py-24 sm:py-28 lg:py-36"
      aria-labelledby="materials-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="06">Materiais</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <TitleLines
              lines={["CONHECIMENTO QUE", "VAI ALÉM DAS AULAS."]}
              className="text-[clamp(2rem,5.6vw,4.2rem)]"
            />
            <p data-reveal className="mt-7 max-w-xl text-sm leading-relaxed text-muted">
              Materiais de apoio organizados para acompanhar cada módulo. A
              relação final e as condições de entrega são informadas na página
              oficial do checkout.
            </p>
          </div>
        </div>

        <div
          data-stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {materials.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article
                key={item.title}
                className="card-sheen group flex flex-col gap-5 border border-hairline bg-ink p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-silver/40"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="h-6 w-6 text-silver transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 border border-hairline transition-colors duration-500 group-hover:border-silver/50"
                  />
                </div>
                <div>
                  <h3 className="display text-base leading-snug text-chalk sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
