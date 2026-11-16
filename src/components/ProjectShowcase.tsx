import { ArrowUpRight, Eye } from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { BrowserFrame, ProjectVisual } from "./ui/Mockups";
import { projects } from "../data/content";

/**
 * Galeria de projetos demonstrativos (mockups conceituais).
 */
export default function ProjectShowcase() {
  return (
    <section
      id="projetos"
      className="grain relative border-t border-hairline/70 py-24 sm:py-28 lg:py-36"
      aria-labelledby="projects-title"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="02">Selected Projects</SectionLabel>
            <TitleLines
              lines={["VEJA O QUE VOCÊ", "PODE APRENDER A CRIAR."]}
              className="mt-8 text-[clamp(2rem,5.6vw,4.2rem)]"
            />
          </div>
          <p
            data-reveal
            className="max-w-xs text-sm leading-relaxed text-muted md:text-right"
          >
            Mockups conceituais criados para demonstrar o tipo de projeto que
            você aprende a desenvolver no curso.
          </p>
        </div>

        <div
          data-stagger
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col border border-hairline bg-ink transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-silver/40"
            >
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <BrowserFrame url={`${project.variant}.demonstracao`}>
                    <ProjectVisual variant={project.variant} />
                  </BrowserFrame>
                </div>
                <span className="absolute left-3 top-3 border border-hairline bg-ink/85 px-2.5 py-1 text-[0.55rem] tracking-[0.18em] text-silver uppercase backdrop-blur-sm">
                  Demonstração
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="display text-xs tracking-[0.22em] text-silver/70 tabular-nums">
                    Projeto {project.id}
                  </span>
                  <span className="eyebrow text-[0.55rem] text-muted">
                    {project.category}
                  </span>
                </div>

                <h3 className="display mt-4 text-xl text-chalk sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start border-b border-hairline pb-1 text-[0.7rem] font-semibold tracking-[0.16em] text-chalk uppercase transition-colors duration-300 hover:border-silver hover:text-silver"
                  >
                    Visualizar
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    className="mt-6 inline-flex items-center gap-2 self-start border-b border-hairline/60 pb-1 text-[0.7rem] font-semibold tracking-[0.16em] text-muted uppercase"
                    title="Link de visualização será configurado quando o projeto estiver publicado"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    Em breve
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
