import { ArrowUp, Mail } from "lucide-react";
import { Container } from "./ui/Layout";
import { navLinks, site } from "../config/site";
import { course } from "../config/course";

/**
 * Rodapé editorial.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden border-t border-hairline/70 bg-ink pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-silver/40 to-transparent"
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Assinatura da marca */}
          <div className="lg:col-span-6">
            <p className="display text-[clamp(3rem,11vw,7.5rem)] leading-[0.85] text-chalk">
              WEBFORGE<span className="metal">.</span>
            </p>
            <p className="eyebrow mt-5 text-silver">{site.tagline}</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Marca educacional dedicada ao ensino de criação de sites com
              inteligência artificial e à prestação de serviços digitais.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-3 border border-hairline px-5 py-3.5 text-sm text-chalk transition-colors duration-300 hover:border-silver/60 hover:text-silver"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>

          {/* Navegação e informações */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            <nav aria-label="Rodapé">
              <h2 className="eyebrow text-[0.6rem] text-silver">Navegação</h2>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-300 hover:text-chalk"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow text-[0.6rem] text-silver">Informações</h2>
              <ul className="mt-5 space-y-3">
                <li>
                  {course.privacyUrl ? (
                    <a
                      href={course.privacyUrl}
                      className="text-sm text-muted transition-colors duration-300 hover:text-chalk"
                    >
                      Política de privacidade
                    </a>
                  ) : (
                    <span className="text-sm text-muted/70">
                      Política de privacidade (em breve)
                    </span>
                  )}
                </li>
                <li>
                  {course.termsUrl ? (
                    <a
                      href={course.termsUrl}
                      className="text-sm text-muted transition-colors duration-300 hover:text-chalk"
                    >
                      Termos de uso
                    </a>
                  ) : (
                    <span className="text-sm text-muted/70">
                      Termos de uso (em breve)
                    </span>
                  )}
                </li>
                <li>
                  <a
                    href="#oferta"
                    className="text-sm text-muted transition-colors duration-300 hover:text-chalk"
                  >
                    Oferta do curso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-[0.6rem] text-silver">Produtor</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>{site.producer.name}</li>
                {site.producer.document && <li>{site.producer.document}</li>}
                {site.producer.address && <li>{site.producer.address}</li>}
              </ul>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-16 flex flex-col gap-5 border-t border-hairline py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted">
            © {year} {site.copyrightName}. Todos os direitos reservados.
          </p>
          <p className="max-w-lg text-xs leading-relaxed text-muted/80">
            Este site não promete resultados financeiros. Os resultados
            comerciais dependem da prática e das condições de cada mercado.
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 self-start text-[0.7rem] font-semibold tracking-[0.16em] text-silver uppercase sm:self-auto"
          >
            Voltar ao topo
            <span className="grid h-8 w-8 place-items-center border border-hairline transition-colors duration-300 group-hover:border-silver">
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
