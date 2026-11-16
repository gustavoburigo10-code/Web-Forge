import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { methodology } from "../data/content";

/**
 * Linha do tempo horizontal (desktop) e vertical (mobile).
 */
export default function Methodology() {
  return (
    <section
      id="metodo"
      className="grain relative overflow-hidden border-t border-hairline/70 bg-graphite/40 py-24 sm:py-28 lg:py-36"
      aria-labelledby="method-title"
    >
      <div
        aria-hidden="true"
        data-parallax="-5"
        className="pointer-events-none absolute right-[-15%] top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(191,192,195,0.1),transparent_65%)] blur-2xl"
      />

      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="05">Metodologia</SectionLabel>
            <TitleLines
              lines={["UM PROCESSO.", "QUATRO ETAPAS."]}
              className="mt-8 text-[clamp(2.2rem,6vw,4.4rem)]"
            />
          </div>
          <p data-reveal className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
            Sequência apresentada no curso, do entendimento inicial à abordagem
            de potenciais clientes.
          </p>
        </div>

        {/* Timeline desktop */}
        <div className="relative mt-20 hidden lg:block" data-stagger>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-[7px] h-px bg-hairline"
          />
          <span
            aria-hidden="true"
            data-method-progress
            className="absolute inset-x-0 top-[7px] h-px origin-left scale-x-0 bg-gradient-to-r from-silver via-silver/70 to-transparent"
          />

          <ol className="relative grid grid-cols-4 gap-8">
            {methodology.map((step) => (
              <li key={step.id} className="group">
                <span className="relative block h-3.5 w-3.5 border border-hairline bg-ink transition-all duration-500 group-hover:border-silver">
                  <span className="absolute inset-[3px] scale-0 bg-silver transition-transform duration-500 group-hover:scale-100" />
                </span>
                <span className="display mt-8 block text-sm tracking-[0.24em] text-silver/70 tabular-nums">
                  {step.id}
                </span>
                <h3 className="display mt-3 text-2xl text-chalk xl:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Timeline mobile / tablet */}
        <ol className="relative mt-14 space-y-10 border-l border-hairline pl-7 lg:hidden" data-stagger>
          {methodology.map((step) => (
            <li key={step.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.75rem+5px)] top-1.5 h-2.5 w-2.5 rotate-45 border border-silver bg-ink"
              />
              <span className="display block text-xs tracking-[0.24em] text-silver/70 tabular-nums">
                {step.id}
              </span>
              <h3 className="display mt-2 text-2xl text-chalk">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
