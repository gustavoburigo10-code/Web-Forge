import type { ReactNode } from "react";

/** Container editorial padrão. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** Etiqueta numerada de seção. */
export function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4" data-reveal>
      <span className="h-px w-10 bg-silver/60 sm:w-16" aria-hidden="true" />
      {index && (
        <span className="eyebrow text-silver/70 tabular-nums">{index}</span>
      )}
      <span className="eyebrow text-silver">{children}</span>
    </div>
  );
}

/** Título com linhas mascaradas para revelação progressiva. */
export function TitleLines({
  lines,
  className = "",
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`display leading-[0.88] text-chalk ${className}`}
      data-title-lines
    >
      {lines.map((line) => (
        <span
          key={line}
          className="block overflow-hidden pb-[0.06em]"
          data-title-line
        >
          <span className="block">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
