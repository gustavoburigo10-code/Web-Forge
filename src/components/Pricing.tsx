import { ArrowUpRight, Info } from "lucide-react";
import { Container, SectionLabel, TitleLines } from "./ui/Layout";
import { course, isCheckoutLive, offerDetails } from "../config/course";

/**
 * Oferta: card central com preço configurável e estado do checkout Kiwify.
 */
export default function Pricing() {
  return (
    <section
      id="oferta"
      className="grain relative overflow-hidden border-t border-hairline/70 bg-graphite py-24 sm:py-28 lg:py-36"
      aria-labelledby="offer-title"
    >
      {/* Iluminação prateada */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(191,192,195,0.16),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        data-parallax="-4"
        className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(191,192,195,0.1),transparent_65%)] blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Seu próximo projeto começa aqui</SectionLabel>
          </div>
          <TitleLines
            lines={["COMPRE O CONHECIMENTO.", "CONSTRUA A HABILIDADE."]}
            className="mt-8 text-[clamp(1.9rem,5.4vw,4rem)]"
          />
        </div>

        {/* Card central */}
        <div
          data-reveal
          className="relative mx-auto mt-14 max-w-2xl border border-silver/30 bg-ink/95 p-7 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:p-10"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-silver/70 to-transparent"
          />

          <div className="flex flex-col gap-6 border-b border-hairline pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow text-[0.6rem] text-silver">Produto</span>
              <h3 className="display mt-3 text-xl leading-tight text-chalk sm:text-2xl">
                WebForge
                <span className="mt-1 block text-sm font-normal tracking-[0.14em] text-muted uppercase font-body">
                  Formação em Criação e Venda de Sites
                </span>
              </h3>
            </div>
            <div className="sm:text-right">
              <span className="eyebrow text-[0.6rem] text-muted">
                Preço inicial
              </span>
              <p
                data-price-reveal
                className="display metal mt-2 text-[clamp(2.4rem,7vw,3.4rem)] leading-none"
              >
                {course.price}
              </p>
            </div>
          </div>

          {/* Informações verificáveis da oferta */}
          <dl className="mt-7 space-y-4">
            {offerDetails.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 border-b border-hairline/60 pb-4 sm:grid-cols-[190px_1fr] sm:gap-6"
              >
                <dt className="text-[0.7rem] font-medium tracking-[0.14em] text-silver uppercase">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Botão / estado do checkout */}
          <div className="mt-9">
            {isCheckoutLive ? (
              <a
                href={course.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metal flex w-full items-center justify-center gap-2 border border-silver/70 bg-silver px-6 py-5 text-center text-[0.78rem] font-semibold tracking-[0.18em] text-ink uppercase"
              >
                Quero começar agora
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="flex w-full cursor-not-allowed items-center justify-center gap-2 border border-hairline bg-graphite px-6 py-5 text-[0.78rem] font-semibold tracking-[0.18em] text-muted uppercase"
                >
                  Inscrições em preparação
                </button>
                <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-muted">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  O link oficial do checkout será disponibilizado em breve. Nenhum
                  pagamento é processado nesta página.
                </p>
              </>
            )}
          </div>

          <p className="mt-6 text-center text-[0.7rem] leading-relaxed text-muted/80">
            Pagamento e acesso às aulas processados pela Kiwify. Esta página não
            coleta dados bancários.
          </p>
        </div>
      </Container>
    </section>
  );
}
