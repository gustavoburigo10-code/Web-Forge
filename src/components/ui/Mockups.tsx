import type { ReactNode } from "react";
import type { ProjectVariant } from "../../data/content";

/** Moldura de navegador usada nos mockups. */
export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden border border-hairline bg-[#1b1e25] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-hairline bg-[#20232a] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#4a4d56]" />
          <span className="h-2 w-2 rounded-full bg-[#4a4d56]" />
          <span className="h-2 w-2 rounded-full bg-[#4a4d56]" />
        </span>
        <span className="flex-1 truncate rounded-sm border border-hairline/80 bg-ink/60 px-3 py-1 text-[0.6rem] tracking-[0.14em] text-muted uppercase">
          {url}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

/**
 * Tela do hero: projeto demonstrativo conceitual (não é trabalho de cliente).
 * Composição minimalista em escala de cinza com brilho prateado.
 */
export function HeroScreen() {
  return (
    <div className="relative bg-[#101216]">
      <div className="flex items-center justify-between border-b border-hairline/70 px-5 py-3">
        <span className="display text-[0.7rem] tracking-[0.3em] text-chalk">
          ESTÚDIO
        </span>
        <span className="hidden gap-4 sm:flex" aria-hidden="true">
          <span className="h-1.5 w-10 rounded-full bg-[#3d404a]" />
          <span className="h-1.5 w-10 rounded-full bg-[#3d404a]" />
          <span className="h-1.5 w-10 rounded-full bg-[#3d404a]" />
        </span>
        <span className="rounded-full border border-silver/40 px-2.5 py-1 text-[0.5rem] tracking-[0.2em] text-silver uppercase">
          Contato
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4 p-5 sm:p-7">
        <div className="col-span-3 flex flex-col justify-between gap-6">
          <div>
            <span className="eyebrow text-[0.5rem] text-silver/70">
              Projeto demonstrativo
            </span>
            <p className="display mt-3 text-[clamp(1.4rem,3.4vw,2.6rem)] leading-[0.95] text-chalk">
              FORMA,
              <br />
              LUZ E
              <br />
              <span className="outline-text">MATERIAL</span>
            </p>
          </div>
          <div className="space-y-2" aria-hidden="true">
            <span className="block h-1.5 w-full rounded-full bg-[#2c2f37]" />
            <span className="block h-1.5 w-4/5 rounded-full bg-[#2c2f37]" />
            <span className="block h-1.5 w-3/5 rounded-full bg-[#2c2f37]" />
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <div className="relative flex-1 overflow-hidden border border-hairline bg-gradient-to-br from-[#4a4d55] via-[#2f323a] to-[#191c22]">
            <span className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-silver/50 to-transparent" />
            <span className="absolute bottom-3 left-3 h-8 w-8 border border-silver/40" />
          </div>
          <div className="relative h-20 overflow-hidden border border-hairline bg-gradient-to-tr from-[#23262e] to-[#3c4049]">
            <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-silver/30" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-hairline/70 px-5 py-3">
        <span className="text-[0.55rem] tracking-[0.2em] text-muted uppercase">
          Scroll
        </span>
        <span className="h-px w-24 bg-gradient-to-r from-silver/60 to-transparent" />
        <span className="text-[0.55rem] tracking-[0.2em] text-muted uppercase">
          2026
        </span>
      </div>
    </div>
  );
}

/** Mockups conceituais da galeria de projetos. */
export function ProjectVisual({ variant }: { variant: ProjectVariant }) {
  return (
    <div className="aspect-[16/11] w-full overflow-hidden bg-[#14161b]">
      {variant === "arquitetura" && <ArquiteturaVisual />}
      {variant === "clinica" && <ClinicaVisual />}
      {variant === "tecnologia" && <TecnologiaVisual />}
    </div>
  );
}

function ArquiteturaVisual() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-hairline/70 px-4 py-2.5">
        <span className="display text-[0.55rem] tracking-[0.28em] text-chalk">
          ARO
        </span>
        <span className="flex gap-3" aria-hidden="true">
          <span className="h-1 w-7 bg-[#3d404a]" />
          <span className="h-1 w-7 bg-[#3d404a]" />
          <span className="h-1 w-7 bg-[#3d404a]" />
        </span>
      </div>
      <div className="relative flex-1 bg-gradient-to-br from-[#54575f] via-[#33363e] to-[#1b1e25]">
        <span className="absolute inset-x-6 top-1/2 h-px bg-silver/40" />
        <span className="absolute bottom-4 left-4 display text-[clamp(0.9rem,2.4vw,1.5rem)] leading-none text-chalk/90">
          OBRA 01
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3" aria-hidden="true">
        <span className="h-9 border border-hairline bg-[#22252d]" />
        <span className="h-9 border border-hairline bg-[#2a2d35]" />
        <span className="h-9 border border-hairline bg-[#22252d]" />
      </div>
    </div>
  );
}

function ClinicaVisual() {
  return (
    <div className="flex h-full flex-col bg-[#ececea]">
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
        <span className="display text-[0.55rem] tracking-[0.24em] text-[#17191f]">
          LUME
        </span>
        <span className="rounded-full bg-[#17191f] px-2.5 py-1 text-[0.45rem] tracking-[0.16em] text-[#f0f0f1] uppercase">
          Agendar
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 px-4">
        <span className="display text-[clamp(0.85rem,2.2vw,1.35rem)] leading-none text-[#17191f]">
          CUIDADO
        </span>
        <span className="display text-[clamp(0.85rem,2.2vw,1.35rem)] leading-none text-[#7d7f85]">
          EM DETALHE
        </span>
        <span className="mt-1 h-1 w-16 bg-[#17191f]" />
        <span className="mt-1 h-1.5 w-2/3 rounded-full bg-black/15" />
        <span className="h-1.5 w-1/2 rounded-full bg-black/10" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-3" aria-hidden="true">
        <span className="h-8 rounded-sm border border-black/10 bg-white" />
        <span className="h-8 rounded-sm border border-black/10 bg-white" />
        <span className="h-8 rounded-sm border border-black/10 bg-white" />
      </div>
    </div>
  );
}

function TecnologiaVisual() {
  return (
    <div className="flex h-full flex-col bg-[#14161b]">
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rotate-45 bg-silver" />
          <span className="display text-[0.55rem] tracking-[0.24em] text-chalk">
            NEXO
          </span>
        </span>
        <span className="h-1.5 w-14 rounded-full bg-[#3d404a]" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2 p-3">
        <div className="col-span-2 flex flex-col justify-between border border-hairline bg-[#1c1f26] p-3">
          <span className="h-1.5 w-2/3 rounded-full bg-[#3d404a]" />
          <span className="display text-[clamp(0.75rem,1.9vw,1.1rem)] leading-none text-chalk">
            PAINEL
          </span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-4 flex-1 bg-silver/25" />
            <span className="h-4 flex-1 bg-silver/15" />
            <span className="h-4 flex-1 bg-silver/10" />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex-1 border border-hairline bg-[#1c1f26]" />
          <span className="flex-1 border border-hairline bg-gradient-to-br from-[#2f323a] to-[#1c1f26]" />
        </div>
      </div>
      <div className="border-t border-hairline px-4 py-2" aria-hidden="true">
        <span className="block h-1.5 w-full rounded-full bg-[#262932]" />
      </div>
    </div>
  );
}
