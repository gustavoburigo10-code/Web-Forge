import { useState } from "react";
import {
  BookOpen,
  Bot,
  CheckSquare,
  Handshake,
  Megaphone,
  Rocket,
  Plus,
} from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { modules } from "../data/content";

const ICONS = [BookOpen, Bot, Rocket, Megaphone, Handshake, CheckSquare];

/**
 * Módulos do curso em acordeões expansíveis.
 */
export default function CourseModules() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section
      id="aprender"
      className="grain relative border-t border-hairline/70 py-24 sm:py-28 lg:py-36"
      aria-labelledby="modules-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="03">Conteúdo</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <TitleLines
              lines={["DO PRIMEIRO SITE À", "ENTREGA PROFISSIONAL."]}
              className="text-[clamp(2rem,5.6vw,4.2rem)]"
            />
          </div>
        </div>

        <div className="mt-14 border-t border-hairline" data-stagger>
          {modules.map((mod, i) => {
            const Icon = ICONS[i];
            const isOpen = open === mod.id;
            return (
              <div key={mod.id} className="border-b border-hairline">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : mod.id)}
                    aria-expanded={isOpen}
                    aria-controls={`modulo-${mod.id}`}
                    className="group flex w-full items-center gap-5 py-7 text-left transition-colors duration-400 hover:bg-graphite/40 sm:gap-8 sm:py-9"
                  >
                    <span
                      className={`display w-14 shrink-0 text-[clamp(1.6rem,4vw,2.6rem)] leading-none tabular-nums transition-colors duration-400 sm:w-24 ${
                        isOpen ? "text-chalk" : "text-hairline group-hover:text-silver/70"
                      }`}
                    >
                      {mod.id}
                    </span>

                    <span className="flex min-w-0 flex-1 items-center gap-4">
                      <Icon
                        className={`hidden h-5 w-5 shrink-0 transition-colors duration-400 sm:block ${
                          isOpen ? "text-silver" : "text-muted"
                        }`}
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                      <span
                        className={`display truncate text-lg transition-colors duration-400 sm:text-2xl ${
                          isOpen ? "text-chalk" : "text-muted group-hover:text-chalk"
                        }`}
                      >
                        {mod.title}
                      </span>
                    </span>

                    <span className="hidden max-w-[420px] flex-1 text-right text-sm leading-relaxed text-muted lg:block">
                      {mod.summary}
                    </span>

                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-silver bg-silver text-ink"
                          : "border-hairline text-silver group-hover:border-silver/60"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`modulo-${mod.id}`}
                  data-open={isOpen}
                  className="accordion-panel"
                >
                  <div>
                    <div className="grid gap-4 pb-9 sm:grid-cols-2 sm:gap-8 sm:pl-24 lg:pl-[7.5rem]">
                      <p className="text-sm leading-relaxed text-muted lg:hidden">
                        {mod.summary}
                      </p>
                      <ul className="space-y-3">
                        {mod.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-3 text-sm text-chalk/85"
                          >
                            <span
                              className="mt-2 h-1 w-4 shrink-0 bg-silver/70"
                              aria-hidden="true"
                            />
                            {topic}
                          </li>
                        ))}
                      </ul>
                      <div className="hidden border border-hairline bg-graphite/50 p-5 lg:block">
                        <span className="eyebrow text-[0.6rem] text-silver">
                          Módulo {mod.id}
                        </span>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {mod.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
