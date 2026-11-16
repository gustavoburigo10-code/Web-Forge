import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { faq } from "../data/content";

/**
 * Perguntas frequentes em acordeões animados.
 */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="grain relative border-t border-hairline/70 py-24 sm:py-28 lg:py-36"
      aria-labelledby="faq-title"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel index="07">Dúvidas</SectionLabel>
            <TitleLines
              lines={["PERGUNTAS", "FREQUENTES."]}
              className="mt-8 text-[clamp(2rem,5vw,3.4rem)]"
            />
            <p data-reveal className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Não encontrou o que procura? Escreva para{" "}
              <a
                href="mailto:contato@webforge.com.br"
                className="border-b border-hairline text-silver transition-colors hover:border-silver"
              >
                contato@webforge.com.br
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-8" data-stagger>
            <div className="border-t border-hairline">
              {faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-b border-hairline">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span
                          className={`text-base transition-colors duration-300 sm:text-lg ${
                            isOpen
                              ? "text-chalk"
                              : "text-muted group-hover:text-chalk"
                          }`}
                        >
                          {item.q}
                        </span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center border transition-all duration-500 ${
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
                      id={`faq-${i}`}
                      data-open={isOpen}
                      className="accordion-panel"
                    >
                      <div>
                        <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              data-reveal
              className="mt-8 border border-hairline bg-graphite/40 p-5 text-xs leading-relaxed text-muted"
            >
              Os resultados comerciais dependem da prática, do seu
              desenvolvimento pessoal e das condições de cada mercado. A
              WebForge não garante vendas, faturamento ou qualquer resultado
              financeiro específico.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
