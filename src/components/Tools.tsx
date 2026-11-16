import {
  GitBranch,
  PenTool,
  Rocket,
  Sparkles,
  Terminal,
  UploadCloud,
} from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { tools } from "../data/content";

const ICONS = {
  terminal: Terminal,
  git: GitBranch,
  rocket: Rocket,
  sparkles: Sparkles,
  pen: PenTool,
  upload: UploadCloud,
} as const;

/**
 * Ferramentas e tecnologias do processo criativo.
 */
export default function Tools() {
  return (
    <section
      id="ferramentas"
      className="grain relative border-t border-hairline/70 py-24 sm:py-28 lg:py-36"
      aria-labelledby="tools-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">Ferramentas</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <TitleLines
              lines={["AS FERRAMENTAS DO SEU", "NOVO PROCESSO CRIATIVO."]}
              className="text-[clamp(2rem,5.4vw,4rem)]"
            />
            <p data-reveal className="mt-7 max-w-xl text-sm leading-relaxed text-muted">
              Referências de ferramentas apresentadas no treinamento. Não há
              parceria, patrocínio ou vínculo comercial com as marcas citadas.
            </p>
          </div>
        </div>

        <div
          data-stagger
          className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
        >
          {tools.map((tool, i) => {
            const Icon = ICONS[tool.icon];
            return (
              <div
                key={tool.name}
                className="group relative flex flex-col gap-5 bg-ink p-7 transition-colors duration-500 hover:bg-graphite sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-hairline text-silver transition-all duration-500 group-hover:border-silver/60 group-hover:bg-silver group-hover:text-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className="display text-xs tracking-[0.2em] text-hairline tabular-nums transition-colors duration-500 group-hover:text-silver/70">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="display text-lg text-chalk">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {tool.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
